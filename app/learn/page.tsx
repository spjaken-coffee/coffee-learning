import Link from "next/link";

import { APP_NAME, APP_SUBTITLE } from "@/lib/brand";
import { chapterCatalog, learningTools, recommendedRoute } from "@/lib/curriculum";

const progressSummary = [
  { label: "理解する章", value: `${chapterCatalog.length}` },
  { label: "使えるツール", value: `${learningTools.length}` },
  { label: "次の追加候補", value: "Glossary / Quiz / Flavor" },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f0e7_0%,#efe5d8_100%)]">
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
        <section className="rounded-[2.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,#fcfaf7_0%,#f3ebdf_100%)] p-6 shadow-[0_30px_80px_rgba(54,36,20,0.08)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Link href="/" className="text-sm font-semibold text-stone-500 hover:text-stone-800">
                ← ホームへ
              </Link>
              <div className="mt-4">
                <p className="text-xs font-bold tracking-[0.34em] text-stone-500">{APP_NAME}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-stone-400">{APP_SUBTITLE}</p>
              </div>
              <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[var(--accent-strong)] md:text-5xl">
                農園からカップまでを
                <br />
                順番に理解する学習マップ
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--ink-soft)] md:text-base">
                今どの工程を学んでいるのか、次に何を見れば理解が深まるのかを迷わずたどれるようにした画面です。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {progressSummary.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-stone-200 bg-white/75 px-4 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-400">{item.label}</p>
                    <p className="mt-1 text-sm font-bold text-stone-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-stone-200 bg-white/72 p-5 backdrop-blur">
              <p className="text-xs font-bold tracking-[0.18em] text-stone-500">おすすめルート</p>
              <div className="mt-4 space-y-3">
                {recommendedRoute.map((step, index) => (
                  <Link
                    key={step.label}
                    href={step.href}
                    className="group flex gap-4 rounded-2xl border border-stone-200 bg-stone-50/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-strong)] text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
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

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-stone-500">Journey map</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900">章ごとの学習フロー</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-stone-500">
                各章は問い、学習ゴール、使うUIまで整理してあり、どこをどう学ぶかが分かります。
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {chapterCatalog.map((chapter, index) => (
                <Link
                  key={chapter.id}
                  href={chapter.href}
                  className="grid gap-4 rounded-[1.65rem] border border-stone-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md md:grid-cols-[96px_1fr_auto] md:items-center"
                >
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-400">{chapter.theme}</p>
                    <p className="mt-1 text-3xl font-black tracking-tight text-[var(--accent-strong)]">{chapter.number}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{chapter.emoji}</span>
                      <h3 className="text-xl font-black tracking-tight text-stone-900">{chapter.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{chapter.summary}</p>
                    <p className="mt-3 text-xs font-semibold text-stone-500">問い: {chapter.question}</p>
                    <p className="mt-2 text-xs leading-5 text-stone-500">学習ゴール: {chapter.outcome}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {chapter.formats.map((format) => (
                        <span key={format} className="rounded-full bg-stone-100 px-2.5 py-1 text-[11px] font-semibold text-stone-600">
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:flex-col md:items-end">
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
                      {chapter.estimatedMinutes} min
                    </span>
                    <span className="text-sm font-bold text-[var(--accent)]">
                      {index === 0 ? "ここから始める →" : "開く →"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-xs font-bold tracking-[0.18em] text-stone-500">Interactive tools</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-stone-900">触って理解する機能</h2>
              <div className="mt-5 space-y-3">
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
            </section>

            <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--accent-strong)] p-6 text-white">
              <p className="text-xs font-bold tracking-[0.18em] text-stone-300">Next additions</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight">次に追加する学習体験</h2>
              <div className="mt-5 space-y-3 text-sm leading-6 text-stone-200">
                <p>・精製比較シミュレーターの拡張</p>
                <p>・焙煎度スライダーと味変化チャート</p>
                <p>・抽出パラメーター実験室</p>
                <p>・フレーバートレーニングと復習クイズ</p>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
