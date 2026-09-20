import Link from "next/link";
import { Search, User } from "lucide-react";

import { CartButton } from "@/components/cart/cart-button";
import { Mark } from "@/components/brand/mark";

const tabs = [
  { href: "/", name: "Home page", index: "01", id: "home" },
  { href: "/shop", name: "Equipment store", index: "02", id: "shop" },
  { href: "/fitting", name: "Fitting", index: "03", id: "fitting" },
];

/**
 * The dark bar that sits at the top of an inner page's card, where the
 * homepage has its hero. Same numbered tabs, so a customer knows which of the
 * three rooms of the shop they are standing in.
 */
export function PageNav({
  current,
}: {
  /** "bag" stands on none of the three, so no tab is marked current */
  current: "home" | "shop" | "fitting" | "bag";
}) {
  return (
    <nav
      aria-label="Primary"
      className="flex flex-wrap items-stretch justify-between gap-y-2 bg-charcoal text-offwhite"
    >
      <ul className="flex flex-1 basis-full md:basis-auto">
        {tabs.map((tab) => {
          const active = tab.id === current;
          return (
            <li key={tab.id} className="flex-1 md:flex-none">
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={`flex h-full flex-col justify-between gap-5 border-r border-offwhite/10 px-4 pb-3 pt-4 text-[0.75rem] leading-tight transition-colors md:w-[11.5rem] md:px-6 md:text-[0.8125rem] ${
                  active
                    ? "border-t-2 border-t-forest bg-white/10 text-offwhite"
                    : "text-offwhite/70 hover:bg-white/5 hover:text-offwhite"
                }`}
              >
                <span>{tab.name}</span>
                <span
                  className={active ? "text-offwhite/60" : "text-offwhite/35"}
                >
                  {tab.index}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-1 items-center justify-between gap-4 px-4 py-3 md:flex-none md:justify-end md:gap-8 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Mark compact className="h-5 w-5" />
          <span className="text-[0.9375rem] font-medium uppercase leading-none tracking-[0.26em]">
            Fairway
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/search"
            aria-label="Search"
            className="grid size-9 place-items-center rounded-full border border-offwhite/40 text-offwhite transition-colors hover:bg-white/15"
          >
            <Search className="size-4" strokeWidth={1.5} />
          </Link>
          <button
            type="button"
            className="hidden size-9 place-items-center rounded-full border border-offwhite/40 text-[0.75rem] text-offwhite transition-colors hover:bg-white/15 sm:grid"
          >
            En
          </button>
          <Link
            href="/account"
            aria-label="Account"
            className="hidden size-9 place-items-center rounded-full border border-offwhite/40 text-offwhite transition-colors hover:bg-white/15 sm:grid"
          >
            <User className="size-4" strokeWidth={1.5} />
          </Link>
          <CartButton className="sm:w-[7.5rem] sm:justify-between sm:pl-5" />
        </div>
      </div>
    </nav>
  );
}
