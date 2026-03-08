import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, LineChart, Shield } from "lucide-react";

const audiences = [
  { icon: Target, text: "Equity investors looking to time entries and exits with more precision" },
  { icon: Zap, text: "Traders who follow momentum-based strategies" },
  { icon: LineChart, text: "Long-term investors who want to align stock selection with market leadership" },
  { icon: Shield, text: "Anyone tired of conflicting indicator readings and information overload" },
];

export const WhoIsFor = () => (
  <section className="bg-secondary py-20">
    <div className="mx-auto max-w-4xl px-6 text-center">
      <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
        Built for Investors Who Want Structure, Not Noise
      </h2>
      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        {audiences.map((a, i) => (
          <div key={i} className="flex items-start gap-4 rounded-xl border bg-card p-6 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <a.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-muted-foreground">{a.text}</p>
          </div>
        ))}
      </div>
      <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25">
        See MomentoScope in Action <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  </section>
);
