# WMWF Website — Architecture

**Version:** 0.1.0 · **Status:** Draft · **Updated:** October 8, 2026
**Spec source:** WMWF_V1_WEBSITE_MASTER_AGENT_PROMPT.md

---

## 1. Stack

| Layer | Choice | Rationale |
|---|---|---|
| **Framework** | Next.js 16 App Router | Server-rendered React, Vercel-native, typed routes |
| **Language** | TypeScript strict | Catches type errors at compile time |
| **Styling** | Tailwind CSS 4 | Utility-first, composable, no dead CSS |
| **Icons** | Lucide React | Clean SVGs, per spec |
| **Forms** | Zod | Type-safe schemas shared between client and server |
| **CMS** | None for V1 — TypeScript constants + markdown | Too early for Sanity; migration path documented |
| **Donations** | Hosted provider (TBD) | No payment handling in app |
| **Email** | Resend (planned) | Not configured until credentials obtained |
| **Analytics** | Plausible (planned) | Privacy-conscious; not until approved |
| **Deployment** | Vercel | Preview deployments per branch |
| **Package manager** | pnpm 12 | Fast, disk-efficient, strict deps |

---

## 2. Directory Structure

```
src/
  app/                           # Next.js App Router pages
    layout.tsx                   # Root layout
    page.tsx                     # Home
    about/page.tsx
    programs/page.tsx + [slug]/page.tsx
    resources/page.tsx
    events/page.tsx
    get-involved/page.tsx
    donate/page.tsx
    contact/page.tsx
    privacy/page.tsx
    accessibility/page.tsx
    not-found.tsx
    sitemap.ts
    robots.ts
  components/
    layout/                      # SiteHeader, SiteFooter, MobileNav
    sections/                    # Hero, MissionTeaser, ProgramOverview, etc.
    cards/                       # ProgramCard, ResourceCard, EventCard, TeamCard, TestimonialCard
    forms/                       # ContactForm, InterestForm, form primitives
    ui/                          # Button, SectionHeading, Callout, EmptyState, Stat, Container
  lib/
    content/                     # TypeScript content constants for V1
    validation.ts                # Zod schemas
    email.ts                     # Email helper (when configured)
    seo.ts                       # Metadata helpers
  styles/
    design-tokens.ts             # Centralized color, spacing, typography
  types/
    content.ts                   # TypeScript interfaces for all content models

content/                         # Markdown files for rich text
public/
  images/                        # Optimized images
  fonts/                         # Self-hosted fonts (DM Sans, Lora)
docs/
  ARCHITECTURE.md
  BUILD_PLAN.md
  TRADEOFFS.md
  LAUNCH_CHECKLIST.md (Phase 5)
  CONTENT_EDITOR_GUIDE.md (Phase 5)
CONTENT_TODO.md
```

---

## 3. Design Tokens

| Token | Hex | Role | WCAG AA |
|---|---|---|---|
| green-950 | #31594C | Primary brand | ✅ 7.3:1 on cream |
| green-300 | #A8BDAC | Secondary / muted | ❌ Do not use for text |
| cream | #F7F3EB | Page background | ✅ Neutral base |
| terracotta | #C98570 | Accent (CTAs, highlights) | ✅ 5.6:1 on cream |
| gold-400 | #C7A565 | Decorative accent only | ❌ Not for text |
| charcoal | #1F2A25 | Body text | ✅ 14.2:1 on cream |
| white | #FFFFFF | Card backgrounds | — |

Typography: **Lora** (headings), **DM Sans** (body). Self-hosted or Google Fonts.
Spacing: Base 8px. Max content width: 1280px.

---

## 4. Phases

See `docs/BUILD_PLAN.md` for full phase definitions, checkpoints, and quality gates.
