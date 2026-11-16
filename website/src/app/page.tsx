import { HeroSection } from "@/components/sections/HeroSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { ProgramOverview } from "@/components/sections/ProgramOverview";
import {
  WHO_WE_SERVE,
  MISSION_TEASER,
  FOUNDER_SPOTLIGHT,
  BOARD_SECTION,
  IMPACT,
  GET_INVOLVED,
} from "@/lib/content/home";
import { BOARD_OF_DIRECTORS } from "@/lib/content/about";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContentSection section={WHO_WE_SERVE} bgClass="bg-cream" />
      <ContentSection section={MISSION_TEASER} bgClass="bg-white" />
      <ProgramOverview />
      <ContentSection section={FOUNDER_SPOTLIGHT} bgClass="bg-cream" />

      {/* Board of Directors */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-green-950 text-center">{BOARD_SECTION.heading}</h2>
          <p className="text-lg text-charcoal-light text-center mt-4 max-w-2xl mx-auto">
            {BOARD_SECTION.subheading}
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOARD_OF_DIRECTORS.map((member) => (
              <div key={member.name} className="bg-cream p-6 rounded-lg border border-gray-200">
                <h3 className="font-heading text-lg font-medium text-green-950">{member.name}</h3>
                {member.credentials && (
                  <p className="text-sm text-green-600 font-medium">{member.credentials}</p>
                )}
                <p className="text-sm text-charcoal mt-1 font-medium">{member.role}</p>
                {member.affiliation && (
                  <p className="text-sm text-charcoal-light mt-1">{member.affiliation}</p>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/about" className="text-green-700 hover:text-green-800 font-medium underline underline-offset-2">
              Learn more about our team →
            </a>
          </div>
        </div>
      </section>

      <ContentSection section={IMPACT} bgClass="bg-white" />
      <ContentSection section={GET_INVOLVED} bgClass="bg-green-950" />
      <div className="h-2 bg-green-800" />
    </>
  );
}
