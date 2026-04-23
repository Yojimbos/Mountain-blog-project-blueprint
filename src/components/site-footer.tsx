import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.3fr,1fr,1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/60">Гірський Блок</p>
          <h2 className="max-w-md text-2xl font-semibold text-white">
            Практичний український простір про підготовку до гір і спокійні, безпечні рішення в поході.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300">{siteConfig.description}</p>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Розділи</p>
          <div className="space-y-3 text-sm text-slate-300">
            {siteConfig.navItems.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Контакт</p>
          <div className="space-y-3 text-sm text-slate-300">
            <p>{siteConfig.email}</p>
            <p>Матеріали підготовлені для старту, планування та безпечного руху в горах.</p>
            <p className="text-slate-500">© 2026 {siteConfig.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

