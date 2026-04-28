import Link from "next/link";

export default function LearnPage() {
  const chapters = [
    {
      number: "01",
      title: "コーヒーチェリーを知る",
      emoji: "🍒",
      description: "コーヒーの実の構造と、生産地の環境について学ぼう",
      color: "bg-red-50 border-red-200",
      badge: "bg-red-100 text-red-700",
    },
    {
      number: "02",
      title: "精製方法を知る",
      emoji: "☀️",
      description: "ナチュラル・ウォッシュト・ハニー、それぞれの違いを理解しよう",
      color: "bg-amber-50 border-amber-200",
      badge: "bg-amber-100 text-amber-700",
    },
    {
      number: "03",
      title: "生豆から焙煎へ",
      emoji: "🔥",
      description: "焙煎の深さが味わいをどう変えるかを学ぼう",
      color: "bg-orange-50 border-orange-200",
      badge: "bg-orange-100 text-orange-700",
    },
    {
      number: "04",
      title: "挽き目と抽出",
      emoji: "⚙️",
      description: "グラインド粒度と抽出方法の関係を理解しよう",
      color: "bg-yellow-50 border-yellow-200",
      badge: "bg-yellow-100 text-yellow-700",
    },
    {
      number: "05",
      title: "一杯のコーヒーができるまで",
      emoji: "☕",
      description: "農園から手元のカップまでの旅を一気におさらいしよう",
      color: "bg-stone-50 border-stone-300",
      badge: "bg-stone-200 text-stone-700",
    },
  ];

  const steps = [
    {
      step: "Step 1",
      title: "チェリーの構造を見る",
      emoji: "🍒",
      description: "まずはコーヒーが「果実」であることから始めよう。種・果肉・外皮の役割を理解する。",
    },
    {
      step: "Step 2",
      title: "精製方法を選んでみる",
      emoji: "🌿",
      description: "ナチュラルとウォッシュト、どちらが自分好みかを考えながら違いを学ぶ。",
    },
    {
      step: "Step 3",
      title: "コーヒーが生豆になる流れを理解する",
      emoji: "🌱",
      description: "収穫から精製・乾燥・脱穀まで、生豆になるまでの工程をたどる。",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* ナビゲーション */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm transition-colors">
            ← ホームへ
          </Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-medium text-amber-800">☕ Coffee Learning Map</span>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-stone-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-12 text-8xl rotate-12">☕</div>
          <div className="absolute top-16 right-20 text-6xl -rotate-6">🍒</div>
          <div className="absolute bottom-12 left-1/4 text-7xl rotate-3">🌿</div>
          <div className="absolute bottom-8 right-16 text-5xl -rotate-12">🔥</div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-700/60 rounded-full px-4 py-1.5 mb-6 text-amber-200 text-sm font-medium border border-amber-600/50">
            <span>📚</span>
            <span>コーヒー学習マップ</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Coffee Learning Map
          </h1>
          <p className="text-lg md:text-xl text-amber-200 max-w-xl mx-auto leading-relaxed">
            一杯のコーヒーができるまでを、<br className="hidden sm:block" />
            地図のように楽しく学ぶ
          </p>

          <div className="flex items-center justify-center gap-2 mt-10">
            {["01", "02", "03", "04", "05"].map((n) => (
              <div key={n} className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-amber-700/60 border border-amber-500/50 flex items-center justify-center text-xs font-bold text-amber-200">
                  {n}
                </div>
              </div>
            ))}
          </div>
          <p className="text-amber-400 text-xs mt-3">5つの章で構成されています</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

        {/* 学習マップ */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🗺️</span>
            <div>
              <h2 className="text-xl font-bold text-stone-800">学習マップ</h2>
              <p className="text-sm text-stone-500">5つの章でコーヒーの全体像をつかもう</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {chapters.map((ch, i) => (
              <div
                key={ch.number}
                className={`rounded-2xl border-2 p-5 transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer ${ch.color} ${i === 4 ? "sm:col-span-2" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{ch.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${ch.badge}`}>
                        Chapter {ch.number}
                      </span>
                    </div>
                    <h3 className="font-bold text-stone-800 mb-1">{ch.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{ch.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* おすすめ学習ルート */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">✨</span>
            <div>
              <h2 className="text-xl font-bold text-stone-800">まず学ぶべきおすすめルート</h2>
              <p className="text-sm text-stone-500">初めてなら、このステップで始めよう</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-amber-200 hidden sm:block" />

            <div className="space-y-4">
              {steps.map((item, i) => (
                <div key={item.step} className="relative flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-sm z-10 shadow-md">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-amber-100 p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-1">
                      <span>{item.emoji}</span>
                      <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-bold text-stone-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-amber-800 to-stone-700 rounded-3xl p-8 md:p-10 text-center text-white">
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold mb-2">さっそく学び始めよう</h2>
          <p className="text-amber-200 text-sm mb-8">
            まずはコーヒーチェリーの構造から。知れば知るほど、一杯が深くなる。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn/cherry" className="bg-white text-amber-900 font-bold px-6 py-3 rounded-full hover:bg-amber-50 transition-colors shadow-md text-sm text-center">
              🍒 チェリーの構造を学ぶ
            </Link>
            <Link href="/learn/processing-simulator" className="bg-amber-700/60 text-white font-bold px-6 py-3 rounded-full hover:bg-amber-700/80 transition-colors border border-amber-500/50 text-sm text-center">
              ☀️ 精製方法シミュレーターへ
            </Link>
          </div>
        </section>

        <footer className="text-center text-stone-400 text-xs pb-8">
          <p>Coffee Textbook — コーヒーを、もっと深く楽しむために</p>
        </footer>
      </div>
    </div>
  );
}
