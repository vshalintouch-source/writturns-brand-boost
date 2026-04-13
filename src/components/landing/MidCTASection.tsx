import FadeUp from "./FadeUp";

const MidCTASection = () => (
  <section className="relative text-center" style={{ padding: "6rem 6vw", background: "#080808" }}>
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] aspect-square pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(200,200,194,0.05) 0%, transparent 70%)",
      }}
    />

    <FadeUp>
      <p className="font-display shimmer-text-v2 mb-4 relative z-10" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
        Stop Bleeding.
      </p>
    </FadeUp>
    <FadeUp delay={0.05}>
      <p className="font-body font-light text-muted-foreground text-base mb-8" style={{ opacity: 0.35 }}>
        Your CAC has been stuck long enough.
      </p>
    </FadeUp>
    <FadeUp delay={0.1}>
      <a
        href="https://grow.writturns.com"
        className="inline-block font-body font-medium text-[#080808] bg-[#F8F8F6] hover:bg-[#F8F8F6]/90 transition-colors mb-4 uppercase"
        style={{
          fontSize: "0.875rem",
          letterSpacing: "0.08em",
          padding: "1rem 2.8rem",
          borderRadius: "0px",
        }}
      >
        Get my strategy now →
      </a>
    </FadeUp>
    <FadeUp delay={0.12}>
      <p className="font-body font-light text-muted-foreground" style={{ fontSize: "11px", opacity: 0.22 }}>
        Free · Takes 8 minutes · Decks in your inbox in 24 hours
      </p>
    </FadeUp>
  </section>
);

export default MidCTASection;
