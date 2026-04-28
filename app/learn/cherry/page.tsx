'use client'

import Link from 'next/link'
import { useState } from 'react'

type LayerId = 'skin' | 'pulp' | 'mucilage' | 'parchment' | 'bean'

const LAYERS = [
  {
    id: 'skin' as LayerId,
    name: '外皮',
    emoji: '🔴',
    svgFill: '#be3a2e',
    highlightStroke: '#ff7070',
    btnClass: 'bg-red-500 hover:bg-red-600 active:bg-red-700',
    cardBorder: 'border-red-300',
    cardBg: 'bg-red-50',
    badgeClass: 'bg-red-100 text-red-700',
    description: 'コーヒーチェリーの一番外側。赤や黄色に熟す果実の皮。',
  },
  {
    id: 'pulp' as LayerId,
    name: '果肉',
    emoji: '🟠',
    svgFill: '#c85020',
    highlightStroke: '#ff8850',
    btnClass: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700',
    cardBorder: 'border-orange-300',
    cardBg: 'bg-orange-50',
    badgeClass: 'bg-orange-100 text-orange-700',
    description: '甘みを含む果実の部分。ナチュラル精製ではこの果肉を残したまま乾燥させる。',
  },
  {
    id: 'mucilage' as LayerId,
    name: 'ミューシレージ',
    emoji: '✨',
    svgFill: '#d4a020',
    highlightStroke: '#ffd040',
    btnClass: 'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700',
    cardBorder: 'border-yellow-300',
    cardBg: 'bg-yellow-50',
    badgeClass: 'bg-yellow-100 text-yellow-700',
    description: 'ぬめりのある粘液質。ハニー精製ではこの部分を残す量が味わいに影響する。',
  },
  {
    id: 'parchment' as LayerId,
    name: 'パーチメント',
    emoji: '📄',
    svgFill: '#c09060',
    highlightStroke: '#e0b878',
    btnClass: 'bg-amber-600 hover:bg-amber-700 active:bg-amber-800',
    cardBorder: 'border-amber-300',
    cardBg: 'bg-amber-50',
    badgeClass: 'bg-amber-100 text-amber-700',
    description: '生豆を包む薄い殻。乾燥後、脱穀によって取り除かれる。',
  },
  {
    id: 'bean' as LayerId,
    name: '生豆',
    emoji: '🌱',
    svgFill: '#4a7e3c',
    highlightStroke: '#80c060',
    btnClass: 'bg-green-600 hover:bg-green-700 active:bg-green-800',
    cardBorder: 'border-green-300',
    cardBg: 'bg-green-50',
    badgeClass: 'bg-green-100 text-green-700',
    description: '焙煎前のコーヒー豆。この状態ではまだ飲めず、焙煎によって香りが生まれる。',
  },
]

export default function CherryPage() {
  const [selected, setSelected] = useState<LayerId | null>(null)
  const selectedLayer = LAYERS.find(l => l.id === selected) ?? null

  const toggle = (id: LayerId) => setSelected(prev => prev === id ? null : id)

  const op = (id: LayerId) => (!selected || selected === id) ? 1 : 0.28
  const st = (id: LayerId) => selected === id ? LAYERS.find(l => l.id === id)!.highlightStroke : 'none'
  const sw = (id: LayerId) => selected === id ? 6 : 0

  return (
    <div className="min-h-screen bg-amber-50">

      {/* ナビゲーション */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/learn" className="text-stone-500 hover:text-stone-800 text-sm transition-colors">
            ← 学習マップへ
          </Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-medium text-red-700">🍒 Chapter 01</span>
        </div>
      </nav>

      <div className="max-w-lg mx-auto px-4 py-8">

        {/* ヘッダー */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-xs font-bold mb-3">
            <span>🍒</span>
            <span>Chapter 01 · コーヒーチェリーを知る</span>
          </div>
          <h1 className="text-2xl font-bold text-stone-800 mb-2">
            コーヒーチェリーの中を見てみよう
          </h1>
          <p className="text-stone-500 text-sm">
            ボタンをタップして、各層の役割を確認しよう 👆
          </p>
        </div>

        {/* チェリー断面図 */}
        <div className="flex justify-center mb-6">
          <div className="w-64 h-64 drop-shadow-xl">
            <svg
              viewBox="0 0 280 280"
              className="w-full h-full"
              aria-label="コーヒーチェリーの断面図"
            >
              {/* 外皮 */}
              <ellipse
                cx="140" cy="140" rx="128" ry="128"
                fill="#be3a2e"
                opacity={op('skin')}
                stroke={st('skin')}
                strokeWidth={sw('skin')}
                style={{ transition: 'opacity 0.25s ease' }}
              />
              {/* 果肉 */}
              <ellipse
                cx="140" cy="140" rx="108" ry="108"
                fill="#c85020"
                opacity={op('pulp')}
                stroke={st('pulp')}
                strokeWidth={sw('pulp')}
                style={{ transition: 'opacity 0.25s ease' }}
              />
              {/* ミューシレージ */}
              <ellipse
                cx="140" cy="140" rx="88" ry="88"
                fill="#d4a020"
                opacity={op('mucilage')}
                stroke={st('mucilage')}
                strokeWidth={sw('mucilage')}
                style={{ transition: 'opacity 0.25s ease' }}
              />
              {/* パーチメント */}
              <ellipse
                cx="140" cy="140" rx="68" ry="68"
                fill="#c09060"
                opacity={op('parchment')}
                stroke={st('parchment')}
                strokeWidth={sw('parchment')}
                style={{ transition: 'opacity 0.25s ease' }}
              />
              {/* シルバースキン（生豆背景） */}
              <ellipse
                cx="140" cy="140" rx="52" ry="52"
                fill="#c8dca8"
                opacity={op('bean')}
                style={{ transition: 'opacity 0.25s ease' }}
              />
              {/* 生豆 左 */}
              <ellipse
                cx="121" cy="140" rx="21" ry="31"
                fill="#4a7e3c"
                opacity={op('bean')}
                stroke={st('bean')}
                strokeWidth={sw('bean')}
                style={{ transition: 'opacity 0.25s ease' }}
              />
              {/* 生豆 右 */}
              <ellipse
                cx="159" cy="140" rx="21" ry="31"
                fill="#4a7e3c"
                opacity={op('bean')}
                stroke={st('bean')}
                strokeWidth={sw('bean')}
                style={{ transition: 'opacity 0.25s ease' }}
              />
              {/* 豆の中央溝 */}
              <line
                x1="140" y1="109" x2="140" y2="171"
                stroke="#2a5020"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity={op('bean')}
                style={{ transition: 'opacity 0.25s ease' }}
              />

              {/* 番号ラベル（右側） */}
              {[
                { id: 'skin' as LayerId,      x: 252, y: 58,  r: 10, label: '1' },
                { id: 'pulp' as LayerId,      x: 252, y: 90,  r: 10, label: '2' },
                { id: 'mucilage' as LayerId,  x: 252, y: 122, r: 10, label: '3' },
                { id: 'parchment' as LayerId, x: 252, y: 154, r: 10, label: '4' },
                { id: 'bean' as LayerId,      x: 252, y: 186, r: 10, label: '5' },
              ].map(({ id, x, y, r, label }) => {
                const layer = LAYERS.find(l => l.id === id)!
                const isSelected = selected === id
                return (
                  <g key={id}>
                    <circle
                      cx={x} cy={y} r={r + (isSelected ? 3 : 0)}
                      fill={isSelected ? layer.highlightStroke : layer.svgFill}
                      style={{ transition: 'all 0.2s ease' }}
                    />
                    <text
                      x={x} y={y + 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="9"
                      fontWeight="bold"
                    >
                      {label}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        {/* レイヤーボタン */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {LAYERS.map((layer, i) => (
            <button
              key={layer.id}
              onClick={() => toggle(layer.id)}
              className={`
                flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-bold text-white
                transition-all duration-200
                ${layer.btnClass}
                ${selected === layer.id
                  ? 'scale-105 shadow-lg ring-4 ring-white ring-offset-1'
                  : 'opacity-75'
                }
              `}
            >
              <span className="text-xs text-white/70 font-normal">0{i + 1}</span>
              <span>{layer.name}</span>
            </button>
          ))}
        </div>

        {/* 説明カード */}
        <div className="mb-8 min-h-24">
          {selectedLayer ? (
            <div className={`rounded-2xl border-2 p-5 shadow-sm ${selectedLayer.cardBorder} ${selectedLayer.cardBg}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{selectedLayer.emoji}</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${selectedLayer.badgeClass}`}>
                  {selectedLayer.name}
                </span>
              </div>
              <p className="text-stone-700 leading-relaxed text-sm md:text-base">
                {selectedLayer.description}
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-stone-200 bg-white/50 p-5 text-center">
              <p className="text-stone-400 text-sm">上のボタンをタップすると、各層の説明が表示されます</p>
            </div>
          )}
        </div>

        {/* 全レイヤー一覧（小サイズ） */}
        <div className="bg-white rounded-2xl border border-stone-100 p-4 mb-8 shadow-sm">
          <p className="text-xs font-bold text-stone-500 tracking-wider mb-3">🔍 各層の一覧</p>
          <div className="space-y-2">
            {LAYERS.map((layer, i) => (
              <button
                key={layer.id}
                onClick={() => toggle(layer.id)}
                className={`w-full flex items-center gap-3 p-2.5 rounded-xl transition-all text-left
                  ${selected === layer.id ? `${layer.cardBg} ${layer.cardBorder} border` : 'hover:bg-stone-50'}
                `}
              >
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: layer.svgFill }}
                />
                <span className="text-xs text-stone-400 w-4">0{i + 1}</span>
                <span className="text-sm font-medium text-stone-700">{layer.name}</span>
                {selected === layer.id && (
                  <span className="ml-auto text-xs text-stone-400">▲ 選択中</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 学習ポイント */}
        <div className="bg-amber-800 text-white rounded-2xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5 flex-shrink-0">💡</span>
            <div>
              <p className="text-amber-300 text-xs font-bold tracking-wider mb-1.5">学習のポイント</p>
              <p className="font-bold leading-relaxed">
                どの部分を残すか、どのタイミングで取り除くかによって精製方法が変わる
              </p>
            </div>
          </div>
        </div>

        {/* 次への導線 */}
        <div className="text-center pb-12">
          <p className="text-stone-400 text-sm mb-4">この章をクリアしたら次へ →</p>
          <Link
            href="/learn/processing-simulator"
            className="inline-flex items-center gap-2 bg-amber-800 text-white font-bold px-8 py-4 rounded-full hover:bg-amber-900 transition-colors shadow-md text-sm"
          >
            <span>☀️</span>
            <span>精製方法シミュレーターへ進む</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </div>
  )
}
