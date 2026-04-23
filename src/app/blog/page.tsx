import { ContentCard } from "@/components/content-card";
import { PageShell } from "@/components/page-shell";
import { getPosts } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Блог | Гірський Блок",
  description: "Практичні українські матеріали про підготовку до походів, безпеку, пакування рюкзака та погодні рішення.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <PageShell
        eyebrow="Блог"
        title="Тут зібрані матеріали, які хочеться перечитати перед виїздом, а не лише прогортати."
        description="Ми пишемо про ті речі, які реально впливають на комфорт і безпеку: від списку на одноденний похід до поведінки в тумані."
      />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <ContentCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              category={post.frontmatter.category}
              title={post.frontmatter.title}
              description={post.frontmatter.excerpt}
              meta={`${post.frontmatter.readingMinutes} хв читання`}
              date={post.frontmatter.publishedAt}
            />
          ))}
        </div>
      </section>
    </>
  );
}

