/**
 * The one place the shop's own address is written down. The sitemap, the
 * robots file and the metadata base all read it from here, so a move to a
 * domain of its own is a single line.
 */
export const site = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://fairway-roan-delta.vercel.app",
  name: "FAIRWAY",
  statement: "Every brand that matters. Fitted to the way you play.",
} as const;
