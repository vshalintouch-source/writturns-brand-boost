import FadeUp from "./FadeUp";

const steps = [
  {
    num: "01",
    title: "Fill the form",
    desc: "8 minutes. No discovery call. Everything we need to build your strategy.",
  },
  {
    num: "02",
    title: "Receive your strategy decks",
    desc: "Within 24 hours. A full diagnosis of what's breaking your CAC and the angles we'll use to fix it.",
  },
  {
    num: "03",
    title: "Watch the Loom walkthrough",
    desc: "Within 24 hours. A personal video walking you through every slide and every decision.",
  },
  {
    num: "04",
    title: "Final alignment call",
    desc: "15 minutes. You've seen the strategy. We align on execution and answer any questions.",
  },
  {
    num: "05",
    title: "Creatives go live",
    desc: "Within 48 hours of the alignment call. Built, tested, and ready to run.",
  },
];

const RoadmapSection = () => (
  <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1200px] mx-auto">
    <FadeUp>
      <p className="text-[11px] tracking-[0.2em] uppercase font-body font-medium text-muted-foreground mb-3 text-center">
        What happens next
      </p>
    </FadeUp>
    <FadeUp delay={0.05}>
      <h2 className="font-body font-medium text-foreground text-center text-2xl md:text-4xl mb-16">
        From form to creatives in{" "}
        <span className="font-display shimmer-text">48 hours.</span>
      </h2>
    </FadeUp>

    {/* Desktop horizontal timeline */}
    <div className="hidden lg:block">
      <FadeUp delay={0.1}>
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-5 left-[10%] right-[10%] h-px bg-accent/20" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="text-center relative">
                <div
                  className="w-10 h-10 border border-accent/40 flex items-center justify-center mx-auto mb-4 bg-[#080808] relative z-10"
                  style={{ borderRadius: "3px" }}
                >
                  <span className="text-[11px] font-body font-medium text-muted-foreground">
                    {s.num}
                  </span>
                </div>
                <h3 className="font-body font-medium text-foreground text-sm mb-2">
                  {s.title}
                </h3>
                <p className="font-body font-light text-muted-foreground text-xs opacity-60 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </div>

    {/* Mobile vertical timeline */}
    <div className="lg:hidden space-y-8">
      {steps.map((s, i) => (
        <FadeUp key={i} delay={i * 0.06}>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className="w-10 h-10 border border-accent/40 flex items-center justify-center shrink-0 bg-[#080808]"
                style={{ borderRadius: "3px" }}
              >
                <span className="text-[11px] font-body font-medium text-muted-foreground">
                  {s.num}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-px h-full bg-accent/20 mt-2" />
              )}
            </div>
            <div className="pb-4">
              <h3 className="font-body font-medium text-foreground text-sm mb-1">
                {s.title}
              </h3>
              <p className="font-body font-light text-muted-foreground text-xs opacity-60 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  </section>
);

export default RoadmapSection;
