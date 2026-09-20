import type { Metadata } from "next";

import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";
import { Reveal } from "@/components/ui/reveal";

import { AboutBackroom } from "./_components/about-backroom";
import { AboutClosing } from "./_components/about-closing";
import { AboutHero } from "./_components/about-hero";
import { AboutPrinciples } from "./_components/about-principles";
import { AboutTimeline } from "./_components/about-timeline";

export const metadata: Metadata = {
  title: "About the shop",
  description:
    "FAIRWAY opened in 1987 as a fitting bench behind a pro shop near St. Andrews. Twelve brands, one fitting bay, and staff who will talk you out of the wrong club.",
};

export default function About() {
  return (
    <>
      <FloatingNav />
      <main id="main">
        <section className="p-3 md:p-5">
          <div className="overflow-hidden rounded-card bg-white">
            <PageNav current="info" />
            <AboutHero />
            <AboutPrinciples />
          </div>
        </section>

        <Reveal>
          <AboutBackroom />
        </Reveal>

        <Reveal>
          <AboutTimeline />
        </Reveal>

        <Reveal>
          <AboutClosing />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
