import type { CTA } from "@/types/cta";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center px-6 py-3 rounded-lg bg-green-950 text-white font-medium hover:bg-green-800 transition-colors no-underline",
  secondary:
    "inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-green-950 text-green-950 font-medium hover:bg-green-950 hover:text-white transition-colors no-underline",
  ghost:
    "inline-flex items-center justify-center text-charcoal font-medium underline hover:text-green-950 transition-colors no-underline",
};

export function Button({ cta, variant }: { cta: CTA; variant?: Variant }) {
  const v = variant ?? cta.variant;
  return <a href={cta.href} className={styles[v]}>{cta.label}</a>;
}
