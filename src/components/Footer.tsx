import Link from "next/link";
import Image from "next/image";
import { BRAND_CONFIG } from "@/config/brand";
import { ShieldCheck, Sparkles, Smile, Phone, Mail, MapPin, ExternalLink, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-[#063B38] text-white">
      {/* 1. Top Vibrant Emerald Green Banner Strip with 3 Circular Badges */}
      <div className="w-full bg-[#0FA942] py-8 px-4 sm:px-6 lg:px-8 shadow-inner relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Badge 1 */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-wide">
                100%
              </div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-emerald-100">
                Quality Assurance
              </div>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center gap-4 justify-center">
            <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-wide">
                2X POWER
              </div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-emerald-100">
                Concentrated Formula
              </div>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center shrink-0 shadow-sm">
              <Smile className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-wide">
                100%
              </div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-emerald-100">
                Customer Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Dark Teal Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block group py-1">
              <div className="relative w-44 sm:w-52 h-16 sm:h-20 bg-white rounded-2xl p-2 shadow-xl border-2 border-emerald-400/30 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/images/birmal-logo.webp"
                  alt="BIRMAL Floor Cleaner"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </Link>
            <p className="text-sm text-teal-100/90 leading-relaxed max-w-sm pt-2">
              <strong className="text-white block font-bold text-base mb-1">
                {BRAND_CONFIG.companyLegalName}
              </strong>
              Manufacturers &amp; Distributors of BIRMAL Brand Home Cleaning Products. Safe, concentrated cleaning solutions for every corner of your home.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3 text-sm text-emerald-200">
                <Phone className="w-4 h-4 text-[#0FA942]" />
                <span className="font-semibold">{BRAND_CONFIG.contacts.primaryPhone}</span>
                <span className="text-teal-400">/</span>
                <span>{BRAND_CONFIG.contacts.secondaryPhone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-emerald-200">
                <Mail className="w-4 h-4 text-[#0FA942]" />
                <a
                  href={`mailto:${BRAND_CONFIG.contacts.email}`}
                  className="hover:underline"
                >
                  {BRAND_CONFIG.contacts.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Useful Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-base font-bold uppercase tracking-wider text-white border-b border-teal-700/50 pb-2 inline-block">
              Useful Links
            </h3>
            <ul className="space-y-2.5 text-sm text-teal-100/80">
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#0FA942] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#0FA942]">&gt;</span> Birmal Floor Cleaner
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#0FA942] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#0FA942]">&gt;</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#0FA942] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#0FA942]">&gt;</span> FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#0FA942] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#0FA942]">&gt;</span> Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/where-to-buy"
                  className="hover:text-[#0FA942] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#0FA942]">&gt;</span> Where To Buy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#0FA942] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#0FA942]">&gt;</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Manufacturing & Office Location (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-base font-bold uppercase tracking-wider text-white border-b border-teal-700/50 pb-2 inline-block">
              Corporate &amp; Factory Office
            </h3>
            <div className="space-y-3 text-sm text-teal-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0FA942] shrink-0 mt-1" />
                <p className="leading-relaxed">
                  <strong className="text-white block font-medium">
                    Corporate Office &amp; Unit:
                  </strong>
                  {BRAND_CONFIG.contacts.address.line1}, {BRAND_CONFIG.contacts.address.line2},{" "}
                  {BRAND_CONFIG.contacts.address.city}, {BRAND_CONFIG.contacts.address.state},{" "}
                  India - {BRAND_CONFIG.contacts.address.pincode}
                </p>
              </div>

              <div className="pt-2 text-xs border-t border-teal-800/60 space-y-1 text-teal-200/70">
                <p>
                  <strong className="text-teal-100">CIN:</strong> {BRAND_CONFIG.cin}
                </p>
                <p>
                  <strong className="text-teal-100">PAN:</strong> {BRAND_CONFIG.pan}
                </p>
                <p className="text-emerald-400 font-semibold pt-1">
                  Made in India • Quality • Trust • Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="relative z-10 border-t border-teal-900/80 bg-[#042624] py-4 px-4 text-xs text-teal-200/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_CONFIG.name} ({BRAND_CONFIG.companyLegalName}). All rights reserved.
          </p>
          <p className="text-teal-400/80">
            Strong Concentrated Cleaner — Pine Fresh Formula
          </p>
        </div>
      </div>
    </footer>
  );
}
