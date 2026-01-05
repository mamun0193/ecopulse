import React from "react";

type Suggestion = {
    id: string;
    message: string;
    severity: "low" | "medium" | "high";
};

type Props = {
    suggestions: Suggestion[];
};

const getSeverityConfig = (severity: string) => {
    switch (severity) {
        case "high":
            return {
                borderColor: "border-red-500",
                bgColor: "bg-red-500/10",
                textColor: "text-red-400",
                badgeBg: "bg-red-500/20",
                icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                ),
                label: "High Priority",
            };
        case "medium":
            return {
                borderColor: "border-yellow-500",
                bgColor: "bg-yellow-500/10",
                textColor: "text-yellow-400",
                badgeBg: "bg-yellow-500/20",
                icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ),
                label: "Medium",
            };
        default:
            return {
                borderColor: "border-green-500",
                bgColor: "bg-green-500/10",
                textColor: "text-green-400",
                badgeBg: "bg-green-500/20",
                icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ),
                label: "Low",
            };
    }
};

export default function SuggestionCard({ suggestions }: Props) {
    return (
        <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-6">
            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-linear-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-lg font-bold text-white">Optimization Suggestions</h2>
                    <p className="text-gray-400 text-sm">{suggestions.length} recommendations found</p>
                </div>
            </div>

            {/* Suggestions List */}
            <div className="space-y-4">
                {suggestions.map((item, index) => {
                    const config = getSeverityConfig(item.severity);
                    return (
                        <div
                            key={index}
                            className={`relative bg-gray-900/50 rounded-xl p-4 border-l-4 ${config.borderColor} hover:bg-gray-900/70 transition-all duration-300`}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`w-10 h-10 ${config.bgColor} rounded-lg flex items-center justify-center ${config.textColor} shrink-0`}>
                                    {config.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className={`text-xs font-semibold ${config.textColor} ${config.badgeBg} px-2 py-1 rounded-full`}>
                                            {config.label}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">{item.message}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Summary */}
            {suggestions.length > 0 && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <div className="flex items-center gap-2 text-green-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-sm font-medium">
                            Implementing these changes can improve your eco score significantly
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
