import { Check } from "lucide-react";
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
  <section className="bg-[#F8F8F6] px-6 md:px-12 py-24 md:py-32">
    <div className="max-w-[1100px] mx-auto">
      <FadeUp>
        <h2 className="font-body font-medium text-[#080808] text-center text-2xl md:text-4xl mb-16">
          Every agency is optimising the wrong number.
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <FadeUp delay={0.1}>
          <div>
            <span
              className="inline-block text-[11px] tracking-[0.15em] uppercase font-body font-medium text-red-600 border border-red-300 px-3 py-1 mb-6"
              style={{ borderRadius: "3px" }}
            >
              The Old Way
            </span>
            <ul className="space-y-4">
              {oldWay.map((item, i) => (
                <li
                  key={i}
                  className="font-body font-light text-[#080808]/60 text-sm line-through decoration-[#080808]/30"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div>
            <span
              className="inline-block text-[11px] tracking-[0.15em] uppercase font-body font-medium text-[#080808]/70 border border-[#C8C8C2] px-3 py-1 mb-6"
              style={{ borderRadius: "3px" }}
            >
              The Writturns Way
            </span>
            <ul className="space-y-4">
              {newWay.map((item, i) => (
                <li
                  key={i}
                  className="font-body font-light text-[#080808] text-sm flex items-start gap-2.5"
                >
                  <Check className="w-4 h-4 text-[#C8C8C2] mt-0.5 shrink-0" />
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
