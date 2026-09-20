import Link from "next/link";
import { Lock } from "lucide-react";
import type { ReactNode } from "react";

import { Mark } from "@/components/brand/mark";

export function CheckoutShell({
  back,
  backLabel,
  children,
}: {
  back: string;
  backLabel: string;
  children: ReactNode;
}) {
  return (
    <main id="main" className="p-3 md:p-5">
      <div className="overflow-hidden rounded-card bg-white">
        <header className="flex flex-wrap items-center justify-between gap-4 bg-charcoal px-5 py-4 text-offwhite md:px-8 md:py-5">
          <Link href="/" className="flex items-center gap-3">
            <Mark compact className="h-5 w-5" />
            <span className="text-[0.9375rem] font-medium uppercase leading-none tracking-[0.26em]">
              Fairway
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.16em] text-offwhite/60">
              <Lock className="size-3.5" strokeWidth={1.5} />
              Secure checkout
            </span>
            <Link
              href={back}
              className="text-[0.75rem] uppercase tracking-[0.16em] text-offwhite/70 underline underline-offset-4 transition-colors hover:text-offwhite"
            >
              {backLabel}
            </Link>
          </div>
        </header>

        {children}

        <footer className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-mist px-5 py-6 text-[0.8125rem] text-charcoal/65 md:px-8">
          <p>
            Stuck on something? Call the shop on{" "}
            <a
              href="tel:+441334555187"
              className="text-charcoal underline underline-offset-4"
            >
              01334 555 187
            </a>
            , seven days.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/delivery" className="hover:text-charcoal">
              Delivery &amp; returns
            </Link>
            <Link href="/privacy" className="hover:text-charcoal">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-charcoal">
              Terms
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
