import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db/dbConfig";
import Subscriber from "@/models/Subscriber";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscriber = await Subscriber.findOne({ email: email.toLowerCase() });
    
    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return NextResponse.json(
          { success: false, message: "This email is already subscribed!" },
          { status: 409 }
        );
      } else {
        // Reactivate subscription
        existingSubscriber.isActive = true;
        existingSubscriber.subscribedAt = new Date();
        await existingSubscriber.save();

        return NextResponse.json(
          {
            success: true,
            message: "Welcome back! Your subscription has been reactivated.",
            data: { email: existingSubscriber.email },
          },
          { status: 200 }
        );
      }
    }

    // Create new subscriber
    const newSubscriber = await Subscriber.create({
      email: email.toLowerCase(),
      subscribedAt: new Date(),
      isActive: true,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed! Thank you for joining us.",
        data: { email: newSubscriber.email },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Subscription error:", error);

    if (error instanceof Error && error.name === "ValidationError") {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve subscribers (optional - for admin use)
export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const searchParams = req.nextUrl.searchParams;
    const limit = parseInt(searchParams.get("limit") || "50");
    const isActive = searchParams.get("active") === "true";

    const query = isActive ? { isActive: true } : {};
    
    const subscribers = await Subscriber.find(query)
      .sort({ subscribedAt: -1 })
      .limit(limit)
      .select("email subscribedAt isActive");

    const totalCount = await Subscriber.countDocuments(query);

    return NextResponse.json(
      {
        success: true,
        data: {
          subscribers,
          total: totalCount,
          count: subscribers.length,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch subscribers" },
      { status: 500 }
    );
  }
}
