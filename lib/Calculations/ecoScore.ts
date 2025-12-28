export type EcoScore = {
    value: number;
    score: string;
    label: string;
    color: string;
};

export function calculateEcoScore({
    energyWh,
    carbon,
    pageSizeMB,
    jsMB = 0,
    apiCalls = 0,
    thirdPartyRequests = 0,
}: {
    energyWh: number;
    carbon: number;
    pageSizeMB: number;
    jsMB?: number;
    apiCalls?: number;
    thirdPartyRequests?: number;
}): EcoScore {
    let value = 100;
    if (pageSizeMB > 5) value -= 10;
    else if (pageSizeMB > 3) value -= 5;
    else if (pageSizeMB > 1) value -= 2;

    if (jsMB > 4) value -= 10;
    else if (jsMB > 2) value -= 5;
    else if (jsMB > 1) value -= 2;

    if (apiCalls > 20) value -= 10;
    else if (apiCalls > 10) value -= 5;

    if (thirdPartyRequests > 20) value -= 10;
    else if (thirdPartyRequests > 10) value -= 5;

    if (energyWh > 5) value -= 10;
    else if (energyWh > 2) value -= 5;

    if (carbon > 3) value -= 15;
    else if (carbon > 2) value -= 10;
    else if (carbon > 1) value -= 5;

    value = Math.max(0, Math.min(100, value));

    if (value >= 90) return { value, score: "A+", label: "Excellent", color: "green" };
    if (value >= 80) return { value, score: "A", label: "Very Good", color: "emerald" };
    if (value >= 70) return { value, score: "B", label: "Good", color: "yellow" };
    if (value >= 60) return { value, score: "C", label: "Needs Improvement", color: "orange" };

    return { value, score: "D", label: "Poor", color: "red" };
}
