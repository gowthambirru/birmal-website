"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP, ScrollTrigger, MOTION_QUERIES, resolveMotionConfig } from "@/lib/gsap";
import { BRAND_CONFIG } from "@/config/brand";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function OurReach() {
  const sectionRef = useRef<HTMLElement>(null);
  const countRef = useRef<HTMLDivElement>(null);

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

          gsap.from(".reach-left-item", {
            y: motion.y(20, 6),
            autoAlpha: 0,
            duration: motion.dur(0.55, 0.36),
            stagger: motion.reduced ? 0.05 : 0.08,
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: ".reach-left-col",
              start: "top 86%",
              once: true,
            },
          });

          // Smooth GSAP numeric count-up for 50,000+ households
          if (countRef.current) {
            const counter = { value: 0 };
            gsap.to(counter, {
              value: 50000,
              duration: motion.dur(1.4, 0.95),
              ease: "power2.out",
              scrollTrigger: {
                trigger: countRef.current,
                start: "top 90%",
                once: true,
              },
              onUpdate: () => {
                if (countRef.current) {
                  countRef.current.textContent = `${Math.round(counter.value).toLocaleString("en-IN")}+`;
                }
              },
            });
          }

          gsap.set(".reach-partner-card", {
            autoAlpha: 0,
            y: motion.y(20, 5),
            scale: motion.reduced ? 0.99 : 0.96,
          });
          ScrollTrigger.batch(".reach-partner-card", {
            start: "top 88%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: motion.dur(0.48, 0.35),
                stagger: motion.reduced ? 0.03 : 0.045,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                overwrite: true,
              }),
          });
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#032422] via-[#063B38] to-[#084B46] text-white py-20 sm:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-architectural-grid opacity-75 pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(15, 169, 66, 0.32) 0%, rgba(6, 59, 56, 0) 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (5 cols): Heading + Animated Customer Metric */}
          <div className="reach-left-col lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="reach-left-item">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#22C55E]">
                <span className="w-7 h-[2px] bg-[#22C55E] rounded-full" />
                <span>PAN-INDIA NETWORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white mt-2.5 tracking-[-0.02em] leading-[1.13]">
                Serving{" "}
                <span className="text-[#22C55E]">Households</span> Across India
              </h2>
            </div>

            <p className="reach-left-item text-sm sm:text-base text-teal-100/85 leading-relaxed font-normal">
              From neighborhood kirana stores and regional supermarkets to modern cash &amp; carry hubs and quick e-commerce delivery, BIRMAL is built for dependable daily availability.
            </p>

            {/* Trust Stat Metric Card */}
            <div className="reach-left-item inline-flex items-center gap-4 bg-white/[0.07] border border-white/15 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="flex -space-x-2.5 overflow-hidden shrink-0">
                <div className="h-10 w-10 rounded-full ring-2 ring-[#063B38] bg-gradient-to-br from-[#0FA942] to-[#065F46] text-white font-extrabold text-xs flex items-center justify-center">
                  MB
                </div>
                <div className="h-10 w-10 rounded-full ring-2 ring-[#063B38] bg-gradient-to-br from-teal-500 to-teal-800 text-white font-extrabold text-xs flex items-center justify-center">
                  PS
                </div>
                <div className="h-10 w-10 rounded-full ring-2 ring-[#063B38] bg-gradient-to-br from-emerald-500 to-emerald-800 text-white font-extrabold text-xs flex items-center justify-center">
                  SJ
                </div>
              </div>
              <div className="text-left">
                <div
                  ref={countRef}
                  className="text-2xl font-black text-white tabular-nums tracking-tight"
                >
                  50,000+
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-300 font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Happy Homes &amp; Facilities</span>
                </div>
              </div>
            </div>

            <div className="reach-left-item pt-1">
              <Link
                href="/where-to-buy"
                className="btn-interactive inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-[#063B38] font-extrabold text-xs uppercase tracking-wider hover:bg-[#0FA942] hover:text-white shadow-md group"
              >
                <span>EXPLORE STOCKISTS &amp; CHANNELS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column (7 cols): Precision Framed Retail Channels Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {BRAND_CONFIG.retailPartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="reach-partner-card bg-white/95 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center shadow-lg hover:shadow-2xl border border-white/80 transition-[box-shadow,border-color] duration-300 group min-h-[104px]"
                >
                  <div className="relative w-full h-11 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={140}
                      height={44}
                      className="object-contain max-h-9 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-2.5 w-full flex items-center justify-between gap-2 pt-2 border-t border-gray-100">
                    <span className="text-[11px] font-bold text-gray-700 truncate">
                      {partner.name}
                    </span>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-[#0D8F38] shrink-0">
                      {partner.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
