"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_QUERIES } from "@/lib/gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

/**
 * Adds tactile spring press feedback on all devices and subtle cursor magnetism
 * for mouse pointers without reduced-motion restrictions.
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
        {
          reduceMotion: MOTION_QUERIES.reduceMotion,
          all: "(min-width: 0px)",
        },
        (context) => {
          const reduced = Boolean(context.conditions?.reduceMotion);
          const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });

          const onMove = contextSafe((e: PointerEvent) => {
            if (reduced || e.pointerType !== "mouse") return;
            const rect = el.getBoundingClientRect();
            const relX = e.clientX - (rect.left + rect.width / 2);
            const relY = e.clientY - (rect.top + rect.height / 2);
            const maxShift = 6;
            xTo(Math.max(-maxShift, Math.min(maxShift, relX * strength)));
            yTo(Math.max(-maxShift, Math.min(maxShift, relY * strength)));
          });

          const onLeave = contextSafe(() => {
            if (reduced) return;
            xTo(0);
            yTo(0);
          });

          const onDown = contextSafe(() => {
            gsap.to(el, {
              scale: reduced ? 0.975 : 0.96,
              duration: 0.12,
              ease: "power2.out",
              overwrite: "auto",
            });
          });

          const onUp = contextSafe(() => {
            gsap.to(el, {
              scale: 1,
              duration: reduced ? 0.2 : 0.35,
              ease: reduced ? "power2.out" : "back.out(2.2)",
              overwrite: "auto",
            });
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
