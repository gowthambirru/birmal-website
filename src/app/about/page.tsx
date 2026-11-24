import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";
import { WaveDivider } from "@/components/WaveDivider";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ShieldCheck, Sparkles, Award, HeartHandshake, Leaf, ArrowRight } from "lucide-react";

export const metadata = {
  title: `About Us | ${BRAND_CONFIG.name} by Birrumalae Pharma`,
  description:
    "Learn about the history, formulation standards, and pharmaceutical-grade home hygiene principles behind BIRMAL Concentrated Floor Cleaner.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Pharmaceutical Standards",
      desc: "Engineered under the rigorous chemical quality controls of Birrumalae Pharma Private Limited to deliver reliable 99.9% germ protection.",
    },
    {
      icon: Leaf,
      title: "Natural Pine Extracts",
      desc: "Infused with genuine pine essential oils rather than harsh artificial masking agents, leaving homes invigoratingly crisp for hours.",
    },
    {
      icon: Sparkles,
      title: "Surface Protection",
      desc: "pH-neutral and non-corrosive. Preserves the natural sheen of Italian marble, granite, vitrified tile, and hardwood without etching.",
    },
    {
      icon: HeartHandshake,
      title: "Unmatched Economy",
      desc: "Our concentrated formula delivers maximum cleaning value: 1 Litre produces up to 100+ litres of solution, drastically cutting packaging waste.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="relative bg-[#063B38] text-white pt-14 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 max-w-3xl">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0FA942]">
            OUR HERITAGE &amp; MISSION
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            About BIRMAL &amp; Birrumalae Pharma
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed font-normal">
            Delivering powerful, concentrated, and safe home hygiene solutions across India with pharmaceutical precision.
          </p>
        </div>
        <WaveDivider fillColor="#FFFFFF" bgColor="transparent" className="mt-8" />
      </section>

      {/* Brand Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0FA942]">
              <Image
                src="/images/lifestyle/about-indoor.webp"
                alt="BIRMAL Sparkling Clean Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 w-3/5 h-48 sm:h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <Image
                src="/images/lifestyle/about-balcony.webp"
                alt="Balcony Cleaning"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Story */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0FA942]">
              — THE BIRMAL PROMISE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Science-Backed Cleaning For Modern Homes
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              BIRMAL was established under <strong>{BRAND_CONFIG.companyLegalName}</strong> (Hyderabad, Telangana) to address a significant dilemma in household hygiene: ordinary surface phenyls are mostly water, contain harsh synthetic scents, and can damage sensitive stone floors.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Our chemists created an active pine concentrate that requires just two caps to clean an entire residence. It lifts grease, kills 99.9% of bacteria, repels flies naturally, and air-dries into a spotless mirror finish without toxic residues.
            </p>

            <div className="p-4 rounded-2xl bg-emerald-50 border-l-4 border-[#0FA942] space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0FA942]">
                Official Corporate Identity
              </span>
              <p className="text-xs text-gray-700">
                Registered under CIN: <strong>{BRAND_CONFIG.cin}</strong> | PAN: <strong>{BRAND_CONFIG.pan}</strong>
              </p>
              <p className="text-xs text-gray-600">
                Manufacturing Unit: {BRAND_CONFIG.contacts.address.full}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars Grid */}
      <section className="bg-[#F4F7F6] py-20 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0FA942]">
              OUR PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Why We Formulate Differently
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-3 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0FA942] flex items-center justify-center">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{pil.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {pil.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded Testimonials */}
      <TestimonialsSection />
    </div>
  );
}
