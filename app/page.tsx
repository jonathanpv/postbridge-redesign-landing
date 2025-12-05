"use client";

import { AsFeaturedOnSection } from "@/components/AsFeaturedOnSection";
import { ContentManagementSectionVisual } from "@/components/ContentManagementSectionVisual";
import { ContentStudioVisual } from "@/components/ContentStudioSection";
import CrossPostingSection, { CrossPostingSectionVisual } from "@/components/CrossPostingSection";
import CTASection from "@/components/CTASection";
import { DeveloperApiCard } from "@/components/DeveloperApiCard";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import { FinancialDashboardIllustration } from "@/components/FinancialDashboardIllustration";
import { FinancialDashboardIllustration2 } from "@/components/FinancialDashboardIllustration2";
import { Footer } from "@/components/Footer";
import { FounderSection } from "@/components/FounderSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
// import { Hero2 } from "@/components/Hero2";
import { HeroSocialOrbit } from "@/components/HeroSocialOrbit";
import ImpactComponent from "@/components/icons/ImpactComponent";
import OurImpactComponent from "@/components/icons/OurImpactComponent";
import RightDecoration3 from "@/components/icons/RightDecoration3";
import RingComponent from "@/components/icons/RingComponent";

import ImpactSection from "@/components/ImpactSection";
import PricingSection from "@/components/PricingSection";
import QuickTour from "@/components/QuickTour";
import SocialPublishingBento from "@/components/SocialPublishingBento";
import SupportedPlatforms from "@/components/SupportedPlatformsSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {

  return (
    <div className="relative w-screen h-fit flex flex-col items-center overflow-clip">
      <Header />
      <Hero/>
      <HeroSocialOrbit />
      <AsFeaturedOnSection />
      <div className="absolute -right-110 md:-right-70 h-[950px] w-fit overflow-clip">
        <RightDecoration3 className=" [transform:rotateY(180deg)]"/>
      </div>
      <div className="absolute -left-110 md:-left-70 h-[950px] w-fit overflow-clip">
        <RightDecoration3 className=""/>
      </div>
      <QuickTour/>
      <ImpactSection/>
      <FeaturesSection/>
      <TestimonialSection/>
      <FounderSection/>
      <SupportedPlatforms/>
      <DeveloperApiCard/>
      <PricingSection/>
      <FAQSection/>
      <CTASection/>
      <Footer/>
    </div>
  );
}