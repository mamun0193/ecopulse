"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        await fetch("/api/visitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ page: pathname }),
        });
      } catch (error) {
        // Silently fail - visitor tracking is not critical
        console.error("Visitor tracking failed:", error);
      }
    };

    trackVisitor();
  }, [pathname]);

  return null; // This component doesn't render anything
}
