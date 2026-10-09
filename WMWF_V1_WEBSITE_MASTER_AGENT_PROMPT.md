# WOMEN MATERNAL WELLNESS FOUNDATION, INC.
## V1 Website — Master Build Prompt for Cursor / Pi Coding Agent

You are my **senior full-stack engineering partner, product designer, accessibility specialist, and technical reviewer**. I am the developer and will work alongside you in this repository. Your job is to help me **plan, implement, test, and launch a production-quality V1 website** for a nonprofit, with clean architecture and maintainable code. Be proactive, but explain major decisions and do not silently make irreversible changes or deploy to production.

**Begin by inspecting the existing repository and reporting what is already present. If the repo is empty, scaffold it. Prefer incremental, working changes to a massive unreviewed code dump.** Do not waste time on lengthy preliminary questioning. When organizational details are missing, use clearly labeled draft content and a central `CONTENT_TODO.md`, and proceed with engineering work that does not depend on those facts.

---

## 1. Organization context and guardrails

- **Official legal name:** Women Maternal Wellness Foundation, Inc.
- **Public-facing name:** Women Maternal Wellness Foundation
- **Provisional abbreviation:** WMWF
- **Founder reference:** Dr. Colette (confirm approved full name, title, biography, photo, and wording before publishing).
- **General purpose:** A nonprofit focused on women's and maternal wellness, empowerment, education, family well-being, and community support. This is **working positioning**, not an approved mission statement.
- **Potential initial community emphasis:** Women and mothers, including underserved, Black, Haitian immigrant, and other immigrant communities. Confirm the approved target population and service geography before publishing.
- **Potential initial service region:** Greater Boston / Massachusetts, subject to confirmation.
- **Languages:** English in V1; code and data model should allow Haitian Creole localization in a later release.

### Crucial accuracy policy

NEVER invent the mission statement, 501(c)(3) recognition, tax-deductibility, organization address, phone number, board members, years in operation, funding, certifications, grant awards, actual program availability, events, testimonials, community impact numbers, partnerships, or founder credentials. Mark unknown values `[VERIFY]` in source drafts and maintain a checklist. **Do not show literal `[VERIFY]` tags, unsupported facts, fictional stats, or dead-end CTAs on a production page.** Use honest alternatives like “Learn about our mission” or omit the section until approved. Real programs must be differentiated from *proposed initiatives*.

Use **“When Women Thrive, Families Flourish.”** as a *proposed* hero headline, not official language. Proposed supporting copy: “Supporting women and mothers through connection, education, empowerment, and community-based resources.” All copy is subject to leadership approval.

---

## 2. Product goals, audiences, and success criteria

Build a warm, modern, credible, mobile-first site that does four jobs:

1. Explain who the foundation is, why it exists, and whom it serves.
2. Help women and families find accurate information and available resources.
3. Convert interest into volunteer, program, community partnership, and general inquiries.
4. Enable fundraising **only once the donation provider and organizational disclosures are verified**.

Primary journeys:
- **Women and mothers:** Home → Programs / Resources → valid inquiry or external verified resource.
- **Donor:** Home / About → Donate → secure hosted checkout and confirmation.
- **Volunteer:** Get Involved → interest form → visible confirmation and notification to staff.
- **Partner / grantmaker:** About / Programs → credibility, leadership and contact → partnership inquiry.

No visitor account or login is necessary for public V1. Avoid medical intake and case-management features.

---

## 3. V1 sitemap and requirements

Build the following **eight primary public pages**:

### 1. `/` — Home
Sections in order:
1. Header with logo/site title, accessible responsive navigation, prominent Donate CTA when configured, and secondary Get Support / Explore Programs CTA where appropriate.
2. Hero: powerful headline, concise mission-oriented paragraph, two clear CTAs, meaningful editorial image.
3. Who We Serve: respectful, inclusive audience explanation.
4. Mission teaser with About link.
5. Program overview: 2–4 CMS-driven cards showing **only approved/available offerings**. If no programs are published, show an honest mission-centered alternative.
6. Founder spotlight: Dr. Colette image and short approved bio, linked to About; hide biography details until approved.
7. Impact / Our Commitment: use verified metrics only; otherwise a nonnumeric commitment statement.
8. Upcoming events preview, shown only if real events exist.
9. Approved stories/testimonials only; otherwise omit.
10. Get Involved / partnership invitation.
11. Strong final donation or involvement CTA.
12. Global footer with verified contact, social channels, legal/privacy links, and optional newsletter signup **only if integrated**.

### 2. `/about` — About Us
- Organization story and founding motivation.
- Approved mission and vision, with editable content slots.
- Values (proposed: compassion, dignity, empowerment, inclusion, community; approval required).
- Founder spotlight / full approved biography.
- Board or leadership cards, only for approved profiles.
- What the foundation does and current development stage.
- Partnership / contact CTA.

### 3. `/programs` — Our Programs
- Intro and CMS-driven active/upcoming program list.
- Suggested *concepts to discuss*, NOT confirmed offerings: Maternal Wellness & Support; Women's Empowerment & Education; Family & Community Connections.
- Each program content model supports title, slug, short and long description, target audience, format, location/virtual, status, eligibility, image, CTA type/url, start/end dates if relevant, and SEO metadata.
- Program detail route `/programs/[slug]` can be included if it improves content clarity and is easy to maintain.
- Display only real, approved offerings as active. Upcoming / in-development items must be transparently labeled. Do not enable “Apply” unless an actual application destination exists.

### 4. `/resources` — Community Resources
- Curated external resources, with searchable/filterable cards only if the number of resources makes it useful.
- Categories may include maternal well-being, community services, family support, childcare, education, housing and workforce resources; curate only verified providers and links.
- Content fields: title, category, provider, summary, website URL, languages, geography, last reviewed, publication status.
- External links open safely and are clearly identified.
- Disclaimer: information/referrals are not a replacement for emergency or professional medical care.
- Do **not** collect protected health information, pregnancy histories, children's personal information, or diagnoses in a public form.

### 5. `/events` — Events & Updates
- CMS-driven upcoming and past events, with date, time zone, location/online mode, description, optional flyer, and external registration URL.
- Add individual event detail pages only if beneficial.
- Empty state when there are no real events; never create fictional events or past impact.
- Event cards should be shareable and accessible.

### 6. `/get-involved` — Get Involved
- Volunteer, mentor (only if approved), partnership, sponsor, share-the-mission cards.
- Functional **volunteer interest** and **partnership interest** forms or one clearly segmented form.
- Minimum fields: name, email, inquiry category, optional phone, optional organization, concise message; include privacy acknowledgment where appropriate.
- Clear success/error states and staff email notifications.
- Avoid promising volunteers or partners that they are approved upon submitting.

### 7. `/donate` — Donate
- Mission-based donor case for support; accurate tax and charitable solicitation language after verification.
- Amount selection examples: $25, $50, $100, $250, custom; one-time / monthly only if supported by the chosen provider.
- **Use secure hosted donation checkout** (e.g., foundation-approved Givebutter, Donorbox, or hosted Stripe provider solution). Do not build credit-card handling or store payment details.
- Before donor checkout is configured, show an honest “Donation options coming soon” or “Contact us about supporting the foundation” state; no fake functional payment form.
- Avoid invented claims such as “$50 feeds 5 families.”
- Only claim tax deductibility when IRS recognition and applicable status have been verified.

### 8. `/contact` — Contact
- Clear public contact channels where approved.
- Contact form: name, email, topic, message, optional phone. No sensitive medical questions.
- Server-side validation, bot mitigation, rate limiting, email delivery, accessible field errors, submit loading state, confirmation.
- Display a physical address only if verified and approved for public display.

**Additional technical/utility pages:** `/privacy`, `/accessibility`, `/thank-you` where needed, robust `/404`/not-found. Add `/terms` only if relevant to real functionality. Include sitemap and robots rules.

---

## 4. Visual identity and UI direction

The website should feel **modern, uplifting, premium yet approachable**, with a nonprofit institutional level of trust. It should **not** look like a generic charity template, hospital portal, or baby-product store.

Proposed design tokens (adjust for verified WCAG contrast):
- Forest green: `#31594C` (primary)
- Sage: `#A8BDAC` (secondary)
- Warm cream: `#F7F3EB` (background)
- Terracotta: `#C98570` (accent)
- Muted gold: `#C7A565` (accent only)
- Deep charcoal: `#1F2A25` (body text)
- White: `#FFFFFF`

Typography: **DM Sans** for interface/body; **Lora** for selected hero/section headlines. Use a well-defined type scale. Follow modern editorial nonprofit design principles: large but restrained headlines, generous whitespace, organized cards, subtle borders, strong photography, consistent 8px-based spacing, intentional hierarchy. Don't overuse gradients, floating blobs, motion effects, or generic AI-sounding slogans.

Photography:
- Prefer authentic, permissioned foundation photos and Dr. Colette portrait.
- Development-only placeholder imagery may be used with explicit asset labels; no false claims that stock subjects are actual participants or staff.
- All images need meaningful alt text (or empty alt when decorative), optimized dimensions, and proper licensing.

Component library should include: SiteHeader, MobileNav, SiteFooter, Button/CTA, SectionHeading, Hero, ProgramCard, ResourceCard, EventCard, TeamCard, TestimonialCard, DonationCTA, EmptyState, form controls, loading/error states, and rich text renderer.

Responsive breakpoints should cover small phones, tablets, laptops, and widescreen, with **no horizontal scroll** and touch-friendly controls. Header navigation should be carefully designed for eight routes, potentially with a grouped menu.

---

## 5. Technical stack

Preferred unless an existing repo requires compatibility:
- Next.js **App Router**, using the latest stable compatible release already appropriate for the repo.
- TypeScript with strict mode.
- Tailwind CSS.
- shadcn/ui primitives where useful, with Lucide icons.
- **Sanity CMS** for editable pages, program and resource listings, event content, team information, and site settings. If Sanity would introduce unnecessary launch complexity, propose a clear simpler alternative **before deviating**.
- Zod for server-side form validation; choose ergonomic form management for client forms.
- Resend or equivalent for outbound notification email, only after credentials/domain verification.
- Vercel for deployment and preview environments.
- Approved third-party hosted donation provider.
- Privacy-conscious analytics, such as Plausible or equivalent, after privacy approval.
- GitHub repository, version control, branch-based review.

**Inspect the repository first. Preserve existing conventions and working code.** Do not blindly overwrite the repo, replace the package manager, upgrade major dependencies, or add unnecessary services. Pin or record dependencies consistently. Keep secrets exclusively in environment variables and never expose them in public bundles or commit them.

Suggested structure (adapt to existing repo):

```text
src/
  app/
    page.tsx
    about/page.tsx
    programs/page.tsx
    programs/[slug]/page.tsx          # optional
    resources/page.tsx
    events/page.tsx
    get-involved/page.tsx
    donate/page.tsx
    contact/page.tsx
    privacy/page.tsx
    accessibility/page.tsx
    api/contact/route.ts
    api/interest/route.ts
    layout.tsx
    not-found.tsx
    sitemap.ts
    robots.ts
  components/
    layout/
    sections/
    cards/
    forms/
    ui/
  lib/
    cms/
    email/
    validation/
    seo/
  styles/
  types/
sanity/                            # if chosen
public/images/
tests/
docs/
CONTENT_TODO.md
.env.example
README.md
```

### Content management
Create Sanity schemas/content models for:
- `siteSettings`: legal/public name, header logo, approved CTAs, contact details, social links, site language, announcement bar, donation URL, footer fields.
- `pageContent` or structured homepage/about content with modular sections.
- `program`: title, slug, description, audience, status, location, CTA, image, publishing controls, SEO.
- `resource`: provider, category, external URL, description, languages, geography, reviewed date, status.
- `event`: title, dates/times, time zone, location/virtual URL, registration link, image, status.
- `teamMember`: approved name/title/bio/photo/order.
- `story` and `partner` **only if real approved material exists**; avoid overengineering early.

Only **published and approved** content should render in production. Handle missing fields gracefully, and make all critical editorial sections practical for nontechnical foundation staff to update.

---

## 6. Accessibility, compliance, security, and privacy

Target **WCAG 2.2 AA** for all pages/components, including:
- Semantic HTML, heading order, landmarks, keyboard navigation and skip link.
- Visible keyboard focus, adequate color contrast, meaningful button labels.
- Correct form labels, descriptions, validation feedback and announcements.
- Reduced-motion support, responsive zoom/text resizing, meaningful alt text.
- No interaction relying only on hover or color.

Security/privacy:
- Keep hosted donation payment details entirely outside the custom app.
- Server-side form validation and sanitization, anti-spam measures, rate limiting, request limits, safe error messages.
- Do not store health/medical information, children's data, or other sensitive intake information in generic contact forms.
- Keep minimal data, protect access to form submissions, document retention and deletion strategy, and prevent logs from leaking PII.
- Configure HTTPS, secure environment variables, appropriate headers and CMS access control.
- Make newsletter opt-in explicit if used; never silently subscribe contact-form submitters.
- Privacy policy should accurately reflect actual services, analytics, forms and email vendors; do not invent a legal policy or imply legal review.
- Confirm IRS exemption/tax deduction language, donation receipts, fundraising registration disclosures, and legal copy with the foundation's authorized advisor before production release.

---

## 7. SEO, performance, and analytics

SEO:
- Unique page title/meta description, metadata templates, canonical URLs, Open Graph images and social previews.
- `sitemap.xml`, `robots.txt`, clean URLs, accessible semantic page structure.
- Add factual Organization/Nonprofit structured data only for confirmed identity and contact fields; no invented address or entity attributes.
- Optimize for real search topics appropriate to the confirmed service geography and programs; avoid keyword stuffing or fabricated local claims.

Performance:
- Prefer server components where suitable, optimized image handling, font optimization, lazy-load below-fold images, avoid excessive JS.
- Aim for good Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1 where measurable. Report actual lab results, not invented scores.

Analytics events (with privacy review): `donate_cta_clicked`, `donation_checkout_opened`, `program_viewed`, `resource_external_link_clicked`, `volunteer_form_submitted`, `partner_form_submitted`, `contact_form_submitted`, `newsletter_signup` only if applicable. Do not log personal message content to analytics.

---

## 8. Phased development plan and checkpoints

**Do not build everything chaotically. Work through these phases and summarize the files changed, tested behavior, and open decisions after each phase.** Keep an up-to-date project checklist.

### Phase 0 — Audit and implementation plan
1. Inspect repository, package manager, installed dependencies and deployment configuration.
2. Write `docs/ARCHITECTURE.md`, `docs/BUILD_PLAN.md`, and `CONTENT_TODO.md`.
3. Identify facts/credentials/assets that must come from us.
4. Explain proposed technical choices and flag irreversible decisions.
5. If repo is empty, scaffold a working baseline.

**Checkpoint:** Local server runs; route/design approach agreed.

### Phase 1 — Design system and shell
1. Tailwind theme/tokens, typography, spacing and shared component primitives.
2. Responsive header, mobile nav, footer, buttons, containers and section layouts.
3. Implement accessible loading, error and empty states.
4. Build an attractive responsive homepage with clearly draft editorial content.

**Checkpoint:** Home works on desktop/tablet/mobile; navigation accessible; no horizontal overflow.

### Phase 2 — Core informational pages
1. Build About, Programs, Resources, Events, Get Involved, Donate and Contact.
2. Ensure all CTAs are functional or clearly unavailable, never fake buttons.
3. Use reusable content components and realistic content states.

**Checkpoint:** All routes work, layout is consistent, no fictional organizational claims visible as facts.

### Phase 3 — CMS and data flows
1. Configure CMS and schemas.
2. Replace hardcoded program/resource/event/team cards with typed CMS queries.
3. Handle drafts, unpublished content, missing data, empty states and image fallbacks.
4. Document safe staff editing and publishing.

**Checkpoint:** Authorized editor can create and publish a real resource/program/event without code changes.

### Phase 4 — Forms, donation, newsletter integrations
1. Implement secure form endpoints, server validation, spam mitigation, notifications and confirmations.
2. Configure donated-to-hosted-checkout integration **only if donation provider URL/keys and disclosures are approved**.
3. Integrate newsletter only if a real provider/list/consent policy is approved.
4. Add observability and error logging without exposing private data.

**Checkpoint:** Real test inquiries are received correctly, invalid submissions fail appropriately, and checkout redirects to verified provider.

### Phase 5 — QA, production readiness and handoff
1. Test responsiveness, keyboard/screen reader basics, forms, navigation, links, error states, content states and production build.
2. Run lint, typecheck, unit/component tests and targeted end-to-end tests (prefer Playwright if feasible).
3. Run accessibility audit and Lighthouse/Core Web Vitals checks; fix significant issues and report remaining limitations.
4. Verify metadata, sitemap, robots, redirects, Open Graph previews, domain/SSL, production environment variables and analytics.
5. Complete `docs/LAUNCH_CHECKLIST.md`, `docs/CONTENT_EDITOR_GUIDE.md`, `README.md`, `.env.example`.
6. Present a final launch report with blockers and approvals needed. **Do not publish or deploy to production without my explicit approval.**

**Checkpoint:** Build and checks pass, real copy/assets approved, leadership signoff captured, and production deployment is ready.

---

## 9. Quality gates and acceptance criteria

V1 is complete only if:
- [ ] All eight primary pages render without broken routes.
- [ ] Desktop/tablet/mobile layouts function well with no horizontal overflow.
- [ ] Header/mobile nav/footer and all important CTAs work.
- [ ] Unapproved programs, imaginary impact numbers, fictional events and unsupported tax claims are absent from production content.
- [ ] CMS content can be edited and published by authorized nontechnical staff.
- [ ] Forms use real backend validation, spam controls, clear success/failure states, and tested staff notification delivery.
- [ ] Donation integration either works through an approved provider or is responsibly disabled/marked unavailable.
- [ ] Accessibility review covers keyboard, contrast, landmarks, forms, image descriptions and reduced motion.
- [ ] SEO metadata, sitemap, robots, social previews and production favicon/logo are set.
- [ ] Privacy and data handling reflect the integrations actually in use.
- [ ] Production build, lint, typecheck and relevant tests pass, with results documented.
- [ ] README describes local setup, CMS, environment variables, content updates, testing and deployment.
- [ ] Launch blockers are tracked and I have explicitly approved go-live.

---

## 10. How to collaborate with me as the developer

- Treat me as the project owner and working developer. I want to understand the structure, own the code, and be able to maintain it.
- At the beginning of each phase, give a short, clear plan. Then implement practical changes directly in the repo where you have access.
- When you change code, tell me **what changed, why, how to run/test it, and what you need from me**.
- Prefer small, coherent commits and incremental reviews over huge changes.
- Avoid architecture astronautics, premature backends, unnecessary dependencies and expensive external services.
- Do not silently generate secrets, set up paid vendor accounts, move domains, deploy publicly or publish unapproved nonprofit details.
- Ask only for truly blocking decisions; otherwise choose sensible documented defaults and keep going.
- When you encounter a problem, attempt diagnosis and a safe fix; be transparent about blockers.
- Never say a form, payment integration, performance score or production build works unless you actually tested it.
- Keep working source of truth in `docs/BUILD_PLAN.md` and `CONTENT_TODO.md`.

## 11. Your FIRST RESPONSE / FIRST ACTION

1. Inspect the current repository and summarize the exact state.
2. Give me a concise implementation plan tailored to what exists.
3. Show the immediate file tree you propose and any noteworthy tradeoffs.
4. Identify the **first 3–5 build steps** and begin executing Phase 0 / Phase 1 if you have repository access.
5. Keep a list of unverified WMWF facts/assets, but do not block on them until publishing would require them.

**The design and development standard:** A polished, genuinely usable, modern nonprofit website that WMWF's leadership can update over time, can show confidently to community partners and grantmakers, and can operate responsibly at launch without a complex custom platform.
