"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const faqData: FAQItem[] = [
  // General Questions
  {
    category: "General",
    question: "What is EcoPulse?",
    answer: "EcoPulse is a free web tool that analyzes websites to measure their environmental impact. We calculate carbon emissions, energy consumption, and water usage based on page size, resources loaded, and other factors. Our goal is to help developers build more sustainable websites."
  },
  {
    category: "General",
    question: "Is EcoPulse free to use?",
    answer: "Yes! EcoPulse is completely free to use. You can analyze unlimited websites and access all features without any cost. We believe environmental awareness should be accessible to everyone."
  },
  {
    category: "General",
    question: "How accurate are the environmental impact calculations?",
    answer: "Our calculations are based on industry-standard methodologies and research data. We use average carbon intensity values (442g CO2/kWh), energy consumption estimates (0.81 kWh/GB), and water usage factors. While these are estimates, they provide a reliable baseline for comparison and optimization."
  },
  {
    category: "General",
    question: "Can I analyze any website?",
    answer: "You can analyze most publicly accessible websites. However, some sites may block automated access or have security measures that prevent analysis. Private or password-protected pages cannot be analyzed."
  },

  // Technical Questions
  {
    category: "Technical",
    question: "How does EcoPulse analyze websites?",
    answer: "We use Puppeteer (a headless Chrome browser) to load your website exactly as a real user would. We intercept all network requests, measure resource sizes, track load times, and analyze the page structure. This data is then processed through our environmental impact algorithms."
  },
  {
    category: "Technical",
    question: "What factors affect a website's Eco Score?",
    answer: "Several factors influence the Eco Score: total page size, amount of JavaScript, third-party resources, image optimization, caching headers, and overall resource efficiency. Smaller, optimized pages with minimal JavaScript score higher."
  },
  {
    category: "Technical",
    question: "What does the carbon footprint measurement mean?",
    answer: "The carbon footprint (measured in grams of CO2) represents the estimated greenhouse gas emissions produced each time someone loads your webpage. This includes the energy used by data centers, networks, and the user's device."
  },
  {
    category: "Technical",
    question: "How is energy consumption calculated?",
    answer: "Energy consumption is calculated based on the amount of data transferred. We use the formula: Energy (kWh) = Data (GB) × 0.81 kWh/GB. This accounts for data center operations, network infrastructure, and end-user device energy."
  },
  {
    category: "Technical",
    question: "Why do you measure water usage?",
    answer: "Data centers require significant water for cooling systems. We estimate water usage at 1.5 liters per kWh of energy consumed. This helps provide a complete picture of environmental impact beyond just carbon emissions."
  },

  // Optimization Questions
  {
    category: "Optimization",
    question: "How can I improve my website's Eco Score?",
    answer: "Focus on these key areas: 1) Compress and optimize images (use WebP/AVIF), 2) Minimize JavaScript and remove unused code, 3) Enable caching and compression, 4) Reduce third-party scripts, 5) Use lazy loading for images and videos, 6) Choose green hosting providers."
  },
  {
    category: "Optimization",
    question: "What is a good Eco Score?",
    answer: "An 'A' rating (80-100) indicates excellent environmental efficiency. 'B' (60-79) is good but has room for improvement. 'C' (40-59) is average. 'D' (20-39) needs significant optimization. 'F' (0-19) indicates serious issues that should be addressed."
  },
  {
    category: "Optimization",
    question: "How much impact do images have?",
    answer: "Images often account for 50-80% of a webpage's total size. Optimizing images through compression, using modern formats (WebP, AVIF), and implementing lazy loading can dramatically reduce your environmental impact."
  },
  {
    category: "Optimization",
    question: "Should I remove all third-party scripts?",
    answer: "Not necessarily, but you should audit them. Each third-party script adds to page weight and energy consumption. Keep essential ones (like analytics) but remove unused plugins, trackers, and widgets. Consider self-hosting critical resources."
  },

  // Privacy & Data Questions
  {
    category: "Privacy",
    question: "What data do you collect when I analyze a website?",
    answer: "We store the analyzed URL, page metrics, and analysis results for aggregate statistics. We also track anonymous visitor data (hashed IP + user agent) to count unique visitors. We do not store personal information unless you provide feedback or subscribe to our newsletter."
  },
  {
    category: "Privacy",
    question: "Can website owners see that I analyzed their site?",
    answer: "No, website owners cannot identify that you specifically analyzed their site. Our analysis appears as a regular page visit from our servers. We don't notify website owners or share analysis data with them."
  },
  {
    category: "Privacy",
    question: "Do you sell user data?",
    answer: "Absolutely not. We do not sell, trade, or share personal data with third parties for commercial purposes. We only use data to improve our services and generate aggregate statistics."
  },

  // About the Project
  {
    category: "About",
    question: "Who created EcoPulse?",
    answer: "EcoPulse was created by Mamun Rahaman, a developer passionate about sustainable technology. The project aims to raise awareness about the environmental impact of the internet and provide tools for greener web development."
  },
  {
    category: "About",
    question: "Is EcoPulse open source?",
    answer: "Yes! EcoPulse is open source and available on GitHub. You can view the code, contribute improvements, or fork the project for your own use. We believe in transparency and community collaboration."
  },
  {
    category: "About",
    question: "How can I contribute to EcoPulse?",
    answer: "There are several ways to contribute: 1) Submit feedback and suggestions, 2) Report bugs or issues, 3) Contribute code on GitHub, 4) Share EcoPulse with others, 5) Write about sustainable web development."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", ...new Set(faqData.map(item => item.category))];

  const filteredFAQs = faqData.filter(({ category, question, answer }) => {
    const matchesCategory = activeCategory === "all" || category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query || 
      question.toLowerCase().includes(query) ||
      answer.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <span className="text-green-400 text-sm font-medium">Help Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about EcoPulse, website analysis, and sustainable web development.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700"
              }`}
            >
              {category === "all" ? "All Questions" : category}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-400 text-lg">No questions found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 text-green-400 hover:text-green-300 transition-colors cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredFAQs.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/30 border border-gray-700/50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded">
                      {item.category}
                    </span>
                    <span className="text-white font-medium pr-4">{item.question}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-green-400 shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-0">
                    <div className="border-t border-gray-700/50 pt-4">
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 text-center bg-linear-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
          <p className="text-gray-400 mb-6">
            Can&apos;t find what you&apos;re looking for? We&apos;d love to hear from you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/feedback"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Send Feedback
            </Link>
            <a
              href="mailto:ecopulse.dev@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
