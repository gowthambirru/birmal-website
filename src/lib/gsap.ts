"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

let isInitialized = false;

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
  isInitialized = true;
}

if (typeof window !== "undefined") {
  ensureGsapRegistered();
}

export { gsap, useGSAP, ScrollTrigger, ScrollToPlugin };
