import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How often is the MomentoScope score updated?",
    a: "Every week, after the weekly candle closes. This ensures stability and filters out intraday or daily noise.",
  },
  {
    q: "Does a green zone score mean I should buy immediately?",
    a: "No. MomentoScope measures momentum, not fundamentals or valuation. It is one input in a decision — not the only one.",
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
    q: "What timeframe does MomentoScope work best for?",
    a: "It is designed for medium-term momentum investing — typically weeks to months — not intraday trading.",
  },
];

export const FaqSection = () => (
  <section id="faq" className="py-20">
    <div className="mx-auto max-w-3xl px-6">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border bg-card px-6">
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
  </section>
);
