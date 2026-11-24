"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Download, 
  Eye, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  PhoneCall, 
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { BRAND_CONFIG } from "@/config/brand";

const CATALOGUE_PAGES = [
  {
    pageNumber: 1,
    title: "Official Cover & Complete Portfolio",
    subtitle: "200ml • 500ml • 1 Litre • 5 Litres Lineup",
    previewSrc: "/catalogue/previews/page_1.png",
    description: "Official cover with Birrumalae Pharma credentials, 2X concentrate claim, 99.9% germ protection, and flagship bottle lineup."
  },
  {
    pageNumber: 2,
    title: "Formulation Science & Application Guide",
    subtitle: "Natural Pine Chemistry, Neutral pH & Dilution SOP",
    previewSrc: "/catalogue/previews/page_2.png",
    description: "Detailed breakdown of neutral pH 7.0 stability on Italian marble and granite, 4 core USPs, and 3-step dilution methodology."
  },
  {
    pageNumber: 3,
    title: "Retail Consumer Range",
    subtitle: "200ml, 500ml & 1L Packs with Full Descriptions",
    previewSrc: "/catalogue/previews/page_3.png",
    description: "Complete showcase for 200ml Trial, 500ml Family, and 1L Flagship with 4-5 line descriptions, specs, and MRPs."
  },
  {
    pageNumber: 4,
    title: "Institutional 5L & Master Logistics",
    subtitle: "5 Litre Jerry Can, Freight Specifications & Plant Desk",
    previewSrc: "/catalogue/previews/page_4.png",
    description: "5L commercial jerry can for high-footfall facilities, full Master Carton freight logistics table, and Mallapur Hyderabad headquarters."
  }
];

export default function CataloguePage() {
  const [selectedPageIndex, setSelectedPageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPageIndex(null);
  };

  const nextLightboxPage = () => {
    if (selectedPageIndex !== null) {
      setSelectedPageIndex((selectedPageIndex + 1) % CATALOGUE_PAGES.length);
    }
  };

  const prevLightboxPage = () => {
    if (selectedPageIndex !== null) {
      setSelectedPageIndex(
        (selectedPageIndex - 1 + CATALOGUE_PAGES.length) % CATALOGUE_PAGES.length
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7F6]">
      {/* 1. Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#03211F] via-[#063B38] to-[#084D47] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle Decorative Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="relative max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <FileText className="w-4 h-4 text-[#0FA942]" />
            <span>Official Commercial Publication • 2026 – 2027</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase max-w-4xl mx-auto leading-tight">
            Official <span className="text-[#34D399]">Product Catalogue</span> &amp; Technical Guide
          </h1>

          <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            Download or preview our complete 4-page visual lookbook &amp; commercial brochure. Features graphic infographics, product pedestals, master carton logistics, and wholesale trade terms.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/catalogue/birmal-product-catalogue-2026.pdf"
              download="BIRMAL-Floor-Cleaner-Official-Catalogue-2026.pdf"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0FA942] hover:bg-[#16A34A] text-white font-extrabold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD OFFICIAL PDF (13.6 MB)</span>
            </a>

            <Link
              href="/contact#dealership"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm tracking-wide transition-all backdrop-blur-sm"
            >
              <PhoneCall className="w-4 h-4 text-emerald-300" />
              <span>Wholesale &amp; Dealership Inquiry</span>
            </Link>
          </div>

          {/* Quick Stats Badges */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-xs text-emerald-300 font-bold uppercase">Format</div>
              <div className="text-base font-black text-white mt-0.5">Print Lookbook</div>
              <div className="text-[11px] text-teal-200">4 High-Resolution Pages</div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-xs text-emerald-300 font-bold uppercase">SKU Range</div>
              <div className="text-base font-black text-white mt-0.5">200ml to 5 Litres</div>
              <div className="text-[11px] text-teal-200">Retail &amp; Bulk Jerry Can</div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-xs text-emerald-300 font-bold uppercase">HSN Code</div>
              <div className="text-base font-black text-white mt-0.5">3402 90 99</div>
              <div className="text-[11px] text-teal-200">GST Rate: 18%</div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-xs text-emerald-300 font-bold uppercase">Manufacturer</div>
              <div className="text-base font-black text-white mt-0.5">Birrumalae Pharma</div>
              <div className="text-[11px] text-teal-200">Mallapur, Hyderabad</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Catalogue Page Previews Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 pb-4 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0FA942]">
              <Eye className="w-4 h-4" />
              <span>Full Document Visual Inspection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#063B38] mt-1">
              Browse Lookbook Pages (1 – 4)
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Click any page to expand into high-resolution full-screen viewing mode.
            </p>
          </div>

          <a
            href="/catalogue/birmal-product-catalogue-2026.pdf"
            download="BIRMAL-Floor-Cleaner-Official-Catalogue-2026.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#063B38] hover:bg-[#0FA942] text-white text-xs font-bold tracking-wider transition-colors"
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
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
                  className="object-contain object-top group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#063B38]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white text-[#063B38] text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5 text-[#0FA942]" />
                    <span>View High-Res Page</span>
                  </div>
                </div>

                {/* Page Number Pill */}
                <div className="absolute top-3 left-3 bg-[#063B38] text-white text-[11px] font-black px-2.5 py-1 rounded-md shadow-md">
                  PAGE 0{page.pageNumber}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-[#063B38] group-hover:text-[#0FA942] transition-colors">
                    {page.title}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-700">
                    {page.subtitle}
                  </div>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                    {page.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => openLightbox(index)}
                    className="text-xs font-bold text-[#063B38] hover:text-[#0FA942] flex items-center gap-1"
                  >
                    <span>Click to Zoom</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <span className="text-[11px] text-gray-600">A4 • 300 DPI</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Master Packaging & Logistics Summary Table */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div className="max-w-3xl mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0FA942]">
              <Layers className="w-4 h-4" />
              <span>Standard Distribution Logistics Data</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#063B38] mt-1">
              Master Carton &amp; Freight Specifications
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Standardized outer shipper boxes for carrying and forwarding agents (C&amp;F), super stockists, and freight dispatch.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#063B38] text-white">
                  <th className="py-3 px-4 font-bold rounded-l-lg">Product SKU</th>
                  <th className="py-3 px-4 font-bold">Pack Type</th>
                  <th className="py-3 px-4 font-bold">MRP (₹)</th>
                  <th className="py-3 px-4 font-bold">Units / Master Box</th>
                  <th className="py-3 px-4 font-bold">Gross Wt.</th>
                  <th className="py-3 px-4 font-bold">Dimensions (L×W×H)</th>
                  <th className="py-3 px-4 font-bold">HSN Code</th>
                  <th className="py-3 px-4 font-bold rounded-r-lg">GST</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-900">BIRMAL 200ml</td>
                  <td className="py-3 px-4 text-gray-600">Induction PET Bottle</td>
                  <td className="py-3 px-4 font-bold text-[#0FA942]">₹75.00</td>
                  <td className="py-3 px-4 font-semibold text-gray-900">48 Units</td>
                  <td className="py-3 px-4 text-gray-600">11.20 kg</td>
                  <td className="py-3 px-4 text-gray-600">340 × 260 × 175 mm</td>
                  <td className="py-3 px-4 font-mono text-xs">3402 90 99</td>
                  <td className="py-3 px-4 font-bold text-gray-700">18%</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors bg-emerald-50/30">
                  <td className="py-3 px-4 font-bold text-gray-900">BIRMAL 500ml</td>
                  <td className="py-3 px-4 text-gray-600">Grip PET Bottle</td>
                  <td className="py-3 px-4 font-bold text-[#0FA942]">₹175.00</td>
                  <td className="py-3 px-4 font-semibold text-gray-900">24 Units</td>
                  <td className="py-3 px-4 text-gray-600">13.50 kg</td>
                  <td className="py-3 px-4 text-gray-600">380 × 270 × 225 mm</td>
                  <td className="py-3 px-4 font-mono text-xs">3402 90 99</td>
                  <td className="py-3 px-4 font-bold text-gray-700">18%</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-900">BIRMAL 1 Litre</td>
                  <td className="py-3 px-4 text-gray-600">Heavy PET + Dosing Cap</td>
                  <td className="py-3 px-4 font-bold text-[#0FA942]">₹330.00</td>
                  <td className="py-3 px-4 font-semibold text-gray-900">12 Units</td>
                  <td className="py-3 px-4 text-gray-600">13.80 kg</td>
                  <td className="py-3 px-4 text-gray-600">360 × 275 × 285 mm</td>
                  <td className="py-3 px-4 font-mono text-xs">3402 90 99</td>
                  <td className="py-3 px-4 font-bold text-gray-700">18%</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-900">BIRMAL 5 Litres</td>
                  <td className="py-3 px-4 text-gray-600">HDPE Jerry Can</td>
                  <td className="py-3 px-4 font-bold text-[#0FA942]">₹1,450.00</td>
                  <td className="py-3 px-4 font-semibold text-gray-900">4 Cans</td>
                  <td className="py-3 px-4 text-gray-600">22.40 kg</td>
                  <td className="py-3 px-4 text-gray-600">390 × 310 × 330 mm</td>
                  <td className="py-3 px-4 font-mono text-xs">3402 90 99</td>
                  <td className="py-3 px-4 font-bold text-gray-700">18%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Full-Screen Lightbox Modal for Page Inspection */}
      {selectedPageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6">
          {/* Top Control Bar */}
          <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <span className="bg-[#0FA942] text-white text-xs font-black px-2.5 py-1 rounded">
                PAGE 0{CATALOGUE_PAGES[selectedPageIndex].pageNumber} / 06
              </span>
              <span className="text-sm font-bold truncate hidden sm:inline">
                {CATALOGUE_PAGES[selectedPageIndex].title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/catalogue/birmal-product-catalogue-2026.pdf"
                download="BIRMAL-Floor-Cleaner-Official-Catalogue-2026.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-xs font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF</span>
              </a>
              <button
                onClick={closeLightbox}
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Zoomed Image Container */}
          <div className="relative flex-1 flex items-center justify-center my-2 max-w-4xl mx-auto w-full">
            <button
              onClick={prevLightboxPage}
              className="absolute left-2 sm:-left-12 z-10 p-2.5 rounded-full bg-black/60 hover:bg-[#0FA942] text-white transition-colors"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full max-h-[82vh] aspect-[1/1.414]">
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
              className="absolute right-2 sm:-right-12 z-10 p-2.5 rounded-full bg-black/60 hover:bg-[#0FA942] text-white transition-colors"
              aria-label="Next Page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnails Navigation */}
          <div className="flex items-center justify-center gap-2 max-w-xl mx-auto overflow-x-auto py-1">
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
