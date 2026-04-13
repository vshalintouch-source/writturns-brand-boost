import FadeUp from "./FadeUp";

const largeCards = [
  {
    quote: "Just went through the entire thing, thanks so much for compiling your thoughts for us. Happy to go over your POA, commercials and get started.",
    attribution: "D2C Founder",
  },
  {
    quote: "I just had a look at this and it's honestly very elaborate and good. Let's connect tomorrow.",
    attribution: "D2C Founder",
  },
];

const smallCards = [
  {
    quote: "You didn't just make a nice ad — you actually understood what would click with our audience. The video did really well, people connected with it and shared it too.",
    attribution: "bvs ganesh, Founder · Tones fashion",
  },
  {
    quote: "We've promoted these tours before, but this time it just felt different. The content made people actually want to go. Rajasthan, Kashmir, Himachal — all became our best sellers after that.",
    attribution: "Sameer Joshi, CEO · The Bucket List",
  },
  {
    quote: "They took our raw footage and turned it into reels that actually felt exciting to watch. Even during the shoot, they knew what moments to capture.",
    attribution: "AYUSH TIWARI, CHEF",
  },
  {
    quote: "You really pay attention to the small things and that shows in the final output. It didn't just look good — it actually felt like us.",
    attribution: "Vidya, Label Head · Atti Culture",
  },
  {
    quote: "What stood out was how patient and thorough you were. Multiple revisions and you didn't rush anything — you kept improving it till it felt right.",
    attribution: "Varun, Founder · Urban Prospect",
  },
  {
    quote: "You captured everything so naturally — it didn't feel forced at all. Super easy to work with and the end result was something we'd happily share everywhere.",
    attribution: "Nikunj Rele, Fitness Coach",
  },
];

const cardStyle: React.CSSProperties = {
  background: "#0d0d0d",
  border: "1px solid rgba(248,248,246,0.08)",
  borderRadius: "3px",
};

const SocialProofSection = () => (
  <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1200px] mx-auto">
    <FadeUp>
      <p
        className="uppercase font-body text-muted-foreground mb-3 text-center"
        style={{ fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.22em", opacity: 0.32 }}
      >
        What founders say after seeing the strategy
      </p>
    </FadeUp>
    <FadeUp delay={0.05}>
      <h2 className="font-body font-medium text-foreground text-center text-2xl md:text-4xl mb-3">
        They came for the form. They stayed for the{" "}
        <span className="font-display shimmer-text-v2">thinking.</span>
      </h2>
    </FadeUp>
    <FadeUp delay={0.08}>
      <p className="font-body font-light text-muted-foreground text-center text-base mb-16" style={{ opacity: 0.5 }}>
        Unsolicited. Unedited. From founders who've been through it.
      </p>
    </FadeUp>

    {/* Large cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
      {largeCards.map((c, i) => (
        <FadeUp key={i} delay={i * 0.06}>
          <div
            className="relative p-8 min-h-[200px] flex flex-col justify-between overflow-hidden"
            style={cardStyle}
          >
            {/* Always-visible shimmer top border */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{
              background: "linear-gradient(135deg, #f0f0ec, #c8c8c0, #a8a8a0, #e0e0da, #c8c8c2)",
            }} />
            <p className="font-display text-foreground/90 text-lg leading-relaxed mb-6">
              "{c.quote}"
            </p>
            <span className="font-body text-muted-foreground uppercase" style={{ fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.15em", opacity: 0.5 }}>
              {c.attribution}
            </span>
          </div>
        </FadeUp>
      ))}
    </div>

    {/* Small cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {smallCards.map((c, i) => (
        <FadeUp key={i} delay={(i + 2) * 0.06}>
          <div
            className="group relative p-6 flex flex-col justify-between overflow-hidden"
            style={cardStyle}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ background: "linear-gradient(135deg, #f0f0ec, #c8c8c0, #a8a8a0, #e0e0da, #c8c8c2)" }}
            />
            <p className="font-display text-foreground/80 text-sm leading-relaxed mb-4">
              "{c.quote}"
            </p>
            <span className="font-body text-muted-foreground uppercase" style={{ fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.15em", opacity: 0.45 }}>
              {c.attribution}
            </span>
          </div>
        </FadeUp>
      ))}
    </div>

    <FadeUp delay={0.6}>
      <p className="font-body font-light text-muted-foreground text-center mt-10 italic" style={{ fontSize: "0.8rem", opacity: 0.35 }}>
        More results being documented. Check back soon.
      </p>
    </FadeUp>
  </section>
);

export default SocialProofSection;
