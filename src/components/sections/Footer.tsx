import momentoIcon from "@/assets/momentoscope-icon.png";

export const Footer = () => (
  <footer className="border-t bg-card py-12">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-8 flex items-center justify-center gap-3">
        <img src={momentoIcon} alt="MomentoScope" className="h-12 w-12" />
        <span className="text-2xl font-bold tracking-wide" style={{ fontFamily: "'Revue Std', serif" }}>
          MomentoScope
        </span>
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
