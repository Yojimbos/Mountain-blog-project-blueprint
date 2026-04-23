import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-300 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-950/30">
            ГБ
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-200/70">Mountain Journal</p>
            <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 lg:flex">
          {siteConfig.navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-emerald-300/30 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-emerald-200/60 hover:bg-white/10"
        >
          Написати нам
        </Link>
      </div>
    </header>
  );
}

