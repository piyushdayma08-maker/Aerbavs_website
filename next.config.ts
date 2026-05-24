import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // All images are served from /public/images/ — no external domains needed.
    // Add entries here if you later need to load images from a CDN or CMS.
    remotePatterns: [],
  },
};

export default nextConfig;
