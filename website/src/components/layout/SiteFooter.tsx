import { FOOTER_SECTIONS, SITE_NAME } from "@/lib/content/site";

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="bg-green-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.heading}>
              <h3 className="font-heading text-lg font-medium mb-3 text-green-300">
                {section.heading}
              </h3>
              <ul role="list" className="space-y-2 list-none">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="opacity-80 text-white hover:text-white transition-colors no-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-green-800 mt-8 pt-6 text-center text-sm opacity-60 text-white">
          <p>© {new Date().getFullYear()} {SITE_NAME}, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
