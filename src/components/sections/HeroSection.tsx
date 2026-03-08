import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Activity } from "lucide-react";

export const HeroSection = () => (
  <section className="relative overflow-hidden pb-20 pt-24 md:pt-32">
    {/* Background decoration */}
    <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-primary/5" />
    <div className="pointer-events-none absolute right-20 top-40 h-[300px] w-[300px] rounded-full border-[40px] border-primary/10" />

    <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          Proprietary Momentum Scoring System
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          One Score. Total Clarity. Smarter Momentum Decisions.
        </h1>
        <p className="mb-8 max-w-lg text-lg text-muted-foreground">
          MomentoScope combines six powerful technical indicators into a single score — so you always know where the momentum is, and where it isn't.
        </p>
        <div className="flex items-center gap-4">
          <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25">
            Explore How It Works <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Visual element inspired by CraftCV style */}
      <div className="relative hidden md:block">
        <div className="relative rounded-2xl border bg-card p-6 shadow-xl">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-red-500" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-secondary p-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span className="font-semibold">NIFTY 50</span>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">Score: 78</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-secondary p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="font-semibold">IT Sector</span>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">Score: 82</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-secondary p-4">
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Pharma</span>
              </div>
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-bold text-yellow-700">Score: 55</span>
            </div>
          </div>
        </div>
        {/* Floating card */}
        <div className="absolute -bottom-6 -left-6 rounded-xl border bg-card p-4 shadow-lg">
          <p className="text-xs text-muted-foreground">Weekly Update</p>
          <p className="text-lg font-bold text-primary">6 Indicators → 1 Score</p>
        </div>
      </div>
    </div>
  </section>
);
