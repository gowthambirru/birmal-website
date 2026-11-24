"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#063B38] text-white border-2 border-[#0FA942] flex items-center justify-center shadow-lg hover:bg-[#0FA942] hover:scale-110 transition-all duration-300"
    >
      <ChevronUp className="w-6 h-6 stroke-[2.5]" />
    </button>
  );
}
