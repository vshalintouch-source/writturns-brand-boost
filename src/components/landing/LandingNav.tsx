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
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
      style={{
        borderBottom: scrolled
          ? "1px solid rgba(248,248,246,0.08)"
          : "1px solid transparent",
      }}
    >
      <a
        href="https://writturns.com"
        className="font-display text-xl shimmer-text"
      >
        Writturns
      </a>
      <a
        href="https://grow.writturns.com"
        className="font-body font-medium text-[#080808] bg-[#F8F8F6] px-5 py-2.5 hover:bg-[#F8F8F6]/90 transition-colors"
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          borderRadius: "0px",
        }}
      >
        Get my strategy →
      </a>
    </nav>
  );
};

export default LandingNav;
