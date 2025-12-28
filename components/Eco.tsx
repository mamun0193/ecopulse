import React from "react";
import { AnalysisResult } from "@/app/types/analysis";

interface EcoProps {
    data: AnalysisResult;
}

const Eco: React.FC<EcoProps> = ({ data }) => (
    <div className={`p-4 rounded-lg bg-gray-900 shadow-md border border-${data.ecoScore?.color}-500`}>
        <h1 className="text-xl font-bold">Website: {data.url}</h1>
        <h3 className="text-xl font-semibold">
            Eco Score: {data.ecoScore?.score} ({data.ecoScore?.value}*)
        </h3>
        <p className="text-xl text-gray-200">
            {data.ecoScore?.label}
        </p>
    </div>
);

export default Eco;