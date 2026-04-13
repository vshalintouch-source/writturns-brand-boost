import LandingNav from "@/components/landing/LandingNav";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import RoadmapSection from "@/components/landing/RoadmapSection";
import FAQSection from "@/components/landing/FAQSection";
import MidCTASection from "@/components/landing/MidCTASection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import LandingFooter from "@/components/landing/LandingFooter";

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-foreground scroll-smooth relative">
      {/* Grain texture overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ opacity: 0.025 }}
      >
        <svg width="100%" height="100%">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      <LandingNav />
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <SolutionSection />
      <RoadmapSection />
      <MidCTASection />
      <FAQSection />
      <FinalCTASection />
      <LandingFooter />
    </div>
  );
};

export default Landing;
