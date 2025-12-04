"use client";

import { Hero } from "@/components/Hero";
import { Hero2 } from "@/components/Hero2";
import { HeroSocialOrbit } from "@/components/HeroSocialOrbit";

export default function Home() {

  return (
    <div className="w-screen h-fit flex flex-col items-center ">
      <Hero/>
      <HeroSocialOrbit />

    </div>
  );
}