"use client";

import Link from "next/link";
import { useState } from "react";

import { APP_NAME, APP_SUBTITLE } from "@/lib/brand";

type StepId = "start" | "goal";
type ResultId = "light" | "medium" | "dark";

type HistoryItem = {
  stepLabel: string;
  choiceLabel: string;
};

type Choice = {
  id: string;
  label: string;
  sublabel?: string;
  next: StepId | ResultId;
};

type Step = {
  id: StepId;
  question: string;
  hint?: string;
  choices: Choice[];
};

type Result = {
  id: ResultId;
  name: string;
  tagline: string;
  description: string;
  whyItLands: string;
  flavorNotes: string[];
  matches: string[];
  nextStudyHref: string;
  nextStudyLabel: string;
  toneClass: string;
  badgeClass: string;
  tagClass: string;
};

const STEP_LABELS: Record<StepId, string> = {
  start: "素材の個性",
  goal: "仕上げたい方向",
};

const STEPS: Record<StepId, Step> = {
  start: {
    id: "start",
    question: "この豆の魅力をどこに置きたいですか？",
    hint: "最初に残したい個性を決めると、焙煎の方向がぶれにくくなります。",
    choices: [
      {
        id: "fruit",
        label: "果実感や明るい酸を活かしたい",
        sublabel: "素材の輪郭をはっきり見せたい",
        next: "goal",
      },
      {
        id: "sweet",
        label: "甘みと飲みやすさを中心にしたい",
        sublabel: "毎日飲みやすいバランスに寄せたい",
        next: "goal",
      },
      {
        id: "body",
        label: "重さやコクを強く出したい",
        sublabel: "香ばしさやビター感を前に出したい",
        next: "goal",
      },
    ],
  },
  goal: {
    id: "goal",
    question: "焙煎で最終的にどんな印象に仕上げたいですか？",
    hint: "残すか、整えるか、押し出すかで焙煎度の考え方が変わります。",
    choices: [
      {
        id: "clarity",
        label: "透明感と輪郭を残したい",
        sublabel: "酸や香りをくっきり感じたい",
        next: "light",
      },
      {
        id: "balance",
        label: "甘みと酸味のバランスを取りたい",
        sublabel: "飲みやすさと個性を両立したい",
        next: "medium",
      },
      {
        id: "bitter",
        label: "香ばしさとボディを強めたい",
        sublabel: "ビター感と余韻を深くしたい",
        next: "dark",
      },
    ],
  },
};

const RESULTS: Record<ResultId, Result> = {
  light: {
    id: "light",
    name: "浅煎り",
    tagline: "素材の輪郭をそのまま見せる焙煎",
    description:
      "火の入りを浅めで止めることで、果実感や花のような香り、明るい酸を残しやすい焙煎度です。精製や産地の違いも感じ取りやすくなります。",
    whyItLands:
      "素材の個性を活かしたい方向を選び、さらに透明感を残したい狙いを選んだため、焙煎を強くかけすぎない浅煎りに向かいました。",
    flavorNotes: ["明るい酸", "フローラル", "柑橘感", "軽やか"],
    matches: ["ウォッシュト", "フルーティーなナチュラル", "産地比較"],
    nextStudyHref: "/learn/brewing",
    nextStudyLabel: "浅煎りの抽出を学ぶ",
    toneClass: "border-orange-200 bg-orange-50",
    badgeClass: "bg-orange-100 text-orange-800",
    tagClass: "bg-orange-200 text-orange-800",
  },
  medium: {
    id: "medium",
    name: "中煎り",
    tagline: "甘みと個性のバランスを取りやすい焙煎",
    description:
      "酸味を少し落ち着かせながら、甘さや香ばしさを引き出しやすい焙煎度です。素材の良さを残しながら、飲みやすさも作りやすい帯です。",
    whyItLands:
      "甘みと飲みやすさ、そして全体のまとまりを重視したため、素材感と焙煎由来の甘さを両立しやすい中煎りに向かいました。",
    flavorNotes: ["甘み", "ナッツ感", "キャラメル感", "バランス"],
    matches: ["ハニー", "標準的なドリップ", "毎日の一杯"],
    nextStudyHref: "/learn/brewing",
    nextStudyLabel: "中煎りの抽出バランスを学ぶ",
    toneClass: "border-amber-200 bg-amber-50",
    badgeClass: "bg-amber-100 text-amber-800",
    tagClass: "bg-amber-200 text-amber-800",
  },
  dark: {
    id: "dark",
    name: "深煎り",
    tagline: "香ばしさとコクを前に出す焙煎",
    description:
      "焙煎を深めることで、ビター感や重さ、チョコレートのような印象を作りやすい焙煎度です。焙煎由来の存在感が前に出やすくなります。",
    whyItLands:
      "重さやコクを出したい方向を選び、さらに香ばしさとボディを強めたい狙いを選んだため、深煎りが合う結果になりました。",
    flavorNotes: ["ビター", "チョコ感", "重いボディ", "長い余韻"],
    matches: ["ウェットハル", "ミルクと合わせたいとき", "重厚な印象"],
    nextStudyHref: "/learn/brewing",
    nextStudyLabel: "深煎りの抽出調整を学ぶ",
    toneClass: "border-stone-300 bg-stone-100",
    badgeClass: "bg-stone-300 text-stone-900",
    tagClass: "bg-stone-300 text-stone-900",
  },
};

const RESULT_IDS = new Set<string>(["light", "medium", "dark"]);

function isResultId(id: string): id is ResultId {
  return RESULT_IDS.has(id);
}

export default function RoastingPage() {
  const [currentStep, setCurrentStep] = useState<StepId>("start");
  const [result, setResult] = useState<ResultId | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleChoice = (choice: Choice) => {
    setHistory((prev) => [
      ...prev,
      {
        stepLabel: STEP_LABELS[currentStep],
        choiceLabel: choice.label,
      },
    ]);

    if (isResultId(choice.next)) {
      setResult(choice.next);
      return;
    }

    setCurrentStep(choice.next);
  };

  const reset = () => {
    setCurrentStep("start");
    setResult(null);
    setHistory([]);
  };

  const step = STEPS[currentStep];
  const resultData = result ? RESULTS[result] : null;
  const progress = result ? history.length : history.length + 1;

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f1e9_0%,#efe6db_100%)]">
      <main className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-10">
        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_60px_rgba(58,35,20,0.08)] md:p-8">
          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            <aside className="space-y-4">
              <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">
                <Link href="/learn" className="text-sm font-semibold text-stone-500 hover:text-stone-800">
                  ← 学習マップへ
                </Link>
                <div className="mt-4">
                  <p className="text-xs font-bold tracking-[0.28em] text-stone-500">{APP_NAME}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-stone-400">{APP_SUBTITLE}</p>
                </div>
                <p className="mt-4 text-xs font-bold tracking-[0.18em] text-stone-500">CHAPTER 03</p>
                <h1 className="mt-2 text-2xl font-black tracking-tight text-[var(--accent-strong)]">
                  焙煎でどんな味に向かうか学ぶ
                </h1>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                  素材の個性を残すのか、整えるのか、押し出すのか。焙煎の判断軸をシンプルに整理します。
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                <p className="text-xs font-bold tracking-[0.18em] text-stone-500">今の学習ポイント</p>
                <p className="mt-3 text-sm font-bold text-stone-900">
                  {result ? "結果から焙煎度の考え方を整理する段階です。" : step.question}
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {result ? "なぜその焙煎度になったかを確認して、抽出とのつながりに進みます。" : step.hint}
                </p>
                <div className="mt-4 rounded-full bg-stone-100 p-1">
                  <div
                    className="h-2 rounded-full bg-[var(--accent)] transition-all"
                    style={{ width: `${Math.min((progress / 3) * 100, 100)}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-stone-500">学習の進行: {Math.min(progress, 3)} / 3</p>
              </div>

              {history.length > 0 && (
                <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                  <p className="text-xs font-bold tracking-[0.18em] text-stone-500">選択履歴</p>
                  <div className="mt-4 space-y-3">
                    {history.map((item, index) => (
                      <div key={`${item.stepLabel}-${index}`} className="rounded-2xl bg-stone-50 p-3">
                        <p className="text-xs text-stone-500">{item.stepLabel}</p>
                        <p className="mt-1 text-sm font-bold text-stone-900">{item.choiceLabel}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>

            <section>
              {!result ? (
                <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold tracking-[0.18em] text-stone-500">
                        STEP {history.length + 1}
                      </p>
                      <h2 className="mt-2 text-2xl font-black tracking-tight text-stone-900">
                        {step.question}
                      </h2>
                    </div>
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
                      {STEP_LABELS[currentStep]}
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {step.choices.map((choice) => (
                      <button
                        key={choice.id}
                        onClick={() => handleChoice(choice)}
                        className="rounded-[1.25rem] border border-stone-200 bg-stone-50 p-5 text-left transition-colors hover:border-[var(--accent)] hover:bg-[#f7f2ec]"
                      >
                        <p className="text-base font-bold text-stone-900">{choice.label}</p>
                        {choice.sublabel && (
                          <p className="mt-1 text-sm leading-6 text-stone-600">{choice.sublabel}</p>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={`rounded-[1.75rem] border p-6 md:p-8 ${resultData!.toneClass}`}>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${resultData!.badgeClass}`}>
                        あなたに向いている焙煎度
                      </span>
                      <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900">{resultData!.name}</h2>
                      <p className="mt-2 text-sm font-medium text-stone-700">{resultData!.tagline}</p>
                    </div>
                    <button
                      onClick={reset}
                      className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-bold text-stone-700 transition-colors hover:bg-stone-50"
                    >
                      もう一度試す
                    </button>
                  </div>

                  <div className="mt-6 grid gap-4">
                    <div className="rounded-[1.25rem] bg-white/70 p-4">
                      <p className="text-xs font-bold tracking-[0.18em] text-stone-500">この焙煎度の特徴</p>
                      <p className="mt-2 text-sm leading-7 text-stone-700">{resultData!.description}</p>
                    </div>

                    <div className="rounded-[1.25rem] bg-white/70 p-4">
                      <p className="text-xs font-bold tracking-[0.18em] text-stone-500">なぜこの結果になったか</p>
                      <p className="mt-2 text-sm leading-7 text-stone-700">{resultData!.whyItLands}</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[1.25rem] bg-white/70 p-4">
                        <p className="text-xs font-bold tracking-[0.18em] text-stone-500">風味の特徴</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {resultData!.flavorNotes.map((note) => (
                            <span key={note} className={`rounded-full px-3 py-1 text-xs font-medium ${resultData!.tagClass}`}>
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-[1.25rem] bg-white/70 p-4">
                        <p className="text-xs font-bold tracking-[0.18em] text-stone-500">合いやすいケース</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {resultData!.matches.map((item) => (
                            <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-700">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                      <Link
                        href={resultData!.nextStudyHref}
                        className="rounded-full bg-[var(--accent-strong)] px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[var(--accent)]"
                      >
                        {resultData!.nextStudyLabel}
                      </Link>
                      <Link
                        href="/learn"
                        className="rounded-full border border-stone-300 bg-white px-5 py-3 text-center text-sm font-bold text-stone-700 transition-colors hover:bg-stone-50"
                      >
                        学習マップに戻る
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
