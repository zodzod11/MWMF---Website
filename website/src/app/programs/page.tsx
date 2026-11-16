import { ProgramOverview } from "@/components/sections/ProgramOverview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
};

import { ContentSection } from "@/components/sections/ContentSection";

export default function ProgramsPage() {
  return <ProgramOverview />;
}
