import React from "react";
import { AnalysisResult } from "@/app/types/analysis";

const ResourceCard = ({ data }: { data: AnalysisResult }) => {
  const resources = [
    { label: "HTML", value: `${data.resources.html} KB`, color: "text-green-400", icon: "📄" },
    { label: "CSS", value: `${data.resources.css} KB`, color: "text-emerald-400", icon: "🎨" },
    { label: "JavaScript", value: `${data.resources.js} KB`, color: "text-teal-400", icon: "⚡" },
    { label: "Images/Videos", value: `${data.resources.image} KB`, color: "text-cyan-400", icon: "🖼️" },
    { label: "API Calls", value: data.resources.apiCalls, color: "text-blue-400", icon: "🔗" },
    { label: "3rd Party Requests", value: data.resources.thirdPartyAPICalls, color: "text-indigo-400", icon: "🌐" },
  ];

  return (
    <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-6">
      {/* Background Glow */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-linear-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Resource Breakdown</h2>
          <p className="text-gray-400 text-sm">Page assets analysis</p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="space-y-3 mb-6">
        {resources.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 px-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{item.icon}</span>
              <span className="text-gray-300">{item.label}</span>
            </div>
            <span className={`font-semibold ${item.color}`}>{item.value}</span>
          </div>
        ))}
      </div>

      {/* Total Size */}
      <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-white font-semibold">Total Page Size</span>
          </div>
          <span className="text-2xl font-bold text-green-400">{data.pageSizeMB} MB</span>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;