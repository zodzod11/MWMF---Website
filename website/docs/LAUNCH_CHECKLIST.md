# WMWF Website — Launch Checklist

**Before deploying to production, verify each item.**
**Nothing deploys without explicit Zack approval.**

---

## Content

- [ ] Mission and vision wording approved by leadership
- [ ] Founder bio and photo approved for public display
- [ ] Hero headline and subheadline approved
- [ ] Target population language confirmed
- [ ] All `[VERIFY]` tags removed or resolved
- [ ] No fictional stats, testimonials, or impact numbers
- [ ] Board member profiles (if shown) approved
- [ ] Program descriptions reflect actual offerings (not proposed)
- [ ] Resource links point to verified providers
- [ ] Privacy policy accurately reflects real data handling

## Legal & Compliance

- [ ] 501(c)(3) determination letter received
- [ ] Tax-deductibility language approved by legal counsel
- [ ] Donation provider selected and integrated
- [ ] Fundraising registration (if required by MA law) filed
- [ ] Privacy policy reviewed by authorized advisor
- [ ] Accessibility statement completed
- [ ] Terms of service (if needed) reviewed

## Technical

- [ ] Production build (`pnpm build`) passes without errors
- [ ] TypeScript typecheck passes (`pnpm typecheck`)
- [ ] All 11+ routes return 200
- [ ] 404 page renders for unknown routes
- [ ] Form submissions reach staff (email provider configured + tested)
- [ ] Form spam controls verified (honeypot, rate limiting)
- [ ] Donation checkout redirect works end-to-end
- [ ] SSL certificate configured
- [ ] Custom domain configured (`womenmaternalwellness.org`)
- [ ] Environment variables set in production
- [ ] Analytics configured and privacy-reviewed
- [ ] Sitemap submitted to Google Search Console
- [ ] robots.txt serves correctly

## Accessibility

- [ ] Keyboard navigation: all interactive elements reachable
- [ ] Skip link visible on focus
- [ ] Screen reader: headings, landmarks, form labels, alt text
- [ ] Color contrast: all text meets WCAG AA minimum
- [ ] No reliance on hover alone for interactions
- [ ] Reduced motion: no auto-playing animations
- [ ] Forms: labels, validation errors, success states announced

## Performance

- [ ] Lighthouse score: Performance ≥ 80
- [ ] Lighthouse score: Accessibility ≥ 90
- [ ] No horizontal scroll on any page (375px – 1440px)
- [ ] Images optimized (lazy loading, WebP, proper dimensions)
- [ ] Fonts optimized (subsetting or swap strategy)

## SEO

- [ ] Unique title and meta description per page
- [ ] Open Graph tags set (title, description, image)
- [ ] Canonical URLs on all pages
- [ ] sitemap.xml serves correct URLs
- [ ] robots.txt allows search indexing
- [ ] Structured data (schema.org Organization) validates

## Operations

- [ ] Email provider sending address verified
- [ ] Form submissions documented and accessible to staff
- [ ] Data retention and deletion policy documented
- [ ] Backup/recovery plan for CMS (if used) or Git-based content
- [ ] Monitoring and error alerting configured
- [ ] Staff know how to update content

## Pre-Deployment

- [ ] Content editor guide handed to staff
- [ ] Leadership has reviewed and approved live version
- [ ] Zack has explicitly approved go-live
- [ ] DNS TTL lowered for launch window
- [ ] Post-launch monitoring plan in place
- [ ] Rollback plan documented (point DNS back to previous or redeploy previous build)
