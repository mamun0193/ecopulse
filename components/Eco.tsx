import React from "react";
import { AnalysisResult } from "@/app/types/analysis";

interface EcoProps {
    data: AnalysisResult;
}

const getScoreColor = (score: string) => {
    switch (score) {
        case 'A+': case 'A': return 'from-green-500 to-emerald-600';
        case 'B+': case 'B': return 'from-emerald-500 to-teal-600';
        case 'C+': case 'C': return 'from-yellow-500 to-amber-600';
        case 'D+': case 'D': return 'from-orange-500 to-red-600';
        default: return 'from-red-500 to-rose-600';
    }
};

const getScoreBorderColor = (score: string) => {
    switch (score) {
        case 'A+': case 'A': return 'border-green-500/50';
        case 'B+': case 'B': return 'border-emerald-500/50';
        case 'C+': case 'C': return 'border-yellow-500/50';
        case 'D+': case 'D': return 'border-orange-500/50';
        default: return 'border-red-500/50';
    }
};

const Eco: React.FC<EcoProps> = ({ data }) => (
    <div className={`relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border ${getScoreBorderColor(data.ecoScore?.score || '')} p-6`}>
        {/* Background Glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-lg font-bold text-white">Eco Score</h2>
                    <p className="text-gray-400 text-sm truncate max-w-50">{data.url}</p>
                </div>
            </div>
            
            {/* Score Badge */}
            <div className={`w-16 h-16 bg-linear-to-br ${getScoreColor(data.ecoScore?.score || '')} rounded-2xl flex items-center justify-center shadow-lg`}>
                <span className="text-2xl font-bold text-white">{data.ecoScore?.score}</span>
            </div>
        </div>

        {/* Score Details */}
        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
            <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-sm">Performance Score</span>
                <span className="text-white font-semibold">{data.ecoScore?.value}/100</span>
            </div>
            <div className="h-3 bg-gray-700 rounded-full overflow-hidden mb-3">
                <div 
                    className={`h-full bg-linear-to-r ${getScoreColor(data.ecoScore?.score || '')} rounded-full transition-all duration-500`}
                    style={{ width: `${data.ecoScore?.value}%` }}
                ></div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
                {data.ecoScore?.label}
            </p>
        </div>
    </div>
);

export default Eco;