import Link from "next/link";
import Image from "next/image";
import { BubbleDecorations } from "@/components/BubbleDecorations";
import { WaveDivider } from "@/components/WaveDivider";
import { Sparkles, ArrowRight, ShieldCheck, Download } from "lucide-react";
import { BRAND_CONFIG } from "@/config/brand";

export function HomeHero() {
  const pdfUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/catalogue/birmal-product-catalogue-2026.pdf`;

  return (
    <section className="relative bg-[#063B38] text-white overflow-hidden pt-8 md:pt-14 pb-0">
      <BubbleDecorations />

      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 bg-dots-pattern-white pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left pt-4 lg:pt-0">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-[#0FA942]/60 text-emerald-300 text-xs sm:text-sm font-bold tracking-wider uppercase backdrop-blur-sm shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#0FA942]" />
              <span>100% SATISFACTION GUARANTEED</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Freshness In Every{" "}
              <span className="text-[#0FA942] relative inline-block">
                Clean
                {/* SVG Underline Highlight */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-[#0FA942]/80"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {BRAND_CONFIG.subheading}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 flex-wrap">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#0FA942] text-white font-bold text-sm tracking-wider uppercase hover:bg-emerald-600 transition-all duration-300 shadow-pill hover:scale-105 group"
              >
                <span>CONTACT US</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </Link>

              <a
                href={pdfUrl}
                download="BIRMAL-Floor-Cleaner-Official-Catalogue-2026.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm tracking-wider uppercase transition-colors"
              >
                <Download className="w-4 h-4 text-[#0FA942]" />
                <span>DOWNLOAD CATALOGUE</span>
              </a>

              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-teal-900/60 border border-teal-500/50 text-white font-bold text-sm tracking-wider uppercase hover:bg-teal-800/80 transition-colors"
              >
                <span>VIEW PACK SIZES</span>
              </Link>
            </div>

            {/* Quick Feature Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-teal-800/60 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl font-extrabold text-[#0FA942]">2X Power</div>
                <div className="text-[11px] sm:text-xs text-teal-200/80">Concentrate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl font-extrabold text-[#0FA942]">99.9%</div>
                <div className="text-[11px] sm:text-xs text-teal-200/80">Germ Kill</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl font-extrabold text-[#0FA942]">100%</div>
                <div className="text-[11px] sm:text-xs text-teal-200/80">Marble Safe</div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Model Cutout inside organic ring */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
            {/* Organic Brushstroke / Circular Ring (Matching Reference Hero) */}
            <div className="relative w-[320px] sm:w-[420px] lg:w-[480px] h-[360px] sm:h-[480px] lg:h-[540px] flex items-end justify-center">
              {/* Outer Glowing Decorative Ring */}
              <div className="absolute inset-x-4 top-8 bottom-4 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] border-4 border-white/40 shadow-[0_0_50px_rgba(15,169,66,0.3)] bg-gradient-to-b from-teal-800/30 to-emerald-900/40 backdrop-blur-[2px]" />

              {/* Second Hand-drawn Accent Ring */}
              <div className="absolute inset-x-8 top-12 bottom-8 rounded-[55%_45%_48%_52%/48%_52%_48%_52%] border-2 border-emerald-400/50 border-dashed" />

              {/* Model Cutout Image */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <Image
                  src="/images/hero-model-birmal.png"
                  alt="BIRMAL Floor Cleaner Brand Spokesperson"
                  width={460}
                  height={560}
                  priority
                  className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.45)] max-h-[380px] sm:max-h-[500px] lg:max-h-[550px] w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Wave Border Transitioning to Next Section */}
      <WaveDivider fillColor="#FFFFFF" bgColor="transparent" className="mt-8" />
    </section>
  );
}
