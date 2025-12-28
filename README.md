# EcoPulse

EcoPulse is a Next.js app that measures a website's page-weight and estimates environmental impact (energy, CO₂, and water) based on network resources loaded during a real page visit.

It uses Puppeteer to load the target URL, tallies transferred bytes by resource type (HTML/CSS/JS/images/API + third-party), then returns impact metrics and improvement suggestions.

## Features

- URL analyzer UI (`/Home`) with toast notifications and loading skeletons
- Breakdown of page resources (KB) and request counts
- Estimated impact metrics:
	- Energy (Wh)
	- Carbon (g CO₂)
	- Water (L)
- Suggestions engine based on thresholds (payload size, third-party calls, JS/image weight, etc.)

## Tech stack

- Next.js (App Router)
- React
- Tailwind CSS
- Puppeteer (local) + `puppeteer-core` + `@sparticuz/chromium` (serverless/Vercel)

## Getting started (local)

Prereqs:

- Node.js (recommended: current LTS)
- A working Chrome/Chromium install (Puppeteer will download its own Chromium by default)

Install deps:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Open:

- `http://localhost:3000` (landing)
- `http://localhost:3000/Home` (analyzer)

## API

### `POST /api/analyze`

Request body:

```json
{ "url": "https://example.com" }
```

Response (shape):

```ts
export interface AnalysisResult {
	url: string;
	pageSizeMB: number;
	resources: {
		requestCount: number;
		totalBytes: number;
		html: number;
		css: number;
		js: number;
		image: number;
		apiCalls: number;
		apiBytes: number;
		thirdPartyAPICalls: number;
		thirdPartyAPIBytes: number;
	};
	impacts: {
		energyWH: number;
		carbon: number;
		water: number;
	};
	suggestions: { id: string; message: string; severity: "low" | "medium" | "high" }[];
}
```

Quick test:

```bash
curl -X POST http://localhost:3000/api/analyze \
	-H "Content-Type: application/json" \
	-d "{\"url\":\"https://example.com\"}"
```

## Notes (how analysis works)

- The API loads the page with Puppeteer and listens to network responses.
- It categorizes payloads by resource type (document/stylesheet/script/image/xhr/fetch).
- It also tracks third-party requests by comparing hostnames to the main page domain.

Estimated impact uses constants in the API route:

- `ENERGY_PER_MB = 0.81` Wh per MB
- `CO2_PER_WH = 0.442` grams CO₂ per Wh
- `WATER_PER_WH = 0.0018` liters per Wh

## Deployment

- The API route is configured to run on the Node.js runtime (`runtime = "nodejs"`).
- On Vercel/serverless, it switches to `puppeteer-core` + `@sparticuz/chromium` when `process.env.VERCEL` is set.

## Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - run ESLint

## License

No license has been specified yet.
