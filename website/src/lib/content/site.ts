import type { NavLink, FooterSection } from "@/types/content";

export const SITE_NAME = "Women Maternal Wellness Foundation";
export const SITE_SHORT = "WMWF";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Resources", href: "/resources" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export const NAV_DONATE: NavLink = {
  label: "Donate",
  href: "/donate",
  prominent: true,
};

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    heading: "Our Work",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Resources", href: "/resources" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Volunteer", href: "/get-involved" },
      { label: "Partner With Us", href: "/get-involved" },
      { label: "Donate", href: "/donate" },
    ],
  },
  {
    heading: "More",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];
