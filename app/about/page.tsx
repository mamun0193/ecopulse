"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Stats {
    totalScans: number;
    averageEcoScore: string;
    uniqueVisitors: number;
}

export default function AboutPage() {
    const [stats, setStats] = useState<Stats>({
        totalScans: 0,
        averageEcoScore: "--",
        uniqueVisitors: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch("/api/stats");
                const data = await res.json();
                if (data.success) {
                    setStats(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="min-h-screen bg-gray-950">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                            <span className="text-green-400 text-sm font-medium">About EcoPulse</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Making the Web{" "}
                            <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                                Cleaner
                            </span>
                            , One Site at a Time
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            EcoPulse is your companion in building a more sustainable digital world.
                            We help developers and businesses understand and reduce their website&apos;s environmental impact.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-20">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 text-center hover:border-green-500/30 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <div className={`text-4xl font-bold text-green-400 mb-2 ${loading ? "animate-pulse" : ""}`}>
                                {loading ? "..." : stats.totalScans.toLocaleString()}
                            </div>
                            <div className="text-gray-400">Websites Analyzed</div>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 text-center hover:border-emerald-500/30 transition-all duration-300">
                            <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <div className={`text-4xl font-bold text-emerald-400 mb-2 ${loading ? "animate-pulse" : ""}`}>
                                {loading ? "..." : stats.averageEcoScore}
                            </div>
                            <div className="text-gray-400">Average Eco Score</div>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 text-center hover:border-teal-500/30 transition-all duration-300">
                            <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className={`text-4xl font-bold text-teal-400 mb-2 ${loading ? "animate-pulse" : ""}`}>
                                {loading ? "..." : stats.uniqueVisitors.toLocaleString()}
                            </div>
                            <div className="text-gray-400">Unique Visitors</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-20 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                The internet consumes approximately <span className="text-green-400 font-semibold">416.2 TWh of electricity per year</span> —
                                more than the entire United Kingdom. Every website, every page load, every byte transferred contributes to this massive energy consumption.
                            </p>
                            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                EcoPulse was created with a simple but powerful mission: <span className="text-green-400 font-semibold">make the web more sustainable</span>.
                                We believe that by providing developers and businesses with clear, actionable insights about their digital carbon footprint,
                                we can collectively reduce the environmental impact of the internet.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our tools analyze your website&apos;s resource usage, calculate its carbon emissions, and provide personalized recommendations
                                to help you build faster, lighter, and greener websites.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-r from-green-500/20 to-emerald-500/20 blur-3xl rounded-full"></div>
                            <div className="relative bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-1">Global Impact</h3>
                                            <p className="text-gray-400 text-sm">The internet produces about 3.7% of global carbon emissions, equivalent to the airline industry.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-1">Growing Fast</h3>
                                            <p className="text-gray-400 text-sm">Digital carbon emissions are expected to double by 2025 if no action is taken.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-1">You Can Help</h3>
                                            <p className="text-gray-400 text-sm">Simple optimizations can reduce a website&apos;s carbon footprint by 50-90%.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">How EcoPulse Works</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Our analysis process is simple, fast, and comprehensive.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Enter URL",
                                description: "Simply paste your website URL into our analyzer.",
                                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                            },
                            {
                                step: "02",
                                title: "Deep Scan",
                                description: "We analyze all resources: HTML, CSS, JS, images, and third-party scripts.",
                                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                            },
                            {
                                step: "03",
                                title: "Calculate Impact",
                                description: "We compute energy usage, carbon emissions, and water consumption.",
                                icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                            },
                            {
                                step: "04",
                                title: "Get Insights",
                                description: "Receive actionable recommendations to reduce your footprint.",
                                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                            },
                        ].map((item, index) => (
                            <div key={index} className="relative">
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-linear-to-r from-green-500/50 to-transparent"></div>
                                )}
                                <div className="relative bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 text-center hover:border-green-500/50 transition-all duration-300">
                                    <div className="text-green-400 text-sm font-bold mb-4">{item.step}</div>
                                    <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Measure */}
            <section className="py-20 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">What We Measure</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Comprehensive analysis of your website&apos;s environmental impact.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Page Size", description: "Total weight of HTML, CSS, JavaScript, images, and other assets.", color: "green" },
                            { title: "Energy Consumption", description: "Estimated energy used per page view in watt-hours.", color: "emerald" },
                            { title: "Carbon Emissions", description: "CO₂ equivalent produced per page load.", color: "teal" },
                            { title: "Water Usage", description: "Virtual water consumed by data center operations.", color: "cyan" },
                            { title: "Resource Breakdown", description: "Detailed analysis of each resource type and its impact.", color: "green" },
                            { title: "Third-Party Impact", description: "Footprint of external scripts, APIs, and CDN resources.", color: "emerald" },
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300">
                                <div className={`w-12 h-12 bg-${item.color}-500/20 rounded-xl flex items-center justify-center mb-4`}>
                                    <svg className={`w-6 h-6 text-${item.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Make Your Website Greener?</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Join thousands of developers who are building a more sustainable web.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/analyze"
                            className="group relative inline-flex items-center px-8 py-4 bg-linear-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
                        >
                            <span className="absolute inset-0 bg-linear-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative flex items-center">
                                Analyze Your Website
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>
                        <Link
                            href="/features"
                            className="group inline-flex items-center px-8 py-4 bg-gray-800/50 border border-gray-700 text-gray-300 font-semibold text-lg rounded-full hover:bg-gray-800 hover:border-green-500/50 transition-all duration-300"
                        >
                            Explore Features
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
