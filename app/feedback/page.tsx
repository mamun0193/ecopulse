"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";

interface Feedback {
    _id: string;
    name: string;
    email?: string;
    role?: string;
    rating: number;
    message: string;
    createdAt: string;
}

export default function FeedbackPage() {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [filterRating, setFilterRating] = useState<number | null>(null);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        rating: 5,
        message: "",
    });

    const fetchFeedbacks = useCallback(async () => {
        try {
            const url = filterRating ? `/api/feedback?rating=${filterRating}` : "/api/feedback";
            const res = await fetch(url);
            const data = await res.json();
            if (data.success) {
                setFeedbacks(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch feedbacks:", error);
        } finally {
            setLoading(false);
        }
    }, [filterRating]);

    useEffect(() => {
        fetchFeedbacks();
    }, [fetchFeedbacks]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const res = await fetch("/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Thank you for your feedback!");
                setFormData({ name: "", email: "", role: "", rating: 5, message: "" });
                fetchFeedbacks(); // Refresh the list
            } else {
                toast.error(data.error || "Failed to submit feedback");
            }
        } catch (error) {
            toast.error("Failed to submit feedback");
            console.log(error);

        } finally {
            setSubmitting(false);
        }
    };

    const formatDate = (dateString: string) =>
        new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });

    const getInitials = (name: string) =>
        name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);

    const gradients = [
        "from-green-400 to-emerald-500",
        "from-emerald-400 to-teal-500",
        "from-teal-400 to-cyan-500",
        "from-cyan-400 to-blue-500",
        "from-blue-400 to-indigo-500",
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
                        <span className="text-green-400 text-sm font-medium">Community Feedback</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        What Our Users{" "}
                        <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Say</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Real feedback from developers and businesses using EcoPulse to build a more sustainable web.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Feedback Form */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Share Your Feedback</h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Name <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Role / Company</label>
                                    <input
                                        type="text"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                                        placeholder="Developer at TechCorp"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Rating <span className="text-red-400">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, rating: star })}
                                                className="p-1 transition-transform hover:scale-110 cursor-pointer"
                                            >
                                                <svg
                                                    className={`w-8 h-8 ${star <= formData.rating ? "text-yellow-400" : "text-gray-600"
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Message <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
                                        placeholder="Share your experience with EcoPulse..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full px-6 py-3 bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {submitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </span>
                                    ) : (
                                        "Submit Feedback"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Feedbacks List */}
                    <div className="lg:col-span-2">
                        {/* Filter */}
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-white">
                                All Feedback ({feedbacks.length})
                            </h2>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setFilterRating(null)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${filterRating === null
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-800 text-gray-400 hover:text-white"
                                        }`}
                                >
                                    All
                                </button>
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <button
                                        key={rating}
                                        onClick={() => setFilterRating(rating)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${filterRating === rating
                                            ? "bg-green-500 text-white"
                                            : "bg-gray-800 text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {rating}
                                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {loading ? (
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 animate-pulse">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                                            <div>
                                                <div className="h-4 w-32 bg-gray-700 rounded mb-2"></div>
                                                <div className="h-3 w-24 bg-gray-700 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="h-4 w-full bg-gray-700 rounded mb-2"></div>
                                        <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        ) : feedbacks.length === 0 ? (
                            <div className="text-center py-16 bg-gray-800/30 border border-gray-700/50 rounded-2xl">
                                <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <p className="text-gray-400 text-lg">No feedback yet. Be the first to share your experience!</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {feedbacks.map((feedback, index) => (
                                    <div
                                        key={feedback._id}
                                        className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className={`w-12 h-12 bg-linear-to-br ${gradients[index % gradients.length]
                                                        } rounded-full flex items-center justify-center text-white font-bold`}
                                                >
                                                    {getInitials(feedback.name)}
                                                </div>
                                                <div>
                                                    <div className="text-white font-semibold">{feedback.name}</div>
                                                    {feedback.role && (
                                                        <div className="text-gray-500 text-sm">{feedback.role}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-gray-500 text-sm">{formatDate(feedback.createdAt)}</div>
                                        </div>

                                        <div className="flex items-center mb-4">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg
                                                    key={star}
                                                    className={`w-5 h-5 ${star <= feedback.rating ? "text-yellow-400" : "text-gray-600"
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        <p className="text-gray-300 leading-relaxed">&ldquo;{feedback.message}&rdquo;</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
