import Link from "next/link";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { SERVICE_OPTIONS } from "@/config/services";
import { LOCATIONS } from "@/config/locations";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";

const howItWorks = [
  {
    title: "Tell us what you need",
    body: "Share your ZIP, the chimney or fireplace service you need, and how soon you need help.",
  },
  {
    title: "We match local providers",
    body: "Your request can be shared with independent chimney and fireplace professionals serving your area.",
  },
  {
    title: "Compare your options",
    body: "Providers may contact you with availability and pricing so you can choose what fits.",
  },
];

const problems = [
  "Smoke backing up into the room",
  "Strong creosote odor when not in use",
  "Water stains near the chimney breast",
  "Animals or nesting sounds in the flue",
  "Overdue sweeping or unknown service history",
  "Home sale inspection requirements",
];

const guides = [
  {
    href: "/how-often-to-sweep-chimney",
    title: "How often to sweep your chimney",
    body: "Recommended intervals for wood, gas, and pellet systems.",
  },
  {
    href: "/creosote-dangers",
    title: "Creosote dangers",
    body: "Why buildup causes chimney fires and how to reduce it.",
  },
  {
    href: "/chimney-fire-signs",
    title: "Signs of a chimney fire",
    body: "Warning signs and what to do before you light another fire.",
  },
  {
    href: "/chimney-vs-fireplace",
    title: "Chimney vs fireplace",
    body: "Which components need service and who repairs what.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 10% 0%, #fde68a 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 90% 10%, #fecaca 0%, transparent 50%), linear-gradient(180deg, #f8fafc 0%, #ffffff 70%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-800">
              {siteConfig.name}
            </p>
            <h1 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Guides and quotes for chimney & fireplace service
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              Learn about sweeping, inspections, and repairs—then request quotes
              from chimney professionals serving your area.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="rounded-md bg-white/80 px-3 py-1.5 ring-1 ring-slate-200">
                Expert guides
              </span>
              <span className="rounded-md bg-white/80 px-3 py-1.5 ring-1 ring-slate-200">
                Local quote matching
              </span>
              <span className="rounded-md bg-white/80 px-3 py-1.5 ring-1 ring-slate-200">
                Privacy-conscious
              </span>
            </div>
          </div>
          <QuoteForm seoPageId="home" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-900">Common services</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Start with the job you need. Each page explains what to expect and
          includes a quote request form.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_OPTIONS.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-amber-600"
            >
              <h3 className="font-semibold text-slate-900">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-slate-900">Safety & maintenance guides</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Read before you burn—then request quotes when you are ready for professional help.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {guides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="rounded-xl border border-slate-200 bg-white p-5 hover:border-amber-600"
              >
                <h3 className="font-semibold text-slate-900">{g.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{g.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {howItWorks.map((item, i) => (
            <div key={item.title}>
              <p className="text-sm font-bold text-amber-700">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Why compare chimney quotes
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Chimney work varies by flue height, creosote level, roof access,
              and repair scope. Comparing local CSIA-certified professionals helps
              you understand availability and pricing before you commit.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Common chimney problems
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {problems.map((p) => (
                <li
                  key={p}
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-amber-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">Popular service areas</h2>
          <p className="mt-2 max-w-2xl text-amber-100">
            We are starting with a focused Tucson-area cluster and expanding
            based on real search demand.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/az/tucson"
              className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20"
            >
              Tucson, AZ hub
            </Link>
            {Object.values(LOCATIONS)
              .filter((loc) => loc.slug !== "tucson")
              .map((loc) => (
                <span
                  key={loc.slug}
                  className="rounded-md bg-white/5 px-4 py-2 text-sm text-amber-100"
                  title="Expand only with unique local content"
                >
                  {loc.name} (nearby)
                </span>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Request your chimney quotes
          </h2>
          <p className="mt-2 text-slate-600">
            Start with your ZIP code. It takes about a minute.
          </p>
          <a
            href="#quote"
            className="mt-6 inline-flex rounded-md bg-amber-700 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-800"
          >
            {siteConfig.primaryCta}
          </a>
        </div>
      </section>
    </>
  );
}
