"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { BRAND_CONFIG } from "@/config/brand";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { Search, Plus, Phone, Mail, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "safe-kids-pets": true,
  });

  const pageRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const hasFilteredRef = useRef(false);
  const hasInitializedPanelsRef = useRef(false);

  const categories = [
    "All",
    "Product & Safety",
    "Usage & Dilution",
    "Orders & Dealership",
  ];

  const filteredFaqs = BRAND_CONFIG.faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (cat: string) => {
    hasFilteredRef.current = true;
    setSelectedCategory(cat);
  };

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isInitial = !hasInitializedPanelsRef.current;
      hasInitializedPanelsRef.current = true;

      Object.entries(panelRefs.current).forEach(([id, el]) => {
        if (!el) return;
        const isOpen = !!openIds[id];
        if (reduceMotion || isInitial) {
          gsap.set(el, { height: isOpen ? "auto" : 0, autoAlpha: isOpen ? 1 : 0 });
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
            duration: 0.24,
            ease: "power2.inOut",
            overwrite: true,
          });
        }
      });
    },
    { scope: pageRef, dependencies: [openIds, selectedCategory, searchQuery] }
  );

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion || !hasFilteredRef.current) return;

      gsap.fromTo(
        ".faq-list-card",
        { y: 12, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.32,
          stagger: 0.04,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
          overwrite: true,
        }
      );
    },
    { scope: pageRef, dependencies: [selectedCategory] }
  );

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div ref={pageRef} className="w-full bg-white pb-24">
      <PageHeroBanner
        eyebrow="KNOWLEDGE BASE & HELP"
        title="Frequently Asked Questions"
        description="Find answers to common questions about BIRMAL dilution ratios, marble safety, ingredients, and dealership partnerships."
      >
        <div className="pt-3 max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs (e.g. marble, dilution, pets, bulk)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3.5 pl-12 rounded-full bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-400/45 shadow-editorial"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </PageHeroBanner>

      {/* Main FAQ Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 rounded-full text-xs font-extrabold tracking-wider transition-all duration-200 active:scale-95 border ${
                selectedCategory === cat
                  ? "bg-[#0FA942] text-white border-[#0FA942] shadow-pill"
                  : "bg-[#F5F9F7] text-gray-700 border-emerald-950/10 hover:border-[#0FA942]/40 hover:text-[#063B38]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 text-gray-500 space-y-2">
              <HelpCircle className="w-10 h-10 text-gray-400 mx-auto" />
              <p className="text-base font-semibold">No questions found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  handleCategoryChange("All");
                }}
                className="text-xs text-[#0FA942] font-bold hover:underline"
              >
                Clear search and filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`faq-list-card rounded-2xl border overflow-hidden transition-colors duration-200 ${
                    isOpen
                      ? "border-[#0FA942]/45 bg-[#F8FCFA] shadow-card"
                      : "border-emerald-950/10 bg-white hover:border-emerald-950/20 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 text-left gap-4 group"
                  >
                    <span className="text-sm sm:text-base font-extrabold text-[#063B38]">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0FA942] text-white rotate-45"
                          : "bg-emerald-50 text-[#0FA942] group-hover:bg-emerald-100"
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
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-emerald-950/[0.06] pt-3">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Support Help Card */}
        <div className="mt-16 bg-[#F5F9F7] rounded-3xl p-8 text-center border border-emerald-950/10 shadow-card space-y-4">
          <h3 className="text-xl font-black text-[#063B38]">
            Still have questions about BIRMAL?
          </h3>
          <p className="text-sm text-gray-600 max-w-md mx-auto font-normal">
            Our customer hygiene advisory desk is ready to help with dilution questions, institutional contracts, and bulk distribution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${BRAND_CONFIG.contacts.primaryPhone}`}
              className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#063B38] text-white text-xs font-extrabold tracking-wider uppercase hover:bg-[#0FA942] shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#22C55E]" />
              <span>CALL {BRAND_CONFIG.contacts.primaryPhone}</span>
            </a>

            <Link
              href="/contact"
              className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-emerald-950/15 text-[#063B38] text-xs font-extrabold tracking-wider uppercase hover:border-[#0FA942] hover:text-[#0FA942] shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>SEND AN INQUIRY</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
