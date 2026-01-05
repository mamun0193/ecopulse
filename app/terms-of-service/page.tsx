"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Welcome to EcoPulse. By accessing or using our website and services, you agree to be bound by these Terms of Service. 
                Please read them carefully before using our platform.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using EcoPulse (&quot;the Service&quot;), you accept and agree to be bound by the terms and provisions of this agreement. 
                If you do not agree to abide by these terms, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Description of Service</h2>
              <p className="text-gray-300 mb-4">
                EcoPulse provides website environmental impact analysis services, including:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Carbon footprint estimation for web pages</li>
                <li>Energy consumption analysis</li>
                <li>Resource optimization recommendations</li>
                <li>Eco-score ratings and comparisons</li>
                <li>Educational content about sustainable web development</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">When using our Service, you agree to:</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Provide accurate information when required</li>
                <li>Use the Service only for lawful purposes</li>
                <li>Not attempt to interfere with or disrupt the Service</li>
                <li>Not use automated systems to access the Service excessively</li>
                <li>Not submit URLs of websites you don&apos;t have permission to analyze</li>
                <li>Not use the Service to harm, threaten, or harass others</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                The Service, including its original content, features, and functionality, is owned by EcoPulse and is protected by international 
                copyright, trademark, and other intellectual property laws.
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Our logo, name, and branding are trademarks of EcoPulse</li>
                <li>Analysis methodologies and algorithms are proprietary</li>
                <li>You may not copy, modify, or distribute our content without permission</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. User Content</h2>
              <p className="text-gray-300 mb-4">
                When you submit content to our Service (such as feedback or testimonials):
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>You retain ownership of your content</li>
                <li>You grant us a non-exclusive, royalty-free license to use, display, and distribute your content</li>
                <li>You represent that you have the right to submit such content</li>
                <li>You agree not to submit offensive, illegal, or harmful content</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Accuracy of Information</h2>
              <p className="text-gray-300 mb-4">
                While we strive to provide accurate environmental impact estimates:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Our calculations are estimates based on industry-standard methodologies</li>
                <li>Actual environmental impact may vary based on factors we cannot measure</li>
                <li>We do not guarantee the accuracy, completeness, or reliability of our analysis</li>
                <li>Results should be used for informational purposes only</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>EcoPulse shall not be liable for any indirect, incidental, special, or consequential damages</li>
                <li>We are not responsible for any loss of data or business interruption</li>
                <li>Our total liability shall not exceed the amount you paid for the Service (if any)</li>
                <li>We do not warrant that the Service will be uninterrupted or error-free</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-300 mb-4">
                Our Service may contain links to third-party websites. We are not responsible for the content, privacy policies, or 
                practices of any third-party sites. You access them at your own risk.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Service Modifications</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Modify or discontinue the Service at any time without notice</li>
                <li>Change features, functionality, or pricing</li>
                <li>Limit or restrict access to certain features</li>
                <li>Implement usage limits or rate limiting</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Violation of these Terms of Service</li>
                <li>Abusive or excessive use of the Service</li>
                <li>Any conduct we deem harmful to other users or the Service</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. 
                Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Chandigarh, India.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the 
                &quot;Last updated&quot; date. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">13. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms, please contact us:
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
