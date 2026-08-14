export type ServiceOption = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  quoteFormLabel: string;
  primaryKeyword: string;
  relatedSlugs: string[];
};

export type UrgencyOption = {
  value: string;
  label: string;
};

export const SERVICE_OPTIONS: ServiceOption[] = [
  {
    slug: 'chimney-inspection',
    name: 'Chimney Inspection',
    shortName: 'Inspection',
    description:
      'Level 1, 2, or 3 inspections to assess flue condition, clearances, creosote buildup, and structural integrity before use or after a chimney fire.',
    quoteFormLabel: 'Chimney inspection',
    primaryKeyword: 'chimney inspection',
    relatedSlugs: [
      'chimney-cleaning',
      'chimney-repair',
      'chimney-liner-repair',
      'emergency-chimney-service',
    ],
  },
  {
    slug: 'chimney-cleaning',
    name: 'Chimney Cleaning & Sweeping',
    shortName: 'Sweeping',
    description:
      'Professional chimney sweeping removes creosote, soot, and debris from flue liners and smoke chambers so fireplaces and stoves vent safely.',
    quoteFormLabel: 'Chimney cleaning / sweeping',
    primaryKeyword: 'chimney cleaning',
    relatedSlugs: [
      'chimney-inspection',
      'chimney-repair',
      'dryer-vent-cleaning',
      'emergency-chimney-service',
    ],
  },
  {
    slug: 'chimney-repair',
    name: 'Chimney Repair',
    shortName: 'Repair',
    description:
      'Repair cracked crowns, damaged flue tiles, loose brick, deteriorated mortar joints, and flashing leaks that let water into the chimney structure.',
    quoteFormLabel: 'Chimney repair',
    primaryKeyword: 'chimney repair',
    relatedSlugs: [
      'masonry-repair',
      'chimney-cap-installation',
      'chimney-liner-repair',
      'fireplace-repair',
    ],
  },
  {
    slug: 'chimney-liner-repair',
    name: 'Chimney Liner Repair & Installation',
    shortName: 'Liner',
    description:
      'Repair or replace damaged clay, metal, or cast-in-place liners that contain combustion gases and protect masonry from heat and corrosion.',
    quoteFormLabel: 'Chimney liner repair or installation',
    primaryKeyword: 'chimney liner repair',
    relatedSlugs: [
      'chimney-repair',
      'chimney-inspection',
      'fireplace-repair',
      'masonry-repair',
    ],
  },
  {
    slug: 'fireplace-repair',
    name: 'Fireplace Repair',
    shortName: 'Fireplace',
    description:
      'Restore fireboxes, dampers, gas log sets, and prefab fireplace components so your hearth operates safely and vents properly through the chimney.',
    quoteFormLabel: 'Fireplace repair',
    primaryKeyword: 'fireplace repair',
    relatedSlugs: [
      'chimney-repair',
      'chimney-inspection',
      'chimney-cleaning',
      'chimney-liner-repair',
    ],
  },
  {
    slug: 'dryer-vent-cleaning',
    name: 'Dryer Vent Cleaning',
    shortName: 'Dryer Vent',
    description:
      'Clear lint from dryer ducts and exterior terminations to reduce fire risk and improve dryer efficiency—often bundled with chimney services.',
    quoteFormLabel: 'Dryer vent cleaning',
    primaryKeyword: 'dryer vent cleaning',
    relatedSlugs: ['chimney-cleaning', 'chimney-inspection', 'emergency-chimney-service'],
  },
  {
    slug: 'animal-removal',
    name: 'Chimney Animal Removal',
    shortName: 'Animal Removal',
    description:
      'Humane removal of birds, raccoons, squirrels, and nesting debris from flues, plus cap recommendations to prevent re-entry.',
    quoteFormLabel: 'Animal removal from chimney',
    primaryKeyword: 'chimney animal removal',
    relatedSlugs: [
      'chimney-cap-installation',
      'chimney-cleaning',
      'chimney-inspection',
      'emergency-chimney-service',
    ],
  },
  {
    slug: 'chimney-cap-installation',
    name: 'Chimney Cap Installation',
    shortName: 'Cap Install',
    description:
      'Install or replace chimney caps and spark arrestors to block rain, animals, and debris while maintaining proper draft.',
    quoteFormLabel: 'Chimney cap installation',
    primaryKeyword: 'chimney cap installation',
    relatedSlugs: [
      'chimney-repair',
      'animal-removal',
      'chimney-cleaning',
      'masonry-repair',
    ],
  },
  {
    slug: 'emergency-chimney-service',
    name: 'Emergency Chimney Service',
    shortName: 'Emergency',
    description:
      'Urgent response for chimney fires, blocked flues, carbon monoxide concerns, or storm damage when the fireplace or stove cannot be used safely.',
    quoteFormLabel: 'Emergency chimney service',
    primaryKeyword: 'emergency chimney service',
    relatedSlugs: [
      'chimney-repair',
      'chimney-cleaning',
      'chimney-inspection',
      'fireplace-repair',
    ],
  },
  {
    slug: 'masonry-repair',
    name: 'Chimney Masonry Repair',
    shortName: 'Masonry',
    description:
      'Tuckpointing, brick replacement, crown rebuilding, and structural masonry work to restore chimney stability and weather resistance.',
    quoteFormLabel: 'Chimney masonry repair',
    primaryKeyword: 'chimney masonry repair',
    relatedSlugs: [
      'chimney-repair',
      'chimney-cap-installation',
      'chimney-liner-repair',
      'chimney-inspection',
    ],
  },
];

export const SERVICES: Record<string, ServiceOption> = Object.fromEntries(
  SERVICE_OPTIONS.map((service) => [service.slug, service]),
);

export const URGENCY_OPTIONS: UrgencyOption[] = [
  { value: 'emergency', label: 'Emergency — smoke, odor, or suspected chimney fire' },
  { value: '24h', label: 'Within 24 hours' },
  { value: 'few_days', label: 'Within a few days' },
  { value: '1_2_weeks', label: 'Within 1–2 weeks' },
  { value: 'planning', label: 'Planning / comparing quotes' },
];
