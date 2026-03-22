import { CheckCircle2 } from "lucide-react";

const principles = [
  "Momentum is measurable. Repeatable. Not guesswork.",
  "Weekly scoring removes noise and keeps focus on what actually matters.",
  "One unified score eliminates the confusion of multiple conflicting signals.",
  "A top-down approach — market → sector → stock — improves decision quality and consistency.",
];

export const Principles = () => (
  <section className="py-20">
    <div className="mx-auto max-w-3xl px-6">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl">
        The Philosophy Behind MomentoScope
      </h2>
      <div className="space-y-5">
        {principles.map((p, i) => (
          <div key={i} className="flex items-start gap-4">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
            <p className="text-lg text-muted-foreground">{p}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center space-y-1">
        <p className="text-lg font-semibold text-foreground">MomentoScope does not predict the market.</p>
        <p className="text-lg font-semibold text-foreground">It measures it.</p>
        <p className="text-lg font-bold text-primary">You decide.</p>
      </div>
    </div>
  </section>
);
