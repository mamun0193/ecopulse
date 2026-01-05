"use client";

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Bar,
    BarChart,
    ResponsiveContainer,
    Cell,
} from "recharts"

type ResourceData = {
    name: string;
    sizeKB: number;
}

type ResourcesInput = {
    html: number;
    css: number;
    js: number;
    image: number;
    apiBytes: number;
    thirdPartyAPIBytes: number;
}

type TooltipProps = {
    active?: boolean;
    payload?: Array<{ value: number }>;
    label?: string;
}

const COLORS = ['#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#6366f1'];

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-lg p-3 shadow-xl">
                <p className="text-green-400 font-semibold mb-1">{label}</p>
                <p className="text-gray-300 text-sm">
                    Size: <span className="text-white font-medium">{payload[0].value.toFixed(2)} KB</span>
                </p>
            </div>
        );
    }
    return null;
};

export default function Graph({ resources }: { resources: ResourcesInput }) {
    const data: ResourceData[] = [
        { name: "HTML", sizeKB: resources.html },
        { name: "CSS", sizeKB: resources.css },
        { name: "JavaScript", sizeKB: resources.js },
        { name: "Images", sizeKB: resources.image },
        { name: "API Calls", sizeKB: resources.apiBytes },
        { name: "3rd Party", sizeKB: resources.thirdPartyAPIBytes },
    ];
    
    return (
        <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 shadow-xl">
            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-lg font-bold text-white">Resource Distribution</h2>
                    <p className="text-gray-400 text-sm">Size breakdown by resource type</p>
                </div>
            </div>
            
            {/* Chart */}
            <div className="relative z-10">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                        <XAxis 
                            dataKey="name" 
                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                            axisLine={{ stroke: '#374151' }}
                            tickLine={{ stroke: '#374151' }}
                        />
                        <YAxis 
                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                            axisLine={{ stroke: '#374151' }}
                            tickLine={{ stroke: '#374151' }}
                            tickFormatter={(value) => `${value} KB`}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(34, 197, 94, 0.1)' }} />
                        <Bar dataKey="sizeKB" radius={[8, 8, 0, 0]}>
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
                {data.map((item, index) => (
                    <div key={item.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                        <span className="text-gray-400 text-xs">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}