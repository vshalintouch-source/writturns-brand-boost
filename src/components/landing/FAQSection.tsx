import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const FAQSection = () => (
  <section className="px-6 md:px-12 py-24 md:py-32 max-w-[800px] mx-auto">
    <FadeUp>
      <h2 className="font-body font-medium text-foreground text-center text-2xl md:text-4xl mb-12">
        Frequently asked questions
      </h2>
    </FadeUp>

    <FadeUp delay={0.1}>
      <Accordion type="single" collapsible className="space-y-0">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border-b-0 border border-accent/20 mb-3 group hover:border-accent/40 transition-colors"
            style={{ borderRadius: "3px" }}
          >
            <AccordionTrigger className="px-5 py-4 text-left font-body font-medium text-foreground text-sm hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5 font-body font-light text-muted-foreground text-sm leading-relaxed opacity-70">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </FadeUp>
  </section>
);

export default FAQSection;
