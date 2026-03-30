import fullLogo from "@/assets/momentoscope-full-logo.png";

export const Footer = () => (
  <footer className="relative border-t border-primary/10 py-12 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-background to-background" />
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 80%, hsl(24 95% 53%) 0%, transparent 60%)' }} />
    
    <div className="relative mx-auto max-w-6xl px-6">
      <div className="mb-6 flex justify-center">
        <img src={fullLogo} alt="MomentoScope - Momentum Demystified!" className="h-16 sm:h-20 brightness-[1.8]" />
      </div>
      <p className="mx-auto max-w-2xl text-center text-xs text-muted-foreground">
        MomentoScope is an analytical tool for educational and informational purposes only. It does not constitute financial advice or investment recommendations. All investment decisions involve risk. Please consult a qualified financial advisor before making any investment.
      </p>
    </div>
  </footer>
);
