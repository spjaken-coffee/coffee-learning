export type Chapter = {
  number: string;
  slug: string;
  title: string;
  emoji: string;
  description: string;
  status: "available" | "preview";
  href: string;
  color: string;
  badge: string;
  objective: string;
};

export const chapters: Chapter[] = [
  {
    number: "01",
    slug: "cherry",
    title: "コーヒーチェリーを知る",
    emoji: "🍒",
    description: "コーヒーの実の構造を見ながら、豆になる前の姿を理解する。",
    status: "available",
    href: "/learn/cherry",
    color: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-700",
    objective: "外皮・果肉・ミューシレージ・パーチメント・生豆の役割がわかる",
  },
  {
    number: "02",
    slug: "processing-simulator",
    title: "精製方法を知る",
    emoji: "☀️",
    description: "自分で工程を選びながら、精製方法の違いと味への影響を学ぶ。",
    status: "available",
    href: "/learn/processing-simulator",
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    objective: "ナチュラル、ウォッシュト、ハニーなどの分岐と特徴がわかる",
  },
  {
    number: "03",
    slug: "roasting",
    title: "生豆から焙煎へ",
    emoji: "🔥",
    description: "焙煎度の違いで、酸味・甘み・苦味・香りがどう変化するかをつかむ。",
    status: "available",
    href: "/learn/roasting",
    color: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    objective: "浅煎りから深煎りまでの変化と味づくりの考え方がわかる",
  },
  {
    number: "04",
    slug: "brewing",
    title: "挽き目と抽出の科学",
    emoji: "⚙️",
    description: "粒度と抽出速度の関係から、味のブレる理由を理解する。",
    status: "available",
    href: "/learn/brewing",
    color: "bg-yellow-50 border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
    objective: "粗挽き・中挽き・細挽きと抽出バランスの考え方がわかる",
  },
  {
    number: "05",
    slug: "journey",
    title: "一杯のコーヒーができるまで",
    emoji: "☕",
    description: "農園からカップまでの流れを、復習しながらつなげて理解する。",
    status: "available",
    href: "/learn/journey",
    color: "bg-stone-50 border-stone-300",
    badge: "bg-stone-200 text-stone-700",
    objective: "各章の知識をまとめて、一杯の背景をストーリーで説明できる",
  },
];

export const recommendedSteps = [
  {
    step: "Step 1",
    title: "チェリーの構造を見る",
    emoji: "🍒",
    description: "まずはコーヒーが果実であることを知り、どこが後の風味に関わるのかを掴む。",
    href: "/learn/cherry",
  },
  {
    step: "Step 2",
    title: "精製方法を選んでみる",
    emoji: "🌿",
    description: "果肉を残すか、洗うか、発酵させるかを選び、結果の違いを体感する。",
    href: "/learn/processing-simulator",
  },
  {
    step: "Step 3",
    title: "焙煎と抽出へつなげる",
    emoji: "🔥",
    description: "精製で生まれた素材の個性が、焙煎と抽出でどう見えるかを学び始める。",
    href: "/learn/roasting",
  },
];
