import FadeUp from "./FadeUp";

const stats = [
  { num: "97.6%", label: "of views from non-followers" },
  { num: "+3,618%", label: "non-follower reach increase" },
  { num: "+455%", label: "impressions growth" },
];

const OrganicCACSection = () => (
  <section
    className="w-full"
    style={{ padding: "5rem 6vw", background: "#F8F8F6", color: "#080808" }}
  >
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
      {/* Left — 60% */}
      <div className="lg:col-span-3">
        <FadeUp>
          <p
            className="uppercase font-body mb-4"
            style={{ fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.22em", opacity: 0.45, color: "#080808" }}
          >
            Why organic reach reduces your CAC
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2
            className="font-body font-medium text-2xl md:text-4xl mb-8"
            style={{ color: "#080808" }}
          >
            Warm audiences convert cheaper.
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div
            className="font-body font-light space-y-5"
            style={{ opacity: 0.6, lineHeight: 1.85, maxWidth: "52ch", fontSize: "0.95rem", color: "#080808" }}
          >
            <p>
              When 93–97% of your organic views come from non-followers, your content is already doing what paid ads are supposed to do — reaching cold audiences at zero cost.
            </p>
            <p>
              A founder who sees your ad after encountering your content organically is not a cold prospect. Their resistance is lower. Their trust is higher. Their CAC is cheaper.
            </p>
            <p>
              Organic warms the audience. Paid converts them. Together, they make every rupee of ad spend work harder than it would alone.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* Right — 40% */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        {stats.map((s, i) => (
          <FadeUp key={i} delay={0.1 + i * 0.06}>
            <div
              style={{
                background: "#080808",
                border: "1px solid rgba(200,200,194,0.15)",
                borderRadius: "3px",
                padding: "14px 16px",
              }}
            >
              <div
                className="font-display shimmer-text-v2"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}
              >
                {s.num}
              </div>
              <div
                className="font-body font-light mt-1"
                style={{ fontSize: "0.78rem", opacity: 0.45, color: "#C8C8C2" }}
              >
                {s.label}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default OrganicCACSection;
