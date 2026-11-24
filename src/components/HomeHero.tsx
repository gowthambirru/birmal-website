"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { BubbleDecorations } from "@/components/BubbleDecorations";
import { WaveDivider } from "@/components/WaveDivider";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ArrowRight, ShieldCheck, Download, Sparkles, Droplets } from "lucide-react";
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
                scale: 0.94,
                autoAlpha: 0,
                duration: 0.72,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
              },
              0.12
            )
            .from(
              ".hero-float-card",
              {
                y: 16,
                scale: 0.92,
                autoAlpha: 0,
                duration: 0.5,
                stagger: 0.12,
                ease: "back.out(1.6)",
                clearProps: "transform,opacity,visibility",
              },
              0.38
            );

          if (isDesktop) {
            // Subtle, ultra-light GPU float on architectural badge pills & outer halo
            gsap.to(".hero-float-card-1", {
              y: -7,
              duration: 3.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
            gsap.to(".hero-float-card-2", {
              y: 7,
              duration: 3.6,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
            gsap.to(".hero-orbit-ring", {
              rotation: 360,
              duration: 46,
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
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

          {/* Right Column (5 cols): Editorial Stage for Hero Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-2 lg:pt-0">
            <div className="hero-visual-stage relative w-[310px] sm:w-[410px] lg:w-[460px] h-[360px] sm:h-[470px] lg:h-[520px] flex items-end justify-center">
              {/* Soft Botanical Radial Aura Backdrop (pure CSS, zero blur cost) */}
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 48%, rgba(15, 169, 66, 0.34) 0%, rgba(10, 78, 74, 0.22) 48%, rgba(6, 59, 56, 0) 72%)",
                }}
              />

              {/* Precision Hairline Architectural Ring */}
              <div className="hero-orbit-ring absolute inset-8 sm:inset-10 rounded-full border border-dashed border-emerald-400/25 pointer-events-none" />
              <div className="absolute inset-12 sm:inset-14 rounded-full border border-white/10 pointer-events-none" />

              {/* Model Cutout Image */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <Image
                  src="/images/hero-model-birmal.webp"
                  alt="BIRMAL Floor Cleaner Brand Spokesperson"
                  width={460}
                  height={560}
                  priority
                  className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] max-h-[360px] sm:max-h-[470px] lg:max-h-[520px] w-auto"
                />
              </div>

              {/* Floating Frosted Spec Badge 1 (Top Right) */}
              <div className="hero-float-card hero-float-card-1 hidden sm:flex absolute top-14 -right-2 lg:-right-4 z-20 bg-[#042826]/85 backdrop-blur-md border border-emerald-400/35 rounded-2xl px-3.5 py-2.5 shadow-editorial items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#0FA942]/20 border border-[#0FA942]/40 flex items-center justify-center text-[#22C55E]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-extrabold text-white leading-tight">
                    Pine Fresh
                  </div>
                  <div className="text-[10px] text-emerald-200/80">
                    Zero Harsh Residue
                  </div>
                </div>
              </div>

              {/* Floating Frosted Spec Badge 2 (Bottom Left) */}
              <div className="hero-float-card hero-float-card-2 hidden sm:flex absolute bottom-12 -left-2 lg:-left-6 z-20 bg-white/95 text-gray-900 border border-white rounded-2xl px-3.5 py-2.5 shadow-editorial items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-[#0FA942]">
                  <Droplets className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-[#063B38] leading-tight">
                    1L = 100+ Litres
                  </div>
                  <div className="text-[10px] text-gray-500 font-semibold">
                    High-Yield Concentrate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Wave Divider Transitioning to Next Section */}
      <WaveDivider fillColor="#FFFFFF" bgColor="transparent" className="mt-6 sm:mt-8" />
    </section>
  );
}
