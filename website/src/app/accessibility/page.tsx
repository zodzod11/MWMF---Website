import { ACCESSIBILITY_PAGE } from "@/lib/content/accessibility";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
};


export default function AccessibilityPage() {
  const paragraphs = ACCESSIBILITY_PAGE.body.split("\n\n");

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-heading text-4xl text-green-950">{ACCESSIBILITY_PAGE.heading}</h1>
        <p className="text-sm text-charcoal-light mt-2">Last updated: {ACCESSIBILITY_PAGE.lastUpdated}</p>
        <div className="mt-8 space-y-4 text-lg text-charcoal-light leading-relaxed">
          {paragraphs.map((p, i) => {
            const lines = p.split("\n");
            const firstLine = lines[0].trim();

            if (firstLine === "Our Commitment" || firstLine === "Accessibility Features" || firstLine === "Ongoing Improvements" || firstLine === "Reporting Barriers" || firstLine === "Contact Us") {
              return (
                <div key={i}>
                  <h2 className="font-heading text-xl text-green-950 mt-8 mb-2">{firstLine}</h2>
                  {lines.slice(1).map((line, j) => (
                    <p key={j} className="mb-2">{line}</p>
                  ))}
                </div>
              );
            }
            return <p key={i}>{p}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
