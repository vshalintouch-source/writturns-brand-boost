import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, ChevronDown } from "lucide-react";

const Landing = () => {
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: "Your audience isn't one person",
      body: "Most brands run one ad to everyone. We segment your audience into specific cohorts — each with a different psychology, a different pain, and a different reason to buy.",
    },
    {
      title: "Your product is not the hero",
      body: "We position your product as the solution, catalyst, or reward — depending on who we're talking to. The customer's desire is always the hero. Your product is what makes it real.",
    },
    {
      title: "Creatives built around interests, not features",
      body: "Features fatigue. Interests don't. Every creative we build leads with something your customer already cares about — your product enters as the answer, not the pitch.",
    },
    {
      title: "No briefs. No revision cycles.",
      body: "We own the creative strategy completely. No back and forth, no committees, no watered-down ideas. We move fast because we're not waiting for approvals.",
    },
    {
      title: "We test until something wins",
      body: "Minimum 10 angles per product. We don't stop at good — we stop at winner. Once a creative is scaling, we scale it. Until then, we keep testing.",
    },
    {
      title: "12 hours. Not 12 days.",
      body: "Submit your brief. Get your personalised strategy decks and a full walkthrough in your inbox within 12 hours. Before most agencies have replied to your enquiry.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-muted"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="https://writturns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display italic text-lg shimmer-text"
          >
            Writturns
          </a>
          <Link
            to="/apply"
            className="font-body text-sm font-medium tracking-wide text-foreground hover:text-accent transition-colors"
          >
            Get my strategy →
          </Link>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-14 relative">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Eyebrow */}
          <p
            className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-body mb-6"
            style={{ transitionDelay: "0ms" }}
          >
            Performance Creative Strategy · Indian D2C
          </p>

          {/* Headline */}
          <h1
            className="font-body font-medium text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.15] tracking-tight mb-6"
            style={{ transitionDelay: "100ms" }}
          >
            You've been spending{" "}
            <span className="font-display italic shimmer-text">right.</span>
            <br />
            Just talking to the wrong person.
          </h1>

          {/* Subtext */}
          <p
            className="font-body font-light text-muted-foreground text-base md:text-lg leading-relaxed mx-auto mb-12"
            style={{ maxWidth: "48ch", transitionDelay: "200ms" }}
          >
            Most agencies optimise your spend. We rebuild the creative strategy
            underneath it — so every rupee works harder.
          </p>
        </div>

        {/* VSL Embed */}
        <div
          className={`w-full max-w-[780px] mx-auto mb-10 transition-all duration-700 delay-300 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative w-full border border-accent/30 bg-card" style={{ aspectRatio: "16/9" }}>
            {/* ===== VSL PLACEHOLDER — Replace the div below with an iframe to embed your video ===== */}
            {/* <iframe src="YOUR_VIDEO_URL" className="absolute inset-0 w-full h-full" allow="autoplay; fullscreen" allowFullScreen /> */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 border border-accent/40 flex items-center justify-center">
                <Play className="w-6 h-6 text-accent" />
              </div>
              <span className="text-muted-foreground text-sm font-body">Video coming soon</span>
            </div>
            {/* ===== END VSL PLACEHOLDER ===== */}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            to="/apply"
            className="inline-block px-10 py-4 bg-foreground text-background font-body text-sm font-medium tracking-wide hover:bg-accent hover:text-background transition-colors"
          >
            Get my strategy now →
          </Link>
          <p className="text-muted-foreground font-body mt-3" style={{ fontSize: "11px", opacity: 0.6 }}>
            Free · Takes 8 minutes · Decks in your inbox in 12 hours
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 text-muted-foreground/50" />
        </div>
      </section>

      {/* SECTION 2 — BENEFITS */}
      <section ref={benefitsRef} className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-body mb-4">
              How it works
            </p>
            <h2 className="font-body font-medium text-2xl md:text-4xl tracking-tight mb-4">
              The strategy your agency never{" "}
              <span className="font-display italic shimmer-text">built you.</span>
            </h2>
            <p className="font-body font-light text-muted-foreground text-base max-w-xl mx-auto">
              Six things we do differently — and why they move the numbers your
              current setup can't.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="card-fade-up group border border-accent/20 bg-card p-8 relative overflow-hidden hover:border-accent/50 transition-colors duration-300"
              >
                {/* Silver top-line reveal */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <h3 className="font-body font-medium text-foreground text-base mb-3">
                  {card.title}
                </h3>
                <p className="font-body font-light text-muted-foreground text-sm leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* Post-cards CTA */}
          <div className="text-center mt-20">
            <p className="font-display italic shimmer-text text-xl md:text-2xl mb-8">
              Stop Bleeding.
            </p>
            <Link
              to="/apply"
              className="inline-block px-10 py-4 bg-foreground text-background font-body text-sm font-medium tracking-wide hover:bg-accent hover:text-background transition-colors"
            >
              Get my strategy now →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-muted px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="https://writturns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display italic shimmer-text text-lg"
          >
            Writturns
          </a>
          <p className="font-body font-light text-muted-foreground text-sm">
            Performance creative strategy for Indian D2C brands.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
