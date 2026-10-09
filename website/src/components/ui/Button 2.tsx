import type { CTA } from "@/types/content";

type Variant = "primary" | "secondary" | "ghost";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-green-950 text-white hover:bg-green-800 focus-visible:ring-2 focus-visible:ring-terracotta",
  secondary:
    "bg-transparent text-green-950 border-2 border-green-950 hover:bg-green-950 hover:text-white focus-visible:ring-2 focus-visible:ring-terracotta",
  ghost:
    "bg-transparent text-charcoal underline hover:text-green-950 focus-visible:ring-2 focus-visible:ring-terracotta",
};

export function Button({
  cta,
  variant,
  className,
}: {
  cta: CTA;
  variant?: Variant;
  className?: string;
}) {
  const v = variant ?? cta.variant;
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-body font-medium transition-all duration-200 no-underline";
  const styles = variantStyles[v];

  return (
    <a
      href={cta.href}
      className={`${base} ${styles} ${className ?? ""}`.trim()}
    >
      {cta.label}
    </a>
  );
}
