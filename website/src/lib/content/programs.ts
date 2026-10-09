import type { Program } from "@/types/content";

export const PROGRAMS: Program[] = [
  {
    id: "support-circles",
    title: "Maternal Wellness & Support Circles",
    slug: "maternal-wellness-support-circles",
    tagline: "You don't have to do this alone.",
    summary: "Confidential peer support groups in English and Haitian Creole, facilitated by trained peer leaders with professional guidance. [VERIFY: confirm availability]",
    audience: "Mothers and birthing people in Greater Boston",
    status: "concept",
    cta: { label: "Learn More", href: "/programs/maternal-wellness-support-circles", variant: "secondary" },
  },
  {
    id: "family-education",
    title: "Fourth Trimester Education & Family Connection",
    slug: "fourth-trimester-education",
    tagline: "Supporting her means supporting the whole family.",
    summary: "Community workshops through churches, clinics, and community organizations — educating families about PPD, warning signs, and how to help. [VERIFY: confirm availability]",
    audience: "Mothers, partners, family members",
    status: "concept",
    cta: { label: "Learn More", href: "/programs/fourth-trimester-education", variant: "secondary" },
  },
  {
    id: "navigation",
    title: "Maternal Wellness Navigation & Home Support",
    slug: "maternal-wellness-navigation",
    tagline: "From her door to the care she deserves.",
    summary: "One-on-one support: screenings, warm referrals, appointment scheduling, insurance assistance, home visits, and follow-up. [VERIFY: confirm availability]",
    audience: "Mothers needing practical support accessing care",
    status: "concept",
    cta: null,
  },
];
