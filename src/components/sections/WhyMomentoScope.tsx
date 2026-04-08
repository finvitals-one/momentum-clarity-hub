import { Target, TrendingUp, Clock, ShieldCheck, BookOpen, Layers, Sparkles, Filter } from "lucide-react";
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

const SectionBlock = ({
  title,
  items,
  colorAccent = "primary",
}: {
  title: string;
  items: typeof canDo;
  colorAccent?: "primary" | "red" | "cyan";
}) => {
  const heading = useScrollReveal();
  const grid = useScrollReveal();

  const accentMap = {
    primary: {
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      hoverBorder: "hover:border-primary/30",
      hoverShadow: "hover:shadow-primary/5",
    },
    red: {
      iconBg: "bg-red-500/10",
      iconColor: "text-red-400",
      hoverBorder: "hover:border-red-500/20",
      hoverShadow: "hover:shadow-red-500/5",
    },
    cyan: {
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-400",
      hoverBorder: "hover:border-cyan-500/30",
      hoverShadow: "hover:shadow-cyan-500/5",
    },
  };

  const accent = accentMap[colorAccent];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <h2
          ref={heading.ref}
          className={`mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl transition-all duration-700 ${heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {title}
        </h2>

        <div
          ref={grid.ref}
          className={`grid gap-5 justify-center ${
            items.length === 2 ? "sm:grid-cols-2 max-w-3xl mx-auto" : "sm:grid-cols-3"
          }`}
        >
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`group rounded-2xl border bg-card/80 backdrop-blur-sm p-6 transition-all duration-700 ${accent.hoverBorder} hover:shadow-lg ${accent.hoverShadow} ${grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: grid.isVisible ? `${i * 120}ms` : "0ms" }}
            >
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${accent.iconBg}`}>
                <item.icon className={`h-5 w-5 ${accent.iconColor}`} />
              </div>
              <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhyCanDo = () => (
  <SectionBlock title="What You Can Do with MomentoScope" items={canDo} colorAccent="primary" />
);

export const WhyDontNeed = () => (
  <SectionBlock title="What You Don't Need To Do with MomentoScope" items={dontNeed} colorAccent="red" />
);

export const WhyQuantfy = () => (
  <SectionBlock title="MomentoScope in QuanTfy" items={quantfyItems} colorAccent="cyan" />
);
