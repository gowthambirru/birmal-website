import { Sparkles, MapPin, ShieldCheck } from "lucide-react";
import { BubbleDecorations } from "@/components/BubbleDecorations";

export function WhyChooseUs() {
  const cards = [
    {
      title: "Concentrated Pine Formula",
      description:
        "High-potency active formula where 2 caps make 5 litres of cleaning solution. 2X tough on stains and grime, outlasting 4 regular bottles of ordinary phenyl.",
      icon: Sparkles,
    },
    {
      title: "Pan-India Availability",
      description:
        "Prompt doorstep delivery via Amazon, Flipkart, and leading supermarket partners, ensuring reliable supply for homes, clinics, and commercial premises.",
      icon: MapPin,
    },
    {
      title: "Trusted by Families & Institutions",
      description:
        "Formulated by Birrumalae Pharma under strict hygiene controls. Non-corrosive, pH balanced, 100% safe on marble, and gentle around kids and pets.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative bg-[#063B38] text-white py-20 sm:py-24 overflow-hidden">
      <BubbleDecorations />
      <div className="absolute inset-0 bg-dots-pattern-white opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0FA942]">
            — WHY CHOOSE BIRMAL —
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Your Home, Our Responsibility — Trusted by Thousands Across India
          </h2>
          <p className="text-sm sm:text-base text-teal-100/80 leading-relaxed font-normal pt-2">
            At BIRMAL, we go beyond cleaning. We bring safety, hygiene, and peace of mind to your doorstep with eco-conscious concentrated solutions.
          </p>
        </div>

        {/* 3 Elevated White Rounded Cards with Top Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-4">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="relative bg-white text-gray-900 rounded-2xl p-8 pt-12 shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-[#0FA942] group"
              >
                {/* Circular Badge Overlapping Top Edge */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-[#0FA942] flex items-center justify-center text-[#063B38] shadow-lg group-hover:scale-110 group-hover:bg-[#0FA942] group-hover:text-white transition-all duration-300">
                  <Icon className="w-8 h-8 stroke-[2]" />
                </div>

                <div className="text-center space-y-3">
                  <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
