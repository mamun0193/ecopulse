# EcoPulse 🌱

> **Analyze your website's environmental impact with real-time carbon footprint analysis**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

EcoPulse is a comprehensive web application that analyzes websites for their environmental impact, measuring carbon footprint, energy consumption, and providing actionable recommendations for sustainability. Built with modern web technologies, it helps developers and businesses understand and reduce their digital carbon footprint.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Architecture](#-architecture)
- [Database Design](#-database-design)
- [API Documentation](#-api-documentation)
- [Analysis Engine](#-analysis-engine)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### Core Functionality
- **🔍 Real-time Website Analysis** - Uses Puppeteer to scrape and analyze live websites
- **📊 Comprehensive Metrics** - Carbon emissions, energy consumption, water usage
- **📈 Resource Breakdown** - Detailed analysis of HTML, CSS, JS, images, fonts, videos, and third-party resources
- **🎯 Eco Score** - Letter grade rating (A+ to F) based on environmental efficiency
- **💡 Smart Recommendations** - AI-powered, prioritized suggestions for optimization
- **📜 Historical Tracking** - MongoDB-powered persistent storage for analysis history

### User Experience
- **🎨 Modern UI** - Dark theme with green/emerald accents built with Tailwind CSS v4
- **📱 Fully Responsive** - Optimized for all screen sizes
- **⚡ Fast Performance** - Server-side rendering with Next.js 15 App Router
- **💬 Feedback System** - Built-in community feedback and testimonials
- **👥 Visitor Tracking** - Privacy-focused unique visitor analytics
- **📚 Documentation** - Complete technical documentation for developers

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first styling
- **[Recharts](https://recharts.org/)** - Data visualization
- **[React Hot Toast](https://react-hot-toast.com/)** - Toast notifications

### Backend
- **[Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)** - Serverless endpoints
- **[Puppeteer](https://pptr.dev/)** - Headless browser automation
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[Mongoose](https://mongoosejs.com/)** - ODM for MongoDB
- **Node.js Crypto** - Hashing for visitor tracking

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- A working Chrome/Chromium install (Puppeteer will download its own)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ecopulse.git
cd ecopulse
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecopulse
```

4. **Run development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:3000
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 🏗️ Architecture

### Project Structure

```
ecopulse/
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
    └── errorHandler.ts     # Error handling
```

### Request Flow

1. **User Input** → User enters URL on result page
2. **API Request** → POST request to `/api/analyze`
3. **Puppeteer Scraping** → Launches headless browser, navigates to URL
4. **Resource Collection** → Intercepts network requests, scrolls for lazy-loaded content
5. **Analysis** → Calculates carbon footprint, energy usage, water impact
6. **Database Storage** → Saves results to MongoDB
7. **Response** → Returns analysis data to client
8. **Visualization** → Client renders results with charts and recommendations

---

## 🗄️ Database Design

### Collections

#### **Scan Collection**
Stores complete website analysis results.

```javascript
{
  url: String,
  normalizedUrl: String,
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
  createdAt: Date
}
```

#### **Visitor Collection**
Tracks unique visitors for statistics (privacy-focused).

```javascript
{
  visitorId: String,    // SHA256 hash of IP + userAgent
  ip: String,           // Partial IP (XXX.***.***) for privacy
  userAgent: String,
  pageVisited: String,
  visitedAt: Date
}
```

#### **Feedback Collection**
Stores user feedback and testimonials.

```javascript
{
  name: String,
  email: String,
  role: String,
  rating: Number,       // 1-5
  message: String,
  createdAt: Date
}
```

---

## 📡 API Documentation

### `POST /api/analyze`
Analyzes a website and returns environmental metrics.

**Request Body:**
```json
{
  "url": "https://example.com"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "url": "https://example.com",
    "ecoScore": {
      "value": 85,
      "score": 85,
      "label": "A",
      "color": "#22c55e"
    },
    "pageSizeMB": 2.34,
    "resources": {
      "html": 45,
      "css": 123,
      "javascript": 890,
      "images": 1234,
      "fonts": 156,
      "video": 0,
      "xhr": 89,
      "other": 45,
      "thirdParty": 234
    },
    "impacts": {
      "energyWH": 0.0234,
      "carbon": 10.34,
      "water": 15.5
    },
    "suggestions": [...]
  }
}
```

**cURL Example:**
```bash
curl -X POST http://localhost:3000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
```

---

### `GET /api/stats`
Returns aggregate statistics.

**Response:**
```json
{
  "success": true,
  "data": {
    "totalScans": 1234,
    "averageEcoScore": "B+",
    "uniqueVisitors": 5678
  }
}
```

---

### `POST /api/visitor`
Tracks unique visitors (once per day per visitor).

**Request Body:**
```json
{
  "page": "/about"
}
```

---

### `GET /api/feedback`
Retrieves feedback with optional filters.

**Query Parameters:**
- `?rating=5` - Filter by rating
- `?limit=10` - Limit results
- `?homepage=true` - Get latest 3 five-star reviews

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "name": "John Doe",
      "rating": 5,
      "message": "Great tool!",
      "createdAt": "2026-01-06T..."
    }
  ]
}
```

### `POST /api/feedback`
Submits new feedback.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "Developer",
  "rating": 5,
  "message": "Great tool!"
}
```

---

## 🔬 Analysis Engine

### How It Works

#### **Step 1: Resource Collection**
```javascript
// lib/resourceAnalyzer.ts
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
  await page.evaluate(`window.scrollTo(0, ${i})`);
  await page.waitForTimeout(100);
}

// Wait for network to be idle
await page.waitForNetworkIdle({ timeout: 5000 });
```

#### **Step 2: Resource Categorization**
```javascript
function bucketByResourceType(type: string) {
  const typeMap = {
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
}
```

#### **Step 3: Carbon Calculation**
```javascript
// lib/Calculations/calculations.ts
export function calculateImpact(pageSizeMB: number) {
  const KWH_PER_GB = 0.81;      // Energy per GB transfer
  const CO2_PER_KWH = 442;      // Global avg carbon intensity
  const WATER_PER_KWH = 1.5;    // Liters of water per kWh

  const energyWH = (pageSizeMB / 1024) * KWH_PER_GB * 1000;
  const carbon = (energyWH / 1000) * CO2_PER_KWH;
  const water = (energyWH / 1000) * WATER_PER_KWH;

  return { energyWH, carbon, water };
}
```

#### **Step 4: Eco Score Calculation**
```javascript
// lib/Calculations/ecoScore.ts
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
}
```

### Constants Used

- **Energy**: `0.81 kWh per GB` transferred
- **Carbon**: `442g CO₂ per kWh` (global average electricity grid)
- **Water**: `1.5 liters per kWh` consumed

---

## 🌐 Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Connect your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   - Add `MONGODB_URI` in Vercel dashboard
   - Settings → Environment Variables

4. **Deploy**
   - Vercel will automatically build and deploy
   - Puppeteer is pre-configured for serverless

### MongoDB Atlas Setup

1. Create a cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Whitelist IPs: Add `0.0.0.0/0` for Vercel
3. Create database: Name it `ecopulse`
4. Get connection string: Copy the MongoDB URI
5. Add to environment variables

### Performance Optimization

- ✅ Use Incremental Static Regeneration for stats pages
- ✅ Implement caching for frequently analyzed URLs
- ✅ Add rate limiting to prevent abuse
- ✅ Use database indexing on frequently queried fields
- ✅ Optimize images with Next.js Image component

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Carbon intensity data from [Electricity Maps](https://www.electricitymaps.com/)
- Inspired by [Website Carbon Calculator](https://www.websitecarbon.com/)
- Built with ❤️ for a greener internet

---

## 📞 Contact & Links

- **Live Demo**: [https://ecopulse-henna.vercel.app/]
- **Documentation**: [/docs](https://ecopulse-henna.vercel.app/docs)
- **Feedback**: [/feedback](https://ecopulse-henna.vercel.app/features)
- **GitHub**: [https://github.com/mamun0193]

---

<div align="center">
  <strong>Made with 🌱 by developers who care about the planet</strong>
  <br>
  <sub>Building a more sustainable web, one website at a time.</sub>
</div>
