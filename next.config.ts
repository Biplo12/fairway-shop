import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The free Vercel plan stops at 5,000 transformations a month, after
    // which every /_next/image request answers 402 and no photograph loads.
    // The files in public are already cropped and sharpened locally, so they
    // are served as they are.
    unoptimized: true,
    // Next only honours a `quality` prop whose value is listed here; anything
    // else silently falls back to 75, which is too soft for full-bleed
    // photography.
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
