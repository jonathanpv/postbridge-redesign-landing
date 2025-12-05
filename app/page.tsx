"use client";

import { AsFeaturedOnSection } from "@/components/AsFeaturedOnSection";
import CrossPostingSection from "@/components/CrossPostingSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
// import { Hero2 } from "@/components/Hero2";
import { HeroSocialOrbit } from "@/components/HeroSocialOrbit";
import ImpactComponent from "@/components/icons/ImpactComponent";
import OurImpactComponent from "@/components/icons/OurImpactComponent";
import RightDecoration3 from "@/components/icons/RightDecoration3";
import RingComponent from "@/components/icons/RingComponent";
import ImpactSection from "@/components/ImpactSection";
import QuickTour from "@/components/QuickTour";
import SocialPublishingBento from "@/components/SocialPublishingBento";

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

      <div className="h-[800px] flex justify-center items-center">
        bruh
      </div>
      <QuickTour/>
      <ImpactSection/>
      <CrossPostingSection/>
      <SocialPublishingBento/>
    </div>
  );
}