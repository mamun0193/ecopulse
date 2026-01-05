import React from "react";
import { AnalysisResult } from "@/app/types/analysis";

const ImpactCard = ({ data }: { data: AnalysisResult }) => {
    const impactItems = [
        {
            label: "Energy Used",
            value: data.impacts.energyWH,
            unit: "Wh",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            gradient: "from-yellow-500 to-amber-600",
            bgGlow: "bg-yellow-500/20",
        },
        {
            label: "Carbon Emitted",
            value: data.impacts.carbon,
            unit: "g CO₂",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
            gradient: "from-green-500 to-emerald-600",
            bgGlow: "bg-green-500/20",
        },
        {
            label: "Water Consumed",
            value: data.impacts.water,
            unit: "L",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            gradient: "from-blue-500 to-cyan-600",
            bgGlow: "bg-blue-500/20",
        },
    ];

    return (
        <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-6">
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-lg font-bold text-white">Environmental Impact</h2>
                    <p className="text-gray-400 text-sm">Per page view metrics</p>
                </div>
            </div>

            {/* Impact Grid */}
            <div className="space-y-4">
                {impactItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative bg-gray-900/50 rounded-xl p-4 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 group"
                    >
                        <div className={`absolute top-0 right-0 w-20 h-20 ${item.bgGlow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        <div className="relative flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 bg-linear-to-br ${item.gradient} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                                    {item.icon}
                                </div>
                                <span className="text-gray-300 font-medium">{item.label}</span>
                            </div>
                            <div className="text-right">
                                <span className="text-xl font-bold text-white">{item.value}</span>
                                <span className="text-gray-400 text-sm ml-1">{item.unit}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImpactCard;