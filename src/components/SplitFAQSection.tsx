"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { BRAND_CONFIG } from "@/config/brand";
import { Plus, ArrowRight } from "lucide-react";

export function SplitFAQSection() {
  const [openId, setOpenId] = useState<string>("safe-kids-pets");
  const faqs = BRAND_CONFIG.faqs.slice(0, 5);
  const sectionRef = useRef<HTMLElement>(null);
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const hasInitializedPanelsRef = useRef(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          animate: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const reduceMotion = context.conditions?.reduceMotion;
          const isInitial = !hasInitializedPanelsRef.current;
          hasInitializedPanelsRef.current = true;

          Object.entries(panelRefs.current).forEach(([id, el]) => {
            if (!el) return;
            const isOpen = openId === id;
            if (reduceMotion || isInitial) {
              gsap.set(el, {
                height: isOpen ? "auto" : 0,
                autoAlpha: isOpen ? 1 : 0,
              });
              return;
            }

            if (isOpen) {
              gsap.to(el, {
                height: "auto",
                autoAlpha: 1,
                duration: 0.34,
                ease: "power3.out",
                overwrite: true,
              });
            } else {
              gsap.to(el, {
                height: 0,
                autoAlpha: 0,
                duration: 0.25,
                ease: "power2.inOut",
                overwrite: true,
              });
            }
          });
        }
      );
    },
    { scope: sectionRef, dependencies: [openId] }
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".faq-stagger", {
          y: 18,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.07,
          clearProps: "transform,opacity,visibility",
          scrollTrigger: {
            trigger: ".faq-panel-col",
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#042826] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        {/* Left Side (6 cols): Full-Bleed High-Impact Bottle Visual */}
        <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[440px] lg:min-h-full overflow-hidden">
          <Image
            src="/images/lifestyle/faq-splash.webp"
            alt="BIRMAL Concentrated Pine Floor Cleaner with Water Splash"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#042826]/95 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#042826] via-transparent to-transparent lg:hidden" />

          {/* Floating Brand Badge */}
          <div className="absolute bottom-6 left-6 z-10 bg-[#032422]/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-emerald-400/25 text-xs shadow-editorial">
            <span className="text-[#22C55E] font-black mr-2">BIRMAL</span>
            <span className="text-teal-50 font-semibold">Pure Pine Freshness</span>
          </div>
        </div>

        {/* Right Side (6 cols): Dark Teal Panel & GSAP Accordion */}
        <div className="faq-panel-col lg:col-span-6 relative bg-[#042826] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          {/* Subtle Background Architectural Mark */}
          <div
            aria-hidden="true"
            className="absolute right-6 top-10 text-[120px] sm:text-[150px] font-black text-white/[0.025] select-none pointer-events-none leading-none tracking-tighter"
          >
            FAQ
          </div>

          <div className="relative z-10 space-y-6">
            <div className="faq-stagger">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#22C55E] mb-2">
                <span className="w-7 h-[2px] bg-[#22C55E] rounded-full" />
                <span>QUICK ANSWERS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-[-0.02em] leading-[1.15]">
                Your Questions Answered <br />
                <span className="text-[#22C55E]">Explore Our FAQs</span>
              </h2>
            </div>

            {/* Smooth GSAP Accordion Items */}
            <div className="space-y-2.5 pt-2">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`faq-stagger rounded-2xl border transition-colors duration-200 px-4 py-1 ${
                      isOpen
                        ? "bg-white/[0.06] border-emerald-400/35"
                        : "bg-transparent border-white/10 hover:border-white/20"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between text-left py-3 gap-4 group"
                    >
                      <span
                        className={`text-sm sm:text-base font-bold transition-colors ${
                          isOpen ? "text-white" : "text-teal-50/90 group-hover:text-[#22C55E]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-[#0FA942] text-white rotate-45"
                            : "bg-white/10 text-white group-hover:bg-[#0FA942]"
                        }`}
                      >
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    </button>

                    <div
                      ref={(el) => {
                        panelRefs.current[faq.id] = el;
                      }}
                      className="overflow-hidden"
                      style={{ height: faq.id === "safe-kids-pets" ? "auto" : 0 }}
                    >
                      <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed pb-3.5 pt-0.5 font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="faq-stagger pt-2">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-[#22C55E] uppercase tracking-wider hover:text-white transition-colors group"
              >
                <span>VIEW ALL FREQUENTLY ASKED QUESTIONS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
