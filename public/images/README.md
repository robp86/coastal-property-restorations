# Image inventory — what goes here

Every `.img-placeholder` in the site maps to a real photo needed from the owner
(PHASE-1-SPEC.md §5). Convert everything to WebP/AVIF and keep the performance
budget: total page weight < 1.5MB.

## Required at launch

| File | Used on | What it is |
|------|---------|-----------|
| `logo.avif` ✅ | Header, splash screen | Real logo (light-on-transparent, from original site) |
| `logo-footer.png` ✅ | Footer | White logo variant (from original site) |
| `hero-house.avif` ✅ | Homepage hero | The house shot from the original site |
| `services/roofing.jpg` | Homepage grid, roofing hero | Real roofing job photo |
| `services/water-storm.jpg` | Homepage grid, restoration hero | Real storm/water job photo |
| `services/kitchen.jpg` | Homepage grid, kitchen hero | Best finished kitchen |
| `services/bathroom.jpg` | Homepage grid, bath hero | Best finished bathroom |
| `owner.jpg` | About page | Owner headshot |
| `crew.jpg` | About page | Crew/truck photo |

## Per service page (launch)

- 3 before/after pairs per restoration page (roofing, water-storm-damage)
- 6–12 finished photos per renovation page (kitchen, bathroom)

## Per city page

- 1 real project photo from that city with a short caption

Phone photos are fine. Real beats polished — no stock photography (spec: a thin
page with stock photos hurts trust more than no page).
