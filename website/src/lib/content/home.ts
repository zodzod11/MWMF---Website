import type { HeroContent, ContentSection } from "@/types/content";

export const HERO: HeroContent = {
  headline: "When Women Thrive, Families Flourish.",
  subheadline:
    "Supporting women and mothers through connection, education, empowerment, and community-based resources.",
  primaryCta: { label: "Explore Our Programs", href: "/programs", variant: "primary" },
  secondaryCta: { label: "About Us", href: "/about", variant: "ghost" },
  imagePath: null,
};

export const WHO_WE_SERVE: ContentSection = {
  id: "who-we-serve",
  heading: "Who We Serve",
  subheading: "Women and mothers, with an emphasis on underserved communities",
  body: "We stand with women and mothers — including Black, Haitian, immigrant, and other underserved communities — providing culturally responsive support, education, and resources.",
};

export const MISSION_TEASER: ContentSection = {
  id: "mission",
  heading: "Our Mission",
  body: "Improving postpartum mental and physical health and advancing birth equity for Black, Haitian, immigrant, and other underserved mothers and families in Greater Boston.",
  cta: { label: "Read Our Full Story", href: "/about", variant: "secondary" },
};

export const PROGRAMS_OVERVIEW_HEADING = "Our Programs";
export const PROGRAMS_OVERVIEW_SUB =
  "We offer three pilot programs built on our CONNECT → NAVIGATE → RECONNECT framework: community education, a maternal wellness connection line, and peer support circles.";

export const FOUNDER_SPOTLIGHT: ContentSection = {
  id: "founder",
  heading: "Meet Our Founder",
  subheading: "Dr. Colette Dieujuste — RN, PhD",
  body: "Dr. Colette Dieujuste is a Haitian American nurse and educator whose research on the lived experiences of Haitian immigrant women with postpartum depression revealed a critical gap in culturally responsive care. Her work led to the founding of Women Maternal Wellness Foundation.",
  cta: { label: "Learn More About Dr. Colette", href: "/about", variant: "secondary" },
};

export const IMPACT: ContentSection = {
  id: "impact",
  heading: "Our Commitment",
  body: "We are building a future where every mother — regardless of race, culture, language, income, or immigration status — feels heard, respected, connected, and supported after childbirth. This is our commitment, and we are just getting started.",
};

export const GET_INVOLVED: ContentSection = {
  id: "get-involved",
  heading: "Get Involved",
  subheading: "There are many ways to support our work",
  body: "Whether you want to volunteer your time, partner your organization with ours, or make a contribution, your support helps us reach more mothers and families in Greater Boston.",
  cta: { label: "Get Involved Today", href: "/get-involved", variant: "primary" },
};

export const BOARD_SECTION = {
  heading: "Board of Directors",
  subheading: "Our board brings together expertise in nursing, maternal health, finance, and community partnerships to guide our mission.",
};
