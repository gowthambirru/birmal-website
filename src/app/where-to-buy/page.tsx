import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  ExternalLink,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: `Where to Buy | ${BRAND_CONFIG.name} Floor Cleaner`,
  description:
    "Find BIRMAL Concentrated Floor Cleaner online on Amazon, Flipkart, or at major supermarkets and cash & carry distributors across India.",
};

export default function WhereToBuyPage() {
  return (
    <div className="w-full bg-white pb-24">
      <PageHeroBanner
        eyebrow="BUY ONLINE & IN STORES"
        title="Where To Buy BIRMAL"
        description="Order BIRMAL online for doorstep delivery, pick up packs at nearby supermarkets, or stock up for your retail shop."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
        {/* 1. ONLINE PLATFORMS */}
        <ScrollReveal className="space-y-8">
          <div className="reveal-item text-center max-w-xl mx-auto space-y-2">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100/80 text-[#0D8F38] text-[11px] font-extrabold uppercase tracking-[0.14em]">
              HOME DELIVERY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#063B38] tracking-[-0.02em]">
              Order Online
            </h2>
            <p className="text-sm text-gray-600">
              Available in 200 ml (₹70), 500 ml (₹170), 1 Litre (₹330), and 5 Litres (₹1,450).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Amazon Card */}
            <div className="reveal-item bg-white rounded-3xl p-8 border border-emerald-950/10 hover:border-amber-400 shadow-card hover:shadow-card-hover transition-[box-shadow,border-color] duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="h-14 flex items-center">
                  <Image
                    src="/images/partners/amazon.svg"
                    alt="Amazon India"
                    width={150}
                    height={46}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">Amazon India</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Quick Prime delivery across India on single bottles and multi-pack household bundles.
                </p>
              </div>

              <a
                href={BRAND_CONFIG.marketplace.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#111827] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-amber-500 hover:text-black shadow-md"
              >
                <span>BUY ON AMAZON</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Flipkart Card */}
            <div className="reveal-item bg-white rounded-3xl p-8 border border-emerald-950/10 hover:border-blue-500 shadow-card hover:shadow-card-hover transition-[box-shadow,border-color] duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="h-14 flex items-center">
                  <Image
                    src="/images/partners/flipkart.svg"
                    alt="Flipkart"
                    width={150}
                    height={46}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">Flipkart</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Order through Flipkart Grocery with doorstep shipping across major towns and metro cities.
                </p>
              </div>

              <a
                href={BRAND_CONFIG.marketplace.flipkartUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2874F0] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-blue-700 shadow-md"
              >
                <span>BUY ON FLIPKART</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Direct WhatsApp Order Card */}
            <div className="reveal-item bg-gradient-to-br from-[#F0FAF4] to-[#E5F6EC] rounded-3xl p-8 border border-[#0FA942]/35 shadow-card hover:shadow-card-hover transition-[box-shadow,border-color] duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0FA942] text-white flex items-center justify-center shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">
                  Direct WhatsApp Order
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Message our Hyderabad dispatch desk directly for quick home delivery, local COD in Telangana, or 5L bulk cans.
                </p>
              </div>

              <a
                href={BRAND_CONFIG.marketplace.whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0FA942] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-[#0D8F38] shadow-pill"
              >
                <span>CHAT &amp; ORDER ON WHATSAPP</span>
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. RETAIL & WHOLESALE PARTNERS DIRECTORY */}
        <ScrollReveal className="bg-[#F5F9F7] rounded-3xl p-8 sm:p-12 border border-emerald-950/[0.08]">
          <div className="reveal-item text-center max-w-xl mx-auto space-y-2 mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100/80 text-[#0D8F38] text-[11px] font-extrabold uppercase tracking-[0.14em]">
              SUPERMARKETS &amp; CASH &amp; CARRY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#063B38] tracking-[-0.02em]">
              Retail Supermarkets &amp; Wholesale Hubs
            </h2>
            <p className="text-sm text-gray-600">
              Expanding across grocery chains and B2B cash-and-carry outlets.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {BRAND_CONFIG.retailPartners.map((p, idx) => (
              <div
                key={idx}
                className="reveal-item bg-white rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-card hover:shadow-card-hover transition-[box-shadow,border-color] duration-300 border border-emerald-950/[0.06] group"
              >
                <div className="relative w-full h-12 flex items-center justify-center">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={130}
                    height={40}
                    className="object-contain max-h-10 group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-xs font-extrabold text-gray-800 mt-3 block">
                  {p.name}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D8F38] bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
                  {p.category}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 3. DEALERSHIP & BULK INQUIRY BANNER */}
        <ScrollReveal>
          <section className="reveal-item bg-gradient-to-br from-[#032422] via-[#063B38] to-[#084B46] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-editorial border border-emerald-400/15">
            <div className="absolute inset-0 bg-architectural-grid opacity-60 pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#22C55E]">
                  BUSINESS OPPORTUNITY
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-[-0.02em]">
                  Stock BIRMAL at Your Store or Distribute in Your Area
                </h2>
                <p className="text-sm sm:text-base text-teal-100/85 leading-relaxed font-normal">
                  Retailers get a flat <strong className="text-white">20% margin on MRP</strong> (GST-inclusive landing rates: 200 ml ₹56, 500 ml ₹136, 1 Litre ₹264 — w.e.f. 09-Nov-2026). Reach out for district distributorship and supermarket supply across South &amp; West India.
                </p>
                <Link
                  href="/catalogue#retailer-prices"
                  className="inline-block text-xs font-extrabold text-[#22C55E] hover:underline pt-1"
                >
                  View Full Retailer Price List &amp; GST Breakdown →
                </Link>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  href="/contact#dealership"
                  className="btn-interactive w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0FA942] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#14BA4B] shadow-pill group"
                >
                  <span>DEALERSHIP INQUIRY</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <a
                  href={`tel:${BRAND_CONFIG.contacts.primaryPhone}`}
                  className="btn-interactive w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.08] border border-white/25 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/[0.16]"
                >
                  <Phone className="w-4 h-4 text-[#22C55E]" />
                  <span>CALL SALES DESK</span>
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
