import { ChevronDown } from "lucide-react";
import FadeUp from "./FadeUp";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
    <FadeUp>
      <span
        className="inline-block text-[11px] tracking-[0.2em] uppercase font-body font-medium text-muted-foreground border border-accent/30 px-4 py-1.5 mb-8"
        style={{ borderRadius: "3px" }}
      >
        Performance Creative Strategy
      </span>
    </FadeUp>

    <FadeUp delay={0.1}>
      <h1 className="font-body font-medium text-foreground text-center text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.15] max-w-[820px] mb-6">
        Your CAC is stuck because you're obsessed about{" "}
        <span className="font-display shimmer-text">ROAS</span>.
        <br />
        Let me explain.
      </h1>
    </FadeUp>

    <FadeUp delay={0.15}>
      <p className="font-body font-light text-muted-foreground text-center text-base md:text-lg max-w-[52ch] mb-12 opacity-60">
        Most agencies optimise for ROAS while creatives are bloating your CAC.
        We rebuild it so every rupee works harder.
      </p>
    </FadeUp>

    <FadeUp delay={0.2}>
      {/* REPLACE WITH VSL EMBED URL */}
      <div
        className="w-full max-w-[780px] border border-accent/30 bg-[#0a0a0a] mb-10"
        style={{ borderRadius: "3px" }}
      >
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div
              className="w-14 h-14 border border-accent/40 flex items-center justify-center"
              style={{ borderRadius: "3px" }}
            >
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M0 0L20 12L0 24V0Z"
                  fill="hsl(var(--accent))"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
            <span className="text-muted-foreground text-xs font-body font-light tracking-wide opacity-50">
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </FadeUp>

    <FadeUp delay={0.25}>
      <a
        href="https://grow.writturns.com"
        className="inline-block font-body font-medium text-sm text-primary-foreground bg-primary px-8 py-3 tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors mb-4"
        style={{ borderRadius: "3px" }}
      >
        Get my strategy now →
      </a>
    </FadeUp>

    <FadeUp delay={0.3}>
      <p className="font-body font-light text-muted-foreground text-[11px] opacity-40 text-center">
        Free · Takes 8 minutes · Decks in your inbox in 24 hours
      </p>
    </FadeUp>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-5 h-5 text-muted-foreground opacity-30" />
    </div>
  </section>
);

export default HeroSection;
