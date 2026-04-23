import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(125,211,252,0.14),_transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.32em] text-emerald-200/70">{eyebrow}</p>
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}

