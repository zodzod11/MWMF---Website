# Digital Presence Setup Guide

**For:** [Organization Name]
**Prepared:** October 8, 2026
**Status:** Reference — implement after 501(c)(3) determination

---

## Overview

A professional digital presence for a new nonprofit means:

| Component | Purpose |
|---|---|
| **Domain** | Your web address and email identity — `@[orgname].org` |
| **Website** | Public face — mission, programs, team, contact, donate |
| **Email** | Professional communication — `colette@[orgname].org`, etc. |
| **Google Drive** | Shared cloud storage for board, grants, financials, programs |
| **Google Workspace** | The platform that ties email + drive + docs together |

---

# Phase 1: Domain

Get this first. Everything else depends on it.

## Recommendations

| Registrar | Annual Cost | Why |
|---|---|---|
| **Namecheap** | ~$10–$13/yr | Cheapest `.org` domains. Free WhoisGuard (privacy). |
| **Google Domains** | ~$12/yr | Simple. Integrates with Google Workspace. (Note: being sold to Squarespace — check current status.) |
| **Squarespace Domains** | ~$12/yr | If Google Domains migration is complete by the time you buy. |

## What to buy

- `[orgname].org` — your primary domain (required for .org TLD)
- `[orgname].com` — optional, forward to `.org`
- `get[orgname].org` — optional, forward to main site (common for donation pages)

## Setup steps

| Step | Detail |
|---|---|
| 1 | Search availability at namecheap.com or domains.google |
| 2 | Purchase for 2 years (locks in price, looks serious to grantors) |
| 3 | Enable privacy protection (WhoisGuard) — hides your personal address from public WHOIS |
| 4 | Point nameservers to wherever you build the website |

---

# Phase 2: Google Workspace for Nonprofits

This is the backbone of your digital operations. **It's free** for nonprofits.

## What you get

| Feature | Details |
|---|---|
| **Email** | Up to 50 free accounts — `colette@[org].org`, `treasurer@[org].org`, `info@[org].org` |
| **Google Drive** | 100 GB shared storage (free). Unlimited with 5+ users. |
| **Google Docs / Sheets / Slides** | Full office suite, cloud-native, collaborative |
| **Google Calendar** | Shared calendars, board meeting scheduling, program events |
| **Google Meet** | Video calls — board meetings, partner meetings |
| **Google Groups** | Email lists — board@, programs@, etc. |
| **Admin Console** | Manage users, security, devices from one dashboard |

## Cost comparison

| Platform | Retail | Nonprofit Price |
|---|---|---|
| Google Workspace Business Starter | $6/user/mo | **Free** |
| Microsoft 365 Business | $12/user/mo | Free via TechSoup |
| Proton Mail (for privacy-focused) | $5/user/mo | No nonprofit discount |

**Oracle says:** Google Workspace. Free. Reliable. Everyone knows how to use it.

## Application process

| Step | Detail |
|---|---|
| 1 | Go to **google.com/nonprofits** |
| 2 | Click "Get started" |
| 3 | Sign in with a personal Google account (you need one to manage the org account) |
| 4 | Upload your 501(c)(3) determination letter |
| 5 | Wait 5–14 days for verification |
| 6 | Once approved, set up Google Workspace with your domain |
| 7 | Create user accounts (colette@, treasurer@, info@, board@) |

**Alternative if you need email faster:** You can set up email forwarding through your domain registrar before Google Workspace is approved. `info@[orgname].org` → forwards to your personal email. Zero setup.

---

# Phase 3: Website

## Options ranked for a startup nonprofit

### Option A: Carrd (Simplest)

| Factor | Detail |
|---|---|
| **Cost** | $19/year (Pro) |
| **Time to build** | 1 evening |
| **What you get** | One-page site. Mission, programs, contact, donate button. |
| **Hosting included** | Yes |
| **Custom domain** | Yes |
| **Best for** | An org that needs *something* online today and will upgrade later |
| **Limitation** | One page. No blog. No complex structure. |

### Option B: Wix (Best middle ground)

| Factor | Detail |
|---|---|
| **Cost** | ~$16/mo (Business Basic — nonprofit discount available) |
| **Time to build** | 1 weekend |
| **What you get** | Multi-page site. Blog. Donation integration. Calendar. |
| **Hosting included** | Yes |
| **Custom domain** | Yes |
| **Best for** | A growing org that wants a real site without hiring a developer |
| **Limitation** | You're locked into Wix's platform. Hard to migrate later. |

### Option C: Squarespace (Cleanest design)

| Factor | Detail |
|---|---|
| **Cost** | ~$16/mo (Business) |
| **Time to build** | 1 weekend |
| **What you get** | Beautiful templates. Donation buttons. Blog. Email campaigns. |
| **Best for** | An org where visual polish matters (it does — this is a maternal health org) |
| **Limitation** | Slightly harder to customize than Wix. |

### Option D: WordPress.org (Most powerful, most work)

| Factor | Detail |
|---|---|
| **Cost** | ~$8–$15/mo hosting + domain + possible theme cost |
| **Time to build** | 1 week — 1 month |
| **What you get** | Full control. Endless plugins. Donation integration. Blog. Events. |
| **Best for** | An org that will have staff and needs a CMS. Overkill for Year 1. |
| **Limitation** | You manage updates, security, backups yourself. |

## My recommendation

**Start with Carrd ($19/year).** Here's why:

| Argument | Detail |
|---|---|
| You don't know what your site needs yet | Don't pay $200/year for features you won't use for 6 months |
| Carrd is fast | You can have a site live in one evening |
| Carrd looks professional | The templates are clean and modern |
| You can upgrade later | When you outgrow Carrd, migrate to Squarespace or WordPress. A $19 bet is fine to lose. |

**Upgrade path:**

| Milestone | Switch to |
|---|---|
| First grant received | → **Carrd stays** |
| First program launches | → **Carrd stays** |
| You need a blog (stories, impact) | → **Squarespace** (~$16/mo) |
| You have staff who need to edit the site | → **WordPress** (~$10/mo hosting) |
| You're doing online fundraising at scale | → **WordPress + GiveWP** or similar |

## What your site needs (pages)

| Page | Content |
|---|---|
| **Home** | Mission statement + tagline + "Our Approach: Connect → Navigate → Reconnect" |
| **About** | Colette's story, the research (Li Fem Anpil), the problem, the vision |
| **Programs** | The three programs: Support Circles, Family Education, Navigation |
| **Get Involved** | Volunteer, partner, donate |
| **Contact** | Email, phone (when you have one), social media |

---

# Phase 4: Google Drive Structure

This is your org's filing cabinet. Set it up once and never lose a document.

## Top-level folders

```
📁 [Organization Name] — Google Drive
├── 📁 Board
│   ├── 📁 Meeting Minutes
│   ├── 📁 Board Resolutions
│   ├── 📁 Board Roster & Contact Info
│   ├── 📁 Bylaws
│   └── 📁 Board Packets (agenda + reports for each meeting)
│
├── 📁 Financials
│   ├── 📁 Bank Statements
│   ├── 📁 Credit Card Statements
│   ├── 📁 QuickBooks Exports
│   ├── 📁 Budget (annual budget files)
│   ├── 📁 Grant Tracker (spreadsheet)
│   └── 📁 Tax Filings
│       ├── 📁 990-N (e-Postcard)
│       └── 📁 MA Annual Reports
│
├── 📁 Grants
│   ├── 📁 Cummings Foundation
│   │   ├── 📁 LOI
│   │   ├── 📁 Full Application
│   │   ├── 📁 Award Documents
│   │   └── 📁 Reports
│   ├── 📁 [Other Grantor]
│   └── 📁 Grant Calendar (all deadlines)
│
├── 📁 Programs
│   ├── 📁 Maternal Wellness & Support Circles
│   ├── 📁 Fourth Trimester Education
│   └── 📁 Maternal Wellness Navigation
│
├── 📁 Legal & Compliance
│   ├── 📁 Articles of Organization
│   ├── 📁 EIN Letter
│   ├── 📁 501(c)(3) Determination Letter
│   ├── 📁 MA PC Filing
│   ├── 📁 Insurance Policies
│   └── 📁 Conflict of Interest Policy
│
├── 📁 Marketing & Communications
│   ├── 📁 Brand Guidelines (colors, logo, tone)
│   ├── 📁 Photos & Media
│   ├── 📁 Flyers & Materials (English)
│   └── 📁 Flyers & Materials (Haitian Creole)
│
├── 📁 Operations
│   ├── 📁 Contracts & MOUs
│   ├── 📁 Vendors
│   └── 📁 Supplies & Inventory
│
└── 📁 HR (when you have staff)
    ├── 📁 Colette — Compensation & Contract
    ├── 📁 Job Descriptions
    └── 📁 Employee Handbook
```

## Permissions

| Folder | Who Has Access |
|---|---|
| Board / Financials / Legal | Treasurer + President + Board members |
| Grants / Programs | President + Treasurer + any program staff |
| Operations / HR | President + Treasurer only |
| Marketing | Anyone creating materials |

---

# Phase 5: Email Accounts

## What to set up

| Email | Who Uses It | Purpose |
|---|---|---|
| `colette@[org].org` | Colette | Executive Director — external communications |
| `treasurer@[org].org` | Zack | Financial correspondence, grantors, bank |
| `info@[org].org` | Shared | General inquiries — forward to Colette |
| `board@[org].org` | Board | Board communications, meeting invitations |
| `programs@[org].org` | Colette/Staff | Program partners, participants |
| `donate@[org].org` | Shared | Donation receipts, donor inquiries |

**Don't create emails you won't use.** Start with `colette@`, `treasurer@`, and `info@`. Expand as needed.

---

# Cost Summary — First Year

| Item | Monthly | Annual |
|---|---|---|
| Domain (`[org].org`) | — | ~$12 |
| Google Workspace for Nonprofits | **$0** | **$0** |
| Website (Carrd Pro) | — | ~$19 |
| Total | **$0/mo** | **~$31/year** |

If you upgrade to Squarespace later:

| Item | Monthly | Annual |
|---|---|---|
| Domain | — | ~$12 |
| Squarespace Business | ~$16/mo | ~$192 |
| Google Workspace | **$0** | **$0** |
| Total | ~$16/mo | ~$204/year |

---

# Implementation Timeline

| Week | Task |
|---|---|
| **Week 1** | Buy domain → set up email forwarding |
| | Apply for Google Workspace for Nonprofits |
| | Build Carrd website (1 evening) |
| | Set up Google Drive folder structure |
| **Week 2** | Google Workspace approved (or still waiting) |
| | Send `colette@` and `treasurer@` invites |
| | Share Drive with board members |
| | Launch website → announce on social media? |
| **Week 3+** | Gather feedback on website |
| | Start collecting photos and content for future upgrade |
| | Set up Google Calendar for board meetings, deadlines |

---

*Last updated: October 8, 2026*
