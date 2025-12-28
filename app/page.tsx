import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 font-serif">

      <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
        EcoPulse
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
        Measure your website’s environmental impact and performance.
        Discover how much energy your site consumes — and how to make it greener.
      </p>

      <Link
        href="/Home"
        className="bg-green-700 hover:bg-green-800 transition text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md"
      >
        Analyze Your Website
      </Link>

      <p className="mt-6 text-sm text-gray-400">
        No sign-up required • Instant insights • Sustainable web analytics 🌱
      </p>
    </main>

  );
}
