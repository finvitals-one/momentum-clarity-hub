export const ScoringZones = () => (
  <section id="scoring" className="bg-secondary py-20">
    <div className="mx-auto max-w-4xl px-6">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl">
        Three Zones. Instant Clarity.
      </h2>

      <div className="overflow-hidden rounded-2xl border bg-card shadow-lg">
        {/* Header */}
        <div className="grid grid-cols-3 border-b bg-muted/50 px-6 py-4 text-sm font-semibold text-muted-foreground">
          <span>Zone</span>
          <span>Score Range</span>
          <span>What It Means</span>
        </div>

        {/* Green */}
        <div className="grid grid-cols-3 items-center gap-4 border-b px-6 py-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full text-xl" style={{ background: 'hsl(142 60% 95%)' }}>🟢</span>
            <span className="font-bold" style={{ color: 'hsl(142 60% 35%)' }}>Green Zone</span>
          </div>
          <span className="text-2xl font-bold">70–100</span>
          <p className="text-sm text-muted-foreground">Strong bullish momentum. Multiple indicators confirming uptrend. Potential entry opportunities.</p>
        </div>

        {/* Yellow */}
        <div className="grid grid-cols-3 items-center gap-4 border-b px-6 py-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full text-xl" style={{ background: 'hsl(45 90% 95%)' }}>🟡</span>
            <span className="font-bold" style={{ color: 'hsl(45 80% 35%)' }}>Yellow Zone</span>
          </div>
          <span className="text-2xl font-bold">50–69</span>
          <p className="text-sm text-muted-foreground">Transitional phase. Consolidating or building momentum. Monitor closely.</p>
        </div>

        {/* Red */}
        <div className="grid grid-cols-3 items-center gap-4 px-6 py-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full text-xl" style={{ background: 'hsl(0 70% 95%)' }}>🔴</span>
            <span className="font-bold" style={{ color: 'hsl(0 70% 45%)' }}>Red Zone</span>
          </div>
          <span className="text-2xl font-bold">0–49</span>
          <p className="text-sm text-muted-foreground">Weak or negative momentum. Downward pressure visible. Exit signal or area to avoid.</p>
        </div>
      </div>

      <p className="mt-8 text-center text-lg font-medium text-muted-foreground">
        Higher the score, stronger the momentum. It's that simple.
      </p>
    </div>
  </section>
);
