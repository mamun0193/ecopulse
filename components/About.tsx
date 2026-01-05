"use client";

import { useEffect, useState } from "react";

interface Stats {
  totalScans: number;
  averageEcoScore: string;
  uniqueVisitors: number;
}

export default function About() {
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
    <section id="about" className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-15">
          <div className="inline-flex items-center px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <span className="text-green-400 text-sm font-medium">About EcoPulse</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Making the Web <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Cleaner</span>, One Site at a Time
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              EcoPulse has analyzed <span className="text-green-400 font-semibold">{loading ? "..." : stats.totalScans} websites</span> to date,
              helping users understand their digital footprint. The average Eco Score across all scans
              is <span className="text-emerald-400 font-semibold">{loading ? "..." : stats.averageEcoScore}</span>, based on energy use, carbon emissions, and water impact.
            </p>
            <p className="text-gray-400 text-lg mb-0 leading-relaxed">
              We&apos;ve welcomed <span className="text-teal-400 font-semibold">{loading ? "..." : stats.uniqueVisitors} unique visitors</span> who
              care about building a more sustainable web. Join them in making a difference.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative mt-5">
            <div className="absolute inset-0 bg-linear-to-r from-green-500/20 to-emerald-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 text-center border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div className={`text-3xl font-bold text-green-400 mb-1 ${loading ? "animate-pulse" : ""}`}>
                    {loading ? "..." : stats.totalScans}
                  </div>
                  <div className="text-gray-400 text-sm">Websites Analyzed</div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 text-center border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className={`text-3xl font-bold text-emerald-400 mb-1 ${loading ? "animate-pulse" : ""}`}>
                    {loading ? "..." : stats.averageEcoScore}
                  </div>
                  <div className="text-gray-400 text-sm">Avg. Eco Score</div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 text-center border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className={`text-3xl font-bold text-teal-400 mb-1 ${loading ? "animate-pulse" : ""}`}>
                    {loading ? "..." : stats.uniqueVisitors}
                  </div>
                  <div className="text-gray-400 text-sm">Unique Visitors</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-linear-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center justify-center gap-2 text-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-gray-300 text-sm">
                    Real-time stats from our community
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Badges - Full Width Below Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="flex items-center bg-gray-800/50 px-4 py-3 rounded-lg border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 shrink-0">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold">Accurate</div>
              <div className="text-gray-500 text-sm">Science-based metrics</div>
            </div>
          </div>
          <div className="flex items-center bg-gray-800/50 px-4 py-3 rounded-lg border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-3 shrink-0">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold">Fast</div>
              <div className="text-gray-500 text-sm">Results in seconds</div>
            </div>
          </div>
          <div className="flex items-center bg-gray-800/50 px-4 py-3 rounded-lg border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300">
            <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center mr-3 shrink-0">
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold">Actionable</div>
              <div className="text-gray-500 text-sm">Clear improvements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
