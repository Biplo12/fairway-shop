import { BookingForm } from "./booking-form";
import { Media } from "@/components/ui/media";
import { bring, fullBag, hours, sessions } from "@/content/fitting";

export function Booking({ selected }: { selected?: string }) {
  const options = [...sessions, fullBag].map((session) => ({
    slug: session.slug,
    name: session.name,
    duration: session.duration,
    price: session.price,
  }));

  return (
    <section id="book" className="scroll-mt-24 px-3 pb-3 md:px-5 md:pb-5">
      <div className="overflow-hidden rounded-card bg-charcoal text-offwhite">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[24rem] lg:min-h-[38rem]">
            <div className="absolute inset-0">
              <Media
                src="/images/fitting/glove-and-ball.jpg"
                alt="A gloved hand holding out a golf ball against a black studio background"
                ratio="fill"
                sizes="(min-width: 1024px) 50vw, 100vw"
                imageClassName="object-[center_40%]"
              />
            </div>
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-transparent"
            />

            <div className="relative flex h-full flex-col justify-end p-6 md:p-12">
              <span className="inline-flex w-fit items-center rounded-full border border-white/50 px-4 py-2.5 text-[0.8125rem] uppercase leading-none tracking-[0.02em] text-white">
                Booking
              </span>
              <h2 className="mt-5 text-[clamp(2rem,3.2vw,3rem)] font-normal leading-[1.05] tracking-[-0.025em] text-white">
                Take the bay for an hour
              </h2>
              <p className="mt-4 max-w-[30rem] text-[1.0625rem] leading-[1.55] text-white/80">
                One bay, one fitter, no queue behind you. Tell us which session
                and roughly when, and somebody will call to put it in the diary.
              </p>
              <p className="mt-6 text-[0.9375rem] text-white/70">
                Or ring the studio on{" "}
                <a
                  href="tel:+441334555187"
                  className="text-white underline underline-offset-4"
                >
                  01334 555 187
                </a>
              </p>
            </div>
          </div>

          <div className="p-6 md:p-12">
            <BookingForm options={options} selected={selected} />
          </div>
        </div>

        <div className="grid gap-10 border-t border-offwhite/15 px-6 py-10 md:grid-cols-3 md:px-12 md:py-12">
          <div>
            <h3 className="text-[0.6875rem] uppercase tracking-[0.16em] text-offwhite/50">
              Studio hours
            </h3>
            <dl className="mt-5 space-y-2.5 text-[0.9375rem] text-offwhite/85">
              {hours.map((entry) => (
                <div key={entry.days} className="flex justify-between gap-6">
                  <dt>{entry.days}</dt>
                  <dd className="tabular-nums text-offwhite/65">
                    {entry.time}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[0.8125rem] leading-[1.6] text-offwhite/55">
              Last session starts ninety minutes before we close.
            </p>
          </div>

          <div>
            <h3 className="text-[0.6875rem] uppercase tracking-[0.16em] text-offwhite/50">
              Bring with you
            </h3>
            <ul className="mt-5 space-y-2.5 text-[0.9375rem] text-offwhite/85">
              {bring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.6875rem] uppercase tracking-[0.16em] text-offwhite/50">
              Where
            </h3>
            <address className="mt-5 text-[0.9375rem] not-italic leading-[1.7] text-offwhite/85">
              Fairway Golf
              <br />
              12 Links Road
              <br />
              St. Andrews, Fife
              <br />
              KY16 9JA
            </address>
            <p className="mt-4 text-[0.8125rem] leading-[1.6] text-offwhite/55">
              The studio is through the shop, past the rack, on the left.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
