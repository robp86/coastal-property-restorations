// Central business facts. Every page pulls from here — update once, changes everywhere.
// TODO markers = answers needed from the owner (see PHASE-1-SPEC.md §0).

export const site = {
  name: 'Coastal Property Restorations',
  url: 'https://www.coastalpropertyrestorations.com',
  phone: '239-272-7064',
  phoneHref: 'tel:+12392727064',
  email: 'info@coastalpropertyrestorations.com', // TODO: confirm with owner
  address: {
    street: '26580 Valparaiso Dr.',
    city: 'Punta Gorda',
    state: 'FL',
    zip: '33983',
  },
  hours: '24/7 Emergency Response', // TODO: confirm who answers after-hours (spec Q3)
  license: 'FL License #TODO', // TODO: real license number — required in footer
  yearsInBusiness: 'TODO', // TODO
  googleRating: '5.0', // TODO: pull real rating + count from Google Business Profile
  googleReviewCount: 'TODO',
  googleReviewUrl: '#', // TODO: direct "write a review" link from GBP
  description:
    'Licensed and insured roofing, storm damage restoration, and home remodeling serving Punta Gorda, Port Charlotte, Fort Myers, and Southwest Florida. 24/7 emergency response.',
};

export interface City {
  slug: string;
  name: string;
  county: string;
  // Each city page needs ~300 genuinely local words (spec §3) — placeholder until written.
  intro: string;
}

// Priority order per spec §1 — pending owner confirmation (spec Q8).
export const cities: City[] = [
  {
    slug: 'punta-gorda',
    name: 'Punta Gorda',
    county: 'Charlotte County',
    intro:
      'TODO: Punta Gorda is home base — this should be the strongest city page. Mention Hurricane Ian recovery work, Charlotte County permitting familiarity, and real local projects.',
  },
  {
    slug: 'port-charlotte',
    name: 'Port Charlotte',
    county: 'Charlotte County',
    intro:
      'TODO: ~300 local words — storm history, neighborhoods served, real Port Charlotte projects and reviews.',
  },
  {
    slug: 'fort-myers',
    name: 'Fort Myers',
    county: 'Lee County',
    intro:
      'TODO: ~300 local words — Lee County permits, hurricane recovery, real Fort Myers projects and reviews.',
  },
];

// Tier 2 backfill (spec §1): cape-coral, naples, north-fort-myers, bonita-springs, estero, lehigh-acres
