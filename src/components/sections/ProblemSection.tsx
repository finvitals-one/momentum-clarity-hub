import { AlertTriangle } from "lucide-react";

export const ProblemSection = () => (
  <section className="bg-secondary py-20">
    <div className="mx-auto max-w-4xl px-6 text-center">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
        <AlertTriangle className="h-7 w-7 text-primary" />
      </div>
      <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
        Momentum Is Everywhere. But Hard to Read.
      </h2>
      <div className="mx-auto max-w-2xl space-y-4 text-lg text-muted-foreground">
        <p>
          Most investors track RSI on one screen, MACD on another, check moving averages separately, and still feel unsure. Six indicators. Six interpretations. Zero clarity.
        </p>
        <p className="font-semibold text-foreground">MomentoScope changes that.</p>
        <p>
          We synthesize all six signals into one score — updated weekly after market close — so you spend less time reading charts and more time making decisions.
        </p>
      </div>
    </div>
  </section>
);
