"use client";

import { NAV_LINKS, NAV_DONATE, SITE_NAME } from "@/lib/content/site";

export function MobileNav() {
  const toggle = () => {
    const menu = document.getElementById("mobile-menu-panel");
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    if (menu && toggleBtn) {
      const isOpen = menu.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    }
  };

  const close = () => {
    const menu = document.getElementById("mobile-menu-panel");
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    if (menu && toggleBtn) {
      menu.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      <button
        id="mobile-menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded="false"
        className="lg:hidden flex items-center p-2"
        onClick={toggle}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F2A25" strokeWidth="2">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>

      <div
        id="mobile-menu-panel"
        className="lg:hidden fixed inset-0 z-40 bg-white flex flex-col p-6 gap-4 translate-x-full transition-transform duration-300"
        onClick={close}
      >
        <div className="flex justify-end">
          <button aria-label="Close menu" className="text-charcoal text-2xl p-1" onClick={close}>
            ✕
          </button>
        </div>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block py-3 text-lg text-charcoal hover:text-green-950 no-underline"
          >
            {link.label}
          </a>
        ))}
        <a
          href={NAV_DONATE.href}
          className="block py-3 text-lg bg-terracotta text-white text-center rounded-lg no-underline"
        >
          {NAV_DONATE.label}
        </a>
      </div>
    </>
  );
}
