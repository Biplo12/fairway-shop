/**
 * The FAIRWAY corridor mark, two tapered bars converging to a point, the
 * fairway seen from the tee. Inherits colour from the surrounding text.
 *
 * `compact` crops the top quarter so the tips keep mass below 32px; use it in
 * UI chrome and keep the full version for large, ceremonial placements.
 */
export function Mark({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const paths = compact
    ? ["M36.3 0 0 100 17.4 100 40.7 0Z", "M63.7 0 100 100 82.6 100 59.3 0Z"]
    : ["M48.4 0 0 100 17.4 100Z", "M51.6 0 82.6 100 100 100Z"];

  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
