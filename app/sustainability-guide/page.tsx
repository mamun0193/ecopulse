"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "why-it-matters", title: "Why It Matters" },
  { id: "measuring-impact", title: "Measuring Impact" },
  { id: "optimization-strategies", title: "Optimization Strategies" },
  { id: "green-hosting", title: "Green Hosting" },
  { id: "design-principles", title: "Sustainable Design" },
  { id: "development-practices", title: "Development Practices" },
  { id: "tools-resources", title: "Tools & Resources" },
  { id: "getting-started", title: "Getting Started" },
];

export default function SustainabilityGuidePage() {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <span className="text-green-400 text-sm font-medium">Comprehensive Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sustainability Guide for{" "}
            <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Web Developers
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about building eco-friendly websites and reducing your digital carbon footprint.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm cursor-pointer ${
                      activeSection === section.id
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
              
              {activeSection === "introduction" && (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6">Introduction to Sustainable Web Development</h2>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    The internet consumes approximately <strong className="text-white">416 TWh of electricity annually</strong> — 
                    more than the entire United Kingdom. Every website, every click, every byte transferred contributes to this 
                    digital carbon footprint.
                  </p>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Key Statistics</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• The ICT sector produces <strong className="text-white">2-4% of global carbon emissions</strong></li>
                      <li>• This is comparable to the <strong className="text-white">aviation industry</strong></li>
                      <li>• The average webpage produces <strong className="text-white">1.76g of CO2</strong> per view</li>
                      <li>• A site with 10,000 monthly views emits <strong className="text-white">211 kg of CO2 per year</strong></li>
                    </ul>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    As developers, we have the power — and responsibility — to reduce this impact. Sustainable web development 
                    isn&apos;t just about environmental benefits; it also leads to faster websites, better user experiences, 
                    lower hosting costs, and improved SEO.
                  </p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">What You&apos;ll Learn</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "How to measure your website's environmental impact",
                      "Practical optimization strategies",
                      "Choosing sustainable hosting providers",
                      "Designing for efficiency",
                      "Best development practices",
                      "Tools and resources to help you"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "why-it-matters" && (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6">Why Sustainable Web Development Matters</h2>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Environmental Impact</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Every time someone visits your website:
                  </p>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      </span>
                      <span><strong className="text-white">Data centers</strong> consume energy to store and serve your content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      </span>
                      <span><strong className="text-white">Network infrastructure</strong> uses power to transmit data across the globe</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      </span>
                      <span><strong className="text-white">User devices</strong> drain battery and consume electricity to render your pages</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Business Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: "⚡", title: "Faster Load Times", desc: "Optimized sites load faster, reducing bounce rates" },
                      { icon: "📈", title: "Better SEO", desc: "Google rewards fast, efficient websites" },
                      { icon: "💰", title: "Lower Costs", desc: "Less bandwidth = lower hosting bills" },
                      { icon: "🌍", title: "Brand Value", desc: "Sustainability is increasingly valued by customers" },
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h4 className="text-white font-medium mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">User Experience</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Sustainable web development directly improves user experience:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong className="text-white">Faster page loads</strong> mean happier users</li>
                    <li>• <strong className="text-white">Less data transfer</strong> helps users on limited data plans</li>
                    <li>• <strong className="text-white">Lighter pages</strong> work better on older devices</li>
                    <li>• <strong className="text-white">Efficient code</strong> means longer battery life for mobile users</li>
                  </ul>
                </div>
              )}

              {activeSection === "measuring-impact" && (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6">Measuring Environmental Impact</h2>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Before you can improve, you need to measure. Here&apos;s how environmental impact is calculated and 
                    what metrics matter most.
                  </p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Key Metrics</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <h4 className="text-green-400 font-bold mb-2">Carbon Emissions (g CO2)</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        The amount of carbon dioxide produced each time your page loads. Calculated based on:
                      </p>
                      <code className="bg-gray-800 px-3 py-1 rounded text-green-400 text-sm">
                        Carbon = Data (GB) × 0.81 kWh/GB × 442 g/kWh
                      </code>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <h4 className="text-emerald-400 font-bold mb-2">Energy Consumption (Wh)</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        The energy required to transfer and render your page. Uses industry-standard estimates.
                      </p>
                      <code className="bg-gray-800 px-3 py-1 rounded text-green-400 text-sm">
                        Energy = Data (GB) × 0.81 kWh/GB × 1000
                      </code>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <h4 className="text-teal-400 font-bold mb-2">Water Usage (L)</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        Data centers require water for cooling. We estimate 1.5 liters per kWh consumed.
                      </p>
                      <code className="bg-gray-800 px-3 py-1 rounded text-green-400 text-sm">
                        Water = Energy (kWh) × 1.5 L/kWh
                      </code>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Using EcoPulse</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    EcoPulse makes measuring your impact easy:
                  </p>
                  <ol className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center shrink-0 text-sm font-bold">1</span>
                      <span>Enter your website URL</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center shrink-0 text-sm font-bold">2</span>
                      <span>We analyze all resources loaded by your page</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center shrink-0 text-sm font-bold">3</span>
                      <span>Get detailed breakdown of your environmental impact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center shrink-0 text-sm font-bold">4</span>
                      <span>Receive prioritized recommendations for improvement</span>
                    </li>
                  </ol>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                    <h4 className="text-green-400 font-bold mb-2">Try It Now</h4>
                    <p className="text-gray-300 mb-4">
                      Measure your website&apos;s environmental impact in seconds.
                    </p>
                    <Link
                      href="/analyze"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
                    >
                      Analyze Your Website
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}

              {activeSection === "optimization-strategies" && (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6">Optimization Strategies</h2>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Here are the most impactful strategies for reducing your website&apos;s environmental footprint.
                  </p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Image Optimization</h3>
                  <p className="text-gray-300 mb-4">
                    Images typically account for 50-80% of page weight. Optimizing them is the biggest win.
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                    <h4 className="text-green-400 font-bold mb-3">Best Practices</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Use modern formats: <strong className="text-white">WebP</strong> (30% smaller) or <strong className="text-white">AVIF</strong> (50% smaller)</li>
                      <li>• Implement <strong className="text-white">lazy loading</strong> for off-screen images</li>
                      <li>• Use <strong className="text-white">responsive images</strong> with srcset</li>
                      <li>• Compress at <strong className="text-white">80-85% quality</strong> for photographs</li>
                      <li>• Remove unnecessary <strong className="text-white">metadata</strong></li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">2. JavaScript Optimization</h3>
                  <p className="text-gray-300 mb-4">
                    JavaScript is expensive to download, parse, and execute.
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                    <h4 className="text-green-400 font-bold mb-3">Best Practices</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• <strong className="text-white">Code split</strong> your bundles</li>
                      <li>• <strong className="text-white">Tree shake</strong> unused code</li>
                      <li>• <strong className="text-white">Lazy load</strong> non-critical JavaScript</li>
                      <li>• Audit and remove <strong className="text-white">unused dependencies</strong></li>
                      <li>• Consider <strong className="text-white">lighter alternatives</strong> to heavy libraries</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Caching & Compression</h3>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                    <h4 className="text-green-400 font-bold mb-3">Best Practices</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Enable <strong className="text-white">GZIP or Brotli</strong> compression</li>
                      <li>• Set appropriate <strong className="text-white">Cache-Control headers</strong></li>
                      <li>• Use a <strong className="text-white">CDN</strong> to reduce data travel distance</li>
                      <li>• Implement <strong className="text-white">Service Workers</strong> for offline support</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Third-Party Resources</h3>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                    <h4 className="text-green-400 font-bold mb-3">Best Practices</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• <strong className="text-white">Audit all third-party scripts</strong> — remove unnecessary ones</li>
                      <li>• <strong className="text-white">Self-host critical resources</strong> like fonts</li>
                      <li>• Use <strong className="text-white">async/defer</strong> for non-critical scripts</li>
                      <li>• Consider <strong className="text-white">privacy-friendly analytics</strong> alternatives</li>
                      <li>• <strong className="text-white">Limit social media embeds</strong> — use links instead</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === "green-hosting" && (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6">Green Hosting</h2>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Your choice of hosting provider can reduce your carbon footprint by up to 80%. Here&apos;s what to look for.
                  </p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">What Makes Hosting &quot;Green&quot;?</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      { title: "Renewable Energy", desc: "Data centers powered by solar, wind, or hydro" },
                      { title: "Energy Efficiency", desc: "Low PUE ratings and efficient cooling" },
                      { title: "Carbon Offsetting", desc: "Programs to neutralize remaining emissions" },
                      { title: "Sustainable Practices", desc: "Responsible hardware disposal and operations" },
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">
                        <h4 className="text-green-400 font-medium mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Recommended Green Hosts</h3>
                  <div className="space-y-4 mb-6">
                    {[
                      { name: "GreenGeeks", highlight: "300% renewable energy match" },
                      { name: "A2 Hosting", highlight: "Carbon neutral since 2007" },
                      { name: "Google Cloud", highlight: "100% renewable energy matched" },
                      { name: "Cloudflare", highlight: "Carbon neutral network" },
                    ].map((host, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-900/50 border border-gray-700 rounded-xl p-4">
                        <span className="text-white font-medium">{host.name}</span>
                        <span className="text-green-400 text-sm">{host.highlight}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Questions to Ask</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• What is your data center&apos;s PUE (Power Usage Effectiveness)?</li>
                    <li>• Do you use renewable energy? What percentage?</li>
                    <li>• Do you have renewable energy certificates (RECs)?</li>
                    <li>• What carbon offsetting programs do you participate in?</li>
                    <li>• How do you handle hardware disposal?</li>
                  </ul>
                </div>
              )}

              {activeSection === "design-principles" && (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6">Sustainable Design Principles</h2>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Every design decision has an environmental impact. Simpler, more intentional designs are naturally more sustainable.
                  </p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Core Principles</h3>

                  <div className="space-y-6 mb-6">
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <h4 className="text-green-400 font-bold mb-2">1. Design with Purpose</h4>
                      <p className="text-gray-300 text-sm">
                        Every element should serve a purpose. Remove decorative elements that don&apos;t add value. 
                        Ask: &quot;Does this help users accomplish their goal?&quot;
                      </p>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <h4 className="text-green-400 font-bold mb-2">2. Embrace Minimalism</h4>
                      <p className="text-gray-300 text-sm">
                        Fewer elements mean less data to transfer. White space is free. Simple layouts render faster.
                      </p>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <h4 className="text-green-400 font-bold mb-2">3. Prioritize Content</h4>
                      <p className="text-gray-300 text-sm">
                        Content should be king, not decoration. Use typography and hierarchy to create interest without heavy assets.
                      </p>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <h4 className="text-green-400 font-bold mb-2">4. Consider Dark Mode</h4>
                      <p className="text-gray-300 text-sm">
                        Dark interfaces use less energy on OLED screens. Offer users the choice.
                      </p>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <h4 className="text-green-400 font-bold mb-2">5. Limit Animation</h4>
                      <p className="text-gray-300 text-sm">
                        Animations consume CPU/GPU resources. Use them sparingly and respect &quot;prefers-reduced-motion&quot;.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Typography Tips</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Use <strong className="text-white">system fonts</strong> when possible (zero download)</li>
                    <li>• <strong className="text-white">Subset custom fonts</strong> to only needed characters</li>
                    <li>• Limit font families to <strong className="text-white">2-3 weights maximum</strong></li>
                    <li>• Use <strong className="text-white">font-display: swap</strong> for faster rendering</li>
                  </ul>
                </div>
              )}

              {activeSection === "development-practices" && (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6">Development Best Practices</h2>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">HTML</h3>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Use <strong className="text-white">semantic HTML</strong> for smaller, more efficient code</li>
                      <li>• <strong className="text-white">Minimize DOM depth</strong> — fewer elements = faster rendering</li>
                      <li>• Remove <strong className="text-white">unnecessary wrapper divs</strong></li>
                      <li>• Use native HTML elements instead of JavaScript recreations</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">CSS</h3>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• <strong className="text-white">Purge unused CSS</strong> with tools like PurgeCSS</li>
                      <li>• Use <strong className="text-white">CSS custom properties</strong> for theming</li>
                      <li>• Prefer <strong className="text-white">CSS for animations</strong> over JavaScript</li>
                      <li>• <strong className="text-white">Critical CSS</strong> should be inlined for above-the-fold</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">JavaScript</h3>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• <strong className="text-white">Question every dependency</strong> — do you really need it?</li>
                      <li>• Use <strong className="text-white">native APIs</strong> when possible</li>
                      <li>• <strong className="text-white">Dynamic imports</strong> for code splitting</li>
                      <li>• <strong className="text-white">Debounce and throttle</strong> expensive operations</li>
                      <li>• Avoid <strong className="text-white">memory leaks</strong> with proper cleanup</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Performance Budget</h3>
                  <p className="text-gray-300 mb-4">Set limits for your project:</p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left text-gray-400 py-2">Metric</th>
                          <th className="text-left text-green-400 py-2">Target</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr><td className="py-2">Total Page Size</td><td>&lt; 1 MB</td></tr>
                        <tr><td className="py-2">JavaScript Bundle</td><td>&lt; 200 KB</td></tr>
                        <tr><td className="py-2">CSS</td><td>&lt; 50 KB</td></tr>
                        <tr><td className="py-2">Largest Image</td><td>&lt; 100 KB</td></tr>
                        <tr><td className="py-2">Third-Party Scripts</td><td>&lt; 10% of total</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeSection === "tools-resources" && (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6">Tools & Resources</h2>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Analysis Tools</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { name: "EcoPulse", desc: "Free website carbon footprint analyzer", link: "/analyze" },
                      { name: "Website Carbon Calculator", desc: "Estimate carbon per page view", link: "#" },
                      { name: "Lighthouse", desc: "Performance and best practices audit", link: "#" },
                      { name: "WebPageTest", desc: "Detailed performance analysis", link: "#" },
                    ].map((tool, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-900/50 border border-gray-700 rounded-xl p-4">
                        <div>
                          <span className="text-white font-medium">{tool.name}</span>
                          <p className="text-gray-400 text-sm">{tool.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Optimization Tools</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { name: "Squoosh", desc: "Browser-based image compression" },
                      { name: "SVGO", desc: "SVG optimization tool" },
                      { name: "PurgeCSS", desc: "Remove unused CSS" },
                      { name: "Bundlephobia", desc: "Check npm package sizes" },
                    ].map((tool, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-900/50 border border-gray-700 rounded-xl p-4">
                        <div>
                          <span className="text-white font-medium">{tool.name}</span>
                          <p className="text-gray-400 text-sm">{tool.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Further Reading</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong className="text-white">Sustainable Web Design</strong> by Tom Greenwood</li>
                    <li>• <strong className="text-white">World Wide Waste</strong> by Gerry McGovern</li>
                    <li>• <strong className="text-white">The Green Web Foundation</strong> resources</li>
                    <li>• <strong className="text-white">Web Sustainability Guidelines</strong> (W3C Community Group)</li>
                  </ul>
                </div>
              )}

              {activeSection === "getting-started" && (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6">Getting Started</h2>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Ready to make your website more sustainable? Here&apos;s a step-by-step action plan.
                  </p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Your Action Plan</h3>
                  <div className="space-y-4 mb-6">
                    {[
                      { week: "Week 1", title: "Measure & Audit", tasks: ["Run EcoPulse analysis", "Document current metrics", "Identify top issues"] },
                      { week: "Week 2", title: "Quick Wins", tasks: ["Compress images", "Enable GZIP", "Remove unused CSS/JS"] },
                      { week: "Week 3", title: "Deep Optimization", tasks: ["Implement lazy loading", "Optimize fonts", "Review third-party scripts"] },
                      { week: "Week 4", title: "Infrastructure", tasks: ["Evaluate green hosting", "Implement caching", "Set up CDN"] },
                    ].map((phase, index) => (
                      <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                            {phase.week}
                          </span>
                          <h4 className="text-white font-bold">{phase.title}</h4>
                        </div>
                        <ul className="space-y-1 text-gray-300 text-sm">
                          {phase.tasks.map((task, i) => (
                            <li key={i}>• {task}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Set Your Goals</h3>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-600" disabled />
                        <span>Achieve Eco Score of <strong className="text-white">A (80+)</strong></span>
                      </li>
                      <li className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-600" disabled />
                        <span>Reduce page size to under <strong className="text-white">1 MB</strong></span>
                      </li>
                      <li className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-600" disabled />
                        <span>Cut carbon emissions by <strong className="text-white">50%</strong></span>
                      </li>
                      <li className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-600" disabled />
                        <span>Switch to <strong className="text-white">green hosting</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                    <h4 className="text-green-400 font-bold mb-3">Start Now</h4>
                    <p className="text-gray-300 mb-4">
                      The first step is understanding where you stand. Analyze your website to get your baseline metrics.
                    </p>
                    <Link
                      href="/analyze"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
                    >
                      Analyze Your Website
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
