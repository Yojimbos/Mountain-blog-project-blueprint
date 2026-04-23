import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.18),_transparent_30%),radial-gradient(circle_at_70%_20%,_rgba(125,211,252,0.18),_transparent_25%),linear-gradient(180deg,_rgba(2,6,23,0.18),_rgba(2,6,23,0.75))]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.95))]" />
      <div className="absolute inset-x-0 bottom-0 h-64 opacity-50">
        <div className="absolute bottom-0 left-0 h-48 w-[45%] rounded-tr-[8rem] bg-slate-800/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-[55%] rounded-tl-[8rem] bg-emerald-950/40 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr,0.9fr] lg:px-8 lg:py-28">
        <div>
          <p className="text-sm uppercase tracking-[0.34em] text-emerald-200/70">Український путівник у гори</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Маршрути, спорядження та спокійна підготовка до гірських походів.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Ми зібрали стартову базу для тих, хто хоче йти в гори впевнено: з перевіреним списком речей,
            практичними маршрутами для новачків і порадами, які допомагають не панікувати в складних умовах.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/routes"
              className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              Дивитися маршрути
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Читати матеріали
            </Link>
          </div>
        </div>
        <div className="grid gap-4 self-end sm:grid-cols-2">
          {[
            ["8+", "стартових матеріалів українською"],
            ["3", "маршрути для першого спокійного виїзду"],
            ["0", "зайвої складності та порожніх сторінок"],
            ["MVP", "готовий до подальшого Azure-розвитку"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-sm">
              <div className="text-4xl font-semibold text-white">{value}</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

