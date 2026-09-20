import Link from "next/link";
import { Search } from "lucide-react";

import { CartButton } from "@/components/cart/cart-button";
import { Mark } from "@/components/brand/mark";
import { cn } from "@/utils";
import { tabs } from "../constants";

export function PageNav({
  current,
}: {
  current: "home" | "shop" | "fitting" | "bag" | "brands" | "info";
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
                className={cn("flex h-full flex-col justify-between gap-5 border-r border-offwhite/10 px-4 pb-3 pt-4 text-[0.75rem] leading-tight transition-colors md:w-[11.5rem] md:px-6 md:text-[0.8125rem]", active
                    ? "border-t-2 border-t-forest bg-white/10 text-offwhite"
                    : "text-offwhite/70 hover:bg-white/5 hover:text-offwhite")}
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
          <CartButton className="sm:w-[7.5rem] sm:justify-between sm:pl-5" />
        </div>
      </div>
    </nav>
  );
}
