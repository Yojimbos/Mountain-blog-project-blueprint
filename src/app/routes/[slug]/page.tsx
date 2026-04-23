import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarkdownContent } from "@/components/markdown-content";
import { PageShell } from "@/components/page-shell";
import { getRoute, getRoutes } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getRoutes().map((route) => ({ slug: route.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  try {
    const route = getRoute(params.slug);

    return createMetadata({
      title: `${route.frontmatter.title} | Маршрути | Гірський Блок`,
      description: route.frontmatter.description,
      path: `/routes/${route.slug}`,
    });
  } catch {
    return createMetadata({
      title: "Маршрут не знайдено | Гірський Блок",
      description: "Сторінку маршруту не вдалося знайти.",
      path: "/routes",
    });
  }
}

export default function RouteDetailPage({ params }: { params: { slug: string } }) {
  let route;

  try {
    route = getRoute(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <PageShell
        eyebrow={route.frontmatter.region}
        title={route.frontmatter.title}
        description={route.frontmatter.description}
      >
        <div className="grid gap-4 md:grid-cols-5">
          {[
            ["Складність", route.frontmatter.difficulty],
            ["Відстань", route.frontmatter.distance],
            ["Тривалість", route.frontmatter.duration],
            ["Набір висоти", route.frontmatter.elevation],
            ["Сезон", route.frontmatter.season],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
              <p className="mt-2 text-base font-medium text-white">{value}</p>
            </div>
          ))}
        </div>
      </PageShell>
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <MarkdownContent content={route.content} />
      </section>
    </>
  );
}

