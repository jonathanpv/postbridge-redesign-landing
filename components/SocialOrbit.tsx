"use client";

import React, { useEffect, useState } from "react";
// Assuming you have these icons imported
import {
    IconContainerBubble,
    TikTokIcon,
  } from "@/components/IconContainerBubble";
  import { BlueSkyIcon } from "@/components/icons/blueskyIcon";
  import { CompanyIcon } from "@/components/icons/CompanyIcon";
  import Facebook from "@/components/icons/facebook";
  import Instagram from "@/components/icons/instagram";
  import Pinterest from "@/components/icons/pinterest";
  import Snapchat from "@/components/icons/snapchat";
  import { ThreadsIcon } from "@/components/icons/ThreadsIcon";
  import TikTok from "@/components/icons/tiktok";
  import { XAppIcon } from "@/components/icons/XAppIcon";
  import XformerlyTwitter from "@/components/icons/xicon";
  import YouTube from "@/components/icons/youtube";
  import { InstagramColor } from "@/components/InstagramColor";
  import { OrbitBubble } from "@/components/OrbitBubble";
  import { OrbitMainBubble } from "@/components/OrbitMainBubble";
  import { OrbitingCircles } from "@/components/ui/orbiting-circles";
  import { HomeIcon, XIcon } from "lucide-react";
  import Image from "next/image";
// import { OrbitingCircles } from "@/components/ui/orbiting-circles"; // Update path as needed

// 1. Setup a hook for responsiveness
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export function SocialOrbit() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // 2. Configuration for the rings to keep JSX clean
  // logic: radius depends on mobile vs desktop state
  const orbits = [
    {
      radius: isMobile ? 80 : 180,
      iconSize: 30,
      speed: 1,
      icons: [<Facebook />, <InstagramColor />, <YouTube />],
    },
    {
      radius: isMobile ? 140 : 270,
      iconSize: 30,
      speed: 1,
      reverse: true,
      icons: [<ThreadsIcon />, <Pinterest />, <Snapchat />],
    },
    {
      radius: isMobile ? 200 : 350,
      iconSize: 30,
      speed: 1.2,
      icons: [<TikTok />, <XAppIcon />, <BlueSkyIcon />],
    },
  ];

  return (
    <div className="relative flex h-[350px] w-full flex-col items-center justify-end overflow-hidden bg-white/5">
      
      {/* LAYER 1: The Rings
        We apply a mask here to fade the edges (left/right) to transparent.
        We position this container so its center aligns with the bottom of the parent.
      */}
      <div 
        className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2"
        style={{
           // This mask creates the fade effect on the left and right edges
           maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
           WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* The container for OrbitingCircles needs to be "centered" at the bottom.
           Since OrbitingCircles usually centers itself in a flex container, 
           we translate it down significantly so the 'center' of the orbit is at the bottom of the view.
        */}
        <div className="relative flex h-full w-full items-end justify-center pb-12">
            {orbits.map((orbit, index) => (
              <OrbitingCircles
                key={index}
                className="border-none bg-transparent"
                duration={20}
                delay={index * 10}
                radius={orbit.radius}
                reverse={orbit.reverse}
              >
                {orbit.icons.map((icon, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center rounded-full bg-white/10 p-2 shadow-sm backdrop-blur-sm"
                    style={{ width: orbit.iconSize + 16, height: orbit.iconSize + 16 }}
                  >
                    {/* Cloning allows us to force standard sizing on the SVG icons */}
                    {React.cloneElement(icon as React.ReactElement, { 
                        className: `w-[${orbit.iconSize}px] h-[${orbit.iconSize}px]` 
                    })}
                  </div>
                ))}
              </OrbitingCircles>
            ))}
        </div>
      </div>

      {/* LAYER 2: The Main Logo 
        This is outside the masked div, so it stays solid.
        Positioned absolutely at the bottom center.
      */}
      <div className="z-10 mb-4 rounded-full bg-white p-2 shadow-2xl">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-100">
           <CompanyIcon className="h-14 w-14 text-black" />
        </div>
      </div>
    </div>
  );
}