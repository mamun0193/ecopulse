"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                At EcoPulse, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-green-400 mt-6 mb-3">1.1 Information You Provide</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li><strong className="text-white">Contact Information:</strong> Name, email address when you submit feedback or subscribe to our newsletter.</li>
                <li><strong className="text-white">Feedback Data:</strong> Ratings, comments, and testimonials you voluntarily provide.</li>
                <li><strong className="text-white">URLs for Analysis:</strong> Website URLs you submit for environmental impact analysis.</li>
              </ul>

              <h3 className="text-xl font-semibold text-green-400 mt-6 mb-3">1.2 Information Collected Automatically</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li><strong className="text-white">Usage Data:</strong> Pages visited, time spent on pages, and navigation patterns.</li>
                <li><strong className="text-white">Device Information:</strong> Browser type, operating system, and device identifiers.</li>
                <li><strong className="text-white">IP Address:</strong> Partially anonymized for analytics purposes.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Provide and improve our website analysis services</li>
                <li>Send you newsletters and updates (with your consent)</li>
                <li>Respond to your inquiries and feedback</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Display testimonials on our website (with your permission)</li>
                <li>Maintain the security and integrity of our services</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Storage and Security</h2>
              <p className="text-gray-300 mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Data is stored in secure MongoDB Atlas clusters with encryption at rest</li>
                <li>All data transmission is encrypted using TLS/SSL</li>
                <li>Visitor IDs are hashed using SHA-256 for anonymization</li>
                <li>Regular security audits and updates are performed</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Data Sharing</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share data only in the following circumstances:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li><strong className="text-white">Service Providers:</strong> Trusted third parties who assist in operating our website (hosting, analytics).</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights.</li>
                <li><strong className="text-white">Aggregated Data:</strong> Anonymous, aggregated statistics may be shared for research purposes.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Your Rights (GDPR)</h2>
              <p className="text-gray-300 mb-4">
                If you are a resident of the European Economic Area, you have the following rights:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li><strong className="text-white">Access:</strong> Request a copy of your personal data.</li>
                <li><strong className="text-white">Rectification:</strong> Request correction of inaccurate data.</li>
                <li><strong className="text-white">Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;).</li>
                <li><strong className="text-white">Portability:</strong> Request transfer of your data to another service.</li>
                <li><strong className="text-white">Objection:</strong> Object to processing of your personal data.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Cookies</h2>
              <p className="text-gray-300 mb-4">
                We use minimal cookies necessary for the operation of our website. For more details, please see our{" "}
                <Link href="/cookie-policy" className="text-green-400 hover:underline">Cookie Policy</Link>.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Children&apos;s Privacy</h2>
              <p className="text-gray-300 mb-4">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children. 
                If you believe we have collected data from a child, please contact us immediately.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page 
                and updating the &quot;Last updated&quot; date.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
