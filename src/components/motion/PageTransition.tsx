"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAP, ScrollTrigger, MOTION_QUERIES, resolveMotionConfig } from "@/lib/gsap";

// Tracks client-side route transitions after initial hydration so SSR first paint is never delayed.
let hasCompletedInitialLoad = false;

/**
 * Provides smooth, GPU-composited route transitions and refreshes ScrollTrigger
 * when switching pages in Next.js App Router.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const isRouteChange = hasCompletedInitialLoad;
      hasCompletedInitialLoad = true;

      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: MOTION_QUERIES.reduceMotion,
          isMobile: MOTION_QUERIES.isMobile,
          isDesktop: MOTION_QUERIES.isDesktop,
        },
        (context) => {
          const { reduced, desktop } = resolveMotionConfig(context.conditions);

          if (!isRouteChange) {
            gsap.set(wrapperRef.current, { clearProps: "transform,opacity,visibility" });
            gsap.set(progressBarRef.current, { autoAlpha: 0, scaleX: 0 });
            return;
          }

          const tl = gsap.timeline({
            onComplete: () => {
              ScrollTrigger.refresh();
            },
          });

          const barDur = desktop ? 0.38 : 0.3;

          tl.fromTo(
            progressBarRef.current,
            { scaleX: 0, autoAlpha: 1, transformOrigin: "left center" },
            { scaleX: 1, duration: barDur, ease: "power2.out" },
            0
          )
            .to(
              progressBarRef.current,
              { autoAlpha: 0, duration: 0.2, ease: "power1.out" },
              desktop ? 0.32 : 0.24
            )
            .fromTo(
              wrapperRef.current,
              { autoAlpha: 0, y: reduced ? 0 : desktop ? 16 : 10 },
              {
                autoAlpha: 1,
                y: 0,
                duration: reduced ? 0.28 : desktop ? 0.44 : 0.34,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
              },
              0
            );
        }
      );

      // Ensure ScrollTrigger positions recalculate once layout settles on route mount
      const rafId = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        cancelAnimationFrame(rafId);
      };
    },
    { scope: wrapperRef, dependencies: [pathname] }
  );

  return (
    <>
      <div
        ref={progressBarRef}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0FA942] via-[#34D399] to-[#0FA942] z-[70] pointer-events-none opacity-0"
      />
      <div ref={wrapperRef} className="w-full min-w-0">
        {children}
      </div>
    </>
  );
}
