import { PROGRAMS } from "@/lib/content/programs";
import { notFound } from "next/navigation";

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    notFound();
    return;
  }

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <a href="/programs" className="text-green-950 no-underline font-medium">
            ← All Programs
          </a>
        </div>
        <h1 className="font-heading text-4xl text-green-950">{program.title}</h1>
        <p className="text-xl text-green-600 font-medium italic mt-2">
          {program.tagline}
        </p>
        <div className="mt-6 bg-white p-8 rounded-lg border border-gray-200">
          <p className="text-lg text-charcoal-light leading-relaxed">
            Detailed program content is being developed. [VERIFY: add full program
            description, schedule, eligibility, and enrollment information when
            confirmed.]
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <span className="font-medium">Audience:</span> {program.audience}
          </p>
        </div>
      </div>
    </section>
  );
}
