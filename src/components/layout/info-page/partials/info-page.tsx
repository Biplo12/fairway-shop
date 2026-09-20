import Link from "next/link";

import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";
import { cn } from "@/utils";

import type { InfoPageProps } from "../types";

export function InfoPage({
  label,
  heading,
  intro,
  sections,
  children,
  footnote,
  cta,
}: InfoPageProps) {
  return (
    <>
      <FloatingNav />
      <main id="main" className="p-3 md:p-5">
        <div className="overflow-hidden rounded-card bg-white">
          <PageNav current="info" />

          <div className="px-6 py-12 md:px-12 md:py-16">
            <div className="grid gap-x-12 lg:grid-cols-2">
              <div className="max-w-[40rem]">
                <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
                  {label}
                </p>
                <h1 className="mt-3 text-[clamp(1.875rem,3vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
                  {heading}
                </h1>
                <p className="mt-5 text-[1.0625rem] leading-[1.6] text-charcoal/70">
                  {intro}
                </p>
              </div>

              {children}
            </div>

            <dl className="mt-12 grid gap-y-10 md:grid-cols-2 md:gap-x-12">
              {sections.map((section, i) => (
                <div
                  key={section.title}
                  className={cn("border-t border-mist pt-5", i === 0 ? "border-t-0 pt-0" : "", i === 1 ? "md:border-t-0 md:pt-0" : "")}
                >
                  <dt className="text-[1.25rem] leading-[1.2] tracking-[-0.015em]">
                    {section.title}
                  </dt>
                  <dd className="mt-3 text-[0.9375rem] leading-[1.65] text-charcoal/70">
                    {section.body}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 max-w-[40rem] border-t border-mist pt-8">
              <p className="text-[1rem] leading-[1.6] text-charcoal/70">
                Anything this page does not answer, the counter will. Ring the
                shop on{" "}
                <a
                  href="tel:+441334555187"
                  className="underline underline-offset-4 hover:text-charcoal"
                >
                  01334 555 187
                </a>{" "}
                or write to{" "}
                <a
                  href="mailto:shop@fairwaygolf.co.uk"
                  className="underline underline-offset-4 hover:text-charcoal"
                >
                  shop@fairwaygolf.co.uk
                </a>
                .
              </p>

              {footnote ? (
                <p className="mt-6 text-[0.8125rem] leading-[1.6] text-charcoal/50">
                  {footnote}
                </p>
              ) : null}

              {cta ? (
                <Link
                  href={cta.href}
                  className="mt-8 inline-flex rounded-control border border-charcoal/30 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal/70"
                >
                  {cta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
