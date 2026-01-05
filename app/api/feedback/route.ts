import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/db/dbConfig";
import Feedback from "@/models/Feedback";
import { rateLimit } from "@/lib/rateLimit";

// GET - Fetch all feedback or filtered feedback
export async function GET(req: NextRequest) {
    try {
        await dbConnect();

        const { searchParams } = new URL(req.url);
        const rating = searchParams.get("rating");
        const limit = searchParams.get("limit");
        const homepage = searchParams.get("homepage");

        const query: any = {};
        
        // If homepage=true, get only 5-star reviews (most recent 3)
        if (homepage === "true") {
            query.rating = 5;
            const feedbacks = await Feedback.find(query)
                .sort({ createdAt: -1 })
                .limit(3);
            
            return NextResponse.json({
                success: true,
                data: feedbacks,
            });
        }

        // Filter by rating if provided
        if (rating) {
            query.rating = parseInt(rating);
        }

        let feedbackQuery = Feedback.find(query).sort({ createdAt: -1 });

        // Limit results if provided
        if (limit) {
            feedbackQuery = feedbackQuery.limit(parseInt(limit));
        }

        const feedbacks = await feedbackQuery;

        return NextResponse.json({
            success: true,
            data: feedbacks,
        });
    } catch (error) {
        console.error("Feedback GET Error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to fetch feedback" },
            { status: 500 }
        );
    }
}

// POST - Create new feedback
export async function POST(req: NextRequest) {
    // Apply rate limiting: 10 requests per minute
    const rateLimitResponse = rateLimit(req, { maxRequests: 10, windowMs: 60 * 1000 });
    if (rateLimitResponse) {
        return rateLimitResponse;
    }

    try {
        await dbConnect();

        const body = await req.json();
        const { name, email, role, rating, message } = body;

        // Validation
        if (!name || !rating || !message) {
            return NextResponse.json(
                { success: false, error: "Name, rating, and message are required" },
                { status: 400 }
            );
        }

        if (rating < 1 || rating > 5) {
            return NextResponse.json(
                { success: false, error: "Rating must be between 1 and 5" },
                { status: 400 }
            );
        }

        const feedback = await Feedback.create({
            name,
            email,
            role,
            rating,
            message,
        });

        return NextResponse.json({
            success: true,
            data: feedback,
        });
    } catch (error) {
        console.error("Feedback POST Error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to save feedback" },
            { status: 500 }
        );
    }
}
