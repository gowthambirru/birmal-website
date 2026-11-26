"use client";

import { useState, useRef, useEffect } from "react";
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
import {
  Download,
  Eye,
  FileText,
  Layers,
  PhoneCall,
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Tag,
} from "lucide-react";

const CATALOGUE_PAGES = [
  {
    pageNumber: 1,
    title: "Official Cover & Pack Lineup",
    subtitle: "200 ml • 500 ml • 1 Litre • 5 Litres",
    previewSrc: "/catalogue/previews/page_1.webp",
    description:
      "Product range cover with Birrumalae Pharma details and complete bottle lineup.",
  },
  {
    pageNumber: 2,
    title: "Formulation & Mopping Guide",
    subtitle: "Natural Pine Oil, Neutral pH 7.0 & 3-Step Usage",
    previewSrc: "/catalogue/previews/page_2.webp",
    description:
      "Overview of stone-safe pH balance, dilution cost per litre, and daily mopping guide.",
  },
  {
    pageNumber: 3,
    title: "Consumer Retail Packs & MRPs",
    subtitle: "200 ml (₹70) • 500 ml (₹170) • 1 Litre (₹330)",
    previewSrc: "/catalogue/previews/page_3.webp",
    description:
      "Updated consumer pack specs, yields, retailer landing rates, and GST-inclusive MRPs.",
  },
  {
    pageNumber: 4,
    title: "5L Bulk Pack, Retailer Rates & Logistics",
    subtitle: "09-Nov-2026 Price List, Carton Weights & Contacts",
    previewSrc: "/catalogue/previews/page_4.webp",
    description:
      "5L commercial jerry can details, complete 18% GST retailer price table, and master box specs.",
  },
];

export default function CataloguePage() {
  const [selectedPageIndex, setSelectedPageIndex] = useState<number | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const modalImageRef = useRef<HTMLDivElement>(null);

  const pdfUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/catalogue/birmal-product-catalogue-2026.pdf`;

  const openLightbox = (index: number) => {
    setSelectedPageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPageIndex(null);
  };

  const nextLightboxPage = () => {
    setSelectedPageIndex((prev) =>
      prev !== null ? (prev + 1) % CATALOGUE_PAGES.length : null
    );
  };

  const prevLightboxPage = () => {
    setSelectedPageIndex((prev) =>
      prev !== null
        ? (prev - 1 + CATALOGUE_PAGES.length) % CATALOGUE_PAGES.length
        : null
    );
  };

  useEffect(() => {
    if (selectedPageIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightboxPage();
      if (e.key === "ArrowLeft") prevLightboxPage();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedPageIndex]);

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

          gsap.from(".cat-hero-stagger", {
            y: motion.y(18, 5),
            autoAlpha: 0,
            duration: motion.dur(0.5, 0.34),
            stagger: motion.reduced ? 0.04 : 0.07,
            clearProps: "transform,opacity,visibility",
          });

          const cards = gsap.utils.toArray<HTMLElement>(".cat-preview-card", pageRef.current);
          gsap.set(cards, { autoAlpha: 0, y: motion.y(22, 6) });
          ScrollTrigger.batch(cards, {
            start: "top 88%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: motion.dur(0.52, 0.34),
                stagger: motion.reduced ? 0.04 : 0.08,
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

  useGSAP(
    () => {
      if (selectedPageIndex === null || !modalImageRef.current) return;
      const reduced = prefersReducedMotion();

      gsap.fromTo(
        modalImageRef.current,
        { autoAlpha: 0.35, scale: reduced ? 0.99 : 0.96 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.25,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
          overwrite: true,
        }
      );
    },
    { scope: pageRef, dependencies: [selectedPageIndex] }
  );

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F5F9F7]">
      {/* 1. Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#032422] via-[#063B38] to-[#084B46] text-white pt-14 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-architectural-grid opacity-75 pointer-events-none" />
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[320px] rounded-full pointer-events-none opacity-35"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(15, 169, 66, 0.35) 0%, rgba(15, 169, 66, 0) 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
          <div className="cat-hero-stagger inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-[0.12em] backdrop-blur-sm">
            <FileText className="w-4 h-4 text-[#22C55E]" />
            <span>Updated Price List (09-Nov-2026) &amp; Catalogue</span>
          </div>

          <h1 className="cat-hero-stagger text-3xl sm:text-5xl font-black tracking-[-0.02em] uppercase max-w-4xl mx-auto leading-[1.12]">
            BIRMAL <span className="text-[#34D399]">Product Catalogue</span> &amp; Trade Rates
          </h1>

          <p className="cat-hero-stagger text-sm sm:text-base text-teal-100/85 max-w-2xl mx-auto leading-relaxed">
            Preview or download our 4-page product booklet along with official GST-inclusive retailer landing rates and master carton shipping dimensions.
          </p>

          <div className="cat-hero-stagger pt-3 flex flex-wrap items-center justify-center gap-4">
            <a
              href={pdfUrl}
              download="BIRMAL-Floor-Cleaner-Official-Catalogue-2026.pdf"
              className="btn-interactive inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0FA942] hover:bg-[#14BA4B] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-pill hover:shadow-pill-hover group"
            >
              <Download className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-0.5" />
              <span>DOWNLOAD OFFICIAL PDF (5.3 MB)</span>
            </a>

            <Link
              href="/contact#dealership"
              className="btn-interactive inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/25 text-white font-bold text-sm tracking-wide backdrop-blur-sm"
            >
              <PhoneCall className="w-4 h-4 text-emerald-300" />
              <span>Wholesale &amp; Dealership Inquiry</span>
            </Link>
          </div>

          {/* Quick Stats Badges */}
          <div className="cat-hero-stagger pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-white/[0.07] border border-white/15 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-[11px] text-emerald-300 font-extrabold uppercase tracking-wider">Format</div>
              <div className="text-base font-black text-white mt-0.5">Print Lookbook</div>
              <div className="text-[11px] text-teal-200/80">4 High-Resolution Pages</div>
            </div>
            <div className="bg-white/[0.07] border border-white/15 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-[11px] text-emerald-300 font-extrabold uppercase tracking-wider">SKU Range</div>
              <div className="text-base font-black text-white mt-0.5">200ml to 5 Litres</div>
              <div className="text-[11px] text-teal-200/80">Retail &amp; Bulk Jerry Can</div>
            </div>
            <div className="bg-white/[0.07] border border-white/15 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-[11px] text-emerald-300 font-extrabold uppercase tracking-wider">HSN Code</div>
              <div className="text-base font-black text-white mt-0.5 tabular-nums">3402 90 99</div>
              <div className="text-[11px] text-teal-200/80">GST Rate: 18%</div>
            </div>
            <div className="bg-white/[0.07] border border-white/15 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-[11px] text-emerald-300 font-extrabold uppercase tracking-wider">Manufacturer</div>
              <div className="text-base font-black text-white mt-0.5">Birrumalae Pharma</div>
              <div className="text-[11px] text-teal-200/80">Mallapur, Hyderabad</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Official Retailer Price List (Effective 09-Nov-2026) */}
      <section id="retailer-prices" className="pt-14 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl border border-emerald-950/10 p-6 sm:p-8 shadow-card">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0FA942]">
                <Tag className="w-4 h-4" />
                <span>Official Retailer Price List</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#063B38] mt-1 tracking-tight">
                Retail Billing Breakdown (w.e.f. {BRAND_CONFIG.retailPriceList.effectiveDate})
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {BRAND_CONFIG.companyLegalName} • Retailer Discount:{" "}
                <strong className="text-[#063B38]">
                  {BRAND_CONFIG.retailPriceList.retailerDiscount}
                </strong>{" "}
                • GST: <strong className="text-[#063B38]">{BRAND_CONFIG.retailPriceList.gstRate} Inclusive</strong>
              </p>
            </div>

            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 border border-[#0FA942]/25 text-[#0D8F38] text-xs font-extrabold shrink-0">
              20% Retailer Margin on MRP
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse tabular-nums">
              <thead>
                <tr className="bg-[#063B38] text-white">
                  <th className="py-3.5 px-4 font-bold rounded-l-xl">Pack Size</th>
                  <th className="py-3.5 px-4 font-bold">Basic Price (₹)</th>
                  <th className="py-3.5 px-4 font-bold">GST 18% (₹)</th>
                  <th className="py-3.5 px-4 font-bold">Retailer Landing (₹)</th>
                  <th className="py-3.5 px-4 font-bold rounded-r-xl">MRP (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {BRAND_CONFIG.retailPriceList.rows.map((row, idx) => (
                  <tr
                    key={row.id}
                    className={`hover:bg-[#F5F9F7] transition-colors ${
                      idx === 1 ? "bg-emerald-50/30" : ""
                    }`}
                  >
                    <td className="py-3.5 px-4 font-extrabold text-gray-900">{row.size}</td>
                    <td className="py-3.5 px-4 text-gray-700">₹{row.basicPrice.toFixed(2)}</td>
                    <td className="py-3.5 px-4 text-gray-700">₹{row.gstAmount.toFixed(2)}</td>
                    <td className="py-3.5 px-4 font-black text-[#063B38]">
                      ₹{row.retailerLanding.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-4 font-black text-[#0FA942]">
                      ₹{row.mrp.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-500">
            <span>{BRAND_CONFIG.retailPriceList.termsNote}</span>
            <span>5 Litres Commercial Jerry Can MRP: ₹1,450.00 (bulk trade rate on inquiry)</span>
          </div>
        </div>
      </section>

      {/* 3. Master Packaging & Logistics Summary Table */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl border border-emerald-950/10 p-6 sm:p-8 shadow-card">
          <div className="max-w-3xl mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0FA942]">
              <Layers className="w-4 h-4" />
              <span>Carton &amp; Dispatch Details</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#063B38] mt-1 tracking-tight">
              Master Carton &amp; Freight Specifications
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Outer shipper counts and dimensions for C&amp;F agents, super stockists, and freight booking.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse tabular-nums">
              <thead>
                <tr className="bg-[#063B38] text-white">
                  <th className="py-3.5 px-4 font-bold rounded-l-xl">Product SKU</th>
                  <th className="py-3.5 px-4 font-bold">Pack Type</th>
                  <th className="py-3.5 px-4 font-bold">MRP (₹)</th>
                  <th className="py-3.5 px-4 font-bold">Units / Master Box</th>
                  <th className="py-3.5 px-4 font-bold">Gross Wt.</th>
                  <th className="py-3.5 px-4 font-bold">Dimensions (L×W×H)</th>
                  <th className="py-3.5 px-4 font-bold">HSN Code</th>
                  <th className="py-3.5 px-4 font-bold rounded-r-xl">GST</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-[#F5F9F7] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">BIRMAL 200ml</td>
                  <td className="py-3.5 px-4 text-gray-600">Induction PET Bottle</td>
                  <td className="py-3.5 px-4 font-extrabold text-[#0FA942]">₹70.00</td>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">48 Units</td>
                  <td className="py-3.5 px-4 text-gray-600">11.20 kg</td>
                  <td className="py-3.5 px-4 text-gray-600">340 × 260 × 175 mm</td>
                  <td className="py-3.5 px-4 font-mono text-xs">3402 90 99</td>
                  <td className="py-3.5 px-4 font-bold text-gray-700">18%</td>
                </tr>
                <tr className="hover:bg-[#F5F9F7] transition-colors bg-emerald-50/30">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">BIRMAL 500ml</td>
                  <td className="py-3.5 px-4 text-gray-600">Grip PET Bottle</td>
                  <td className="py-3.5 px-4 font-extrabold text-[#0FA942]">₹170.00</td>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">24 Units</td>
                  <td className="py-3.5 px-4 text-gray-600">13.50 kg</td>
                  <td className="py-3.5 px-4 text-gray-600">380 × 270 × 225 mm</td>
                  <td className="py-3.5 px-4 font-mono text-xs">3402 90 99</td>
                  <td className="py-3.5 px-4 font-bold text-gray-700">18%</td>
                </tr>
                <tr className="hover:bg-[#F5F9F7] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">BIRMAL 1 Litre</td>
                  <td className="py-3.5 px-4 text-gray-600">Heavy PET + Dosing Cap</td>
                  <td className="py-3.5 px-4 font-extrabold text-[#0FA942]">₹330.00</td>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">12 Units</td>
                  <td className="py-3.5 px-4 text-gray-600">13.80 kg</td>
                  <td className="py-3.5 px-4 text-gray-600">360 × 275 × 285 mm</td>
                  <td className="py-3.5 px-4 font-mono text-xs">3402 90 99</td>
                  <td className="py-3.5 px-4 font-bold text-gray-700">18%</td>
                </tr>
                <tr className="hover:bg-[#F5F9F7] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">BIRMAL 5 Litres</td>
                  <td className="py-3.5 px-4 text-gray-600">HDPE Jerry Can</td>
                  <td className="py-3.5 px-4 font-extrabold text-[#0FA942]">₹1,450.00</td>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">4 Cans</td>
                  <td className="py-3.5 px-4 text-gray-600">22.40 kg</td>
                  <td className="py-3.5 px-4 text-gray-600">390 × 310 × 330 mm</td>
                  <td className="py-3.5 px-4 font-mono text-xs">3402 90 99</td>
                  <td className="py-3.5 px-4 font-bold text-gray-700">18%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Interactive Catalogue Page Previews Grid */}
      <section className="py-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 pb-4 border-b border-emerald-950/10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0FA942]">
              <Eye className="w-4 h-4" />
              <span>Catalogue Page Previews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#063B38] mt-1 tracking-tight">
              Browse Pages (1 – 4)
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Click any page to view full screen.
            </p>
          </div>

          <a
            href={pdfUrl}
            download="BIRMAL-Floor-Cleaner-Official-Catalogue-2026.pdf"
            className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#063B38] hover:bg-[#0FA942] text-white text-xs font-extrabold tracking-wider shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>SAVE ENTIRE PDF</span>
          </a>
        </div>

        {/* 4 Pages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATALOGUE_PAGES.map((page, index) => (
            <div
              key={page.pageNumber}
              className="cat-preview-card group bg-white rounded-3xl border border-emerald-950/10 overflow-hidden shadow-card hover:shadow-card-hover transition-[box-shadow,border-color] duration-300 flex flex-col justify-between"
            >
              {/* Preview Thumbnail Container */}
              <div
                onClick={() => openLightbox(index)}
                className="relative aspect-[1/1.414] w-full bg-gray-100 cursor-pointer overflow-hidden border-b border-gray-100"
              >
                <Image
                  src={page.previewSrc}
                  alt={`BIRMAL Catalogue Page ${page.pageNumber} - ${page.title}`}
                  fill
                  className="object-contain object-top group-hover:scale-[1.03] transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#032422]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center">
                  <div className="bg-white text-[#063B38] text-xs font-extrabold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                    <Maximize2 className="w-3.5 h-3.5 text-[#0FA942]" />
                    <span>View Full Screen</span>
                  </div>
                </div>

                {/* Page Number Pill */}
                <div className="absolute top-3 left-3 bg-[#063B38] text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-md border border-white/15">
                  PAGE 0{page.pageNumber}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-[#063B38] group-hover:text-[#0FA942] transition-colors">
                    {page.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#0D8F38]">
                    {page.subtitle}
                  </div>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                    {page.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => openLightbox(index)}
                    className="text-xs font-extrabold text-[#063B38] hover:text-[#0FA942] flex items-center gap-1 group/btn"
                  >
                    <span>Click to Zoom</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </button>
                  <span className="text-[11px] text-gray-500 font-medium">A4 • 300 DPI</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Full-Screen Lightbox Modal for Page Inspection */}
      {selectedPageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Top Control Bar */}
          <div
            className="flex items-center justify-between text-white max-w-7xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="bg-[#0FA942] text-white text-xs font-black px-2.5 py-1 rounded-full tabular-nums">
                PAGE 0{CATALOGUE_PAGES[selectedPageIndex].pageNumber} / 0{CATALOGUE_PAGES.length}
              </span>
              <span className="text-sm font-bold truncate hidden sm:inline">
                {CATALOGUE_PAGES[selectedPageIndex].title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={pdfUrl}
                download="BIRMAL-Floor-Cleaner-Official-Catalogue-2026.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-xs font-bold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF</span>
              </a>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/20 hover:bg-[#0FA942] text-white active:scale-95 transition-all"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Zoomed Image Container */}
          <div
            className="relative flex-1 flex items-center justify-center my-2 max-w-4xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={prevLightboxPage}
              className="absolute left-2 sm:-left-12 z-10 p-2.5 rounded-full bg-black/60 hover:bg-[#0FA942] text-white active:scale-95 transition-all"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              ref={modalImageRef}
              className="relative w-full h-full max-h-[82vh] aspect-[1/1.414]"
            >
              <Image
                src={CATALOGUE_PAGES[selectedPageIndex].previewSrc}
                alt={`Zoomed Page ${CATALOGUE_PAGES[selectedPageIndex].pageNumber}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              onClick={nextLightboxPage}
              className="absolute right-2 sm:-right-12 z-10 p-2.5 rounded-full bg-black/60 hover:bg-[#0FA942] text-white active:scale-95 transition-all"
              aria-label="Next Page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnails Navigation */}
          <div
            className="flex items-center justify-center gap-2 max-w-xl mx-auto overflow-x-auto py-1"
            onClick={(e) => e.stopPropagation()}
          >
            {CATALOGUE_PAGES.map((p, idx) => (
              <button
                key={p.pageNumber}
                onClick={() => setSelectedPageIndex(idx)}
                className={`relative w-10 sm:w-12 aspect-[1/1.414] rounded overflow-hidden border-2 transition-all ${
                  selectedPageIndex === idx
                    ? "border-[#0FA942] scale-110 shadow-md shadow-emerald-500/50"
                    : "border-gray-600 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={p.previewSrc}
                  alt={`Thumbnail Page ${p.pageNumber}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
