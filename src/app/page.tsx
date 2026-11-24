import { HomeHero } from "@/components/HomeHero";
import { AboutPreview } from "@/components/AboutPreview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { OurReach } from "@/components/OurReach";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SplitFAQSection } from "@/components/SplitFAQSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <HomeHero />
      <AboutPreview />
      <WhyChooseUs />
      <OurReach />
      <TestimonialsSection />
      <SplitFAQSection />
    </div>
  );
}
