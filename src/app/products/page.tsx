"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  gsap,
  useGSAP,
  ScrollTrigger,
  MOTION_QUERIES,
  prefersReducedMotion,
  resolveMotionConfig,
} from "@/lib/gsap";
import { BRAND_CONFIG } from "@/config/brand";
import { MagneticButton } from "@/components/motion/MagneticButton";
import {
  ChevronLeft,
  ChevronRight,
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

  const pageRef = useRef<HTMLDivElement>(null);
  const bottleStageRef = useRef<HTMLDivElement>(null);
  const priceTagRef = useRef<HTMLDivElement>(null);
  const benefitPanelRef = useRef<HTMLDivElement>(null);
  const hasSwitchedSizeRef = useRef(false);
  const hasSwitchedTabRef = useRef(false);

  const currentProduct = products[activeSizeIndex];

  const handleSizeSelect = (idx: number) => {
    hasSwitchedSizeRef.current = true;
    setActiveSizeIndex(idx);
  };

  const handlePrev = () => {
    hasSwitchedSizeRef.current = true;
    setActiveSizeIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    hasSwitchedSizeRef.current = true;
    setActiveSizeIndex((prev) => (prev + 1) % products.length);
  };

  const handleTabSelect = (id: string) => {
    hasSwitchedTabRef.current = true;
    setActiveTabId(id);
  };

  // Hero initial entrance + How-To-Use scroll choreography
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

          gsap.from(".prod-hero-stagger", {
            y: motion.y(18, 5),
            autoAlpha: 0,
            duration: motion.dur(0.5, 0.34),
            stagger: motion.reduced ? 0.04 : 0.07,
            clearProps: "transform,opacity,visibility",
          });

          const stepRows = gsap.utils.toArray<HTMLElement>(".usage-step-row", pageRef.current);
          gsap.set(stepRows, { autoAlpha: 0, y: motion.y(24, 6) });
          ScrollTrigger.batch(stepRows, {
            start: "top 86%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: motion.dur(0.55, 0.36),
                stagger: motion.reduced ? 0.06 : 0.12,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                overwrite: true,
              }),
          });
        }
      );
    },
    { scope: pageRef }
  );

  // Smooth GSAP pack bottle transition on size switch
  useGSAP(
    () => {
      if (!hasSwitchedSizeRef.current) return;
      const reduced = prefersReducedMotion();

      if (bottleStageRef.current) {
        gsap.fromTo(
          bottleStageRef.current,
          { autoAlpha: 0.25, scale: reduced ? 0.99 : 0.93, y: reduced ? 0 : 10 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: reduced ? 0.25 : 0.36,
            ease: reduced ? "power2.out" : "back.out(1.4)",
            clearProps: "transform,opacity,visibility",
            overwrite: true,
          }
        );
      }

      if (priceTagRef.current) {
        gsap.fromTo(
          priceTagRef.current,
          { y: reduced ? 0 : -4, autoAlpha: 0.45 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.25,
            ease: "power2.out",
            clearProps: "transform,opacity,visibility",
            overwrite: true,
          }
        );
      }
    },
    { scope: pageRef, dependencies: [activeSizeIndex] }
  );

  // Smooth GSAP spotlight transition on benefit tab switch
  useGSAP(
    () => {
      if (!hasSwitchedTabRef.current || !benefitPanelRef.current) return;
      const reduced = prefersReducedMotion();

      gsap.fromTo(
        benefitPanelRef.current,
        { autoAlpha: 0, y: reduced ? 4 : 12 },
        {
          autoAlpha: 1,
          y: 0,
          duration: reduced ? 0.25 : 0.35,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
          overwrite: true,
        }
      );
    },
    { scope: pageRef, dependencies: [activeTabId] }
  );

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
    <div ref={pageRef} className="w-full bg-white pb-24">
      {/* 1. TOP PRODUCT HERO (2-COLUMN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (6 cols): Studio Bottle Container with Carousel Controls */}
          <div className="prod-hero-stagger lg:col-span-6">
            <div className="relative bg-gradient-to-br from-[#F5F9F7] to-[#EAF3EE] rounded-3xl p-6 sm:p-10 flex items-center justify-center min-h-[420px] sm:min-h-[500px] border border-emerald-950/10 shadow-card overflow-hidden group">
              {/* Subtle radial studio spotlight */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 52%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%)",
                }}
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous product"
                className="btn-interactive absolute left-4 z-20 w-11 h-11 rounded-full bg-white text-[#063B38] shadow-md border border-emerald-950/10 flex items-center justify-center hover:bg-[#0FA942] hover:text-white hover:border-[#0FA942]"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Product Bottle Image */}
              <div
                ref={bottleStageRef}
                className="relative z-10 w-full h-[320px] sm:h-[420px] flex items-center justify-center"
              >
                <Image
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_22px_28px_rgba(6,59,56,0.16)]"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next product"
                className="btn-interactive absolute right-4 z-20 w-11 h-11 rounded-full bg-white text-[#063B38] shadow-md border border-emerald-950/10 flex items-center justify-center hover:bg-[#0FA942] hover:text-white hover:border-[#0FA942]"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Badge */}
              {currentProduct.badge && (
                <div className="absolute top-6 left-6 z-20 px-3.5 py-1 rounded-full bg-[#063B38] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm border border-emerald-400/30">
                  {currentProduct.badge}
                </div>
              )}

              {/* Subtle SKU dot switcher */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
                {products.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => handleSizeSelect(idx)}
                    aria-label={`Select ${p.volume}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeSizeIndex
                        ? "w-6 bg-[#0FA942]"
                        : "w-2 bg-emerald-950/20 hover:bg-emerald-950/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Product Description, Size Selector & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prod-hero-stagger">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0FA942] mb-1.5">
                <span className="w-6 h-[2px] bg-[#0FA942] rounded-full" />
                <span>PREMIUM HOME HYGIENE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B38] tracking-[-0.02em] leading-[1.12]">
                {BRAND_CONFIG.fullName}
              </h1>
            </div>

            {/* Description Paragraphs */}
            <div className="prod-hero-stagger space-y-3 text-sm text-gray-600 leading-relaxed font-normal">
              <p>
                <strong className="text-gray-900">{BRAND_CONFIG.name} Concentrated Floor Cleaner</strong> is made for everyday mopping where regular watery phenyl falls short. One litre makes over 100 litres of cleaning solution, cutting kitchen grease, dusty footprints, and germs cleanly.
              </p>
              <p>
                With a balanced pH 7.0 formula and natural pine oil extracts, it safely cleans Italian marble, granite, ceramic, and vitrified tiles without leaving chalky streaks or harsh chemical smells.
              </p>
            </div>

            {/* Interactive Size Selector Pills */}
            <div className="prod-hero-stagger pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between gap-2 mb-3">
                <label className="text-xs font-black uppercase tracking-wider text-gray-900">
                  Pack Sizes &amp; Official MRP:
                </label>
                <Link
                  href="/catalogue#retailer-prices"
                  className="text-[11px] font-bold text-[#0D8F38] hover:underline"
                >
                  Retailer Price List (20% Margin) →
                </Link>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {products.map((p, idx) => {
                  const isActive = idx === activeSizeIndex;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleSizeSelect(idx)}
                      className={`px-4 py-2.5 rounded-full text-xs font-extrabold tracking-wide transition-all duration-200 border active:scale-95 inline-flex items-center gap-1.5 ${
                        isActive
                          ? "bg-[#0FA942] text-white border-[#0FA942] shadow-pill"
                          : "bg-white text-gray-700 border-gray-200 hover:border-[#0FA942] hover:text-[#0FA942]"
                      }`}
                    >
                      <span>{p.volume}</span>
                      <span className={isActive ? "text-emerald-100" : "text-gray-400"}>•</span>
                      <span className="tabular-nums">₹{p.mrp.toLocaleString("en-IN")}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected SKU Quick Info */}
              <div
                ref={priceTagRef}
                className="mt-4 p-4 rounded-2xl bg-[#F5F9F7] border border-emerald-950/10 flex items-center justify-between gap-4 text-xs shadow-sm"
              >
                <div className="space-y-0.5">
                  <span className="font-extrabold text-[#063B38] block text-sm">
                    {currentProduct.name}
                  </span>
                  <span className="text-gray-600 font-medium block">
                    {currentProduct.description}
                  </span>
                </div>
                <div className="text-right shrink-0 pl-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 block">
                    Official MRP
                  </span>
                  <span className="text-xl font-black text-[#0FA942] tabular-nums">
                    ₹{currentProduct.mrp.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[10px] font-semibold text-gray-500 block">
                    Incl. 18% GST
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Contact Us, Flipkart, Amazon */}
            <div className="prod-hero-stagger pt-2 flex flex-wrap gap-3">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#063B38] text-white text-xs font-extrabold tracking-wider uppercase hover:bg-[#0FA942] shadow-sm group"
                >
                  <span>CONTACT US</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </MagneticButton>

              <a
                href={BRAND_CONFIG.marketplace.flipkartUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#063B38] text-white text-xs font-extrabold tracking-wider uppercase hover:bg-[#2874F0] shadow-sm"
              >
                <span>FLIPKART</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={BRAND_CONFIG.marketplace.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#063B38] text-white text-xs font-extrabold tracking-wider uppercase hover:bg-[#FF9900] hover:text-black shadow-sm"
              >
                <span>AMAZON</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Share Icons */}
            <div className="prod-hero-stagger pt-4 flex items-center gap-3 text-xs text-gray-500 border-t border-gray-100">
              <span className="font-semibold text-gray-700">Share with friends:</span>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/?text=Check%20out%20BIRMAL%20Floor%20Cleaner%20-%20https://birmal.in/products`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-500/20 text-[#0FA942] flex items-center justify-center hover:bg-[#0FA942] hover:text-white transition-colors"
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
      <section className="bg-[#F5F9F7] py-16 sm:py-20 border-t border-b border-emerald-950/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4 Interactive Tab Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {BRAND_CONFIG.benefitTabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              const Icon = getTabIcon(tab.id);
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabSelect(tab.id)}
                  className={`p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-300 border active:scale-[0.98] ${
                    isActive
                      ? "bg-[#0FA942] text-white border-[#0FA942] shadow-pill scale-[1.02]"
                      : "bg-white text-gray-700 border-emerald-950/10 hover:border-[#0FA942]/40 hover:bg-emerald-50/40 shadow-card"
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

          {/* Split Content Panel below tabs (GSAP animated) */}
          <div
            ref={benefitPanelRef}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-emerald-950/[0.08] overflow-hidden"
          >
            {/* Left side (7 cols): Botanical Green Content Card */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#0D8F38] to-[#0FA942] text-white rounded-2xl p-8 sm:p-10 space-y-4 shadow-md">
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
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW TO USE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100/80 text-[#0D8F38] text-[11px] font-extrabold uppercase tracking-[0.14em]">
            HOW TO USE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#063B38] tracking-[-0.02em]">
            How to Dilute &amp; Mop
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Three quick steps for clean, streak-free floors with a fresh pine finish.
          </p>
        </div>

        {/* Alternating Step Cards */}
        <div className="space-y-12 sm:space-y-16">
          {BRAND_CONFIG.usageSteps.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={step.step}
                className="usage-step-row grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image (6 cols) */}
                <div
                  className={`lg:col-span-6 relative h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-editorial ring-1 ring-emerald-950/10 bg-white p-2 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative w-full h-full rounded-[1.15rem] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      loading="eager"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-[#063B38]/90 backdrop-blur-sm text-white font-black text-base flex items-center justify-center shadow-lg border border-emerald-400/30 tabular-nums">
                      0{step.step}
                    </div>
                  </div>
                </div>

                {/* Instruction Card (6 cols) */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-100/80 text-[#0D8F38] text-[11px] font-extrabold uppercase tracking-wider">
                    Step {step.step} of 3
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#063B38] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="p-4 rounded-2xl bg-[#F5F9F7] border border-emerald-950/10 border-l-4 border-l-[#0FA942] text-xs font-semibold text-gray-700">
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
