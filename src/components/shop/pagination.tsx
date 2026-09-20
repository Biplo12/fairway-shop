import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Pages as links, like the filters, so a shelf keeps one address per view and
 * paging costs no JavaScript. Ten products do not need this yet, but a rack
 * that cannot page is a rack that stops growing.
 */
export function Pagination({
  page,
  pages,
  href,
}: {
  page: number;
  pages: number;
  /** builds the address for a page number */
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

      {Array.from({ length: pages }, (_, index) => index + 1).map((number) => {
        const current = number === page;
        return (
          <Link
            key={number}
            href={href(number)}
            aria-current={current ? "page" : undefined}
            aria-label={`Page ${number}`}
            className={`grid size-9 place-items-center rounded-full text-[0.9375rem] tabular-nums transition-colors ${
              current
                ? "bg-charcoal text-offwhite"
                : "text-charcoal/60 hover:bg-charcoal/10 hover:text-charcoal"
            }`}
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
