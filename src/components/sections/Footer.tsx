import momentoIcon from "@/assets/momentoscope-icon.png";

export const Footer = () => (
  <footer className="relative border-t border-primary/10 py-12 overflow-hidden">
    {/* Theme-matched background */}
    <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-background to-background" />
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 80%, hsl(24 95% 53%) 0%, transparent 60%)' }} />
    
    <div className="relative mx-auto max-w-6xl px-6">
      <div className="mb-4 flex items-center justify-center gap-3">
        <img src={momentoIcon} alt="MomentoScope" className="h-12 w-12" />
        <span className="text-2xl font-bold tracking-wide" style={{ fontFamily: "'Revue Std', serif" }}>
          MomentoScope
        </span>
      </div>
      <p className="mb-6 text-center text-lg font-semibold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
        Momentum Demystified !
      </p>
      <p className="mx-auto max-w-2xl text-center text-xs text-muted-foreground">
        MomentoScope is an analytical tool for educational and informational purposes only. It does not constitute financial advice or investment recommendations. All investment decisions involve risk. Please consult a qualified financial advisor before making any investment.
      </p>
    </div>
  </footer>
);
