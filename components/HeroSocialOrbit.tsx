"use client";

import { BlueSkyIcon } from "@/components/icons/blueskyIcon";
import { CompanyIcon } from "@/components/icons/CompanyIcon";
import Facebook from "@/components/icons/facebook";
import Pinterest from "@/components/icons/pinterest";
import Snapchat from "@/components/icons/snapchat";
import { ThreadsIcon } from "@/components/icons/ThreadsIcon";
import TikTok from "@/components/icons/tiktok";
import { XAppIcon } from "@/components/icons/XAppIcon";
import YouTube from "@/components/icons/youtube";
import { InstagramColor } from "@/components/InstagramColor";
import { OrbitBubble } from "@/components/OrbitBubble";
import { OrbitMainBubble } from "@/components/OrbitMainBubble";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { useEffect, useState } from "react";

// Simple hook to detect mobile screen (less than 768px)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

export function HeroSocialOrbit() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full flex flex-col font-sans items-center">
      {/* This div is a weird hack to make the orbit main bubble still render visibly over the other rings */}
      <div className="relative flex w-full h-[350px] overflow-visible">
        <div className="absolute bottom-20 md:-bottom-30 -translate-x-1/2 left-1/2">
          <OrbitMainBubble className="w-30 h-30 md:w-[240px] md:h-[240px]">
            {/* 1. CHANGED: Made icon smaller on mobile (w-20 is 80px) */}
            <CompanyIcon className="w-12 h-12 md:w-[100px] md:h-[100px]" />
          </OrbitMainBubble>
        </div>
        
        {/* This is just a cropping div */}
        <div className="relative flex h-[230px] md:h-[350px] w-full overflow-hidden">
          
          {/* 2. CHANGED: h-[750px] is now responsive. 
             On mobile we shrink the container to 400px so the centerpoint moves up, 
             otherwise the small mobile rings will look 'too flat'. */}
          <div className="relative flex h-[400px] md:h-[750px] w-full flex-col items-center justify-center overflow-hidden">
            
            {/* 3. CHANGED: Radius is now conditional based on isMobile */}
            <OrbitingCircles iconSize={isMobile ? 50 : 79} radius={isMobile ? 75 : 180}>
              <OrbitBubble >
                <Facebook  />
              </OrbitBubble>

              <OrbitBubble>
                <InstagramColor  />
              </OrbitBubble>

              <OrbitBubble>
                <YouTube  />
              </OrbitBubble>
            </OrbitingCircles>

            <OrbitingCircles iconSize={isMobile ? 50 : 79} reverse radius={isMobile ? 125 : 270}>
              <OrbitBubble>
                <ThreadsIcon  />
              </OrbitBubble>

              <OrbitBubble>
                <Pinterest  />
              </OrbitBubble>

              <OrbitBubble>
                <Snapchat  />
              </OrbitBubble>
            </OrbitingCircles>

            <OrbitingCircles iconSize={isMobile ? 50 : 79} speed={1.2} radius={isMobile ? 175 : 350}>
              <OrbitBubble>
                <TikTok  />
              </OrbitBubble>

              <OrbitBubble>
                <XAppIcon  />
              </OrbitBubble>

              <OrbitBubble>
                <BlueSkyIcon  />
              </OrbitBubble>
            </OrbitingCircles>
          </div>
        </div>
      </div>
    </div>
  );
}
