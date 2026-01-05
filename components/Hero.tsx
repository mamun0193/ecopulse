"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [visitors, setVisitors] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/stats");
        const data = await res.json();
        if (data.success) {
          setVisitors(data.data.uniqueVisitors);
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 mt-5">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150] h-[150] bg-green-600/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-size-[50px_50px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-500 rounded-full opacity-60 animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-green-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: "1s", animationDuration: "4s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-emerald-500 rounded-full opacity-30 animate-bounce" style={{ animationDelay: "1.5s", animationDuration: "3.5s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-5">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          <span className="text-green-400 text-sm font-medium">
            Join {loading ? "..." : `${visitors.toLocaleString()}+`} eco-conscious developers
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight mt-0">
          <span className="text-white">The Internet Has a</span>
          <br />
          <span className="bg-linear-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
            Carbon Footprint
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
          Every website leaves a digital carbon trail. <span className="text-green-400 font-semibold">EcoPulse</span> helps you
          measure, understand, and reduce your website&apos;s environmental impact —
          one byte at a time.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400">1.16g</div>
            <div className="text-sm text-gray-500">CO₂ per avg website visit</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gray-700"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400">3.7%</div>
            <div className="text-sm text-gray-500">Global carbon from internet</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gray-700"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-400">1.7 Billion+</div>
            <div className="text-sm text-gray-500">Tons CO₂ yearly from web</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/analyze"
            className="group relative inline-flex items-center px-8 py-4 bg-linear-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
          >
            <span className="absolute inset-0 bg-linear-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Analyze Your Website
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center px-8 py-4 bg-gray-800/50 border border-gray-700 text-gray-300 font-semibold text-lg rounded-full hover:bg-gray-800 hover:border-green-500/50 transition-all duration-300"
          >
            Learn More
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-gray-500 text-sm mb-10">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            No sign-up required
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Instant analysis
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            100% Free &amp; Private
          </div>
        </div>
      </div>
    </section>
  );
}
