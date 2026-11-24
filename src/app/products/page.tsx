"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG, ProductSize } from "@/config/brand";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Coins,
  Layers,
  ShieldCheck,
  Sparkles,
  Share2,
  CheckCircle2,
} from "lucide-react";

export default function ProductsPage() {
  const products = BRAND_CONFIG.products;
  const [activeSizeIndex, setActiveSizeIndex] = useState<number>(2); // Default to 1 Litre (flagship)
  const [activeTabId, setActiveTabId] = useState<string>("economical");

  const currentProduct = products[activeSizeIndex];

  const handlePrev = () => {
    setActiveSizeIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setActiveSizeIndex((prev) => (prev + 1) % products.length);
  };

  const activeBenefit =
    BRAND_CONFIG.benefitTabs.find((t) => t.id === activeTabId) ||
    BRAND_CONFIG.benefitTabs[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case "economical":
        return Coins;
      case "multipurpose":
        return Layers;
      case "trusted":
        return ShieldCheck;
      case "easy-to-use":
      default:
        return Sparkles;
    }
  };

  return (
    <div className="w-full bg-white pb-24">
      {/* 1. TOP PRODUCT HERO (2-COLUMN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (6 cols): Studio Bottle Container with Carousel Controls */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#F4F7F6] rounded-3xl p-6 sm:p-10 flex items-center justify-center min-h-[420px] sm:min-h-[500px] border border-gray-200/80 shadow-inner group">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous product"
                className="absolute left-4 z-20 w-11 h-11 rounded-full bg-white text-gray-800 shadow-md border border-gray-200 flex items-center justify-center hover:bg-[#0FA942] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Product Bottle Image */}
              <div className="relative w-full h-[320px] sm:h-[420px] flex items-center justify-center">
                <Image
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.12)] transition-all duration-300"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next product"
                className="absolute right-4 z-20 w-11 h-11 rounded-full bg-white text-gray-800 shadow-md border border-gray-200 flex items-center justify-center hover:bg-[#0FA942] hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Badge */}
              {currentProduct.badge && (
                <div className="absolute top-6 left-6 px-3.5 py-1 rounded-full bg-[#0FA942] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                  {currentProduct.badge}
                </div>
              )}
            </div>
          </div>

          {/* Right Column (6 cols): Product Description, Size Selector & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0FA942] block mb-1">
                PREMIUM HOME HYGIENE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                {BRAND_CONFIG.fullName}
              </h1>
            </div>

            {/* 3 Crisp Paragraphs */}
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed font-normal">
              <p>
                <strong>{BRAND_CONFIG.name} Multipurpose Cleaner</strong> is an advanced active concentrate engineered to tackle grease, dirt, stubborn stains, and bacteria from all hard surfaces. Safe on skin and highly economical, just 1 litre of concentrate makes over 100 litres of ready-to-use floor cleaning solution.
              </p>
              <p>
                Formulated with a balanced, surface-neutral pH level, making it 100% safe for daily use on expensive Italian marble, granite, ceramic tiles, and hardwood laminate without leaving dulling residue or damaging gloss.
              </p>
              <p>
                Enriched with natural pine essential extracts, {BRAND_CONFIG.name} not only leaves tiles sparkling clean and germ-free, but also envelopes your living rooms and bedrooms in a revitalizing, long-lasting pine aroma.
              </p>
            </div>

            {/* Interactive Size Selector Pills ("Available:") */}
            <div className="pt-2 border-t border-gray-100">
              <label className="text-xs font-black uppercase tracking-wider text-gray-900 block mb-3">
                Available Pack Sizes:
              </label>
              <div className="flex flex-wrap gap-2.5">
                {products.map((p, idx) => {
                  const isActive = idx === activeSizeIndex;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActiveSizeIndex(idx)}
                      className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider transition-all duration-200 border ${
                        isActive
                          ? "bg-[#0FA942] text-white border-[#0FA942] shadow-pill scale-105"
                          : "bg-white text-gray-700 border-gray-200 hover:border-[#0FA942] hover:text-[#0FA942]"
                      }`}
                    >
                      {p.volume}
                    </button>
                  );
                })}
              </div>

              {/* Selected SKU Quick Info */}
              <div className="mt-4 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-gray-900 block">
                    {currentProduct.name}
                  </span>
                  <span className="text-gray-500">{currentProduct.bestFor}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 line-through mr-1">
                    ₹{Math.round(currentProduct.mrp * 1.15)}
                  </span>
                  <span className="text-base font-black text-[#0FA942]">
                    ₹{currentProduct.mrp}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Contact Us, Flipkart, Amazon */}
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#063B38] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#0FA942] transition-colors shadow-sm"
              >
                <span>CONTACT US</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <a
                href={BRAND_CONFIG.marketplace.flipkartUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#063B38] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#2874F0] transition-colors shadow-sm"
              >
                <span>FLIPKART</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={BRAND_CONFIG.marketplace.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#063B38] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#FF9900] hover:text-black transition-colors shadow-sm"
              >
                <span>AMAZON</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Share Icons */}
            <div className="pt-4 flex items-center gap-3 text-xs text-gray-500 border-t border-gray-100">
              <span className="font-semibold text-gray-700">Share with friends:</span>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/?text=Check%20out%20BIRMAL%20Floor%20Cleaner%20-%20https://birmal.in/products`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-emerald-100 text-[#0FA942] flex items-center justify-center hover:bg-[#0FA942] hover:text-white transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4-TAB BENEFITS SECTION */}
      <section className="bg-[#F4F7F6] py-16 sm:py-20 border-t border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4 Interactive Tab Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {BRAND_CONFIG.benefitTabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              const Icon = getTabIcon(tab.id);
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-300 shadow-sm border ${
                    isActive
                      ? "bg-[#0FA942] text-white border-[#0FA942] shadow-lg scale-102"
                      : "bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 stroke-[2.2] ${
                      isActive ? "text-white" : "text-[#0FA942]"
                    }`}
                  />
                  <span className="text-xs sm:text-sm font-extrabold tracking-wide">
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Split Content Panel below tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 overflow-hidden">
            {/* Left side (7 cols): Green Curved-Edge Content Card */}
            <div className="lg:col-span-7 bg-[#0FA942] text-white rounded-2xl p-8 sm:p-10 space-y-4 shadow-md">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-100">
                BENEFIT SPOTLIGHT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                {activeBenefit.headline}
              </h2>
              <p className="text-sm sm:text-base text-emerald-50 leading-relaxed font-normal">
                {activeBenefit.description}
              </p>

              <div className="pt-2 space-y-2">
                {activeBenefit.bulletPoints.map((bp, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side (5 cols): Matching Lifestyle Visual */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-inner border border-gray-100">
              <Image
                src={activeBenefit.image}
                alt={activeBenefit.title}
                fill
                className="object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW TO USE SECTION ("Using Birmal Concentrated Floor Cleaner") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0FA942]">
            — HOW TO USE —
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Using Birmal Concentrated Floor Cleaner
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Follow three simple steps to achieve streak-free, gleaming floors with lasting pine aroma.
          </p>
        </div>

        {/* Alternating Step Cards */}
        <div className="space-y-12 sm:space-y-16">
          {BRAND_CONFIG.usageSteps.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={step.step}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image (6 cols) */}
                <div
                  className={`lg:col-span-6 relative h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-[#0FA942]/20 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    loading="eager"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#0FA942] text-white font-black text-lg flex items-center justify-center shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Instruction Card (6 cols) */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-[#0FA942] text-xs font-extrabold uppercase tracking-wider">
                    Step {step.step} of 3
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="p-3.5 rounded-xl bg-gray-50 border-l-4 border-[#0FA942] text-xs font-medium text-gray-700">
                    {step.note}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
