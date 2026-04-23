import Link from "next/link";

type RouteCardProps = {
  href: string;
  title: string;
  region: string;
  distance: string;
  duration: string;
  elevation: string;
  difficulty: string;
  description: string;
};

export function RouteCard({
  href,
  title,
  region,
  distance,
  duration,
  elevation,
  difficulty,
  description,
}: RouteCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[0_20px_65px_rgba(2,6,23,0.25)] transition hover:-translate-y-1 hover:border-sky-200/35"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-sky-200/70">{region}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200">{difficulty}</span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      <dl className="mt-6 grid grid-cols-3 gap-3 text-sm text-slate-300">
        <div className="rounded-2xl bg-slate-950/40 p-3">
          <dt className="text-slate-500">Відстань</dt>
          <dd className="mt-1 font-medium text-white">{distance}</dd>
        </div>
        <div className="rounded-2xl bg-slate-950/40 p-3">
          <dt className="text-slate-500">Час</dt>
          <dd className="mt-1 font-medium text-white">{duration}</dd>
        </div>
        <div className="rounded-2xl bg-slate-950/40 p-3">
          <dt className="text-slate-500">Набір</dt>
          <dd className="mt-1 font-medium text-white">{elevation}</dd>
        </div>
      </dl>
    </Link>
  );
}

