'use client'

import Link from 'next/link'
import { useState } from 'react'

import { APP_NAME, APP_SUBTITLE } from '@/lib/brand'

type StepId = 'start' | 'no_depulp' | 'depulped'
type ResultId = 'natural' | 'anaerobic' | 'washed' | 'honey' | 'wet_hull'

type HistoryItem = {
  stepLabel: string
  choiceLabel: string
  choiceEmoji: string
}

type Choice = {
  id: string
  emoji: string
  label: string
  sublabel?: string
  next: StepId | ResultId
}

type Step = {
  id: StepId
  question: string
  hint?: string
  choices: Choice[]
}

type Result = {
  id: ResultId
  name: string
  emoji: string
  tagline: string
  description: string
  whyItLands: string
  flavorNotes: string[]
  regions: string[]
  nextStudyHref: string
  nextStudyLabel: string
  toneClass: string
  badgeClass: string
  tagClass: string
}

const STEPS: Record<StepId, Step> = {
  start: {
    id: 'start',
    question: '収穫したチェリー、まず何をしますか？',
    hint: '最初に果肉を残すかどうかで、精製方法の大きな方向が決まります。',
    choices: [
      {
        id: 'no_depulp',
        emoji: '🍒',
        label: 'チェリーのまま処理する',
        sublabel: '果肉を残したまま乾燥や発酵に進む',
        next: 'no_depulp',
      },
      {
        id: 'depulped',
        emoji: '⚙️',
        label: '果肉を取り除く',
        sublabel: 'パルピングして次の工程に進む',
        next: 'depulped',
      },
    ],
  },
  no_depulp: {
    id: 'no_depulp',
    question: '果肉を残したチェリーをどう扱いますか？',
    hint: '空気があるか、ないかで発酵の進み方が変わります。',
    choices: [
      {
        id: 'natural',
        emoji: '☀️',
        label: 'そのまま乾燥させる',
        sublabel: '天日でゆっくり乾燥させる',
        next: 'natural',
      },
      {
        id: 'anaerobic',
        emoji: '🔒',
        label: '密閉して嫌気発酵させる',
        sublabel: '酸素を遮断して発酵をコントロールする',
        next: 'anaerobic',
      },
    ],
  },
  depulped: {
    id: 'depulped',
    question: '果肉除去後のミューシレージをどうしますか？',
    hint: '残す量によって甘みやクリーンさの出方が変わります。',
    choices: [
      {
        id: 'washed',
        emoji: '💧',
        label: 'きれいに洗い流す',
        sublabel: 'クリーンで透明感のある方向に寄せる',
        next: 'washed',
      },
      {
        id: 'honey',
        emoji: '🍯',
        label: '残したまま乾燥させる',
        sublabel: '甘さや厚みを残しやすい',
        next: 'honey',
      },
      {
        id: 'wet_hull',
        emoji: '💦',
        label: '湿った段階で脱穀する',
        sublabel: 'ウェットハル特有の重さにつながる',
        next: 'wet_hull',
      },
    ],
  },
}

const RESULTS: Record<ResultId, Result> = {
  natural: {
    id: 'natural',
    name: 'ナチュラル',
    emoji: '☀️',
    tagline: '果実の甘みをそのまま豆へ移す',
    description:
      'チェリーを丸ごと乾燥させることで、果肉の甘みや果実感が豆に移りやすい精製方法です。フルーティーで厚みのある味になりやすく、個性が分かりやすく出ます。',
    whyItLands:
      '果肉を残したまま乾燥させる選択をしたため、果実由来の糖や香りが豆に移りやすいルートに進みました。',
    flavorNotes: ['フルーティー', 'ベリー感', '濃厚', '甘い余韻'],
    regions: ['エチオピア', 'ブラジル', 'イエメン'],
    nextStudyHref: '/learn/roasting',
    nextStudyLabel: 'この個性を焙煎でどう残すか学ぶ',
    toneClass: 'border-orange-200 bg-orange-50',
    badgeClass: 'bg-orange-100 text-orange-800',
    tagClass: 'bg-orange-200 text-orange-800',
  },
  anaerobic: {
    id: 'anaerobic',
    name: 'アナエロビック',
    emoji: '🔒',
    tagline: '密閉発酵で個性を強く引き出す',
    description:
      '酸素のない環境で発酵をコントロールする方法です。発酵由来の華やかさや複雑さが出やすく、実験的で印象の強い味につながります。',
    whyItLands:
      '果肉を残したうえで酸素を遮断する選択をしたため、発酵感の強い個性的なルートに進みました。',
    flavorNotes: ['トロピカル', '複雑', '発酵感', '強い甘み'],
    regions: ['コスタリカ', 'コロンビア', 'ブラジル'],
    nextStudyHref: '/learn/roasting',
    nextStudyLabel: '発酵感を焙煎でどう扱うか学ぶ',
    toneClass: 'border-fuchsia-200 bg-fuchsia-50',
    badgeClass: 'bg-fuchsia-100 text-fuchsia-800',
    tagClass: 'bg-fuchsia-200 text-fuchsia-800',
  },
  washed: {
    id: 'washed',
    name: 'ウォッシュド',
    emoji: '💧',
    tagline: 'クリーンで豆本来の輪郭が見えやすい',
    description:
      '果肉除去後にミューシレージを洗い流すことで、透明感のある味になりやすい精製方法です。産地や品種の違いも感じ取りやすくなります。',
    whyItLands:
      '果肉除去後にミューシレージも洗い流したため、付着物の影響が少ないクリーンな方向に進みました。',
    flavorNotes: ['クリーン', 'フローラル', '明るい酸', '透明感'],
    regions: ['エチオピア', 'ケニア', 'コロンビア'],
    nextStudyHref: '/learn/roasting',
    nextStudyLabel: 'クリーンな豆の焙煎変化を見る',
    toneClass: 'border-sky-200 bg-sky-50',
    badgeClass: 'bg-sky-100 text-sky-800',
    tagClass: 'bg-sky-200 text-sky-800',
  },
  honey: {
    id: 'honey',
    name: 'ハニー',
    emoji: '🍯',
    tagline: '甘みとやわらかさを残しやすい',
    description:
      '果肉除去後もミューシレージを残して乾燥させる方法です。ウォッシュドより甘みや厚みが出やすく、バランスのよい飲みやすさにつながります。',
    whyItLands:
      '果肉は取り除きつつミューシレージを残したため、クリーンさよりも甘さとやわらかさを保ちやすい方向に進みました。',
    flavorNotes: ['甘い', 'やわらかい酸', 'ナッツ感', 'まろやか'],
    regions: ['コスタリカ', 'エルサルバドル', 'ブラジル'],
    nextStudyHref: '/learn/roasting',
    nextStudyLabel: '甘みを焙煎でどう広げるか学ぶ',
    toneClass: 'border-amber-200 bg-amber-50',
    badgeClass: 'bg-amber-100 text-amber-800',
    tagClass: 'bg-amber-200 text-amber-800',
  },
  wet_hull: {
    id: 'wet_hull',
    name: 'ウェットハル',
    emoji: '💦',
    tagline: '重いボディと独特の質感を生みやすい',
    description:
      '水分が高い段階で脱穀する、インドネシアで有名な手法です。ボディ感が強く、アーシーで重ための方向に進みやすい特徴があります。',
    whyItLands:
      '十分に乾かし切る前に脱穀する選択をしたため、ウェットハル特有の重いボディ感につながるルートに進みました。',
    flavorNotes: ['重いボディ', 'アーシー', 'ハーブ感', 'スパイシー'],
    regions: ['スマトラ', 'スラウェシ', 'フローレス'],
    nextStudyHref: '/learn/brewing',
    nextStudyLabel: '重いボディを抽出でどう整えるか学ぶ',
    toneClass: 'border-teal-200 bg-teal-50',
    badgeClass: 'bg-teal-100 text-teal-800',
    tagClass: 'bg-teal-200 text-teal-800',
  },
}

const STEP_LABELS: Record<StepId, string> = {
  start: '最初の処理',
  no_depulp: '果肉を残した後の選択',
  depulped: '果肉除去後の選択',
}

const RESULT_IDS = new Set<string>(['natural', 'anaerobic', 'washed', 'honey', 'wet_hull'])

function isResultId(id: string): id is ResultId {
  return RESULT_IDS.has(id)
}

export default function ProcessingSimulatorPage() {
  const [currentStep, setCurrentStep] = useState<StepId>('start')
  const [result, setResult] = useState<ResultId | null>(null)
  const [history, setHistory] = useState<HistoryItem[]>([])

  const handleChoice = (choice: Choice) => {
    setHistory((prev) => [
      ...prev,
      {
        stepLabel: STEP_LABELS[currentStep],
        choiceLabel: choice.label,
        choiceEmoji: choice.emoji,
      },
    ])

    if (isResultId(choice.next)) {
      setResult(choice.next)
      return
    }

    setCurrentStep(choice.next)
  }

  const reset = () => {
    setCurrentStep('start')
    setResult(null)
    setHistory([])
  }

  const step = STEPS[currentStep]
  const resultData = result ? RESULTS[result] : null
  const totalSteps = result ? history.length : history.length + 1

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
                <p className="mt-4 text-xs font-bold tracking-[0.18em] text-stone-500">CHAPTER 02</p>
                <h1 className="mt-2 text-2xl font-black tracking-tight text-[var(--accent-strong)]">
                  精製方法を選んで学ぶ
                </h1>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                  果肉を残すか、水で洗うか、密閉発酵させるか。選択の違いが、最後の味にどうつながるかを整理します。
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                <p className="text-xs font-bold tracking-[0.18em] text-stone-500">今の学習ポイント</p>
                <p className="mt-3 text-sm font-bold text-stone-900">
                  {result ? '選択の結果から特徴を理解する段階です。' : step.question}
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {result ? 'どの選択がどの精製方法につながったかを確認して、味との関係を覚えます。' : step.hint}
                </p>
                <div className="mt-4 rounded-full bg-stone-100 p-1">
                  <div
                    className="h-2 rounded-full bg-[var(--accent)] transition-all"
                    style={{ width: `${Math.min((totalSteps / 3) * 100, 100)}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-stone-500">学習の進行: {Math.min(totalSteps, 3)} / 3</p>
              </div>

              {history.length > 0 && (
                <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                  <p className="text-xs font-bold tracking-[0.18em] text-stone-500">選択履歴</p>
                  <div className="mt-4 space-y-3">
                    {history.map((item, index) => (
                      <div key={`${item.stepLabel}-${index}`} className="rounded-2xl bg-stone-50 p-3">
                        <p className="text-xs text-stone-500">{item.stepLabel}</p>
                        <p className="mt-1 text-sm font-bold text-stone-900">
                          {item.choiceEmoji} {item.choiceLabel}
                        </p>
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
                        <div className="flex items-start gap-4">
                          <span className="text-2xl">{choice.emoji}</span>
                          <div className="flex-1">
                            <p className="text-base font-bold text-stone-900">{choice.label}</p>
                            {choice.sublabel && (
                              <p className="mt-1 text-sm leading-6 text-stone-600">{choice.sublabel}</p>
                            )}
                          </div>
                          <span className="text-xl text-stone-300">›</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={`rounded-[1.75rem] border p-6 md:p-8 ${resultData!.toneClass}`}>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${resultData!.badgeClass}`}>
                        あなたがたどり着いた精製方法
                      </span>
                      <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900">
                        {resultData!.emoji} {resultData!.name}
                      </h2>
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
                      <p className="text-xs font-bold tracking-[0.18em] text-stone-500">この方法の特徴</p>
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
                        <p className="text-xs font-bold tracking-[0.18em] text-stone-500">代表的な産地</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {resultData!.regions.map((region) => (
                            <span key={region} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-700">
                              {region}
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
  )
}
