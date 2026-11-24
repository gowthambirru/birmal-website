import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";
import { WaveDivider } from "@/components/WaveDivider";
import {
  ShoppingCart,
  ExternalLink,
  MessageCircle,
  Truck,
  Building2,
  Phone,
  ArrowRight,
  Store,
} from "lucide-react";

export const metadata = {
  title: `Where to Buy | ${BRAND_CONFIG.name} Floor Cleaner`,
  description:
    "Find BIRMAL Concentrated Floor Cleaner online on Amazon, Flipkart, or at major supermarkets and cash & carry distributors across India.",
};

export default function WhereToBuyPage() {
  return (
    <div className="w-full bg-white pb-24">
      {/* Hero Header */}
      <section className="relative bg-[#063B38] text-white pt-14 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 max-w-3xl">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0FA942]">
            PURCHASE &amp; DISTRIBUTION CHANNELS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Where To Buy BIRMAL
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed font-normal">
            Order authentic BIRMAL products online with doorstep delivery, or pick them up at leading supermarket shelves and cash &amp; carry stores across India.
          </p>
        </div>
        <WaveDivider fillColor="#FFFFFF" bgColor="transparent" className="mt-10" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
        {/* 1. ONLINE PLATFORMS */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#0FA942]">
              FAST HOME DELIVERY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Order Online
            </h2>
            <p className="text-sm text-gray-600">
              Direct delivery to your doorstep across all serviceable Indian pin codes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Amazon Card */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-amber-400 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6">
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
                <h3 className="text-xl font-bold text-gray-900">Amazon India</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Fast prime shipping, verified customer ratings, and flexible bundle pack options (1L + 500ml combo).
                </p>
              </div>

              <a
                href={BRAND_CONFIG.marketplace.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#111827] text-white text-xs font-bold uppercase tracking-wider hover:bg-amber-500 hover:text-black transition-colors shadow-md"
              >
                <span>BUY ON AMAZON</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Flipkart Card */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6">
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
                <h3 className="text-xl font-bold text-gray-900">Flipkart</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Order with grocery savings, supercoin cashback, and prompt regional fulfillment across metro cities.
                </p>
              </div>

              <a
                href={BRAND_CONFIG.marketplace.flipkartUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2874F0] text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-md"
              >
                <span>BUY ON FLIPKART</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Direct WhatsApp Order Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border-2 border-emerald-300 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0FA942] text-white flex items-center justify-center shadow-md">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Direct WhatsApp Order
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Chat directly with our Hyderabad customer care team for instant dispatch, local COD in Telangana, or custom pack combinations.
                </p>
              </div>

              <a
                href={BRAND_CONFIG.marketplace.whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0FA942] text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 transition-colors shadow-pill"
              >
                <span>CHAT &amp; ORDER ON WHATSAPP</span>
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 2. RETAIL & WHOLESALE PARTNERS DIRECTORY */}
        <section className="bg-[#F4F7F6] rounded-3xl p-8 sm:p-12 border border-gray-200">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#0FA942]">
              PHYSICAL STORES &amp; CASH &amp; CARRY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Retail Supermarkets &amp; Wholesale Hubs
            </h2>
            <p className="text-sm text-gray-600">
              BIRMAL is steadily rolling out to leading grocery networks and institutional distributors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {BRAND_CONFIG.retailPartners.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="relative w-full h-12 flex items-center justify-center">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={130}
                    height={40}
                    className="object-contain max-h-10"
                  />
                </div>
                <span className="text-xs font-bold text-gray-800 mt-3 block">
                  {p.name}
                </span>
                <span className="text-[11px] text-gray-500 capitalize">
                  {p.category}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. DEALERSHIP & BULK INQUIRY BANNER */}
        <section className="bg-[#063B38] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#0FA942]">
                BUSINESS OPPORTUNITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Become a BIRMAL Distributor or Stockist
              </h2>
              <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed font-normal">
                We are expanding our retail footprint across Telangana, Andhra Pradesh, Karnataka, Maharashtra, and pan-India. Partner with Birrumalae Pharma for high-margin, fast-moving floor hygiene products with comprehensive promotional backing.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/contact#dealership"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0FA942] text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-600 transition-colors shadow-pill"
              >
                <span>DEALERSHIP INQUIRY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${BRAND_CONFIG.contacts.primaryPhone}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-teal-900/80 border border-teal-500/50 text-white font-bold text-xs uppercase tracking-wider hover:bg-teal-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0FA942]" />
                <span>CALL SALES DESK</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
