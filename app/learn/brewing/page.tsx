import Link from "next/link";

import { APP_NAME, APP_SUBTITLE } from "@/lib/brand";

const grindGuide = [
  {
    name: "粗挽き",
    example: "フレンチプレス、カッピング",
    effect: "抽出がゆっくり進みやすく、重さや甘さを出しやすい。",
    risk: "短時間だと薄くなりやすい。",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    name: "中挽き",
    example: "ハンドドリップの標準",
    effect: "バランスが取りやすく、最初の基準点にしやすい。",
    risk: "レシピとの差で味の振れ幅が出る。",
    color: "bg-amber-50 border-amber-200",
  },
  {
    name: "細挽き",
    example: "エスプレッソ、短時間抽出",
    effect: "抽出が速く進みやすく、濃度を上げやすい。",
    risk: "行き過ぎると渋みや苦味が出やすい。",
    color: "bg-orange-50 border-orange-200",
  },
];

const extractionHints = [
  {
    title: "薄くて酸っぱい",
    detail: "未抽出の可能性があります。少し細かくするか、抽出時間を伸ばします。",
  },
  {
    title: "苦くて重い",
    detail: "過抽出の可能性があります。少し粗くするか、抽出時間を短くします。",
  },
  {
    title: "ぼやけている",
    detail: "粉量、湯量、時間の基準が揃っていないかもしれません。1つずつ調整します。",
  },
];

export default function BrewingPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f1e9_0%,#efe6db_100%)]">
      <main className="mx-auto max-w-4xl px-4 py-6 md:py-10">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] px-6 py-8 shadow-[0_20px_60px_rgba(58,35,20,0.08)]">
          <Link href="/learn" className="text-sm font-semibold text-stone-500 hover:text-stone-800">
            ← 学習マップへ
          </Link>
          <div className="mt-4">
            <p className="text-xs font-bold tracking-[0.28em] text-stone-500">{APP_NAME}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-stone-400">{APP_SUBTITLE}</p>
          </div>
          <p className="mt-4 text-xs font-bold tracking-[0.18em] text-stone-500">CHAPTER 04</p>
          <h1 className="mt-3 text-3xl font-black text-[var(--accent-strong)] md:text-4xl">挽き目で味はどう動く？</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--ink-soft)]">
            粉が細かいほど表面積が増え、抽出は進みやすくなります。
            だからこそ、挽き目は味を整える大きなレバーになります。
          </p>
        </div>

        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-stone-900">粒度の基礎</h2>
            <p className="mt-2 text-sm leading-7 text-stone-600">
              まずは粗挽き・中挽き・細挽きの3つで、抽出スピードの違いを理解すると全体が見えやすくなります。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {grindGuide.map((grind) => (
              <div key={grind.name} className={`rounded-3xl border p-5 ${grind.color}`}>
                <h3 className="text-lg font-bold text-stone-900">{grind.name}</h3>
                <p className="mt-2 text-sm font-medium text-stone-700">向いている器具: {grind.example}</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">{grind.effect}</p>
                <p className="mt-3 text-xs leading-5 text-stone-500">注意点: {grind.risk}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-yellow-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-stone-900">味から逆算するヒント</h2>
          <div className="mt-4 space-y-3">
            {extractionHints.map((hint) => (
              <div key={hint.title} className="rounded-2xl bg-yellow-50 px-4 py-3">
                <p className="text-sm font-bold text-stone-900">{hint.title}</p>
                <p className="mt-1 text-sm leading-6 text-stone-600">{hint.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-stone-200 bg-stone-900 p-6 text-white">
          <p className="text-xs font-bold tracking-[0.2em] text-yellow-300">NEXT</p>
          <h2 className="mt-2 text-2xl font-bold">知識を一杯につなげよう</h2>
          <p className="mt-3 text-sm leading-7 text-stone-300">
            次は、精製や焙煎でできた個性が抽出でどう現れるかを、全体の流れとして復習できます。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/learn/journey"
              className="rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-stone-900 transition-colors hover:bg-stone-100"
            >
              ☕ 総復習チャプターへ
            </Link>
            <Link
              href="/learn"
              className="rounded-full border border-stone-600 px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-stone-800"
            >
              ☕ 学習マップへ
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
