import Image from "next/image";
import { BRAND_CONFIG } from "@/config/brand";

export function OurReach() {
  return (
    <section className="relative bg-[#063B38] text-white py-20 sm:py-24 overflow-hidden border-t border-teal-900/60">
      {/* Dotted World / India Map Texture Overlay */}
      <div className="absolute inset-0 bg-dots-pattern-white opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (5 cols): Heading + Stats + Curved Arrow */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0FA942]">
                — OUR REACH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 tracking-tight leading-tight">
                Serving{" "}
                <span className="text-[#0FA942]">Households</span> Across India
              </h2>
            </div>

            <p className="text-sm sm:text-base text-teal-100/80 leading-relaxed font-normal">
              From local convenience stores to modern supermarkets and nationwide online platforms, BIRMAL ensures dependable availability for every home and commercial facility.
            </p>

            {/* Overlapping User Avatars & Happy Customer Stat */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex -space-x-2.5 overflow-hidden">
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0FA942] bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
                  MB
                </div>
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0FA942] bg-teal-600 text-white font-bold text-xs flex items-center justify-center">
                  PS
                </div>
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0FA942] bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                  SJ
                </div>
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0FA942] bg-[#0FA942] text-white font-black text-xs flex items-center justify-center">
                  +
                </div>
              </div>
              <div className="text-left">
                <div className="text-xl font-black text-white">50,000+</div>
                <div className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                  Happy Customers
                </div>
              </div>
            </div>

            {/* Crisp Curved White Hand-Drawn Arrow Pointing to the Right (Hidden on mobile) */}
            <div className="hidden lg:flex justify-end pr-8 pt-4">
              <svg
                width="90"
                height="60"
                viewBox="0 0 90 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white/70"
              >
                <path
                  d="M10 15 C 35 5, 60 15, 75 42"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M62 43 L 78 45 L 75 30"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Right Column (7 cols): Clean Grid of Partner/Channel Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {BRAND_CONFIG.retailPartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group min-h-[95px]"
                >
                  <div className="relative w-full h-11 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={140}
                      height={44}
                      className="object-contain max-h-10 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 mt-2 block tracking-tight">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
