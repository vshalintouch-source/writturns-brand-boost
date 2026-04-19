import { ChevronDown } from "lucide-react";
import FadeUp from "./FadeUp";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
    {/* Radial glow behind headline */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(200,200,194,0.04) 0%, transparent 70%)",
      }}
    />

    <FadeUp>
      <span
        className="inline-block uppercase font-body text-muted-foreground px-4 py-1.5 mb-8"
        style={{
          fontSize: "0.62rem",
          fontWeight: 400,
          letterSpacing: "0.22em",
          opacity: 0.32,
          border: "1px solid rgba(248,248,246,0.12)",
          borderRadius: "3px",
        }}
      >
        Performance Creative Strategy
      </span>
    </FadeUp>

    <FadeUp delay={0.1}>
      <h1 className="font-body font-medium text-foreground text-center text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.15] max-w-[820px] mb-6 relative z-10">
        Your CAC is stuck because you're obsessed about{" "}
        <span className="font-display shimmer-text-v2">ROAS</span>.
        <br />
        Let me explain.
      </h1>
    </FadeUp>

    <FadeUp delay={0.15}>
      <p className="font-body font-light text-muted-foreground text-center text-base md:text-lg max-w-[52ch] mb-12" style={{ opacity: 0.6 }}>
        Most agencies optimise for ROAS while creatives are bloating your CAC.
        We rebuild it so every rupee works harder.
      </p>
    </FadeUp>

    <FadeUp delay={0.2}>
      {/* REPLACE WITH VSL EMBED URL */}
      <div
        className="w-full max-w-[780px] mb-10 relative"
        style={{
          border: "1px solid rgba(248,248,246,0.12)",
          borderRadius: "3px",
          background: "#0a0a0a",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/RfDJp1dwjtA"
          width="100%"
          style={{ aspectRatio: "16/9", border: "none", borderRadius: "4px", display: "block" }}
          allowFullScreen
          allow="autoplay; encrypted-media"
        />
      </div>
    </FadeUp>

    <FadeUp delay={0.25}>
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

    <FadeUp delay={0.3}>
      <p className="font-body font-light text-muted-foreground text-center" style={{ fontSize: "11px", opacity: 0.4 }}>
        Free · Takes 8 minutes · Decks in your inbox in 24 hours
      </p>
    </FadeUp>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-5 h-5 text-muted-foreground" style={{ opacity: 0.3 }} />
    </div>
  </section>
);

export default HeroSection;
