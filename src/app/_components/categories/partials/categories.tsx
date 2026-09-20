import Link from "next/link";

import { Arrow } from "@/components/ui/arrow";
import { Media } from "@/components/ui/media";
import { categories } from "../constants";

export function Categories() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="px-3 pb-3 md:px-5 md:pb-5"
    >
      {/* The cards carry the names, so the section's own heading is there for
          the outline rather than for the page: without it the card titles sit
          under the hero with no level between them and the h1. */}
      <h2 id="categories-heading" className="sr-only">
        The fastest moving shelves
      </h2>
      <div className="grid gap-3 md:grid-cols-3 md:gap-4">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="group relative overflow-hidden rounded-card bg-forest"
          >
            <Media
              src={category.image}
              alt={category.alt}
              ratio="4/5"
              sizes="(min-width: 768px) 33vw, 100vw"
              imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent"
            />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-none tracking-[-0.02em] text-white">
                {category.title}
              </h3>
              <span className="mt-4 inline-flex items-center gap-3 text-[0.875rem] uppercase tracking-[0.04em] text-white">
                <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                <span className="underline underline-offset-4">Shop now</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
