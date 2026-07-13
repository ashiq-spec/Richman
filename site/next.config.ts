import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // GitHub Pages has no image server — ship pre-optimized assets instead.
    unoptimized: true,
  },
};

export default nextConfig;
