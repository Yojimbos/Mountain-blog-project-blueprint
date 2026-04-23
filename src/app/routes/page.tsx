import { PageShell } from "@/components/page-shell";
import { RouteCard } from "@/components/route-card";
import { getRoutes } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Маршрути | Гірський Блок",
  description: "Нескладні гірські маршрути для старту: короткі описи, сезонність, складність та орієнтири для планування.",
  path: "/routes",
});

export default function RoutesPage() {
  const routes = getRoutes();

  return (
    <>
      <PageShell
        eyebrow="Маршрути"
        title="Маршрути, з яких добре починати знайомство з українськими горами."
        description="Ми спеціально відібрали простіші варіанти з передбачуваним темпом, зрозумілою логікою руху та відчутною користю для першого досвіду."
      />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {routes.map((route) => (
            <RouteCard
              key={route.slug}
              href={`/routes/${route.slug}`}
              title={route.frontmatter.title}
              region={route.frontmatter.region}
              distance={route.frontmatter.distance}
              duration={route.frontmatter.duration}
              elevation={route.frontmatter.elevation}
              difficulty={route.frontmatter.difficulty}
              description={route.frontmatter.excerpt}
            />
          ))}
        </div>
      </section>
    </>
  );
}

