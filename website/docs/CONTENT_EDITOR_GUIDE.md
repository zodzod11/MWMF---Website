# WMWF Website — Content Editor Guide

**For nontechnical staff who need to update website content.**

---

## Current Status: Developer-Edited Content (V1)

For V1, all content lives in TypeScript files in `src/lib/content/`. Updating content requires editing a file and redeploying.

**When V2 launches with a CMS (Sanity or similar), this guide will be replaced with CMS-specific instructions.**

---

## How to Request a Content Change

1. Email or message the developer with:
   - **Which page** (Home, About, Programs, etc.)
   - **What to change** (exact current text and proposed replacement)
   - **Priority** (urgent / next update / whenever)

2. The developer will make the change and deploy.

---

## File Reference (for Developers)

| Page | File | Key Variable |
|---|---|---|
| Home — Hero | `src/lib/content/home.ts` | `HERO` |
| Home — Sections | `src/lib/content/home.ts` | `WHO_WE_SERVE`, `MISSION_TEASER`, etc. |
| About — Story | `src/lib/content/about.ts` | `STORY_SECTION` |
| About — Mission/Vision | `src/lib/content/about.ts` | `MISSION_VISION` |
| About — Values | `src/lib/content/about.ts` | `VALUES` |
| About — Founder | `src/lib/content/about.ts` | `FOUNDER_BIO` |
| Programs | `src/lib/content/programs.ts` | `PROGRAMS` |
| Contact | `src/lib/content/contact.ts` | `CONTACT_PAGE` |
| Get Involved | `src/lib/content/get-involved.ts` | `GET_INVOLVED_PAGE` |
| Donate | `src/lib/content/donate.ts` | `DONATE_PAGE` |
| Navigation + Footer | `src/lib/content/site.ts` | `NAV_LINKS`, `FOOTER_SECTIONS` |

### Adding a new program

1. Open `src/lib/content/programs.ts`
2. Add a new object to the `PROGRAMS` array following the existing format
3. Run `pnpm dev` to preview
4. Deploy

### Adding a new team member

1. Add new object to the array in the relevant content file
2. Place photo in `public/images/`
3. Reference it as `/images/filename.jpg`

---

## Deployment

The site is deployed via Vercel. Pushing to the `main` branch triggers a production deployment.

**Do not push to main if content is not ready.** Use feature branches for work-in-progress.
