export type Brand = { slug: string; name: string; note: string };

/** The rack, in the order a customer would recognise it. */
export const brands: Brand[] = [
  { slug: "titleist", name: "Titleist", note: "Balls, metals, wedges" },
  { slug: "taylormade", name: "TaylorMade", note: "Metals, irons" },
  { slug: "callaway", name: "Callaway", note: "Metals, irons, balls" },
  { slug: "ping", name: "Ping", note: "Irons, bags" },
  { slug: "mizuno", name: "Mizuno", note: "Forged irons" },
  { slug: "srixon", name: "Srixon", note: "Irons, balls" },
  { slug: "vokey", name: "Vokey", note: "Wedges" },
  { slug: "scotty-cameron", name: "Scotty Cameron", note: "Putters" },
  { slug: "odyssey", name: "Odyssey", note: "Putters" },
  { slug: "footjoy", name: "FootJoy", note: "Gloves, shoes" },
  { slug: "cleveland", name: "Cleveland", note: "Wedges" },
  { slug: "sun-mountain", name: "Sun Mountain", note: "Bags" },
];
