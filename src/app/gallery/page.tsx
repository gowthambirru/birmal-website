"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  gsap,
  useGSAP,
  ScrollTrigger,
  MOTION_QUERIES,
  prefersReducedMotion,
  resolveMotionConfig,
} from "@/lib/gsap";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { X, Eye } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "packs" | "lifestyle";
  src: string;
  description: string;
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const modalCardRef = useRef<HTMLDivElement>(null);
  const hasFilteredRef = useRef(false);

  useEffect(() => {
    if (!selectedImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  const handleCategoryChange = (cat: string) => {
    hasFilteredRef.current = true;
    setActiveCategory(cat);
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: MOTION_QUERIES.reduceMotion,
          isMobile: MOTION_QUERIES.isMobile,
          isDesktop: MOTION_QUERIES.isDesktop,
        },
        (context) => {
          const motion = resolveMotionConfig(context.conditions);
          const cards = gsap.utils.toArray<HTMLElement>(".gallery-card", pageRef.current);
          if (!cards.length) return;

          if (!hasFilteredRef.current) {
            gsap.set(cards, {
              autoAlpha: 0,
              y: motion.y(20, 6),
              scale: motion.reduced ? 0.99 : 0.97,
            });
            ScrollTrigger.batch(cards, {
              start: "top 88%",
              once: true,
              onEnter: (batch) =>
                gsap.to(batch, {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  duration: motion.dur(0.48, 0.34),
                  stagger: motion.reduced ? 0.035 : 0.055,
                  ease: "power3.out",
                  clearProps: "transform,opacity,visibility",
                  overwrite: true,
                }),
            });
          } else {
            gsap.fromTo(
              cards,
              {
                autoAlpha: 0,
                y: motion.reduced ? 4 : 14,
                scale: motion.reduced ? 0.99 : 0.96,
              },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: motion.dur(0.36, 0.25),
                stagger: motion.reduced ? 0.025 : 0.04,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                overwrite: true,
              }
            );
            ScrollTrigger.refresh();
          }
        }
      );
    },
    { scope: pageRef, dependencies: [activeCategory] }
  );

  useGSAP(
    () => {
      if (!selectedImage || !modalCardRef.current) return;
      const reduced = prefersReducedMotion();

      gsap.fromTo(
        modalCardRef.current,
        { autoAlpha: 0, scale: reduced ? 0.99 : 0.94, y: reduced ? 4 : 12 },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: reduced ? 0.22 : 0.28,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
          overwrite: true,
        }
      );
    },
    { scope: pageRef, dependencies: [selectedImage] }
  );

  const galleryItems: GalleryItem[] = [
    {
      id: "lineup",
      title: "Complete BIRMAL Pack Lineup",
      category: "packs",
      src: "/images/products/bottle-lineup.webp",
      description: "Full range from 200 ml (₹70) and 500 ml (₹170) to 1 Litre (₹330) and 5 Litre bulk cans (₹1,450).",
    },
    {
      id: "real-batch",
      title: "BIRMAL Concentrated Bottles — Retail Showcase",
      category: "packs",
      src: "/images/products/birmal-bottles-real.webp",
      description: "Tamper-evident green-capped bottles with pine fresh concentrate labels ready for retail shelves.",
    },
    {
      id: "1l",
      title: "BIRMAL 1 Litre Bottle (MRP ₹330)",
      category: "packs",
      src: "/images/products/bottle-1l.webp",
      description: "Our top-selling family pack with measuring cap. Makes 100+ litres of cleaning solution.",
    },
    {
      id: "5l",
      title: "BIRMAL 5 Litres Bulk Can (MRP ₹1,450)",
      category: "packs",
      src: "/images/products/bottle-5l.webp",
      description: "Sturdy HDPE jerry can built for offices, hospitals, clinics, and facility housekeeping.",
    },
    {
      id: "500ml",
      title: "BIRMAL 500 ml Everyday Bottle (MRP ₹170)",
      category: "packs",
      src: "/images/products/bottle-500ml.webp",
      description: "Easy-grip 500 ml pack ideal for daily kitchen, living room, and balcony mopping.",
    },
    {
      id: "200ml",
      title: "BIRMAL 200 ml Trial Bottle (MRP ₹70)",
      category: "packs",
      src: "/images/products/bottle-200ml.webp",
      description: "Compact pack to sample BIRMAL at home, pack for travel, or deep-clean bathrooms.",
    },
    {
      id: "balcony",
      title: "Clean Balcony & Patio Tiles",
      category: "lifestyle",
      src: "/images/lifestyle/about-balcony.webp",
      description: "Outdoor stone and balcony flooring washed clean with zero sticky streaks.",
    },
    {
      id: "living-room",
      title: "Italian Marble Living Room Finish",
      category: "lifestyle",
      src: "/images/lifestyle/about-indoor.webp",
      description: "Natural marble gloss stays bright thanks to our acid-free neutral pH 7.0 formula.",
    },
    {
      id: "dilution",
      title: "Two-Cap Bucket Dilution",
      category: "lifestyle",
      src: "/images/lifestyle/how-to-use-step1.webp",
      description: "Just 2 caps (15–20 ml) stirred into 5 litres of water cleans an entire home.",
    },
    {
      id: "mop-action",
      title: "Smooth, Non-Sticky Mopping",
      category: "lifestyle",
      src: "/images/lifestyle/how-to-use-step2.webp",
      description: "Lifts kitchen oil and dusty footprints cleanly without a second plain-water rinse.",
    },
    {
      id: "bathroom-tiles",
      title: "Fresh Bathroom Walls & Floor Tiles",
      category: "lifestyle",
      src: "/images/lifestyle/how-to-use-step3.webp",
      description: "Clears soap residue and odours while leaving a crisp natural pine scent.",
    },
    {
      id: "splash",
      title: "Pine Concentrate Active Formula",
      category: "lifestyle",
      src: "/images/lifestyle/faq-splash.webp",
      description: "Dense pine concentrate engineered to stay strong even when heavily diluted in water.",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div ref={pageRef} className="w-full bg-white pb-24">
      <PageHeroBanner
        eyebrow="PACK SHOTS & RESULTS"
        title="BIRMAL Gallery"
        description="Real bottle photos, full pack sizes, and everyday streak-free cleaning results across homes and workplaces."
      >
        {/* Filter Tabs */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          {[
            { id: "all", label: "ALL IMAGES" },
            { id: "packs", label: "PRODUCT PACKS" },
            { id: "lifestyle", label: "CLEANING LIFESTYLE" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleCategoryChange(tab.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold tracking-wider transition-all duration-200 active:scale-95 ${
                activeCategory === tab.id
                  ? "bg-[#0FA942] text-white shadow-pill"
                  : "bg-white/[0.08] text-teal-100 border border-white/20 hover:bg-white/[0.16]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </PageHeroBanner>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="gallery-card group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-[box-shadow,border-color] duration-300 cursor-pointer border border-emerald-950/10 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 sm:h-72 p-4 flex items-center justify-center bg-[#F8FBFA]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  loading="eager"
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-[#042826]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#0FA942] flex items-center justify-center shadow-lg scale-90 group-hover:scale-100 transition-transform duration-200">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider">
                    View Fullscreen
                  </span>
                </div>
              </div>

              {/* Caption Card */}
              <div className="p-5 bg-white border-t border-emerald-950/[0.06] space-y-1">
                <h3 className="text-sm font-extrabold text-[#063B38] group-hover:text-[#0FA942] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-snug line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            ref={modalCardRef}
            className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gray-100 bg-[#F5F9F7]">
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#063B38]">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-gray-500">{selectedImage.description}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
                className="w-9 h-9 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#0FA942] hover:text-white active:scale-95 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative w-full h-[50vh] sm:h-[65vh] bg-white p-4 flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
