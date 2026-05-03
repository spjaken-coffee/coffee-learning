export type ChapterStatus = "available" | "in-progress" | "planned";

export type Chapter = {
  id: string;
  number: string;
  title: string;
  slug: string;
  href: string;
  theme: string;
  emoji: string;
  summary: string;
  outcome: string;
  question: string;
  estimatedMinutes: number;
  formats: string[];
  status: ChapterStatus;
};

export type LearningTool = {
  title: string;
  description: string;
  href: string;
  badge: string;
};

export type ProcessingMethod = {
  id: string;
  name: string;
  aliases?: string[];
  oneLine: string;
  process: string[];
  remains: string;
  fermentation: string;
  drying: string;
  flavor: string[];
  regions: string[];
  merits: string[];
  drawbacks: string[];
  compareFocus: string;
};

export const experiencePillars = [
  {
    title: "農園からカップまでをつなぐ",
    copy: "チェリー、精製、焙煎、抽出を別々ではなく、ひとつの味づくりとして理解する。",
  },
  {
    title: "読むだけで終わらせない",
    copy: "選択、比較、シミュレーション、復習を通して、知識を手で触れる形に変える。",
  },
  {
    title: "初心者向けの言葉で、浅くしない",
    copy: "専門用語は噛み砕きながら、スペシャルティコーヒーの奥行きはきちんと残す。",
  },
];

export const chapterCatalog: Chapter[] = [
  {
    id: "cherry",
    number: "01",
    title: "コーヒーチェリーの構造",
    slug: "cherry",
    href: "/learn/cherry",
    theme: "Structure",
    emoji: "🍒",
    summary: "外皮、果肉、ミューシレージ、パーチメント、生豆までを断面図で理解する。",
    outcome: "精製方法の違いが、どの部位を残すかの違いだと説明できる。",
    question: "どの部位が、後の風味や精製方法に関わるのか？",
    estimatedMinutes: 12,
    formats: ["図解", "部位比較", "基礎理解"],
    status: "available",
  },
  {
    id: "processing",
    number: "02",
    title: "精製方法の深掘り",
    slug: "processing",
    href: "/learn/processing",
    theme: "Processing",
    emoji: "☀️",
    summary: "精製工程、残す部位、発酵、乾燥、風味傾向を比較しながら学ぶ。",
    outcome: "Natural と Washed だけでなく、Honey や Anaerobic の差も言葉で整理できる。",
    question: "精製の選択は、味のどこを変えるのか？",
    estimatedMinutes: 20,
    formats: ["比較表", "工程カード", "シミュレーター"],
    status: "available",
  },
  {
    id: "roasting",
    number: "03",
    title: "焙煎と味づくり",
    slug: "roasting",
    href: "/learn/roasting",
    theme: "Roasting",
    emoji: "🔥",
    summary: "浅煎りから深煎りまでの違いと、素材をどう表現するかを学ぶ。",
    outcome: "焙煎度が酸味、甘み、苦味、香り、ボディにどう影響するか説明できる。",
    question: "素材の個性を残すか、整えるか、押し出すか？",
    estimatedMinutes: 18,
    formats: ["選択式", "比較", "味の整理"],
    status: "available",
  },
  {
    id: "brewing",
    number: "04",
    title: "抽出の科学",
    slug: "brewing",
    href: "/learn/brewing",
    theme: "Brewing",
    emoji: "⚙️",
    summary: "挽き目、湯温、比率、時間をどう調整すると味が変わるかを理解する。",
    outcome: "酸っぱい、苦い、薄いと感じたときに、どのパラメーターを触るか判断できる。",
    question: "一杯の味を、抽出でどう整えるのか？",
    estimatedMinutes: 20,
    formats: ["理論", "調整ガイド", "シミュレーション予定"],
    status: "available",
  },
  {
    id: "journey",
    number: "05",
    title: "農園からカップまで",
    slug: "journey",
    href: "/learn/journey",
    theme: "Journey",
    emoji: "☕",
    summary: "チェリー、精製、焙煎、抽出を一本の流れとして復習する。",
    outcome: "味の背景を、工程ごとの選択としてストーリーで説明できる。",
    question: "この一杯の個性は、どの工程から来たのか？",
    estimatedMinutes: 10,
    formats: ["タイムライン", "復習", "要約"],
    status: "available",
  },
];

export const learningTools: LearningTool[] = [
  {
    title: "学習マップ",
    description: "今どこを学んでいて、次にどこへ進むかを可視化する。",
    href: "/learn",
    badge: "Map",
  },
  {
    title: "精製シミュレーター",
    description: "選択肢を進めながら、どの精製方法にたどり着くかを体験する。",
    href: "/learn/processing-simulator",
    badge: "Tool",
  },
  {
    title: "焙煎ミニシミュレーター",
    description: "素材の個性と仕上げたい味から、焙煎度の考え方をつかむ。",
    href: "/learn/roasting",
    badge: "Tool",
  },
];

export const recommendedRoute = [
  {
    label: "Start",
    title: "チェリーから入る",
    description: "まず果実の構造を知ると、後の精製学習が一気に理解しやすくなる。",
    href: "/learn/cherry",
  },
  {
    label: "Compare",
    title: "精製方法を比較する",
    description: "どの部位を残すか、発酵させるかで風味が変わる理由をつかむ。",
    href: "/learn/processing",
  },
  {
    label: "Shape",
    title: "焙煎と抽出で味を整える",
    description: "素材をどう表現するか、最後にどう引き出すかを学ぶ。",
    href: "/learn/roasting",
  },
];

export const processingMethods: ProcessingMethod[] = [
  {
    id: "natural",
    name: "Natural",
    aliases: ["Dry Process"],
    oneLine: "チェリーを丸ごと乾燥させ、果実由来の甘みや発酵感を豆に移す方法。",
    process: [
      "完熟チェリーを選別する",
      "果肉を残したまま乾燥ベッドやパティオに広げる",
      "均一に乾くように攪拌しながら乾燥させる",
      "十分に乾いたら脱穀して生豆を取り出す",
    ],
    remains: "外皮・果肉・ミューシレージを乾燥中に残す",
    fermentation: "あり。乾燥中にゆっくり自然発酵が進みやすい",
    drying: "天日乾燥が中心。時間は比較的長い",
    flavor: ["ベリー", "ワイン感", "厚い甘み", "果実感"],
    regions: ["エチオピア", "ブラジル", "イエメン"],
    merits: ["果実感が分かりやすい", "設備が比較的シンプル", "個性的な風味を作りやすい"],
    drawbacks: ["乾燥管理が難しい", "発酵のムラが出やすい", "クリーンさを保つのが難しい"],
    compareFocus: "飲み比べでは、香りの華やかさと後味の果実感に注目すると差が見えやすい。",
  },
  {
    id: "washed",
    name: "Washed",
    oneLine: "果肉とミューシレージを洗い流し、豆本来の輪郭をクリアに見せる方法。",
    process: [
      "チェリーをパルピングして果肉を除去する",
      "発酵槽や機械でミューシレージを取り除く",
      "きれいな水で洗浄する",
      "パーチメントのまま乾燥させる",
    ],
    remains: "乾燥時には主にパーチメントだけを残す",
    fermentation: "あり。ミューシレージ除去のために短時間発酵を行う場合が多い",
    drying: "天日または機械乾燥。比較的均一に進めやすい",
    flavor: ["クリーン", "透明感", "フローラル", "明るい酸"],
    regions: ["ケニア", "コロンビア", "エチオピア"],
    merits: ["豆本来の個性が見えやすい", "味の透明感が高い", "再現性を取りやすい"],
    drawbacks: ["大量の水が必要", "設備と管理コストが高い", "果実感は控えめになりやすい"],
    compareFocus: "香りの派手さより、酸の輪郭と後味のクリーンさを見ると理解しやすい。",
  },
  {
    id: "honey",
    name: "Honey / Pulped Natural",
    oneLine: "果肉を取ったあと、ミューシレージを残して乾燥させ、甘みと質感を作る方法。",
    process: [
      "チェリーをパルピングして果肉を除去する",
      "ミューシレージを一部または多く残す",
      "乾燥ベッドでゆっくり乾燥させる",
      "残す量に応じて Black / Red / Yellow などに分かれる",
    ],
    remains: "ミューシレージを意図的に残す",
    fermentation: "あり。残った糖分によって穏やかな発酵が起こりやすい",
    drying: "天日乾燥が中心。付着物が多いほど乾燥は難しい",
    flavor: ["甘い", "やわらかい酸", "シロップ感", "ナッツ感"],
    regions: ["コスタリカ", "エルサルバドル", "ブラジル"],
    merits: ["Washed と Natural の中間を作りやすい", "甘みが出しやすい", "個性の調整幅が広い"],
    drawbacks: ["乾燥管理が難しい", "付着物によるムラが出やすい", "分類が複雑で理解しにくい"],
    compareFocus: "クリーンさと甘みのバランス、口当たりの厚さに注目すると違いが分かる。",
  },
  {
    id: "anaerobic",
    name: "Anaerobic Fermentation",
    oneLine: "酸素を遮断して発酵を管理し、強い個性や複雑さを引き出す方法。",
    process: [
      "チェリーまたはパルピング後の状態で密閉タンクに入れる",
      "酸素を遮断した環境で時間と温度を管理する",
      "狙いの発酵後に乾燥工程へ進む",
      "必要に応じて Natural や Washed と組み合わせる",
    ],
    remains: "実装の流儀によるが、チェリーごと入れるケースも多い",
    fermentation: "あり。密閉環境で強く管理される",
    drying: "発酵後に天日または機械乾燥",
    flavor: ["トロピカル", "スパイス", "濃い甘み", "発酵感"],
    regions: ["コスタリカ", "コロンビア", "ブラジル"],
    merits: ["個性を強く出しやすい", "実験的なロットに向く", "ブランド差別化しやすい"],
    drawbacks: ["過発酵リスクが高い", "好き嫌いが分かれやすい", "管理精度が必要"],
    compareFocus: "香りのインパクト、発酵感の強さ、後味の複雑さを比べると特徴が見えやすい。",
  },
  {
    id: "carbonic",
    name: "Carbonic Maceration",
    oneLine: "ワイン醸造由来の考え方を取り入れ、二酸化炭素環境で果実ごと発酵させる方法。",
    process: [
      "チェリーを密閉タンクに入れる",
      "タンク内を CO2 優位の環境にする",
      "果実内部から発酵を進める",
      "その後、乾燥や洗浄など次工程へ進む",
    ],
    remains: "チェリーのまま進めるケースが中心",
    fermentation: "あり。CO2 優位の環境で進行する",
    drying: "後工程によって Natural 寄りにも Washed 寄りにもなる",
    flavor: ["赤ワイン感", "華やか", "濃い果実感", "高い複雑性"],
    regions: ["コロンビア", "コスタリカ", "パナマ"],
    merits: ["非常にユニークな香味を作りやすい", "競技会向けの個性が出やすい", "話題性が高い"],
    drawbacks: ["管理が難しい", "工程理解が難解", "味が過剰になることがある"],
    compareFocus: "Anaerobic よりもさらに果実感や香りの立ち上がりが強いかを見ると差がつかみやすい。",
  },
  {
    id: "wet-hulled",
    name: "Wet Hulled",
    aliases: ["Giling Basah"],
    oneLine: "高い水分量のままパーチメントを外し、独特のボディを生むインドネシア系の方法。",
    process: [
      "チェリーをパルピングする",
      "短く発酵または洗浄して粘液質を減らす",
      "高水分のままパーチメントを除去する",
      "その後さらに乾燥させて仕上げる",
    ],
    remains: "パーチメントを早い段階で外す",
    fermentation: "あり。短時間の発酵や洗浄を伴うことが多い",
    drying: "半乾燥の段階で脱穀し、その後に追い乾燥する",
    flavor: ["アーシー", "ハーブ感", "重いボディ", "低い酸"],
    regions: ["スマトラ", "スラウェシ", "フローレス"],
    merits: ["独特の質感が出る", "湿潤環境に適応した方法", "個性が明確"],
    drawbacks: ["クリーンさは出しにくい", "乾燥管理が難しい", "好みが分かれる"],
    compareFocus: "口当たりの重さ、土っぽさ、酸の穏やかさを感じ取ると分かりやすい。",
  },
  {
    id: "semi-washed",
    name: "Semi Washed",
    oneLine: "Washed と Honey の中間に位置し、洗浄をしつつ成分を一部残す考え方の方法。",
    process: [
      "チェリーをパルピングする",
      "ミューシレージを部分的に除去する",
      "必要に応じて軽い洗浄を行う",
      "パーチメントのまま乾燥させる",
    ],
    remains: "一部の粘液質を残すことが多い",
    fermentation: "ケースによる。短く管理することが多い",
    drying: "比較的均一に乾燥しやすい",
    flavor: ["穏やかな甘み", "中庸な酸", "飲みやすい", "軽い厚み"],
    regions: ["インドネシア", "中南米の一部農園"],
    merits: ["味のバランスを作りやすい", "中間的で理解しやすい", "汎用性がある"],
    drawbacks: ["定義が曖昧", "農園ごとの差が大きい", "特徴がぼやける場合がある"],
    compareFocus: "Washed より少し甘いか、Honey ほど重くないかを見ると中間性を理解しやすい。",
  },
  {
    id: "yeast",
    name: "Yeast Fermentation",
    oneLine: "特定の酵母を加えて発酵をコントロールし、狙った香味を引き出す方法。",
    process: [
      "チェリーまたはパルピング後の状態を用意する",
      "選択した酵母を投入する",
      "時間、温度、糖度を管理しながら発酵させる",
      "狙いの発酵後に乾燥または洗浄へ進む",
    ],
    remains: "実装により異なる。Natural 系にも Washed 系にも組み込める",
    fermentation: "あり。酵母を意図的に使って誘導する",
    drying: "採用する精製フレームによって異なる",
    flavor: ["設計された香り", "明確なフルーツ感", "高い再現性", "複雑さ"],
    regions: ["コロンビア", "コスタリカ", "実験的ロット全般"],
    merits: ["香味設計がしやすい", "再現性を高めやすい", "新しい表現に向く"],
    drawbacks: ["理解に前提知識が必要", "不自然に感じる人もいる", "工程コストが上がる"],
    compareFocus: "自然発酵よりも香りの方向が明確かどうかに注目すると違いが掴みやすい。",
  },
];
