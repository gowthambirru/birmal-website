"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

/**
 * Adds tactile spring press feedback and subtle cursor magnetism (desktop only)
 * using GSAP quickTo so pointer interactions stay locked at 60fps.
 */
export function MagneticButton({
  children,
  className = "inline-block",
  strength = 0.22,
}: MagneticButtonProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const el = wrapRef.current;
      if (!el || !contextSafe) return;

      const mm = gsap.matchMedia();
      mm.add(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });

          const onMove = contextSafe((e: PointerEvent) => {
            const rect = el.getBoundingClientRect();
            const relX = e.clientX - (rect.left + rect.width / 2);
            const relY = e.clientY - (rect.top + rect.height / 2);
            const maxShift = 6;
            xTo(Math.max(-maxShift, Math.min(maxShift, relX * strength)));
            yTo(Math.max(-maxShift, Math.min(maxShift, relY * strength)));
          });

          const onLeave = contextSafe(() => {
            xTo(0);
            yTo(0);
          });

          const onDown = contextSafe(() => {
            gsap.to(el, { scale: 0.96, duration: 0.12, ease: "power2.out", overwrite: "auto" });
          });

          const onUp = contextSafe(() => {
            gsap.to(el, { scale: 1, duration: 0.35, ease: "back.out(2.2)", overwrite: "auto" });
          });

          el.addEventListener("pointermove", onMove);
          el.addEventListener("pointerleave", onLeave);
          el.addEventListener("pointerdown", onDown);
          el.addEventListener("pointerup", onUp);
          el.addEventListener("pointercancel", onUp);

          return () => {
            el.removeEventListener("pointermove", onMove);
            el.removeEventListener("pointerleave", onLeave);
            el.removeEventListener("pointerdown", onDown);
            el.removeEventListener("pointerup", onUp);
            el.removeEventListener("pointercancel", onUp);
          };
        }
      );
    },
    { scope: wrapRef }
  );

  return (
    <div ref={wrapRef} className={className}>
      {children}
    </div>
  );
}
