"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_QUERIES, resolveMotionConfig } from "@/lib/gsap";
import { WaveDivider } from "@/components/WaveDivider";

interface PageHeroBannerProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
  waveFillColor?: string;
}

/**
 * Shared editorial subpage hero header with subtle radial lighting,
 * architectural line grid, and GSAP entrance choreography.
 */
export function PageHeroBanner({
  eyebrow,
  title,
  description,
  children,
  waveFillColor = "#FFFFFF",
}: PageHeroBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);

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

          gsap.from(".hero-stagger", {
            y: motion.y(20, 6),
            autoAlpha: 0,
            duration: motion.dur(motion.desktop ? 0.55 : 0.42, 0.36),
            stagger: motion.reduced ? 0.05 : 0.08,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          });
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#032422] via-[#063B38] to-[#084642] text-white pt-12 sm:pt-16 pb-0 overflow-hidden"
    >
      {/* Subtle Architectural Grid & Crown Light */}
      <div className="absolute inset-0 bg-architectural-grid pointer-events-none opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[320px] rounded-full pointer-events-none opacity-35"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(15, 169, 66, 0.35) 0%, rgba(15, 169, 66, 0) 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
        <div className="hero-stagger inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-emerald-400/25 text-emerald-300 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.14em] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
          <span>{eyebrow}</span>
        </div>

        <h1 className="hero-stagger text-3xl sm:text-5xl font-black tracking-[-0.02em] leading-[1.12] text-white">
          {title}
        </h1>

        <p className="hero-stagger text-sm sm:text-base text-teal-100/85 leading-relaxed max-w-2xl mx-auto font-normal">
          {description}
        </p>

        {children && <div className="hero-stagger pt-2">{children}</div>}
      </div>

      <WaveDivider fillColor={waveFillColor} bgColor="transparent" className="mt-8 sm:mt-10" />
    </section>
  );
}
