export const columns = [
  {
    title: "Shop",
    links: [
      { href: "/shop/clubs", label: "Clubs" },
      { href: "/shop/balls", label: "Balls" },
      { href: "/shop/bags", label: "Bags" },
      { href: "/shop/gloves", label: "Gloves" },
      { href: "/shop/headwear", label: "Headwear" },
    ],
  },
  {
    title: "Brands",
    links: [
      { href: "/brands/titleist", label: "Titleist" },
      { href: "/brands/taylormade", label: "TaylorMade" },
      { href: "/brands/callaway", label: "Callaway" },
      { href: "/brands/ping", label: "Ping" },
      { href: "/brands", label: "All brands" },
    ],
  },
  {
    title: "Fitting",
    links: [
      { href: "/fitting/club-fitting", label: "Club fitting" },
      { href: "/fitting/ball-fitting", label: "Ball fitting" },
      { href: "/fitting/putter-fitting", label: "Putter fitting" },
      { href: "/fitting#book", label: "Book a session" },
    ],
  },
  {
    title: "Shop info",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/delivery", label: "Delivery & returns" },
    ],
  },
];

/**
 * The bottom row. Instagram and YouTube used to sit here pointing at /instagram
 * and /youtube, neither of which is a route, so both were links to a 404.
 */
export const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/delivery", label: "Delivery" },
  { href: "/contact", label: "Contact" },
];
