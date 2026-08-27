// Central business facts. Every page pulls from here — update once, changes everywhere.
// TODO markers = answers needed from the owner (see PHASE-1-SPEC.md §0).

export const site = {
  name: 'Coastal Property Restorations',
  // Canonical domain. Drives canonical tags, og:url, sitemap, and schema @id —
  // must match the primary domain set in Netlify exactly (bare, not www).
  url: 'https://cpr-restorations.com',
  phone: '239-272-7064',
  phoneHref: 'tel:+12392727064',
  // Owner-confirmed inbox. Note it differs from the domain spelling
  // ("properties"/"restorations"); that is intentional, not a typo.
  email: 'coastalpropertiesrestorationsllc@gmail.com',
  address: {
    street: '26580 Valparaiso Dr.',
    city: 'Punta Gorda',
    state: 'FL',
    zip: '33983',
  },
  hours: '24/7 Emergency Response', // TODO: confirm who answers after-hours (spec Q3)
  // LAUNCH BLOCKER: Florida requires the license number in advertising. Until it
  // is filled in, the footer and About page omit the number rather than print a
  // placeholder — set this and both start showing it automatically.
  license: '',
  googleReviewUrl: '', // TODO: direct "write a review" link once GBP access is sorted
  description:
    'Licensed and insured roofing, storm damage restoration, and home remodeling serving Punta Gorda, Port Charlotte, Fort Myers, and Southwest Florida. 24/7 emergency response.',
};

export interface City {
  slug: string;
  name: string;
  county: string;
  // Each city page needs ~300 genuinely local words (spec §3).
  intro: string;
  // A real job from this city. Nothing renders when there isn't one yet —
  // a stock photo on a city page defeats the whole point of a city page.
  photo?: { src: string; alt: string; caption: string };
}

// Priority order per spec §1 — pending owner confirmation (spec Q8).
// Copy below is grounded in public fact (storm history, county, housing stock) and
// in real completed projects. Do not add specifics that cannot be backed up.
export const cities: City[] = [
  {
    slug: 'punta-gorda',
    name: 'Punta Gorda',
    county: 'Charlotte County',
    intro:
      'Punta Gorda is home. Our shop is on Valparaiso Drive, which means when something goes wrong at your house we are minutes away, not dispatched from another county. This town has been through it twice in living memory — Charley came straight up the harbor in 2004, and Ian did it again in 2022 — and a lot of what we do here still traces back to those storms and the water that came with them. We know how the older waterfront and canal-side homes around here are built, where they tend to let water in, and what Charlotte County expects when it comes time to pull a permit and get inspected. Roofing, storm and water damage, and full remodels — kitchens, baths, flooring, drywall, and paint. If you are in Punta Gorda and you are not sure whether what you are looking at is urgent, call us and we will tell you straight.',
  },
  {
    slug: 'port-charlotte',
    name: 'Port Charlotte',
    county: 'Charlotte County',
    intro:
      'Port Charlotte is a short drive from our shop, and much of the housing here dates to the 1960s through the 1980s — solid homes, but ones where original roofs, windows, and plumbing are now well past their intended service life. That combination is why so much of our Port Charlotte work starts as one thing and turns into another: a roof leak that has quietly been wetting decking for a season, or a bathroom remodel that uncovers rot behind a wall. We would rather find it and fix it properly than tile over it. We handle roofing and storm damage, water damage dry-out and reconstruction, and the full remodel side, and we pull permits through Charlotte County the same as we do at home in Punta Gorda.',
  },
  {
    slug: 'fort-myers',
    name: 'Fort Myers',
    county: 'Lee County',
    photo: {
      src: '/images/projects/pinemanor-finished-hall.avif',
      alt: 'The finished main hall of the Pine Manor Improvement Association building in Fort Myers, with new vinyl plank flooring',
      caption:
        'Pine Manor Improvement Association, Fort Myers — the finished main hall. We found pre-existing water damage partway through, handled the remediation and sheetrock replacement, then laid the new flooring.',
    },
    intro:
      'We work throughout Fort Myers and Lee County, on homes and on commercial and community buildings. One project we are proud of: the Pine Manor Improvement Association, a small Fort Myers nonprofit working off donations and grant funding. We pulled old linoleum and leveled the floor for new vinyl, removed a built-in kitchen, relocated electrical, and patched and textured the walls — and when we opened things up and found pre-existing water damage, we handled the remediation and replaced the bottom of the sheetrock so they could keep going. Their board president wrote us a review about it, and you can read the whole thing on our reviews page. Ian hit Lee County hard in 2022 and a lot of homes here are still working through the aftermath. Whether it is storm and water damage or a kitchen you have been putting off, we work the whole job from start to finish.',
  },
  {
    slug: 'pine-island',
    name: 'Pine Island',
    county: 'Lee County',
    intro:
      'Pine Island — Bokeelia, St. James City, Matlacha — is its own kind of building environment. The homes out here are older, often on stilts, frequently one-of-a-kind, and almost nothing about them is standard. A stock solution that works on a slab home in town simply will not fit. We remodeled a bathroom in a 1960s stilt home in Bokeelia: swapped an oversized sunken tub for a walk-in shower, added recessed lighting, replaced dated fixtures, and upgraded the window to impact-resistant glass. Partway through we found dry rot from a leak nobody knew about, so we fixed that too, which left the house sounder than when we started. That is generally how it goes out here, and we plan for it. Island homes take longer to get to and more thought to get right, and we are glad to make the drive.',
  },
];

// Tier 2 backfill (spec §1): cape-coral, naples, north-fort-myers, bonita-springs, estero, lehigh-acres
