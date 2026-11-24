"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

let isInitialized = false;

export const MOTION_QUERIES = {
  reduceMotion: "(prefers-reduced-motion: reduce)",
  isMobile: "(max-width: 767.98px)",
  isDesktop: "(min-width: 768px)",
  isBelowLg: "(max-width: 1023.98px)",
  isLgDesktop: "(min-width: 1024px)",
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia(MOTION_QUERIES.reduceMotion).matches;
}

/**
 * Normalizes GSAP matchMedia condition flags into calm vs full-motion values
 * so animations still run gracefully on systems with OS reduced-motion flags.
 */
export function resolveMotionConfig(conditions?: gsap.Conditions) {
  const reduced = Boolean(conditions?.reduceMotion);
  const desktop = Boolean(conditions?.isDesktop || conditions?.isLgDesktop);
  return {
    reduced,
    desktop,
    y: (full: number, gentle = 6) => (reduced ? gentle : desktop ? full : Math.round(full * 0.65)),
    dur: (full: number, gentle = 0.36) => (reduced ? gentle : full),
  };
}

/**
 * Registers core GSAP plugins once on the client and sets global defaults
 * tuned for smooth 60fps mobile and desktop execution.
 */
export function ensureGsapRegistered() {
  if (typeof window === "undefined" || isInitialized) return;
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);
  gsap.defaults({
    ease: "power3.out",
    duration: 0.6,
  });
  ScrollTrigger.config({
    ignoreMobileResize: true,
  });

  // Recalculate ScrollTrigger thresholds once webfonts or images finish settling
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });
  }
  if (document.readyState !== "complete") {
    window.addEventListener(
      "load",
      () => {
        ScrollTrigger.refresh();
      },
      { once: true }
    );
  }

  isInitialized = true;
}

if (typeof window !== "undefined") {
  ensureGsapRegistered();
}

export { gsap, useGSAP, ScrollTrigger, ScrollToPlugin };
