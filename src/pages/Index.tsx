import { useState, useCallback, useRef, useEffect } from "react";
import { FormField, SingleSelect, MultiSelect } from "@/components/intake/FormFields";
import { ConfirmationScreen } from "@/components/intake/ConfirmationScreen";
import { supabase } from "@/lib/supabase";

const TOTAL_SECTIONS = 7;

const Index = () => {
  const [section, setSection] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Section 1
  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [differentiators, setDifferentiators] = useState<string[]>([]);
  const [differentiatorDetail, setDifferentiatorDetail] = useState("");

  // Section 2
  const [metaImportance, setMetaImportance] = useState("");
  const [metaImportanceDetail, setMetaImportanceDetail] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [growthAggression, setGrowthAggression] = useState("");

  // Section 3
  const [cac, setCac] = useState("");
  const [aovMetric, setAovMetric] = useState("");
  const [cvr, setCvr] = useState("");
  const [ctr, setCtr] = useState("");
  const [cpc, setCpc] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [bottleneckDetail, setBottleneckDetail] = useState("");
  const [funnelHealth, setFunnelHealth] = useState("");
  const [funnelHealthDetail, setFunnelHealthDetail] = useState("");

  // Section 4
  const [creativeProcess, setCreativeProcess] = useState("");
  const [monthlyAngles, setMonthlyAngles] = useState("");
  const [winningElement, setWinningElement] = useState("");

  // Section 5
  const [ageRange, setAgeRange] = useState("");
  const [gender, setGender] = useState("");
  const [cities, setCities] = useState("");
  const [occupation, setOccupation] = useState("");

  // Section 6
  const [successVision, setSuccessVision] = useState("");
  const [scalingPriority, setScalingPriority] = useState("");
  const [scalingDetail, setScalingDetail] = useState("");

  // Section 7
  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const [personalInstagram, setPersonalInstagram] = useState("");
  const [email, setEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [brandInstagram, setBrandInstagram] = useState("");
  const [brandWebsite, setBrandWebsite] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");

  const validateSection = (): string[] => {
    const errs: string[] = [];
    switch (section) {
      case 0:
        if (!product.trim()) errs.push("Product is required");
        if (!audience.trim()) errs.push("Audience is required");
        if (differentiators.length === 0) errs.push("Select at least one differentiator");
        break;
      case 1:
        if (!metaImportance) errs.push("Meta importance is required");
        if (!monthlySpend) errs.push("Monthly spend is required");
        if (!growthAggression) errs.push("Growth plan is required");
        break;
      case 2:
        if (!cac.trim()) errs.push("CAC is required");
        if (!aovMetric.trim()) errs.push("AOV metric is required");
        if (!cvr.trim()) errs.push("CVR is required");
        if (!ctr.trim()) errs.push("CTR is required");
        if (!cpc.trim()) errs.push("CPC is required");
        if (!bottleneck) errs.push("Bottleneck is required");
        if (!bottleneckDetail.trim()) errs.push("Bottleneck detail is required");
        if (!funnelHealth) errs.push("Funnel health is required");
        break;
      case 3:
        if (!creativeProcess) errs.push("Creative process is required");
        if (!monthlyAngles) errs.push("Monthly angles is required");
        if (!winningElement.trim()) errs.push("Winning element is required");
        break;
      case 4:
        if (!ageRange.trim()) errs.push("Age range is required");
        if (!gender) errs.push("Gender is required");
        if (!cities.trim()) errs.push("Cities is required");
        if (!occupation.trim()) errs.push("Occupation is required");
        break;
      case 5:
        if (!successVision.trim()) errs.push("Success vision is required");
        if (!scalingPriority) errs.push("Scaling priority is required");
        break;
      case 6:
        if (!fullName.trim()) errs.push("Full name is required");
        if (!designation.trim()) errs.push("Designation is required");
        if (!personalInstagram.trim()) errs.push("Instagram handle is required");
        if (!email.trim()) errs.push("Email is required");
        if (!brandName.trim()) errs.push("Brand name is required");
        if (!brandInstagram.trim()) errs.push("Brand Instagram is required");
        if (!brandWebsite.trim()) errs.push("Brand website is required");
        if (!businessCategory) errs.push("Business category is required");
        break;
    }
    return errs;
  };

  const goTo = (target: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setSection(target);
      setErrors([]);
      setTimeout(() => setTransitioning(false), 50);
    }, 300);
  };

  const next = () => {
    const errs = validateSection();
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    if (section < TOTAL_SECTIONS - 1) {
      goTo(section + 1);
    } else {
      handleSubmit();
    }
  };

  const back = () => {
    if (section > 0) goTo(section - 1);
  };

  const getISTTimestamp = () => {
    const now = new Date();
    return now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST";
  };

  const handleSubmit = async () => {
    const errs = validateSection();
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);

    const firstName = fullName.trim().split(" ")[0];
    const submissionTimestamp = getISTTimestamp();

    const formData = {
      product,
      target_audience: audience,
      differentiators: differentiators.join(", "),
      differentiator_detail: differentiatorDetail,
      meta_importance: metaImportance,
      meta_importance_detail: metaImportanceDetail,
      monthly_spend: monthlySpend,
      growth_aggression: growthAggression,
      aov: aovMetric,
      cac,
      aov_metric: aovMetric,
      cvr,
      ctr,
      cpc,
      bottleneck,
      bottleneck_detail: bottleneckDetail,
      funnel_health: funnelHealth,
      funnel_health_detail: funnelHealthDetail,
      creative_process: creativeProcess,
      monthly_angles: monthlyAngles,
      winning_element: winningElement,
      age_range: ageRange,
      gender,
      cities,
      occupation,
      success_vision: successVision,
      scaling_priority: scalingPriority,
      scaling_detail: scalingDetail,
      full_name: fullName,
      designation,
      personal_instagram: personalInstagram,
      email,
      brand_name: brandName,
      brand_instagram: brandInstagram,
      brand_website: brandWebsite,
      business_category: businessCategory,
    };

    try {
      const { error: dbError } = await supabase.from("intake_submissions").insert([formData]);
      if (dbError) console.error("DB error:", dbError);

      // Send confirmation email via Edge Function
      try {
        const { error: fnError } = await supabase.functions.invoke('clever-handler', {
          body: {
            email: formData.email,
            full_name: formData.full_name,
            brand_name: formData.brand_name,
            created_at: new Date().toISOString()
          }
        });
        if (fnError) {
          console.error('Email function error:', fnError);
        }
      } catch (emailErr) {
        console.error("Email error:", emailErr);
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setErrors(["Something went wrong. Please try again."]);
    } finally {
      setSubmitting(false);
    }
  };

  const progress = ((section + 1) / TOTAL_SECTIONS) * 100;

  const sectionTitles = [
    "THE BUSINESS",
    "THE ADS",
    "THE NUMBERS",
    "THE CREATIVES",
    "THE AUDIENCE",
    "THE AMBITION",
    "CONTACT",
  ];

  if (submitted) return <ConfirmationScreen />;

  return (
    <div className="min-h-screen bg-background">
      {/* Logo */}
      <div className="py-5 text-center">
        <a href="https://writturns.com" target="_blank" rel="noopener noreferrer" className="font-display italic text-[22px]" style={{ color: '#C8C8C2' }}>
          Writturns
        </a>
      </div>

      {/* Banner */}
      <div className="bg-card border-b border-muted py-3 px-4">
        <p className="text-center text-muted-foreground text-xs tracking-[0.15em] uppercase font-body">
          Writturns works best with brands investing ₹5L/month or more in Meta ads. If you're not there yet, we'd love to work with you when you are!
        </p>
        <p className="text-center text-muted-foreground/60 text-xs tracking-[0.1em] uppercase font-body mt-1">
          Complete this form now to receive your personalised strategy deck and Loom walkthrough within 12 hours.
        </p>
      </div>

      {/* Progress bar */}
      <div className="h-[2px] bg-muted">
        <div
          className="h-full progress-bar transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Form content */}
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        {/* Section label */}
        <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-body mb-2">
          Section {section + 1} of {TOTAL_SECTIONS}
        </p>
        <h2 className="text-accent text-sm tracking-[0.2em] uppercase font-body mb-10 border-b border-muted pb-4">
          {sectionTitles[section]}
        </h2>

        <div className={transitioning ? "section-fade-exit" : "section-fade-active"}>
          {section === 0 && (
            <>
              <FormField
                label="What's the main product you're trying to scale right now?"
                value={product}
                onChange={setProduct}
                placeholder="e.g. bamboo towels, whey protein, silver jewellery"
                required
              />
              <FormField
                label="Who is it really for?"
                value={audience}
                onChange={setAudience}
                placeholder="e.g. women aged 20–35 in metros who care about skin health"
                required
              />
              <MultiSelect
                label="What makes it different from everything else available in the market?"
                options={[
                  "Our product quality",
                  "Our ingredients or materials",
                  "Our branding and packaging",
                  "Our messaging and positioning",
                  "Our price point",
                  "Our personalisation",
                  "Something else",
                ]}
                value={differentiators}
                onChange={setDifferentiators}
                required
                followUp={{ placeholder: "Tell us more.", required: false, value: differentiatorDetail, onChange: setDifferentiatorDetail }}
              />
            </>
          )}

          {section === 1 && (
            <>
              <SingleSelect
                label="How important is Meta to your revenue right now? Roughly what percentage comes from paid vs organic?"
                options={["Mostly paid (70%+)", "Split roughly evenly", "Mostly organic", "Just starting paid"]}
                value={metaImportance}
                onChange={setMetaImportance}
                required
                followUp={{ placeholder: "e.g. we have 80K followers but never convert them / organic is non-existent", required: false, value: metaImportanceDetail, onChange: setMetaImportanceDetail }}
              />
              <SingleSelect
                label="What's your current monthly Meta ad spend?"
                options={["₹5L–₹10L", "₹10L–₹25L", "₹25L–₹50L", "₹50L+"]}
                value={monthlySpend}
                onChange={setMonthlySpend}
                required
              />
              <SingleSelect
                label="How aggressively are you trying to grow that spend in the next few months if performance improves?"
                options={["2x within 3 months", "2–3x within 6 months", "Cautiously — want efficiency first", "Not sure yet"]}
                value={growthAggression}
                onChange={setGrowthAggression}
                required
              />
            

          {section === 2 && (
            <>
              <div className="mb-8">
                <label className="block font-display text-xl md:text-2xl text-foreground mb-6">
                  What do your core ad numbers look like right now?
                  <span className="text-muted-foreground ml-1">*</span>
                </label>
                <div className="space-y-4">
                  {[
                    { label: "CAC (cost per customer acquired)", val: cac, set: setCac, ph: "e.g. ₹650" },
                    { label: "AOV (average order value)", val: aovMetric, set: setAovMetric, ph: "e.g. ₹1,800" },
                    { label: "CVR (conversion rate)", val: cvr, set: setCvr, ph: "e.g. 1.2%" },
                    { label: "CTR (click through rate)", val: ctr, set: setCtr, ph: "e.g. 1.4%" },
                    { label: "CPC (cost per click)", val: cpc, set: setCpc, ph: "e.g. ₹18" },
                  ].map((m) => (
                    <div key={m.label}>
                      <span className="text-muted-foreground font-body text-sm block mb-1">{m.label}</span>
                      <input
                        type="text"
                        value={m.val}
                        onChange={(e) => m.set(e.target.value)}
                        placeholder={m.ph}
                        className="w-full bg-transparent border-b border-muted-foreground/30 text-foreground font-body text-base py-2 px-0 placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <SingleSelect
                label="What's your biggest bottleneck right now?"
                options={[
                  "CAC keeps climbing",
                  "Creatives fatigue too fast",
                  "Can't find new winning angles",
                  "Landing page doesn't convert",
                  "All of the above",
                ]}
                value={bottleneck}
                onChange={setBottleneck}
                required
                followUp={{ placeholder: "e.g. we launch new creatives every week but nothing beats our 3-month-old winner", required: true, value: bottleneckDetail, onChange: setBottleneckDetail }}
              />
              <SingleSelect
                label="When your ads get clicks, does the rest of the funnel hold up?"
                options={[
                  "Yes, funnel is solid",
                  "Partially — some drop-off after click",
                  "No, traffic dies after the click",
                  "Honestly not sure",
                ]}
                value={funnelHealth}
                onChange={setFunnelHealth}
                required
                followUp={{ placeholder: "e.g. 1.2% conversion rate", required: false, value: funnelHealthDetail, onChange: setFunnelHealthDetail }}
              />
            </>
          )}

          {section === 3 && (
            <>
              <SingleSelect
                label="How do new creatives get made in your team right now?"
                options={[
                  "Structured process — new angles tested every week",
                  "Only when performance starts dropping",
                  "No real process — we make ads when we feel like it",
                  "We outsource it entirely",
                ]}
                value={creativeProcess}
                onChange={setCreativeProcess}
                required
              />
              <SingleSelect
                label="How many completely new creative angles are you testing in a typical month?"
                options={["0–2", "3–5", "6–10", "10+"]}
                value={monthlyAngles}
                onChange={setMonthlyAngles}
                required
              />
              <FormField
                label="What's the consistent element in your winning ads?"
                value={winningElement}
                onChange={setWinningElement}
                placeholder="e.g. UGC outperforms branded / emotional hooks beat product demos / discount angles always win"
                required
              />
            </>
          )}

          {section === 4 && (
            <>
              <FormField
                label="Age range"
                value={ageRange}
                onChange={setAgeRange}
                placeholder="e.g. 18–35"
                required
              />
              <SingleSelect
                label="Gender"
                options={["Women", "Men", "Both"]}
                value={gender}
                onChange={setGender}
                required
              />
              <FormField
                label="Cities and locations"
                value={cities}
                onChange={setCities}
                placeholder="e.g. Mumbai, Delhi, Bengaluru"
                required
              />
              <FormField
                label="Occupation or life stage"
                value={occupation}
                onChange={setOccupation}
                placeholder="e.g. working professionals, college students, young mothers"
                required
              />
            </>
          )}

          {section === 5 && (
            <>
              <FormField
                label="If creatives started consistently winning and CAC dropped — what does success look like in the next 3–6 months?"
                value={successVision}
                onChange={setSuccessVision}
                placeholder="e.g. hit ₹1Cr/month revenue, expand to tier 2 cities, double customer base"
                required
                multiline
              />
              <SingleSelect
                label="What's your scaling priority?"
                options={[
                  "Scale aggressively within current audience",
                  "Break into a completely new market",
                ]}
                value={scalingPriority}
                onChange={setScalingPriority}
                required
                followUp={{ placeholder: "Tell us more about where you want to take the brand.", required: false, value: scalingDetail, onChange: setScalingDetail }}
              />
            </>
          )}

          {section === 6 && (
            <>
              <p className="text-accent text-xs tracking-[0.2em] uppercase font-body mb-6">About You</p>
              <FormField label="Full name" value={fullName} onChange={setFullName} required />
              <FormField label="Your designation" value={designation} onChange={setDesignation} placeholder="e.g. Founder, Co-founder, Head of Marketing" required />
              <FormField label="Your personal Instagram handle" value={personalInstagram} onChange={setPersonalInstagram} required />
              <FormField label="Your personal email address" value={email} onChange={setEmail} type="email" required />

              <div className="border-t border-muted my-10" />

              <p className="text-accent text-xs tracking-[0.2em] uppercase font-body mb-6">About the Brand</p>
              <FormField label="Brand name" value={brandName} onChange={setBrandName} required />
              <FormField label="Brand Instagram handle" value={brandInstagram} onChange={setBrandInstagram} required />
              <FormField label="Brand website URL" value={brandWebsite} onChange={setBrandWebsite} required />
              <SingleSelect
                label="Business category"
                options={[
                  "Skincare & Beauty",
                  "Haircare",
                  "Health & Wellness",
                  "Food & Beverage",
                  "Apparel & Fashion",
                  "Jewellery & Accessories",
                  "Home & Living",
                  "Baby & Kids",
                  "Pet Care",
                  "Sports & Fitness",
                  "Personal Care & Hygiene",
                  "Other",
                ]}
                value={businessCategory}
                onChange={setBusinessCategory}
                required
              />
            </>
          )}
        </div>

        {/* Errors */}
        {errors.length > 0 && (
          <div className="mt-4 mb-4">
            {errors.map((e, i) => (
              <p key={i} className="text-destructive font-body text-sm">{e}</p>
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-muted">
          <button
            type="button"
            onClick={back}
            className={`font-body text-sm text-muted-foreground hover:text-foreground transition-colors ${section === 0 ? "invisible" : ""}`}
          >
            ← Back
          </button>
          <button
            type="button"
            onClick={next}
            disabled={submitting}
            className="px-8 py-3 border border-accent bg-background text-foreground font-body text-sm tracking-wide hover:bg-muted transition-colors disabled:opacity-50"
          >
            {submitting ? "Submitting..." : section === TOTAL_SECTIONS - 1 ? "Submit" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
