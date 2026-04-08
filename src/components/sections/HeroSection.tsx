import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import NeonHeroBackground from "@/components/NeonHeroBackground";

export const HeroSection = () => (
  <section className="relative overflow-hidden min-h-[85vh] flex items-center">
    <NeonHeroBackground />
    
    <div className="relative z-10 mx-auto max-w-6xl px-6 w-full py-24 md:py-32">
      <div className="text-center">
        <p className="mb-3 text-sm font-bold tracking-[0.3em] uppercase text-primary/90 animate-fade-in">MomentoScope</p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.03em' }}>
          <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-amber-300 bg-clip-text text-transparent">Momentum Demystified.</span><br />
          <span className="text-white/90">Trends Identified.</span><br />
          <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">Trades Simplified.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/75 md:text-xl">
          One Score &amp; Three Zones Replacing Six Indicators.<br />
          Goodbye Analysis Paralysis!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25" asChild>
            <a href="https://www.quantfy.in" target="_blank" rel="noopener noreferrer">
              Explore MomentoScope on QuanTfy <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white" asChild>
            <a href="#how-it-works">
              See How It Works <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
  </section>
);
