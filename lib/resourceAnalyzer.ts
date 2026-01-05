import type { HTTPResponse, Page } from "puppeteer-core";

export type ResourceTrackingResult = {
    totalBytes: number;
    htmlBytes: number;
    cssBytes: number;
    jsBytes: number;
    imageBytes: number;
    apiBytes: number;
    apiCalls: number;
    thirdPartyAPICalls: number;
    thirdPartyAPIBytes: number;
    requestCount: number;
};

export async function trackPageResources(page: Page, targetUrl: string, pageDomain: string): Promise<ResourceTrackingResult> {
    const bytes = {
        html: 0,
        css: 0,
        js: 0,
        image: 0,
        api: 0,
    };
    let apiCalls = 0;
    let thirdPartyAPICalls = 0;
    let thirdPartyAPIBytes = 0;
    let requestCount = 0;

    const bucketByResourceType: Record<string, keyof typeof bytes | undefined> = {
        document: "html",
        stylesheet: "css",
        script: "js",
        image: "image",
        media: "image",
        font: "image",
        video: "image",
        xhr: "api",
        fetch: "api",
    };

    const onResponse = async (response: HTTPResponse) => {
        try {
            const request = response.request();
            const url = request.url();
            const type = request.resourceType();

            // Skip chrome internal URLs only
            if (url.startsWith("chrome")) return;

            // For data URLs, estimate size from the URL itself (base64 encoded content)
            let size = 0;
            if (url.startsWith("data:")) {
                // Extract the base64 portion and calculate approximate size
                const base64Match = url.match(/base64,(.+)/);
                if (base64Match) {
                    // Base64 string length * 0.75 gives approximate byte size
                    size = Math.floor(base64Match[1].length * 0.75);
                } else {
                    return; // Skip data URLs without base64 content
                }
            } else if (url.startsWith("blob:")) {
                // Skip blob URLs as we can't easily get their size
                return;
            } else {
                const buffer = await response.buffer().catch(() => null);
                if (!buffer) return;
                size = buffer.length;
            }
            
            // For data URLs, consider them as first-party resources
            let isThirdParty = false;
            if (!url.startsWith("data:")) {
                const hostname = new URL(url).hostname;
                isThirdParty = hostname !== pageDomain;
            }

            requestCount++;

            if (isThirdParty) {
                thirdPartyAPIBytes += size;
                thirdPartyAPICalls++;
            }

            const bucket = bucketByResourceType[type];
            if (bucket) {
                bytes[bucket] += size;
                if (bucket === "api") apiCalls++;
            }
        } catch (err) {
            console.error("Resource parse error:", err);
        }
    };

    page.on("response", onResponse);
    try {
        await page.goto(targetUrl, { waitUntil: "networkidle0", timeout: 60000 });
        
        // Scroll down the page to trigger lazy-loaded images
        await page.evaluate(async () => {
            await new Promise<void>((resolve) => {
                let totalHeight = 0;
                const distance = 500;
                const timer = setInterval(() => {
                    const scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;
                    
                    if (totalHeight >= scrollHeight || totalHeight >= 5000) {
                        clearInterval(timer);
                        window.scrollTo(0, 0); // Scroll back to top
                        resolve();
                    }
                }, 100);
            });
        });
        
        // Wait for additional resources to load after scrolling
        await page.waitForNetworkIdle({ timeout: 5000 }).catch(() => {});
        
    } finally {
        page.off("response", onResponse);
    }

    const totalBytes = Object.values(bytes).reduce((sum, value) => sum + value, 0) + thirdPartyAPIBytes;

    return {
        totalBytes,
        htmlBytes: bytes.html,
        cssBytes: bytes.css,
        jsBytes: bytes.js,
        imageBytes: bytes.image,
        apiBytes: bytes.api,
        apiCalls,
        thirdPartyAPICalls,
        thirdPartyAPIBytes,
        requestCount,
    };
}