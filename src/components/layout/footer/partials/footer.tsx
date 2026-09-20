import Link from "next/link";

import { Mark } from "@/components/brand/mark";
import { columns, legalLinks } from "../constants";

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

            <dl className="mt-6 flex max-w-[26rem] flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-offwhite/20 pt-4 text-[0.6875rem] uppercase leading-none tracking-[0.24em] text-offwhite/55">
              <div>
                <dt className="sr-only">Established</dt>
                <dd>Est. 1987</dd>
              </div>
              <div>
                <dt className="sr-only">Shop</dt>
                <dd>St. Andrews, Scotland</dd>
              </div>
            </dl>

            <p className="mt-6 max-w-[26rem] text-[0.9375rem] leading-[1.6] text-offwhite/70">
              A specialist golf shop with a fitting studio at its centre. Every
              brand that matters, fitted to the way you play.
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
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-offwhite"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
