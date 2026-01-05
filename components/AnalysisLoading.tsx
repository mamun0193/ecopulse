import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";

export default function AnalysisLoading() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-green-400 text-sm font-medium">Analyzing your website...</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Scanning Resources</h2>
        <p className="text-gray-400">This may take a few seconds</p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <LoadingSkeleton variant="eco" />
        <LoadingSkeleton variant="impact" />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <LoadingSkeleton variant="resource" />
        <LoadingSkeleton variant="graph" />
      </div>
      <LoadingSkeleton variant="suggestion" suggestionsCount={3} />
    </div>
  );
}
