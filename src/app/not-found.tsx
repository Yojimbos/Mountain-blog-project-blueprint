import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-6 text-center lg:px-8">
      <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/70">404</p>
      <h1 className="mt-5 text-5xl font-semibold text-white">Сторінку не знайдено</h1>
      <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
        Можливо, матеріал ще в роботі або адреса змінилася. Спробуйте повернутися на головну і перейти через меню.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950">
        На головну
      </Link>
    </section>
  );
}

