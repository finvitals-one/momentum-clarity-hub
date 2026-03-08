import { CheckCircle2 } from "lucide-react";

const principles = [
  "Momentum is a measurable, repeatable market phenomenon — not guesswork.",
  "Weekly scoring eliminates noise. It keeps you focused on what matters.",
  "One score removes the paralysis of tracking multiple conflicting signals.",
  "Top-down analysis (market → sector → industry → stock) improves hit rate.",
  "MomentoScope does not predict. It measures. You decide.",
];

export const Principles = () => (
  <section className="py-20">
    <div className="mx-auto max-w-3xl px-6">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl">
        The Philosophy Behind the Score
      </h2>
      <div className="space-y-5">
        {principles.map((p, i) => (
          <div key={i} className="flex items-start gap-4">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
            <p className="text-lg text-muted-foreground">{p}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
