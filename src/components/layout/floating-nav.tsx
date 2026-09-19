"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";

import { Mark } from "@/components/brand/mark";
import { CartButton } from "@/components/cart/cart-button";
import { useBag } from "@/components/cart/cart-context";

const links = [
  { href: "/shop", label: "Shop", index: "01" },
  { href: "/brands", label: "Brands", index: "02" },
  { href: "/fitting", label: "Fitting", index: "03" },
  { href: "/stories", label: "Stories", index: "04" },
];

/**
 * Pill navigation that arrives once the hero has scrolled away. The hero
 * carries its own navigation, so this only exists below it.
 *
 * The pill has no room for four links on a phone, so below md they move into
 * a panel behind a menu button. Nothing is hidden without a way back to it.
 */
export function FloatingNav() {
  const { count, setOpen: setBagOpen } = useBag();
  const [shown, setShown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
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
            <CartButton />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="grid size-9 place-items-center rounded-full text-offwhite transition-colors hover:bg-white/10 md:hidden"
            >
              <Menu className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-0 z-[60] bg-charcoal px-5 py-4 text-offwhite md:hidden"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5"
          >
            <Mark compact className="h-4 w-4" />
            <span className="text-[0.875rem] font-medium uppercase leading-none tracking-[0.24em]">
              Fairway
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="grid size-11 place-items-center rounded-full transition-colors hover:bg-white/10"
          >
            <X className="size-5" strokeWidth={1.5} />
          </button>
        </div>

        <nav aria-label="Menu" className="mt-10">
          <ul>
            {links.map((link) => (
              <li key={link.href} className="border-t border-offwhite/15">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-5 py-5"
                >
                  <span className="text-[0.75rem] uppercase tracking-[0.16em] text-offwhite/45">
                    {link.index}
                  </span>
                  <span className="text-[2rem] font-normal leading-none tracking-[-0.02em]">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 border-t border-offwhite/15 pt-6">
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setBagOpen(true);
            }}
            className="text-[0.9375rem] uppercase tracking-[0.06em] text-offwhite/80"
          >
            Cart, {count} {count === 1 ? "item" : "items"}
          </button>
          <p className="mt-6 text-[0.875rem] leading-[1.6] text-offwhite/55">
            Fitting studio open seven days. Every brand that matters, fitted to
            the way you play.
          </p>
        </div>
      </div>
    </>
  );
}
