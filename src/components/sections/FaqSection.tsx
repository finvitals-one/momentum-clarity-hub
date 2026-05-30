import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    q: "Which timeframe is used for MomentoScope?",
    a: "Weekly. MomentoScope is updated after weekly closing. This ensures stability and filters out intraday or daily noise.",
  },
  {
    q: "Can MomentoScope be used for ETFs and indices, not just stocks?",
    a: "Yes. MomentoScope covers market indices, sectors, industries, and ETFs — not just individual stocks.",
  },
  {
    q: "Is this a buy/sell recommendation service?",
    a: "No. MomentoScope is an analytical framework. It provides momentum signals. All investment decisions remain yours.",
  },
  {
    q: "Which type of trades are best suitable taken on the basis of MomentoScope?",
    a: "Momentum investing (tradevesting), which are typically trades for weeks to months duration are best suitable.",
  },
  {
    q: "Is MomentoScope free?",
    a: "MomentoScope is available to subscribers of the QuanTfy platform. Visit QuanTfy to explore available plans.",
  },
  {
    q: "Do I need to have technical indicators knowledge to assess MomentoScope?",
    a: "No. The MomentoScope is designed to be intuitive. You don't need to understand every underlying indicator — the framework translates complexity into clarity.",
  },
];

export const FaqSection = () => {
  const heading = useScrollReveal();
  const content = useScrollReveal();

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      {/* Background matching theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/30 to-background" />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(24 95% 53%) 0%, transparent 70%)' }} />
      
      <div className="relative mx-auto max-w-3xl px-6">
        <h2
          ref={heading.ref}
          className={`mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl transition-all duration-700 ${heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Frequently Asked Questions
        </h2>
        <div ref={content.ref}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className={`rounded-xl border border-primary/10 bg-card/80 backdrop-blur-sm px-6 transition-all duration-700 hover:border-primary/30 ${content.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: content.isVisible ? `${i * 100}ms` : "0ms" }}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
