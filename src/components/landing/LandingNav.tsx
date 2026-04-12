import { useEffect, useState } from "react";

const LandingNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-sm border-b border-accent/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <a
        href="https://writturns.com"
        className="font-display text-xl shimmer-text"
      >
        Writturns
      </a>
      <a
        href="https://grow.writturns.com"
        className="text-xs tracking-[0.15em] uppercase font-body font-medium text-primary-foreground bg-primary px-5 py-2.5 hover:bg-primary/90 transition-colors"
        style={{ borderRadius: "3px" }}
      >
        Get my strategy →
      </a>
    </nav>
  );
};

export default LandingNav;
