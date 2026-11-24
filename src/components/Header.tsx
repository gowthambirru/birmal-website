"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BRAND_CONFIG } from "@/config/brand";
import { gsap, useGSAP } from "@/lib/gsap";
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Download } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      if (!drawerRef.current) return;
      const drawer = drawerRef.current;

      if (mobileMenuOpen) {
        gsap.set(drawer, { display: "block" });
        gsap.fromTo(
          drawer,
          { autoAlpha: 0, y: -8 },
          { autoAlpha: 1, y: 0, duration: 0.28, ease: "power3.out", overwrite: true }
        );
        gsap.fromTo(
          drawer.querySelectorAll(".mobile-nav-item"),
          { autoAlpha: 0, x: -10 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.25,
            stagger: 0.035,
            ease: "power2.out",
            overwrite: true,
          }
        );
      } else {
        gsap.to(drawer, {
          autoAlpha: 0,
          y: -6,
          duration: 0.2,
          ease: "power2.in",
          overwrite: true,
          onComplete: () => {
            if (drawer) gsap.set(drawer, { display: "none" });
          },
        });
      }
    },
    { scope: headerRef, dependencies: [mobileMenuOpen] }
  );

  const pdfUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/catalogue/birmal-product-catalogue-2026.pdf`;

  const normalizePath = (p: string | null) => {
    if (!p) return "/";
    const stripped = p.replace(/\/+$/, "");
    return stripped === "" ? "/" : stripped;
  };

  const currentPath = normalizePath(pathname);

  const isLinkActive = (href: string) => {
    const target = normalizePath(href);
    return currentPath === target || (target !== "/" && currentPath.startsWith(`${target}/`));
  };

  const navLinks = [
    { href: "/products/", label: "BIRMAL FLOOR CLEANER" },
    { href: "/about/", label: "ABOUT US" },
    { href: "/faq/", label: "FAQ" },
    { href: "/gallery/", label: "GALLERY" },
    { href: "/where-to-buy/", label: "WHERE TO BUY" },
    { href: "/contact/", label: "CONTACT US" },
  ];

  return (
    <header ref={headerRef} className="w-full z-40 sticky top-0">
      {/* Top Utility Bar */}
      <div className="bg-[#091E1C] text-gray-300 text-[11px] sm:text-xs py-1.5 px-4 border-b border-teal-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-3.5 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <a
              href={`mailto:${BRAND_CONFIG.contacts.email}`}
              className="flex items-center gap-1.5 hover:text-[#22C55E] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0FA942]" />
              <span>{BRAND_CONFIG.contacts.email}</span>
            </a>
            <span className="text-teal-800 hidden sm:inline">|</span>
            <a
              href={`tel:${BRAND_CONFIG.contacts.primaryPhone}`}
              className="flex items-center gap-1.5 hover:text-[#22C55E] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0FA942]" />
              <span>{BRAND_CONFIG.contacts.primaryPhone}</span>
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-teal-200/70">
            <MapPin className="w-3.5 h-3.5 text-[#0FA942]" />
            <span>Mallapur, Hyderabad, Telangana</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_6px_28px_-8px_rgba(6,59,56,0.12)] py-2.5 border-b border-emerald-950/[0.07]"
            : "bg-white py-3.5 border-b border-gray-200/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo Lockup */}
          <Link href="/" className="flex items-center group py-0.5 shrink-0">
            <div className="relative w-36 sm:w-44 h-11 sm:h-14">
              <Image
                src="/images/birmal-logo.webp"
                alt="BIRMAL Floor Cleaner"
                fill
                priority
                className="object-contain object-left group-hover:scale-[1.03] transition-transform duration-200"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] xl:text-xs font-bold tracking-wider transition-colors duration-200 py-1.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-[#0FA942] after:transition-transform after:duration-300 after:ease-out ${
                    isActive
                      ? "text-[#0FA942] after:scale-x-100 after:origin-left"
                      : "text-gray-700 hover:text-[#0FA942] after:scale-x-0 hover:after:scale-x-100 after:origin-left"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="flex items-center gap-2.5 pl-1">
              <a
                href={pdfUrl}
                download="BIRMAL-Floor-Cleaner-Official-Catalogue-2026.pdf"
                className="btn-interactive inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-50/90 text-[#0D8F38] border border-[#0FA942]/35 text-[11px] font-extrabold tracking-wider hover:bg-[#0FA942] hover:text-white hover:border-[#0FA942] shadow-sm group"
                title="Download Product Catalogue PDF"
              >
                <Download className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
                <span>CATALOGUE (PDF)</span>
              </a>

              <Link
                href="/contact"
                className="btn-interactive inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#063B38] text-white text-[11px] font-extrabold tracking-wider hover:bg-[#0FA942] shadow-sm group"
              >
                <span>INQUIRE</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-xl text-gray-800 hover:text-[#0FA942] hover:bg-emerald-50/70 active:scale-95 transition-all"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer (GSAP animated) */}
        <div
          ref={drawerRef}
          style={{ display: "none" }}
          className="lg:hidden bg-white border-t border-gray-100 shadow-2xl px-4 py-4 space-y-2"
        >
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-extrabold tracking-wider transition-colors ${
                  isActive
                    ? "bg-emerald-50 text-[#0FA942]"
                    : "text-gray-800 hover:bg-gray-50 hover:text-[#0FA942]"
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0FA942]" />}
              </Link>
            );
          })}
          <div className="mobile-nav-item pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2.5">
            <a
              href={pdfUrl}
              download="BIRMAL-Floor-Cleaner-Official-Catalogue-2026.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-interactive w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-emerald-50 text-[#0D8F38] border border-[#0FA942]/35 text-xs font-extrabold tracking-wider hover:bg-[#0FA942] hover:text-white"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD CATALOGUE (PDF)</span>
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-interactive w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#063B38] text-white text-xs font-extrabold tracking-wider hover:bg-[#0FA942]"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
