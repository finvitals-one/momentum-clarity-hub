import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const indicators = [
  { abbr: "RS", name: "Relative Strength (vs. market)" },
  { abbr: "EMA", name: "Exponential Moving Average trend alignment" },
  { abbr: "ST", name: "Super Trend direction" },
  { abbr: "RSI", name: "Relative Strength Index" },
  { abbr: "ADX", name: "Average Directional Index (trend strength)" },
  { abbr: "MACD", name: "Moving Average Convergence Divergence" },
];

export const WhatIsSection = () => (
  <section id="how-it-works" className="py-20">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
          A Single Score That Tells the Full Story
        </h2>
        <p className="mb-4 text-lg text-muted-foreground">
          MomentoScope is a proprietary momentum scoring system that evaluates any stock, sector, industry, or ETF on a scale of 0 to 100.
        </p>
        <p className="mb-4 text-lg text-muted-foreground">
          The score is calculated on a weekly candle basis, after the weekly close. This filters out daily noise and delivers a stable, reliable reading you can act on.
        </p>
        <p className="mb-10 text-lg font-semibold text-foreground">
          Six indicators. One score. Every week.
        </p>
      </div>

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {indicators.map((ind) => (
          <div key={ind.abbr} className="group rounded-xl border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md">
            <span className="mb-2 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
              {ind.abbr}
            </span>
            <p className="text-sm text-muted-foreground">{ind.name}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg" className="rounded-full px-8">
          See MomentoScope in Action <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
);
