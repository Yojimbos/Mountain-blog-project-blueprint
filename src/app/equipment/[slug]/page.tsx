import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarkdownContent } from "@/components/markdown-content";
import { PageShell } from "@/components/page-shell";
import { getEquipmentGuide, getEquipmentGuides } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getEquipmentGuides().map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  try {
    const guide = getEquipmentGuide(params.slug);

    return createMetadata({
      title: `${guide.frontmatter.title} | Спорядження | Гірський Блок`,
      description: guide.frontmatter.description,
      path: `/equipment/${guide.slug}`,
    });
  } catch {
    return createMetadata({
      title: "Гід не знайдено | Гірський Блок",
      description: "Сторінку про спорядження не вдалося знайти.",
      path: "/equipment",
    });
  }
}

export default function EquipmentDetailPage({ params }: { params: { slug: string } }) {
  let guide;

  try {
    guide = getEquipmentGuide(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <PageShell eyebrow={guide.frontmatter.category} title={guide.frontmatter.title} description={guide.frontmatter.description} />
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <MarkdownContent content={guide.content} />
      </section>
    </>
  );
}

