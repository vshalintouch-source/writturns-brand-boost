import FadeUp from "./FadeUp";

const cards = [
  {
    num: "01",
    title: "Your audience isn't one person",
    desc: "Most brands run one ad to everyone. We segment your audience into specific cohorts — each with a different psychology, a different pain, and a different reason to buy.",
  },
  {
    num: "02",
    title: "Consumer psychologist backed copywriting",
    desc: "Every word is written through the lens of consumer psychology. What triggers action, what creates identity alignment, what makes a decision feel inevitable. Not gut feel. Trained thinking applied to your specific customer.",
  },
  {
    num: "03",
    title: "AI UGC ads",
    desc: "Real people. Real stories. Zero production cost. Fully AI-generated UGC ads that look and feel like authentic customer content — without the cost, timelines, or logistics of real shoots.",
  },
  {
    num: "04",
    title: "No briefs. No revision cycles.",
    desc: "We own the creative strategy completely. No back and forth, no committees, no watered-down ideas. We move fast because we're not waiting for approvals.",
  },
  {
    num: "05",
    title: "CAC focused. Not ROAS.",
    desc: "ROAS tells you what you made. CAC tells you what it cost you to make it. Only one determines if your business is viable. We fix CAC first. ROAS follows.",
  },
  {
    num: "06",
    title: "Strategy built in 24 hours.",
    desc: "Fill the form. Get a fully personalised strategy deck and Loom walkthrough in your inbox within 24 hours. Before most agencies have replied to your enquiry.",
  },
];

const SolutionSection = () => (
  <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1200px] mx-auto">
    <FadeUp>
      <p className="text-[11px] tracking-[0.2em] uppercase font-body font-medium text-muted-foreground mb-3 text-center">
        How it works
      </p>
    </FadeUp>
    <FadeUp delay={0.05}>
      <h2 className="font-body font-medium text-foreground text-center text-2xl md:text-4xl mb-3">
        The strategy your agency{" "}
        <span className="font-display shimmer-text">never built you.</span>
      </h2>
    </FadeUp>
    <FadeUp delay={0.08}>
      <p className="font-body font-light text-muted-foreground text-center text-base mb-16 opacity-60 max-w-[60ch] mx-auto">
        Six things we do differently — and why they move the numbers your
        current setup can't.
      </p>
    </FadeUp>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
      {cards.map((c, i) => (
        <FadeUp key={i} delay={i * 0.06}>
          <div
            className="border border-accent/20 bg-[#0a0a0a] p-6 border-l-2 border-l-accent/40 h-full"
            style={{ borderRadius: "3px" }}
          >
            <span className="text-[11px] font-body font-medium text-muted-foreground tracking-wider mb-3 block">
              {c.num}
            </span>
            <h3 className="font-body font-medium text-foreground text-sm mb-3">
              {c.title}
            </h3>
            <p className="font-body font-light text-muted-foreground text-sm leading-relaxed opacity-70">
              {c.desc}
            </p>
          </div>
        </FadeUp>
      ))}
    </div>

    <FadeUp>
      <div className="text-center">
        <p className="font-display text-2xl md:text-3xl shimmer-text mb-6">
          Stop Bleeding.
        </p>
        <a
          href="https://grow.writturns.com"
          className="inline-block font-body font-medium text-sm text-primary-foreground bg-primary px-8 py-3 tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors"
          style={{ borderRadius: "3px" }}
        >
          Get my strategy now →
        </a>
      </div>
    </FadeUp>
  </section>
);

export default SolutionSection;
