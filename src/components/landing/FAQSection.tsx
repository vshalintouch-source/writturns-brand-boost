import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeUp from "./FadeUp";

const faqs = [
  {
    q: "What kind of brands do you work with?",
    a: "D2C brands spending ₹5L or more per month on Meta ads. Health, wellness, supplements, personal care, and lifestyle brands that have a strong product but a CAC problem. If your numbers are stuck and your current creatives aren't moving them, you're exactly who we built this for.",
  },
  {
    q: "How is this different from a regular creative agency?",
    a: "Most agencies make ads. We build creative strategy around consumer psychology and cohort-specific targeting — then execute it. We don't take briefs, we don't do revision cycles, and we don't optimise for ROAS. We fix CAC. That's a fundamentally different approach to the same problem.",
  },
  {
    q: "What's the difference between CAC and ROAS — and why does it matter?",
    a: "ROAS tells you how much revenue you generated per rupee spent on ads. CAC tells you how much it cost to acquire one customer. A ROAS of 4 can look healthy while you're losing money on every customer if your margins are thin. CAC is the number that determines whether your business is actually viable at scale. We focus on CAC because it's the only metric that tells the full truth.",
  },
  {
    q: "Do you guarantee results?",
    a: "We guarantee the work. Every creative is built on a strategic foundation — not guesswork. If the numbers don't move within the agreed timeline, we don't walk away. We keep working until they do.",
  },
  {
    q: "How quickly do creatives go live?",
    a: "Within 48 hours of your final alignment call. We move fast because we're not waiting for approvals or brief revisions — the strategy is already locked before we build anything.",
  },
  {
    q: "Do I need to brief you on every creative?",
    a: "No. That's the point. You fill the intake form once. We build the strategy. Every creative that follows comes from that strategy — no back and forth, no brief templates, no creative committees. We own the thinking so you don't have to.",
  },
  {
    q: "What does the 24-hour strategy include?",
    a: "Two branded HTML presentation decks. The first maps your audience into cohorts with specific angles for each. The second diagnoses your current funnel — what's bleeding CAC, what's killing CVR, and exactly how we fix it. Plus a personal Loom walkthrough of both decks recorded specifically for your brand.",
  },
];

const FAQItem = ({ faq }: { faq: { q: string; a: string } }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="mb-3 transition-colors duration-200"
      style={{
        background: open ? "#0d0d0d" : "#0d0d0d",
        border: "1px solid rgba(248,248,246,0.08)",
        borderRadius: "3px",
      }}
      onMouseEnter={(e) => {
        if (!open) (e.currentTarget as HTMLDivElement).style.background = "#111";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "#0d0d0d";
      }}
    >
      {/* Shimmer top border on open */}
      <div
        className="h-[2px] transition-transform duration-500 origin-left"
        style={{
          background: "linear-gradient(135deg, #f0f0ec, #c8c8c0, #a8a8a0, #e0e0da, #c8c8c2)",
          transform: open ? "scaleX(1)" : "scaleX(0)",
        }}
      />
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
        style={{ padding: "1.2rem 1.4rem" }}
      >
        <span className="font-body font-medium text-foreground" style={{ fontSize: "clamp(0.84rem, 1vw, 0.96rem)" }}>
          {faq.q}
        </span>
        <ChevronDown
          className="w-4 h-4 shrink-0 ml-4 transition-transform duration-300"
          style={{
            color: "rgba(200,200,194,0.5)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "500px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div style={{ padding: "0 1.4rem 1.2rem", paddingTop: "0.8rem", borderTop: "1px solid rgba(248,248,246,0.06)" }}>
          <p className="font-body font-light text-muted-foreground leading-[1.75]" style={{ fontSize: "0.875rem", opacity: 0.45 }}>
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => (
  <section className="px-6 md:px-12 py-24 md:py-32 max-w-[800px] mx-auto">
    <FadeUp>
      <h2 className="font-body font-medium text-foreground text-center text-2xl md:text-4xl mb-12">
        Frequently asked questions
      </h2>
    </FadeUp>

    <FadeUp delay={0.1}>
      <div>
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} />
        ))}
      </div>
    </FadeUp>
  </section>
);

export default FAQSection;
