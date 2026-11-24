import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { BRAND_CONFIG } from "@/config/brand";

export function AboutPreview() {
  const points = [
    "Proven 99.9% Germ Kill Formula",
    "Refreshing Natural Pine Aroma",
    "Safe For Kids, Pets & Daily Floor Use",
    "Effective On Vitrified Tiles, Marble, Granite & More",
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols): Overlapping 2-photo collage with green frame & badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Photo 1: Balcony Cleaning (Back Layer) */}
              <div className="relative w-4/5 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/images/lifestyle/about-balcony.webp"
                  alt="Spotless clean balcony with BIRMAL floor cleaner"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Photo 2: Indoor Sparkling Living Room (Front Layer, Overlapping) */}
              <div className="absolute -bottom-10 right-0 w-3/4 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0FA942] z-10">
                <Image
                  src="/images/lifestyle/about-indoor.webp"
                  alt="Sparkling clean marble living room floor with BIRMAL"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Circular Green Highlight Badge (Matching Reference "25+ Years Of Expertise") */}
              <div className="absolute -bottom-6 left-6 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0FA942] text-white flex flex-col items-center justify-center text-center p-2 shadow-xl border-4 border-white animate-bounce-slow">
                <span className="text-xl sm:text-2xl font-black leading-none">2X</span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-0.5">
                  Power
                </span>
                <span className="text-[9px] text-emerald-100 font-medium">Concentrate</span>
              </div>

              {/* Floating green decorative hairline bar */}
              <div className="absolute -top-4 right-12 w-20 h-1.5 bg-[#0FA942] rounded-full hidden sm:block" />
            </div>
          </div>

          {/* Right Column (6 cols): Brand Story & Checklist */}
          <div className="lg:col-span-6 space-y-6 pt-8 lg:pt-0">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0FA942] flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#0FA942]" />
                ABOUT {BRAND_CONFIG.name}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 tracking-tight">
                India&apos;s Trusted{" "}
                <span className="text-[#0FA942]">Home Cleaning Brand</span>
              </h2>
            </div>

            <p className="text-base text-gray-600 leading-relaxed font-normal">
              Formulated by <strong className="text-gray-900">{BRAND_CONFIG.companyLegalName}</strong>, BIRMAL Concentrated Floor Cleaner was developed to deliver pharmaceutical-grade hygiene into Indian households. Our advanced pine-active formulation removes stubborn dirt, grease, and unpleasant odors from all surfaces, keeping your spaces sparkling, safe, and pine fresh.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-gray-900">
                Why Choose BIRMAL
              </h3>
              <ul className="space-y-2.5">
                {points.map((pt, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#0FA942] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="font-medium">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#0FA942] text-white font-bold text-xs tracking-wider uppercase hover:bg-emerald-600 transition-all duration-300 shadow-md hover:translate-x-1"
              >
                <span>KNOW MORE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Green Hairline Divider Transitioning into Dark Teal Section */}
      <div className="w-full h-3 bg-diagonal-stripes mt-16 sm:mt-24 opacity-80" />
    </section>
  );
}
