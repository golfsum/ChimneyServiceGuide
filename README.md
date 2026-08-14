# chimneyserviceguide.com

Chimney and fireplace **guides plus quote-request / contractor matching** platform. Not a fake chimney company.

Brand promise: *Expert guides and local quotes for chimney, fireplace, and vent services.*

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- Firebase Auth (admin) + Firestore (production data)
- Local JSON store fallback in `/data` when Firebase Admin is not configured
- Google Search Console API (SEO dashboard)
- GA4 / GTM hooks

## Architecture

```
src/
  app/                 # Public pages, admin, API routes
  components/          # Quote funnel, SEO templates, admin UI
  config/              # Site, services, locations
  content/             # SEO page + keyword seed content
  lib/                 # Leads, providers, GSC, attribution, store
docs/                  # SEO, attribution, routing guides
```

## Local setup

```bash
cd chimneyserviceguide.com
npm install
cp .env.example .env.local
# set ADMIN_DEV_PASSWORD at minimum
npm run dev
```

- Public site: http://localhost:3000
- Admin: http://localhost:3000/admin/login

## Launch cluster (Tucson)

Indexable pages: homepage, 5 service pages, 4 guides, Tucson hub, 4 city-service pages. See [docs/SEO_STRATEGY.md](docs/SEO_STRATEGY.md).

## Related docs

- [docs/SEO_STRATEGY.md](docs/SEO_STRATEGY.md)
- [docs/LEAD_ATTRIBUTION.md](docs/LEAD_ATTRIBUTION.md)
- [docs/PROVIDER_ROUTING.md](docs/PROVIDER_ROUTING.md)

## Sister sites

- `septicpumpingquote.com` — septic lead-gen reference
- `wellpumprepairquote.com` — same architecture, well pump taxonomy
