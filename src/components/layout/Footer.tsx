import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-bold text-slate-900">{siteConfig.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
            {siteConfig.tagline} We connect homeowners with independent chimney
            and fireplace service providers. Providers are not our employees.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/chimney-cleaning">Chimney cleaning</Link>
            </li>
            <li>
              <Link href="/chimney-inspection">Chimney inspection</Link>
            </li>
            <li>
              <Link href="/chimney-repair">Chimney repair</Link>
            </li>
            <li>
              <Link href="/emergency-chimney-service">Emergency service</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Guides</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/how-often-to-sweep-chimney">How often to sweep</Link>
            </li>
            <li>
              <Link href="/creosote-dangers">Creosote dangers</Link>
            </li>
            <li>
              <Link href="/chimney-fire-signs">Chimney fire signs</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {siteConfig.domain}. Guides & quote platform.
      </div>
    </footer>
  );
}
