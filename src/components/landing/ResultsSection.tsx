import FadeUp from "./FadeUp";

const images = [
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-01.png",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-02.png",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-03.png",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-04.png",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-05.png",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-06.jpg",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-07.jpg",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-08.jpg",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-09.jpg",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-10.jpg",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-11.jpg",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-12.jpg",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-13.jpg",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-14.jpg",
  "https://raw.githubusercontent.com/vshalintouch-source/writturns-brand-boost/main/public/result-15.jpg",
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
