import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";
import { Reveal } from "@/components/ui/reveal";
import { allSessions, findSession, sessionPages } from "@/content/fitting";

import { Booking } from "../_components/booking";
import { OtherSessions } from "./_components/other-sessions";
import { SessionHero } from "./_components/session-hero";
import { SessionRuns } from "./_components/session-runs";
import { SessionSuits } from "./_components/session-suits";

export function generateStaticParams() {
  return allSessions.map((session) => ({ session: session.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ session: string }>;
}): Promise<Metadata> {
  const { session: slug } = await params;
  const session = findSession(slug);
  const page = sessionPages[slug];
  if (!session || !page) return {};

  return {
    title: session.name,
    description: `${page.lead} ${session.duration} in the fitting studio at FAIRWAY, near St. Andrews, ${session.price}.`,
  };
}

export default async function FittingSession({
  params,
}: {
  params: Promise<{ session: string }>;
}) {
  const { session: slug } = await params;
  const session = findSession(slug);
  const page = sessionPages[slug];
  if (!session || !page) notFound();

  return (
    <>
      <FloatingNav />
      <main id="main">
        <section className="p-3 md:p-5">
          <div className="overflow-hidden rounded-card bg-white">
            <PageNav current="fitting" />
            <SessionHero session={session} page={page} />
            <SessionRuns session={session} page={page} />
          </div>
        </section>

        <Reveal>
          <SessionSuits session={session} page={page} />
        </Reveal>

        <Reveal>
          <Booking
            selected={session.slug}
            heading={page.booking.heading}
            body={page.booking.body}
          />
        </Reveal>

        <Reveal>
          <OtherSessions current={session.slug} />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
