import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const CtaSection = () => {
  const section = useScrollReveal();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(24 95% 53%) 0%, transparent 60%)' }} />

      <div
        ref={section.ref}
        className={`relative mx-auto max-w-3xl px-6 text-center transition-all duration-700 ${section.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Ready to See Momentum Clearly?
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Subscribe to QuanTfy and unlock MomentoScope — your edge in momentum analysis.
        </p>
        <Button size="lg" className="rounded-full px-10 shadow-lg shadow-primary/25" asChild>
          <a href="https://quantfy.in" target="_blank" rel="noopener noreferrer">
            Get MomentoScope on QuanTfy <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};
