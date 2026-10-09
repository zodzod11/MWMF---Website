import { HeroSection } from "@/components/sections/HeroSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { ProgramOverview } from "@/components/sections/ProgramOverview";

import {
  WHO_WE_SERVE,
  MISSION_TEASER,
  FOUNDER_SPOTLIGHT,
  IMPACT_STATEMENT,
  GET_INVOLVED,
} from "@/lib/content/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <ContentSection section={WHO_WE_SERVE} className="bg-cream" />

      <ContentSection section={MISSION_TEASER} className="bg-white" />

      <ProgramOverview />

      <ContentSection
        section={FOUNDER_SPOTLIGHT}
        className="bg-cream"
      />

      <ContentSection section={IMPACT_STATEMENT} className="bg-white" />

      <ContentSection
        section={GET_INVOLVED}
        className="bg-green-950 text-white"
      />

      {/* Decorative bottom accent */}
      <div className="h-2 bg-green-800" />
    </>
  );
}
