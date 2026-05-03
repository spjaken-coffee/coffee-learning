import Link from "next/link";

import { APP_NAME, APP_SUBTITLE } from "@/lib/brand";

const journeySteps = [
  {
    chapter: "Chapter 01",
    emoji: "🍒",
    title: "コーヒーチェリーを知る",
    summary: "コーヒーは最初から豆ではなく果実で、各層が後の風味に関わります。",
  },
  {
    chapter: "Chapter 02",
    emoji: "☀️",
    title: "精製方法を知る",
    summary: "果肉を残すか、洗うか、発酵させるかで、甘みや酸、発酵感が変わります。",
  },
  {
    chapter: "Chapter 03",
    emoji: "🔥",
    title: "生豆から焙煎へ",
    summary: "素材の個性をどこまで残すか、どこから焙煎の香ばしさを前に出すかを決めます。",
  },
  {
    chapter: "Chapter 04",
    emoji: "⚙️",
    title: "挽き目と抽出の科学",
    summary: "最後は挽き目や時間で、味の見え方を整えてカップに仕上げます。",
  },
];

export default function JourneyPage() {
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
          <p className="mt-4 text-xs font-bold tracking-[0.18em] text-stone-500">CHAPTER 05</p>
          <h1 className="mt-3 text-3xl font-black text-[var(--accent-strong)] md:text-4xl">知識を一杯につなげよう</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--ink-soft)]">
            コーヒーの味は、どこか一箇所だけで決まるわけではありません。
            果実、精製、焙煎、抽出が重なって、最後の一杯になります。
          </p>
        </div>

        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-stone-900">一杯ができるまでの流れ</h2>
            <p className="mt-2 text-sm leading-7 text-stone-600">
              ここまで学んだ内容を、ストーリーとして一本につなげると全体像が見えやすくなります。
            </p>
          </div>

          <div className="space-y-4">
            {journeySteps.map((step, index) => (
              <div key={step.chapter} className="flex gap-4 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-stone-500">{step.chapter}</p>
                  <h3 className="mt-1 text-lg font-bold text-stone-900">
                    {step.emoji} {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{step.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-stone-900">このアプリの今の完成形</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-stone-50 p-4">
              <p className="text-sm font-bold text-stone-900">スマホで使いやすい流れ</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                1画面1テーマで読みやすく、選択式の章は片手でも進めやすい構成にしています。
              </p>
            </div>
            <div className="rounded-2xl bg-stone-50 p-4">
              <p className="text-sm font-bold text-stone-900">次の改善余地</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                学習履歴の保存、クイズ化、焙煎と抽出の分岐追加で、さらに遊びながら学べる形にできます。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-stone-200 bg-stone-900 p-6 text-white">
          <p className="text-xs font-bold tracking-[0.2em] text-stone-300">START AGAIN</p>
          <h2 className="mt-2 text-2xl font-bold">もう一度、好きな入口から学ぶ</h2>
          <p className="mt-3 text-sm leading-7 text-stone-300">
            一周したあとに戻ると、最初は見えなかったつながりがかなり見えてきます。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/learn/processing-simulator"
              className="rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-stone-900 transition-colors hover:bg-stone-100"
            >
              ☀️ 精製シミュレーターへ
            </Link>
            <Link
              href="/learn/roasting"
              className="rounded-full border border-stone-600 px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-stone-800"
            >
              🔥 焙煎シミュレーターへ
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
