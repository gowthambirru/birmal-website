"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, MOTION_QUERIES, resolveMotionConfig } from "@/lib/gsap";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  selector?: string;
  stagger?: number;
  y?: number;
}

/**
 * Reusable GSAP ScrollTrigger batch container for Server Component pages.
 * Automatically scales displacement for reduced-motion and mobile viewports.
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
          reduceMotion: MOTION_QUERIES.reduceMotion,
          isMobile: MOTION_QUERIES.isMobile,
          isDesktop: MOTION_QUERIES.isDesktop,
        },
        (context) => {
          const motion = resolveMotionConfig(context.conditions);
          const items = gsap.utils.toArray<HTMLElement>(selector, containerRef.current);
          if (!items.length) return;

          gsap.set(items, { autoAlpha: 0, y: motion.y(y, 6) });
          ScrollTrigger.batch(items, {
            start: "top 88%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: motion.dur(motion.desktop ? 0.55 : 0.42, 0.36),
                stagger: motion.reduced ? Math.min(0.05, stagger) : stagger,
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
