"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  selector?: string;
  stagger?: number;
  y?: number;
}

/**
 * Reusable GSAP ScrollTrigger batch container for Server Component pages.
 * Automatically handles matchMedia reduced-motion and mobile spacing.
 */
export function ScrollReveal({
  children,
  className = "",
  selector = ".reveal-item",
  stagger = 0.08,
  y = 22,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { reduceMotion, isMobile } = context.conditions ?? {};
          if (reduceMotion) return;

          const items = gsap.utils.toArray<HTMLElement>(selector, containerRef.current);
          if (!items.length) return;

          gsap.set(items, { autoAlpha: 0, y: isMobile ? Math.min(14, y) : y });
          ScrollTrigger.batch(items, {
            start: "top 88%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: isMobile ? 0.42 : 0.55,
                stagger,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                overwrite: true,
              }),
          });
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
