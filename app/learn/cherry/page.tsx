'use client'

import Link from 'next/link'
import { useState } from 'react'

import { APP_NAME, APP_SUBTITLE } from '@/lib/brand'

type PartId = 'skin' | 'pulp' | 'mucilage' | 'parchment' | 'silverSkin' | 'bean'

type CherryPart = {
  id: PartId
  number: string
  name: string
  shortName: string
  color: string
  accent: string
  chip: string
  ringStroke?: string
  summary: string
  role: string
  processing: string
  taste: string
  tip: string
  focus: string
}

const CHERRY_PARTS: CherryPart[] = [
  {
    id: 'skin',
    number: '01',
    name: '外皮',
    shortName: '外皮',
    color: '#b93427',
    accent: '#ff8a73',
    chip: '熟度の入口',
    summary: '熟度を知らせる赤い皮。収穫タイミングの判断に直結する、いちばん外側のサインです。',
    role: '雨風や乾燥から内部を守りつつ、熟したチェリーを見分ける視覚的な目印になります。',
    processing: 'どの精製でも最終的には外しますが、ここで見極めた熟度が後の精製品質を大きく左右します。',
    taste: '皮そのものより、「熟した実を選べたか」が甘み、酸の透明感、未熟感の有無に影響します。',
    tip: 'まずは色を見る。赤が深く、張りがあるチェリーほど学習の出発点として分かりやすいです。',
    focus: '収穫の判断が味の土台になることを意識して見ます。',
  },
  {
    id: 'pulp',
    number: '02',
    name: '果肉',
    shortName: '果肉',
    color: '#cf5a2b',
    accent: '#ffb07c',
    chip: '果実感の源',
    summary: '厚みのある果肉層。チェリーらしい甘さ、水分、果実感を強く持つ部分です。',
    role: '糖分や有機酸を含み、乾燥や発酵の過程で豆にどんな果実感が移るかを左右します。',
    processing: 'ナチュラルでは長く豆の近くに残り、ウォッシュドでは早い段階で取り除かれます。',
    taste: '長く残すほどベリー感や発酵由来の甘さが出やすく、早く外すほどすっきり整いやすくなります。',
    tip: 'フルーティーなコーヒーを飲んだら、この果肉がどれだけ関わったかを想像すると整理しやすいです。',
    focus: '果実の甘さが豆に近づく層として見ます。',
  },
  {
    id: 'mucilage',
    number: '03',
    name: 'ミューシレージ',
    shortName: 'ミューシレージ',
    color: '#d7a22a',
    accent: '#ffe287',
    chip: '甘みの調整役',
    ringStroke: '#f6d365',
    summary: '果肉の内側にある半透明の粘液質。糖分が多く、精製設計の差が最も見えやすい層です。',
    role: '糖分の残し方を細かく調整できるため、甘さ、質感、発酵感の出方をコントロールしやすい層です。',
    processing: 'ハニー精製の主役で、どれだけ残すかによって黄色、赤、黒ハニーの印象差が生まれます。',
    taste: '残す量が多いほどとろみや甘さが増し、少ないほどクリアで輪郭のある味になりやすいです。',
    tip: 'ハニー精製を理解したいときは、まずこの層を見れば全体像をつかみやすくなります。',
    focus: '「残す量で味が変わる」代表選手として見ます。',
  },
  {
    id: 'parchment',
    number: '04',
    name: 'パーチメント',
    shortName: 'パーチメント',
    color: '#c4a171',
    accent: '#f0d4a2',
    chip: '乾燥中の殻',
    ringStroke: '#ead0aa',
    summary: '生豆を包む薄い殻。乾燥や保管の間、豆を守る保護カプセルのような存在です。',
    role: '水分変化を急激にしすぎず、乾燥と熟成の安定に貢献します。',
    processing: 'ウォッシュドではこの殻付きで乾燥し、脱穀の直前に外します。ウェットハルでは外すタイミングが早いです。',
    taste: '直接味を生む層ではありませんが、乾燥や保管の安定性を通して品質とクリーンさに関わります。',
    tip: '見た目は地味でも、豆を守る工程管理の要です。',
    focus: '味そのものより、品質を守る仕組みとして見ます。',
  },
  {
    id: 'silverSkin',
    number: '05',
    name: 'シルバースキン',
    shortName: 'シルバースキン',
    color: '#ddd3c7',
    accent: '#fff9ef',
    chip: '極薄の膜',
    ringStroke: '#f7efe3',
    summary: 'パーチメントの内側にある、さらに薄い膜。焙煎時にチャフとしてはがれ落ちる部分です。',
    role: '生豆の表面をぴったり包み、微細な保護膜として機能します。',
    processing: '精製後も生豆に残り、焙煎時の熱で剥がれて排出されます。精製より焙煎で意識されやすい層です。',
    taste: '味に直接大きく出るわけではありませんが、焙煎時のチャフ量や熱の当たり方の理解につながります。',
    tip: '薄すぎて見逃しやすいので、図で位置関係をつかむのがいちばん早いです。',
    focus: 'パーチメントと生豆の間の薄い境界として見ます。',
  },
  {
    id: 'bean',
    number: '06',
    name: '生豆',
    shortName: '生豆',
    color: '#6f8f4b',
    accent: '#c8e39c',
    chip: '焙煎前の種子',
    summary: '焙煎前のコーヒー豆。ここまで残った種子が、焙煎で香りと味を獲得します。',
    role: '産地、品種、精製の情報を持ったまま焙煎へ渡される、味づくりの主役です。',
    processing: 'どの精製でも最終的にここへ到達しますが、途中の処理の違いが生豆の個性として残ります。',
    taste: '焙煎後の酸味、甘み、質感、香りの出方は、この生豆がどんな履歴を持っているかで変わります。',
    tip: 'ゴールは生豆ですが、味の理由はその外側の層にも残っています。',
    focus: '外の層が何を残したか、その結果として見るとつながります。',
  },
]

const CALL_OUTS: Record<PartId, { x1: number; y1: number; x2: number; y2: number }> = {
  skin: { x1: 330, y1: 106, x2: 404, y2: 84 },
  pulp: { x1: 314, y1: 148, x2: 402, y2: 138 },
  mucilage: { x1: 300, y1: 188, x2: 404, y2: 194 },
  parchment: { x1: 286, y1: 228, x2: 404, y2: 248 },
  silverSkin: { x1: 272, y1: 266, x2: 402, y2: 300 },
  bean: { x1: 250, y1: 316, x2: 394, y2: 352 },
}

function CherryCutaway({
  selected,
  onSelect,
}: {
  selected: PartId
  onSelect: (id: PartId) => void
}) {
  const selectedPart = CHERRY_PARTS.find((part) => part.id === selected)!

  return (
    <svg
      viewBox="0 0 460 420"
      className="h-auto w-full"
      aria-label="コーヒーチェリー断面図"
      role="img"
    >
      <defs>
        <radialGradient id="bgGlow" cx="48%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#fff9f0" />
          <stop offset="100%" stopColor="#efe4d6" />
        </radialGradient>
        <radialGradient id="skinGrad" cx="35%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#ff8f74" />
          <stop offset="38%" stopColor="#d84a33" />
          <stop offset="100%" stopColor="#7c1d18" />
        </radialGradient>
        <radialGradient id="pulpGrad" cx="40%" cy="34%" r="70%">
          <stop offset="0%" stopColor="#ffc18a" />
          <stop offset="45%" stopColor="#e0713d" />
          <stop offset="100%" stopColor="#9d3c20" />
        </radialGradient>
        <radialGradient id="mucilageGrad" cx="50%" cy="40%" r="72%">
          <stop offset="0%" stopColor="#fff3aa" />
          <stop offset="55%" stopColor="#edbf46" />
          <stop offset="100%" stopColor="#c59212" />
        </radialGradient>
        <radialGradient id="parchmentGrad" cx="52%" cy="44%" r="72%">
          <stop offset="0%" stopColor="#faecd0" />
          <stop offset="55%" stopColor="#d6b280" />
          <stop offset="100%" stopColor="#aa8156" />
        </radialGradient>
        <radialGradient id="silverGrad" cx="54%" cy="42%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#d7cdbf" stopOpacity="0.9" />
        </radialGradient>
        <radialGradient id="beanGrad" cx="42%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#d6eab0" />
          <stop offset="48%" stopColor="#7aa15a" />
          <stop offset="100%" stopColor="#496a2d" />
        </radialGradient>
        <radialGradient id="shineGrad" cx="30%" cy="24%" r="40%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="surfaceShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#3b2012" floodOpacity="0.16" />
        </filter>
        <filter id="layerGlow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="pulpTexture" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2" fill="#f8d3aa" opacity="0.45" />
          <circle cx="15" cy="10" r="1.6" fill="#f7c58f" opacity="0.28" />
          <circle cx="11" cy="17" r="1.8" fill="#e48752" opacity="0.25" />
        </pattern>
        <pattern id="mucilageTexture" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="8" r="2.2" fill="#fff3bd" opacity="0.28" />
          <circle cx="17" cy="16" r="3" fill="#ffeb9a" opacity="0.22" />
          <circle cx="22" cy="8" r="1.8" fill="#fffbe7" opacity="0.35" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="460" height="420" rx="42" fill="url(#bgGlow)" />

      <g filter="url(#surfaceShadow)">
        <path
          d="M192 44 C137 44 89 90 82 147 C76 191 96 243 135 290 C161 322 183 347 193 368 C206 347 226 323 252 294 C292 250 314 196 307 147 C300 89 248 44 192 44 Z"
          fill="url(#skinGrad)"
        />
        <path
          d="M191 73 C155 77 121 100 107 135 C93 169 100 216 126 256 C143 283 161 306 176 333 C181 319 192 304 208 286 C246 243 267 188 260 145 C253 103 225 77 191 73 Z"
          fill="url(#pulpGrad)"
        />
        <path
          d="M191 101 C166 105 143 123 134 148 C124 173 130 209 147 239 C160 262 172 282 184 303 C191 286 200 272 213 255 C237 223 250 185 246 151 C242 124 221 104 191 101 Z"
          fill="url(#mucilageGrad)"
          fillOpacity="0.88"
        />
        <path
          d="M191 129 C174 132 160 145 154 161 C147 178 151 203 163 225 C171 241 180 258 187 274 C193 260 201 248 210 236 C227 213 237 185 235 160 C232 142 216 128 191 129 Z"
          fill="url(#parchmentGrad)"
        />
        <path
          d="M188 150 C176 152 167 161 164 172 C160 186 164 203 173 219 C179 229 184 239 189 249 C193 240 199 230 206 221 C219 204 226 183 224 168 C222 157 211 149 188 150 Z"
          fill="none"
          stroke="url(#silverGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="url(#beanGrad)">
          <path d="M168 159 C151 167 145 191 150 211 C155 229 168 248 184 264 C190 251 199 239 206 230 C213 222 217 213 219 202 C223 182 213 160 194 154 C185 151 176 153 168 159 Z" />
          <path d="M214 158 C231 166 239 191 234 212 C229 229 216 249 199 265 C193 252 184 239 177 231 C171 223 166 213 164 203 C160 182 169 160 188 154 C197 151 206 152 214 158 Z" />
        </g>
      </g>

      <ellipse cx="182" cy="148" rx="62" ry="50" fill="url(#shineGrad)" opacity="0.72" />

      <path d="M194 43 C192 25 182 15 172 21" stroke="#6b3d18" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M195 45 C214 19 248 11 276 26 C257 53 221 58 195 45 Z" fill="#5f7f37" />
      <path d="M198 42 C219 32 245 28 270 27" stroke="#395122" strokeWidth="2" fill="none" opacity="0.55" />

      <InteractiveLayer
        id="skin"
        selected={selected === 'skin'}
        onSelect={onSelect}
        path="M192 44 C137 44 89 90 82 147 C76 191 96 243 135 290 C161 322 183 347 193 368 C206 347 226 323 252 294 C292 250 314 196 307 147 C300 89 248 44 192 44 Z"
        stroke={CHERRY_PARTS[0].accent}
      />
      <InteractiveLayer
        id="pulp"
        selected={selected === 'pulp'}
        onSelect={onSelect}
        path="M191 73 C155 77 121 100 107 135 C93 169 100 216 126 256 C143 283 161 306 176 333 C181 319 192 304 208 286 C246 243 267 188 260 145 C253 103 225 77 191 73 Z"
        stroke={CHERRY_PARTS[1].accent}
      />
      <InteractiveLayer
        id="mucilage"
        selected={selected === 'mucilage'}
        onSelect={onSelect}
        path="M191 101 C166 105 143 123 134 148 C124 173 130 209 147 239 C160 262 172 282 184 303 C191 286 200 272 213 255 C237 223 250 185 246 151 C242 124 221 104 191 101 Z"
        stroke={CHERRY_PARTS[2].accent}
      />
      <InteractiveLayer
        id="parchment"
        selected={selected === 'parchment'}
        onSelect={onSelect}
        path="M191 129 C174 132 160 145 154 161 C147 178 151 203 163 225 C171 241 180 258 187 274 C193 260 201 248 210 236 C227 213 237 185 235 160 C232 142 216 128 191 129 Z"
        stroke={CHERRY_PARTS[3].accent}
      />
      <InteractiveLayer
        id="silverSkin"
        selected={selected === 'silverSkin'}
        onSelect={onSelect}
        path="M188 150 C176 152 167 161 164 172 C160 186 164 203 173 219 C179 229 184 239 189 249 C193 240 199 230 206 221 C219 204 226 183 224 168 C222 157 211 149 188 150 Z"
        stroke={CHERRY_PARTS[4].accent}
        isOutline
      />
      <InteractiveBean selected={selected === 'bean'} onSelect={onSelect} />

      <path
        d="M192 83 C154 89 124 116 112 151 C100 186 108 229 132 265"
        fill="none"
        stroke="url(#pulpTexture)"
        strokeWidth="22"
        strokeLinecap="round"
        opacity="0.32"
      />
      <path
        d="M191 110 C170 114 151 129 144 149 C136 170 142 199 158 225"
        fill="none"
        stroke="url(#mucilageTexture)"
        strokeWidth="20"
        strokeLinecap="round"
        opacity="0.35"
      />

      {CHERRY_PARTS.map((part) => {
        const callout = CALL_OUTS[part.id]
        const isActive = part.id === selected
        const labelWidth = part.shortName.length > 6 ? 124 : 108
        return (
          <g key={part.id} style={{ pointerEvents: 'none' }}>
            <path
              d={`M ${callout.x1} ${callout.y1} C ${callout.x1 + 18} ${callout.y1 - 4} ${callout.x2 - 42} ${callout.y2} ${callout.x2} ${callout.y2}`}
              fill="none"
              stroke={isActive ? part.accent : '#b7ab9a'}
              strokeWidth={isActive ? 3 : 1.8}
              opacity={isActive ? 1 : 0.8}
            />
            <circle cx={callout.x1} cy={callout.y1} r={isActive ? 6 : 4.5} fill={isActive ? part.accent : '#d7ccbf'} />
            <g transform={`translate(${callout.x2 + 8}, ${callout.y2 - 16})`}>
              <rect
                width={isActive ? labelWidth : labelWidth - 12}
                height="30"
                rx="15"
                fill={isActive ? '#fffaf1' : '#f7f0e7'}
                stroke={isActive ? part.accent : '#ddd0c1'}
              />
              <text x="14" y="13" fill={isActive ? '#3a271a' : '#73675c'} fontSize="9" fontWeight="700" letterSpacing="0.16em">
                {part.number}
              </text>
              <text x="14" y="22" fill={isActive ? '#24180f' : '#574c43'} fontSize="11" fontWeight="700">
                {part.shortName}
              </text>
            </g>
          </g>
        )
      })}

      <g transform="translate(26 330)">
        <rect width="184" height="58" rx="24" fill="#fffaf1" stroke={selectedPart.accent} strokeWidth="1.5" />
        <text x="18" y="20" fill="#7f6d5c" fontSize="10" fontWeight="700" letterSpacing="0.18em">
          NOW VIEWING
        </text>
        <text x="18" y="39" fill="#261b12" fontSize="18" fontWeight="700">
          {selectedPart.name}
        </text>
        <text x="18" y="51" fill="#7c6859" fontSize="10.5">
          {selectedPart.focus}
        </text>
      </g>
    </svg>
  )
}

function InteractiveLayer({
  id,
  selected,
  onSelect,
  path,
  stroke,
  isOutline = false,
}: {
  id: PartId
  selected: boolean
  onSelect: (id: PartId) => void
  path: string
  stroke: string
  isOutline?: boolean
}) {
  return (
    <path
      d={path}
      fill={isOutline ? 'none' : 'transparent'}
      stroke={stroke}
      strokeWidth={selected ? (isOutline ? 8 : 5) : isOutline ? 10 : 20}
      strokeOpacity={selected ? 1 : 0}
      filter={selected ? 'url(#layerGlow)' : undefined}
      onClick={() => onSelect(id)}
      style={{ cursor: 'pointer', transition: 'all 180ms ease' }}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

function InteractiveBean({
  selected,
  onSelect,
}: {
  selected: boolean
  onSelect: (id: PartId) => void
}) {
  return (
    <g
      onClick={() => onSelect('bean')}
      style={{ cursor: 'pointer', transition: 'all 180ms ease' }}
      filter={selected ? 'url(#layerGlow)' : undefined}
    >
      <path
        d="M168 159 C151 167 145 191 150 211 C155 229 168 248 184 264 C190 251 199 239 206 230 C213 222 217 213 219 202 C223 182 213 160 194 154 C185 151 176 153 168 159 Z"
        fill="transparent"
        stroke={selected ? '#c8e39c' : 'transparent'}
        strokeWidth={selected ? 5 : 18}
        strokeOpacity={selected ? 1 : 0}
      />
      <path
        d="M214 158 C231 166 239 191 234 212 C229 229 216 249 199 265 C193 252 184 239 177 231 C171 223 166 213 164 203 C160 182 169 160 188 154 C197 151 206 152 214 158 Z"
        fill="transparent"
        stroke={selected ? '#c8e39c' : 'transparent'}
        strokeWidth={selected ? 5 : 18}
        strokeOpacity={selected ? 1 : 0}
      />
      <path
        d="M194 161 C184 175 181 193 183 211 C184 225 188 238 194 250"
        fill="none"
        stroke={selected ? '#32511f' : '#45662e'}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
    </g>
  )
}

function CherryDetailCard({ part }: { part: CherryPart }) {
  const sections = [
    { label: '役割', body: part.role },
    { label: '精製との関係', body: part.processing },
    { label: '味への影響', body: part.taste },
  ]

  return (
    <article
      className="rounded-[2rem] border p-5 shadow-[0_20px_50px_rgba(74,47,24,0.08)] md:p-6"
      style={{
        background: 'linear-gradient(180deg, rgba(255,251,245,0.98) 0%, rgba(247,240,231,0.96) 100%)',
        borderColor: 'rgba(119, 91, 68, 0.16)',
        animation: 'cardFadeIn 220ms ease',
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold tracking-[0.24em]" style={{ color: 'var(--ink-soft)' }}>
            SELECTED PART
          </p>
          <div className="mt-2 flex items-center gap-3">
            <span
              className="inline-flex rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.18em]"
              style={{ backgroundColor: `${part.color}18`, color: part.color }}
            >
              {part.number}
            </span>
            <h2 className="text-2xl font-black tracking-tight md:text-[2rem]" style={{ color: 'var(--accent-strong)' }}>
              {part.name}
            </h2>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-7 md:text-[15px]" style={{ color: 'var(--ink-soft)' }}>
            {part.summary}
          </p>
        </div>

        <div
          className="min-w-[132px] rounded-[1.5rem] border px-4 py-3"
          style={{ borderColor: `${part.color}35`, backgroundColor: `${part.color}10` }}
        >
          <p className="text-[10px] font-bold tracking-[0.18em]" style={{ color: part.color }}>
            観察ポイント
          </p>
          <p className="mt-2 text-sm font-semibold leading-6" style={{ color: 'var(--accent-strong)' }}>
            {part.focus}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {sections.map((section) => (
          <section
            key={section.label}
            className="rounded-[1.4rem] border bg-white/80 p-4"
            style={{ borderColor: 'rgba(119, 91, 68, 0.12)' }}
          >
            <p className="text-[11px] font-bold tracking-[0.18em]" style={{ color: part.color }}>
              {section.label}
            </p>
            <p className="mt-2 text-sm leading-7 md:text-[15px]" style={{ color: 'var(--foreground)' }}>
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <section
        className="mt-4 rounded-[1.5rem] border px-4 py-4"
        style={{
          borderColor: `${part.color}30`,
          background: `linear-gradient(135deg, ${part.color}12 0%, rgba(255,255,255,0.92) 100%)`,
        }}
      >
        <p className="text-[11px] font-bold tracking-[0.18em]" style={{ color: part.color }}>
          初心者向けのひと言
        </p>
        <p className="mt-2 text-sm leading-7" style={{ color: 'var(--accent-strong)' }}>
          {part.tip}
        </p>
      </section>
    </article>
  )
}

function ChapterActions() {
  return (
    <>
      <div
        className="rounded-[2rem] border p-5 shadow-[0_16px_40px_rgba(61,39,22,0.06)] md:p-6"
        style={{ background: 'rgba(255,249,242,0.95)', borderColor: 'var(--border)' }}
      >
        <p className="text-[11px] font-bold tracking-[0.2em]" style={{ color: 'var(--ink-soft)' }}>
          NEXT STEP
        </p>
        <h3 className="mt-3 text-xl font-black tracking-tight" style={{ color: 'var(--accent-strong)' }}>
          ここから精製の理解へつなげる
        </h3>
        <p className="mt-3 text-sm leading-7" style={{ color: 'var(--ink-soft)' }}>
          どの層を残すか、いつ外すかが分かると、精製方法の違いがただの用語ではなく工程の設計として見えてきます。
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <Link
            href="/learn/processing"
            className="rounded-[1.4rem] border px-4 py-4 text-sm font-bold transition-transform hover:-translate-y-0.5"
            style={{ background: 'white', borderColor: 'var(--border)', color: 'var(--accent-strong)' }}
          >
            精製方法を比較する
          </Link>
          <Link
            href="/learn/processing-simulator"
            className="rounded-[1.4rem] px-4 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #2f241c 0%, #5c4738 100%)' }}
          >
            シミュレーターで体験する
          </Link>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-[1.4rem] border px-4 py-3" style={{ borderColor: 'var(--border)', background: 'rgba(252,250,247,0.92)' }}>
        <Link href="/learn" className="text-sm font-semibold" style={{ color: 'var(--ink-soft)' }}>
          ← 学習マップへ戻る
        </Link>
        <Link href="/learn/processing" className="text-sm font-semibold" style={{ color: 'var(--accent-strong)' }}>
          次の章へ →
        </Link>
      </div>

      <div
        className="fixed inset-x-0 bottom-0 z-30 border-t px-4 py-3 md:hidden"
        style={{
          background: 'rgba(252,250,247,0.94)',
          borderColor: 'rgba(119, 91, 68, 0.14)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="mx-auto flex max-w-6xl gap-3">
          <Link
            href="/learn"
            className="flex-1 rounded-full border px-4 py-3 text-center text-sm font-semibold"
            style={{ borderColor: 'var(--border)', color: 'var(--ink-soft)', background: 'white' }}
          >
            学習マップ
          </Link>
          <Link
            href="/learn/processing"
            className="flex-1 rounded-full px-4 py-3 text-center text-sm font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #2f241c 0%, #5c4738 100%)' }}
          >
            次は精製へ
          </Link>
        </div>
      </div>
    </>
  )
}

export default function CherryPage() {
  const [selectedPart, setSelectedPart] = useState<PartId>('mucilage')
  const activePart = CHERRY_PARTS.find((part) => part.id === selectedPart)!

  return (
    <div className="min-h-screen pb-24 md:pb-10" style={{ background: 'linear-gradient(180deg, #f6f0e6 0%, #efe5d7 100%)' }}>
      <header
        className="sticky top-0 z-20 border-b"
        style={{
          background: 'rgba(246, 240, 230, 0.9)',
          borderColor: 'rgba(119, 91, 68, 0.12)',
          backdropFilter: 'blur(14px)',
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/learn" className="text-sm font-semibold" style={{ color: 'var(--ink-soft)' }}>
            ← 学習マップ
          </Link>
          <div className="text-right">
            <p className="text-[10px] font-bold tracking-[0.24em]" style={{ color: 'var(--ink-soft)' }}>
              CHAPTER 01
            </p>
            <p className="text-xs font-semibold" style={{ color: 'var(--accent-strong)' }}>
              チェリーの構造
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-10">
        <section
          className="rounded-[2.2rem] border p-5 shadow-[0_30px_80px_rgba(57,37,22,0.08)] md:p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(252,250,247,0.96) 0%, rgba(243,235,224,0.98) 100%)',
            borderColor: 'rgba(119, 91, 68, 0.14)',
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.32em]" style={{ color: 'var(--ink-soft)' }}>
                {APP_NAME}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em]" style={{ color: '#9b8b7d' }}>
                {APP_SUBTITLE}
              </p>
              <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-5xl" style={{ color: 'var(--accent-strong)' }}>
                触った瞬間に、
                <br />
                構造と役割がつながる
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 md:text-base" style={{ color: 'var(--ink-soft)' }}>
                コーヒーチェリーを教材ではなく図鑑として再設計しました。図解、選択、解説が一画面で連動し、
                「今どの部位を見ているか」「精製や味にどう関係するか」を迷わず追えます。
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                '1. 図の部位をタップ',
                '2. すぐ下のチップで切り替え',
                '3. 同じ画面内で役割と味を確認',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border px-4 py-4"
                  style={{ background: 'rgba(255,255,255,0.72)', borderColor: 'rgba(119, 91, 68, 0.12)' }}
                >
                  <p className="text-sm font-semibold leading-6" style={{ color: 'var(--accent-strong)' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[2.2rem] border p-4 shadow-[0_28px_70px_rgba(62,40,23,0.06)] md:p-6" style={{ background: 'rgba(252,250,247,0.94)', borderColor: 'rgba(119, 91, 68, 0.12)' }}>
          <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="order-1 rounded-[2rem] border p-4 md:p-5" style={{ borderColor: 'rgba(119, 91, 68, 0.12)', background: 'linear-gradient(180deg, #fffaf4 0%, #f2e8da 100%)' }}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.22em]" style={{ color: 'var(--ink-soft)' }}>
                    INTERACTIVE CUTAWAY
                  </p>
                  <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--accent-strong)' }}>
                    図解を触ると、選択中の層が発光して説明も切り替わります。
                  </p>
                </div>
                <span
                  className="rounded-full px-3 py-1 text-[11px] font-bold"
                  style={{ backgroundColor: `${activePart.color}18`, color: activePart.color }}
                >
                  {activePart.shortName}
                </span>
              </div>
              <div className="mt-4">
                <CherryCutaway selected={selectedPart} onSelect={setSelectedPart} />
              </div>
            </div>

            <div className="order-3 lg:order-2">
              <CherryDetailCard part={activePart} />
            </div>

            <div className="order-2 lg:order-3 lg:col-span-2">
              <div className="rounded-[1.8rem] border px-4 py-4 md:px-5" style={{ borderColor: 'rgba(119, 91, 68, 0.12)', background: 'rgba(255,249,242,0.9)' }}>
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.22em]" style={{ color: 'var(--ink-soft)' }}>
                      LEARNING CHIPS
                    </p>
                    <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--accent-strong)' }}>
                      図のすぐ近くで切り替えて、その場で理解する
                    </p>
                  </div>
                  <p className="text-xs md:text-sm" style={{ color: 'var(--ink-soft)' }}>
                    横にスワイプしながら、外側から中心へ追えます。
                  </p>
                </div>

                <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                  {CHERRY_PARTS.map((part) => {
                    const active = part.id === selectedPart
                    return (
                      <button
                        key={part.id}
                        type="button"
                        onClick={() => setSelectedPart(part.id)}
                        aria-pressed={active}
                        className="min-w-[160px] flex-none rounded-[1.5rem] border px-4 py-3 text-left transition-all md:min-w-[176px]"
                        style={
                          active
                            ? {
                                background: `linear-gradient(135deg, ${part.color} 0%, ${part.accent} 100%)`,
                                borderColor: part.color,
                                color: '#fffdf8',
                                boxShadow: `0 10px 24px ${part.color}33`,
                                transform: 'translateY(-1px)',
                              }
                            : {
                                background: 'white',
                                borderColor: 'rgba(119, 91, 68, 0.12)',
                                color: 'var(--accent-strong)',
                              }
                        }
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[11px] font-bold tracking-[0.18em] opacity-80">{part.number}</span>
                          <span
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: active ? 'rgba(255,255,255,0.75)' : part.color }}
                          />
                        </div>
                        <p className="mt-2 text-base font-bold">{part.name}</p>
                        <p className="mt-1 text-xs leading-5 opacity-85">{part.chip}</p>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <ChapterActions />
        </section>
      </main>
    </div>
  )
}
