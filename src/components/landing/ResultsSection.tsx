import FadeUp from "./FadeUp";

const BASE = "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public";
const images = [
  `${BASE}/result-01.png`,
  `${BASE}/result-02.png`,
  `${BASE}/result-03.png`,
  `${BASE}/result-04.png`,
  `${BASE}/result-05.png`,
  `${BASE}/result-06.png`,
  `${BASE}/result-07.png`,
  `${BASE}/result-08.png`,
  `${BASE}/result-09.png`,
  `${BASE}/result-10.png`,
  `${BASE}/result-11.png`,
  `${BASE}/result-12.png`,
  `${BASE}/result-13.png`,
  `${BASE}/result-14.png`,
  `${BASE}/result-15.png`,
];

const ResultsSection = () => (
  <section
    className="bg-[#080808] w-full overflow-hidden"
    style={{ padding: "6rem 6vw" }}
  >
    <div className="text-center max-w-[800px] mx-auto mb-16">
      <FadeUp>
        <p
          className="uppercase font-body text-muted-foreground mb-3"
          style={{ fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.22em", opacity: 0.32 }}
        >
          The work speaks
        </p>
      </FadeUp>
      <FadeUp delay={0.05}>
        <h2 className="font-body font-medium text-foreground text-2xl md:text-4xl mb-4">
          <span className="font-display shimmer-text-v2">15M+</span> views generated.
        </h2>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p
          className="font-body font-light text-muted-foreground"
          style={{ fontSize: "0.95rem", opacity: 0.5 }}
        >
          Organic content that pulls cold audiences. Zero paid promotion. All @admasterjojo.
        </p>
      </FadeUp>
    </div>

    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
      <div className="ticker-track flex" style={{ gap: "16px", width: "max-content" }}>
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="block"
            style={{
              height: "420px",
              width: "auto",
              borderRadius: "16px",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>

    <style>{`
      @keyframes ticker-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .ticker-track {
        animation: ticker-scroll 30s linear infinite;
      }
    `}</style>
  </section>
);

export default ResultsSection;
