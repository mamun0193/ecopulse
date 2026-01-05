import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/db/dbConfig";
import Visitor from "@/models/Visitor";
import crypto from "crypto";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        // Get visitor info from headers
        const forwardedFor = req.headers.get("x-forwarded-for");
        const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";
        const userAgent = req.headers.get("user-agent") || "unknown";

        // Get page visited from body
        const body = await req.json().catch(() => ({}));
        const pageVisited = body.page || "/";

        // Create a unique visitor ID (hash of IP + userAgent for privacy)
        const visitorId = crypto
            .createHash("sha256")
            .update(`${ip}-${userAgent}`)
            .digest("hex")
            .substring(0, 16);

        // Check if this visitor was already recorded today
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const existingVisit = await Visitor.findOne({
            visitorId,
            visitedAt: { $gte: today },
        });

        if (!existingVisit) {
            // Record new visitor
            await Visitor.create({
                visitorId,
                ip: ip.substring(0, 3) + ".***.***", // Store partial IP for privacy
                userAgent: userAgent.substring(0, 100), // Truncate user agent
                pageVisited,
                visitedAt: new Date(),
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Visitor tracking error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to track visitor" },
            { status: 500 }
        );
    }
}
