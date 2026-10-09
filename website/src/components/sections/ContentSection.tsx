import type { ContentSection as ContentSectionType } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContentSection({
  section,
  bgClass,
}: {
  section: ContentSectionType;
  bgClass?: string;
}) {
  return (
    <section
      id={section.id}
      className={`py-16 lg:py-20 ${bgClass ?? "bg-cream"}`.trim()}
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <SectionHeading heading={section.heading} subheading={section.subheading} />
        <div className="mt-8 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-charcoal-light">
            {section.body}
          </p>
          {section.cta && (
            <div className="mt-8">
              <Button cta={section.cta} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
