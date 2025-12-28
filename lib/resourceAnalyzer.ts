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
        xhr: "api",
        fetch: "api",
    };

    const onResponse = async (response: HTTPResponse) => {
        try {
            const request = response.request();
            const url = request.url();
            const type = request.resourceType();

            if (url.startsWith("data:") || url.startsWith("blob:") || url.startsWith("chrome"))
                return;

            const buffer = await response.buffer().catch(() => null);
            if (!buffer) return;

            const size = buffer.length;
            const hostname = new URL(url).hostname;
            const isThirdParty = hostname !== pageDomain;

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