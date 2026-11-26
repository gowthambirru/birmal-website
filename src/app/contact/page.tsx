"use client";

import { useState, useRef } from "react";
import { gsap, useGSAP, MOTION_QUERIES, prefersReducedMotion, resolveMotionConfig } from "@/lib/gsap";
import { BRAND_CONFIG } from "@/config/brand";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "Retail Purchase",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

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
          gsap.from(".contact-col", {
            y: motion.reduced ? 5 : 18,
            autoAlpha: 0,
            duration: motion.dur(0.55, 0.36),
            stagger: motion.reduced ? 0.06 : 0.1,
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: ".contact-grid",
              start: "top 86%",
              once: true,
            },
          });
        }
      );
    },
    { scope: pageRef }
  );

  useGSAP(
    () => {
      if (!submitted || !successRef.current) return;
      const reduced = prefersReducedMotion();

      gsap.fromTo(
        successRef.current,
        { autoAlpha: 0, scale: reduced ? 0.99 : 0.94, y: reduced ? 4 : 12 },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: reduced ? 0.28 : 0.4,
          ease: reduced ? "power2.out" : "back.out(1.5)",
          clearProps: "transform,opacity,visibility",
        }
      );
    },
    { scope: pageRef, dependencies: [submitted] }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 550);
  };

  return (
    <div ref={pageRef} className="w-full bg-white pb-24">
      <PageHeroBanner
        eyebrow="GET IN TOUCH"
        title="Contact BIRMAL"
        description="Ordering for home, stocking your store, or looking for commercial bulk rates? Reach our Hyderabad team directly."
      />

      {/* 2-Column Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (7 cols): Interactive Form */}
          <div className="contact-col lg:col-span-7 bg-[#F5F9F7] rounded-3xl p-8 sm:p-12 border border-emerald-950/10 shadow-card">
            {submitted ? (
              <div ref={successRef} className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0FA942] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#063B38]">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Your inquiry regarding <strong className="text-gray-900">{formData.inquiryType}</strong> has been received by our Hyderabad customer care desk. Our sales team will get back to you shortly at {formData.phone || formData.email}.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        inquiryType: "Retail Purchase",
                        message: "",
                      });
                    }}
                    className="btn-interactive px-6 py-2.5 rounded-full bg-[#063B38] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-[#0FA942]"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form id="dealership" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#0FA942] block mb-1">
                    ONLINE INQUIRY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#063B38] tracking-tight">
                    Send Us a Message
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#0FA942] focus:ring-2 focus:ring-[#0FA942]/30 shadow-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#0FA942] focus:ring-2 focus:ring-[#0FA942]/30 shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#0FA942] focus:ring-2 focus:ring-[#0FA942]/30 shadow-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#0FA942] focus:ring-2 focus:ring-[#0FA942]/30 shadow-sm transition-all"
                    >
                      <option value="Retail Purchase">Retail Household Purchase</option>
                      <option value="Bulk Supply">Bulk Orders &amp; Commercial Supply</option>
                      <option value="Dealership">Distributor / Dealership Inquiry</option>
                      <option value="General Support">Customer Care &amp; Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                    Message / Quantity Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your requirements, city/location, or product sizes needed..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#0FA942] focus:ring-2 focus:ring-[#0FA942]/30 shadow-sm transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-interactive w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0FA942] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-[#0D8F38] shadow-pill disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "SUBMITTING..." : "SUBMIT INQUIRY"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column (5 cols): Corporate Details & Fast Contacts */}
          <div className="contact-col lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-emerald-950/10 shadow-card space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#0FA942] block mb-1">
                  OFFICIAL HEADQUARTERS
                </span>
                <h3 className="text-xl font-black text-[#063B38]">
                  {BRAND_CONFIG.companyLegalName}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Home Care &amp; Floor Hygiene Manufacturing Unit — Hyderabad
                </p>
              </div>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0FA942] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-semibold text-xs uppercase tracking-wider mb-0.5">
                      Registered Plant &amp; Office
                    </strong>
                    <p className="leading-relaxed text-xs sm:text-sm text-gray-600">
                      {BRAND_CONFIG.contacts.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0FA942] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-semibold text-xs uppercase tracking-wider mb-0.5">
                      Customer Care &amp; Sales Desk
                    </strong>
                    <p className="text-xs sm:text-sm text-gray-800 font-bold">
                      {BRAND_CONFIG.contacts.primaryPhone}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {BRAND_CONFIG.contacts.secondaryPhone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#0FA942] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-semibold text-xs uppercase tracking-wider mb-0.5">
                      Email Communication
                    </strong>
                    <a
                      href={`mailto:${BRAND_CONFIG.contacts.email}`}
                      className="text-xs sm:text-sm text-emerald-700 font-medium hover:underline block"
                    >
                      {BRAND_CONFIG.contacts.email}
                    </a>
                    <a
                      href={`mailto:${BRAND_CONFIG.contacts.corporateEmail}`}
                      className="text-xs sm:text-sm text-gray-500 hover:underline block"
                    >
                      {BRAND_CONFIG.contacts.corporateEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0FA942] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-semibold text-xs uppercase tracking-wider mb-0.5">
                      Operating Hours
                    </strong>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {BRAND_CONFIG.contacts.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp Chat Button */}
              <div className="pt-2 border-t border-gray-100">
                <a
                  href={BRAND_CONFIG.marketplace.whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-interactive w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0FA942] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-[#0D8F38] shadow-pill"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CHAT INSTANTLY ON WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* Statutory Corporate Identifiers Box */}
            <div className="p-5 rounded-2xl bg-[#F5F9F7] border border-emerald-950/10 text-xs space-y-1.5 text-gray-700">
              <div className="flex items-center gap-2 text-[#063B38] font-extrabold">
                <ShieldCheck className="w-4 h-4 text-[#0FA942]" />
                <span>Statutory Registrations</span>
              </div>
              <p>
                <strong>CIN:</strong> {BRAND_CONFIG.cin}
              </p>
              <p>
                <strong>PAN:</strong> {BRAND_CONFIG.pan}
              </p>
              <p className="text-gray-500 text-[11px] pt-1">
                BIRMAL is a registered brand trademark of Birrumalae Pharma Private Limited.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
