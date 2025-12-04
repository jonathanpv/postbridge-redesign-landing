"use client";

import React from "react";
import { 
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "motion/react";
import { 
  Linkedin, 
  Facebook, 
  Youtube, 
  Instagram,
  Twitter
} from "lucide-react";

// --- Custom Icon Components ---
import { OrbitBubble } from "@/components/OrbitBubble";
import { OrbitMainBubble } from "@/components/OrbitMainBubble";
import { CompanyIcon } from "@/components/icons/CompanyIcon";
import { ThreadsIcon } from "@/components/icons/ThreadsIcon";
import Pinterest from "@/components/icons/pinterest";
import Snapchat from "@/components/icons/snapchat";
import TikTok from "@/components/icons/tiktok";

// --- Configuration & Path Data (From Figma) ---
const CONTAINER_SIZE = { width: 756, height: 941 };

const PATHS = {
  inner: {
    d: "M733 254.5 C733 395.056 568.912 509 366.5 509 C164.088 509 0 395.056 0 254.5 C0 113.944 164.088 0 366.5 0 C568.912 0 733 113.944 733 254.5 Z",
    viewBox: "0 0 733 509",
    width: 733,
    height: 509,
    position: { top: 38, left: 11 },
    gradientId: "paint0_linear_inner",
  },
  middle: {
    d: "M701 254.5 C701 395.056 544.076 509 350.5 509 C156.924 509 0 395.056 0 254.5 C0 113.944 156.924 0 350.5 0 C544.076 0 701 113.944 701 254.5 Z",
    viewBox: "0 0 701 509",
    width: 701,
    height: 509,
    position: { top: 91, left: 27 },
    gradientId: "paint0_linear_middle",
  },
  outer: {
    d: "M756 399 C756 619.362 586.764 798 378 798 C169.236 798 0 619.362 0 399 C0 178.638 169.236 0 378 0 C586.764 0 756 178.638 756 399 Z",
    viewBox: "0 0 756 798",
    width: 756,
    height: 798,
    position: { top: 143, left: 0 },
    gradientId: "paint0_linear_outer",
  },
};

// --- Main Visual Component ---
export function HeroVisual2() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-transparent py-20">
      <div 
        className="relative origin-center scale-[0.4] sm:scale-[0.5] md:scale-[0.7] lg:scale-90"
        style={{ width: CONTAINER_SIZE.width, height: CONTAINER_SIZE.height }}
      >
          
          {/* --- Center Core --- */}
          <div 
            className="absolute z-50 flex items-center justify-center"
            style={{ left: 265, top: 161, width: 223, height: 214 }}
          >
            <OrbitMainBubble>
              <CompanyIcon className="w-[80px] h-[80px] text-black" />
            </OrbitMainBubble>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-emerald-400/20 blur-[80px] -z-10" />
          </div>

          {/* --- 1. Inner Ring --- */}
          <div 
            className="absolute"
            style={{ ...PATHS.inner.position, width: PATHS.inner.width, height: PATHS.inner.height }}
          >
             <RingVisual pathData={PATHS.inner} />
             <MotionOrbit path={PATHS.inner.d} duration={40} direction="normal">
                <OrbitBubble><Facebook size={28} className="text-blue-600 fill-current stroke-0" /></OrbitBubble>
                <OrbitBubble><Twitter size={24} className="text-black fill-current stroke-0" /></OrbitBubble>
                <OrbitBubble><Youtube size={28} className="text-red-600 fill-current stroke-0" /></OrbitBubble>
             </MotionOrbit>
          </div>

          {/* --- 2. Middle Ring --- */}
          <div 
            className="absolute"
            style={{ ...PATHS.middle.position, width: PATHS.middle.width, height: PATHS.middle.height }}
          >
            <RingVisual pathData={PATHS.middle} opacity={0.6} />
             <MotionOrbit path={PATHS.middle.d} duration={50} direction="reverse">
                <OrbitBubble><Instagram size={26} className="text-pink-600" /></OrbitBubble>
                <OrbitBubble><TikTok className="w-[26px] h-[26px] text-black" /></OrbitBubble>
                <OrbitBubble><Snapchat className="w-7 h-7 text-yellow-500 fill-current" /></OrbitBubble>
             </MotionOrbit>
          </div>

          {/* --- 3. Outer Ring --- */}
          <div 
            className="absolute"
            style={{ ...PATHS.outer.position, width: PATHS.outer.width, height: PATHS.outer.height }}
          >
            <RingVisual pathData={PATHS.outer} opacity={0.4} />
             <MotionOrbit path={PATHS.outer.d} duration={60} direction="normal">
                <OrbitBubble><Pinterest className="w-6 h-6 text-red-700 fill-current" /></OrbitBubble>
                <OrbitBubble><ThreadsIcon className="w-6 h-6 text-black" /></OrbitBubble>
                <OrbitBubble><Linkedin className="w-6 h-6 text-[#0077b5] fill-current" /></OrbitBubble>
             </MotionOrbit>
          </div>
      </div>
    </div>
  );
}


// --- New Animation Component using motion/react ---

// Utility function to wrap a value around a min/max range (e.g., 0 to 100)
const wrap = (min: number, max: number, value: number): number => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

const MotionOrbit = ({ 
  path, 
  duration, 
  direction, 
  children 
}: { 
  path: string; 
  duration: number; 
  direction: "normal" | "reverse";
  children: React.ReactNode 
}) => {
    // Removed animation logic to keep icons static on the paths

    const childrenArray = React.Children.toArray(children);
    const numChildren = childrenArray.length;

    return (
        <>
            {childrenArray.map((child, i) => {
                // Fixed initial position without animation
                const initialPosition = (i * 100) / numChildren;
                const itemOffset = `${initialPosition}%`;

                return (
                    <motion.div
                        key={i}
                        className="absolute top-0 left-0"
                        style={{
                            offsetPath: `path("${path}")`,
                            offsetDistance: itemOffset,
                            offsetRotate: '0deg', // Keep icons upright
                        }}
                    >
                        {/* This wrapper is for centering and hover effects */}
                        <div className="pointer-events-auto hover:scale-125 transition-transform duration-300 -translate-x-1/2 -translate-y-1/2">
                            {child}
                        </div>
                    </motion.div>
                );
            })}
        </>
    );
};

// --- SVG Ring Visual Component ---
const RingVisual = ({ pathData, opacity = 1 }: { pathData: typeof PATHS.inner, opacity?: number }) => {
  return (
    <svg 
      width={pathData.width} 
      height={pathData.height} 
      viewBox={pathData.viewBox} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 pointer-events-none"
      style={{ opacity }}
    >
      <path d={pathData.d} stroke={`url(#${pathData.gradientId})`} strokeWidth="1.5" />
      <defs>
        <linearGradient id={pathData.gradientId} x1="50%" y1="0%" x2="50%" y2="100%" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="0.6" stopColor="#34D399" stopOpacity="0.5" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};