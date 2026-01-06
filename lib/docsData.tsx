import React from "react";

export type DocSection = {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
};

const CodeBlock = ({ children, className = "text-green-400" }: { children: string; className?: string }) => (
  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-3 sm:p-6 w-full">
    <pre className={`text-xs sm:text-sm ${className} overflow-x-auto whitespace-pre-wrap wrap-break-word sm:whitespace-pre`}>
      {children}
    </pre>
  </div>
);

const InlineCodeBlock = ({ children, className = "text-green-400" }: { children: string; className?: string }) => (
  <div className="bg-gray-950 rounded-lg p-3 sm:p-4 w-full overflow-x-auto">
    <pre className={`text-xs sm:text-sm ${className} whitespace-pre-wrap wrap-break-word sm:whitespace-pre`}>
      {children}
    </pre>
  </div>
);

export const docSections: DocSection[] = [
  {
    id: "overview",
    title: "Overview",
    icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    content: (
      <div className="space-y-6 max-w-full overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Project Overview</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">EcoPulse</strong> is a modern web application that analyzes websites for their environmental impact, 
            measuring carbon footprint, energy consumption, and providing actionable recommendations for sustainability.
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Key Features</h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
            {[
              { title: "Real-time Analysis:", desc: "Uses Puppeteer to scrape and analyze live websites" },
              { title: "Comprehensive Metrics:", desc: "Carbon emissions, energy consumption, water usage" },
              { title: "Resource Breakdown:", desc: "Detailed analysis of HTML, CSS, JS, images, fonts, and more" },
              { title: "AI-Powered Suggestions:", desc: "Actionable recommendations prioritized by impact" },
              { title: "Historical Tracking:", desc: "MongoDB-powered persistent storage for analysis history" },
              { title: "Community Feedback:", desc: "Built-in feedback and testimonial system" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">{item.title}</strong> {item.desc}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Project Goals</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            The primary goal of EcoPulse is to raise awareness about the environmental impact of digital products 
            and provide developers with the tools they need to build more sustainable websites. By making carbon 
            footprint analysis accessible and actionable, we aim to contribute to a greener internet.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    content: (
      <div className="space-y-6 max-w-full overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">System Architecture</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Application Structure</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            EcoPulse follows a modern Next.js 15 App Router architecture with server and client components.
          </p>

          <CodeBlock>{`ecopulse/
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
├── lib/                     # Core logic
│   ├── resourceAnalyzer.ts  # Puppeteer analysis
│   ├── suggestions.ts       # Recommendation engine
│   └── Calculations/        # Carbon calculations
├── db/
│   └── dbConfig.ts          # MongoDB connection
├── models/                  # Mongoose schemas
└── middleware/
    └── errorHandler.ts      # Error handling`}</CodeBlock>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Request Flow</h3>
          <ol className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
            {[
              { step: "1. User Input:", desc: "User enters URL on result page" },
              { step: "2. API Request:", desc: "POST request to /api/analyze" },
              { step: "3. Puppeteer Scraping:", desc: "Launches headless browser, navigates to URL" },
              { step: "4. Resource Collection:", desc: "Intercepts network requests, scrolls for lazy-loaded content" },
              { step: "5. Analysis:", desc: "Calculates carbon footprint, energy usage, water impact" },
              { step: "6. Database Storage:", desc: "Saves results to MongoDB" },
              { step: "7. Response:", desc: "Returns analysis data to client" },
              { step: "8. Visualization:", desc: "Client renders results with charts and recommendations" },
            ].map((item, i) => (
              <li key={i}><strong className="text-white">{item.step}</strong> {item.desc}</li>
            ))}
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "tech-stack",
    title: "Tech Stack",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    content: (
      <div className="space-y-6 max-w-full overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Technology Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg font-bold text-green-400 mb-4">Frontend</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              {["Next.js 15: React framework with App Router", "TypeScript: Type-safe development", "Tailwind CSS v4: Utility-first styling", "Recharts: Data visualization", "React Hot Toast: Notifications"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span><strong className="text-white">{item.split(":")[0]}:</strong>{item.split(":")[1]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg font-bold text-emerald-400 mb-4">Backend</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              {["Next.js API Routes: Serverless endpoints", "Puppeteer: Headless browser automation", "MongoDB: NoSQL database", "Mongoose: ODM for MongoDB", "Crypto: Hashing for visitor tracking"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span><strong className="text-white">{item.split(":")[0]}:</strong>{item.split(":")[1]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 sm:p-6 mt-6">
          <h3 className="text-lg font-bold text-teal-400 mb-4">Key Dependencies</h3>
          <InlineCodeBlock className="text-gray-300">{`{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.3.1",
    "mongoose": "^8.0.0",
    "puppeteer": "^22.0.0",
    "recharts": "^2.12.0",
    "react-hot-toast": "^2.4.1",
    "axios": "^1.7.0"
  }
}`}</InlineCodeBlock>
        </div>
      </div>
    ),
  },
  {
    id: "best-practices",
    title: "Best Practices",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    content: (
      <div className="space-y-6 max-w-full overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Best Practices &amp; Code Quality</h2>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            EcoPulse follows modern React and TypeScript best practices to ensure maintainable, performant, and type-safe code.
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">React State Management</h3>
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 sm:p-6 mb-6">
            <h4 className="text-green-400 font-bold mb-3">✅ Lazy State Initialization</h4>
            <p className="text-gray-300 text-sm sm:text-base mb-3">
              Use lazy initialization to avoid re-computing expensive values or reading from localStorage on every render:
            </p>
            <InlineCodeBlock>{`// ✅ Good: Lazy initialization
const [data, setData] = useState<AnalysisResult | null>(() => {
  const savedData = localStorage.getItem("analysisData");
  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (error) {
      return null;
    }
  }
  return null;
});

// ❌ Avoid: Setting state in useEffect
useEffect(() => {
  const savedData = localStorage.getItem("analysisData");
  setData(JSON.parse(savedData)); // Can cause cascading renders
}, []);`}</InlineCodeBlock>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">TypeScript Type Safety</h3>
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 sm:p-6 mb-6">
            <h4 className="text-green-400 font-bold mb-3">✅ Proper Type Definitions</h4>
            <p className="text-gray-300 text-sm sm:text-base mb-3">
              Always define explicit types instead of using <code className="bg-gray-800 px-2 py-1 rounded text-red-400">any</code>:
            </p>
            <InlineCodeBlock>{`// ✅ Good: Explicit types for component props
type TooltipProps = {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  // ...
};

// ❌ Avoid: Using any type
const CustomTooltip = ({ active, payload, label }: any) => {
  // No type safety!
};`}</InlineCodeBlock>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Performance Optimization</h3>
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 sm:p-6">
            <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
              <li><strong className="text-white">Avoid Cascading Renders:</strong> Do not call setState synchronously within useEffect.</li>
              <li><strong className="text-white">Memoization:</strong> Use useMemo and useCallback for expensive computations.</li>
              <li><strong className="text-white">Code Splitting:</strong> Dynamic imports for heavy components reduce initial bundle size.</li>
              <li><strong className="text-white">Image Optimization:</strong> Next.js Image component automatically optimizes images.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "database",
    title: "Database",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    content: (
      <div className="space-y-6 max-w-full overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Database Design</h2>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed">
            EcoPulse uses MongoDB with Mongoose ODM for data persistence. Three main collections store application data.
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Scan Collection</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4">Stores complete website analysis results.</p>
          <CodeBlock>{`const ScanSchema = new Schema({
  url: { type: String, required: true },
  normalizedUrl: { type: String, required: true },
  ecoScore: {
    value: Number, score: Number, label: String, color: String
  },
  pageSizeMB: Number,
  resources: {
    html: Number, css: Number, javascript: Number, images: Number,
    fonts: Number, video: Number, xhr: Number, other: Number, thirdParty: Number
  },
  impacts: { energyWH: Number, carbon: Number, water: Number },
  createdAt: { type: Date, default: Date.now }
});`}</CodeBlock>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Visitor Collection</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4">Tracks unique visitors for statistics (privacy-focused).</p>
          <CodeBlock>{`const VisitorSchema = new Schema({
  visitorId: { type: String, required: true, unique: true }, // SHA256 hash
  ip: String,          // Partial IP (XXX.***.***) 
  userAgent: String,   // For deduplication
  pageVisited: String,
  visitedAt: { type: Date, default: Date.now }
});`}</CodeBlock>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Feedback Collection</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4">Stores user feedback and testimonials.</p>
          <CodeBlock>{`const FeedbackSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  role: { type: String },
  rating: { type: Number, required: true, min: 1, max: 5 },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});`}</CodeBlock>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Environment Setup</h3>
          <CodeBlock className="text-gray-300">{`# .env.local
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecopulse`}</CodeBlock>
        </div>
      </div>
    ),
  },
  {
    id: "api",
    title: "API Routes",
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    content: (
      <div className="space-y-6 max-w-full overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">API Routes</h2>

        <div className="space-y-6 sm:space-y-8">
          {[
            {
              method: "POST", color: "green", endpoint: "/api/analyze",
              description: "Analyzes a website and returns environmental metrics.",
              request: `{ "url": "https://example.com" }`,
              response: `{
  "success": true,
  "data": {
    "url": "https://example.com",
    "ecoScore": { "value": 85, "label": "A", "color": "#22c55e" },
    "pageSizeMB": 2.34,
    "resources": { "html": 45, "css": 123, "javascript": 890 },
    "impacts": { "energyWH": 0.0234, "carbon": 10.34, "water": 15.5 },
    "suggestions": [...]
  }
}`
            },
            {
              method: "GET", color: "blue", endpoint: "/api/stats",
              description: "Returns aggregate statistics.",
              response: `{
  "success": true,
  "data": {
    "totalScans": 1234,
    "averageEcoScore": "B+",
    "uniqueVisitors": 5678
  }
}`
            },
            {
              method: "POST", color: "green", endpoint: "/api/visitor",
              description: "Tracks unique visitors (once per day per visitor).",
              request: `{ "page": "/about" }`
            },
            {
              method: "GET/POST", color: "blue", endpoint: "/api/feedback",
              description: "Manages user feedback and testimonials.",
              request: `{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "Developer",
  "rating": 5,
  "message": "Great tool!"
}`
            },
          ].map((api, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 sm:p-6">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                <span className={`px-2 sm:px-3 py-1 bg-${api.color}-500/20 text-${api.color}-400 rounded-full text-xs sm:text-sm font-bold`}>
                  {api.method}
                </span>
                <code className="text-white text-sm sm:text-lg break-all">{api.endpoint}</code>
              </div>
              <p className="text-gray-300 mb-4">{api.description}</p>
              {api.request && (
                <>
                  <h4 className="text-white font-bold mb-2">Request Body:</h4>
                  <InlineCodeBlock>{api.request}</InlineCodeBlock>
                </>
              )}
              {api.response && (
                <div className="mt-4">
                  <h4 className="text-white font-bold mb-2">Response:</h4>
                  <InlineCodeBlock>{api.response}</InlineCodeBlock>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "analysis",
    title: "Analysis Engine",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    content: (
      <div className="space-y-6 max-w-full overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Analysis Engine</h2>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">How It Works</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            The analysis engine uses Puppeteer to scrape websites and calculate their environmental impact.
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Step 1: Resource Collection</h3>
          <CodeBlock>{`// lib/resourceAnalyzer.ts
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

await page.waitForNetworkIdle({ timeout: 5000 });`}</CodeBlock>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Step 2: Resource Categorization</h3>
          <CodeBlock>{`function bucketByResourceType(type: string): keyof Resources {
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
}`}</CodeBlock>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Step 3: Carbon Calculation</h3>
          <CodeBlock>{`// lib/Calculations/calculations.ts
export function calculateImpact(pageSizeMB: number) {
  const KWH_PER_GB = 0.81;           // Energy per GB transfer
  const CO2_PER_KWH = 442;           // Global avg carbon intensity
  const WATER_PER_KWH = 1.5;         // Liters of water per kWh

  const energyWH = (pageSizeMB / 1024) * KWH_PER_GB * 1000;
  const carbon = (energyWH / 1000) * CO2_PER_KWH;
  const water = (energyWH / 1000) * WATER_PER_KWH;

  return { energyWH, carbon, water };
}`}</CodeBlock>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Step 4: Eco Score Calculation</h3>
          <CodeBlock>{`// lib/Calculations/ecoScore.ts
export function calculateEcoScore(pageSizeMB: number, jsSize: number, thirdPartySize: number) {
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
}`}</CodeBlock>
        </div>
      </div>
    ),
  },
  {
    id: "deployment",
    title: "Deployment",
    icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
    content: (
      <div className="space-y-6 max-w-full overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Deployment Guide</h2>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Local Development</h3>
          <CodeBlock className="text-gray-300">{`# Install dependencies
npm install

# Set up environment variables
# Create .env.local with:
MONGODB_URI=your_mongodb_connection_string

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start`}</CodeBlock>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Vercel Deployment</h3>
          <ol className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
            <li><strong className="text-white">1. Push to GitHub:</strong> Push your code to a GitHub repository</li>
            <li><strong className="text-white">2. Import to Vercel:</strong> Connect your GitHub repo to Vercel</li>
            <li><strong className="text-white">3. Configure Environment:</strong> Add <code className="bg-gray-900 px-2 py-1 rounded text-green-400">MONGODB_URI</code> in Vercel dashboard</li>
            <li><strong className="text-white">4. Deploy:</strong> Vercel will automatically build and deploy</li>
          </ol>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-6">
            <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Important: Puppeteer Configuration
            </h4>
            <p className="text-yellow-200/80">
              Vercel requires special configuration for Puppeteer. The code already includes Chromium executable for serverless environments.
            </p>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">MongoDB Atlas Setup</h3>
          <ol className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
            <li><strong className="text-white">1. Create Cluster:</strong> Sign up at MongoDB Atlas</li>
            <li><strong className="text-white">2. Whitelist IPs:</strong> Add <code className="bg-gray-900 px-2 py-1 rounded text-green-400">0.0.0.0/0</code> for Vercel</li>
            <li><strong className="text-white">3. Create Database:</strong> Name it <code className="bg-gray-900 px-2 py-1 rounded text-green-400">ecopulse</code></li>
            <li><strong className="text-white">4. Get Connection String:</strong> Copy the connection URI</li>
          </ol>

          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-4">Performance Optimization</h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
            {["Use Incremental Static Regeneration for stats pages", "Implement caching for frequently analyzed URLs", "Add rate limiting to prevent abuse", "Use database indexing on frequently queried fields"].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
];

export function getDocSection(id: string): DocSection | undefined {
  return docSections.find((section) => section.id === id);
}
