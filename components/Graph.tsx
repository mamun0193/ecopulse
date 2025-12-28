"use client";


import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Bar,
    BarChart,
    ResponsiveContainer,
} from "recharts"

type ResourceData = {
    name: string;
    sizeKB: number;
}

export default function Graph({ resources }: { resources: any }) {
    const data: ResourceData[] = [
        { name: "HTML", sizeKB: resources.html / 1024 },
        { name: "CSS", sizeKB: resources.css / 1024 },
        { name: "JavaScript", sizeKB: resources.js / 1024 },
        { name: "Images", sizeKB: resources.image / 1024 },
        { name: "API Calls", sizeKB: resources.apiBytes / 1024 },
        { name: "Third-Party API Calls", sizeKB: resources.thirdPartyAPIBytes / 1024 },
    ];
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sizeKB" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}