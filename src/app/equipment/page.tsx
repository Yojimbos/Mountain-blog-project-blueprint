import { ContentCard } from "@/components/content-card";
import { PageShell } from "@/components/page-shell";
import { getEquipmentGuides } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Спорядження | Гірський Блок",
  description: "Базові гіди про спорядження для новачка: взуття, перший набір речей і логіка вибору без перевантаження.",
  path: "/equipment",
});

export default function EquipmentPage() {
  const guides = getEquipmentGuides();

  return (
    <>
      <PageShell
        eyebrow="Спорядження"
        title="Перший набір спорядження має підтримувати похід, а не перетворювати підготовку на квест."
        description="Ми почали з тем, які дають найбільше ясності: що купувати першим, як не помилитися з трекінговим взуттям і де варто залишити бюджетний запас."
      />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {guides.map((guide) => (
            <ContentCard
              key={guide.slug}
              href={`/equipment/${guide.slug}`}
              category={guide.frontmatter.category}
              title={guide.frontmatter.title}
              description={guide.frontmatter.excerpt}
              meta={guide.frontmatter.level}
              date={guide.frontmatter.publishedAt}
            />
          ))}
        </div>
      </section>
    </>
  );
}

