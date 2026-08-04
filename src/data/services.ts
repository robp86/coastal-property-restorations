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
    image: '/images/services/roofing.avif',
  },
  {
    slug: 'water-storm-damage',
    title: 'Water & Storm Damage',
    short: 'Hurricane, flood, and leak restoration — rapid response, insurance-ready documentation.',
    emergency: true,
    image: '/images/services/water-storm.avif',
  },
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    short: 'Full kitchen renovations from design through final walkthrough.',
    emergency: false,
    image: '/images/services/kitchen.avif',
  },
  {
    slug: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    short: 'Bathroom renovations built for Florida homes — on time and on budget.',
    emergency: false,
    image: '/images/services/bathroom.avif',
  },
  {
    slug: 'flooring',
    title: 'Flooring',
    short: 'Tile, hardwood, vinyl, and carpet — installed with exacting care.',
    emergency: false,
    image: '/images/services/flooring.avif',
  },
  {
    slug: 'drywall',
    title: 'Drywall',
    short: 'Installation, repair, and finishing — from small patches to complete rebuilds.',
    emergency: false,
    image: '/images/services/drywall.avif',
  },
  {
    slug: 'painting',
    title: 'Painting',
    short: 'Interior and exterior painting with premium products and clean lines.',
    emergency: false,
    image: '/images/services/painting.avif',
  },
];
