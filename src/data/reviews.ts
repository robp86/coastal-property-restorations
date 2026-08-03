// PLACEHOLDER REVIEWS — every entry below must be replaced with a real, verbatim
// customer review from Google/Facebook before launch (spec Q4). Do not launch with
// invented reviews: it is a trust killer and an FTC problem.

export interface Review {
  quote: string;
  name: string;
  city: string;
  service: string; // matches a service slug so pages can show relevant reviews
  source: string; // e.g. 'Google'
}

export const reviews: Review[] = [
  {
    quote: 'TODO: replace with real Google review about roof repair / insurance claim.',
    name: 'Real Customer',
    city: 'Punta Gorda',
    service: 'roofing',
    source: 'Google',
  },
  {
    quote: 'TODO: replace with real Google review about storm or water damage restoration.',
    name: 'Real Customer',
    city: 'Port Charlotte',
    service: 'water-storm-damage',
    source: 'Google',
  },
  {
    quote: 'TODO: replace with real Google review about a kitchen remodel.',
    name: 'Real Customer',
    city: 'Fort Myers',
    service: 'kitchen-remodeling',
    source: 'Google',
  },
  {
    quote: 'TODO: replace with real Google review about a bathroom remodel.',
    name: 'Real Customer',
    city: 'Punta Gorda',
    service: 'bathroom-remodeling',
    source: 'Google',
  },
];

export function reviewsFor(service: string, count = 3): Review[] {
  const matched = reviews.filter((r) => r.service === service);
  const rest = reviews.filter((r) => r.service !== service);
  return [...matched, ...rest].slice(0, count);
}
