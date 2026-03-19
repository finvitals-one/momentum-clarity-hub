import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NeonHeroBackground from "@/components/NeonHeroBackground";

export const HeroSection = () => (
  <section className="relative overflow-hidden min-h-[85vh] flex items-center">
    <NeonHeroBackground />
    
    {/* Content overlay */}
    <div className="relative z-10 mx-auto max-w-6xl px-6 w-full py-24 md:py-32">
      <div className="text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-1.5 text-sm font-medium text-white/90">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          Proprietary Momentum Scoring System
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
          One Score. Total Clarity.<br />Smarter Momentum Decisions.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/75">
          MomentoScope combines six powerful technical indicators into a single score — so you always know where the momentum is, and where it isn't.
        </p>
        <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25">
          Explore How It Works <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>

    {/* Bottom fade to page background */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
  </section>
);
