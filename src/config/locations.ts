export type Location = {
  slug: string;
  name: string;
  state: 'AZ';
  stateSlug: 'az';
  nearbySlugs: string[];
  zipExamples: string[];
  localNotes: string;
};

export const LOCATIONS: Record<string, Location> = {
  tucson: {
    slug: 'tucson',
    name: 'Tucson',
    state: 'AZ',
    stateSlug: 'az',
    nearbySlugs: ['marana', 'oro-valley', 'sahuarita', 'vail', 'catalina'],
    zipExamples: ['85701', '85704', '85710', '85712', '85719', '85730', '85745', '85749'],
    localNotes:
      'Tucson homes mix wood-burning fireplaces, gas inserts, and pellet stoves—often used lightly in winter but neglected in summer heat. Monsoon rains and freeze-thaw cycles in foothill elevations stress chimney crowns and flashing. Many older adobe and ranch-style homes have unlined or damaged flues that need inspection before the first cold snap.',
  },
  marana: {
    slug: 'marana',
    name: 'Marana',
    state: 'AZ',
    stateSlug: 'az',
    nearbySlugs: ['tucson', 'oro-valley', 'catalina', 'sahuarita'],
    zipExamples: ['85653', '85658', '85742', '85743'],
    localNotes:
      'Marana acreage and master-planned communities often have masonry chimneys on custom builds plus metal prefab units in newer tracts. Dust storms deposit fine grit in caps and chase covers. Rural properties may share chimney systems with detached casitas—sweeping schedules should account for extra use during guest season.',
  },
  'oro-valley': {
    slug: 'oro-valley',
    name: 'Oro Valley',
    state: 'AZ',
    stateSlug: 'az',
    nearbySlugs: ['tucson', 'catalina', 'marana'],
    zipExamples: ['85704', '85737', '85755'],
    localNotes:
      'Oro Valley and Catalina foothills homes frequently feature tall chimneys exposed to wind-driven rain and ember risk near desert scrub. Hillside installs can have long flue runs that accumulate creosote unevenly. HOA communities often require documented chimney inspections before fireplace use in winter.',
  },
  sahuarita: {
    slug: 'sahuarita',
    name: 'Sahuarita',
    state: 'AZ',
    stateSlug: 'az',
    nearbySlugs: ['tucson', 'vail', 'marana'],
    zipExamples: ['85629', '85614'],
    localNotes:
      'Sahuarita and Green Valley retirement communities see seasonal fireplace use when winter visitors arrive—chimneys that sat idle for months may have bird nests or cap damage. Gas log conversions are common; they still require flue inspection for venting clearance and CO safety.',
  },
  vail: {
    slug: 'vail',
    name: 'Vail',
    state: 'AZ',
    stateSlug: 'az',
    nearbySlugs: ['tucson', 'sahuarita', 'marana'],
    zipExamples: ['85641', '85747'],
    localNotes:
      'Vail horse properties and rural subdivisions often have wood stoves as primary supplemental heat. Long horizontal stove pipe runs and exterior chimneys need more frequent sweeping than standard fireplaces. Hard water mineral dust is less of a chimney factor, but wind-blown debris clogs uncapped flues quickly.',
  },
  catalina: {
    slug: 'catalina',
    name: 'Catalina',
    state: 'AZ',
    stateSlug: 'az',
    nearbySlugs: ['oro-valley', 'tucson', 'marana'],
    zipExamples: ['85739', '85718'],
    localNotes:
      'Catalina and Oracle Road corridor homes sit at higher elevation with colder winter nights—fireplace use spikes December through February. Masonry chimneys from the 1980s–2000s may have cracked crowns from UV exposure and thermal cycling. Tree-lined lots increase risk of ember intrusion during brush-fire season.',
  },
};

export const LOCATION_OPTIONS = Object.values(LOCATIONS);
