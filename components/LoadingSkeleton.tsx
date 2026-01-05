import React from "react";

type Variant = "impact" | "resource" | "suggestion" | "eco" | "graph";

type Props = {
  variant?: Variant;
  suggestionsCount?: number;
};

export default function LoadingSkeleton({ variant = "impact", suggestionsCount = 3 }: Props) {
  return (
    <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-6 animate-pulse">
      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div>
      
      {/* Header Skeleton */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gray-700 rounded-xl"></div>
        <div className="space-y-2">
          <div className="h-5 bg-gray-700 rounded w-32"></div>
          <div className="h-3 bg-gray-700/50 rounded w-24"></div>
        </div>
      </div>

      {variant === "eco" && (
        <div className="space-y-4">
          <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
            <div className="flex justify-between items-center mb-3">
              <div className="h-4 bg-gray-700 rounded w-28"></div>
              <div className="h-4 bg-gray-700 rounded w-16"></div>
            </div>
            <div className="h-3 bg-gray-700 rounded-full w-full mb-3"></div>
            <div className="h-4 bg-gray-700/50 rounded w-3/4"></div>
          </div>
        </div>
      )}

      {variant === "impact" && (
        <div className="space-y-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg"></div>
                  <div className="h-4 bg-gray-700 rounded w-24"></div>
                </div>
                <div className="h-6 bg-gray-700 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {variant === "resource" && (
        <div className="space-y-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between py-3 px-4 bg-gray-900/50 rounded-xl border border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-24"></div>
              </div>
              <div className="h-4 bg-gray-700 rounded w-16"></div>
            </div>
          ))}
          <div className="bg-gray-700/30 rounded-xl p-4 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded-lg"></div>
                <div className="h-5 bg-gray-700 rounded w-28"></div>
              </div>
              <div className="h-7 bg-gray-700 rounded w-20"></div>
            </div>
          </div>
        </div>
      )}

      {variant === "suggestion" && (
        <div className="space-y-4">
          {Array.from({ length: suggestionsCount }).map((_, i) => (
            <div key={i} className="bg-gray-900/50 rounded-xl p-4 border-l-4 border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="h-4 bg-gray-700 rounded w-20"></div>
                    <div className="h-5 bg-gray-700 rounded-full w-16"></div>
                  </div>
                  <div className="h-4 bg-gray-700/50 rounded w-full"></div>
                  <div className="h-4 bg-gray-700/50 rounded w-4/5"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {variant === "graph" && (
        <div className="space-y-4">
          <div className="h-75 bg-gray-900/50 rounded-xl border border-gray-700/50 flex items-end justify-around p-6 gap-4">
            {[60, 40, 80, 50, 70, 45].map((height, i) => (
              <div key={i} className="w-12 bg-gray-700 rounded-t-lg" style={{ height: `${height}%` }}></div>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                <div className="h-3 bg-gray-700 rounded w-12"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
