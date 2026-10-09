# WMWF Website — Technical Tradeoffs

**Purpose:** Document why each choice was made and flag irreversible decisions.

---

## CMS: None for V1

| | |
|---|---|
| **Choice** | TypeScript content constants + markdown files |
| **Alternative** | Sanity headless CMS |
| **Why** | No non-technical staff to edit yet. Content is low volume. TypeScript is type-safe, version-controlled, faster. Adding Sanity later is backwards-compatible — the component layer (types/content.ts) already abstracts content sources. Avoids $15–$99/mo CMS cost for a site with no content pipeline. |
| **When to revisit** | When staff need to edit content OR content exceeds ~20 items |
| **Locked?** | No. Migratable. |

## Framework: Next.js 16 App Router

| | |
|---|---|
| **Choice** | Next.js 16 App Router |
| **Alternative** | Astro (lighter), plain HTML/CSS (simplest) |
| **Why** | Per spec. Server-rendered React, Vercel-native, excellent DX, large ecosystem for forms/SEO/CMS integrations later. |
| **Locked?** | ⚠️ Semi. Switching frameworks means rewriting pages. |

## Typography: DM Sans + Lora

| | |
|---|---|
| **Choice** | DM Sans (body) + Lora (headings) |
| **Alternative** | System fonts (faster, no loading), Google Fonts (free CDN) |
| **Why** | Per spec. These faces define the brand identity. May self-host for performance/privacy. |
| **Locked?** | No. CSS-only change. |

## Package Manager: pnpm

| | |
|---|---|
| **Choice** | pnpm 12 |
| **Alternative** | npm (slower, no strict deps) |
| **Why** | Fast, disk-efficient, strict dependency management. |
| **Locked?** | No. Delete lockfile + one config field. |

## Deployment: Vercel

| | |
|---|---|
| **Choice** | Vercel (planned) |
| **Alternative** | Netlify, GitHub Pages, self-hosted |
| **Why** | Per spec. Native Next.js support. Preview deployments per branch. Free for small nonprofits. |
| **Locked?** | ⚠️ Domain binding is semi-permanent. Platform is swappable. |
