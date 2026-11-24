"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 320);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      const el = btnRef.current;
      if (!el) return;

      if (visible) {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "back.out(1.7)",
          overwrite: true,
        });
      } else {
        gsap.to(el, {
          autoAlpha: 0,
          y: 16,
          scale: 0.85,
          duration: 0.22,
          ease: "power2.in",
          overwrite: true,
        });
      }
    },
    { dependencies: [visible] }
  );

  const { contextSafe } = useGSAP({ scope: btnRef });

  const scrollToTop = contextSafe(() => {
    gsap.to(btnRef.current, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
    });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      window.scrollTo(0, 0);
      return;
    }

    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 0.75,
      ease: "power3.inOut",
    });
  });

  return (
    <button
      ref={btnRef}
      onClick={scrollToTop}
      aria-label="Back to Top"
      style={{ opacity: 0, visibility: "hidden" }}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#063B38] text-white border border-emerald-400/40 flex items-center justify-center shadow-[0_12px_28px_-6px_rgba(3,36,34,0.45)] hover:bg-[#0FA942] hover:border-[#0FA942] hover:-translate-y-0.5 active:scale-95 transition-colors duration-200 group"
    >
      <ChevronUp className="w-5 h-5 stroke-[2.5] transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
