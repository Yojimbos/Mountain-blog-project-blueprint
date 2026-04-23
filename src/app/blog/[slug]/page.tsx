import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarkdownContent } from "@/components/markdown-content";
import { PageShell } from "@/components/page-shell";
import { getPost, getPosts } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { formatUkrainianDate } from "@/lib/utils";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  try {
    const post = getPost(params.slug);

    return createMetadata({
      title: `${post.frontmatter.title} | Блог | Гірський Блок`,
      description: post.frontmatter.description,
      path: `/blog/${post.slug}`,
    });
  } catch {
    return createMetadata({
      title: "Матеріал не знайдено | Гірський Блок",
      description: "Сторінку матеріалу не вдалося знайти.",
      path: "/blog",
    });
  }
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  let post;

  try {
    post = getPost(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <PageShell eyebrow={post.frontmatter.category} title={post.frontmatter.title} description={post.frontmatter.description}>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            {formatUkrainianDate(post.frontmatter.publishedAt)}
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            {post.frontmatter.readingMinutes} хв читання
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{post.frontmatter.author}</div>
        </div>
      </PageShell>
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <MarkdownContent content={post.content} />
      </section>
    </>
  );
}

