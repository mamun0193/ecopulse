import { NextRequest } from "next/server";
import { withErrorHandler } from "@/middleware/errorHandler";
import { isValidUrl, normalizeUrl } from "@/helpers/validation";
import { generateSuggestions } from "@/lib/suggestions";
import { AnalysisResult } from "@/app/types/analysis";
import { bytesToKB, bytesToMB, computeImpactsFromPageSizeMB, roundTo } from "@/lib/Calculations/calculations";
import { trackPageResources } from "@/lib/resourceAnalyzer";
import { calculateEcoScore } from "@/lib/Calculations/ecoScore";
import dbConnect from "@/db/dbConfig";
import Scan from "@/models/Scan";
import { rateLimit } from "@/lib/rateLimit";

// Vercel serverless function config
export const maxDuration = 60; // Max 60 seconds for Pro plan, 10 for Hobby

const handler = async (req: NextRequest) => {
    // Apply rate limiting: 10 requests per minute
    const rateLimitResponse = rateLimit(req, { maxRequests: 10, windowMs: 60 * 1000 });
    if (rateLimitResponse) {
        return rateLimitResponse;
    }

    const reqBody = await req.json();
    const { url } = reqBody;
    if (!url || typeof url !== "string") {
        return new Response(JSON.stringify({ error: "Missing or invalid 'url' in request body" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    const normalizedUrl = normalizeUrl(url);
    if (!isValidUrl(normalizedUrl)) {
        return new Response(JSON.stringify({ error: "Invalid URL" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    let browser;

    try {
        if (process.env.VERCEL) {
            // For Vercel serverless environment
            const chromium = (await import("@sparticuz/chromium")).default;
            const puppeteer = await import("puppeteer-core");
            
            // Configure chromium for serverless
            chromium.setHeadlessMode = true;
            chromium.setGraphicsMode = false;
            
            const execPath = await chromium.executablePath();
            console.log("[Vercel] Chromium path:", execPath);
            
            browser = await puppeteer.default.launch({
                args: [
                    ...chromium.args,
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-accelerated-2d-canvas',
                    '--no-first-run',
                    '--no-zygote',
                    '--single-process',
                    '--disable-gpu',
                    '--disable-background-networking',
                    '--disable-default-apps',
                    '--disable-extensions',
                    '--disable-sync',
                    '--disable-translate',
                    '--hide-scrollbars',
                    '--metrics-recording-only',
                    '--mute-audio',
                    '--safebrowsing-disable-auto-update',
                ],
                defaultViewport: chromium.defaultViewport,
                executablePath: execPath,
                headless: chromium.headless,
            });
        } else {
            // Execute locally
            const puppeteer = await import("puppeteer");
            browser = await puppeteer.default.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
            });
        }

        const page = await browser.newPage();
        
        // Set a reasonable timeout and viewport
        page.setDefaultNavigationTimeout(30000);
        await page.setViewport({ width: 1280, height: 720 });
        
        // Set user agent to avoid bot detection
        await page.setUserAgent(
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        );


        // Track HTML,CSS,JS,Images, API calls, Third-party scripts

        const pageDomain = new URL(normalizedUrl).hostname;

        const resourceData = await trackPageResources(page, normalizedUrl, pageDomain);


        // Calculations

        const rawPageSizeMB = bytesToMB(resourceData.totalBytes);
        const impacts = computeImpactsFromPageSizeMB(rawPageSizeMB);

        // Build the analysis object first (without suggestions), then generate suggestions
        const response: AnalysisResult = {
            url: normalizedUrl,
            pageSizeMB: roundTo(rawPageSizeMB, 2),
            resources: {
                requestCount: resourceData.requestCount,
                totalBytes: bytesToKB(resourceData.totalBytes),
                html: bytesToKB(resourceData.htmlBytes),
                css: bytesToKB(resourceData.cssBytes),
                js: bytesToKB(resourceData.jsBytes),
                image: bytesToKB(resourceData.imageBytes),
                apiBytes: bytesToKB(resourceData.apiBytes),
                apiCalls: resourceData.apiCalls,
                thirdPartyAPIBytes: bytesToKB(resourceData.thirdPartyAPIBytes),
                thirdPartyAPICalls: resourceData.thirdPartyAPICalls,
            },

            impacts: {
                energyWH: impacts.energyWH,
                carbon: impacts.carbon,
                water: impacts.water,
            },
            suggestions: [],
            ecoScore: calculateEcoScore({
                energyWh: impacts.energyWH,
                carbon: impacts.carbon,
                pageSizeMB: rawPageSizeMB,
                jsMB: bytesToMB(resourceData.jsBytes),
                apiCalls: resourceData.apiCalls,
                thirdPartyRequests: resourceData.thirdPartyAPICalls,
            }),
        };


        // Generate suggestions using the analysis data
        try {
            const suggestions = generateSuggestions(response);
            response.suggestions = suggestions;
        } catch (err) {
            response.suggestions = [];
            console.log(err);

        }

        // Save scan to database
        try {
            await dbConnect();
            await Scan.create({
                url: response.url,
                normalizedUrl: normalizedUrl,
                ecoScore: response.ecoScore,
                pageSizeMB: response.pageSizeMB,
                resources: response.resources,
                impacts: response.impacts,
            });
        } catch (dbErr) {
            console.error("[DB Save Error]", dbErr);
            // Don't fail the request if DB save fails
        }

        await browser.close();
        return new Response(JSON.stringify(response), { status: 200, headers: { "Content-Type": "application/json" } });

    } catch (err) {
        if (browser) await browser.close().catch(() => { });
        console.error("[Analyze Error]", err);
        throw err;
    }

}
export const POST = withErrorHandler(handler);
