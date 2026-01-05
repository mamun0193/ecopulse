"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Overview", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: "architecture", title: "Architecture", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { id: "tech-stack", title: "Tech Stack", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
    { id: "best-practices", title: "Best Practices", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: "database", title: "Database", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
    { id: "api", title: "API Routes", icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { id: "analysis", title: "Analysis Engine", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { id: "deployment", title: "Deployment", icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" },
  ];

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
            <span className="text-green-400 text-sm font-medium">Technical Documentation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">EcoPulse</span> Documentation
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Complete technical reference for developers. Learn how EcoPulse was built from the ground up.
          </p>
        </div>
      </section>

      {/* Documentation Content */}
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
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all flex items-center gap-3 ${
                      activeSection === section.id
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                    </svg>
                    <span className="font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
              {activeSection === "overview" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      <strong className="text-white">EcoPulse</strong> is a modern web application that analyzes websites for their environmental impact, 
                      measuring carbon footprint, energy consumption, and providing actionable recommendations for sustainability.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Key Features</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="text-white">Real-time Analysis:</strong> Uses Puppeteer to scrape and analyze live websites</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="text-white">Comprehensive Metrics:</strong> Carbon emissions, energy consumption, water usage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="text-white">Resource Breakdown:</strong> Detailed analysis of HTML, CSS, JS, images, fonts, and more</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="text-white">AI-Powered Suggestions:</strong> Actionable recommendations prioritized by impact</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="text-white">Historical Tracking:</strong> MongoDB-powered persistent storage for analysis history</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="text-white">Community Feedback:</strong> Built-in feedback and testimonial system</span>
                      </li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Project Goals</h3>
                    <p className="text-gray-300 leading-relaxed">
                      The primary goal of EcoPulse is to raise awareness about the environmental impact of digital products 
                      and provide developers with the tools they need to build more sustainable websites. By making carbon 
                      footprint analysis accessible and actionable, we aim to contribute to a greener internet.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "architecture" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-4">System Architecture</h2>

                  <div className="prose prose-invert max-w-none">
                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Application Structure</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      EcoPulse follows a modern Next.js 15 App Router architecture with server and client components.
                    </p>

                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                      <pre className="text-green-400 text-sm overflow-x-auto">
{`ecopulse/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── about/               # About page
│   ├── features/            # Features page
│   ├── feedback/            # Feedback page
│   ├── result/              # Analysis results page
│   ├── docs/                # Documentation page
│   ├── api/                 # API Routes
│   │   ├── analyze/         # Website analysis endpoint
│   │   ├── stats/           # Statistics aggregation
│   │   ├── visitor/         # Visitor tracking
│   │   └── feedback/        # Feedback CRUD
│   └── types/
│       └── analysis.ts      # TypeScript types
├── components/              # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── AnalysisResults.tsx
│   └── Graph.tsx
├── lib/                     # Core logic
│   ├── resourceAnalyzer.ts # Puppeteer analysis
│   ├── suggestions.ts       # Recommendation engine
│   └── Calculations/
│       ├── calculations.ts  # Carbon calculations
│       ├── ecoScore.ts      # Scoring algorithm
│       └── thresholds.ts    # Score thresholds
├── db/
│   └── dbConfig.ts         # MongoDB connection
├── models/                  # Mongoose schemas
│   ├── Scan.ts
│   ├── Visitor.ts
│   └── Feedback.ts
└── middleware/
    └── errorHandler.ts     # Error handling`}
                      </pre>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Request Flow</h3>
                    <ol className="space-y-4 text-gray-300">
                      <li>
                        <strong className="text-white">1. User Input:</strong> User enters URL on result page
                      </li>
                      <li>
                        <strong className="text-white">2. API Request:</strong> POST request to <code className="bg-gray-900 px-2 py-1 rounded text-green-400">/api/analyze</code>
                      </li>
                      <li>
                        <strong className="text-white">3. Puppeteer Scraping:</strong> Launches headless browser, navigates to URL
                      </li>
                      <li>
                        <strong className="text-white">4. Resource Collection:</strong> Intercepts network requests, scrolls for lazy-loaded content
                      </li>
                      <li>
                        <strong className="text-white">5. Analysis:</strong> Calculates carbon footprint, energy usage, water impact
                      </li>
                      <li>
                        <strong className="text-white">6. Database Storage:</strong> Saves results to MongoDB
                      </li>
                      <li>
                        <strong className="text-white">7. Response:</strong> Returns analysis data to client
                      </li>
                      <li>
                        <strong className="text-white">8. Visualization:</strong> Client renders results with charts and recommendations
                      </li>
                    </ol>
                  </div>
                </div>
              )}

              {activeSection === "tech-stack" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-4">Technology Stack</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-green-400 mb-4">Frontend</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          <strong className="text-white">Next.js 15:</strong> React framework with App Router
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          <strong className="text-white">TypeScript:</strong> Type-safe development
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          <strong className="text-white">Tailwind CSS v4:</strong> Utility-first styling
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          <strong className="text-white">Recharts:</strong> Data visualization
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          <strong className="text-white">React Hot Toast:</strong> Notifications
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-emerald-400 mb-4">Backend</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                          <strong className="text-white">Next.js API Routes:</strong> Serverless endpoints
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                          <strong className="text-white">Puppeteer:</strong> Headless browser automation
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                          <strong className="text-white">MongoDB:</strong> NoSQL database
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                          <strong className="text-white">Mongoose:</strong> ODM for MongoDB
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                          <strong className="text-white">Crypto:</strong> Hashing for visitor tracking
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mt-6">
                    <h3 className="text-lg font-bold text-teal-400 mb-4">Key Dependencies</h3>
                    <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-300">
{`{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.3.1",
    "mongoose": "^8.0.0",
    "puppeteer": "^22.0.0",
    "recharts": "^2.12.0",
    "react-hot-toast": "^2.4.1",
    "axios": "^1.7.0"
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "best-practices" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-4">Best Practices & Code Quality</h2>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      EcoPulse follows modern React and TypeScript best practices to ensure maintainable, 
                      performant, and type-safe code.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">React State Management</h3>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                      <h4 className="text-green-400 font-bold mb-3">✅ Lazy State Initialization</h4>
                      <p className="text-gray-300 mb-3">
                        Use lazy initialization to avoid re-computing expensive values or reading from localStorage on every render:
                      </p>
                      <pre className="text-sm text-green-400 overflow-x-auto bg-gray-950 rounded-lg p-4">
{`// ✅ Good: Lazy initialization
const [data, setData] = useState<AnalysisResult | null>(() => {
  const savedData = localStorage.getItem("analysisData");
  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (error) {
      console.error("Error parsing saved data:", error);
      return null;
    }
  }
  return null;
});

// ❌ Avoid: Setting state in useEffect
useEffect(() => {
  const savedData = localStorage.getItem("analysisData");
  setData(JSON.parse(savedData)); // Can cause cascading renders
}, []);`}
                      </pre>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">TypeScript Type Safety</h3>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                      <h4 className="text-green-400 font-bold mb-3">✅ Proper Type Definitions</h4>
                      <p className="text-gray-300 mb-3">
                        Always define explicit types instead of using <code className="bg-gray-800 px-2 py-1 rounded text-red-400">any</code>:
                      </p>
                      <pre className="text-sm text-green-400 overflow-x-auto bg-gray-950 rounded-lg p-4">
{`// ✅ Good: Explicit types for component props
type TooltipProps = {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  // ...
};

type ResourcesInput = {
  html: number;
  css: number;
  js: number;
  image: number;
  apiBytes: number;
  thirdPartyAPIBytes: number;
}

export default function Graph({ resources }: { resources: ResourcesInput }) {
  // ...
}

// ❌ Avoid: Using any type
const CustomTooltip = ({ active, payload, label }: any) => {
  // No type safety!
};`}
                      </pre>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Component Patterns</h3>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                      <h4 className="text-emerald-400 font-bold mb-3">Client vs Server Components</h4>
                      <p className="text-gray-300 mb-3">
                        Use <code className="bg-gray-800 px-2 py-1 rounded text-green-400">"use client"</code> only when necessary:
                      </p>
                      <ul className="space-y-2 text-gray-300 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span>Client components: useState, useEffect, event handlers, browser APIs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span>Server components: Direct database access, server-side data fetching</span>
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Performance Optimization</h3>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <ul className="space-y-4 text-gray-300">
                        <li>
                          <strong className="text-white">Avoid Cascading Renders:</strong> Don't call setState synchronously 
                          within useEffect. Use lazy initialization instead.
                        </li>
                        <li>
                          <strong className="text-white">Memoization:</strong> Use useMemo and useCallback for expensive 
                          computations and callback functions passed to child components.
                        </li>
                        <li>
                          <strong className="text-white">Code Splitting:</strong> Dynamic imports for heavy components 
                          reduce initial bundle size.
                        </li>
                        <li>
                          <strong className="text-white">Image Optimization:</strong> Next.js Image component automatically 
                          optimizes images for different screen sizes.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mt-6">
                      <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        ESLint & Type Checking
                      </h4>
                      <p className="text-blue-200/80">
                        The project uses ESLint and TypeScript strict mode to catch common errors. 
                        Run <code className="bg-gray-900 px-2 py-1 rounded text-green-400">npm run lint</code> before committing.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "database" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-4">Database Design</h2>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed">
                      EcoPulse uses MongoDB with Mongoose ODM for data persistence. Three main collections store application data.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Scan Collection</h3>
                    <p className="text-gray-300 mb-4">Stores complete website analysis results.</p>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <pre className="text-sm text-green-400 overflow-x-auto">
{`const ScanSchema = new Schema({
  url: { type: String, required: true },
  normalizedUrl: { type: String, required: true },
  ecoScore: {
    value: Number,
    score: Number,
    label: String,
    color: String
  },
  pageSizeMB: Number,
  resources: {
    html: Number,
    css: Number,
    javascript: Number,
    images: Number,
    fonts: Number,
    video: Number,
    xhr: Number,
    other: Number,
    thirdParty: Number
  },
  impacts: {
    energyWH: Number,
    carbon: Number,
    water: Number
  },
  createdAt: { type: Date, default: Date.now }
});`}
                      </pre>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Visitor Collection</h3>
                    <p className="text-gray-300 mb-4">Tracks unique visitors for statistics (privacy-focused).</p>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <pre className="text-sm text-green-400 overflow-x-auto">
{`const VisitorSchema = new Schema({
  visitorId: { 
    type: String, 
    required: true, 
    unique: true 
  }, // SHA256 hash
  ip: String,          // Partial IP (XXX.***.***) 
  userAgent: String,   // For deduplication
  pageVisited: String,
  visitedAt: { type: Date, default: Date.now }
});`}
                      </pre>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Feedback Collection</h3>
                    <p className="text-gray-300 mb-4">Stores user feedback and testimonials.</p>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <pre className="text-sm text-green-400 overflow-x-auto">
{`const FeedbackSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  role: { type: String },
  rating: { 
    type: Number, 
    required: true, 
    min: 1, 
    max: 5 
  },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});`}
                      </pre>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Newsletter Subscribers</h3>
                    <p className="text-gray-300 mb-4">Stores email subscribers from the footer newsletter.</p>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <pre className="text-sm text-green-400 overflow-x-auto">
{`const SubscriberSchema = new Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    match: /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/
  },
  subscribedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});`}
                      </pre>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Environment Setup</h3>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <pre className="text-sm text-gray-300">
{`# .env.local
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecopulse`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "api" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-4">API Routes</h2>

                  <div className="space-y-8">
                    {/* Analyze Endpoint */}
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">POST</span>
                        <code className="text-white text-lg">/api/analyze</code>
                      </div>
                      <p className="text-gray-300 mb-4">Analyzes a website and returns environmental metrics.</p>
                      
                      <h4 className="text-white font-bold mb-2">Request Body:</h4>
                      <div className="bg-gray-950 rounded-lg p-4 mb-4">
                        <pre className="text-sm text-green-400">
{`{
  "url": "https://example.com"
}`}
                        </pre>
                      </div>

                      <h4 className="text-white font-bold mb-2">Response:</h4>
                      <div className="bg-gray-950 rounded-lg p-4">
                        <pre className="text-sm text-green-400 overflow-x-auto">
{`{
  "success": true,
  "data": {
    "url": "https://example.com",
    "ecoScore": { "value": 85, "score": 85, "label": "A", "color": "#22c55e" },
    "pageSizeMB": 2.34,
    "resources": { "html": 45, "css": 123, "javascript": 890, ... },
    "impacts": { "energyWH": 0.0234, "carbon": 10.34, "water": 15.5 },
    "suggestions": [...]
  }
}`}
                        </pre>
                      </div>
                    </div>

                    {/* Stats Endpoint */}
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold">GET</span>
                        <code className="text-white text-lg">/api/stats</code>
                      </div>
                      <p className="text-gray-300 mb-4">Returns aggregate statistics.</p>
                      
                      <h4 className="text-white font-bold mb-2">Response:</h4>
                      <div className="bg-gray-950 rounded-lg p-4">
                        <pre className="text-sm text-green-400">
{`{
  "success": true,
  "data": {
    "totalScans": 1234,
    "averageEcoScore": "B+",
    "uniqueVisitors": 5678
  }
}`}
                        </pre>
                      </div>
                    </div>

                    {/* Visitor Endpoint */}
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">POST</span>
                        <code className="text-white text-lg">/api/visitor</code>
                      </div>
                      <p className="text-gray-300 mb-4">Tracks unique visitors (once per day per visitor).</p>
                      
                      <h4 className="text-white font-bold mb-2">Request Body:</h4>
                      <div className="bg-gray-950 rounded-lg p-4">
                        <pre className="text-sm text-green-400">
{`{
  "page": "/about"
}`}
                        </pre>
                      </div>
                    </div>

                    {/* Feedback Endpoint */}
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold">GET</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">POST</span>
                        <code className="text-white text-lg">/api/feedback</code>
                      </div>
                      <p className="text-gray-300 mb-4">Manages user feedback and testimonials.</p>
                      
                      <h4 className="text-white font-bold mb-2">GET Query Parameters:</h4>
                      <ul className="text-gray-300 mb-4 space-y-1">
                        <li><code className="text-green-400">?rating=5</code> - Filter by rating</li>
                        <li><code className="text-green-400">?limit=10</code> - Limit results</li>
                        <li><code className="text-green-400">?homepage=true</code> - Get latest 3 five-star reviews</li>
                      </ul>

                      <h4 className="text-white font-bold mb-2">POST Request Body:</h4>
                      <div className="bg-gray-950 rounded-lg p-4">
                        <pre className="text-sm text-green-400">
{`{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "Developer",
  "rating": 5,
  "message": "Great tool!"
}`}
                        </pre>
                      </div>
                    </div>

                    {/* Subscribe Endpoint */}
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold">GET</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">POST</span>
                        <code className="text-white text-lg">/api/subscribe</code>
                      </div>
                      <p className="text-gray-300 mb-4">Manages newsletter subscriptions from footer.</p>
                      
                      <h4 className="text-white font-bold mb-2">POST Request Body:</h4>
                      <div className="bg-gray-950 rounded-lg p-4 mb-4">
                        <pre className="text-sm text-green-400">
{`{
  "email": "user@example.com"
}`}
                        </pre>
                      </div>

                      <h4 className="text-white font-bold mb-2">Response:</h4>
                      <div className="bg-gray-950 rounded-lg p-4 mb-4">
                        <pre className="text-sm text-green-400">
{`{
  "success": true,
  "message": "Successfully subscribed! Thank you for joining us.",
  "data": { "email": "user@example.com" }
}`}
                        </pre>
                      </div>

                      <h4 className="text-white font-bold mb-2">GET Query Parameters:</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li><code className="text-green-400">?limit=50</code> - Limit results (default: 50)</li>
                        <li><code className="text-green-400">?active=true</code> - Get only active subscribers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "analysis" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-4">Analysis Engine</h2>

                  <div className="prose prose-invert max-w-none">
                    <h3 className="text-xl font-bold text-white mb-4">How It Works</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      The analysis engine uses Puppeteer to scrape websites and calculate their environmental impact.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Step 1: Resource Collection</h3>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                      <pre className="text-sm text-green-400 overflow-x-auto">
{`// lib/resourceAnalyzer.ts
const page = await browser.newPage();

// Intercept all network requests
await page.setRequestInterception(true);
page.on('request', (request) => {
  const url = request.url();
  const type = request.resourceType();
  // Track resource size and type
});

// Scroll page to trigger lazy-loaded images
for (let i = 0; i < 5000; i += 500) {
  await page.evaluate(\`window.scrollTo(0, \${i})\`);
  await page.waitForTimeout(100);
}

// Wait for network to be idle
await page.waitForNetworkIdle({ timeout: 5000 });`}
                      </pre>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Step 2: Resource Categorization</h3>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                      <pre className="text-sm text-green-400 overflow-x-auto">
{`function bucketByResourceType(type: string): keyof Resources {
  const typeMap: Record<string, keyof Resources> = {
    document: 'html',
    stylesheet: 'css',
    script: 'javascript',
    image: 'images',
    font: 'fonts',
    video: 'video',
    media: 'video',
    xhr: 'xhr',
    fetch: 'xhr'
  };
  return typeMap[type] || 'other';
}`}
                      </pre>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Step 3: Carbon Calculation</h3>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                      <pre className="text-sm text-green-400 overflow-x-auto">
{`// lib/Calculations/calculations.ts
export function calculateImpact(pageSizeMB: number) {
  const KWH_PER_GB = 0.81;           // Energy per GB transfer
  const CO2_PER_KWH = 442;           // Global avg carbon intensity
  const WATER_PER_KWH = 1.5;         // Liters of water per kWh

  const energyWH = (pageSizeMB / 1024) * KWH_PER_GB * 1000;
  const carbon = (energyWH / 1000) * CO2_PER_KWH;
  const water = (energyWH / 1000) * WATER_PER_KWH;

  return { energyWH, carbon, water };
}`}
                      </pre>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Step 4: Eco Score Calculation</h3>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <pre className="text-sm text-green-400 overflow-x-auto">
{`// lib/Calculations/ecoScore.ts
export function calculateEcoScore(
  pageSizeMB: number,
  jsSize: number,
  thirdPartySize: number
) {
  let score = 100;

  // Penalize large page size
  if (pageSizeMB > 3) score -= (pageSizeMB - 3) * 10;
  
  // Penalize excessive JavaScript
  const jsPercent = (jsSize / (pageSizeMB * 1024)) * 100;
  if (jsPercent > 30) score -= (jsPercent - 30);
  
  // Penalize third-party resources
  const thirdPartyPercent = (thirdPartySize / (pageSizeMB * 1024)) * 100;
  if (thirdPartyPercent > 20) score -= (thirdPartyPercent - 20) * 1.5;

  return Math.max(0, Math.min(100, score));
}`}
                      </pre>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Step 5: Generate Recommendations</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Based on the analysis, the system generates prioritized suggestions for optimization, 
                      including image compression, JavaScript minification, lazy loading, and more.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "deployment" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-4">Deployment Guide</h2>

                  <div className="prose prose-invert max-w-none">
                    <h3 className="text-xl font-bold text-white mb-4">Local Development</h3>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
                      <pre className="text-sm text-gray-300">
{`# Install dependencies
npm install

# Set up environment variables
# Create .env.local with:
MONGODB_URI=your_mongodb_connection_string

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start`}
                      </pre>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Vercel Deployment</h3>
                    <ol className="space-y-4 text-gray-300">
                      <li>
                        <strong className="text-white">1. Push to GitHub:</strong> Push your code to a GitHub repository
                      </li>
                      <li>
                        <strong className="text-white">2. Import to Vercel:</strong> Connect your GitHub repo to Vercel
                      </li>
                      <li>
                        <strong className="text-white">3. Configure Environment:</strong> Add <code className="bg-gray-900 px-2 py-1 rounded text-green-400">MONGODB_URI</code> in Vercel dashboard
                      </li>
                      <li>
                        <strong className="text-white">4. Deploy:</strong> Vercel will automatically build and deploy
                      </li>
                    </ol>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-6">
                      <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Important: Puppeteer Configuration
                      </h4>
                      <p className="text-yellow-200/80">
                        Vercel requires special configuration for Puppeteer. The code already includes Chromium 
                        executable for serverless environments. No additional setup needed.
                      </p>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">MongoDB Atlas Setup</h3>
                    <ol className="space-y-4 text-gray-300">
                      <li>
                        <strong className="text-white">1. Create Cluster:</strong> Sign up at <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noopener" className="text-green-400 hover:underline">MongoDB Atlas</a>
                      </li>
                      <li>
                        <strong className="text-white">2. Whitelist IPs:</strong> Add <code className="bg-gray-900 px-2 py-1 rounded text-green-400">0.0.0.0/0</code> for Vercel
                      </li>
                      <li>
                        <strong className="text-white">3. Create Database:</strong> Name it <code className="bg-gray-900 px-2 py-1 rounded text-green-400">ecopulse</code>
                      </li>
                      <li>
                        <strong className="text-white">4. Get Connection String:</strong> Copy the connection URI
                      </li>
                    </ol>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Performance Optimization</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Use <strong className="text-white">Incremental Static Regeneration</strong> for stats pages</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Implement <strong className="text-white">caching</strong> for frequently analyzed URLs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Add <strong className="text-white">rate limiting</strong> to prevent abuse</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Use <strong className="text-white">database indexing</strong> on frequently queried fields</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="mt-8 bg-linear-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  href="https://github.com/mamun0193/ecopulse.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-green-500/50 transition-all group"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-gray-300 group-hover:text-white font-medium">View Source</span>
                </Link>
                <Link
                  href="/analyze"
                  className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-green-500/50 transition-all group"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-gray-300 group-hover:text-white font-medium">Try Analysis</span>
                </Link>
                <Link
                  href="/feedback"
                  className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-green-500/50 transition-all group"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-gray-300 group-hover:text-white font-medium">Give Feedback</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
