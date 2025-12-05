import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * QuickTour Component
 * 
 * A two-column layout section featuring a promotional text block on the left
 * and an interactive-looking video player mockup inside a browser window on the right.
 */

export default function QuickTour() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 max-w-lg lg:max-w-none text-center lg:text-left z-10">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#333c4d] font-sans">
              Take a{" "}
              <span className="text-[#66cc8a]">Quick Tour</span>
            </h2>
            
            <p className="mt-6 text-base md:text-lg text-[#4d4d4d] leading-relaxed font-medium font-sans">
              Here’s a short demo showing how easy is to plan, post and manage
              everything with Post Bridge
            </p>

            <div className="mt-8 md:mt-10 flex justify-center lg:justify-start">
              <button
                type="button"
                className="group relative inline-flex items-center justify-center rounded-full bg-[#66cc8a] px-8 py-3 text-base font-semibold text-black transition-transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#66cc8a] focus:ring-offset-2"
              >
                Try for free
              </button>
            </div>
          </div>

          {/* Right Column: Browser Window Mockup */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none relative">
            <BrowserWindow className="shadow-2xl">
              <VideoPlayerMockup />
            </BrowserWindow>
          </div>
          
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

function BrowserWindow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-gray-200 bg-white",
        className
      )}
    >
      {/* Browser Header / Toolbar */}
      <div className="flex h-10 items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-4">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
      </div>
      
      {/* Browser Content */}
      <div className="relative bg-gray-50 aspect-video lg:aspect-[16/10]">
        {children}
      </div>
    </div>
  );
}

function VideoPlayerMockup() {
  return (
    <div className="group relative h-full w-full bg-gray-100">
      {/* Main Background - App Interface Screenshot */}
      <div className="absolute inset-0 z-0">
        {/* TODO: Replace with actual dashboard screenshot */}
        <Image
          src="/placeholder-dashboard.png" 
          alt="Post Bridge Dashboard Interface"
          fill
          className="object-cover object-top opacity-90"
        />
        {/* Overlay to dim the background slightly for video focus */}
        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
      </div>

      {/* Video Overlay Header */}
      <div className="absolute left-0 top-0 z-20 flex w-full items-center gap-3 bg-gradient-to-b from-black/50 to-transparent p-4 md:p-6">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/20 shadow-sm">
           {/* TODO: Replace with presenter avatar */}
          <Image
            src="/placeholder-avatar.png"
            alt="Presenter"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-lg font-medium text-white drop-shadow-md">
          How to use post bridge! (demo)
        </span>
      </div>

      {/* Center Play Button */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <button
          type="button"
          aria-label="Play video"
          className="relative flex h-16 w-24 items-center justify-center transition-transform duration-300 hover:scale-110 md:h-20 md:w-28"
        >
          {/* YouTube-style red background */}
          <div className="absolute inset-0 rounded-2xl bg-[#FF0000] shadow-lg opacity-90" />
          {/* Play Icon */}
          <Play className="relative ml-1 h-8 w-8 fill-white text-white md:h-10 md:w-10" />
        </button>
      </div>

      {/* Webcam Overlay (Bottom Right) */}
      <div className="absolute bottom-4 right-4 z-20 h-24 w-36 overflow-hidden rounded-lg border-2 border-white/20 shadow-xl md:bottom-6 md:right-6 md:h-32 md:w-48">
         {/* TODO: Replace with presenter video feed placeholder */}
        <Image
          src="/placeholder-webcam.png"
          alt="Presenter webcam"
          fill
          className="object-cover bg-gray-800"
        />
      </div>
      
      {/* Video Progress Bar (Visual only) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div className="h-full w-1/3 bg-[#FF0000]" />
      </div>
    </div>
  );
}