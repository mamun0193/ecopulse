import React from "react";
import Link from "next/link";
import { AnalysisResult } from "@/app/types/analysis";
import Eco from "./Eco";
import ImpactCard from "./ImpactCard";
import ResourceCard from "./ResourceCard";
import Graph from "./Graph";
import SuggestionCard from "./SuggestionCard";

interface AnalysisResultsProps {
  data: AnalysisResult;
  onReset: () => void;
}

export default function AnalysisResults({ data, onReset }: AnalysisResultsProps) {
  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
          <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-green-400 text-sm font-medium">Analysis Complete</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Your Website Report</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Here&apos;s a detailed breakdown of your website&apos;s environmental impact and recommendations for improvement.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Eco data={data} />
        <ImpactCard data={data} />
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <ResourceCard data={data} />
        <Graph resources={data.resources} />
      </div>
      
      <SuggestionCard suggestions={data.suggestions} />

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
        <button
          onClick={onReset}
          className="group inline-flex items-center px-6 py-3 bg-gray-800/50 border border-gray-700 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 hover:border-green-500/50 transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Analyze Another Site
        </button>
        <Link
          href="/"
          className="group inline-flex items-center px-6 py-3 bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
