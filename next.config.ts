import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // External packages that should not be bundled for serverless functions
  serverExternalPackages: ['puppeteer-core', '@sparticuz/chromium'],
};

export default nextConfig;
