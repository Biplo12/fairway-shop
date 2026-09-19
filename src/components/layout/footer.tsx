import Link from "next/link";

import { Mark } from "@/components/brand/mark";

const columns = [
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
      { href: "/fitting/clubs", label: "Club fitting" },
      { href: "/fitting/ball", label: "Ball fitting" },
      { href: "/fitting/putter", label: "Putter fitting" },
      { href: "/fitting", label: "Book a session" },
    ],
  },
  {
    title: "Shop info",
    links: [
      { href: "/about", label: "About" },
      { href: "/stories", label: "Stories" },
      { href: "/contact", label: "Contact" },
      { href: "/delivery", label: "Delivery & returns" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="rounded-card bg-charcoal px-6 py-12 text-offwhite md:px-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-4">
              <Mark className="h-10 w-10" />
              <span className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium uppercase leading-none tracking-[0.28em]">
                Fairway
              </span>
            </Link>
            <p className="mt-6 max-w-[26rem] text-[0.9375rem] leading-[1.6] text-offwhite/70">
              A specialist golf shop and fitting studio near St. Andrews. Every
              brand that matters, fitted to the way you play.
            </p>
            <p className="mt-8 text-[0.75rem] uppercase tracking-[0.16em] text-offwhite/50">
              Est. 1987 — St. Andrews, Scotland
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-[0.75rem] uppercase tracking-[0.16em] text-offwhite/50">
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.9375rem] text-offwhite/85 underline-offset-4 transition-colors hover:text-offwhite hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-offwhite/15 pt-6 text-[0.8125rem] text-offwhite/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Fairway Golf. A fictional shop, built
            as a design project.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-offwhite">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-offwhite">
              Terms
            </Link>
            <Link href="/instagram" className="hover:text-offwhite">
              Instagram
            </Link>
            <Link href="/youtube" className="hover:text-offwhite">
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
