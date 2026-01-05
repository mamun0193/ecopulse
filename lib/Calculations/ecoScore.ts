export type EcoScore = {
    value: number;
    score: string;
    label: string;
    color: string;
};

type ScoreInput = {
    energyWh: number;
    carbon: number;
    pageSizeMB: number;
    jsMB?: number;
    apiCalls?: number;
    thirdPartyRequests?: number;
};

const getDeduction = (val: number, thresholds: [number, number][], penalties: number[]) => {
    for (let i = 0; i < thresholds.length; i++) {
        if (val > thresholds[i][0]) return penalties[i];
    }
    return 0;
};

export function calculateEcoScore({
    energyWh,
    carbon,
    pageSizeMB,
    jsMB = 0,
    apiCalls = 0,
    thirdPartyRequests = 0,
}: ScoreInput): EcoScore {
    let value = 100;
    
    value -= getDeduction(pageSizeMB, [[5, 10], [3, 5], [1, 2]], [10, 5, 2]);
    value -= getDeduction(jsMB, [[4, 10], [2, 5], [1, 2]], [10, 5, 2]);
    value -= getDeduction(apiCalls, [[20, 10], [10, 5]], [10, 5]);
    value -= getDeduction(thirdPartyRequests, [[20, 10], [10, 5]], [10, 5]);
    value -= getDeduction(energyWh, [[5, 10], [2, 5]], [10, 5]);
    value -= getDeduction(carbon, [[3, 15], [2, 10], [1, 5]], [15, 10, 5]);

    value = Math.max(0, Math.min(100, value));

    const ratings: [number, string, string, string][] = [
        [90, "A+", "Excellent", "green"],
        [80, "A", "Very Good", "emerald"],
        [70, "B", "Good", "yellow"],
        [60, "C", "Needs Improvement", "orange"],
    ];

    for (const [min, score, label, color] of ratings) {
        if (value >= min) return { value, score, label, color };
    }

    return { value, score: "D", label: "Poor", color: "red" };
}
