import { principles } from "../../../constants";

export function AboutPrinciples() {
  return (
    <div className="relative -mt-7 rounded-t-[1.75rem] bg-white px-6 py-10 md:-mt-9 md:rounded-t-[2.25rem] md:px-10 md:py-14">
      <div className="max-w-[36rem]">
        <h2 className="text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
          What we sell on
        </h2>
        <p className="mt-4 text-[1.0625rem] leading-[1.6] text-charcoal/70">
          Not discounts, not the newest thing because it is newest. A shop this
          size survives on being right more often than the internet is, which is
          a lower bar than it sounds and a harder one to keep.
        </p>
      </div>

      <ol className="mt-12 grid gap-y-10 md:grid-cols-3 md:gap-x-10">
        {principles.map((principle) => (
          <li key={principle.index} className="border-t border-mist pt-5">
            <span className="text-[0.75rem] tabular-nums tracking-[0.12em] text-olive">
              {principle.index}
            </span>
            <h3 className="mt-4 text-[1.25rem] leading-[1.2] tracking-[-0.015em]">
              {principle.title}
            </h3>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-charcoal/70">
              {principle.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
