"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BRAND_CONFIG } from "@/config/brand";
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Download } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pdfUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/catalogue/birmal-product-catalogue-2026.pdf`;

  const navLinks = [
    { href: "/products", label: "BIRMAL FLOOR CLEANER" },
    { href: "/about", label: "ABOUT US" },
    { href: "/faq", label: "FAQ" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/where-to-buy", label: "WHERE TO BUY" },
    { href: "/contact", label: "CONTACT US" },
  ];

  return (
    <header className="w-full z-40 sticky top-0 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#102424] text-gray-200 text-xs py-2 px-4 border-b border-teal-900/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a
              href={`mailto:${BRAND_CONFIG.contacts.email}`}
              className="flex items-center gap-1.5 hover:text-[#0FA942] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0FA942]" />
              <span>{BRAND_CONFIG.contacts.email}</span>
            </a>
            <span className="text-teal-700 hidden sm:inline">|</span>
            <a
              href={`tel:${BRAND_CONFIG.contacts.primaryPhone}`}
              className="flex items-center gap-1.5 hover:text-[#0FA942] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0FA942]" />
              <span>{BRAND_CONFIG.contacts.primaryPhone}</span>
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-gray-400 text-[11px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#0FA942]" />
            <span>Mallapur, Hyderabad, Telangana</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-white transition-all duration-300 ${
          isScrolled
            ? "shadow-md py-3 border-b border-gray-100"
            : "py-4 border-b border-gray-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Lockup */}
          <Link href="/" className="flex items-center group py-1">
            <div className="relative w-40 sm:w-48 h-12 sm:h-14">
              <Image
                src="/images/birmal-logo.png"
                alt="BIRMAL Floor Cleaner"
                fill
                priority
                className="object-contain object-left group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/products" && pathname.startsWith("/products"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-bold tracking-wider transition-colors duration-200 py-1 relative ${
                    isActive
                      ? "text-[#0FA942]"
                      : "text-gray-800 hover:text-[#0FA942]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0FA942] rounded-full" />
                  )}
                </Link>
              );
            })}

            <a
              href={pdfUrl}
              download="BIRMAL-Floor-Cleaner-Official-Catalogue-2026.pdf"
              className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-50 text-[#0FA942] border border-[#0FA942]/40 text-xs font-bold tracking-wider hover:bg-[#0FA942] hover:text-white transition-all duration-200 shadow-sm"
              title="Download Product Catalogue PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CATALOGUE (PDF)</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#063B38] text-white text-xs font-bold tracking-wider hover:bg-[#0FA942] transition-colors duration-200 shadow-sm"
            >
              <span>INQUIRE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-gray-700 hover:text-[#0FA942] hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-bold tracking-wider transition-colors ${
                    isActive
                      ? "bg-emerald-50 text-[#0FA942]"
                      : "text-gray-800 hover:bg-gray-50 hover:text-[#0FA942]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="/catalogue/birmal-product-catalogue-2026.pdf"
                download="BIRMAL-Floor-Cleaner-Official-Catalogue-2026.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-emerald-50 text-[#0FA942] border border-[#0FA942]/40 text-xs font-bold tracking-wider hover:bg-[#0FA942] hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD CATALOGUE (PDF)</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#063B38] text-white text-xs font-bold tracking-wider hover:bg-[#0FA942] transition-colors"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
