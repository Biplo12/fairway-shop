import { cn } from "@/utils";

export function Wordmark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-lg tracking-[0.34em]",
    md: "text-2xl tracking-[0.32em]",
    lg: "text-4xl tracking-[0.3em]",
  };

  return (
    <span
      className={cn("font-display uppercase leading-none", sizes[size], className)}
    >
      Fairway
    </span>
  );
}
