import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next only honours a `quality` prop whose value is listed here; anything
    // else silently falls back to 75, which is too soft for full-bleed
    // photography.
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
