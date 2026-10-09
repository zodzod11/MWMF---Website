type Tone = "info" | "warning" | "success";

const toneStyles: Record<Tone, string> = {
  info: "bg-green-300/20 border-green-950 text-charcoal",
  warning: "bg-gold-300/20 border-gold-400 text-charcoal",
  success: "bg-green-600/20 border-green-950 text-charcoal",
};

export function Callout({ tone = "info", children }: { tone?: Tone; children: React.ReactNode }) {
  return (
    <div className={`rounded-lg border-l-4 p-4 ${toneStyles[tone]}`}>
      {children}
    </div>
  );
}
