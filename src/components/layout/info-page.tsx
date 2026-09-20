import Link from "next/link";
import type { ReactNode } from "react";

import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";

/**
 * The scaffold the shop's written pages share: one card, the navigation in it,
 * a heading block and whatever the page has to say. Delivery and terms are the
 * same shape as each other, so the shape lives here rather than twice.
 *
 * Sections are a heading and a paragraph or two, set as a definition list,
 * because that is what these pages are: a question somebody asked at the
 * counter, and the answer.
 */
export function InfoPage({
  label,
  heading,
  intro,
  sections,
  children,
  footnote,
  cta,
}: {
  label: string;
  heading: string;
  intro: string;
  sections: { title: string; body: string }[];
  /** anything that is not a section, a price table for instance */
  children?: ReactNode;
  footnote?: string;
  cta?: { href: string; label: string };
}) {
  return (
    <>
      <FloatingNav />
      <main id="main" className="p-3 md:p-5">
        <div className="overflow-hidden rounded-card bg-white">
          <PageNav current="info" />

          <div className="px-6 py-12 md:px-12 md:py-16">
            {/* The heading keeps its measure and whatever the page brings with
                it, a price table for instance, sits beside it rather than
                under it. Both of them left on a wide screen leaves half the
                card empty. With nothing passed the column is simply unused. */}
            <div className="grid gap-x-16 lg:grid-cols-2">
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
              {sections.map((section) => (
                <div key={section.title} className="border-t border-mist pt-5">
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
