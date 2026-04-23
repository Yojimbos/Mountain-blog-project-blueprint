import Link from "next/link";

import { formatUkrainianDate } from "@/lib/utils";

export function ContentCard({
  href,
  category,
  title,
  description,
  meta,
  date,
}: {
  href: string;
  category: string;
  title: string;
  description: string;
  meta: string;
  date: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.28)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200/35 hover:bg-white/8"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">{category}</p>
        <h3 className="mt-4 text-2xl font-semibold text-white transition group-hover:text-emerald-100">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      </div>
      <div className="mt-8 flex items-center justify-between text-sm text-slate-400">
        <span>{meta}</span>
        <span>{formatUkrainianDate(date)}</span>
      </div>
    </Link>
  );
}

