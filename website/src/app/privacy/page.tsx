import { PRIVACY_PAGE } from "@/lib/content/privacy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};


export default function PrivacyPage() {
  const paragraphs = PRIVACY_PAGE.body.split("\n\n");

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-heading text-4xl text-green-950">{PRIVACY_PAGE.heading}</h1>
        <p className="text-sm text-charcoal-light mt-2">Last updated: {PRIVACY_PAGE.lastUpdated}</p>
        <div className="mt-8 space-y-4 text-lg text-charcoal-light leading-relaxed">
          {paragraphs.map((p, i) => {
            if (p.startsWith("Information We Collect") || p.startsWith("How We Use") || p.startsWith("Data Storage") || p.startsWith("Third-Party") || p.startsWith("Your Rights") || p.startsWith("Children") || p.startsWith("Changes to") || p.startsWith("Contact Us")) {
              const [title, ...rest] = p.split("\n");
              return (
                <div key={i}>
                  <h2 className="font-heading text-xl text-green-950 mt-8 mb-2">{title}</h2>
                  {rest.map((line, j) => (
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
