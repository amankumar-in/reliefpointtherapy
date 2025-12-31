import { Hero } from "@/components/home/hero";
import { BenefitStrip } from "@/components/home/benefit-strip";
import { MeetNurse } from "@/components/home/meet-nurse";
import { NFPMPreview, Nrf2Preview } from "@/components/home/service-previews";
import { DecisionGuide } from "@/components/home/decision-guide";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BenefitStrip />
      <MeetNurse />
      <NFPMPreview />
      <Nrf2Preview />
      <DecisionGuide />
      <Testimonials />
      {/* Email Lead Magnet Pop-up would be injected here or in Layout */}
      <FinalCTA />
    </div>
  );
}
