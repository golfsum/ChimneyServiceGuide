import { SERVICES } from '@/config/services';

export type SeoPageContent = {
  slug: string;
  pageType: 'service' | 'guide' | 'city' | 'city-service' | 'home';
  service?: string;
  city?: string;
  state?: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { id: string; heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  internalLinks: { href: string; label: string }[];
  indexStatus: 'draft' | 'noindex' | 'indexable';
  published: boolean;
};

type PageSection = { id: string; heading: string; body: string };
type PageFaq = { question: string; answer: string };

function servicePage(
  slug: string,
  opts: {
    primaryKeyword: string;
    secondaryKeywords: string[];
    title: string;
    metaDescription: string;
    h1: string;
    intro: string;
    sections: PageSection[];
    faqs: PageFaq[];
    internalLinks: { href: string; label: string }[];
    indexStatus?: SeoPageContent['indexStatus'];
    published?: boolean;
  },
): SeoPageContent {
  return {
    slug,
    pageType: 'service',
    service: slug,
    primaryKeyword: opts.primaryKeyword,
    secondaryKeywords: opts.secondaryKeywords,
    title: opts.title,
    metaDescription: opts.metaDescription,
    h1: opts.h1,
    intro: opts.intro,
    sections: opts.sections,
    faqs: opts.faqs,
    internalLinks: opts.internalLinks,
    indexStatus: opts.indexStatus ?? 'indexable',
    published: opts.published ?? true,
  };
}

function cityServicePage(
  serviceSlug: string,
  opts: {
    primaryKeyword: string;
    secondaryKeywords: string[];
    title: string;
    metaDescription: string;
    h1: string;
    intro: string;
    sections: PageSection[];
    faqs: PageFaq[];
    internalLinks: { href: string; label: string }[];
  },
): SeoPageContent {
  return {
    slug: `az/tucson/${serviceSlug}`,
    pageType: 'city-service',
    service: serviceSlug,
    city: 'tucson',
    state: 'az',
    primaryKeyword: opts.primaryKeyword,
    secondaryKeywords: opts.secondaryKeywords,
    title: opts.title,
    metaDescription: opts.metaDescription,
    h1: opts.h1,
    intro: opts.intro,
    sections: opts.sections,
    faqs: opts.faqs,
    internalLinks: opts.internalLinks,
    indexStatus: 'indexable',
    published: true,
  };
}

function guidePage(
  slug: string,
  opts: {
    primaryKeyword: string;
    secondaryKeywords: string[];
    title: string;
    metaDescription: string;
    h1: string;
    intro: string;
    sections: PageSection[];
    faqs: PageFaq[];
    internalLinks: { href: string; label: string }[];
  },
): SeoPageContent {
  return {
    slug,
    pageType: 'guide',
    primaryKeyword: opts.primaryKeyword,
    secondaryKeywords: opts.secondaryKeywords,
    title: opts.title,
    metaDescription: opts.metaDescription,
    h1: opts.h1,
    intro: opts.intro,
    sections: opts.sections,
    faqs: opts.faqs,
    internalLinks: opts.internalLinks,
    indexStatus: 'indexable',
    published: true,
  };
}

function draftServicePage(
  slug: string,
  title: string,
  metaDescription: string,
  h1: string,
  intro: string,
): SeoPageContent {
  const service = SERVICES[slug];
  return {
    slug,
    pageType: 'service',
    service: slug,
    primaryKeyword: service?.primaryKeyword ?? slug.replace(/-/g, ' '),
    secondaryKeywords: service?.relatedSlugs ?? [],
    title,
    metaDescription,
    h1,
    intro,
    sections: [{ id: 'overview', heading: 'What this service covers', body: intro }],
    faqs: [
      {
        question: `How do I get a quote for ${service?.name ?? slug}?`,
        answer:
          'Use our quote form to describe your chimney or fireplace issue, ZIP code, and urgency. Local chimney professionals can follow up with availability and pricing.',
      },
    ],
    internalLinks: [
      { href: '/chimney-cleaning', label: 'Chimney cleaning' },
      { href: '/az/tucson', label: 'Tucson chimney services' },
    ],
    indexStatus: 'draft',
    published: true,
  };
}

const SEO_PAGES_DATA: SeoPageContent[] = [
  servicePage('chimney-cleaning', {
    primaryKeyword: 'chimney cleaning',
    secondaryKeywords: ['chimney sweep', 'chimney sweeping cost', 'creosote removal', 'fireplace cleaning'],
    title: 'Chimney Cleaning & Sweeping Services | Get Local Quotes',
    metaDescription:
      'Compare chimney cleaning and sweeping quotes from CSIA-certified local pros. Learn what sweeping includes, how often to schedule, and signs your flue needs service.',
    h1: 'Chimney Cleaning & Sweeping Services',
    intro:
      'Professional chimney sweeping removes creosote, soot, and blockages from your flue so smoke and combustion gases vent safely. Even occasional fireplace use builds deposits that increase chimney fire risk. Cleaning is preventive maintenance—not cosmetic—and should be paired with inspection when you change fuel types or notice draft problems.',
    sections: [
      {
        id: 'what-sweeping-includes',
        heading: 'What chimney cleaning includes',
        body:
          'A standard sweep covers the firebox, smoke shelf, smoke chamber, and flue liner using brushes sized to your system. Technicians contain soot with vacuums and drop cloths, inspect for creosote stage and structural issues visible during cleaning, and verify damper operation. Gas fireplaces still need flue inspection even when “cleaning” is minimal. Wood, pellet, and coal systems typically need more frequent service than gas inserts venting through the same chimney.',
      },
      {
        id: 'how-often',
        heading: 'How often to sweep your chimney',
        body:
          'NFPA 211 recommends annual inspection; sweeping frequency depends on use and fuel. A cord of wood burned per season often warrants at least one sweep. Pellet stoves may need mid-season service if ash bridges form. If you smell smoke indoors, see creosote flakes, or hear animals in the flue, do not wait for the calendar—schedule now. Our guide on sweep intervals explains the one-eighth-inch creosote rule in plain language.',
      },
      {
        id: 'cost-factors',
        heading: 'What affects chimney cleaning cost',
        body:
          'Pricing reflects flue height, roof access, creosote severity, and whether animal nests or caps must be addressed first. Multi-flue chimneys, steep Catalina foothill roofs, and neglected systems with glazed creosote cost more than routine maintenance on accessible prefab units. Camera inspection add-ons are worth it when buying a home or after a chimney fire scare. Compare written scopes from two or three local sweeps rather than a vague flat rate.',
      },
    ],
    faqs: [
      {
        question: 'Is chimney sweeping the same as inspection?',
        answer:
          'No. Sweeping removes deposits; inspection evaluates structure, clearances, and venting integrity. Many providers bundle both—ask what is included.',
      },
      {
        question: 'Can I clean my own chimney?',
        answer:
          'DIY brushing is possible on some ground-level systems but misses roof-level hazards, hidden liner damage, and proper containment. Professional sweeps carry liability coverage and spot defects homeowners miss.',
      },
      {
        question: 'How long does chimney cleaning take?',
        answer:
          'Most residential sweeps take 45–90 minutes. Heavy creosote or animal removal can extend the visit.',
      },
      {
        question: 'Do gas fireplaces need sweeping?',
        answer:
          'They still need annual inspection for venting blockages, corrosion, and CO risks—even when little soot is present.',
      },
    ],
    internalLinks: [
      { href: '/how-often-to-sweep-chimney', label: 'How often to sweep' },
      { href: '/creosote-dangers', label: 'Creosote dangers' },
      { href: '/chimney-inspection', label: 'Chimney inspection' },
      { href: '/az/tucson/chimney-cleaning', label: 'Tucson chimney cleaning' },
    ],
  }),

  servicePage('chimney-inspection', {
    primaryKeyword: 'chimney inspection',
    secondaryKeywords: ['level 2 chimney inspection', 'home sale chimney inspection', 'chimney inspection cost'],
    title: 'Chimney Inspection Services | Level 1, 2 & 3 Quotes',
    metaDescription:
      'Schedule chimney inspections with local certified professionals. Learn Level 1 vs Level 2 scope, when inspections are required, and what reports should include.',
    h1: 'Chimney Inspection Services',
    intro:
      'A chimney inspection evaluates the flue, liner, crown, cap, and fireplace components for safety and code compliance—not just whether the flue looks dirty. Inspections are essential before first seasonal use, after a chimney fire or lightning strike, when changing fuels, or during real estate transfers in homes with fireplaces or wood stoves.',
    sections: [
      {
        id: 'inspection-levels',
        heading: 'Level 1, 2, and 3 inspections explained',
        body:
          'Level 1 is a visual check during routine cleaning when no changes occurred. Level 2 adds camera scans and accessible areas when selling a home, after an operating malfunction, or after building fires nearby—required by many home inspectors and insurers. Level 3 involves removing components or building materials when serious hazards are suspected. Match the level to your situation; overselling Level 3 wastes money, underselling Level 2 risks hidden liner gaps.',
      },
      {
        id: 'what-inspectors-check',
        heading: 'What inspectors look for',
        body:
          'Technicians assess liner integrity, clearance to combustibles, crown and cap condition, flashing at the roofline, smoke chamber parging, damper function, and evidence of previous fires or water damage. They note creosote stage, spalling brick, and animal nesting. Reports should include photos, recommendations, and whether the system is safe to use as-is, needs repair, or must not be used until fixed.',
      },
      {
        id: 'when-to-schedule',
        heading: 'When to schedule an inspection',
        body:
          'Book before your first fire of the season, after storms that may have shifted caps, when buying or selling, or if you smell smoke in the house with a lit fire. Tucson monsoon rains test crown sealing—schedule post-storm checks if you see mortar crumbs in the firebox. Pair inspection with sweeping when creosote is visible or history is unknown.',
      },
    ],
    faqs: [
      {
        question: 'How long does a chimney inspection take?',
        answer: 'Level 1 during cleaning may take 15–30 minutes. Level 2 with camera work often runs 60–90 minutes.',
      },
      {
        question: 'Is a chimney inspection required to sell a home?',
        answer: 'Not always by law, but buyers and insurers frequently request Level 2 inspections where fireplaces exist.',
      },
      {
        question: 'Can I use my fireplace if inspection finds minor cracks?',
        answer: 'Only if the inspector explicitly says it is safe. Cracks in liners or crowns can allow heat and gases into walls.',
      },
      {
        question: 'Does inspection include cleaning?',
        answer: 'Sometimes bundled, sometimes separate. Clarify scope before booking.',
      },
    ],
    internalLinks: [
      { href: '/chimney-cleaning', label: 'Chimney cleaning' },
      { href: '/chimney-repair', label: 'Chimney repair' },
      { href: '/chimney-fire-signs', label: 'Chimney fire signs' },
      { href: '/az/tucson/chimney-inspection', label: 'Tucson chimney inspection' },
    ],
  }),

  servicePage('chimney-repair', {
    primaryKeyword: 'chimney repair',
    secondaryKeywords: ['chimney crown repair', 'chimney flashing repair', 'tuckpointing chimney'],
    title: 'Chimney Repair Services | Crowns, Flashing & Masonry Quotes',
    metaDescription:
      'Get chimney repair quotes for cracked crowns, damaged liners, loose brick, and flashing leaks. Learn common failure points and when repair beats rebuild.',
    h1: 'Chimney Repair Services',
    intro:
      'Chimney repair addresses water intrusion, structural decay, and venting failures that inspections reveal. Desert sun, monsoon rain, and freeze-thaw in Tucson foothills crack crowns and mortar faster than many homeowners expect. Repair scope ranges from cap and crown sealing to partial rebuilds and liner replacement—accurate diagnosis prevents paying for cosmetic patches when the flue is unsafe.',
    sections: [
      {
        id: 'common-repairs',
        heading: 'Common chimney repairs',
        body:
          'Crown resurfacing or rebuild stops water from soaking into brick and freezing in flue tiles. Step flashing and counter-flashing repairs fix roof leaks misdiagnosed as plumbing issues. Tuckpointing restores mortar joints; spalling brick may need replacement. Damper repair or replacement improves draft and energy loss. Prefab chase covers rust through in desert heat—metal repairs differ from masonry work.',
      },
      {
        id: 'water-damage',
        heading: 'Water damage and desert climate',
        body:
          'Tucson’s intense UV breaks down crown sealants; monsoon wind drives rain into uncapped flues. White efflorescence on brick signals moisture migration. Interior drywall stains near the chimney breast often trace to flashing, not roof shingles alone. Repair plans should prioritize keeping water out before cosmetic interior patching.',
      },
      {
        id: 'repair-vs-rebuild',
        heading: 'Repair vs. partial rebuild',
        body:
          'Localized crown and cap work fits repair. Widespread liner collapse, leaning stacks, or separated chimneys from the house may require rebuild or engineered support. Compare repair estimates that only delay failure 12–24 months against rebuild quotes with documented warranties.',
      },
    ],
    faqs: [
      {
        question: 'Why does my chimney leak when it rains?',
        answer: 'Usually failed crown, cap, or flashing—not the firebox. A chimney professional should inspect from crown to roofline.',
      },
      {
        question: 'Can cracked flue tiles be repaired?',
        answer: 'Minor cracks may be relined; significant gaps require stainless or cast-in-place liners for safe venting.',
      },
      {
        question: 'How much does chimney repair cost?',
        answer: 'Simple crown sealing differs widely from liner installs. Get itemized quotes after inspection, not over the phone.',
      },
      {
        question: 'Should I repair before sweeping?',
        answer: 'Unsafe structural issues should be addressed first; minor crown work can sometimes follow cleaning the same visit.',
      },
    ],
    internalLinks: [
      { href: '/masonry-repair', label: 'Masonry repair' },
      { href: '/chimney-cap-installation', label: 'Chimney cap installation' },
      { href: '/chimney-liner-repair', label: 'Chimney liner repair' },
      { href: '/az/tucson/chimney-repair', label: 'Tucson chimney repair' },
    ],
  }),

  servicePage('emergency-chimney-service', {
    primaryKeyword: 'emergency chimney service',
    secondaryKeywords: ['chimney fire emergency', 'blocked chimney flue', 'urgent chimney repair'],
    title: 'Emergency Chimney Service | Same-Day Local Response',
    metaDescription:
      'Need emergency chimney help for suspected chimney fires, blocked flues, or CO concerns? Steps to take now and how to request urgent local quotes.',
    h1: 'Emergency Chimney Service',
    intro:
      'Chimney emergencies include active or recent chimney fires, completely blocked flues, carbon monoxide symptoms when using a fireplace, or storm damage that leaves the stack unstable. Stop using the fireplace immediately, evacuate if you smell gas or see flames at the cap, and call 911 if fire is active—then request a certified chimney professional for evaluation before lighting another fire.',
    sections: [
      {
        id: 'emergency-signs',
        heading: 'What counts as a chimney emergency',
        body:
          'Loud roaring from the flue, dense smoke indoors, flames visible at the chimney top, or hot walls near the chimney chase are chimney fire indicators. Animal blockages with live nesting, collapsed flue tiles, or CO alarms when the fireplace runs also qualify. A smoky smell alone may not be emergent—but investigate before reuse.',
      },
      {
        id: 'immediate-steps',
        heading: 'Immediate steps before help arrives',
        body:
          'Do not pour water into a fireplace during an active chimney fire unless instructed by fire officials—it can crack liners. Close the damper only if no smoke is entering the room. Air out the home if CO is suspected. Do not use the dryer or other appliances that share vents if blockage is suspected. Document damage with photos for insurance after safety is restored.',
      },
      {
        id: 'after-emergency',
        heading: 'After emergency service',
        body:
          'Level 2 or 3 inspection is mandatory after a chimney fire before reuse. Liners may need replacement even if damage is not visible. Install or replace caps and spark arrestors where ember escape risk exists near desert scrub. Schedule follow-up masonry repair for heat-cracked crowns common in Tucson installations.',
      },
    ],
    faqs: [
      {
        question: 'Can I use my fireplace after a small chimney fire?',
        answer: 'Not until a certified sweep inspects for liner and mortar damage. Hidden cracks can reignite.',
      },
      {
        question: 'How fast is emergency chimney service in Tucson?',
        answer: 'Many providers offer same-day triage for true blockages and post-fire inspections; describe symptoms clearly when requesting quotes.',
      },
      {
        question: 'Does homeowners insurance cover chimney fires?',
        answer: 'Often partially, if sudden and accidental. Neglect or uninspected systems may be excluded—keep sweep records.',
      },
      {
        question: 'Should I call a sweep or the fire department?',
        answer: 'Active fire or immediate danger: 911 first. After extinguishment: chimney professional for inspection and clearance.',
      },
    ],
    internalLinks: [
      { href: '/chimney-fire-signs', label: 'Chimney fire signs' },
      { href: '/chimney-inspection', label: 'Chimney inspection' },
      { href: '/chimney-repair', label: 'Chimney repair' },
      { href: '/az/tucson/emergency-chimney-service', label: 'Tucson emergency chimney' },
    ],
  }),

  servicePage('chimney-cap-installation', {
    primaryKeyword: 'chimney cap installation',
    secondaryKeywords: ['chimney cap replacement', 'spark arrestor', 'chimney rain cap'],
    title: 'Chimney Cap Installation | Protect Your Flue From Rain & Debris',
    metaDescription:
      'Compare chimney cap installation quotes. Block rain, animals, and debris while maintaining proper draft—essential in Tucson monsoon and desert wind seasons.',
    h1: 'Chimney Cap Installation',
    intro:
      'A chimney cap covers the flue opening with mesh sides and a solid top, stopping rain, birds, and debris while allowing smoke to exit. Uncapped chimneys in Tucson collect monsoon water that destroys liners and mortar. Caps also reduce downdrafts and ember escape—critical near desert brush. Proper sizing and mesh type matter for draft and code compliance.',
    sections: [
      {
        id: 'why-caps-matter',
        heading: 'Why chimney caps matter in Arizona',
        body:
          'Monsoon downpours pour directly into uncapped flues, saturating smoke chambers and accelerating creosote odor indoors. Dust storms clog flues with fine grit. Birds and raccoons nest in spring; caps prevent humane-removal emergencies later. Spark arrestors on wood-burning systems reduce wildfire ember risk in foothill communities.',
      },
      {
        id: 'cap-types',
        heading: 'Types of chimney caps',
        body:
          'Single-flue caps mount to tile liners; multi-flue caps cover the entire crown. Stainless steel resists desert heat and corrosion better than galvanized. Some gas systems need specialized caps preserving draft ratings. Custom caps fit oversized or decorative masonry stacks common on Catalina foothill homes.',
      },
      {
        id: 'installation-scope',
        heading: 'What installation includes',
        body:
          'Technicians measure flue dimensions, verify crown condition, and secure caps with appropriate fasteners—not just gravity on steep stacks. Crown repair may be recommended before mounting. Inspection for existing damage from uncapped years is typical. Dryer vent terminations are separate but often serviced by the same company.',
      },
    ],
    faqs: [
      {
        question: 'Can a chimney cap cause smoking problems?',
        answer: 'Poorly sized caps or too fine mesh can restrict draft. Professionals match cap design to your fuel type and flue size.',
      },
      {
        question: 'How long do chimney caps last?',
        answer: 'Quality stainless caps often last 15–25 years in desert sun; galvanized may fail sooner.',
      },
      {
        question: 'Do I need a cap if I never use my fireplace?',
        answer: 'Yes—water intrusion still destroys masonry and liners even when the fireplace is idle.',
      },
      {
        question: 'Can I install a chimney cap myself?',
        answer: 'Roof work and proper sealing at the flue tile joint involve fall risk and draft knowledge—professional install is recommended.',
      },
    ],
    internalLinks: [
      { href: '/animal-removal', label: 'Animal removal' },
      { href: '/chimney-repair', label: 'Chimney repair' },
      { href: '/chimney-cleaning', label: 'Chimney cleaning' },
      { href: '/az/tucson', label: 'Tucson chimney services' },
    ],
  }),

  guidePage('how-often-to-sweep-chimney', {
    primaryKeyword: 'how often to sweep chimney',
    secondaryKeywords: ['chimney sweep frequency', 'when to clean chimney', 'annual chimney inspection'],
    title: 'How Often Should You Sweep Your Chimney? | Maintenance Guide',
    metaDescription:
      'Learn recommended chimney sweep intervals for wood, gas, and pellet systems. The 1/8-inch creosote rule, seasonal timing, and Tucson-specific use patterns.',
    h1: 'How Often Should You Sweep Your Chimney?',
    intro:
      'Sweep frequency depends on how much you burn, what you burn, and how your system vents—not a arbitrary calendar date alone. NFPA 211 recommends chimneys, fireplaces, and vents be inspected at least once a year. Sweeping may be needed more often when creosote reaches one-eighth inch thickness or after heavy seasonal use.',
    sections: [
      {
        id: 'creosote-rule',
        heading: 'The one-eighth-inch creosote rule',
        body:
          'When glazed or flaky creosote buildup exceeds 1/8 inch, schedule sweeping. Stage 3 glazed creosote may need chemical treatment or rotary cleaning—not standard brushes. Pellet systems produce fly ash that can block vents mid-season. Gas systems produce little soot but still need flue inspection for blockages and corrosion.',
      },
      {
        id: 'by-fuel-type',
        heading: 'Sweep intervals by fuel type',
        body:
          'Wood: often 1–2 sweeps per burning season if used weekly. Pellets: inspect monthly in use; sweep as ash bridges form. Gas: annual inspection; sweeping rarely needed unless debris enters from uncapped flues. Oil: follow technician guidance—soot behaves differently. Change intervals when you alter fuels or install inserts.',
      },
      {
        id: 'tucson-timing',
        heading: 'Best timing in the Tucson area',
        body:
          'Schedule inspection and sweeping in early fall before first use—technicians book up when cold snaps hit Catalina foothills. Post-monsoon checks make sense if caps were missing and water entered. Light users still need annual inspection even if sweeping is deferred with documented measurements.',
      },
    ],
    faqs: [
      {
        question: 'What happens if I never sweep my chimney?',
        answer: 'Creosote ignites at high temperatures, causing chimney fires. Blockages also force CO and smoke indoors.',
      },
      {
        question: 'Do chimney sweeping logs replace professional sweeping?',
        answer: 'No. They may reduce light creosote but do not replace mechanical cleaning or inspection.',
      },
      {
        question: 'How do I know if my chimney was swept recently?',
        answer: 'Ask for service receipts or hire a sweep for inspection—they can estimate deposit age and thickness.',
      },
      {
        question: 'Is once a year enough in Arizona?',
        answer: 'Inspection yearly is minimum; sweeping may be less frequent for gas or rarely used wood fireplaces if creosote stays thin.',
      },
    ],
    internalLinks: [
      { href: '/chimney-cleaning', label: 'Schedule chimney cleaning' },
      { href: '/creosote-dangers', label: 'Creosote dangers' },
      { href: '/chimney-inspection', label: 'Chimney inspection' },
      { href: '/chimney-vs-fireplace', label: 'Chimney vs fireplace' },
    ],
  }),

  guidePage('creosote-dangers', {
    primaryKeyword: 'creosote dangers',
    secondaryKeywords: ['creosote buildup', 'chimney creosote fire risk', 'stage 3 creosote'],
    title: 'Creosote Dangers: Why Buildup Causes Chimney Fires',
    metaDescription:
      'Understand creosote stages, why it ignites, and how to reduce buildup. Essential reading before lighting your next fire.',
    h1: 'Creosote Dangers: What Homeowners Should Know',
    intro:
      'Creosote is a tar-like byproduct of incomplete wood combustion that coats flue liners. It is highly flammable. Most chimney fires start when creosote ignites—not when flames enter the flue from the firebox alone. Understanding stages of creosote helps you schedule sweeping before danger accumulates invisibly above the firebox.',
    sections: [
      {
        id: 'creosote-stages',
        heading: 'Stage 1, 2, and 3 creosote',
        body:
          'Stage 1 is sooty and dusty—easily brushed. Stage 2 is shiny, flaky tar requiring stiffer brushes. Stage 3 is glazed, hard, and difficult to remove—often needing rotary chains or chemical modifiers. Glazed creosote often signals poor burning practices, oversized flues, or insufficient draft.',
      },
      {
        id: 'how-fires-start',
        heading: 'How creosote causes chimney fires',
        body:
          'Flue temperatures during normal fires can exceed 1,000°F when creosote ignites, cracking liners and spreading to framing through gaps. Fires may burn explosively with roaring noise or smolder quietly—both require inspection before reuse. Even “small” fires damage liners not visible from the ground.',
      },
      {
        id: 'reducing-buildup',
        heading: 'Reducing creosote buildup',
        body:
          'Burn only seasoned hardwood with moisture under 20%. Avoid smoldering overnight loads. Ensure adequate air supply and hot fires during startup. Insulated liners improve draft in cold chimneys. Never burn trash, cardboard overload, or green wood. Annual inspection catches buildup before it reaches stage 3.',
      },
    ],
    faqs: [
      {
        question: 'Can I see creosote without climbing the roof?',
        answer: 'A sweep can inspect from the firebox and flue with lights and cameras—do not rely on guesswork.',
      },
      {
        question: 'Does gas produce creosote?',
        answer: 'Minimal soot, but incomplete combustion or mixing wood/gas improperly in shared flues can still create deposits.',
      },
      {
        question: 'Will a hot fire clean creosote?',
        answer: 'Controlled hot fires help stage 1 soot; they risk igniting stage 2/3 deposits—professional removal is safer.',
      },
      {
        question: 'Is creosote smell dangerous indoors?',
        answer: 'Odor signals ventilation issues or downdraft; schedule inspection—do not ignore CO alarm activation.',
      },
    ],
    internalLinks: [
      { href: '/chimney-fire-signs', label: 'Chimney fire signs' },
      { href: '/how-often-to-sweep-chimney', label: 'Sweep frequency guide' },
      { href: '/chimney-cleaning', label: 'Chimney cleaning quotes' },
      { href: '/emergency-chimney-service', label: 'Emergency chimney service' },
    ],
  }),

  guidePage('chimney-fire-signs', {
    primaryKeyword: 'chimney fire signs',
    secondaryKeywords: ['how to know if chimney fire', 'chimney fire symptoms', 'chimney fire noise'],
    title: 'Signs of a Chimney Fire | What to Do Immediately',
    metaDescription:
      'Recognize chimney fire signs: roaring flue, dense smoke, flames at the cap. Emergency steps and when to call 911 vs a chimney professional.',
    h1: 'Signs of a Chimney Fire',
    intro:
      'Chimney fires often surprise homeowners because flames may stay hidden inside the flue. Knowing auditory and visual signs speeds response and limits damage. Treat any suspected chimney fire as urgent—continued use without inspection risks house fires and carbon monoxide exposure.',
    sections: [
      {
        id: 'warning-signs',
        heading: 'Warning signs during fireplace use',
        body:
          'A loud roaring or rumbling from the chimney like a freight train. Dense smoke entering the room or excessive smoke at the cap. Intense hot smell beyond normal wood smoke. Flames or sparks shooting from the top. Discolored rain cap or warped metal chase cover after use. Neighbors reporting embers from your stack.',
      },
      {
        id: 'aftermath-signs',
        heading: 'Signs after a suspected event',
        body:
          'Puffy or honeycombed creosote in the firebox when inspected later. Cracked flue tile shards. Damaged antenna or roof materials near the stack from heat. Damper warped or stuck. Even without dramatic signs, schedule Level 2 inspection if you suspect overheating.',
      },
      {
        id: 'response',
        heading: 'What to do if you suspect a chimney fire',
        body:
          'Call 911 if flames are visible or spreading. Close glass doors if safe and no smoke enters the room. Evacuate if smoke fills living spaces. Do not use water unless fire officials advise—it can shatter liners. After fire department clearance, call a certified chimney company for inspection before reuse—never “test” with another fire.',
      },
    ],
    faqs: [
      {
        question: 'Can chimney fires burn slowly?',
        answer: 'Yes—some smolder at high flue temperatures without obvious flames. Inspection still required.',
      },
      {
        question: 'Will a chimney fire always spread to the house?',
        answer: 'Not always, but liner cracks and heat transfer through gaps create serious risk without repair.',
      },
      {
        question: 'Do chimney fires happen in gas fireplaces?',
        answer: 'Rare from creosote, but blockages and debris in shared flues can still cause dangerous events.',
      },
      {
        question: 'Should I install a chimney fire suppressant?',
        answer: 'Products exist but are not substitutes for sweeping and inspection—discuss with a local sweep.',
      },
    ],
    internalLinks: [
      { href: '/emergency-chimney-service', label: 'Emergency chimney service' },
      { href: '/creosote-dangers', label: 'Creosote dangers' },
      { href: '/chimney-inspection', label: 'Post-fire inspection' },
      { href: '/chimney-repair', label: 'Chimney repair' },
    ],
  }),

  guidePage('chimney-vs-fireplace', {
    primaryKeyword: 'chimney vs fireplace',
    secondaryKeywords: ['fireplace vs chimney difference', 'fireplace repair vs chimney repair'],
    title: 'Chimney vs Fireplace: What Homeowners Should Understand',
    metaDescription:
      'Learn the difference between chimney and fireplace components, who repairs what, and why both need maintenance for safe venting.',
    h1: 'Chimney vs Fireplace: What Is the Difference?',
    intro:
      'Homeowners often say “fireplace problem” when the issue is in the chimney—or vice versa. The fireplace is the combustion area you see; the chimney is the venting system that exhausts gases. Both must work together. Repairs may involve hearth professionals, masons, or CSIA-certified sweeps depending on which components failed.',
    sections: [
      {
        id: 'components',
        heading: 'Fireplace components vs chimney components',
        body:
          'Fireplace: firebox, grate, doors, gas logs, damper at the throat. Chimney: flue liner, smoke chamber, smoke shelf, crown, cap, exterior masonry or chase. Prefab units combine factory firebox and metal chimney sections—still two systems for maintenance purposes.',
      },
      {
        id: 'common-confusion',
        heading: 'Common mix-ups in service calls',
        body:
          'Smoke in the room may be a damper or fireplace issue—or downdraft from a capped or short chimney. Water in the firebox usually comes from crown or flashing above, not the hearth. CO alarms may trace to venting blockages above the fireplace. Describe symptoms fully so matchers send the right specialist.',
      },
      {
        id: 'maintenance',
        heading: 'Maintenance for both',
        body:
          'Annual chimney inspection covers venting path; fireplace retailers service gas log components. Wood users need sweeping of the full flue; gas users still need vent inspection. Real estate inspections should address both clearance to combustibles at the hearth and liner condition above.',
      },
    ],
    faqs: [
      {
        question: 'Who repairs a cracked firebox?',
        answer: 'Fireplace contractors or masons depending on prefab vs masonry construction—may differ from sweep companies.',
      },
      {
        question: 'Can I replace my fireplace without touching the chimney?',
        answer: 'Insert changes often require liner compatibility review—never assume the existing flue fits new appliances.',
      },
      {
        question: 'Is the damper part of the chimney or fireplace?',
        answer: 'It bridges both—it must seal at the throat and operate smoothly for safe use.',
      },
      {
        question: 'Do vent-free fireplaces need chimney sweeping?',
        answer: 'Vent-free units do not use the chimney for venting; vented gas and all wood systems do.',
      },
    ],
    internalLinks: [
      { href: '/fireplace-repair', label: 'Fireplace repair' },
      { href: '/chimney-inspection', label: 'Chimney inspection' },
      { href: '/chimney-cleaning', label: 'Chimney cleaning' },
      { href: '/how-often-to-sweep-chimney', label: 'How often to sweep' },
    ],
  }),

  {
    slug: 'az/tucson',
    pageType: 'city',
    city: 'tucson',
    state: 'az',
    primaryKeyword: 'chimney services Tucson AZ',
    secondaryKeywords: ['chimney sweep Tucson', 'chimney repair Tucson', 'fireplace service Tucson'],
    title: 'Chimney Services in Tucson, AZ | Guides & Local Quotes',
    metaDescription:
      'Compare chimney cleaning, inspection, and repair quotes in Tucson and Pima County. Desert climate tips, monsoon cap damage, and foothill fireplace use.',
    h1: 'Chimney Services in Tucson, Arizona',
    intro:
      'Tucson homeowners use fireplaces and wood stoves seasonally—often heavily for a few months then not at all through brutal summers. That start-stop pattern lets creosote and animal nests develop unnoticed. Monsoon rains test uncapped flues; foothill cold snaps drive first-fire emergencies. Use our guides and service pages below to learn what you need, then request local quotes matched to your ZIP.',
    sections: [
      {
        id: 'tucson-chimney-landscape',
        heading: 'Chimneys in the Tucson metro',
        body:
          'Older central Tucson homes, Catalina foothills custom builds, and Green Valley retirement communities span masonry stacks, prefab chases, and gas inserts. Pima County real estate transfers often trigger Level 2 inspections. Desert dust clogs mesh caps; monsoon water destroys crowns without proper sealing.',
      },
      {
        id: 'seasonal-timing',
        heading: 'When Tucson homeowners schedule service',
        body:
          'Book sweeping and inspection in September–October before first use. Post-monsoon crown checks in September catch summer water damage. Emergency calls spike on first cold nights when dampers fail or nests block flues. Do not wait for the first cold front—local sweeps schedule weeks out in peak season.',
      },
      {
        id: 'services-by-need',
        heading: 'Choose a service by what you need',
        body:
          'Routine maintenance: cleaning plus Level 1 inspection. Buying or selling: Level 2 inspection with camera. Smell smoke indoors: inspection and possible repair. Storm or fire event: emergency service then repair. Uncapped flue or animals heard: cap install or removal then sweep.',
      },
    ],
    faqs: [
      {
        question: 'How often should Tucson homeowners sweep chimneys?',
        answer: 'Inspect yearly; sweep when creosote exceeds 1/8 inch or after a cord of wood burned—see our sweep guide.',
      },
      {
        question: 'Do Tucson gas fireplaces need service?',
        answer: 'Yes—annual vent inspection for blockages, corrosion, and CO safety even without soot buildup.',
      },
      {
        question: 'Are chimney fires common in Arizona?',
        answer: 'Less frequent than cold climates but still occur with neglected creosote and first-fire-of-season blockages.',
      },
      {
        question: 'Can I get same-day chimney service in Tucson?',
        answer: 'Emergency and post-fire visits are often prioritized; routine sweeps may need advance booking in fall.',
      },
    ],
    internalLinks: [
      { href: '/az/tucson/chimney-cleaning', label: 'Tucson chimney cleaning' },
      { href: '/az/tucson/chimney-inspection', label: 'Tucson chimney inspection' },
      { href: '/az/tucson/chimney-repair', label: 'Tucson chimney repair' },
      { href: '/az/tucson/emergency-chimney-service', label: 'Tucson emergency chimney' },
      { href: '/how-often-to-sweep-chimney', label: 'How often to sweep guide' },
    ],
    indexStatus: 'indexable',
    published: true,
  },

  cityServicePage('chimney-cleaning', {
    primaryKeyword: 'chimney cleaning Tucson AZ',
    secondaryKeywords: ['chimney sweep Tucson', 'fireplace cleaning Tucson'],
    title: 'Chimney Cleaning in Tucson, AZ | Local Sweep Quotes',
    metaDescription:
      'Get chimney sweeping quotes in Tucson, Oro Valley, Marana, and Sahuarita. Local notes on desert dust, monsoon debris, and seasonal booking.',
    h1: 'Chimney Cleaning in Tucson, AZ',
    intro:
      'Tucson-area sweeps deal with dust-clogged caps, post-monsoon debris, and fireplaces idle for eight months before winter guests arrive. Oro Valley and Catalina foothill roofs require fall-safe access planning. Request quotes that state whether inspection and cap check are included—not just a bottom-line sweep price.',
    sections: [
      {
        id: 'local-access',
        heading: 'Roof access and desert homes',
        body:
          'Steep tile roofs and multi-story chimneys in foothills communities add time versus single-story ranch homes. Prefab chimneys in Marana tracts may be easier but still need cap inspection for dust infiltration. Mention roof type and chimney height when requesting quotes.',
      },
      {
        id: 'seasonal-demand',
        heading: 'Peak season in Pima County',
        body:
          'October and November fill schedules fast when Catalina elevations get first frost warnings. Book early if you host holidays. Green Valley snowbirds often need sweeps on arrival—creosote from prior seasons may still be present.',
      },
    ],
    faqs: [
      {
        question: 'How much does chimney cleaning cost in Tucson?',
        answer: 'Varies by flue count, access, and creosote level—get itemized quotes from two or three local sweeps.',
      },
      {
        question: 'Do sweeps serve Marana and Oro Valley from Tucson?',
        answer: 'Most metro providers cover greater Pima County; confirm travel and scheduling for outer zip codes.',
      },
    ],
    internalLinks: [
      { href: '/chimney-cleaning', label: 'Chimney cleaning overview' },
      { href: '/az/tucson', label: 'Tucson chimney hub' },
      { href: '/how-often-to-sweep-chimney', label: 'Sweep frequency guide' },
    ],
  }),

  cityServicePage('chimney-inspection', {
    primaryKeyword: 'chimney inspection Tucson AZ',
    secondaryKeywords: ['level 2 inspection Tucson', 'home sale chimney Tucson'],
    title: 'Chimney Inspection in Tucson, AZ | Level 1 & 2 Quotes',
    metaDescription:
      'Chimney inspection quotes for Tucson real estate and seasonal safety. Camera scans, desert crown damage, and prefab chase evaluations.',
    h1: 'Chimney Inspection in Tucson, AZ',
    intro:
      'Tucson inspections often support winter move-ins, snowbird arrivals, and home sales in unincorporated Pima County where fireplaces are common. Level 2 camera scans reveal liner gaps from monsoon water damage invisible from the hearth. Vacant homes may have bird nests blocking flues—inspection before first fire is essential.',
    sections: [
      {
        id: 'real-estate',
        heading: 'Inspections for Tucson-area real estate',
        body:
          'Buyers request Level 2 reports with photos; sellers pre-inspect to avoid closing delays. Adobe and rammed-earth homes may have non-standard clearances—document with certified sweeps. HOAs in Oro Valley sometimes require inspection proof before fireplace use.',
      },
    ],
    faqs: [
      {
        question: 'Is chimney inspection required to sell in Pima County?',
        answer: 'Not always mandatory, but common in transactions with wood or gas vented fireplaces.',
      },
    ],
    internalLinks: [
      { href: '/chimney-inspection', label: 'Inspection overview' },
      { href: '/az/tucson/chimney-cleaning', label: 'Tucson cleaning' },
      { href: '/az/tucson', label: 'Tucson hub' },
    ],
  }),

  cityServicePage('chimney-repair', {
    primaryKeyword: 'chimney repair Tucson AZ',
    secondaryKeywords: ['chimney crown repair Tucson', 'chimney flashing Tucson'],
    title: 'Chimney Repair in Tucson, AZ | Crown, Flashing & Masonry Quotes',
    metaDescription:
      'Chimney repair in Tucson for monsoon-damaged crowns, flashing leaks, and liner issues. Foothill masonry and prefab chase specialists.',
    h1: 'Chimney Repair in Tucson, AZ',
    intro:
      'Repair calls spike after monsoon season when cracked crowns let water into smoke chambers. Flashing failures mimic roof leaks on tile roofs common in Catalina foothills. Prefab chase rust differs from brick tuckpointing—local masons and sweeps collaborate on scope.',
    sections: [
      {
        id: 'monsoon-damage',
        heading: 'Monsoon and UV damage patterns',
        body:
          'Crown sealants fail from desert sun within years if cheap products were used. Wind-driven rain enters uncapped flues. Interior plaster stains near chimneys often need flashing repair, not repainting alone.',
      },
    ],
    faqs: [
      {
        question: 'Can Tucson heat alone damage chimneys?',
        answer: 'UV and thermal cycling crack crowns and mortar; water intrusion from monsoon completes the damage cycle.',
      },
    ],
    internalLinks: [
      { href: '/chimney-repair', label: 'Repair overview' },
      { href: '/chimney-cap-installation', label: 'Cap installation' },
      { href: '/az/tucson', label: 'Tucson hub' },
    ],
  }),

  cityServicePage('emergency-chimney-service', {
    primaryKeyword: 'emergency chimney service Tucson',
    secondaryKeywords: ['chimney fire Tucson', 'urgent chimney repair Tucson'],
    title: 'Emergency Chimney Service in Tucson, AZ | Urgent Help',
    metaDescription:
      'Emergency chimney response in Tucson for suspected fires, blocked flues, and CO concerns. What to do before the sweep arrives.',
    h1: 'Emergency Chimney Service in Tucson, AZ',
    intro:
      'First cold snap nights generate emergency calls from blocked flues and first-fire chimney fires in Sahuarita and Catalina elevations. Dust storm debris can block caps between seasons. Describe roaring noises, smoke indoors, or CO alarms clearly when requesting urgent quotes.',
    sections: [
      {
        id: 'tucson-emergency',
        heading: 'Common Tucson emergency scenarios',
        body:
          'Snowbird first-fire nest blockages. Post-storm cap displacement. Creosote ignition after heavy holiday burning. Gas log venting failures when inserts were installed without liner review.',
      },
    ],
    faqs: [
      {
        question: 'How fast is emergency chimney service in Tucson?',
        answer: 'True emergencies are often triaged same-day; availability varies during peak cold snaps.',
      },
    ],
    internalLinks: [
      { href: '/emergency-chimney-service', label: 'Emergency overview' },
      { href: '/chimney-fire-signs', label: 'Chimney fire signs' },
      { href: '/az/tucson', label: 'Tucson hub' },
    ],
  }),

  draftServicePage(
    'chimney-liner-repair',
    'Chimney Liner Repair & Installation | Local Quotes',
    'Repair or replace damaged clay, metal, or cast-in-place chimney liners for safe venting.',
    'Chimney Liner Repair & Installation',
    'Liner work restores containment of heat and combustion gases inside the flue—critical after chimney fires, tile collapse, or appliance changes.',
  ),
  draftServicePage(
    'fireplace-repair',
    'Fireplace Repair Services | Hearth & Damper Quotes',
    'Repair fireboxes, dampers, gas logs, and prefab fireplace components.',
    'Fireplace Repair',
    'Fireplace repair addresses components at the hearth while chimney work addresses venting above—both may be needed for safe operation.',
  ),
  draftServicePage(
    'dryer-vent-cleaning',
    'Dryer Vent Cleaning | Reduce Fire Risk',
    'Professional dryer duct cleaning for lint buildup and restricted airflow.',
    'Dryer Vent Cleaning',
    'Dryer vent cleaning removes lint from ducts and exterior terminations—often scheduled with chimney sweeping by the same local provider.',
  ),
  draftServicePage(
    'animal-removal',
    'Chimney Animal Removal | Humane Nest Clearing',
    'Remove birds, raccoons, and nesting debris from chimneys and recommend caps.',
    'Chimney Animal Removal',
    'Animal removal clears blockages and nesting material before sweeping—caps prevent recurrence common in Tucson spring nesting season.',
  ),
  draftServicePage(
    'masonry-repair',
    'Chimney Masonry Repair | Tuckpointing & Rebuild Quotes',
    'Tuckpointing, brick replacement, and structural chimney masonry repair.',
    'Chimney Masonry Repair',
    'Masonry repair restores mortar, brick, and crown structure—essential when water and heat have spalled desert-exposed chimneys.',
  ),
];

export const SEO_PAGES: SeoPageContent[] = SEO_PAGES_DATA;

export function getSeoPage(slug: string): SeoPageContent | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}

export function getPublishedSeoPages(): SeoPageContent[] {
  return SEO_PAGES.filter((page) => page.published);
}

export function getIndexableSeoPages(): SeoPageContent[] {
  return SEO_PAGES.filter((page) => page.published && page.indexStatus === 'indexable');
}
