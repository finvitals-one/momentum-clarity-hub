import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const principles = [
  "Momentum is measurable. Repeatable. Not guesswork.",
  "Weekly scoring removes noise and keeps focus on what actually matters.",
  "One unified score eliminates the confusion of multiple conflicting signals.",
  "A top-down approach — market → sector → stock — improves decision quality and consistency.",
];

export const Principles = () => {
  const heading = useScrollReveal();
  const list = useScrollReveal();
  const closing = useScrollReveal();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2
          ref={heading.ref}
          className={`mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl transition-all duration-700 ${heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          The Philosophy Behind MomentoScope
        </h2>
        <div ref={list.ref} className="space-y-5">
          {principles.map((p, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 transition-all duration-700 ${list.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: list.isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <p className="text-lg text-muted-foreground">{p}</p>
            </div>
          ))}
        </div>
        <div
          ref={closing.ref}
          className={`mt-10 text-center space-y-1 transition-all duration-700 delay-300 ${closing.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-lg font-semibold text-foreground">MomentoScope does not predict the market.</p>
          <p className="text-lg font-semibold text-foreground">It measures it.</p>
        </div>
      </div>
    </section>
  );
};
