const steps = [
  { num: "01", title: "Check Market Score", desc: "Is the overall market in green, yellow, or red?" },
  { num: "02", title: "Identify Leading Sectors", desc: "Which sectors are showing the strongest momentum?" },
  { num: "03", title: "Drill Into Industries", desc: "Which industries within that sector are accelerating?" },
  { num: "04", title: "Screen Stocks or ETFs", desc: "Find candidates with scores in the green zone." },
  { num: "05", title: "Act with Conviction", desc: "Enter with momentum behind you, not against you." },
];

export const HowToUse = () => (
  <section className="bg-secondary py-20">
    <div className="mx-auto max-w-4xl px-6">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
        From Score to Decision — A Simple Process
      </h2>
      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.num} className="flex items-start gap-6 rounded-xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              {step.num}
            </span>
            <div>
              <h3 className="mb-1 text-lg font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
