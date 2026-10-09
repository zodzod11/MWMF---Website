import { PROGRAMS } from "@/lib/content/programs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EmptyState } from "@/components/ui/EmptyState";

const badgeColors: Record<string, string> = {
  active: "bg-green-600 text-white",
  upcoming: "bg-gold-300 text-charcoal",
  concept: "bg-gray-200 text-charcoal-light",
};
const badgeLabels: Record<string, string> = {
  active: "Active",
  upcoming: "Coming Soon",
  concept: "In Development",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${badgeColors[status] ?? badgeColors.concept}`}
    >
      {badgeLabels[status] ?? status}
    </span>
  );
}

export function ProgramOverview() {
  return (
    <section className="bg-cream-light py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          heading="Our Programs"
          subheading="We offer culturally responsive programs designed to support mothers through connection, education, and navigation."
        />

        {PROGRAMS.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROGRAMS.map((program) => (
              <article
                key={program.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-xl font-medium text-green-950">
                    {program.title}
                  </h3>
                  <StatusBadge status={program.status} />
                </div>
                <p className="text-base text-green-600 font-medium italic">
                  {program.tagline}
                </p>
                <p className="text-charcoal-light mt-3">
                  {program.summary}
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  <span className="font-medium">For:</span> {program.audience}
                </p>
                {program.cta && (
                  <a
                    href={program.cta.href}
                    className="inline-block mt-4 text-green-950 font-medium hover:underline"
                  >
                    {program.cta.label} →
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8">
            <EmptyState message="Our programs are being developed. Stay connected for updates." />
          </div>
        )}
      </div>
    </section>
  );
}
