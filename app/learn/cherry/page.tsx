'use client'

import Link from 'next/link'
import { useState } from 'react'

import { APP_NAME } from '@/lib/brand'

type LayerId = 'skin' | 'pulp' | 'mucilage' | 'parchment' | 'bean'

interface Layer {
  id: LayerId
  number: string
  name: string
  color: string
  highlight: string
  gradId: string
  summary: string
  role: string
  processing: string
  tasteEffect: string
  tip: string
}

const LAYERS: Layer[] = [
  {
    id: 'skin',
    number: '01',
    name: '外皮',
    color: '#bf3626',
    highlight: '#ff7a65',
    gradId: 'g-skin',
    summary: '熟すと赤や黄色になる、チェリーの一番外側の薄い皮。収穫の判断はここから始まる。',
    role: '果実の内部を乾燥・外敵から守る保護層。熟度のバロメーターとして収穫タイミングの基準になる。',
    processing: 'すべての精製方法で最終的に除去される。ウォッシュドでは収穫直後に機械で剥ぎ取る。',
    tasteEffect: '直接の風味への影響は少ないが、収穫タイミング（熟度）が豆全体の甘み・酸のバランスを左右する。',
    tip: '「赤くなったら飲み頃」はコーヒーチェリーにも当てはまる。熟した果実を選ぶことが美味しさの第一歩。',
  },
  {
    id: 'pulp',
    number: '02',
    name: '果肉',
    color: '#c94820',
    highlight: '#ff9060',
    gradId: 'g-pulp',
    summary: '甘みと水分を含む厚みのある果肉。チェリーらしい果実感の中心となる層。',
    role: '糖分・有機酸を豊富に含む。精製中にどれだけ残すか・いつ除くかで豆の風味が大きく変わる。',
    processing: 'ナチュラルでは乾燥中もそのまま残す。ウォッシュドでは機械パルピングで収穫後すぐに除去する。',
    tasteEffect: 'ナチュラル精製では果肉の糖分が豆へ移行し、フルーティーな甘みや豊かな発酵感を生む。',
    tip: 'マンゴーやベリーを感じるコーヒーは、この果肉が仕事をした証拠かもしれない。',
  },
  {
    id: 'mucilage',
    number: '03',
    name: 'ミューシレージ',
    color: '#c09010',
    highlight: '#f0c840',
    gradId: 'g-mucilage',
    summary: '果肉の内側にある糖分を多く含んだ半透明の粘液質の層。触るとねっとりしている。',
    role: '糖分の貯蔵庫。乾燥中に残す量を調整することで、甘みと複雑さを段階的にコントロールできる。',
    processing: 'ハニー精製の主役。残す量の違いがイエロー・レッド・ブラックハニーの風味の差を生む。',
    tasteEffect: '残量が多いほど甘みと質感が増す。少ないほどクリーンでクリスプな味わいに仕上がる。',
    tip: 'ハニープロセスのコーヒーに感じる「はちみつのようなとろみ感」は、この層が働いた結果。',
  },
  {
    id: 'parchment',
    number: '04',
    name: 'パーチメント',
    color: '#a88858',
    highlight: '#d8b878',
    gradId: 'g-parchment',
    summary: '生豆を包む薄くて硬い殻。乾燥中に豆を保護し、脱穀工程で最終的に取り除かれる。',
    role: '乾燥・熟成中に豆を外部環境から守るカプセル。内側の水分と風味成分を適切に保持する役割を持つ。',
    processing: 'ウォッシュドではミューシレージ除去後もこの殻付きで乾燥させる。スマトラ式（ウェットハル）は半乾燥で早期に除去する独自工程。',
    tasteEffect: '直接の風味への影響は少ないが、保護層として熟成品質に関与。除去のタイミングが残留水分に影響する。',
    tip: '「パーチメントコーヒー」として流通することもあり、この状態での保存性が最も高い。',
  },
  {
    id: 'bean',
    number: '05',
    name: '生豆',
    color: '#487840',
    highlight: '#80c870',
    gradId: 'g-bean',
    summary: '焙煎前のコーヒー豆。外皮・果肉をすべて取り除いた後に残る2粒の種子。',
    role: '焙煎によって化学変化が起き、香り・甘み・酸・苦みが初めて生成される。すべての加工の最終目的地。',
    processing: 'どの精製方法をとっても最終的にここにたどり着く。ただし精製方法の違いが豆に「記憶」され、風味特性として残る。',
    tasteEffect: '焙煎度・品種・産地・精製方法の組み合わせが、カップに現れるすべての風味を決定する。',
    tip: '生豆は青臭く無味。焙煎によってはじめてあの香りと味が生まれる。旅の終着点。',
  },
]

interface CheryDiagramProps {
  selected: LayerId
  onSelect: (id: LayerId) => void
}

function CherryDiagram({ selected, onSelect }: CheryDiagramProps) {
  const cx = 176
  const cy = 206

  function opacity(id: LayerId) {
    return selected === id ? 1 : 0.38
  }

  function strokeProps(id: LayerId, layer: Layer) {
    if (selected !== id) return { stroke: 'none', strokeWidth: 0 }
    return { stroke: layer.highlight, strokeWidth: 5 }
  }

  function filterAttr(id: LayerId) {
    return selected === id ? 'url(#glow)' : undefined
  }

  const skin = LAYERS[0]
  const pulp = LAYERS[1]
  const muc = LAYERS[2]
  const parch = LAYERS[3]
  const bean = LAYERS[4]

  return (
    <svg
      viewBox="0 0 352 380"
      className="h-auto w-full"
      aria-label="コーヒーチェリー断面図"
    >
      <defs>
        {/* Layer gradients */}
        <radialGradient id="g-skin" cx="36%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f07060" />
          <stop offset="40%" stopColor="#cc3a28" />
          <stop offset="100%" stopColor="#7c1a18" />
        </radialGradient>
        <radialGradient id="g-pulp" cx="38%" cy="34%" r="72%">
          <stop offset="0%" stopColor="#ffb070" />
          <stop offset="50%" stopColor="#d85028" />
          <stop offset="100%" stopColor="#a03018" />
        </radialGradient>
        <radialGradient id="g-mucilage" cx="44%" cy="40%" r="72%">
          <stop offset="0%" stopColor="#ffe890" />
          <stop offset="55%" stopColor="#d4a020" />
          <stop offset="100%" stopColor="#a07010" />
        </radialGradient>
        <radialGradient id="g-parchment" cx="46%" cy="42%" r="70%">
          <stop offset="0%" stopColor="#f4e0c0" />
          <stop offset="60%" stopColor="#ccaa70" />
          <stop offset="100%" stopColor="#a08050" />
        </radialGradient>
        <radialGradient id="g-silver" cx="50%" cy="46%" r="68%">
          <stop offset="0%" stopColor="#e8ddd0" />
          <stop offset="100%" stopColor="#c0b0a0" />
        </radialGradient>
        <radialGradient id="g-bean" cx="40%" cy="34%" r="76%">
          <stop offset="0%" stopColor="#b8d8a0" />
          <stop offset="55%" stopColor="#5e9050" />
          <stop offset="100%" stopColor="#3a6030" />
        </radialGradient>

        {/* Outer shine on the cherry surface */}
        <radialGradient id="g-shine" cx="32%" cy="26%" r="52%">
          <stop offset="0%" stopColor="white" stopOpacity="0.42" />
          <stop offset="60%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        {/* Glow filter for selected layer */}
        <filter id="glow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Drop shadow for depth */}
        <filter id="shadow" x="-10%" y="-5%" width="130%" height="130%">
          <feDropShadow dx="4" dy="8" stdDeviation="12" floodColor="#2a0e06" floodOpacity="0.28" />
        </filter>
      </defs>

      {/* Outer drop shadow */}
      <circle cx={cx} cy={cy} r="152" fill="none" filter="url(#shadow)" />

      {/* ── Stem ── */}
      <path
        d="M176 56 C174 38 163 26 154 32"
        stroke="#5a3015"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      {/* Leaf */}
      <path
        d="M176 58 C182 36 205 20 222 30 C214 46 196 56 176 58 Z"
        fill="#5c7e32"
        opacity="0.9"
      />
      <path
        d="M176 58 C190 44 208 36 222 30"
        stroke="#3d5820"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />

      {/* ── Layer 1: Outer Skin ── */}
      <circle
        cx={cx}
        cy={cy}
        r={148}
        fill={`url(#${skin.gradId})`}
        opacity={opacity('skin')}
        {...strokeProps('skin', skin)}
        filter={filterAttr('skin')}
        onClick={() => onSelect('skin')}
        style={{ cursor: 'pointer', transition: 'opacity 0.3s ease' }}
      />

      {/* ── Layer 2: Pulp ── */}
      <circle
        cx={cx}
        cy={cy}
        r={122}
        fill={`url(#${pulp.gradId})`}
        opacity={opacity('pulp')}
        {...strokeProps('pulp', pulp)}
        filter={filterAttr('pulp')}
        onClick={() => onSelect('pulp')}
        style={{ cursor: 'pointer', transition: 'opacity 0.3s ease' }}
      />

      {/* ── Layer 3: Mucilage ── */}
      <circle
        cx={cx}
        cy={cy}
        r={96}
        fill={`url(#${muc.gradId})`}
        opacity={opacity('mucilage') * 0.9}
        {...strokeProps('mucilage', muc)}
        filter={filterAttr('mucilage')}
        onClick={() => onSelect('mucilage')}
        style={{ cursor: 'pointer', transition: 'opacity 0.3s ease' }}
      />

      {/* ── Layer 4: Parchment ── */}
      <circle
        cx={cx}
        cy={cy}
        r={76}
        fill={`url(#${parch.gradId})`}
        opacity={opacity('parchment')}
        {...strokeProps('parchment', parch)}
        filter={filterAttr('parchment')}
        onClick={() => onSelect('parchment')}
        style={{ cursor: 'pointer', transition: 'opacity 0.3s ease' }}
      />

      {/* Silver skin — thin decorative ring (not interactive, part of parchment visually) */}
      <circle
        cx={cx}
        cy={cy}
        r={66}
        fill="url(#g-silver)"
        opacity={selected === 'parchment' ? 0.95 : selected === 'bean' ? 0.95 : 0.38}
        style={{ transition: 'opacity 0.3s ease', pointerEvents: 'none' }}
      />

      {/* ── Layer 5: Bean (two seeds) ── */}
      <g
        opacity={opacity('bean')}
        onClick={() => onSelect('bean')}
        style={{ cursor: 'pointer', transition: 'opacity 0.3s ease' }}
        filter={filterAttr('bean')}
      >
        {/* Left bean */}
        <ellipse
          cx={cx - 15}
          cy={cy}
          rx={27}
          ry={44}
          fill={`url(#${bean.gradId})`}
          {...strokeProps('bean', bean)}
        />
        {/* Right bean */}
        <ellipse
          cx={cx + 15}
          cy={cy}
          rx={27}
          ry={44}
          fill={`url(#${bean.gradId})`}
          {...strokeProps('bean', bean)}
        />
        {/* Center crease */}
        <path
          d={`M${cx} ${cy - 42} C${cx - 5} ${cy - 20} ${cx - 5} ${cy + 20} ${cx} ${cy + 42}`}
          stroke="#2a4e24"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        {/* Bean highlight streaks */}
        <ellipse cx={cx - 22} cy={cy - 16} rx={7} ry={14} fill="white" opacity="0.14" />
        <ellipse cx={cx + 22} cy={cy - 16} rx={7} ry={14} fill="white" opacity="0.14" />
      </g>

      {/* ── Shine overlay on outer skin ── */}
      <circle
        cx={cx}
        cy={cy}
        r={148}
        fill="url(#g-shine)"
        style={{ pointerEvents: 'none' }}
      />

      {/* ── Layer indicator dots (right side, 2 o'clock position) ── */}
      {LAYERS.map((layer, i) => {
        const angle = -0.55 + i * 0.22
        const radii = [148, 122, 96, 76, 58]
        const r = radii[i]
        const dotX = cx + r * Math.cos(angle)
        const dotY = cy + r * Math.sin(angle)
        const isActive = selected === layer.id
        return (
          <g key={layer.id} style={{ pointerEvents: 'none' }}>
            <circle
              cx={dotX}
              cy={dotY}
              r={isActive ? 8 : 6}
              fill={isActive ? layer.highlight : 'white'}
              stroke={isActive ? layer.highlight : layer.color}
              strokeWidth={isActive ? 0 : 2}
              opacity={isActive ? 1 : 0.7}
              style={{ transition: 'all 0.25s ease' }}
            />
            <text
              x={dotX}
              y={dotY + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={isActive ? 'white' : layer.color}
              fontSize={isActive ? '7' : '6.5'}
              fontWeight="bold"
            >
              {layer.number.slice(-1)}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export default function CherryPage() {
  const [selected, setSelected] = useState<LayerId>('pulp')
  const layer = LAYERS.find((l) => l.id === selected)!

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Sticky compact header */}
      <header
        className="sticky top-0 z-20 border-b"
        style={{
          background: 'rgba(243,238,231,0.92)',
          backdropFilter: 'blur(12px)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            href="/learn"
            className="flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: 'var(--ink-soft)' }}
          >
            <span className="text-base leading-none">←</span>
            学習マップへ
          </Link>
          <span
            className="rounded-full px-3 py-1 text-[11px] font-bold tracking-widest"
            style={{ background: 'var(--surface-muted)', color: 'var(--ink-soft)' }}
          >
            CHAPTER 01
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 pb-12 md:px-6 md:py-10">
        {/* Page title */}
        <div className="mb-6">
          <p
            className="text-[11px] font-bold tracking-[0.28em]"
            style={{ color: 'var(--ink-soft)' }}
          >
            {APP_NAME} &nbsp;/&nbsp; チェリーの構造
          </p>
          <h1
            className="mt-2 text-2xl font-black tracking-tight md:text-3xl"
            style={{ color: 'var(--accent-strong)' }}
          >
            コーヒーチェリーの断面を探る
          </h1>
          <p className="mt-1.5 text-sm" style={{ color: 'var(--ink-soft)' }}>
            部位をタップすると、図解と解説が同時に切り替わる
          </p>
        </div>

        {/* ── Main two-column layout ── */}
        <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-8">

          {/* LEFT — Diagram + chips */}
          <div>
            {/* SVG diagram card */}
            <div
              className="overflow-hidden rounded-[2rem] border"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--border)',
                boxShadow: '0 12px 40px rgba(58,28,10,0.10)',
              }}
            >
              {/* Diagram header */}
              <div
                className="border-b px-5 py-4"
                style={{ borderColor: 'var(--border)' }}
              >
                <p
                  className="text-[11px] font-bold tracking-[0.22em]"
                  style={{ color: 'var(--ink-soft)' }}
                >
                  CROSS-SECTION
                </p>
                <p className="mt-0.5 text-sm font-bold" style={{ color: 'var(--accent-strong)' }}>
                  断面図 — 部位をタップして選択
                </p>
              </div>
              <div className="p-4 md:p-6">
                <CherryDiagram selected={selected} onSelect={setSelected} />
              </div>
            </div>

            {/* ── Chip buttons ── */}
            <div className="mt-4">
              <p
                className="mb-2.5 text-[11px] font-bold tracking-[0.22em]"
                style={{ color: 'var(--ink-soft)' }}
              >
                部位を選ぶ
              </p>
              {/* Mobile: horizontal scroll / Desktop: wrap */}
              <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-wrap">
                {LAYERS.map((l) => {
                  const active = selected === l.id
                  return (
                    <button
                      key={l.id}
                      onClick={() => setSelected(l.id)}
                      className="flex-none flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-all"
                      style={
                        active
                          ? {
                              backgroundColor: l.color,
                              borderColor: l.color,
                              color: 'white',
                              boxShadow: `0 4px 14px ${l.color}55`,
                              transform: 'scale(1.04)',
                            }
                          : {
                              backgroundColor: 'var(--surface)',
                              borderColor: 'var(--border)',
                              color: 'var(--ink-soft)',
                            }
                      }
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: active ? 'rgba(255,255,255,0.8)' : l.color }}
                      />
                      <span
                        className="text-[10px] font-black opacity-60"
                        style={{ letterSpacing: '0.1em' }}
                      >
                        {l.number}
                      </span>
                      {l.name}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — Description card */}
          <div className="mt-6 lg:mt-0">
            <DescriptionCard layer={layer} />

            {/* Next chapter CTA */}
            <div
              className="mt-4 rounded-[1.75rem] border p-5"
              style={{
                background: 'var(--accent-strong)',
                borderColor: 'transparent',
              }}
            >
              <p
                className="text-[11px] font-bold tracking-[0.22em]"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                NEXT CHAPTER
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-200">
                チェリーの構造が分かると、「どの部位をいつ除くか」という精製方法の選択に意味が見えてくる。
              </p>
              <Link
                href="/learn/processing"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-stone-900 transition-colors hover:bg-stone-100"
              >
                精製方法へ進む
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

interface DescriptionCardProps {
  layer: Layer
}

function DescriptionCard({ layer }: DescriptionCardProps) {
  return (
    <div
      key={layer.id}
      className="rounded-[2rem] border"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--border)',
        boxShadow: '0 12px 40px rgba(58,28,10,0.08)',
        animation: 'cardFadeIn 0.22s ease-out',
      }}
    >
      {/* Card header with colored band */}
      <div
        className="rounded-t-[2rem] p-5 pb-4"
        style={{ backgroundColor: `${layer.color}18`, borderBottom: `1px solid ${layer.color}30` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-sm font-black text-white"
            style={{ backgroundColor: layer.color }}
          >
            {layer.number}
          </div>
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.24em]"
              style={{ color: layer.color, opacity: 0.8 }}
            >
              LAYER {layer.number}
            </p>
            <h2
              className="text-xl font-black tracking-tight"
              style={{ color: 'var(--accent-strong)' }}
            >
              {layer.name}
            </h2>
          </div>
        </div>
        <p
          className="mt-3 text-sm leading-7"
          style={{ color: 'var(--ink-soft)' }}
        >
          {layer.summary}
        </p>
      </div>

      {/* Info sections */}
      <div className="space-y-0 divide-y" style={{ borderColor: 'var(--border)' }}>
        <InfoRow icon="⚙️" label="役割" text={layer.role} />
        <InfoRow icon="🔄" label="精製との関係" text={layer.processing} />
        <InfoRow icon="☕" label="味への影響" text={layer.tasteEffect} />
        <TipRow text={layer.tip} />
      </div>
    </div>
  )
}

function InfoRow({ icon, label, text }: { icon: string; label: string; text: string }) {
  return (
    <div className="px-5 py-4">
      <div className="mb-1.5 flex items-center gap-1.5">
        <span className="text-sm">{icon}</span>
        <p
          className="text-[11px] font-bold tracking-[0.18em]"
          style={{ color: 'var(--ink-soft)' }}
        >
          {label}
        </p>
      </div>
      <p className="text-sm leading-7" style={{ color: 'var(--foreground)', opacity: 0.85 }}>
        {text}
      </p>
    </div>
  )
}

function TipRow({ text }: { text: string }) {
  return (
    <div
      className="rounded-b-[2rem] px-5 py-4"
      style={{ background: 'rgba(180,140,80,0.08)' }}
    >
      <div className="mb-1.5 flex items-center gap-1.5">
        <span className="text-sm">💡</span>
        <p
          className="text-[11px] font-bold tracking-[0.18em]"
          style={{ color: 'var(--accent)' }}
        >
          初心者のポイント
        </p>
      </div>
      <p
        className="text-sm leading-7 font-medium"
        style={{ color: 'var(--accent-strong)' }}
      >
        {text}
      </p>
    </div>
  )
}
