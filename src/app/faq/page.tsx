"use client";

import { useState } from "react";
import Link from "next/link";
import { BRAND_CONFIG, FAQItem } from "@/config/brand";
import { WaveDivider } from "@/components/WaveDivider";
import { Search, Plus, Minus, Phone, Mail, ArrowRight, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "safe-kids-pets": true,
  });

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

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full bg-white pb-24">
      {/* Hero Header */}
      <section className="relative bg-[#063B38] text-white pt-14 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 max-w-3xl">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0FA942]">
            KNOWLEDGE BASE &amp; HELP
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed font-normal">
            Find answers to common questions about BIRMAL dilution ratios, marble safety, ingredients, and dealership partnerships.
          </p>

          {/* Live Search Bar */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs (e.g. marble, dilution, pets, bulk)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3.5 pl-12 rounded-full bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-400/50 shadow-lg"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
        <WaveDivider fillColor="#FFFFFF" bgColor="transparent" className="mt-10" />
      </section>

      {/* Main FAQ Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-colors ${
                selectedCategory === cat
                  ? "bg-[#0FA942] text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 text-gray-500 space-y-2">
              <HelpCircle className="w-10 h-10 text-gray-400 mx-auto" />
              <p className="text-base font-semibold">No questions found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
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
                  className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-gray-900">
                      {faq.question}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#0FA942] flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support Help Card */}
        <div className="mt-16 bg-[#F4F7F6] rounded-3xl p-8 text-center border border-gray-200 space-y-4">
          <h3 className="text-xl font-black text-gray-900">
            Still have questions about BIRMAL?
          </h3>
          <p className="text-sm text-gray-600 max-w-md mx-auto font-normal">
            Our customer hygiene advisory desk is ready to help with dilution questions, institutional contracts, and bulk distribution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${BRAND_CONFIG.contacts.primaryPhone}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#063B38] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#0FA942] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0FA942]" />
              <span>CALL {BRAND_CONFIG.contacts.primaryPhone}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-gray-300 text-gray-800 text-xs font-bold tracking-wider uppercase hover:border-[#0FA942] hover:text-[#0FA942] transition-colors"
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
