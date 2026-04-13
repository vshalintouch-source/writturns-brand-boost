import { X, Check } from "lucide-react";
import FadeUp from "./FadeUp";

const oldWay = [
  "ROAS as the north star",
  "Generic creatives for everyone",
  "Features over psychology",
  "One audience, one message",
  "CAC keeps climbing",
  "Scaling bleeds capital",
];

const newWay = [
  "CAC as the only metric that matters",
  "Consumer psychology backed copy",
  "Cohort specific targeting",
  "Identity led storytelling",
  "AI UGC at scale",
  "Strategy built in 24 hours",
];

const ProblemSection = () => (
  <section className="bg-[#080808] px-6 md:px-12 py-24 md:py-32">
    <div className="max-w-[1100px] mx-auto">
      <FadeUp>
        <h2 className="font-body font-medium text-foreground text-center text-2xl md:text-4xl mb-16">
          Every agency is optimising the wrong number.
        </h2>
      </FadeUp>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        {/* Center divider */}
        <div
          className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
          style={{ background: "rgba(200,200,194,0.15)" }}
        />

        <FadeUp delay={0.1}>
          <div className="md:pr-12">
            <span
              className="inline-block uppercase font-body font-medium px-3 py-1 mb-6"
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                color: "rgba(220,80,80,0.7)",
                border: "1px solid rgba(220,80,80,0.3)",
                borderRadius: "3px",
              }}
            >
              The Old Way
            </span>
            <ul className="space-y-4">
              {oldWay.map((item, i) => (
                <li
                  key={i}
                  className="font-body font-light text-sm flex items-center gap-2.5 line-through"
                  style={{ color: "rgba(248,248,246,0.35)", textDecorationColor: "rgba(248,248,246,0.2)" }}
                >
                  <X className="w-[18px] h-[18px] shrink-0" style={{ strokeWidth: 1.5, color: "rgba(220,80,80,0.4)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="md:pl-12">
            <span
              className="inline-block uppercase font-body font-medium px-3 py-1 mb-6"
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                color: "rgba(200,200,194,0.7)",
                border: "1px solid rgba(200,200,194,0.3)",
                borderRadius: "3px",
              }}
            >
              The Writturns Way
            </span>
            <ul className="space-y-4">
              {newWay.map((item, i) => (
                <li
                  key={i}
                  className="font-body font-light text-foreground text-sm flex items-center gap-2.5"
                >
                  <Check className="w-[18px] h-[18px] shrink-0" style={{ strokeWidth: 1.5, color: "rgba(200,200,194,0.6)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

export default ProblemSection;
