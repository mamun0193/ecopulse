"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    id: "carbon-analysis",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    gradient: "from-green-500 to-emerald-600",
    title: "Carbon Footprint Analysis",
    shortDescription: "Get precise measurements of your website's CO₂ emissions based on page weight, server location, and energy sources.",
    fullDescription: `Our carbon footprint analysis uses industry-standard methodologies to calculate the environmental impact of your website. We consider multiple factors including:

• <strong>Page Weight</strong>: Total size of all resources (HTML, CSS, JavaScript, images, fonts)
• <strong>Data Transfer</strong>: Energy consumed during data transmission across networks
• <strong>Server Processing</strong>: Estimated energy used by servers to process requests
• <strong>End-User Devices</strong>: Power consumed by visitors' devices to render your page

We use the average carbon intensity of global electricity grids (approximately 442g CO₂/kWh) to convert energy consumption into carbon emissions. This gives you a realistic picture of your website's environmental impact per page view.`,
    benefits: [
      "Understand your digital carbon footprint",
      "Compare against industry benchmarks",
      "Track improvements over time",
      "Generate reports for sustainability initiatives",
    ],
  },
  {
    id: "performance-insights",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    gradient: "from-emerald-500 to-teal-600",
    title: "Performance Insights",
    shortDescription: "Discover how your site's performance metrics directly impact its energy consumption and environmental footprint.",
    fullDescription: `Performance and sustainability go hand in hand. A faster website is typically a greener website. Our performance insights help you understand:

• <strong>Load Time Impact</strong>: Longer load times mean more energy consumed by servers and devices
• <strong>Resource Efficiency</strong>: Identify oversized or unnecessary resources
• <strong>Render Blocking</strong>: Scripts and styles that delay page rendering
• <strong>Network Requests</strong>: Each HTTP request adds to your carbon footprint

We analyze your website's Core Web Vitals and correlate them with environmental impact. This dual perspective helps you optimize for both user experience and sustainability.`,
    benefits: [
      "Correlate performance with sustainability",
      "Identify high-impact optimizations",
      "Improve user experience while going green",
      "Reduce server costs and carbon emissions",
    ],
  },
  {
    id: "recommendations",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    gradient: "from-teal-500 to-cyan-600",
    title: "Actionable Recommendations",
    shortDescription: "Get personalized suggestions to optimize images, reduce scripts, and implement green hosting solutions.",
    fullDescription: `Our AI-powered recommendation engine analyzes your website and provides tailored suggestions based on severity and impact:

<strong>High Priority Recommendations</strong>
• Optimize large images with modern formats (WebP, AVIF)
• Minify and compress JavaScript and CSS
• Implement lazy loading for below-the-fold content
• Remove unused code and dependencies

<strong>Medium Priority Recommendations</strong>
• Enable browser caching with appropriate headers
• Use a CDN to reduce data transfer distances
• Optimize web fonts (subset, swap)
• Reduce third-party script impact

<strong>Low Priority Recommendations</strong>
• Consider green hosting providers
• Implement dark mode for OLED energy savings
• Optimize favicons and small assets`,
    benefits: [
      "Prioritized list of improvements",
      "Estimated impact for each suggestion",
      "Step-by-step implementation guides",
      "Before/after comparisons",
    ],
  },
  {
    id: "resource-breakdown",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
    gradient: "from-green-500 to-lime-600",
    title: "Resource Breakdown",
    shortDescription: "See exactly where your site's energy is going — from images and fonts to JavaScript and third-party scripts.",
    fullDescription: `Get a complete breakdown of your website's resource consumption with detailed charts and analysis:

<strong>Resource Categories</strong>
• <strong>HTML</strong>: Document structure and inline content
• <strong>CSS</strong>: Stylesheets and inline styles
• <strong>JavaScript</strong>: Scripts, frameworks, and libraries
• <strong>Images</strong>: Photos, graphics, icons, and sprites
• <strong>Fonts</strong>: Web fonts and icon fonts
• <strong>API Calls</strong>: Data fetched from your servers
• <strong>Third-Party</strong>: External scripts, analytics, ads, widgets

Each category shows:
- Total size in KB/MB
- Number of requests
- Percentage of total page weight
- Estimated carbon impact`,
    benefits: [
      "Visual charts for easy understanding",
      "Identify the biggest contributors",
      "Track changes across versions",
      "Export data for reporting",
    ],
  },
  {
    id: "eco-score",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    gradient: "from-emerald-500 to-green-600",
    title: "Eco Score Badge",
    shortDescription: "Earn and display an eco-friendly badge on your website to show visitors your commitment to sustainability.",
    fullDescription: `The EcoPulse Eco Score is a comprehensive rating from A+ to F that represents your website's overall environmental efficiency:

<strong>Score Breakdown</strong>
• <strong>A+ (90-100)</strong>: Exceptional - Among the greenest websites
• <strong>A (80-89)</strong>: Excellent - Well optimized for sustainability
• <strong>B+ (70-79)</strong>: Good - Above average performance
• <strong>B (60-69)</strong>: Average - Room for improvement
• <strong>C+ (50-59)</strong>: Below Average - Significant optimizations needed
• <strong>C (40-49)</strong>: Poor - Major improvements required
• <strong>D (30-39)</strong>: Very Poor - Urgent attention needed
• <strong>F (0-29)</strong>: Critical - Extensive overhaul required

<strong>Scoring Factors</strong>
- Page size and weight
- Energy consumption
- Carbon emissions
- JavaScript efficiency
- Third-party impact
- API call efficiency`,
    benefits: [
      "Easy-to-understand overall rating",
      "Embeddable badge for your website",
      "Competitive benchmarking",
      "Track score improvements",
    ],
  },
  {
    id: "historical-tracking",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    gradient: "from-teal-500 to-emerald-600",
    title: "Historical Tracking",
    shortDescription: "Monitor your progress over time and see how your optimizations are reducing your carbon footprint.",
    fullDescription: `Track your website's environmental journey with our historical analysis features:

<strong>What We Track</strong>
• Page size changes over time
• Carbon emissions trends
• Eco Score progression
• Resource distribution shifts
• Third-party impact changes

<strong>Insights Provided</strong>
- Weekly and monthly trend reports
- Comparison between scans
- Regression alerts when metrics worsen
- Celebration of improvements
- Projected annual impact

<strong>Coming Soon</strong>
- Scheduled automatic rescans
- Email notifications
- CI/CD integration
- API access for developers`,
    benefits: [
      "Visualize your sustainability journey",
      "Prove ROI of optimization efforts",
      "Catch regressions early",
      "Set and track goals",
    ],
  },
];

export default function FeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const selectedFeatureData = features.find((f) => f.id === selectedFeature);

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <span className="text-green-400 text-sm font-medium">Powerful Features</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Everything You Need to Go{" "}
            <span className="bg-linear-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Green</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools to analyze, optimize, and monitor your website&apos;s environmental impact. 
            Click on any feature to learn more.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(feature.id)}
                className={`cursor-pointer text-left group bg-gray-800/30 border rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1 ${
                  selectedFeature === feature.id
                    ? "border-green-500 bg-gray-800/50"
                    : "border-gray-700/50 hover:border-green-500/50"
                }`}
              >
                <div
                  className={`w-14 h-14 bg-linear-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{feature.shortDescription}</p>
                <span className="text-green-400 text-sm font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Detail Modal */}
      {selectedFeature && selectedFeatureData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-900 border border-gray-700 rounded-2xl">
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors z-10 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              <div
                className={`w-16 h-16 bg-linear-to-br ${selectedFeatureData.gradient} rounded-xl flex items-center justify-center mb-6`}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={selectedFeatureData.icon} />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">{selectedFeatureData.title}</h2>

              <div className="prose prose-invert max-w-none mb-8">
                {selectedFeatureData.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed whitespace-pre-line mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {selectedFeatureData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/analyze"
                  className="inline-flex items-center px-6 py-3 bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all"
                >
                  Try It Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="inline-flex items-center px-6 py-3 bg-gray-800 border border-gray-700 text-gray-300 font-semibold rounded-full hover:bg-gray-700 transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Analyze your website for free and discover how to make it more sustainable.
          </p>
          <Link
            href="/analyze"
            className="group relative inline-flex items-center px-8 py-4 bg-linear-to-r from-green-700 to-emerald-800 text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
          >
            <span className="absolute inset-0 bg-linear-to-r from-green-800 to-emerald-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              Analyze Your Website
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
