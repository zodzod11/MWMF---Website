import type { Program } from "@/types/content";

export const PROGRAMS: Program[] = [
  {
    id: "awareness-education",
    title: "Postpartum Awareness & Education",
    slug: "postpartum-awareness-education",
    tagline: "Knowledge is the first step to care.",
    summary: "PPD awareness workshops, educational resources, and community outreach — in English and Haitian Creole — delivered through churches, clinics, and community organizations.",
    audience: "Mothers, families, and community members in Greater Boston",
    status: "upcoming",
    cta: { label: "Learn More", href: "/programs/postpartum-awareness-education", variant: "secondary" },
  },
  {
    id: "connection-line",
    title: "Maternal Wellness Connection Line",
    slug: "maternal-wellness-connection-line",
    tagline: "A listening ear when you need it most.",
    summary: "A confidential phone and text line staffed by caring responders. Postpartum check-ins, warm referrals, and help connecting to care.",
    audience: "Postpartum mothers in Greater Boston",
    status: "upcoming",
    cta: { label: "Learn More", href: "/programs/maternal-wellness-connection-line", variant: "secondary" },
  },
  {
    id: "support-circles",
    title: "Maternal Wellness & Support Circles",
    slug: "maternal-wellness-support-circles",
    tagline: "You don't have to do this alone.",
    summary: "Confidential peer support groups in English and Haitian Creole, facilitated by trained peer leaders with professional guidance.",
    audience: "Mothers and birthing people in Greater Boston",
    status: "upcoming",
    cta: { label: "Learn More", href: "/programs/maternal-wellness-support-circles", variant: "secondary" },
  },
];
