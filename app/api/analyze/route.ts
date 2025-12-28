import { NextRequest } from "next/server";
import chromium from "@sparticuz/chromium";
import { withErrorHandler } from "@/middleware/errorHandler";
import { isValidUrl, normalizeUrl } from "@/helpers/validation";
import { generateSuggestions } from "@/lib/suggestions";
import { AnalysisResult } from "@/app/types/analysis";
import { bytesToKB, bytesToMB, computeImpactsFromPageSizeMB, roundTo } from "@/lib/Calculations/calculations";
import { trackPageResources } from "@/lib/resourceAnalyzer";
import { calculateEcoScore } from "@/lib/Calculations/ecoScore";


const handler = async (req: NextRequest) => {
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
            //For vercel
            const puppeteer = await import("puppeteer-core");
            const execPath = await chromium.executablePath();
            console.log("[Vercel] Chromium path:", execPath);
            browser = await puppeteer.default.launch({
                args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
                executablePath: execPath,
                headless: true,
            })
        }
        else {
            //Execute locally
            const puppeteer = await import("puppeteer")
            browser = await puppeteer.default.launch()
        }

        const page = await browser.newPage();


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

        await browser.close();
        return new Response(JSON.stringify(response), { status: 200, headers: { "Content-Type": "application/json" } });

    } catch (err) {
        if (browser) await browser.close().catch(() => { });
        console.error("[Analyze Error]", err);
        throw err;
    }

}
export const POST = withErrorHandler(handler);
