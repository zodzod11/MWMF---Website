import { PRIVACY_PAGE } from "@/lib/content/privacy";

export default function PrivacyPage() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-heading text-4xl text-green-950">{PRIVACY_PAGE.heading}</h1>
        <div className="mt-8 prose text-charcoal-light">
          <p className="text-lg">{PRIVACY_PAGE.body}</p>
        </div>
      </div>
    </section>
  );
}
