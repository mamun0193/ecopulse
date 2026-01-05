"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const endpoints = [
  {
    id: "analyze",
    method: "POST",
    path: "/api/analyze",
    title: "Analyze Website",
    description: "Analyze a website's environmental impact and get detailed metrics",
    requestBody: {
      url: {
        type: "string",
        required: true,
        description: "The URL of the website to analyze (must include http:// or https://)"
      }
    },
    responseFields: [
      { name: "url", type: "string", description: "The analyzed URL" },
      { name: "ecoScore", type: "number", description: "Overall eco score (0-100)" },
      { name: "carbonEmissions", type: "number", description: "Estimated carbon emissions in grams per page view" },
      { name: "energyConsumption", type: "number", description: "Estimated energy consumption in Wh" },
      { name: "waterUsage", type: "number", description: "Estimated water usage in liters" },
      { name: "resources", type: "object", description: "Breakdown of resources by type" },
      { name: "suggestions", type: "array", description: "List of optimization suggestions" },
      { name: "pageWeight", type: "number", description: "Total page weight in bytes" },
    ],
    example: {
      request: `{
  "url": "https://example.com"
}`,
      response: `{
  "url": "https://example.com",
  "ecoScore": 75,
  "carbonEmissions": 0.45,
  "energyConsumption": 0.12,
  "waterUsage": 0.18,
  "resources": {
    "html": { "count": 1, "size": 15234 },
    "css": { "count": 3, "size": 45678 },
    "javascript": { "count": 5, "size": 234567 },
    "images": { "count": 8, "size": 456789 },
    "fonts": { "count": 2, "size": 89012 },
    "other": { "count": 1, "size": 1234 }
  },
  "suggestions": [
    {
      "type": "images",
      "priority": "high",
      "message": "Consider using WebP format...",
      "impact": "Could reduce emissions by 30%"
    }
  ],
  "pageWeight": 842514
}`
    }
  },
  {
    id: "feedback",
    method: "POST",
    path: "/api/feedback",
    title: "Submit Feedback",
    description: "Submit user feedback about the platform",
    requestBody: {
      name: {
        type: "string",
        required: true,
        description: "User's name"
      },
      email: {
        type: "string",
        required: true,
        description: "User's email address"
      },
      rating: {
        type: "number",
        required: true,
        description: "Rating from 1-5"
      },
      message: {
        type: "string",
        required: true,
        description: "Feedback message"
      }
    },
    responseFields: [
      { name: "message", type: "string", description: "Success confirmation message" },
      { name: "feedback", type: "object", description: "The created feedback object" },
    ],
    example: {
      request: `{
  "name": "John Doe",
  "email": "john@example.com",
  "rating": 5,
  "message": "Great tool!"
}`,
      response: `{
  "message": "Feedback submitted successfully",
  "feedback": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "rating": 5,
    "message": "Great tool!",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}`
    }
  },
  {
    id: "stats",
    method: "GET",
    path: "/api/stats",
    title: "Get Platform Statistics",
    description: "Retrieve platform-wide statistics including total scans and saved metrics",
    requestBody: null,
    responseFields: [
      { name: "totalScans", type: "number", description: "Total number of website scans performed" },
      { name: "totalCarbonSaved", type: "number", description: "Estimated total carbon saved in kg" },
      { name: "totalEnergySaved", type: "number", description: "Estimated total energy saved in kWh" },
      { name: "averageEcoScore", type: "number", description: "Average eco score across all scans" },
    ],
    example: {
      request: "GET /api/stats",
      response: `{
  "totalScans": 15234,
  "totalCarbonSaved": 1234.56,
  "totalEnergySaved": 5678.90,
  "averageEcoScore": 65.4
}`
    }
  },
  {
    id: "visitor",
    method: "POST",
    path: "/api/visitor",
    title: "Track Visitor",
    description: "Track anonymous visitor for analytics purposes",
    requestBody: {
      page: {
        type: "string",
        required: false,
        description: "The page being visited"
      }
    },
    responseFields: [
      { name: "success", type: "boolean", description: "Whether the tracking was successful" },
    ],
    example: {
      request: `{
  "page": "/analyze"
}`,
      response: `{
  "success": true
}`
    }
  },
  {
    id: "subscribe",
    method: "POST",
    path: "/api/subscribe",
    title: "Newsletter Subscription",
    description: "Subscribe to the EcoPulse newsletter",
    requestBody: {
      email: {
        type: "string",
        required: true,
        description: "Email address to subscribe"
      }
    },
    responseFields: [
      { name: "message", type: "string", description: "Success confirmation message" },
      { name: "subscriber", type: "object", description: "The created subscriber object" },
    ],
    example: {
      request: `{
  "email": "user@example.com"
}`,
      response: `{
  "message": "Successfully subscribed to newsletter",
  "subscriber": {
    "_id": "...",
    "email": "user@example.com",
    "subscribedAt": "2024-01-15T10:30:00Z"
  }
}`
    }
  }
];

const errorCodes = [
  { code: 400, title: "Bad Request", description: "Invalid request body or missing required fields" },
  { code: 404, title: "Not Found", description: "The requested resource was not found" },
  { code: 429, title: "Too Many Requests", description: "Rate limit exceeded. Try again later" },
  { code: 500, title: "Internal Server Error", description: "An unexpected error occurred on the server" },
];

export default function ApiReferencePage() {
  const [activeEndpoint, setActiveEndpoint] = useState("analyze");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const currentEndpoint = endpoints.find(e => e.id === activeEndpoint);

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
            <span className="text-green-400 text-sm font-medium">Developer Resources</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            API{" "}
            <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Reference
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Integrate EcoPulse into your applications. Analyze websites, track carbon footprint, and build sustainable web experiences.
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
            <h3 className="text-white font-bold mb-2">Base URL</h3>
            <code className="text-green-400 text-sm bg-gray-900 px-3 py-1 rounded">
              https://ecopulse.dev/api
            </code>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
            <h3 className="text-white font-bold mb-2">Content Type</h3>
            <code className="text-green-400 text-sm bg-gray-900 px-3 py-1 rounded">
              application/json
            </code>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
            <h3 className="text-white font-bold mb-2">Rate Limiting</h3>
            <p className="text-gray-400 text-sm">10 requests per minute per IP</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Endpoints</h3>
              <nav className="space-y-2">
                {endpoints.map((endpoint) => (
                  <button
                    key={endpoint.id}
                    onClick={() => setActiveEndpoint(endpoint.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm cursor-pointer ${
                      activeEndpoint === endpoint.id
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 text-xs font-mono rounded ${
                        endpoint.method === "GET" 
                          ? "bg-blue-500/20 text-blue-400" 
                          : "bg-green-500/20 text-green-400"
                      }`}>
                        {endpoint.method}
                      </span>
                      <span>{endpoint.title}</span>
                    </div>
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Other</h4>
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveEndpoint("errors")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm cursor-pointer ${
                      activeEndpoint === "errors"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    Error Codes
                  </button>
                  <button
                    onClick={() => setActiveEndpoint("examples")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm cursor-pointer ${
                      activeEndpoint === "examples"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    Code Examples
                  </button>
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {currentEndpoint && (
              <div className="space-y-6">
                {/* Endpoint Header */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 text-sm font-mono rounded ${
                      currentEndpoint.method === "GET" 
                        ? "bg-blue-500/20 text-blue-400" 
                        : "bg-green-500/20 text-green-400"
                    }`}>
                      {currentEndpoint.method}
                    </span>
                    <code className="text-white font-mono">{currentEndpoint.path}</code>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{currentEndpoint.title}</h2>
                  <p className="text-gray-400">{currentEndpoint.description}</p>
                </div>

                {/* Request Body */}
                {currentEndpoint.requestBody && (
                  <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-4">Request Body</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left text-gray-400 py-3 px-4">Parameter</th>
                            <th className="text-left text-gray-400 py-3 px-4">Type</th>
                            <th className="text-left text-gray-400 py-3 px-4">Required</th>
                            <th className="text-left text-gray-400 py-3 px-4">Description</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-300">
                          {Object.entries(currentEndpoint.requestBody).map(([key, value]) => (
                            <tr key={key} className="border-b border-gray-800">
                              <td className="py-3 px-4 font-mono text-green-400">{key}</td>
                              <td className="py-3 px-4 text-gray-400">{value.type}</td>
                              <td className="py-3 px-4">
                                <span className={`px-2 py-0.5 rounded text-xs ${
                                  value.required 
                                    ? "bg-red-500/20 text-red-400" 
                                    : "bg-gray-700 text-gray-400"
                                }`}>
                                  {value.required ? "Required" : "Optional"}
                                </span>
                              </td>
                              <td className="py-3 px-4">{value.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Response */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Response</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left text-gray-400 py-3 px-4">Field</th>
                          <th className="text-left text-gray-400 py-3 px-4">Type</th>
                          <th className="text-left text-gray-400 py-3 px-4">Description</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        {currentEndpoint.responseFields.map((field) => (
                          <tr key={field.name} className="border-b border-gray-800">
                            <td className="py-3 px-4 font-mono text-green-400">{field.name}</td>
                            <td className="py-3 px-4 text-gray-400">{field.type}</td>
                            <td className="py-3 px-4">{field.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Example */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Example</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Request</span>
                        <button
                          onClick={() => copyToClipboard(currentEndpoint.example.request, `${currentEndpoint.id}-req`)}
                          className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                          {copiedCode === `${currentEndpoint.id}-req` ? "Copied!" : "Copy"}
                        </button>
                      </div>
                      <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
                        <code className="text-green-400">{currentEndpoint.example.request}</code>
                      </pre>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Response</span>
                        <button
                          onClick={() => copyToClipboard(currentEndpoint.example.response, `${currentEndpoint.id}-res`)}
                          className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                          {copiedCode === `${currentEndpoint.id}-res` ? "Copied!" : "Copy"}
                        </button>
                      </div>
                      <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
                        <code className="text-gray-300">{currentEndpoint.example.response}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Error Codes */}
            {activeEndpoint === "errors" && (
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Error Codes</h2>
                <p className="text-gray-400 mb-6">
                  All API errors return a JSON response with an error message. Here are the possible error codes:
                </p>
                
                <div className="space-y-4">
                  {errorCodes.map((error) => (
                    <div key={error.code} className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg">
                      <span className={`px-3 py-1 rounded font-mono text-sm shrink-0 ${
                        error.code >= 500 
                          ? "bg-red-500/20 text-red-400"
                          : error.code >= 400 
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                      }`}>
                        {error.code}
                      </span>
                      <div>
                        <h4 className="text-white font-medium">{error.title}</h4>
                        <p className="text-gray-400 text-sm">{error.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gray-900/50 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Error Response Format</h4>
                  <pre className="text-sm text-gray-300">
{`{
  "error": "Error message describing what went wrong"
}`}
                  </pre>
                </div>
              </div>
            )}

            {/* Code Examples */}
            {activeEndpoint === "examples" && (
              <div className="space-y-6">
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Code Examples</h2>
                  
                  {/* JavaScript */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">JavaScript (fetch)</h3>
                      <button
                        onClick={() => copyToClipboard(`async function analyzeWebsite(url) {
  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });
  
  if (!response.ok) {
    throw new Error('Analysis failed');
  }
  
  return response.json();
}

// Usage
analyzeWebsite('https://example.com')
  .then(data => console.log(data))
  .catch(error => console.error(error));`, "js")}
                        className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedCode === "js" ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
                      <code className="text-green-400">{`async function analyzeWebsite(url) {
  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });
  
  if (!response.ok) {
    throw new Error('Analysis failed');
  }
  
  return response.json();
}

// Usage
analyzeWebsite('https://example.com')
  .then(data => console.log(data))
  .catch(error => console.error(error));`}</code>
                    </pre>
                  </div>

                  {/* Python */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">Python (requests)</h3>
                      <button
                        onClick={() => copyToClipboard(`import requests

def analyze_website(url):
    response = requests.post(
        'https://ecopulse.dev/api/analyze',
        json={'url': url}
    )
    response.raise_for_status()
    return response.json()

# Usage
result = analyze_website('https://example.com')
print(f"Eco Score: {result['ecoScore']}")
print(f"Carbon Emissions: {result['carbonEmissions']}g")`, "python")}
                        className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedCode === "python" ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
                      <code className="text-green-400">{`import requests

def analyze_website(url):
    response = requests.post(
        'https://ecopulse.dev/api/analyze',
        json={'url': url}
    )
    response.raise_for_status()
    return response.json()

# Usage
result = analyze_website('https://example.com')
print(f"Eco Score: {result['ecoScore']}")
print(f"Carbon Emissions: {result['carbonEmissions']}g")`}</code>
                    </pre>
                  </div>

                  {/* cURL */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">cURL</h3>
                      <button
                        onClick={() => copyToClipboard(`curl -X POST https://ecopulse.dev/api/analyze \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://example.com"}'`, "curl")}
                        className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedCode === "curl" ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
                      <code className="text-green-400">{`curl -X POST https://ecopulse.dev/api/analyze \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://example.com"}'`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
