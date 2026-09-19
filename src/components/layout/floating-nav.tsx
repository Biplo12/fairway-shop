"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import { Mark } from "@/components/brand/mark";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/brands", label: "Brands" },
  { href: "/fitting", label: "Fitting" },
  { href: "/stories", label: "Stories" },
];

/**
 * Pill navigation that arrives once the hero has scrolled away. The hero
 * carries its own navigation, so this only exists below it.
 */
export function FloatingNav() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-[opacity,transform] duration-300 ease-out ${
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <nav
        aria-label="Primary"
        className="flex items-center gap-2 rounded-full border border-white/10 bg-charcoal/90 py-2 pl-4 pr-2 text-offwhite shadow-[0_8px_30px_rgba(23,24,23,0.25)] backdrop-blur-md sm:gap-6 sm:pl-6"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Mark compact className="h-4 w-4" />
          <span className="text-[0.875rem] font-medium uppercase leading-none tracking-[0.24em]">
            Fairway
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.875rem] leading-none text-offwhite/80 underline-offset-4 transition-colors hover:text-offwhite hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Search"
            className="grid size-9 place-items-center rounded-full text-offwhite transition-colors hover:bg-white/10"
          >
            <Search className="size-4" strokeWidth={1.5} />
          </button>
          <Link
            href="/bag"
            className="flex items-center gap-2.5 rounded-full bg-offwhite py-1 pl-4 pr-1 text-[0.8125rem] text-charcoal"
          >
            Cart
            <span className="grid size-7 place-items-center rounded-full bg-charcoal text-[0.75rem] text-offwhite">
              0
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
