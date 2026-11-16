import { ContentSection } from "@/components/sections/ContentSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
};

import { RESOURCES_PAGE } from "@/lib/content/resources";
import { EmptyState } from "@/components/ui/EmptyState";

export default function ResourcesPage() {
  return (
    <>
      <ContentSection section={RESOURCES_PAGE} bgClass="bg-cream" />
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <EmptyState message="Community resources are being curated and verified. Check back soon." />
        </div>
      </section>
    </>
  );
}
