import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Безпека | Гірський Блок",
  description: "Базові правила безпеки в горах: підготовка, комунікація, поведінка під час туману та грози, дисципліна групи.",
  path: "/safety",
});

export default function SafetyPage() {
  return (
    <>
      <PageShell
        eyebrow="Безпека"
        title="У горах виграє не той, хто ризикує, а той, хто заздалегідь приймає тверезі рішення."
        description="Безпека починається не на маршруті, а вдома: з оцінки погоди, темпу, спорядження, запасу часу та чесної розмови із собою про власну готовність."
      />
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Перед виходом",
              items: [
                "Перевірте прогноз у кількох джерелах і зверніть увагу не лише на температуру, а й на вітер, опади та грозову активність.",
                "Залиште близьким план маршруту, орієнтовний час повернення та контактні дані учасників.",
                "Підготуйте план скорочення або розвороту ще до виїзду.",
              ],
            },
            {
              title: "Під час маршруту",
              items: [
                "Тримайте темп, який дозволяє говорити без задишки, особливо на старті підйому.",
                "Не розтягуйте групу так, щоб люди втрачали зоровий контакт на розвилках або в тумані.",
                "Регулярно пийте воду та робіть короткі контрольні зупинки замість довгих виснажливих пауз.",
              ],
            },
            {
              title: "Туман і гроза",
              items: [
                "У тумані сповільніться, звірте трек, карту та навколишні орієнтири, не приймайте поспішних рішень.",
                "Під час грози уникайте хребтів, поодиноких дерев, металевих конструкцій та відкритих вершин.",
                "Якщо ситуація погіршується, пріоритетом стає безпечний вихід, а не виконання первісного плану.",
              ],
            },
            {
              title: "Коли варто розвертатися",
              items: [
                "Коли темп групи помітно нижчий за плановий, а світловий день обмежений.",
                "Коли погода змінюється швидше, ніж ви встигаєте адаптувати маршрут.",
                "Коли хтось із учасників мерзне, втрачає концентрацію, починає помилятися на простих діях або явно виснажується.",
              ],
            },
          ].map((section) => (
            <div key={section.title} className="surface rounded-[2rem] p-7">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                {section.items.map((item) => (
                  <li key={item} className="rounded-2xl bg-slate-950/35 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 surface rounded-[2.5rem] p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-white">Корисні матеріали поруч</h2>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-emerald-200">
            <Link href="/blog/yak-pereviryaty-pohodu-pered-pohodom" className="rounded-full border border-emerald-300/30 px-4 py-2 hover:bg-emerald-300/10">
              Як перевіряти погоду перед походом
            </Link>
            <Link href="/blog/shcho-robyty-v-tumani-abo-pid-chas-hrozy" className="rounded-full border border-emerald-300/30 px-4 py-2 hover:bg-emerald-300/10">
              Що робити в тумані або під час грози
            </Link>
            <Link href="/blog/bezpeka-v-horakh" className="rounded-full border border-emerald-300/30 px-4 py-2 hover:bg-emerald-300/10">
              Безпека в горах
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

