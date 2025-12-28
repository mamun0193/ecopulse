// Build suggestion objects to match the API's `AnalysisResult.suggestions` shape
export type Suggestion = {
    id: string;
    message: string;
    severity: "low" | "medium" | "high";
}

import type { AnalysisResult } from "@/app/types/analysis";

export function generateSuggestions(analysis: AnalysisResult): Suggestion[] {
    const suggestions: Suggestion[] = [];

    const { pageSizeMB, resources, impacts } = analysis;

    const kbToMB = (kb: number) => kb / 1024;
    const jsMB = kbToMB(resources.js);

    const push = (message: string, severity: Suggestion["severity"]) => {
        suggestions.push({ id: `${suggestions.length + 1}`, message, severity });
    };

    // Mirrors ecoScore penalties (same breakpoints, guidance-focused messages)
    if (pageSizeMB > 5) {
        push("Very large page size (> 5 MB): compress images, reduce unused assets, and enable caching.", "high");
    } else if (pageSizeMB > 3) {
        push("Large page size (> 3 MB): optimize assets and reduce total payload.", "medium");
    } else if (pageSizeMB > 2) {
        push("Page size is moderate (> 2 MB): consider further optimization for faster loads.", "low");
    }

    if (jsMB > 4) {
        push("Very large JavaScript bundle (> 4 MB): remove unused libraries, use code-splitting, and lazy-load where possible.", "high");
    } else if (jsMB > 2) {
        push("Large JavaScript bundle (> 2 MB): apply code-splitting and eliminate unused code.", "medium");
    } else if (jsMB > 1) {
        push("JavaScript bundle is moderate (> 1 MB): consider reducing dependencies and shipping less JS.", "low");
    }

    if (resources.apiCalls > 20) {
        push("Too many API calls (> 20): combine requests, cache responses, and avoid repeated polling.", "medium");
    } else if (resources.apiCalls > 10) {
        push("API call count is moderate (> 10): batching and caching can reduce network overhead.", "low");
    }

    if (resources.thirdPartyAPICalls > 20) {
        push("High third-party request count (> 20): remove unused trackers/widgets and self-host critical scripts.", "medium");
    } else if (resources.thirdPartyAPICalls > 10) {
        push("Third-party requests are moderate (> 10): audit external scripts and keep only what’s necessary.", "low");
    }

    if (impacts.energyWH > 5) {
        push("High energy usage (> 5 Wh): reduce transferred data and optimize rendering to cut energy.", "high");
    } else if (impacts.energyWH > 2) {
        push("Energy usage is elevated (> 2 Wh): optimize page weight and JavaScript execution.", "medium");
    }

    if (impacts.carbon > 3) {
        push("High CO₂ impact (> 3 g): reduce payload size and third-party activity to lower emissions.", "high");
    } else if (impacts.carbon > 2) {
        push("CO₂ impact is elevated (> 2 g): optimize assets and reduce network requests.", "medium");
    } else if (impacts.carbon > 1) {
        push("CO₂ impact is moderate (> 1 g): small payload reductions can improve your score.", "low");
    }

    if (suggestions.length === 0) {
        push("Good Job! Your website is well optimized with no significant issues detected.", "low");
    }
    return suggestions;
}