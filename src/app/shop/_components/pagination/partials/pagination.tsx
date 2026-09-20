import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils";
import { WINDOW } from "../constants";

function pageNumbers(page: number, pages: number) {
  if (pages <= WINDOW) {
    return Array.from({ length: pages }, (_, index) => index + 1);
  }

  const run = WINDOW - 2;
  let first = Math.max(1, page - Math.floor(run / 2));
  const last = Math.min(pages - 1, first + run - 1);
  first = Math.max(1, last - run + 1);

  const numbers: (number | "gap")[] = [];
  for (let number = first; number <= last; number++) numbers.push(number);
  if (last < pages - 1) numbers.push("gap");
  numbers.push(pages);
  return numbers;
}
export function Pagination({
  page,
  pages,
  href,
}: {
  page: number;
  pages: number;
  href: (page: number) => string;
}) {
  if (pages < 2) return null;

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-1 border-t border-mist pt-8"
    >
      <Step
        href={href(page - 1)}
        disabled={page === 1}
        rel="prev"
        label="Previous page"
      >
        <ChevronLeft className="size-4" strokeWidth={1.75} />
      </Step>

      {pageNumbers(page, pages).map((number, index) => {
        if (number === "gap") {
          return (
            <span
              key={`gap-${index}`}
              aria-hidden
              className="grid size-9 place-items-center text-[0.9375rem] text-charcoal/35"
            >
              &hellip;
            </span>
          );
        }

        const current = number === page;
        return (
          <Link
            key={number}
            href={href(number)}
            aria-current={current ? "page" : undefined}
            aria-label={`Page ${number}`}
            className={cn("grid size-9 place-items-center rounded-full text-[0.9375rem] tabular-nums transition-colors", current
                ? "bg-charcoal text-offwhite"
                : "text-charcoal/60 hover:bg-charcoal/10 hover:text-charcoal")}
          >
            {number}
          </Link>
        );
      })}

      <Step
        href={href(page + 1)}
        disabled={page === pages}
        rel="next"
        label="Next page"
      >
        <ChevronRight className="size-4" strokeWidth={1.75} />
      </Step>
    </nav>
  );
}

function Step({
  href,
  disabled,
  rel,
  label,
  children,
}: {
  href: string;
  disabled: boolean;
  rel: "prev" | "next";
  label: string;
  children: React.ReactNode;
}) {
  if (disabled) {
    return (
      <span
        aria-hidden
        className="grid size-9 place-items-center text-charcoal/20"
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      rel={rel}
      aria-label={label}
      className="grid size-9 place-items-center rounded-full text-charcoal/60 transition-colors hover:bg-charcoal/10 hover:text-charcoal"
    >
      {children}
    </Link>
  );
}
