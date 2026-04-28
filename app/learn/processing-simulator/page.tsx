'use client'

import Link from 'next/link'
import { useState } from 'react'

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

const STEPS: Record<StepId, Step> = {
  start: {
    id: 'start',
    question: '収穫したチェリー、まず何をしますか？',
    hint: 'この最初の判断が精製方法の大きな分岐点です',
    choices: [
      {
        id: 'no_depulp',
        emoji: '🍒',
        label: 'チェリーのまま処理する',
        sublabel: '果肉を残したまま次の工程へ',
        next: 'no_depulp',
      },
      {
        id: 'depulped',
        emoji: '⚙️',
        label: '果肉を取り除く（パルピング）',
        sublabel: 'パルパーで外皮・果肉を除去する',
        next: 'depulped',
      },
    ],
  },
  no_depulp: {
    id: 'no_depulp',
    question: 'チェリーをどのように処理しますか？',
    hint: '発酵環境によって風味が大きく変わります',
    choices: [
      {
        id: 'natural',
        emoji: '☀️',
        label: '天日で乾燥させる',
        sublabel: '空気中でゆっくり乾燥・発酵させる',
        next: 'natural',
      },
      {
        id: 'anaerobic',
        emoji: '🔒',
        label: '密閉タンクで嫌気発酵させる',
        sublabel: '酸素を遮断した環境でコントロール発酵',
        next: 'anaerobic',
      },
    ],
  },
  depulped: {
    id: 'depulped',
    question: '果肉除去後、ミューシレージ（粘液質）はどうしますか？',
    hint: 'ミューシレージの残し方が甘みと酸のバランスを左右します',
    choices: [
      {
        id: 'washed',
        emoji: '💧',
        label: '水洗いして完全に除去する',
        sublabel: '発酵タンクで洗い流しクリーンな豆に',
        next: 'washed',
      },
      {
        id: 'honey',
        emoji: '🍯',
        label: '一部または全部残したまま乾燥する',
        sublabel: 'ねっとりした甘みを豆に移す',
        next: 'honey',
      },
      {
        id: 'wet_hull',
        emoji: '💦',
        label: '湿ったまま脱穀する（パーチメント除去）',
        sublabel: '水分が高い状態でハルを取り除く',
        next: 'wet_hull',
      },
    ],
  },
}

type Result = {
  id: ResultId
  name: string
  emoji: string
  tagline: string
  description: string
  flavorNotes: string[]
  regions: string[]
  cardBg: string
  cardBorder: string
  badgeClass: string
  tagClass: string
}

const RESULTS: Record<ResultId, Result> = {
  natural: {
    id: 'natural',
    name: 'ナチュラル',
    emoji: '☀️',
    tagline: '果実の甘みをそのまま豆へ',
    description:
      'チェリーを丸ごと乾燥させることで、果肉の甘みや果実フレーバーが生豆に染み込む。エチオピアやブラジルで広く行われる伝統的な精製法。',
    flavorNotes: ['フルーティー', 'ワインのような', '甘くて濃厚', 'ベリー系'],
    regions: ['エチオピア', 'ブラジル', 'イエメン'],
    cardBg: 'bg-orange-50',
    cardBorder: 'border-orange-300',
    badgeClass: 'bg-orange-100 text-orange-800',
    tagClass: 'bg-orange-200 text-orange-800',
  },
  anaerobic: {
    id: 'anaerobic',
    name: 'アナエロビック',
    emoji: '🔒',
    tagline: '酸素なしの密閉発酵で生まれる個性',
    description:
      'チェリーを密閉タンクに入れ、酸素のない環境でコントロールした発酵を行う。温度・時間・圧力を管理することで独特の風味を引き出す革新的な手法。',
    flavorNotes: ['トロピカル', '複雑な発酵感', '独特の甘み', '実験的'],
    regions: ['コスタリカ', 'コロンビア', 'ブラジル'],
    cardBg: 'bg-purple-50',
    cardBorder: 'border-purple-300',
    badgeClass: 'bg-purple-100 text-purple-800',
    tagClass: 'bg-purple-200 text-purple-800',
  },
  washed: {
    id: 'washed',
    name: 'ウォッシュド',
    emoji: '💧',
    tagline: 'クリーンでクリアな豆本来の味',
    description:
      '果肉除去後に発酵タンクで水洗いし、ミューシレージを完全に取り除く。豆本来の風味が際立ちやすく、クリーンカップと呼ばれる透明感のある味わいが特徴。',
    flavorNotes: ['クリーン', 'フローラル', '明るい酸', 'テロワールが出やすい'],
    regions: ['エチオピア（イルガチェフェ）', 'ケニア', 'コロンビア'],
    cardBg: 'bg-blue-50',
    cardBorder: 'border-blue-300',
    badgeClass: 'bg-blue-100 text-blue-800',
    tagClass: 'bg-blue-200 text-blue-800',
  },
  honey: {
    id: 'honey',
    name: 'ハニー',
    emoji: '🍯',
    tagline: 'ミューシレージが甘みの橋渡し',
    description:
      '果肉を除去した後、ミューシレージを残したまま乾燥させる。残す量（ブラック・レッド・イエロー・ホワイトハニー）によって甘みと酸のバランスが変わる。',
    flavorNotes: ['甘い', '柔らかい酸', 'ナッツ感', 'まろやか'],
    regions: ['コスタリカ', 'エルサルバドル', 'ブラジル'],
    cardBg: 'bg-yellow-50',
    cardBorder: 'border-yellow-300',
    badgeClass: 'bg-yellow-100 text-yellow-800',
    tagClass: 'bg-yellow-200 text-yellow-800',
  },
  wet_hull: {
    id: 'wet_hull',
    name: 'ウェットハル（ギリン・バサー）',
    emoji: '💦',
    tagline: 'インドネシア発、独特のボディ感',
    description:
      '水分が高い状態（40〜50%）でパーチメントを除去し、その後さらに乾燥させる。スマトラ式とも呼ばれ、重厚なボディとアーシーな風味が生まれる独特の手法。',
    flavorNotes: ['ボディ感が強い', 'アーシー', 'ハーブ的', 'スパイシー'],
    regions: ['インドネシア（スマトラ）', 'スラウェシ', 'フローレス'],
    cardBg: 'bg-teal-50',
    cardBorder: 'border-teal-300',
    badgeClass: 'bg-teal-100 text-teal-800',
    tagClass: 'bg-teal-200 text-teal-800',
  },
}

const STEP_LABELS: Record<StepId, string> = {
  start: '最初の処理',
  no_depulp: '果肉残し後の工程',
  depulped: 'パルピング後の工程',
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
    setHistory(prev => [
      ...prev,
      {
        stepLabel: STEP_LABELS[currentStep],
        choiceLabel: choice.label,
        choiceEmoji: choice.emoji,
      },
    ])
    if (isResultId(choice.next)) {
      setResult(choice.next)
    } else {
      setCurrentStep(choice.next as StepId)
    }
  }

  const reset = () => {
    setCurrentStep('start')
    setResult(null)
    setHistory([])
  }

  const step = STEPS[currentStep]
  const resultData = result ? RESULTS[result] : null

  return (
    <div className="min-h-screen bg-amber-50">
      {/* ナビゲーション */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/learn" className="text-stone-500 hover:text-stone-800 text-sm transition-colors">
            ← 学習マップへ
          </Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-medium text-amber-700">☀️ Chapter 02</span>
        </div>
      </nav>

      <div className="max-w-lg mx-auto px-4 py-8">

        {/* ヘッダー */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-bold mb-3">
            <span>☀️</span>
            <span>Chapter 02 · 精製方法を知る</span>
          </div>
          <h1 className="text-2xl font-bold text-stone-800 mb-2">
            精製方法シミュレーター
          </h1>
          <p className="text-stone-500 text-sm">
            選択肢を選んでいくと、どの精製方法にたどり着くかわかります
          </p>
        </div>

        {/* タイムライン（選択履歴） */}
        {history.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-bold text-stone-400 tracking-wider mb-3">📋 あなたの選択履歴</p>
            <div className="space-y-2">
              {history.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-white rounded-xl border border-stone-100 px-3 py-2 shadow-sm">
                    <p className="text-xs text-stone-400 mb-0.5">{item.stepLabel}</p>
                    <p className="text-sm font-medium text-stone-700">
                      {item.choiceEmoji} {item.choiceLabel}
                    </p>
                  </div>
                </div>
              ))}
              {resultData && (
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    ✓
                  </div>
                  <div className={`flex-1 rounded-xl border px-3 py-2 ${resultData.cardBg} ${resultData.cardBorder}`}>
                    <p className="text-xs text-stone-500 mb-0.5">結果</p>
                    <p className="text-sm font-bold text-stone-800">
                      {resultData.emoji} {resultData.name}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ステップ or 結果カード */}
        {!result ? (
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
            <div className="mb-5">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                Step {history.length + 1}
              </span>
              <h2 className="text-base font-bold text-stone-800 leading-relaxed mt-2">
                {step.question}
              </h2>
              {step.hint && (
                <p className="text-xs text-stone-400 mt-1">{step.hint}</p>
              )}
            </div>

            <div className="space-y-3">
              {step.choices.map(choice => (
                <button
                  key={choice.id}
                  onClick={() => handleChoice(choice)}
                  className="w-full flex items-start gap-4 bg-amber-50 hover:bg-amber-100 active:bg-amber-200 border border-amber-200 hover:border-amber-400 rounded-xl p-4 text-left transition-all duration-150 group"
                >
                  <span className="text-2xl mt-0.5 flex-shrink-0">{choice.emoji}</span>
                  <div className="flex-1">
                    <p className="font-bold text-stone-800 text-sm group-hover:text-amber-900">
                      {choice.label}
                    </p>
                    {choice.sublabel && (
                      <p className="text-xs text-stone-500 mt-0.5">{choice.sublabel}</p>
                    )}
                  </div>
                  <span className="text-stone-300 group-hover:text-amber-600 text-lg mt-0.5 flex-shrink-0">›</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className={`rounded-2xl border-2 p-6 shadow-md ${resultData!.cardBg} ${resultData!.cardBorder}`}>
            <div className="text-center mb-5">
              <div className="text-5xl mb-3">{resultData!.emoji}</div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${resultData!.badgeClass}`}>
                あなたの精製方法
              </span>
              <h2 className="text-2xl font-bold text-stone-800 mt-3 mb-1">{resultData!.name}</h2>
              <p className="text-sm text-stone-600 italic">{resultData!.tagline}</p>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-5">{resultData!.description}</p>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-xs font-bold text-stone-500 tracking-wider mb-2">☕ フレーバーの特徴</p>
                <div className="flex flex-wrap gap-1.5">
                  {resultData!.flavorNotes.map(note => (
                    <span key={note} className={`text-xs font-medium px-2.5 py-1 rounded-full ${resultData!.tagClass}`}>
                      {note}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-stone-500 tracking-wider mb-2">🌍 主な産地</p>
                <div className="flex flex-wrap gap-1.5">
                  {resultData!.regions.map(region => (
                    <span key={region} className="text-xs font-medium px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={reset}
                className="w-full bg-amber-800 hover:bg-amber-900 active:bg-amber-950 text-white font-bold py-3 px-6 rounded-full transition-colors text-sm"
              >
                🔄 もう一度試す
              </button>
              <Link
                href="/learn"
                className="w-full bg-white hover:bg-stone-50 text-stone-700 font-bold py-3 px-6 rounded-full transition-colors text-sm text-center border border-stone-200"
              >
                ← Learning Map に戻る
              </Link>
            </div>
          </div>
        )}

        {/* 学習ポイント（ステップ中のみ表示） */}
        {!result && (
          <div className="bg-amber-800 text-white rounded-2xl p-5 mt-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5 flex-shrink-0">💡</span>
              <div>
                <p className="text-amber-300 text-xs font-bold tracking-wider mb-1.5">学習のポイント</p>
                <p className="font-bold leading-relaxed text-sm">
                  精製方法はコーヒーの味わいを大きく左右します。全5種類の精製方法にたどり着けるか試してみよう。
                </p>
              </div>
            </div>
          </div>
        )}

        <footer className="text-center text-stone-400 text-xs py-8">
          <p>Coffee Textbook — コーヒーを、もっと深く楽しむために</p>
        </footer>
      </div>
    </div>
  )
}
