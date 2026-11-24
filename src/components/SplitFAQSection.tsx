"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";
import { Plus, Minus, ArrowRight } from "lucide-react";

export function SplitFAQSection() {
  const [openId, setOpenId] = useState<string>("safe-kids-pets");
  const faqs = BRAND_CONFIG.faqs.slice(0, 5);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="w-full bg-[#063B38] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* Left Side (6 cols): Full-Bleed High-Impact Bottle Visual */}
        <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full overflow-hidden">
          <Image
            src="/images/lifestyle/faq-splash.webp"
            alt="BIRMAL Concentrated Pine Floor Cleaner with Water Splash"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle gradient vignette to blend into dark teal seam */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#063B38]/90 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#063B38] via-transparent to-transparent lg:hidden" />

          {/* Floating Brand Badge */}
          <div className="absolute bottom-6 left-6 z-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-xs">
            <span className="text-[#0FA942] font-black mr-2">BIRMAL</span>
            <span className="text-white font-medium">Pure Pine Freshness</span>
          </div>
        </div>

        {/* Right Side (6 cols): Dark Teal Panel with Faint FAQ Watermark & Accordion */}
        <div className="lg:col-span-6 relative bg-[#063B38] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          {/* Faint Vertical "FAQ" Background Watermark Text */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[140px] sm:text-[180px] font-black text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter">
            FAQ
          </div>

          <div className="relative z-10 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0FA942] block mb-1">
                FAQs
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Your Questions Answered <br />
                <span className="text-[#0FA942]">Explore Our FAQs</span>
              </h2>
            </div>

            {/* Accordion Items */}
            <div className="space-y-3 pt-2">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border-b border-teal-800/70 pb-3 transition-colors"
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full flex items-center justify-between text-left py-2 gap-4 group"
                    >
                      <span className="text-sm sm:text-base font-bold text-teal-50 group-hover:text-[#0FA942] transition-colors">
                        {faq.question}
                      </span>
                      <span className="w-6 h-6 rounded-full bg-teal-800/80 flex items-center justify-center shrink-0 text-white group-hover:bg-[#0FA942] transition-colors">
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <p className="text-xs sm:text-sm text-teal-200/90 leading-relaxed pt-2 pb-1 animate-in fade-in duration-200 font-normal">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0FA942] uppercase tracking-wider hover:underline"
              >
                <span>VIEW ALL FREQUENTLY ASKED QUESTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
