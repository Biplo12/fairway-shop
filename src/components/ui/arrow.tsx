/** Long rule with an arrowhead — the link marker used across the site. */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 34 8"
      className={`h-2 w-[34px] shrink-0 ${className}`}
      fill="none"
    >
      <path d="M0 4h32M28 1l4 3-4 3" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
