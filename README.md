# Coastal Property Restorations — Website

Phase 1 site (see [PHASE-1-SPEC.md](PHASE-1-SPEC.md)). Built with Astro, static output, no client-side framework — speed is the feature.

## Commands

```
npm run dev       # dev server at localhost:4321
npm run build     # static build to dist/
npm run preview   # preview the production build
```

## Where things live

- `src/data/site.ts` — phone, address, license, cities. **Update business facts here, nowhere else.**
- `src/data/services.ts` — the service list (drives homepage grid, nav, footer, form dropdown)
- `src/data/reviews.ts` — reviews (all placeholders — replace with real Google reviews before launch)
- `src/layouts/Base.astro` — head, schema markup, header/footer/call-bar wrapper
- `src/layouts/RestorationService.astro` / `RenovationService.astro` — the two service-page templates from spec §3
- `src/pages/` — one file per page; city pages generate from `src/data/site.ts`
- `public/images/README.md` — the photo shot-list for the owner

## Before launch

Search the codebase for `TODO` — every one is a real gap, most needing owner input
(license number, reviews, photos, form endpoint, GA4/CallRail snippets). The launch
checklist is PHASE-1-SPEC.md §8.
