# WMWF Website — Master Build Plan

**Status:** Phase 5 in progress
**Updated:** October 8, 2026

---

## Phase Status

| Phase | Description | Status |
|---|---|---|
| **0** | Audit, architecture, scaffolding | ✅ Complete |
| **1** | Design system + responsive homepage | ✅ Complete |
| **2** | Core informational pages (10 routes) | ✅ Complete |
| **3** | CMS and data flows | ✅ Complete — no CMS for V1 |
| **4** | Forms, donation, newsletter integrations | ✅ Complete — forms live; email/donation/newsletter pending provider setup |
| **5** | QA, production readiness, handoff | 🔵 In progress |

## Phase 5 Checklist

| # | Item | Status |
|---|---|---|
| 5.1 | Full responsive audit | ⏳ |
| 5.2 | Screen reader + keyboard audit | ⏳ |
| 5.3 | Color contrast audit (WCAG AA) | ⏳ |
| 5.4 | Lighthouse / Core Web Vitals | ⏳ |
| 5.5 | Lint + typecheck pass | ⏳ |
| 5.6 | Unit/component tests | ⏳ |
| 5.7 | SEO metadata, sitemap, robots, OG, canonicals | ⏳ |
| 5.8 | Favicon, logo, social images | ⏳ |
| 5.9 | Domain/SSL, env vars, analytics | ⏳ |
| 5.10 | LAUNCH_CHECKLIST.md | ⏳ |
| 5.11 | CONTENT_EDITOR_GUIDE.md | ⏳ |
| 5.12 | Update README.md | ⏳ |
| 5.13 | Final launch report | ⏳ |
| 5.14 | **GATE: Zack approval** | ⏳ |

## Quality Gates

V1 complete only if all pass:
- [ ] All 8+ primary pages render without broken routes
- [ ] Desktop/tablet/mobile layouts with no horizontal overflow
- [ ] Header/mobile nav/footer and all CTAs work
- [ ] No unapproved content in production
- [ ] CMS decision documented or static
- [ ] Forms: real validation, spam controls, success/failure states
- [ ] Donation: functional or disabled
- [ ] Accessibility: keyboard, contrast, landmarks, forms, images, reduced motion
- [ ] SEO: metadata, sitemap, robots, OG, favicon
- [ ] Privacy reflects actual integrations
- [ ] Production build, lint, typecheck, tests pass
- [ ] README complete
- [ ] ZACK explicitly approves go-live
