import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true, // Disabled to rule out experimental memory leaks
  images: {
    unoptimized: true, // Globally disable image optimization to prevent OOM
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  experimental: {
    webpackMemoryOptimizations: true,
    staticGenerationMaxConcurrency: 1, // Minimize parallel SSR load
  }
};

export default nextConfig;
