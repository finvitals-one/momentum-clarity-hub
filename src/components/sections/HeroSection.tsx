import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MomentumChart } from "@/components/MomentumChart";

export const HeroSection = () => (
  <section className="relative overflow-hidden pb-20 pt-24 md:pt-32">
    <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-primary/5" />
    <div className="pointer-events-none absolute right-20 top-40 h-[300px] w-[300px] rounded-full border-[40px] border-primary/10" />

    <div className="relative mx-auto max-w-6xl px-6">
      <div className="mb-12 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          Proprietary Momentum Scoring System
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          One Score. Total Clarity.<br />Smarter Momentum Decisions.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          MomentoScope combines six powerful technical indicators into a single score — so you always know where the momentum is, and where it isn't.
        </p>
        <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25">
          Explore How It Works <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="mx-auto max-w-4xl">
        <MomentumChart />
      </div>
    </div>
  </section>
);
