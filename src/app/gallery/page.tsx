"use client";

import { useState } from "react";
import Image from "next/image";
import { WaveDivider } from "@/components/WaveDivider";
import { X, ZoomIn, Eye } from "lucide-react";

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

  const galleryItems: GalleryItem[] = [
    {
      id: "lineup",
      title: "Complete BIRMAL Family Lineup",
      category: "packs",
      src: "/images/products/bottle-lineup.webp",
      description: "200ml, 500ml, 1 Litre, and 5 Litre bulk concentrate packs with pine fresh formula.",
    },
    {
      id: "1l",
      title: "BIRMAL 1 Litre Flagship Bottle",
      category: "packs",
      src: "/images/products/bottle-1l.webp",
      description: "Our best-selling size for residential homes. Makes over 100 litres of cleaning solution.",
    },
    {
      id: "5l",
      title: "BIRMAL 5 Litres Bulk Concentrate",
      category: "packs",
      src: "/images/products/bottle-5l.webp",
      description: "Heavy-duty commercial packaging for offices, hospitals, and high-traffic spaces.",
    },
    {
      id: "500ml",
      title: "BIRMAL 500ml Everyday Pack",
      category: "packs",
      src: "/images/products/bottle-500ml.webp",
      description: "Compact ergonomic bottle for nuclear families and daily kitchen/tile mopping.",
    },
    {
      id: "200ml",
      title: "BIRMAL 200ml Trial Pack",
      category: "packs",
      src: "/images/products/bottle-200ml.webp",
      description: "Trial size designed for travel, sample testing, or bathroom deep disinfection.",
    },
    {
      id: "balcony",
      title: "Streak-Free Balcony & Outdoor Cleaning",
      category: "lifestyle",
      src: "/images/lifestyle/about-balcony.webp",
      description: "Outdoor tiles and balconies shining in natural morning sunlight with zero residue.",
    },
    {
      id: "living-room",
      title: "Mirror-Finish Marble Living Room",
      category: "lifestyle",
      src: "/images/lifestyle/about-indoor.webp",
      description: "Polished Italian marble tiles reflecting soft morning light after mopping with BIRMAL.",
    },
    {
      id: "dilution",
      title: "Precision Cap Dilution",
      category: "lifestyle",
      src: "/images/lifestyle/how-to-use-step1.webp",
      description: "Just 2 caps into 5 litres of fresh water produces rich active cleaning suds.",
    },
    {
      id: "mop-action",
      title: "Streak-Free Glide Mopping",
      category: "lifestyle",
      src: "/images/lifestyle/how-to-use-step2.webp",
      description: "Microfiber mop gliding smoothly without sticky film or chemical streaks.",
    },
    {
      id: "bathroom-tiles",
      title: "Sparkling Bathroom & Fixture Hygiene",
      category: "lifestyle",
      src: "/images/lifestyle/how-to-use-step3.webp",
      description: "Immaculate wall and floor tiles with refreshing natural pine fragrance.",
    },
    {
      id: "splash",
      title: "Pine Fresh Active Splash",
      category: "lifestyle",
      src: "/images/lifestyle/faq-splash.webp",
      description: "Dynamic pine concentrate splash visual symbolizing purity, water freshness, and safety.",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full bg-white pb-24">
      {/* Hero Header */}
      <section className="relative bg-[#063B38] text-white pt-14 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 max-w-3xl">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0FA942]">
            PRODUCT &amp; HYGIENE SHOWCASE
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            BIRMAL Gallery
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed font-normal">
            Explore our studio pack shots, commercial bottle lineups, and gleaming streak-free cleaning results.
          </p>

          {/* Filter Tabs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            {[
              { id: "all", label: "ALL IMAGES" },
              { id: "packs", label: "PRODUCT PACKS" },
              { id: "lifestyle", label: "CLEANING LIFESTYLE" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-black tracking-wider transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#0FA942] text-white shadow-pill"
                    : "bg-teal-900/60 text-teal-200 border border-teal-700/60 hover:bg-teal-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <WaveDivider fillColor="#FFFFFF" bgColor="transparent" className="mt-10" />
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-[#F4F7F6] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200/80 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 sm:h-72 p-4 flex items-center justify-center bg-white">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  loading="eager"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-[#063B38]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#0FA942] flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    View Fullscreen
                  </span>
                </div>
              </div>

              {/* Caption Card */}
              <div className="p-4 bg-white border-t border-gray-100 space-y-1">
                <h3 className="text-sm font-extrabold text-gray-900 group-hover:text-[#0FA942] transition-colors">
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gray-100 bg-[#F4F7F6]">
              <div>
                <h3 className="text-base sm:text-lg font-black text-gray-900">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-gray-500">{selectedImage.description}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
                className="w-9 h-9 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#0FA942] hover:text-white transition-colors"
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
