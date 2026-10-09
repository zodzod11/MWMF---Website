import { HeroSection } from "@/components/sections/HeroSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { ProgramOverview } from "@/components/sections/ProgramOverview";
import {
  WHO_WE_SERVE,
  MISSION_TEASER,
  FOUNDER_SPOTLIGHT,
  IMPACT,
  GET_INVOLVED,
} from "@/lib/content/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContentSection section={WHO_WE_SERVE} bgClass="bg-cream" />
      <ContentSection section={MISSION_TEASER} bgClass="bg-white" />
      <ProgramOverview />
      <ContentSection section={FOUNDER_SPOTLIGHT} bgClass="bg-cream" />
      <ContentSection section={IMPACT} bgClass="bg-white" />
      <ContentSection section={GET_INVOLVED} bgClass="bg-green-950" />
      <div className="h-2 bg-green-800" />
    </>
  );
}
