export const siteConfig = {
  name: "Chimney Service Guide",
  domain: "chimneyserviceguide.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://chimneyserviceguide.com",
  tagline: "Expert guides and local quotes for chimney, fireplace, and vent services.",
  description:
    "Learn about chimney maintenance, safety, and repair—then request quotes from local chimney and fireplace professionals serving your area.",
  primaryCta: "Get Chimney Quotes",
  secondaryCta: "Find Chimney Pros Near You",
  email: "hello@chimneyserviceguide.com",
  brandColor: "#B45309",
  brandColorDark: "#92400E",
  accentColor: "#DC2626",
} as const;

export const adminNav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/seo", label: "SEO Performance" },
  { href: "/admin/pages", label: "Pages" },
  { href: "/admin/keywords", label: "Keywords" },
  { href: "/admin/locations", label: "Locations" },
  { href: "/admin/providers", label: "Providers" },
  { href: "/admin/routing", label: "Lead Routing" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin/settings", label: "Settings" },
] as const;
