import { PageShell } from "@/components/page-shell";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "Контакти | Гірський Блок",
  description: "Сторінка контактів для зворотного зв’язку, пропозицій співпраці та розвитку українського hiking-проєкту.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageShell
        eyebrow="Контакти"
        title="Якщо хочете запропонувати тему, маршрут або співпрацю, напишіть нам."
        description="На старті це невеликий контентний проєкт, тому ми особливо цінуємо зворотний зв’язок від людей, які реально ходять у гори та хочуть бачити більше якісного українського контенту."
      />
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="surface rounded-[2.5rem] p-8">
            <h2 className="text-3xl font-semibold text-white">Напрями для листа</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <li className="rounded-2xl bg-slate-950/35 px-4 py-3">Пропозиції нових тем про спорядження, сезонність чи безпеку.</li>
              <li className="rounded-2xl bg-slate-950/35 px-4 py-3">Поради щодо маршрутів для початківців та сімейних виїздів.</li>
              <li className="rounded-2xl bg-slate-950/35 px-4 py-3">Ідеї партнерств для розвитку корисного українського outdoor-контенту.</li>
            </ul>
          </div>
          <div className="surface rounded-[2.5rem] p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-200/70">Email</p>
            <p className="mt-4 text-3xl font-semibold text-white">{siteConfig.email}</p>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Якщо звернення стосується безпеки на конкретному маршруті, напишіть сезон, регіон, склад групи та
              орієнтовний формат походу. Так легше підказати релевантний напрям матеріалів або наступних тем для сайту.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

