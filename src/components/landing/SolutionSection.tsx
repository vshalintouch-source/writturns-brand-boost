import FadeUp from "./FadeUp";

const cardIcons = [
  // 01 - people/group
  <svg key="01" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(200,200,194,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><path d="M21 21v-2a4 4 0 00-3-3.87"/></svg>,
  // 02 - brain/psychology
  <svg key="02" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(200,200,194,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="3"/></svg>,
  // 03 - video/play
  <svg key="03" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(200,200,194,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 9l5 3-5 3V9z"/></svg>,
  // 04 - lightning bolt
  <svg key="04" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(200,200,194,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  // 05 - chart trending down
  <svg key="05" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(200,200,194,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 9l4 4 4-4 5 5"/></svg>,
  // 06 - clock
  <svg key="06" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(200,200,194,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
];

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
      <p
        className="uppercase font-body text-muted-foreground mb-3 text-center"
        style={{ fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.22em", opacity: 0.32 }}
      >
        How it works
      </p>
    </FadeUp>
    <FadeUp delay={0.05}>
      <h2 className="font-body font-medium text-foreground text-center text-2xl md:text-4xl mb-3">
        The strategy your agency{" "}
        <span className="font-display shimmer-text-v2">never built you.</span>
      </h2>
    </FadeUp>
    <FadeUp delay={0.08}>
      <p className="font-body font-light text-muted-foreground text-center text-base mb-16 max-w-[60ch] mx-auto" style={{ opacity: 0.5 }}>
        Six things we do differently — and why they move the numbers your
        current setup can't.
      </p>
    </FadeUp>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
      {cards.map((c, i) => (
        <FadeUp key={i} delay={i * 0.06}>
          <div
            className="group relative p-6 h-full overflow-hidden transition-colors duration-300"
            style={{
              background: "#0a0a0a",
              border: "1px solid rgba(248,248,246,0.08)",
              borderLeft: "1.5px solid transparent",
              borderImage: "linear-gradient(180deg, #f0f0ec, #c8c8c0, #a8a8a0, #e0e0da, #c8c8c2) 1",
              borderImageSlice: "0 0 0 1",
              borderRadius: "3px",
            }}
          >
            {/* Hover shimmer top line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ background: "linear-gradient(135deg, #f0f0ec, #c8c8c0, #a8a8a0, #e0e0da, #c8c8c2)" }}
            />
            <div className="flex items-center gap-2 mb-3">
              {cardIcons[i]}
              <span className="font-body font-medium text-muted-foreground tracking-wider" style={{ fontSize: "0.68rem" }}>
                {c.num}
              </span>
            </div>
            <h3 className="font-body font-medium text-foreground text-sm mb-3">
              {c.title}
            </h3>
            <p className="font-body font-light text-muted-foreground text-sm leading-relaxed" style={{ opacity: 0.55 }}>
              {c.desc}
            </p>
          </div>
        </FadeUp>
      ))}
    </div>

    <FadeUp>
      <div className="text-center">
        <p className="font-display text-2xl md:text-3xl shimmer-text-v2 mb-6">
          Stop Bleeding.
        </p>
        <a
          href="https://grow.writturns.com"
          className="inline-block font-body font-medium text-[#080808] bg-[#F8F8F6] hover:bg-[#F8F8F6]/90 transition-colors uppercase"
          style={{
            fontSize: "0.875rem",
            letterSpacing: "0.08em",
            padding: "1rem 2.8rem",
            borderRadius: "0px",
          }}
        >
          Get my strategy now →
        </a>
      </div>
    </FadeUp>
  </section>
);

export default SolutionSection;
