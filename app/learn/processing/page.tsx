import Link from "next/link";

import { APP_NAME, APP_SUBTITLE } from "@/lib/brand";
import { processingMethods } from "@/lib/curriculum";

const comparisonHead = [
  "方法",
  "残す部位",
  "発酵",
  "乾燥",
  "風味傾向",
];

export default function ProcessingPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f0e7_0%,#efe5d8_100%)]">
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
        <section className="rounded-[2.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,#fcfaf7_0%,#f3ebdf_100%)] p-6 shadow-[0_30px_80px_rgba(54,36,20,0.08)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Link href="/learn" className="text-sm font-semibold text-stone-500 hover:text-stone-800">
                ← 学習マップへ
              </Link>
              <div className="mt-4">
                <p className="text-xs font-bold tracking-[0.34em] text-stone-500">{APP_NAME}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-stone-400">{APP_SUBTITLE}</p>
              </div>
              <p className="mt-4 text-xs font-bold tracking-[0.18em] text-stone-500">CHAPTER 02 · PROCESSING</p>
              <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-[var(--accent-strong)] md:text-5xl">
                精製方法を、
                <br />
                工程と味から理解する
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--ink-soft)] md:text-base">
                精製方法は、コーヒーチェリーのどの部位を残すか、発酵をどう扱うか、どう乾かすかの設計です。
                名前を覚えるだけでなく、工程と味のつながりで整理します。
              </p>
            </div>

            <div className="rounded-[1.9rem] border border-stone-200 bg-white/72 p-5 backdrop-blur">
              <p className="text-xs font-bold tracking-[0.18em] text-stone-500">この章で分かること</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl bg-stone-50 p-4">
                  <p className="text-sm font-bold text-stone-900">工程の違い</p>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    果肉やミューシレージを残すかどうかで、味の方向がどう変わるか。
                  </p>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4">
                  <p className="text-sm font-bold text-stone-900">発酵の考え方</p>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    自然発酵、嫌気発酵、酵母発酵など、発酵の設計と個性の関係。
                  </p>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4">
                  <p className="text-sm font-bold text-stone-900">飲み比べの視点</p>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    初心者がどこに注目すると差を感じやすいか。
                  </p>
                </div>
              </div>
              <Link
                href="/learn/processing-simulator"
                className="mt-5 inline-flex rounded-full bg-[var(--accent-strong)] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--accent)]"
              >
                シミュレーターで体験する
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-stone-500">Comparison view</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900">まずは一覧で比較する</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-stone-500">
              すべてを一度に暗記するより、残す部位、発酵、乾燥、風味傾向の4軸で並べると理解しやすくなります。
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.6rem] border border-stone-200 bg-white">
            <div className="hidden grid-cols-[1.1fr_1.2fr_1fr_1fr_1.2fr] border-b border-stone-200 bg-stone-50 px-4 py-3 md:grid">
              {comparisonHead.map((item) => (
                <p key={item} className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-500">
                  {item}
                </p>
              ))}
            </div>

            <div className="divide-y divide-stone-200">
              {processingMethods.map((method) => (
                <div key={method.id} className="grid gap-3 px-4 py-4 md:grid-cols-[1.1fr_1.2fr_1fr_1fr_1.2fr] md:items-start">
                  <div>
                    <p className="text-base font-black tracking-tight text-stone-900">{method.name}</p>
                    {method.aliases?.length ? (
                      <p className="mt-1 text-xs text-stone-500">{method.aliases.join(" / ")}</p>
                    ) : null}
                  </div>
                  <p className="text-sm leading-6 text-stone-600">
                    <span className="mr-2 inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-stone-400 md:hidden">残す部位</span>
                    {method.remains}
                  </p>
                  <p className="text-sm leading-6 text-stone-600">
                    <span className="mr-2 inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-stone-400 md:hidden">発酵</span>
                    {method.fermentation}
                  </p>
                  <p className="text-sm leading-6 text-stone-600">
                    <span className="mr-2 inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-stone-400 md:hidden">乾燥</span>
                    {method.drying}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {method.flavor.map((note) => (
                      <span key={note} className="rounded-full bg-stone-100 px-2.5 py-1 text-[11px] font-semibold text-stone-600">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <p className="text-xs font-bold tracking-[0.18em] text-stone-500">Method library</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900">精製方法ごとの深掘り</h2>

          <div className="mt-6 grid gap-5">
            {processingMethods.map((method) => (
              <article key={method.id} className="rounded-[1.8rem] border border-stone-200 bg-white p-5 md:p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-black tracking-tight text-stone-900">{method.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-stone-600">{method.oneLine}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {method.regions.map((region) => (
                      <span key={region} className="rounded-full bg-stone-100 px-3 py-1 text-[11px] font-semibold text-stone-600">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-2xl bg-stone-50 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-500">工程</p>
                    <ol className="mt-3 space-y-2">
                      {method.process.map((step, index) => (
                        <li key={step} className="flex gap-3 text-sm leading-6 text-stone-700">
                          <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-stone-700">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-2xl bg-stone-50 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-500">工程設計の要点</p>
                      <div className="mt-3 space-y-2 text-sm leading-6 text-stone-700">
                        <p><span className="font-bold text-stone-900">残す部位:</span> {method.remains}</p>
                        <p><span className="font-bold text-stone-900">発酵:</span> {method.fermentation}</p>
                        <p><span className="font-bold text-stone-900">乾燥:</span> {method.drying}</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-stone-50 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-500">飲み比べの注目ポイント</p>
                      <p className="mt-3 text-sm leading-6 text-stone-700">{method.compareFocus}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-stone-50 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-500">風味傾向</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {method.flavor.map((note) => (
                        <span key={note} className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-stone-600">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-stone-50 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-500">メリット</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-700">
                      {method.merits.map((item) => (
                        <li key={item}>・{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-stone-50 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-500">デメリット</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-700">
                      {method.drawbacks.map((item) => (
                        <li key={item}>・{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
