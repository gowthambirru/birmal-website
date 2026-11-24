"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { BRAND_CONFIG } from "@/config/brand";
import { Star, ChevronLeft, ChevronRight, Quote, BadgeCheck } from "lucide-react";

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const hasInteractedRef = useRef(false);
  const testimonials = BRAND_CONFIG.testimonials;

  const { contextSafe } = useGSAP({ scope: sectionRef });

  const nextSlide = contextSafe(() => {
    hasInteractedRef.current = true;
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  });

  const prevSlide = contextSafe(() => {
    hasInteractedRef.current = true;
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  });

  const goToSlide = contextSafe((idx: number) => {
    hasInteractedRef.current = true;
    setStartIndex(idx);
  });

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          animate: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          if (context.conditions?.reduceMotion) return;

          if (!hasInteractedRef.current) {
            gsap.from(".testimonial-card", {
              y: 22,
              autoAlpha: 0,
              duration: 0.55,
              stagger: 0.09,
              clearProps: "transform,opacity,visibility",
              scrollTrigger: {
                trigger: cardsGridRef.current,
                start: "top 86%",
                once: true,
              },
            });
          } else {
            gsap.fromTo(
              ".testimonial-card",
              { y: 12, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.36,
                stagger: 0.05,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                overwrite: true,
              }
            );
          }
        }
      );
    },
    { scope: sectionRef, dependencies: [startIndex] }
  );

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 sm:py-24 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Nav Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0FA942] mb-2">
              <span className="w-7 h-[2px] bg-[#0FA942] rounded-full" />
              <span>VERIFIED REVIEWS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#063B38] tracking-[-0.02em] leading-[1.15]">
              What Families &amp; Facilities Say
            </h2>
          </div>

          {/* Prev / Next Circular Buttons + Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-extrabold text-gray-400 tabular-nums mr-1">
              0{startIndex + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="btn-interactive w-11 h-11 rounded-full border border-emerald-950/15 text-[#063B38] bg-[#F5F9F7] hover:bg-[#0FA942] hover:text-white hover:border-[#0FA942] flex items-center justify-center shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="btn-interactive w-11 h-11 rounded-full border border-emerald-950/15 text-[#063B38] bg-[#F5F9F7] hover:bg-[#0FA942] hover:text-white hover:border-[#0FA942] flex items-center justify-center shadow-sm"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* 3 Responsive Editorial Review Cards */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {visibleTestimonials.map((item) => (
            <div
              key={`${startIndex}-${item.id}`}
              className="testimonial-card relative bg-[#F5F9F7] rounded-3xl p-7 shadow-card hover:shadow-card-hover border border-emerald-950/[0.07] hover:border-[#0FA942]/35 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Faint Quote Watermark */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-950/[0.05] pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* 5 Green Stars + Verified Label */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#0FA942]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#0FA942] text-[#0FA942]"
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                    <BadgeCheck className="w-3 h-3 text-[#0FA942]" />
                    <span>Verified Buyer</span>
                  </span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Footer Author Row */}
              <div className="flex items-center gap-3.5 pt-5 mt-5 border-t border-emerald-950/[0.08] relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#063B38] to-[#0FA942] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-sm">
                  {item.avatarText}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-gray-900 truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0D8F38] truncate">
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => goToSlide(idx)}
              aria-label={`View testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === startIndex
                  ? "w-7 bg-[#0FA942]"
                  : "w-2 bg-gray-300 hover:bg-emerald-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
