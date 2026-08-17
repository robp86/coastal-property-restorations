// REAL customer testimonials, quoted verbatim. Never edit the wording of a
// review beyond trimming an excerpt — and never invent a star rating. These two
// came in as written testimonials without ratings, so `rating` is omitted and no
// stars are displayed. If they also exist on Google with a star rating, add the
// rating here and link the source.

export interface Review {
  name: string;
  /* Role/affiliation, when the reviewer gave one */
  role?: string;
  city: string;
  /* What the job actually was — more persuasive than a generic label */
  project: string;
  /* Service slugs this review is relevant to, for per-page matching */
  services: string[];
  /* Short pull-quote for review strips */
  excerpt: string;
  /* Full verbatim text, shown on /reviews */
  full: string[];
  /* Only set when the reviewer actually gave a star rating */
  rating?: number;
}

export const reviews: Review[] = [
  {
    name: 'Betsy Clayton',
    city: 'Bokeelia, FL',
    project: 'Bathroom & Shower Renovation',
    services: ['bathroom-remodeling', 'accessible-bathrooms', 'drywall', 'painting'],
    excerpt:
      'An ideal contractor. Beyond ideal, actually. Solution-oriented and customer-service driven with an array of skills to make it all happen.',
    full: [
      'We hired Coastal Property Restorations to replace an oversized, sunken bathtub with a walk-in modernized shower. We are exceptionally happy with the outcome.',
      'We live in a 1960s stilt home on Pine Island; it’s a quirky home that requires individualized solutions for upgrades. Sean presented practical and appealing solutions to remodeling our shower and bathroom. His customized approach included much more than re-doing the shower space. He suggested additional recessed lighting in the shower area, replacement of older bathroom light and fan fixtures, and an upgrade of the bathroom window to impact-resistant glass.',
      'During construction, we discovered some dry rot in the walls from a previously unknown leak. He remedied that as well, elevating our bathroom project to a project that ensures our coastal home is more structurally sound in the years to come.',
      'The whole project illustrated Sean’s creativity and ability to pivot while also underscoring the basics you want in anyone you hire for your home – dependability, customer service and follow through. He showed up when he said he would; he did the job as described; he stayed as long as it took to get the day’s work done; and, he was very pleasant. An ideal contractor. Beyond ideal, actually. Solution-oriented and customer-service driven with an array of skills to make it all happen.',
    ],
  },
  {
    name: 'Stan Nelson',
    role: 'Board President, Pine Manor Improvement Association',
    city: 'Fort Myers, FL',
    project: 'Association Building Renovation',
    services: ['flooring', 'drywall', 'water-storm-damage', 'painting'],
    excerpt:
      'Because of Sean’s work ethic, dependability and genuine care for the mission of our nonprofit, we now have a beautiful renovated association building.',
    full: [
      'The Pine Manor Improvement Association is a small nonprofit in Fort Myers with a limited budget. Through donations and grant funding, we were able to hire Coastal Property Restorations to remove linoleum tile and level the floor of our association building in advance of new vinyl flooring. Sean also removed a built-in kitchen, moved electrical outlets and patched/textured walls where cabinets once hung.',
      'Multiple funding sources complicated this project and delayed the start date by more than a month. Sean was patient with us to fit our schedule. During renovations, we discovered pre-existing water damage that required mold remediation, and the removal and replacement of the first foot of sheetrock. They put it all back together so we could proceed.',
      'The project was a challenge, but because of Sean’s work ethic, dependability and genuine care for the mission of our nonprofit, we now have a beautiful renovated association building.',
    ],
  },
];

/** Reviews relevant to a service first, then the rest. */
export function reviewsFor(service: string, count = 3): Review[] {
  const matched = reviews.filter((r) => r.services.includes(service));
  const rest = reviews.filter((r) => !r.services.includes(service));
  return [...matched, ...rest].slice(0, count);
}
