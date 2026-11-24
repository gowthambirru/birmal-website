"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { BubbleDecorations } from "@/components/BubbleDecorations";
import { WaveDivider } from "@/components/WaveDivider";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ArrowRight, ShieldCheck, Download } from "lucide-react";
import { BRAND_CONFIG } from "@/config/brand";

export function HomeHero() {
  const pdfUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/catalogue/birmal-product-catalogue-2026.pdf`;
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isMobile: "(max-width: 1023px)",
          isDesktop: "(min-width: 1024px)",
        },
        (context) => {
          const { reduceMotion, isDesktop } = context.conditions ?? {};
          if (reduceMotion) return;

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          tl.from(".hero-copy-item", {
            y: isDesktop ? 22 : 14,
            autoAlpha: 0,
            duration: 0.58,
            stagger: 0.08,
            clearProps: "transform,opacity,visibility",
          })
            .from(
              ".hero-underline",
              {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.55,
                ease: "power2.out",
                clearProps: "transform",
              },
              0.25
            )
            .from(
              ".hero-visual-stage",
              {
                scale: 0.92,
                autoAlpha: 0,
                duration: 0.72,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
              },
              0.12
            );

          if (isDesktop) {
            gsap.to(".hero-orbit-ring", {
              rotation: 360,
              duration: 50,
              repeat: -1,
              ease: "none",
            });
          }
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#032422] via-[#063B38] to-[#084C47] text-white overflow-hidden pt-8 sm:pt-12 lg:pt-14 pb-0"
    >
      <BubbleDecorations />

      {/* Subtle Architectural Grid Overlay */}
      <div className="absolute inset-0 bg-architectural-grid pointer-events-none opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center pb-8 lg:pb-12">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left pt-2 lg:pt-0">
            {/* Top pill badge */}
            <div className="hero-copy-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-emerald-400/35 text-emerald-300 text-[11px] sm:text-xs font-extrabold tracking-[0.12em] uppercase backdrop-blur-sm shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
              <span>100% SATISFACTION GUARANTEED</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-copy-item text-4xl sm:text-5xl lg:text-[3.55rem] font-black tracking-[-0.025em] leading-[1.1]">
              Freshness In Every{" "}
              <span className="text-[#22C55E] relative inline-block">
                Clean
                <svg
                  className="hero-underline absolute -bottom-2 left-0 w-full h-2.5 text-[#0FA942]"
                  viewBox="0 0 120 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 7 Q 60 12 118 5"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="hero-copy-item text-sm sm:text-lg text-teal-100/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {BRAND_CONFIG.subheading}
            </p>

            {/* CTA Buttons */}
            <div className="hero-copy-item pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 flex-wrap">
              <MagneticButton className="w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="btn-interactive w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#0FA942] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#14BA4B] shadow-pill hover:shadow-pill-hover group"
                >
                  <span>CONTACT US</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </Link>
              </MagneticButton>

              <MagneticButton className="w-full sm:w-auto">
                <a
                  href={pdfUrl}
                  download="BIRMAL-Floor-Cleaner-Official-Catalogue-2026.pdf"
                  className="btn-interactive w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/25 hover:border-emerald-400/50 text-white font-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-sm group"
                >
                  <Download className="w-4 h-4 text-[#22C55E] transition-transform duration-200 group-hover:translate-y-0.5" />
                  <span>DOWNLOAD CATALOGUE</span>
                </a>
              </MagneticButton>

              <Link
                href="/products"
                className="btn-interactive w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-teal-950/60 border border-teal-400/30 text-teal-100 hover:text-white font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-teal-900/80 hover:border-emerald-400/50"
              >
                <span>VIEW PACK SIZES</span>
              </Link>
            </div>

            {/* Quick Feature Highlights */}
            <div className="hero-copy-item pt-5 grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-2xl font-black text-[#22C55E] tabular-nums">
                  2X Power
                </div>
                <div className="text-[11px] sm:text-xs text-teal-200/75 font-medium">
                  Active Concentrate
                </div>
              </div>
              <div className="text-center lg:text-left border-l border-white/10 pl-3 sm:pl-5">
                <div className="text-lg sm:text-2xl font-black text-[#22C55E] tabular-nums">
                  99.9%
                </div>
                <div className="text-[11px] sm:text-xs text-teal-200/75 font-medium">
                  Germ Protection
                </div>
              </div>
              <div className="text-center lg:text-left border-l border-white/10 pl-3 sm:pl-5">
                <div className="text-lg sm:text-2xl font-black text-[#22C55E] tabular-nums">
                  pH 7.0
                </div>
                <div className="text-[11px] sm:text-xs text-teal-200/75 font-medium">
                  Marble &amp; Tile Safe
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Spokesperson Framed Cleanly Inside Circular Medallion */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
            <div className="hero-visual-stage relative w-[300px] h-[300px] sm:w-[390px] sm:h-[390px] lg:w-[440px] lg:h-[440px] flex items-center justify-center">
              {/* Outer Orbital Dashed Ring */}
              <div className="hero-orbit-ring absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-emerald-400/35 pointer-events-none" />

              {/* Subtle Secondary Halo Ring */}
              <div className="absolute -inset-1.5 rounded-full border border-white/10 pointer-events-none" />

              {/* Circular Portrait Frame Clipping the Waist Edge Cleanly */}
              <div
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-emerald-400/40 shadow-[0_24px_60px_-10px_rgba(0,0,0,0.5),0_0_50px_-12px_rgba(15,169,66,0.35)]"
                style={{
                  background:
                    "radial-gradient(circle at 50% 42%, rgba(16, 118, 108, 0.75) 0%, rgba(7, 66, 62, 0.92) 60%, rgba(3, 36, 34, 1) 100%)",
                }}
              >
                <div className="relative w-full h-full flex justify-center items-start pt-[4%]">
                  <Image
                    src="/images/hero-model-birmal.webp"
                    alt="BIRMAL Floor Cleaner Brand Spokesperson"
                    width={672}
                    height={900}
                    priority
                    className="w-[84%] max-w-none h-auto object-contain select-none drop-shadow-[0_16px_28px_rgba(0,0,0,0.45)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Wave Divider Transitioning to Next Section */}
      <WaveDivider fillColor="#FFFFFF" bgColor="transparent" className="mt-2 sm:mt-4" />
    </section>
  );
}
