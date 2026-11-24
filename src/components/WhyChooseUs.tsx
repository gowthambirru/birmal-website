"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { Sparkles, MapPin, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  const cards = [
    {
      num: "01",
      title: "Concentrated Pine Formula",
      tag: "High Yield • 1L = 100+ L",
      description:
        "High-potency active formula where 2 caps make 5 litres of cleaning solution. 2X tough on stains and grime, outlasting 4 regular bottles of ordinary phenyl.",
      icon: Sparkles,
    },
    {
      num: "02",
      title: "Pan-India Availability",
      tag: "Online & Retail Shelves",
      description:
        "Prompt doorstep delivery via Amazon, Flipkart, and leading supermarket partners, ensuring reliable supply for homes, clinics, and commercial premises.",
      icon: MapPin,
    },
    {
      num: "03",
      title: "Trusted by Families & Institutions",
      tag: "pH 7.0 • Marble Safe",
      description:
        "Formulated by Birrumalae Pharma under strict hygiene controls. Non-corrosive, pH balanced, 100% safe on marble, and gentle around kids and pets.",
      icon: ShieldCheck,
    },
  ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { reduceMotion, isMobile } = context.conditions ?? {};
          if (reduceMotion) return;

          gsap.from(".why-header-item", {
            y: isMobile ? 14 : 22,
            autoAlpha: 0,
            duration: 0.55,
            stagger: 0.08,
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: ".why-header",
              start: "top 86%",
              once: true,
            },
          });

          gsap.set(".why-card", { autoAlpha: 0, y: isMobile ? 16 : 26 });
          ScrollTrigger.batch(".why-card", {
            start: "top 88%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: isMobile ? 0.45 : 0.6,
                stagger: 0.1,
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
      className="relative bg-[#F5F9F7] text-gray-900 py-20 sm:py-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="why-header text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="why-header-item inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-[#0FA942]/20 text-[#0D8F38] text-[11px] font-extrabold uppercase tracking-[0.14em]">
            <span>WHY CHOOSE BIRMAL</span>
          </div>
          <h2 className="why-header-item text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-[#063B38] tracking-[-0.02em] leading-[1.15]">
            Your Home, Our Responsibility — Trusted Across India
          </h2>
          <p className="why-header-item text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto pt-1">
            At BIRMAL, we go beyond surface wiping. We bring pharmaceutical quality, deep stain removal, and lingering pine freshness to every room.
          </p>
        </div>

        {/* 3 Clean Architectural Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="why-card group relative bg-white rounded-3xl p-7 sm:p-8 shadow-card hover:shadow-card-hover border border-emerald-950/[0.08] hover:border-[#0FA942]/40 transition-all duration-300 md:hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
              >
                {/* Faint editorial index watermark */}
                <span
                  aria-hidden="true"
                  className="absolute top-5 right-6 text-4xl font-black text-emerald-950/[0.045] select-none tabular-nums group-hover:text-[#0FA942]/15 transition-colors"
                >
                  {card.num}
                </span>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-500/20 flex items-center justify-center text-[#0FA942] group-hover:bg-[#0FA942] group-hover:text-white group-hover:scale-105 transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0FA942] block mb-1.5">
                    {card.tag}
                  </span>

                  <h3 className="text-xl font-black text-gray-900 tracking-tight mb-3 group-hover:text-[#063B38] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Hover emerald bar sweep */}
                <div className="mt-6 pt-4 border-t border-gray-100 relative">
                  <div className="h-[2px] w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-[#0FA942] origin-left scale-x-[0.25] md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
