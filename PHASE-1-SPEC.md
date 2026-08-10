# Phase 1 Spec — Coastal Property Restorations

**Goal:** Turn visitors into phone calls and qualified form leads. Nothing ships in Phase 1 unless it serves that goal.

**Definition of success:** Within 60 days of launch, we can answer — with data, not feelings — "how many calls and form leads did the website generate this month, and from which pages?" That requires the tracking stack below to ship *with* the site, not after.

---

## 0. Owner questions — answers required before build starts

These block page planning. One conversation with the owner settles all of them.

| # | Question | Why it matters |
|---|----------|----------------|
| 1 | Rank your services by revenue: roofing, water/storm restoration, kitchen, bath, flooring, other. | The current site leads with roofing; the roadmap dropped it. Launch pages follow revenue, not assumptions. |
| 2 | Do you hold a Florida mold remediation license (MRSR)? | Mold pages are deferred until confirmed — advertising unlicensed mold work is a legal risk. |
| 3 | Do you actually offer: emergency board-up? contents cleaning? fire restoration? 24/7 dispatch (who answers at 2am)? | We only build pages for services someone will answer the phone for. A "24/7 Emergency" page with no one answering destroys trust permanently. |
| 4 | Where do your reviews live today (Google, Facebook, Angi)? How many, what rating? | Review snippets appear on every page. We pull from real sources only. |
| 5 | What real project photos exist? (Phone photos are fine — before/during/after per job is the ideal.) | Real photos outsell stock 10:1 in this industry. This is the #1 content bottleneck. |
| 6 | Do you have a financing partner (e.g., a lender for remodels)? | Financing page ships only if there's a real program behind it. |
| 7 | License numbers to display (CGC/CCC/etc.), insurance certs, any manufacturer certifications (e.g., roofing). | Trust bar content. License numbers in the footer are also a Florida advertising requirement. |
| 8 | Confirm primary service area cities in priority order. | Determines which three city pages launch first. |
| 9 | Who owns the domain registrar, current hosting, and Google Business Profile logins? | Launch is blocked without access. Recover these early — it always takes longer than expected. |

---

## 1. Launch site map

**Tier 1 — ships at launch.** Each page deep and real: actual photos, actual reviews, actual project details.

| Page | URL | Notes |
|------|-----|-------|
| Home | `/` | Dual-path hero (see §2) |
| Roofing | `/roofing/` | Residential + storm damage + insurance claims. Kept from current site — pending owner's revenue ranking (Q1). |
| Water & Storm Damage Restoration | `/water-storm-damage/` | Hurricane, flood, leaks, wind. One strong page now; split into separate water/storm pages in Phase 2 if volume justifies it. |
| Kitchen Remodeling | `/kitchen-remodeling/` | |
| Bathroom Remodeling | `/bathroom-remodeling/` | |
| About | `/about/` | Owner's face, story, licenses, certs |
| Reviews | `/reviews/` | All reviews, filterable later |
| Insurance Help | `/insurance-help/` | Process education only — see legal note §6 |
| Contact / Free Estimate | `/contact/` | Form + phone + map + hours |
| Service Areas hub | `/service-areas/` | Links to city pages |
| Punta Gorda | `/service-areas/punta-gorda/` | Home base — strongest page |
| Port Charlotte | `/service-areas/port-charlotte/` | |
| Fort Myers | `/service-areas/fort-myers/` | City list pending owner confirmation (Q8) |

**Tier 2 — backfilled in the weeks after launch, same templates:** Fire Damage, Mold Remediation (pending license), Flooring, Whole Home Remodeling, Exterior/Siding/Pool Enclosures, Financing (pending Q6), remaining city pages (Cape Coral, Naples, North Fort Myers, Bonita Springs, Estero, Lehigh Acres).

**Explicitly out of scope for Phase 1:** blog/learning center, customer portal, AI assistants, case study pages (Phase 2 — but we *collect* the material now, see §5), team page beyond the owner, careers.

---

## 2. Homepage anatomy (top to bottom)

1. **Intro splash** — the blue logo animation the owner wants to keep. Rules: homepage only; ≤2 seconds; tap/click anywhere skips; shows once per session (sessionStorage); never on service pages, city pages, or ad landing pages; phone number visible the instant it ends.
2. **Hero** — the house shot from the original site as background. Headline + two large buttons:
   - 🔴 **Emergency? Call Now** → `tel:` link (mobile) / prominent number (desktop)
   - 🔵 **Planning a Project? Free Estimate** → contact form
3. **Trust bar** — license #, insured, years in business, Google rating + review count, service area. One row, always real numbers.
4. **Services grid** — Tier 1 services as cards with real photos → service pages.
5. **"Why Coastal" / insurance help teaser** — 3–4 short points, link to Insurance Help.
6. **Reviews strip** — 3 real reviews with names and cities, link to Reviews page.
7. **Recent work** — 3–6 real project photos (gallery grows in Phase 2).
8. **Service area map/list** — cities linked to city pages.
9. **Final CTA band** — phone number huge, form link secondary.

---

## 3. Page templates

### Restoration/roofing service page
Hero (service-specific photo + phone CTA) → **"If this just happened, do this now"** (3–5 safety/mitigation steps — this is the empathy moment and the SEO answer-box target) → How we handle it (numbered process with rough timeline) → Why acting fast matters → Insurance assistance blurb → 2–3 reviews *matched to this service* → Before/after photos → 4–6 FAQs → CTA band.

### Renovation service page
Hero (best finished photo + estimate CTA) → Gallery (6–12 real photos) → Our process (consult → design → build → walkthrough, with typical timeline) → What affects cost (ranges only, no hard quotes) → Financing blurb (if Q6 yes) → Reviews matched to service → FAQs → CTA band.

### City page
**Not copied content.** Each page: city-specific headline → services offered there → any real project/review from that city → localized detail (e.g., hurricane history, permit office) → embedded map → CTA. If we can't write ~300 genuinely local words for a city, it waits for Tier 2.

---

## 4. Global elements (every page)

- **Sticky mobile call bar** — bottom-fixed `tel:` button, always visible.
- Phone number in header (click-to-call on mobile), footer with license #, address, hours, service areas.
- **Forms:** short. Name, phone, city, "what do you need help with" (dropdown: the Tier 1 services + Other), optional message/photo upload. Nothing else — every extra field costs leads. Submissions go to owner's email **and** SMS if the form provider supports it; a lead that sits in email for 6 hours is a lead lost.
- Mobile-first layout; every template designed at 375px first.
- **Performance budget:** LCP < 2.5s on mobile 4G, total page weight < 1.5MB, images in WebP/AVIF, lazy-loaded below the fold. The splash screen does not get to break this.
- `LocalBusiness` + `Service` schema markup; unique title/meta per page.

---

## 5. Content checklist (owner homework — biggest schedule risk)

Collect during the Q&A conversation; the build can't finish without it.

- [ ] 10–20 real project photos minimum across the Tier 1 services (phone quality fine; before/after pairs are gold)
- [ ] Google Business Profile access + review export
- [ ] License numbers, insurance cert, any certifications — scans or photos
- [ ] 2–3 sentences per Tier 1 service in the owner's own words: typical job, typical timeline, what customers worry about
- [ ] For 3 memorable past jobs: city, what happened, what Coastal did, rough timeline, insurance involved? (Feeds review context now, becomes Phase 2 case studies)
- [ ] Owner headshot + one crew/truck photo
- [ ] Hero house shot + logo files from the current site (highest resolution available)
- [ ] Confirmation of hours and who answers after-hours calls

---

## 6. Tracking & measurement (ships with launch — non-negotiable)

| Item | Tool | Purpose |
|------|------|---------|
| Call tracking | CallRail (or similar) with dynamic number insertion | Which pages/sources generate calls; call recordings for lead quality |
| Analytics | GA4 with events for `tel:` clicks and form submits | Conversion by page |
| Search Console | Google Search Console verified at launch | Indexing + query data from day one |
| Google Business Profile | Optimized: categories, services, photos, review link | For local service businesses this outranks the website itself in importance |
| Baseline snapshot | Record current calls/leads per month before launch | Otherwise "did it work?" is unanswerable |
| Monthly report | Calls, form leads, top pages, top queries — one page | The Phase 2 go/no-go evidence |

**Legal line for the Insurance Claim page** (`/insurance-claim`) **and every insurance mention site-wide.** Owner's direction is to position Coastal as the homeowner's resource against a well-resourced insurer, and to stop sending visitors to their insurance company. That's fine — but there is a hard statutory boundary:

*Allowed (standard contractor work, and what the copy does now):* documenting damage in full; writing detailed repair scopes; meeting the adjuster on site and going through what the repairs require; explaining the process; "you shouldn't have to do this alone."

*Prohibited, regardless of how it's phrased:* stating or implying that Coastal negotiates, adjusts, settles, or handles the claim itself. Under Fla. Stat. 489.147 a contractor may not negotiate a claim on an insured's behalf, and advertising that service is unlicensed public adjusting (Fla. Stat. 626.854) — exposure to license revocation and criminal liability, not a stylistic choice. Also avoid predicting coverage outcomes or interpreting a specific policy.

The distinction that keeps both sides happy: Coastal advocates for the **scope of repairs** (its own trade), not the **claim settlement** (the adjuster's). If the owner wants true claim negotiation offered, the lawful route is hiring or partnering with a licensed public adjuster — worth a conversation with his attorney.

---

## 7. Tech recommendation

Static-first site (Astro or Next.js) deployed on Vercel/Netlify/Cloudflare Pages: fastest possible loads (the whole game for emergency traffic), ~zero hosting cost, no plugin/security maintenance, and clean room to grow into the later phases (forms → CRM, AI intake) without replatforming. Forms via a provider with email + webhook output (Formspark/Basin/Netlify Forms) so Phase 4+ can hook in later. 301-redirect every current site URL to its new equivalent at launch.

---

## 8. Launch checklist

- [ ] All Tier 1 pages live with real content (no lorem, no stock-photo-only pages)
- [ ] Splash: homepage-only, ≤2s, skippable, once per session — verified on a real phone
- [ ] Every `tel:` link dials correctly from a real phone
- [ ] Form test submission reaches owner's email/SMS within 1 minute
- [ ] Call tracking live, GA4 events firing, Search Console verified
- [ ] 301 redirects from all old URLs; old sitemap crawled for stragglers
- [ ] Lighthouse mobile: LCP < 2.5s on every template
- [ ] License number in footer; address/hours match Google Business Profile exactly
- [ ] Schema markup validates
- [ ] Owner has walked every page and approved the wording attributed to the company
