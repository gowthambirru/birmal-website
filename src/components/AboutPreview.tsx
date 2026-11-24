"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, useGSAP, MOTION_QUERIES, resolveMotionConfig } from "@/lib/gsap";
import { Check, ArrowRight, FlaskConical } from "lucide-react";
import { BRAND_CONFIG } from "@/config/brand";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  const points = [
    "Proven 99.9% Germ Kill Formula",
    "Refreshing Natural Pine Aroma",
    "Safe For Kids, Pets & Daily Floor Use",
    "Effective On Vitrified Tiles, Marble, Granite & More",
  ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: MOTION_QUERIES.reduceMotion,
          isMobile: MOTION_QUERIES.isBelowLg,
          isDesktop: MOTION_QUERIES.isLgDesktop,
        },
        (context) => {
          const motion = resolveMotionConfig(context.conditions);

          gsap.from(".about-photo-frame", {
            y: motion.y(28, 6),
            autoAlpha: 0,
            duration: motion.dur(0.65, 0.42),
            stagger: motion.reduced ? 0.08 : 0.14,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: ".about-collage",
              start: "top 85%",
              once: true,
            },
          });

          gsap.from(".about-copy-stagger", {
            y: motion.y(20, 6),
            autoAlpha: 0,
            duration: motion.dur(0.55, 0.38),
            stagger: motion.reduced ? 0.05 : 0.08,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: ".about-copy-col",
              start: "top 85%",
              once: true,
            },
          });

          if (motion.desktop && !motion.reduced) {
            // Subtle hardware-accelerated scroll parallax on overlapping foreground photo
            gsap.to(".about-photo-front", {
              y: -22,
              ease: "none",
              scrollTrigger: {
                trigger: ".about-collage",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            });
          }
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols): Architectural 2-photo editorial collage */}
          <div className="lg:col-span-6 relative pb-10 sm:pb-12">
            <div className="about-collage relative mx-auto max-w-md lg:max-w-none">
              {/* Photo 1: Balcony Cleaning (Back Layer) */}
              <div className="about-photo-frame relative w-4/5 h-64 sm:h-80 rounded-3xl overflow-hidden shadow-card ring-1 ring-emerald-950/10 bg-white p-1.5">
                <div className="relative w-full h-full rounded-[1.15rem] overflow-hidden">
                  <Image
                    src="/images/lifestyle/about-balcony.webp"
                    alt="Spotless clean balcony with BIRMAL floor cleaner"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
              </div>

              {/* Photo 2: Indoor Living Room (Front Layer, Overlapping) */}
              <div className="about-photo-frame about-photo-front absolute -bottom-10 right-0 w-3/4 h-64 sm:h-80 rounded-3xl overflow-hidden shadow-editorial ring-1 ring-emerald-950/10 bg-white p-2 z-10">
                <div className="relative w-full h-full rounded-[1.1rem] overflow-hidden">
                  <Image
                    src="/images/lifestyle/about-indoor.webp"
                    alt="Sparkling clean marble living room floor with BIRMAL"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Refined Metric Badge Card */}
              <div className="about-photo-frame absolute -bottom-5 left-4 sm:left-6 z-20 bg-[#063B38] text-white rounded-2xl px-4 py-3 shadow-editorial border border-emerald-400/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0FA942] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black leading-none text-white">
                    2X Concentrate
                  </div>
                  <div className="text-[11px] text-emerald-200 font-semibold mt-0.5">
                    Pharma-Grade Formulation
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Brand Story & Checklist */}
          <div className="about-copy-col lg:col-span-6 space-y-6 pt-4 lg:pt-0">
            <div className="about-copy-stagger">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0FA942]">
                <span className="w-7 h-[2px] bg-[#0FA942] rounded-full" />
                <span>ABOUT {BRAND_CONFIG.name}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2.5 tracking-[-0.02em] leading-[1.15]">
                India&apos;s Trusted{" "}
                <span className="text-[#0FA942]">Home Cleaning Brand</span>
              </h2>
            </div>

            <p className="about-copy-stagger text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Formulated by <strong className="text-gray-900">{BRAND_CONFIG.companyLegalName}</strong>, BIRMAL Concentrated Floor Cleaner was developed to deliver pharmaceutical-grade hygiene into Indian households. Our advanced pine-active formulation removes stubborn dirt, grease, and unpleasant odors from all surfaces, keeping your spaces sparkling, safe, and pine fresh.
            </p>

            <div className="about-copy-stagger space-y-3 pt-1">
              <h3 className="text-base font-extrabold text-gray-900 tracking-tight">
                Why Families Switch to BIRMAL
              </h3>
              <ul className="grid grid-cols-1 gap-2.5">
                {points.map((pt, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-700 bg-[#F5F9F7] px-3.5 py-2.5 rounded-xl border border-emerald-950/[0.05]"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#0FA942] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="font-semibold text-gray-800">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-copy-stagger pt-2">
              <MagneticButton>
                <Link
                  href="/about"
                  className="btn-interactive inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0FA942] text-white font-extrabold text-xs tracking-wider uppercase hover:bg-[#0D8F38] shadow-pill hover:shadow-pill-hover group"
                >
                  <span>KNOW MORE ABOUT US</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle hairline botanical divider instead of harsh caution stripes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="editorial-divider w-full" />
      </div>
    </section>
  );
}
