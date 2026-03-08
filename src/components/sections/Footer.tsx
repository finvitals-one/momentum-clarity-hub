import { TrendingUp } from "lucide-react";

export const Footer = () => (
  <footer className="border-t bg-card py-12">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-8 flex items-center justify-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <TrendingUp className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="text-lg font-bold">MomentoScope</span>
      </div>
      <p className="mb-6 text-center text-lg font-semibold text-muted-foreground">
        MomentoScope — Momentum, Measured.
      </p>
      <p className="mx-auto max-w-2xl text-center text-xs text-muted-foreground">
        MomentoScope is an analytical tool for educational and informational purposes only. It does not constitute financial advice or investment recommendations. All investment decisions involve risk. Please consult a qualified financial advisor before making any investment.
      </p>
    </div>
  </footer>
);
