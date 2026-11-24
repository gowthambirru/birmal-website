"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, useGSAP, MOTION_QUERIES, resolveMotionConfig } from "@/lib/gsap";
import { BRAND_CONFIG } from "@/config/brand";
import { ShieldCheck, Sparkles, Smile, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: MOTION_QUERIES.reduceMotion,
          all: "(min-width: 0px)",
        },
        (context) => {
          const motion = resolveMotionConfig(context.conditions);
          gsap.from(".footer-col", {
            y: motion.reduced ? 5 : 18,
            autoAlpha: 0,
            duration: motion.dur(0.5, 0.34),
            stagger: motion.reduced ? 0.05 : 0.08,
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: ".footer-main",
              start: "top 90%",
              once: true,
            },
          });
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className="w-full relative overflow-hidden bg-[#032422] text-white">
      {/* 1. Top Emerald Brand Assurance Strip */}
      <div className="w-full bg-gradient-to-r from-[#0D8F38] via-[#0FA942] to-[#0D8F38] py-7 px-4 sm:px-6 lg:px-8 relative z-10 border-b border-emerald-400/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:divide-x md:divide-white/20">
          {/* Badge 1 */}
          <div className="flex items-center gap-4 justify-center md:justify-start md:pr-6">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-white tracking-tight">
                100% Certified
              </div>
              <div className="text-[11px] uppercase font-bold tracking-widest text-emerald-100">
                Quality Assurance
              </div>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center gap-4 justify-center md:px-6">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-white tracking-tight">
                2X Power
              </div>
              <div className="text-[11px] uppercase font-bold tracking-widest text-emerald-100">
                Concentrated Formula
              </div>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center gap-4 justify-center md:justify-end md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center shrink-0">
              <Smile className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-white tracking-tight">
                100% Safe
              </div>
              <div className="text-[11px] uppercase font-bold tracking-widest text-emerald-100">
                Marble &amp; Family Safe
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Deep Botanical Footer */}
      <div className="footer-main relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="footer-col md:col-span-5 space-y-4">
            <Link href="/" className="inline-block group py-1">
              <div className="relative w-44 sm:w-48 h-16 bg-white rounded-2xl p-2 shadow-editorial ring-1 ring-white/20 group-hover:scale-[1.03] transition-transform duration-300">
                <Image
                  src="/images/birmal-logo.webp"
                  alt="BIRMAL Floor Cleaner"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
            </Link>
            <p className="text-sm text-teal-100/80 leading-relaxed max-w-sm pt-1">
              <strong className="text-white block font-extrabold text-sm mb-1 tracking-wide">
                {BRAND_CONFIG.companyLegalName}
              </strong>
              Manufacturers &amp; Distributors of BIRMAL Brand Home Cleaning Products. Safe, concentrated cleaning solutions for every corner of your home.
            </p>

            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-3 text-sm text-emerald-200">
                <Phone className="w-4 h-4 text-[#22C55E]" />
                <a
                  href={`tel:${BRAND_CONFIG.contacts.primaryPhone}`}
                  className="font-semibold hover:text-white transition-colors"
                >
                  {BRAND_CONFIG.contacts.primaryPhone}
                </a>
                <span className="text-teal-600">/</span>
                <a
                  href={`tel:${BRAND_CONFIG.contacts.secondaryPhone}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND_CONFIG.contacts.secondaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-emerald-200">
                <Mail className="w-4 h-4 text-[#22C55E]" />
                <a
                  href={`mailto:${BRAND_CONFIG.contacts.email}`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {BRAND_CONFIG.contacts.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Useful Links (3 cols) */}
          <div className="footer-col md:col-span-3 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-300 pb-2 border-b border-white/10">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-teal-100/80">
              {[
                { href: "/products", label: "Birmal Floor Cleaner" },
                { href: "/about", label: "About Us" },
                { href: "/faq", label: "FAQ" },
                { href: "/gallery", label: "Gallery" },
                { href: "/where-to-buy", label: "Where To Buy" },
                { href: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 hover:text-[#22C55E] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#0FA942] transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Manufacturing & Office Location (4 cols) */}
          <div className="footer-col md:col-span-4 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-300 pb-2 border-b border-white/10">
              Corporate &amp; Factory Office
            </h3>
            <div className="space-y-3 text-sm text-teal-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#22C55E] shrink-0 mt-1" />
                <p className="leading-relaxed">
                  <strong className="text-white block font-semibold">
                    Corporate Office &amp; Unit:
                  </strong>
                  {BRAND_CONFIG.contacts.address.line1}, {BRAND_CONFIG.contacts.address.line2},{" "}
                  {BRAND_CONFIG.contacts.address.city}, {BRAND_CONFIG.contacts.address.state},{" "}
                  India - {BRAND_CONFIG.contacts.address.pincode}
                </p>
              </div>

              <div className="pt-3 text-xs border-t border-white/10 space-y-1 text-teal-200/70">
                <p>
                  <strong className="text-teal-100">CIN:</strong> {BRAND_CONFIG.cin}
                </p>
                <p>
                  <strong className="text-teal-100">PAN:</strong> {BRAND_CONFIG.pan}
                </p>
                <p className="text-[#22C55E] font-bold pt-1">
                  Made in India • Quality • Trust • Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="relative z-10 border-t border-white/10 bg-[#021B19] py-4 px-4 text-xs text-teal-200/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_CONFIG.name} ({BRAND_CONFIG.companyLegalName}). All rights reserved.
          </p>
          <p className="text-teal-400/80 font-medium">
            Strong Concentrated Cleaner — Pine Fresh Formula
          </p>
        </div>
      </div>
    </footer>
  );
}
