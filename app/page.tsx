import Link from "next/link";

import { APP_NAME, APP_SUBTITLE } from "@/lib/brand";
import { chapterCatalog, experiencePillars, learningTools, recommendedRoute } from "@/lib/curriculum";

const stats = [
  { label: "Chapters", value: "5" },
  { label: "Interactive tools", value: "3" },
  { label: "Core themes", value: "Cherry to Cup" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f0e7_0%,#efe5d8_100%)]">
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
        <section className="relative overflow-hidden rounded-[2.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,#fcfaf7_0%,#f3ebdf_100%)] px-6 py-8 shadow-[0_30px_80px_rgba(54,36,20,0.08)] md:px-10 md:py-12">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute -right-12 top-8 h-56 w-56 rounded-full bg-[rgba(161,117,60,0.12)] blur-3xl" />
            <div className="absolute left-1/3 top-0 h-40 w-40 rounded-full bg-[rgba(93,126,82,0.10)] blur-3xl" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="inline-flex flex-col gap-1">
                <span className="text-xs font-bold tracking-[0.34em] text-stone-500">{APP_NAME}</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-stone-400">{APP_SUBTITLE}</span>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-[var(--accent-strong)] md:text-6xl">
                農園からカップまでを旅する
                <br />
                体験型コーヒー学習ツール
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--ink-soft)] md:text-lg">
                スペシャルティコーヒーの味づくりを、チェリー、精製、焙煎、抽出の順で理解する。
                ただ読むのではなく、比較し、選び、つながりを見つけながら学べる設計に変えていきます。
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/learn"
                  className="rounded-full bg-[var(--accent-strong)] px-6 py-3 text-center text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent)]"
                >
                  学習マップを開く
                </Link>
                <Link
                  href="/learn/processing"
                  className="rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-center text-sm font-bold text-stone-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
                >
                  精製方法から入る
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 backdrop-blur">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400">{stat.label}</p>
                    <p className="mt-1 text-sm font-bold text-stone-900">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-stone-200 bg-[rgba(255,255,255,0.72)] p-5 backdrop-blur">
              <p className="text-xs font-bold tracking-[0.18em] text-stone-500">Learning route</p>
              <div className="mt-4 space-y-3">
                {recommendedRoute.map((step, index) => (
                  <Link
                    key={step.label}
                    href={step.href}
                    className="group flex gap-4 rounded-2xl border border-stone-200 bg-white/85 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-strong)] text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400">{step.label}</p>
                      <p className="mt-1 text-base font-bold text-stone-900">{step.title}</p>
                      <p className="mt-1 text-sm leading-6 text-stone-600">{step.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-xs font-bold tracking-[0.18em] text-stone-500">Why this app</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900">
              “読む教材”から
              <br />
              “触って学ぶ図鑑”へ
            </h2>
            <div className="mt-6 grid gap-3">
              {experiencePillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-sm font-bold text-stone-900">{pillar.title}</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{pillar.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-stone-500">Tools</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900">体験の入口</h2>
              </div>
              <Link href="/learn" className="text-sm font-bold text-[var(--accent)] hover:text-[var(--accent-strong)]">
                学習マップへ →
              </Link>
            </div>

            <div className="mt-6 space-y-3">
              {learningTools.map((tool) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-stone-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div>
                    <span className="rounded-full bg-stone-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-stone-500">
                      {tool.badge}
                    </span>
                    <p className="mt-3 text-base font-bold text-stone-900">{tool.title}</p>
                    <p className="mt-1 text-sm leading-6 text-stone-600">{tool.description}</p>
                  </div>
                  <span className="mt-1 text-xl text-stone-300 transition-colors group-hover:text-[var(--accent)]">›</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-stone-500">Curriculum</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900">学習カリキュラム</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-stone-500">
              各章は「何を理解するか」「どんな問いを持つか」「どんな形式で学ぶか」を持っています。
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {chapterCatalog.map((chapter) => (
              <Link
                key={chapter.id}
                href={chapter.href}
                className="group rounded-[1.6rem] border border-stone-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400">
                      {chapter.theme} · {chapter.number}
                    </p>
                    <h3 className="mt-2 text-xl font-black tracking-tight text-stone-900">{chapter.title}</h3>
                  </div>
                  <span className="text-2xl">{chapter.emoji}</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-stone-600">{chapter.summary}</p>
                <p className="mt-4 text-xs font-semibold text-stone-500">問い: {chapter.question}</p>
                <p className="mt-3 text-xs leading-5 text-stone-500">学習ゴール: {chapter.outcome}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {chapter.formats.map((format) => (
                    <span key={format} className="rounded-full bg-stone-100 px-2.5 py-1 text-[11px] font-semibold text-stone-600">
                      {format}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-500">目安 {chapter.estimatedMinutes} min</span>
                  <span className="text-sm font-bold text-[var(--accent)] transition-colors group-hover:text-[var(--accent-strong)]">
                    開く →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
