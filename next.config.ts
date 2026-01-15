import type { NextConfig } from "next";
import sharp from "sharp";

// Low Memory Mode: Force Sharp to release memory after each operation
// and limit concurrency to 1 to stay within 512MB limit.
sharp.cache(false);
sharp.concurrency(1);
process.env.NEXT_IMAGE_OPTIMIZATION_CONCURRENCY = "1";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
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
  }
};

export default nextConfig;
