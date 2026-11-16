import { ContentSection } from "@/components/sections/ContentSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Updates",
};

import { EVENTS_PAGE } from "@/lib/content/events";
import { EmptyState } from "@/components/ui/EmptyState";

export default function EventsPage() {
  return (
    <>
      <ContentSection section={EVENTS_PAGE} bgClass="bg-cream" />
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <EmptyState message="No upcoming events at this time. Stay connected for updates." />
        </div>
      </section>
    </>
  );
}
