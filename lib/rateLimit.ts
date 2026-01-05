import { NextRequest } from "next/server";

type RateLimitEntry = { count: number; resetTime: number };
const store: Record<string, RateLimitEntry> = {};

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const key of Object.keys(store)) {
    if (store[key].resetTime < now) delete store[key];
  }
}, 5 * 60 * 1000);

interface RateLimitOptions {
  maxRequests: number;
  windowMs: number;
}

const getClientIP = (req: NextRequest): string => {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0] || req.headers.get("x-real-ip") || "unknown";
};

export function rateLimit(
  req: NextRequest,
  { maxRequests = 10, windowMs = 60 * 1000 }: RateLimitOptions = { maxRequests: 10, windowMs: 60 * 1000 }
): Response | null {
  const ip = getClientIP(req);
  const now = Date.now();
  const key = `ratelimit:${ip}`;

  if (!store[key] || store[key].resetTime < now) {
    store[key] = { count: 1, resetTime: now + windowMs };
    return null;
  }

  store[key].count++;

  if (store[key].count > maxRequests) {
    const timeLeft = Math.ceil((store[key].resetTime - now) / 1000);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Rate limit exceeded",
        message: `Too many requests. Please try again in ${timeLeft} seconds.`,
        retryAfter: timeLeft,
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": timeLeft.toString(),
          "X-RateLimit-Limit": maxRequests.toString(),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": new Date(store[key].resetTime).toISOString(),
        },
      }
    );
  }

  return null;
}

export function getRateLimitStatus(
  req: NextRequest,
  { maxRequests = 10, windowMs = 60 * 1000 }: RateLimitOptions = { maxRequests: 10, windowMs: 60 * 1000 }
) {
  const ip = getClientIP(req);
  const now = Date.now();
  const key = `ratelimit:${ip}`;

  if (!store[key] || store[key].resetTime < now) {
    return { limit: maxRequests, remaining: maxRequests, reset: new Date(now + windowMs) };
  }

  return {
    limit: maxRequests,
    remaining: Math.max(0, maxRequests - store[key].count),
    reset: new Date(store[key].resetTime),
  };
}
