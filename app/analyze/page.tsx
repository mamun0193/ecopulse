"use client";

import React, { useState } from "react";
import axios from "axios";
import { AnalysisResult } from "../types/analysis";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnalyzeHero from "@/components/AnalyzeHero";
import AnalysisLoading from "@/components/AnalysisLoading";
import AnalysisResults from "@/components/AnalysisResults";
import EmptyState from "@/components/EmptyState";

export default function AnalyzeUrl() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setData(null);

    try {
      const response = await axios.post("/api/analyze", { url });
      setData(response.data);
      toast.success("Analysis complete!");
    } catch (error) {
      console.error("Error analyzing URL:", error);
      toast.error("Failed to analyze the URL. Please enter a valid URL and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setData(null);
    setUrl("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Navbar />

      <main className="grow pt-20">
        {/* Hero Section with Search */}
        <AnalyzeHero
          url={url}
          setUrl={setUrl}
          loading={loading}
          onSubmit={handleSubmit}
        />

        {/* Results Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {loading && <AnalysisLoading />}

            {!loading && data && (
              <AnalysisResults data={data} onReset={handleReset} />
            )}

            {!loading && !data && <EmptyState />}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
