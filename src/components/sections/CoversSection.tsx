import { Globe, Layers, BarChart3, PieChart } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const items = [
  {
    icon: Globe,
    title: "Market Analysis",
    body: "Track the momentum of broad market indices. Understand the overall environment before deploying capital. Make top-down decisions with confidence.",
  },
  {
    icon: Layers,
    title: "Sectoral Analysis",
    body: "Capital rotates between sectors. MomentoScope helps you spot these rotations early — by showing which sectors are in momentum right now.",
  },
  {
    icon: BarChart3,
    title: "Stock Analysis",
    body: "Identify stocks showing increasing/decreasing or strongest/weakest momentum to trade smarter.",
  },
  {
    icon: PieChart,
    title: "ETF Analysis",
    body: "Evaluate momentum of ETFs. Ideal for investors who prefer diversified exposure over individual stock picking.",
  },
];

export const CoversSection = () => {
  const heading = useScrollReveal();
  const grid = useScrollReveal();

  return (
    <section id="coverage" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          ref={heading.ref}
          className={`mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl transition-all duration-700 ${heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Analyse Momentum Across the Market
        </h2>
        <div ref={grid.ref} className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`group rounded-2xl border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg hover-scale duration-700 ${grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: grid.isVisible ? `${i * 120}ms` : "0ms" }}
            >
              <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
