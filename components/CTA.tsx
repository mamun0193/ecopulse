import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-green-600/20 to-emerald-600/20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-size-[30px_30px]"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
          <span className="text-green-400 text-sm font-medium">Start Your Green Journey</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Make Your Website{" "}
          <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Eco-Friendly?
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are building a more sustainable internet. 
          Analyze your website now and get instant insights — completely free.
        </p>
        <Link
          href="/analyze"
          className="group relative inline-flex items-center px-10 py-5 bg-linear-to-r from-green-500 to-emerald-600 text-white font-bold text-xl rounded-full overflow-hidden shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
        >
          <span className="absolute inset-0 bg-linear-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center">
            Start Free Analysis
            <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Link>
        <p className="mt-6 text-gray-500 text-sm">
          🌱 No credit card required • Results in seconds • 100% private
        </p>
      </div>
    </section>
  );
}
