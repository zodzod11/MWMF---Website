import { NAV_LINKS, NAV_DONATE, SITE_NAME } from "@/lib/content/site";
import { MobileNav } from "@/components/layout/MobileNav";

export function SiteHeader() {
  return (
    <header
      role="banner"
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16"
      >
        <a
          href="/"
          className="font-heading text-xl font-medium text-green-950 no-underline"
        >
          {SITE_NAME}
        </a>

        {/* Desktop nav */}
        <ul
          role="list"
          className="hidden lg:flex items-center gap-1 list-none"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-charcoal hover:text-green-950 transition-colors no-underline rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={NAV_DONATE.href}
              className="inline-flex items-center px-4 py-2 bg-terracotta text-white rounded-lg font-medium hover:bg-terracotta-light transition-colors no-underline"
            >
              {NAV_DONATE.label}
            </a>
          </li>
        </ul>

        {/* Mobile nav (client component) */}
        <MobileNav />
      </nav>
    </header>
  );
}
