// Tier 1 services (spec §1). Drives the homepage grid, nav, and footer links.
// Tier 2 services (fire, mold*, flooring, whole-home, exterior) get added here when
// their pages ship. *Mold requires FL MRSR license confirmation first (spec Q2).

export interface ServiceSummary {
  slug: string;
  title: string;
  short: string; // one-liner for cards/nav
  emergency: boolean;
  image: string; // path under /public/images — see public/images/README.md
}

export const services: ServiceSummary[] = [
  {
    slug: 'roofing',
    title: 'Roofing',
    short: 'Residential roofing, storm damage repair, and insurance claim support.',
    emergency: true,
    image: '/images/services/roofing.jpg',
  },
  {
    slug: 'water-storm-damage',
    title: 'Water & Storm Damage',
    short: 'Hurricane, flood, and leak restoration — rapid response, insurance-ready documentation.',
    emergency: true,
    image: '/images/services/water-storm.jpg',
  },
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    short: 'Full kitchen renovations from design through final walkthrough.',
    emergency: false,
    image: '/images/services/kitchen.jpg',
  },
  {
    slug: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    short: 'Bathroom renovations built for Florida homes — on time and on budget.',
    emergency: false,
    image: '/images/services/bathroom.jpg',
  },
];
