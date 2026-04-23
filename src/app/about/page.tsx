import { PageShell } from "@/components/page-shell";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Про проєкт | Гірський Блок",
  description: "Що таке Гірський Блок, для кого створений сайт і як ми готуємо практичний контент про гори.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageShell
        eyebrow="Про проєкт"
        title="Гірський Блок народився як спокійна й практична база для тих, хто збирається в гори."
        description="Ми не будуємо культ складності. Навпаки, збираємо матеріали так, щоб людина могла відкрити сайт, зрозуміти, з чого почати, і зробити наступний крок без зайвої тривоги."
      />
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Практичність", "Кожен матеріал відповідає на реальне запитання: що взяти, як оцінити погоду, коли краще розвернутися."],
            ["Людяний тон", "Тексти написані не канцелярською мовою, а так, ніби ви радитесь із уважним напарником перед виїздом."],
            ["Масштабованість", "Ми стартуємо з простого контентного MVP, але закладаємо структуру для розвитку в повноцінну платформу."],
          ].map(([title, description]) => (
            <div key={title} className="surface rounded-[2rem] p-6">
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 surface rounded-[2.5rem] p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-white">Що далі</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            Далі цей MVP може розширюватися в напрямі SEO, аналітики, персональних підбірок маршрутів, хмарного
            розгортання в Azure та більш складної контентної моделі. Але на старті головне інше: дати людям корисний і
            добре структурований український ресурс.
          </p>
        </div>
      </section>
    </>
  );
}

