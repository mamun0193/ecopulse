"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, getAllCategories, BlogPost } from "@/lib/blogData";

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(({ category, title, excerpt, tags }) => {
    const matchesCategory = activeCategory === "all" || category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query ||
      title.toLowerCase().includes(query) ||
      excerpt.toLowerCase().includes(query) ||
      tags.some(tag => tag.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find(post => post.featured);

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
            <span className="text-green-400 text-sm font-medium">Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Insights for a <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Greener Web</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tips, tutorials, and insights on sustainable web development and reducing your digital carbon footprint.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="relative bg-gray-800/30 border border-gray-700/50 rounded-2xl overflow-hidden group hover:border-green-500/50 transition-all">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="aspect-video md:aspect-auto relative overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-sm rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                        <span className="text-green-400 font-bold">
                          {featuredPost.author.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{featuredPost.author.name}</p>
                        <p className="text-gray-500 text-xs">{featuredPost.publishedAt}</p>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Search and Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-green-500 text-white"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-400 text-lg">No articles found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 text-green-400 hover:text-green-300 transition-colors cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Get the latest insights on sustainable web development delivered to your inbox.
          </p>
          <Link
            href="/#newsletter"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
          >
            Subscribe to Newsletter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-gray-800/30 border border-gray-700/50 rounded-xl overflow-hidden group hover:border-green-500/50 transition-all h-full flex flex-col">
        {/* Image */}
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col grow">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded">
              {post.category}
            </span>
            <span className="text-gray-500 text-xs">{post.readTime}</span>
          </div>

          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-gray-400 text-sm mb-4 line-clamp-3 grow">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-green-400 font-bold text-sm">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <span className="text-gray-400 text-sm">{post.author.name}</span>
            </div>
            <span className="text-gray-500 text-xs">{post.publishedAt}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
