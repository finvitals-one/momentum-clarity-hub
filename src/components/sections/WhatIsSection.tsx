import { MomentumChart } from "@/components/MomentumChart";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const indicators = [
  { abbr: "RS", name: "Relative Strength (vs. Nifty50)" },
  { abbr: "EMA", name: "Exponential Moving Average" },
  { abbr: "ST", name: "Super Trend" },
  { abbr: "RSI", name: "Relative Strength Index" },
  { abbr: "ADX", name: "Average Directional Index" },
  { abbr: "MACD", name: "Moving Average Convergence Divergence" },
];

export const WhatIsSection = () => {
  const header = useScrollReveal();
  const indGrid = useScrollReveal();
  const chart = useScrollReveal();
  const zones = useScrollReveal();

  return (
    <section id="how-it-works" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            One Score. Three Zones. Less Confusion. More Clarity.
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            MomentoScope is a proprietary system that combines six powerful technical indicators on <span className="font-bold text-foreground">weekly timeframe</span> into one score and three zones — so you always know where the momentum is, and where it isn't.
          </p>
        </div>

        {/* Six Indicators — ABOVE chart */}
        <div
          ref={indGrid.ref}
          className="mx-auto mb-12 max-w-4xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {indicators.map((ind, i) => (
            <div
              key={ind.abbr}
              className={`group rounded-xl border bg-card p-5 text-center transition-all hover:border-primary/30 hover:shadow-md hover-scale duration-700 ${indGrid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: indGrid.isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <span className="mb-2 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                {ind.abbr}
              </span>
              <p className="text-sm text-muted-foreground">{ind.name}</p>
            </div>
          ))}
        </div>

        {/* Animated Momentum Chart */}
        <div
          ref={chart.ref}
          className={`mx-auto mb-12 max-w-4xl transition-all duration-700 ${chart.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <MomentumChart />
        </div>

        {/* Scoring Zones Table */}
        <div
          ref={zones.ref}
          className={`mx-auto max-w-4xl transition-all duration-700 ${zones.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="overflow-hidden rounded-2xl border bg-card shadow-lg">
            <div className="grid grid-cols-3 border-b bg-muted/50 px-6 py-4 text-sm font-semibold text-muted-foreground">
              <span>Zone</span>
              <span>Score Range</span>
              <span>What It Means</span>
            </div>

            {/* Green */}
            <div className="grid grid-cols-3 items-center gap-4 border-b px-6 py-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full text-xl animate-glow-green" style={{ background: 'hsl(142 60% 95%)' }}>🟢</span>
                <span className="font-bold" style={{ color: 'hsl(142 60% 35%)' }}>Green Zone</span>
              </div>
              <span className="text-2xl font-bold">70–100</span>
              <p className="text-sm text-muted-foreground">Strong bullish momentum. Multiple indicators confirming uptrend. Potential entry opportunities.</p>
            </div>

            {/* Yellow */}
            <div className="grid grid-cols-3 items-center gap-4 border-b px-6 py-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full text-xl animate-glow-yellow" style={{ background: 'hsl(45 90% 95%)' }}>🟡</span>
                <span className="font-bold" style={{ color: 'hsl(45 80% 35%)' }}>Yellow Zone</span>
              </div>
              <span className="text-2xl font-bold">50–69</span>
              <p className="text-sm text-muted-foreground">Transitional phase. Consolidating or building momentum. Monitor closely.</p>
            </div>

            {/* Red */}
            <div className="grid grid-cols-3 items-center gap-4 px-6 py-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full text-xl animate-glow-red" style={{ background: 'hsl(0 70% 95%)' }}>🔴</span>
                <span className="font-bold" style={{ color: 'hsl(0 70% 45%)' }}>Red Zone</span>
              </div>
              <span className="text-2xl font-bold">0–49</span>
              <p className="text-sm text-muted-foreground">Weak or negative momentum. Downward pressure visible. Exit signal or area to avoid.</p>
            </div>
            {/* Summary row */}
            <div className="border-t bg-muted/30 px-6 py-4 text-center">
              <p className="text-base font-semibold text-muted-foreground">
                Higher the score, stronger the momentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
