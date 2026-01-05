"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiePolicyPage() {
  const lastUpdated = "January 6, 2026";

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
              <span className="text-green-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                This Cookie Policy explains how EcoPulse uses cookies and similar technologies to recognize you when you visit our website. 
                It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to 
                make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-gray-300 mb-4">
                Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li><strong className="text-white">Session Cookies:</strong> Temporary cookies that expire when you close your browser.</li>
                <li><strong className="text-white">Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-300 mb-4">
                EcoPulse uses a minimal number of cookies to ensure the best possible experience:
              </p>

              {/* Cookie Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-900/50">
                      <th className="border border-gray-700 px-4 py-3 text-white">Cookie Name</th>
                      <th className="border border-gray-700 px-4 py-3 text-white">Purpose</th>
                      <th className="border border-gray-700 px-4 py-3 text-white">Duration</th>
                      <th className="border border-gray-700 px-4 py-3 text-white">Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-green-400 text-sm">analysisData</td>
                      <td className="border border-gray-700 px-4 py-3">Stores analysis results temporarily for display</td>
                      <td className="border border-gray-700 px-4 py-3">Session</td>
                      <td className="border border-gray-700 px-4 py-3">Essential</td>
                    </tr>
                    <tr className="bg-gray-900/30">
                      <td className="border border-gray-700 px-4 py-3 font-mono text-green-400 text-sm">analyzedUrl</td>
                      <td className="border border-gray-700 px-4 py-3">Remembers the last analyzed URL</td>
                      <td className="border border-gray-700 px-4 py-3">Session</td>
                      <td className="border border-gray-700 px-4 py-3">Essential</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold text-green-400 mt-6 mb-3">3.1 Essential Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as storing analysis results 
                temporarily so you can view your results. Without these cookies, some features of the website may not be available.
              </p>

              <h3 className="text-xl font-semibold text-green-400 mt-6 mb-3">3.2 Analytics Cookies (Optional)</h3>
              <p className="text-gray-300 mb-4">
                We may use analytics cookies to understand how visitors interact with our website. This helps us improve our services. 
                These cookies collect information anonymously and do not directly identify you.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Local Storage</h2>
              <p className="text-gray-300 mb-4">
                In addition to cookies, we use browser local storage for:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Temporarily storing analysis results for display on the results page</li>
                <li>Remembering your preferences during your session</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Local storage data is cleared when you close your browser or when you start a new analysis.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Third-Party Cookies</h2>
              <p className="text-gray-300 mb-4">
                Currently, EcoPulse does not use third-party cookies for advertising or tracking purposes. 
                If this changes in the future, we will update this policy and obtain your consent where required.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Managing Cookies</h2>
              <p className="text-gray-300 mb-4">
                You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences in the following ways:
              </p>

              <h3 className="text-xl font-semibold text-green-400 mt-6 mb-3">Browser Settings</h3>
              <p className="text-gray-300 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>View what cookies are stored on your device</li>
                <li>Delete all or specific cookies</li>
                <li>Block cookies from all or specific websites</li>
                <li>Block third-party cookies</li>
                <li>Accept all cookies</li>
              </ul>

              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mt-6">
                <p className="text-gray-300 mb-2"><strong className="text-white">Browser Cookie Settings:</strong></p>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Google Chrome</a></li>
                  <li>• <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Mozilla Firefox</a></li>
                  <li>• <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Safari</a></li>
                  <li>• <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Microsoft Edge</a></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-gray-300 mb-4">
                If you disable or block essential cookies, some features of EcoPulse may not work correctly:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Analysis results may not display after completion</li>
                <li>You may need to re-enter information on each visit</li>
                <li>Some interactive features may be unavailable</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. 
                Any changes will be posted on this page with an updated &quot;Last updated&quot; date.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                <p className="text-gray-300">
                  <strong className="text-white">Email:</strong>{" "}
                  <a href="mailto:ecopulse.dev@gmail.com" className="text-green-400 hover:underline">ecopulse.dev@gmail.com</a>
                </p>
                <p className="text-gray-300 mt-2">
                  <strong className="text-white">Location:</strong> Chandigarh, India
                </p>
              </div>

              {/* Related Policies */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mt-8">
                <h3 className="text-white font-bold mb-3">Related Policies</h3>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/privacy-policy" 
                    className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/terms-of-service" 
                    className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center mt-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
