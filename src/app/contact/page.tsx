import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "./_components/contact-form";
import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";
import { Media } from "@/components/ui/media";
import { hours } from "@/content/fitting";

/** the three ways into the shop, in the order the counter would give them */
const contactRoutes = [
  { href: "tel:+441334555187", label: "01334 555 187" },
  { href: "mailto:shop@fairwaygolf.co.uk", label: "shop@fairwaygolf.co.uk" },
  { href: "mailto:studio@fairwaygolf.co.uk", label: "studio@fairwaygolf.co.uk" },
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Fairway Golf, 12 Links Road, St. Andrews. Telephone, email, opening hours and how to find the shop and the fitting studio behind it.",
};

export default function Contact() {
  return (
    <>
      <FloatingNav />
      <main id="main" className="p-3 md:p-5">
        <div className="overflow-hidden rounded-card bg-white">
          <PageNav current="info" />

          <div className="grid lg:grid-cols-[1.25fr_1fr]">
            <div className="px-6 pb-10 pt-12 md:px-12 md:pb-10 md:pt-14">
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-charcoal/55">
                  <li>
                    <Link href="/" className="hover:text-charcoal">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li className="text-charcoal">Contact</li>
                </ol>
              </nav>

              <div className="mt-6 max-w-[34rem]">
                <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
                  Contact
                </p>
                <h1 className="mt-3 text-[clamp(1.875rem,3.2vw,2.75rem)] font-normal leading-[1.05] tracking-[-0.025em]">
                  Talk to the counter
                </h1>
                <p className="mt-5 text-[1.0625rem] leading-[1.6] text-charcoal/70">
                  Questions about a club, an order or a regrip land here and get
                  answered by whoever is behind the counter. Booking a session
                  is a different form, with a date on it, and it lives on the{" "}
                  <Link
                    href="/fitting#book"
                    className="underline underline-offset-4 hover:text-charcoal"
                  >
                    fitting page
                  </Link>
                  .
                </p>
              </div>

              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="relative order-first min-h-[18rem] lg:order-none lg:min-h-0">
              <div className="absolute inset-0">
                <Media
                  src="/images/shop-info/contact-counter.jpg"
                  alt="A member of staff at the driver rack in the shop, under the pendant light"
                  ratio="fill"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="grid gap-10 px-6 py-10 md:grid-cols-3 md:px-12 md:py-12">
            <div>
              <h2 className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                Where
              </h2>
              <address className="mt-5 text-[0.9375rem] not-italic leading-[1.7] text-charcoal/80">
                Fairway Golf
                <br />
                12 Links Road
                <br />
                St. Andrews, Fife
                <br />
                KY16 9JA
              </address>
              <p className="mt-4 text-[0.875rem] leading-[1.6] text-charcoal/55">
                Parking behind the shop, three spaces, first come. The studio is
                through the shop, past the rack, on the left.
              </p>
            </div>

            <div>
              <h2 className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                Open
              </h2>
              <dl className="mt-5 space-y-2.5 text-[0.9375rem] text-charcoal/80">
                {hours.map((entry) => (
                  <div key={entry.days} className="flex justify-between gap-6">
                    <dt>{entry.days}</dt>
                    <dd className="tabular-nums text-charcoal/55">
                      {entry.time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[0.875rem] leading-[1.6] text-charcoal/55">
                Closed Christmas Day and Boxing Day. The last fitting starts
                ninety minutes before we close.
              </p>
            </div>

            <div>
              <h2 className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                Voice, or writing
              </h2>
              <ul className="mt-5 space-y-2.5 text-[0.9375rem] text-charcoal/80">
                {contactRoutes.map((route) => (
                  <li key={route.href}>
                    <a
                      href={route.href}
                      className="underline underline-offset-4 hover:text-charcoal"
                    >
                      {route.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.875rem] leading-[1.6] text-charcoal/55">
                The telephone is answered faster than the inbox, and on a
                Saturday morning it is answered slowest of all.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
