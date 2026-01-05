"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-linear-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              EcoPulse
            </span>
          </Link>

          {/* Desktop Navigation - Center/Right */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="/features"
              className="px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium"
            >
              Features
            </Link>
            <Link
              href="/feedback"
              className="px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium"
            >
              Feedback
            </Link>
            <Link
              href="/docs"
              className="px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium"
            >
              Docs
            </Link>
          </div>

          {/* Join Now Button - Right Side */}
          <div className="hidden md:flex items-center">
            <Link
              href="/analyze"
              className="relative inline-flex items-center px-6 py-2.5 bg-linear-to-r from-green-700 to-emerald-700 text-white font-semibold rounded-full overflow-hidden group shadow-lg shadow-green-700/25 hover:shadow-green-700/40 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-linear-to-r from-green-800 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                Join Now
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-green-400 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-2 pt-4 border-t border-gray-800">
            <Link
              href="/"
              className="px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/features"
              className="px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
            >
              Features
            </Link>
            <Link
              href="/feedback"
              className="px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
            >
              Feedback
            </Link>
            <Link
              href="/docs"
              className="px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
            >
              Docs
            </Link>
            <Link
              href="/analyze"
              className="mx-4 py-2.5 bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full text-center"
            >
              Analyze Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
