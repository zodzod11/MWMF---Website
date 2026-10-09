import type { CTA } from "./cta";

export interface NavLink {
  label: string;
  href: string;
  prominent?: boolean;
}

export interface FooterSection {
  heading: string;
  links: { label: string; href: string }[];
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  imagePath: string | null;
}

export interface ContentSection {
  id: string;
  heading: string;
  subheading?: string;
  body: string;
  cta?: CTA;
}

export interface Program {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  summary: string;
  audience: string;
  status: "active" | "upcoming" | "concept";
  cta: CTA | null;
}

export interface TeamMember {
  id: string;
  name: string;
  credentials: string;
  title: string;
  bio: string;
  photoPath: string | null;
  order: number;
}

export interface Resource {
  id: string;
  title: string;
  provider: string;
  summary: string;
  url: string;
  category: string;
  status: "verified" | "pending";
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  registrationUrl: string | null;
  status: "upcoming" | "past";
}
