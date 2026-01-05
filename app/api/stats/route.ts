import { NextResponse } from "next/server";
import dbConnect from "@/db/dbConfig";
import Scan from "@/models/Scan";
import Visitor from "@/models/Visitor";

export async function GET() {
    try {
        await dbConnect();

        // Get total scans count
        const totalScans = await Scan.countDocuments();

        // Get unique visitors count (by unique visitorId)
        const uniqueVisitors = await Visitor.distinct("visitorId").then((ids) => ids.length);

        // Calculate average eco score
        let averageEcoScore = "--";
        
        if (totalScans > 0) {
            // Get all scans with eco score values
            const scansWithScores = await Scan.find(
                { "ecoScore.value": { $exists: true, $ne: null } },
                { "ecoScore.value": 1, "ecoScore.score": 1 }
            );

            if (scansWithScores.length > 0) {
                // Calculate numeric average
                const totalScore = scansWithScores.reduce((sum, scan) => {
                    return sum + (scan.ecoScore?.value || 0);
                }, 0);
                const avgNumeric = totalScore / scansWithScores.length;

                // Convert numeric score to letter grade
                averageEcoScore = getLetterGrade(avgNumeric);
            }
        }

        return NextResponse.json({
            success: true,
            data: {
                totalScans,
                averageEcoScore,
                uniqueVisitors,
            },
        });
    } catch (error) {
        console.error("Stats API Error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to fetch stats" },
            { status: 500 }
        );
    }
}

// Convert numeric score (0-100) to letter grade
function getLetterGrade(score: number): string {
    if (score >= 90) return "A+";
    if (score >= 80) return "A";
    if (score >= 70) return "B+";
    if (score >= 60) return "B";
    if (score >= 50) return "C+";
    if (score >= 40) return "C";
    if (score >= 30) return "D";
    return "F";
}
