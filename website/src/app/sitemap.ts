import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://womenmaternalwellness.org";
  const staticPages = [
    "", "about", "programs", "resources", "events",
    "get-involved", "donate", "contact", "privacy", "accessibility",
  ];
  return staticPages.map((page) => ({
    url: `${base}/${page}`,
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1 : 0.8,
  }));
}
