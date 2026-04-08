import { Target, TrendingUp, Clock, ShieldCheck, BookOpen, Layers, Search, Filter, Sparkles, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const canDo = [
  {
    icon: Target,
    title: "Identify momentum leaders, quickly",
    body: "Spot stocks and ETFs showing strong and sustained momentum.",
  },
  {
    icon: TrendingUp,
    title: "Track shifts in momentum",
    body: "See when strength is building, fading, or reversing across your universe.",
  },
  {
    icon: Clock,
    title: "Plan entries and exits with structure",
    body: "Use momentum signals to time decisions with greater clarity.",
  },
];

const dontNeed = [
  {
    icon: ShieldCheck,
    title: "No need to track multiple indicators",
    body: "Momentum is simplified into clear, actionable signals.",
  },
  {
    icon: BookOpen,
    title: "No need to learn complex technical analysis",
    body: "Avoid charts, indicators, and technical jargon.",
  },
];

const quantfyItems = [
  {
    icon: Layers,
    title: "Combine momentum with fundamentals and market context",
    body: "Integrate momentum with fundamentals, price action, and sector/industry leadership.",
  },
  {
    icon: Sparkles,
    title: "Discover high-probability combinations",
    body: "Growth + Momentum, Value + Momentum, Quality + Momentum.",
  },
  {
    icon: Filter,
    title: "Filter and sort your way",
    body: "Screen stocks by market cap, index, sector, industry, sub-industry, quality, growth, or value factors.",
  },
];

export const WhyMomentoScope = () => {
  const heading = useScrollReveal();
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const section3 = useScrollReveal();
  const outcome = useScrollReveal();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* Main Heading */}
        <h2
          ref={heading.ref}
          className={`mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl transition-all duration-700 ${heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Why MomentoScope
        </h2>

        {/* What You Can Do */}
        <div ref={section1.ref} className="mb-16">
          <h3
            className={`mb-8 text-2xl font-bold text-center md:text-left transition-all duration-700 ${section1.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            What You Can Do
          </h3>
          <div className="grid gap-5 sm:grid-cols-3">
            {canDo.map((item, i) => (
              <div
                key={item.title}
                className={`group rounded-2xl border bg-card/80 backdrop-blur-sm p-6 transition-all duration-700 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${section1.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: section1.isVisible ? `${i * 120}ms` : "0ms" }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What You Don't Need To Do */}
        <div ref={section2.ref} className="mb-16">
          <h3
            className={`mb-8 text-2xl font-bold text-center md:text-left transition-all duration-700 ${section2.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            What You Don't Need To Do
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 max-w-3xl">
            {dontNeed.map((item, i) => (
              <div
                key={item.title}
                className={`group rounded-2xl border bg-card/80 backdrop-blur-sm p-6 transition-all duration-700 hover:border-red-500/20 hover:shadow-lg hover:shadow-red-500/5 ${section2.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: section2.isVisible ? `${i * 120}ms` : "0ms" }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10">
                  <item.icon className="h-5 w-5 text-red-400" />
                </div>
                <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MomentoScope + QuanTfy */}
        <div ref={section3.ref} className="mb-16">
          <h3
            className={`mb-4 text-2xl font-bold text-center md:text-left transition-all duration-700 ${section3.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            MomentoScope + QuanTfy
          </h3>
          <p
            className={`mb-8 text-lg font-semibold text-center md:text-left transition-all duration-700 delay-100 ${section3.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            From Momentum to Techno-Fundamental Clarity
          </p>
          <div className="grid gap-5 sm:grid-cols-3">
            {quantfyItems.map((item, i) => (
              <div
                key={item.title}
                className={`group rounded-2xl border bg-card/80 backdrop-blur-sm p-6 transition-all duration-700 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 ${section3.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: section3.isVisible ? `${(i + 1) * 120}ms` : "0ms" }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">
                  <item.icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div
          ref={outcome.ref}
          className={`text-center rounded-2xl border bg-card/80 backdrop-blur-sm p-10 transition-all duration-700 ${outcome.isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
        >
          <h3 className="text-2xl font-bold mb-2">Outcome</h3>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xl md:text-2xl font-bold mt-4">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-400" />
              Right stocks.
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-400" />
              Right time.
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-400" />
              Less complexity.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
