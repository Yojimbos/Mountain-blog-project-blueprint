import Link from "next/link";

import { ContentCard } from "@/components/content-card";
import { HomeHero } from "@/components/home-hero";
import { RouteCard } from "@/components/route-card";
import { SectionHeading } from "@/components/section-heading";
import { getFeaturedEquipment, getFeaturedPosts, getFeaturedRoutes } from "@/lib/content";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const featuredRoutes = getFeaturedRoutes();
  const featuredEquipment = getFeaturedEquipment();

  return (
    <>
      <HomeHero />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <SectionHeading
            eyebrow="Чому цей сайт"
            title="Контент, який допомагає зібратися в похід без зайвого шуму."
            description="Кожен розділ побудований як корисна база для старту: що взяти, як оцінити погоду, який маршрут обрати першим і як зменшити ризики ще до виїзду."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Матеріали написані українською, простою і живою мовою.",
              "Маршрути підібрані так, щоб новачок міг реально почати.",
              "Поради зі спорядження пояснюють логіку вибору, а не лише список покупок.",
              "Безпека винесена в окремий напрям, а не захована в кінці статей.",
            ].map((item) => (
              <div key={item} className="surface rounded-[2rem] p-6 text-sm leading-7 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Маршрути"
            title="Добрі перші напрямки для спокійного знайомства з Карпатами"
            description="Невеликий набір маршрутів, які підходять для першого сезону, коли важливо відчути темп, рельєф і власні сили."
          />
          <Link href="/routes" className="hidden text-sm font-medium text-emerald-200 hover:text-emerald-100 lg:block">
            Усі маршрути
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredRoutes.map((route) => (
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

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Матеріали"
            title="Практичні статті для підготовки до одноденного чи першого серйознішого виходу"
            description="Почали з найважливішого: пакування, прогноз, туман, гроза, базова дисципліна в горах."
          />
          <Link href="/blog" className="hidden text-sm font-medium text-emerald-200 hover:text-emerald-100 lg:block">
            Перейти в блог
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredPosts.map((post) => (
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

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-[0.9fr,1.1fr] lg:px-8">
        <SectionHeading
          eyebrow="Спорядження"
          title="Почніть з бази, яка працює"
          description="Без складних списків на десятки позицій. Лише те, що реально впливає на комфорт, безпеку та ритм походу."
        />
        <div className="grid gap-6">
          {featuredEquipment.map((guide) => (
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

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="surface grid rounded-[2.5rem] p-8 lg:grid-cols-[1fr,0.8fr] lg:p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-sky-200/70">Безпека</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Підготовка важливіша за героїзм на маршруті.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Перед виїздом перевірте погоду у двох джерелах, залиште близьким план маршруту, оцініть свій темп і
              завжди майте рішення для розвороту. Це не обережність заради галочки, а нормальна практика відповідального походу.
            </p>
          </div>
          <div className="mt-8 space-y-4 lg:mt-0">
            {[
              "Не йдіть у грозу на відкритий хребет або вершину.",
              "У тумані сповільнюйтесь і тримайте групу компактно.",
              "План виходу має враховувати запас світла на спуск.",
              "Якщо маршрут перестає бути контрольованим, розвернутися нормально.",
            ].map((tip) => (
              <div key={tip} className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 px-5 py-4 text-sm text-slate-200">
                {tip}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

