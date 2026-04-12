import FadeUp from "./FadeUp";

const testimonials = [
  "It's been genuinely great working with you. What I liked most is that you didn't just make a 'nice' ad you actually understood what would click with our audience. The video did really well, people connected with it and shared it too.",
  "We've promoted these tours before, but this time it just felt different. The content made people actually want to go, not just look at pretty places. Rajasthan, Kashmir, Himachal all became our best sellers after that.",
  "They took our raw footage and turned it into reels that actually felt exciting to watch not just edits for the sake of it. Even during the shoot, they knew what moments to capture. The final content really did justice to the whole vibe.",
  "You guys really pay attention to the small things, and that shows in the final output. It didn't just look good... it actually felt like us.",
  "What stood out was how patient and thorough you were. We went through multiple revisions and you didn't rush anything. You kept improving it till it felt right. End result was exactly what we needed.",
  "You captured everything so naturally, it didn't feel forced at all. Super easy to work with, very attentive, and the end result was something we'd happily share everywhere.",
];

const SocialProofSection = () => (
  <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1200px] mx-auto">
    <FadeUp>
      <p className="text-[11px] tracking-[0.2em] uppercase font-body font-medium text-muted-foreground mb-3 text-center">
        We understand psychology
      </p>
    </FadeUp>
    <FadeUp delay={0.05}>
      <p className="font-body font-light text-muted-foreground text-center text-base mb-16 opacity-60">
        Which is why our work doesn't just look good; it connects.
      </p>
    </FadeUp>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {testimonials.map((t, i) => (
        <FadeUp key={i} delay={i * 0.06}>
          <div
            className="group relative border border-accent/20 bg-[#0a0a0a] p-6 transition-all duration-300 overflow-hidden"
            style={{ borderRadius: "3px" }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <p className="font-body font-light text-foreground/80 text-sm leading-relaxed">
              "{t}"
            </p>
          </div>
        </FadeUp>
      ))}
    </div>
  </section>
);

export default SocialProofSection;
