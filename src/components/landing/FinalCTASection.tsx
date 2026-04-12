import FadeUp from "./FadeUp";

const FinalCTASection = () => (
  <section className="px-6 md:px-12 py-24 md:py-32 text-center">
    <FadeUp>
      <p className="font-display text-4xl md:text-5xl shimmer-text mb-4">
        Stop Bleeding.
      </p>
    </FadeUp>
    <FadeUp delay={0.05}>
      <p className="font-body font-light text-muted-foreground text-base mb-8 opacity-60">
        Your CAC has been stuck long enough.
      </p>
    </FadeUp>
    <FadeUp delay={0.1}>
      <a
        href="https://grow.writturns.com"
        className="inline-block font-body font-medium text-sm text-primary-foreground bg-primary px-8 py-3 tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors mb-4"
        style={{ borderRadius: "3px" }}
      >
        Get my strategy now →
      </a>
    </FadeUp>
    <FadeUp delay={0.12}>
      <p className="font-body font-light text-muted-foreground text-[11px] opacity-40">
        Free · Takes 8 minutes · Decks in your inbox in 24 hours
      </p>
    </FadeUp>
  </section>
);

export default FinalCTASection;
