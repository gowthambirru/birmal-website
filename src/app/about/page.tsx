import Image from "next/image";
import { BRAND_CONFIG } from "@/config/brand";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ShieldCheck, Sparkles, HeartHandshake, Leaf } from "lucide-react";

export const metadata = {
  title: `About Us | ${BRAND_CONFIG.name} by Birrumalae Pharma`,
  description:
    "Learn about the history, formulation standards, and pharmaceutical-grade home hygiene principles behind BIRMAL Concentrated Floor Cleaner.",
};

export default function AboutPage() {
  const pillars = [
    {
      num: "01",
      icon: ShieldCheck,
      title: "Consistent Batch Quality",
      desc: "Made in Hyderabad under Birrumalae Pharma's formulation controls for dependable 99.9% germ protection every wash.",
    },
    {
      num: "02",
      icon: Leaf,
      title: "Real Pine Oil Freshness",
      desc: "Distilled natural pine oil cleans odours instead of masking them with sharp synthetic perfume.",
    },
    {
      num: "03",
      icon: Sparkles,
      title: "Gentle on Stone Floors",
      desc: "Balanced pH 7.0 formula leaves Italian marble, granite, and vitrified tiles glossy with zero etching.",
    },
    {
      num: "04",
      icon: HeartHandshake,
      title: "Concentrated Value",
      desc: "1 Litre makes 100+ litres of cleaning solution—more washes per bottle and less plastic thrown away.",
    },
  ];

  return (
    <div className="w-full bg-white">
      <PageHeroBanner
        eyebrow="ABOUT US"
        title="About BIRMAL & Birrumalae Pharma"
        description="Concentrated pine floor care manufactured in Hyderabad for everyday Indian homes and businesses."
      />

      {/* Brand Story Section */}
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photos */}
          <div className="reveal-item lg:col-span-6 relative pb-8 sm:pb-10">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-editorial ring-1 ring-emerald-950/10 bg-white p-2">
              <div className="relative w-full h-full rounded-[1.15rem] overflow-hidden">
                <Image
                  src="/images/lifestyle/about-indoor.webp"
                  alt="BIRMAL Sparkling Clean Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-6 sm:-right-4 w-3/5 h-44 sm:h-52 rounded-2xl overflow-hidden shadow-editorial ring-1 ring-emerald-950/10 bg-white p-1.5 hidden sm:block">
              <div className="relative w-full h-full rounded-[0.9rem] overflow-hidden">
                <Image
                  src="/images/lifestyle/about-balcony.webp"
                  alt="Balcony Cleaning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="reveal-item">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0FA942] mb-2">
                <span className="w-7 h-[2px] bg-[#0FA942] rounded-full" />
                <span>OUR STORY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#063B38] tracking-[-0.02em] leading-[1.15]">
                Less Water. Better Clean. Honest Value.
              </h2>
            </div>

            <p className="reveal-item text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              We started BIRMAL under <strong className="text-gray-900">{BRAND_CONFIG.companyLegalName}</strong> in Hyderabad to fix two common complaints with ordinary phenyl: either it is mostly water that finishes in a week, or harsh acid additives slowly dull expensive marble floors.
            </p>
            <p className="reveal-item text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Instead, we packed natural pine oil and balanced surfactants into a dense concentrate. Two caps in a bucket handle kitchen oil, dust, and bacteria while drying fast and clear.
            </p>

            <div className="reveal-item p-5 rounded-2xl bg-[#F5F9F7] border border-emerald-950/10 border-l-4 border-l-[#0FA942] space-y-1.5 shadow-sm">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0FA942] block">
                Official Corporate Identity
              </span>
              <p className="text-xs text-gray-700">
                Registered under CIN: <strong className="text-gray-900">{BRAND_CONFIG.cin}</strong> | PAN: <strong className="text-gray-900">{BRAND_CONFIG.pan}</strong>
              </p>
              <p className="text-xs text-gray-600">
                Manufacturing Unit: {BRAND_CONFIG.contacts.address.full}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 4 Core Pillars Grid */}
      <ScrollReveal className="bg-[#F5F9F7] py-20 border-t border-b border-emerald-950/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal-item text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100/80 text-[#0D8F38] text-[11px] font-extrabold uppercase tracking-[0.14em]">
              OUR PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#063B38] tracking-[-0.02em]">
              Why We Formulate Differently
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="reveal-item group relative bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover border border-emerald-950/[0.08] hover:border-[#0FA942]/35 space-y-3 transition-[box-shadow,border-color] duration-300"
                >
                  <span className="absolute top-5 right-5 text-2xl font-black text-emerald-950/[0.05] tabular-nums">
                    {pil.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-500/20 text-[#0FA942] flex items-center justify-center group-hover:bg-[#0FA942] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900">{pil.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {pil.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      <TestimonialsSection />
    </div>
  );
}
