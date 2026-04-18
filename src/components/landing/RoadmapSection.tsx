import { useEffect, useRef, useState } from "react";
import FadeUp from "./FadeUp";

type Step = {
  num: string;
  title: string;
  desc: string;
  icon: JSX.Element;
  image: string;
  imageLabel: string;
};

const BASE = "";

const steps: Step[] = [
  {
    num: "01",
    title: "Fill the form",
    desc: "8 minutes. No discovery call. Everything we need to build your strategy.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(200,200,194,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    image: `${BASE}/roadmap-01.png`,
    imageLabel: "Fill the form",
  },
  {
    num: "02",
    title: "Receive your strategy decks",
    desc: "Within 24 hours. A full diagnosis of what's breaking your CAC and the angles we'll use to fix it.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(200,200,194,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/>
      </svg>
    ),
    image: `${BASE}/roadmap-02.png`,
    imageLabel: "Receive your strategy decks",
  },
  {
    num: "03",
    title: "Watch the Loom walkthrough",
    desc: "Within 24 hours. A personal video walking you through every slide and every decision.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(200,200,194,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
    image: `${BASE}/roadmap-03.png`,
    imageLabel: "Watch the Loom walkthrough",
  },
  {
    num: "04",
    title: "Final alignment call",
    desc: "15 minutes. You've seen the strategy. We align on execution and answer any questions.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(200,200,194,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    image: `${BASE}/roadmap-04.jpeg`,
    imageLabel: "Final alignment call",
  },
  {
    num: "05",
    title: "We start building",
    desc: "Within 48 hours of the alignment call. Built, tested, and ready to run.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(200,200,194,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
      </svg>
    ),
    image: `${BASE}/roadmap-05.png`,
    imageLabel: "We start building",
  },
];

const StepImage = ({ src, label }: { src: string; label: string }) => (
  <div style={{ marginTop: "12px" }}>
    <p
      className="uppercase font-body text-muted-foreground"
      style={{ fontSize: "10px", fontWeight: 300, letterSpacing: "0.16em", opacity: 0.3, marginBottom: "8px" }}
    >
      {label}
    </p>
    <div
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(248,248,246,0.08)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img src={src} alt={label} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
    </div>
  </div>
);

const RoadmapSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [dotTop, setDotTop] = useState(20);
  const [trackHeight, setTrackHeight] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress: 0 when section top hits viewport bottom, 1 when section bottom hits viewport top
      const total = rect.height + vh;
      const scrolled = vh - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      // Track runs from top:20px to bottom:20px inside the timeline
      const usable = rect.height - 40;
      setTrackHeight(usable);
      setDotTop(20 + progress * usable);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1000px] mx-auto">
      <FadeUp>
        <p
          className="uppercase font-body text-muted-foreground mb-3 text-center"
          style={{ fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.22em", opacity: 0.32 }}
        >
          What happens next
        </p>
      </FadeUp>
      <FadeUp delay={0.05}>
        <h2 className="font-body font-medium text-foreground text-center text-2xl md:text-4xl mb-16">
          From form to creatives in{" "}
          <span className="font-display shimmer-text-v2">48 hours.</span>
        </h2>
      </FadeUp>

      {/* Vertical alternating timeline */}
      <div className="relative" ref={timelineRef}>
        {/* Center line — from first to last circle center */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-px border-0"
          style={{ background: "rgba(200,200,194,0.15)", top: "20px", bottom: "20px" }}
        />

        {/* Scroll-animated silver dot */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-20"
          style={{
            top: `${Math.min(dotTop, trackHeight + 20)}px`,
            width: "8px",
            height: "8px",
            marginTop: "-4px",
            background: "#C8C8C2",
            borderRadius: "50%",
            transition: "top 0.1s linear",
          }}
        />

        <div className="space-y-16">
          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="relative flex items-start">
                  {/* Left content */}
                  <div className={`w-[calc(50%-28px)] ${isLeft ? "text-right pr-6" : ""}`}>
                    {isLeft && (
                      <div>
                        <div className="flex items-center justify-end gap-2 mb-1">
                          {s.icon}
                          <h3 className="font-body font-medium text-foreground" style={{ fontSize: "clamp(0.9rem, 1vw, 1rem)" }}>
                            {s.title}
                          </h3>
                        </div>
                        <p className="font-body font-light text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(0.76rem, 0.9vw, 0.86rem)", opacity: 0.42 }}>
                          {s.desc}
                        </p>
                        <StepImage src={s.image} label={s.imageLabel} />
                      </div>
                    )}
                  </div>

                  {/* Center circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="w-10 h-10 flex items-center justify-center border-0"
                      style={{
                        border: "1px solid rgba(200,200,194,0.3)",
                        borderRadius: "50%",
                        background: "#080808",
                      }}
                    >
                      <span className="font-body font-medium text-muted-foreground" style={{ fontSize: "0.68rem" }}>
                        {s.num}
                      </span>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className={`w-[calc(50%-28px)] ml-auto ${!isLeft ? "text-left pl-6" : ""}`}>
                    {!isLeft && (
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {s.icon}
                          <h3 className="font-body font-medium text-foreground" style={{ fontSize: "clamp(0.9rem, 1vw, 1rem)" }}>
                            {s.title}
                          </h3>
                        </div>
                        <p className="font-body font-light text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(0.76rem, 0.9vw, 0.86rem)", opacity: 0.42 }}>
                          {s.desc}
                        </p>
                        <StepImage src={s.image} label={s.imageLabel} />
                      </div>
                    )}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
