import { ACCESSIBILITY_PAGE } from "@/lib/content/accessibility";

export default function AccessibilityPage() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-heading text-4xl text-green-950">{ACCESSIBILITY_PAGE.heading}</h1>
        <div className="mt-8">
          <p className="text-lg text-charcoal-light">{ACCESSIBILITY_PAGE.body}</p>
        </div>
      </div>
    </section>
  );
}
