"use client";

import { useState } from "react";
import { BRAND_CONFIG } from "@/config/brand";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const testimonials = BRAND_CONFIG.testimonials;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Visible items (3 on desktop, 1-2 on mobile)
  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <section className="bg-[#F4F7F6] py-20 sm:py-24 border-t border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Nav Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0FA942] block mb-1">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Clients Feedback About Their Experience With Us
            </h2>
          </div>

          {/* Prev / Next Circular Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-11 h-11 rounded-full border-2 border-emerald-600 text-emerald-700 bg-white hover:bg-[#0FA942] hover:text-white hover:border-[#0FA942] flex items-center justify-center transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-11 h-11 rounded-full border-2 border-emerald-600 text-emerald-700 bg-white hover:bg-[#0FA942] hover:text-white hover:border-[#0FA942] flex items-center justify-center transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 3 Responsive Cards with Top-Right Avatar & Bottom Emerald Border */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-7 pt-9 shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-[#0FA942] flex flex-col justify-between"
            >
              {/* Overlapping User Avatar Badge at Top-Right */}
              <div className="absolute -top-5 right-6 w-11 h-11 rounded-full bg-slate-500 text-white font-black text-sm flex items-center justify-center shadow-md border-2 border-white">
                {item.avatarText}
              </div>

              {/* Watermark Quote */}
              <Quote className="absolute bottom-5 right-5 w-12 h-12 text-gray-100 -z-0 pointer-events-none" />

              <div className="space-y-3 relative z-10">
                <div>
                  <h3 className="text-base font-extrabold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0FA942]">
                    {item.role} • {item.location}
                  </p>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* 5 Green Stars */}
              <div className="flex items-center gap-1 text-[#0FA942] pt-4 relative z-10">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#0FA942] text-[#0FA942]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
