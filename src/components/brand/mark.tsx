/**
 * The FAIRWAY flight mark: the path of a struck ball, thick off the face and
 * thinning as it falls. The taper is what gives the shape direction, and the
 * subject is what the shop actually sells, flight.
 *
 * `compact` is heavier with the thin end of the descent cut away, so the shape
 * keeps mass below 32px. Use it in UI chrome and keep the full version for
 * large placements.
 */
const FULL =
  "M4 96C8 38 28 10 52 10 76 10 90 30 98 58 90 36 74 22 52 22 32 22 20 46 16 96Z";
const COMPACT =
  "M6 94C10 36 30 12 54 12 76 12 90 30 96 50 86 32 72 26 54 26 34 26 24 48 20 94Z";

export function Mark({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d={compact ? COMPACT : FULL} />
    </svg>
  );
}
