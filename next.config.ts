import type { NextConfig } from "next";
import widths from "./src/utils/image-loader/widths.json";

const nextConfig: NextConfig = {
  images: {
    // The free Vercel plan stops at 5,000 transformations a month, after
    // which every /_next/image request answers 402 and no photograph loads.
    // scripts/build-image-variants.mjs writes the WebP variants at build
    // time instead, and this loader points the srcset at them.
    loader: "custom",
    loaderFile: "./src/utils/image-loader/index.ts",
    // The script writes exactly these widths, so the two read one list.
    imageSizes: widths.imageSizes,
    deviceSizes: widths.deviceSizes,
    // Next only honours a `quality` prop whose value is listed here. The
    // variants are encoded at one quality, but the prop stays declared.
    qualities: [75, 90],
  },
  // Media checks public for the file it is given, so the trace pulls all of
  // public into every server route. The variants are only ever fetched by
  // the browser, and would push a function past Vercel's size limit.
  outputFileTracingExcludes: {
    "/*": ["public/_img/**/*"],
  },
  async headers() {
    return [
      {
        source: "/_img/:path*",
        headers: [
          // names are not content hashed, so a day rather than immutable
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

export default nextConfig;
