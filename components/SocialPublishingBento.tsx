import React, { useId } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Clock, Check } from "lucide-react";

/**
 * SocialPublishingBento
 * 
 * A visual component representing a social media scheduling workflow.
 * Features a list of platforms, a scheduling card, and a success state visualization.
 */
export default function SocialPublishingBento({ className }: { className?: string }) {
  const uniqueId = useId();
  const id = (suffix: string) => `${uniqueId}-${suffix}`;

  return (
    <div
      className={cn(
        "relative w-full max-w-[531px] aspect-[531/392] bg-white rounded-[14px] shadow-sm border border-border overflow-hidden select-none",
        "font-sans text-sidebar-foreground",
        className
      )}
    >
      {/* Background Gradient for Left Panel */}
      <div className="absolute top-0 bottom-0 left-5 w-40 bg-gradient-to-b from-white to-brand-50 rounded-[18px] opacity-50 pointer-events-none" />

      {/* Connection Line (Absolute SVG Layer) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 531 392"
        fill="none"
      >
        <defs>
          <filter id={id("blur")} x="173" y="30" width="109" height="137" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur" />
          </filter>
          <linearGradient id={id("line-gradient")} x1="281" y1="36" x2="210" y2="173" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="0.24" stopColor="var(--brand-500)" />
            <stop offset="0.62" stopColor="white" />
            <stop offset="0.82" stopColor="var(--brand-500)" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
        
        {/* Glow effect for the line */}
        <g filter={`url(#${id("blur")})`}>
          <path
            d="M181 157.967C195.043 160.111 223.182 154.429 223.392 114.547V54.0814C223.392 44.7542 229.027 38 241.034 38H275"
            stroke={`url(#${id("line-gradient")})`}
            strokeWidth="2"
          />
        </g>
        {/* Actual line */}
        <path
          d="M181 158.612C195.043 160.756 223.182 155.074 223.392 115.192V54.7259C223.392 45.3987 229.027 38.6445 241.034 38.6445H275"
          stroke={`url(#${id("line-gradient")})`}
          strokeWidth="1.5"
          style={{ mixBlendMode: 'darken' }}
        />
        
        {/* Arrow head at the Schedule button */}
        <path
          d="M478 74.5V78L480.333 79.1667"
          stroke="var(--brand-600)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M478 83.8346C481.222 83.8346 483.834 81.223 483.834 78.0013C483.834 74.7796 481.222 72.168 478 72.168C474.779 72.168 472.167 74.7796 472.167 78.0013C472.167 81.223 474.779 83.8346 478 83.8346Z"
          stroke="var(--brand-600)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Main Layout Grid */}
      <div className="relative z-20 w-full h-full p-5 grid grid-cols-[160px_1fr] gap-12">
        
        {/* Left Column: Social Platform List */}
        <div className="flex flex-col gap-4 py-2 pl-2">
          {/* Header Lines */}
          <div className="space-y-2 mb-2 px-2">
            <div className="h-2.5 w-32 bg-brand-200 rounded-full" />
            <div className="h-2 w-20 bg-brand-200 rounded-full" />
            <div className="text-brand-400 text-sm font-medium mt-1">Publishing <span className="text-brand-300">to</span></div>
          </div>

          <div className="flex flex-col gap-3">
            <SocialItem active icon={<InstagramIcon />} label="Instagram" />
            <SocialItem icon={<TikTokIcon />} label="TikTok" />
            <SocialItem icon={<ThreadsIcon />} label="Threads" />
            <SocialItem icon={<PinterestIcon />} label="Pinterest" />
            <SocialItem icon={<XIcon />} label="Twitter / X" />
            <SocialItem icon={<YouTubeIcon />} label="YouTube" />
          </div>
        </div>

        {/* Right Column: Schedule Card & Success State */}
        <div className="flex flex-col h-full relative">
          
          {/* Schedule Card */}
          <div className="absolute top-0 right-0 w-[233px] bg-white rounded-2xl shadow-lg border border-brand-100 p-4 flex flex-col gap-3 z-30">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-semibold text-gray-700">Schedule Post</span>
              <div className="w-8 h-4 bg-brand-100 rounded-full relative">
                <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-brand-500 rounded-full shadow-sm" />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-1.5 px-2 py-1.5 border border-gray-200 rounded-md text-[10px] text-gray-500">
                <span>2025-10-31</span>
                <Calendar className="w-3 h-3 ml-auto text-gray-400" />
              </div>
              <div className="flex-1 flex items-center gap-1.5 px-2 py-1.5 border border-gray-200 rounded-md text-[10px] text-gray-500">
                <span>11:55 AM</span>
                <Clock className="w-3 h-3 ml-auto text-gray-400" />
              </div>
            </div>

            <button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm py-2 rounded-full shadow-md shadow-brand-500/20 transition-all">
              Schedule
            </button>
            
            {/* Cursor Icon (Absolute) */}
            <div className="absolute bottom-3 right-8 pointer-events-none">
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.636 14.542L11.55 17.786C12.654 18.614 12.067 20.374 10.687 20.374H5.013C4.793 20.374 4.576 20.424 4.378 20.522C4.18 20.619 4.008 20.76 3.873 20.935L0.328 25.556C-0.507 26.646 -2.249 26.055 -2.249 24.681L-2.248 10.309C-2.248 10.042 -2.173 9.78 -2.033 9.553C-1.893 9.326 -1.692 9.142 -1.453 9.023C-1.214 8.903 -0.947 8.853 -0.681 8.877C-0.415 8.901 -0.161 8.998 0.052 9.159L4.636 14.542Z" fill="#74927F" transform="translate(2 -9)"/>
                </svg>
            </div>
          </div>

          {/* Success Visualization (Bottom Right) */}
          <div className="absolute bottom-6 right-6 w-[200px] h-[120px] flex items-end justify-center">
             <SuccessChart id={id("chart")} />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Sub-components ---

function SocialItem({ icon, label, active }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={cn(
      "flex items-center gap-3 px-1.5 py-1.5 rounded-full bg-white border border-transparent shadow-sm transition-all hover:scale-[1.02]",
      "hover:border-brand-200 hover:shadow-md",
      active && "border-brand-200 ring-2 ring-brand-100 ring-offset-1"
    )}>
      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-600">{label}</span>
    </div>
  );
}

function SuccessChart({ id }: { id: string }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-end">
      {/* Chart SVG */}
      <svg width="200" height="120" viewBox="0 0 200 120" fill="none" className="overflow-visible">
        <defs>
          <linearGradient id={`${id}-grad1`} x1="100" y1="0" x2="100" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--brand-200)" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`${id}-grad2`} x1="100" y1="20" x2="100" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--brand-200)" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`${id}-grad3`} x1="100" y1="40" x2="100" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--brand-200)" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Concentric Arcs */}
        {/* Using a mask or exact path would be better, simulating clipped circles */}
        <circle cx="100" cy="120" r="97" stroke={`url(#${id}-grad1)`} strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: "100px 120px" }}/>
        <circle cx="100" cy="120" r="76" stroke={`url(#${id}-grad2)`} strokeWidth="1" fill="none" className="animate-[spin_15s_linear_infinite_reverse]" style={{ transformOrigin: "100px 120px" }}/>
        <circle cx="100" cy="120" r="58" stroke={`url(#${id}-grad3)`} strokeWidth="1" fill="none" className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: "100px 120px" }}/>

        {/* Icons on Arcs - Positioned absolutely via trigonometry or fixed estimates based on design */}
        <g transform="translate(100, 120)">
            {/* Outer Ring Icons */}
            <g transform="rotate(-60) translate(0, -97) rotate(60)">
               <YouTubeIcon className="w-4 h-4 scale-75" />
            </g>
            <g transform="rotate(60) translate(0, -97) rotate(-60)">
               {/* Just a dot or small element */}
               <circle r="2" fill="var(--brand-300)" />
            </g>

            {/* Middle Ring Icons */}
            <g transform="rotate(-30) translate(0, -76) rotate(30)">
                <InstagramIcon className="w-5 h-5 scale-75" />
            </g>
            <g transform="rotate(30) translate(0, -76) rotate(-30)">
                <PinterestIcon className="w-5 h-5 scale-75" />
            </g>

            {/* Inner Ring Icons */}
            <g transform="rotate(-45) translate(0, -58) rotate(45)">
               <ThreadsIcon className="w-4 h-4 scale-75" />
            </g>
            <g transform="rotate(45) translate(0, -58) rotate(-45)">
               <TikTokIcon className="w-4 h-4 scale-75" />
            </g>
            <g transform="translate(0, -58)">
                <XIcon className="w-4 h-4 scale-75" />
            </g>
        </g>
      </svg>

      {/* Central Checkmark Bubble */}
      <div className="absolute bottom-4 flex items-center justify-center w-12 h-12 bg-brand-100 rounded-full shadow-inner border border-brand-200 z-10">
        <Check className="w-6 h-6 text-brand-600 stroke-[3]" />
      </div>

      <div className="absolute -bottom-1 text-center whitespace-nowrap">
        <span className="text-xs font-semibold text-brand-700 tracking-tight">Post Scheduled Successfully</span>
      </div>
    </div>
  )
}

// --- Icons (Extracted from SVG) ---

function InstagramIcon({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id={`${id}-r1`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.9 22.1) rotate(-90) scale(14.8 13.8)">
          <stop stopColor="#FFDD55" />
          <stop offset="0.1" stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient id={`${id}-r2`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3.4 7) rotate(78.6) scale(6.6 27.3)">
          <stop stopColor="#3771C8" />
          <stop offset="0.128" stopColor="#3771C8" />
          <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="30" height="30" rx="8" fill={`url(#${id}-r1)`} />
      <rect x="0" y="0" width="30" height="30" rx="8" fill={`url(#${id}-r2)`} />
      <path d="M15 7.6C10.9 7.6 10.4 7.6 8.8 7.7C7.2 7.7 6.1 8 5.1 8.4C4.1 8.8 3.3 9.3 2.5 10.1C1.7 10.9 1.2 11.7 0.8 12.7C0.4 13.7 0.1 14.8 0.1 16.4C0 18 0 18.5 0 22.6C0 26.7 0 27.2 0.1 28.8C0.1 30.4 0.4 31.5 0.8 32.5C1.2 33.5 1.7 34.3 2.5 35.1C3.3 35.9 4.1 36.4 5.1 36.8C6.1 37.2 7.2 37.5 8.8 37.5C10.4 37.6 10.9 37.6 15 37.6C19.1 37.6 19.6 37.6 21.2 37.5C22.8 37.5 23.9 37.2 24.9 36.8C25.9 36.4 26.7 35.9 27.5 35.1C28.3 34.3 28.8 33.5 29.2 32.5C29.6 31.5 29.9 30.4 29.9 28.8C30 27.2 30 26.7 30 22.6C30 18.5 30 18 29.9 16.4C29.9 14.8 29.6 13.7 29.2 12.7C28.8 11.7 28.3 10.9 27.5 10.1C26.7 9.3 25.9 8.8 24.9 8.4C23.9 8 22.8 7.7 21.2 7.7C19.6 7.6 19.1 7.6 15 7.6ZM15 20.3C12.1 20.3 9.7 17.9 9.7 15C9.7 12.1 12.1 9.7 15 9.7C17.9 9.7 20.3 12.1 20.3 15C20.3 17.9 17.9 20.3 15 20.3ZM23 9.7C24.1 9.7 25 8.8 25 7.7C25 6.6 24.1 5.7 23 5.7C21.9 5.7 21 6.6 21 7.7C21 8.8 21.9 9.7 23 9.7Z" fill="white" transform="translate(0 -3) scale(0.8) translate(3.5 3.5)" />
      {/* Simplified outline path for brevity, using standard icon scaling */}
      <path d="M15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13Z" fill="white" stroke="white" strokeWidth="2" />
      <circle cx="23" cy="7" r="1.5" fill="white" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M16.6 5.82C16.1 5.5 14.42 4.33 14.42 4.33C15.84 2.31 17.7 1.52 20.29 1.52C22.12 1.52 23.67 2.13 24.78 3.3C25.89 4.46 26.52 6.13 26.66 8.25C27.28 8.51 27.84 8.82 28.36 9.16C30.44 10.56 31.58 12.65 31.58 15.04C31.58 20.13 27.41 24.56 19.85 24.56C13.36 24.56 6.62 20.78 6.62 9.55C6.62 -1.63 13.15 -5.44 19.83 -5.44C22.92 -5.44 30.16 -4.98 32.88 4V4.66C30.77 -1.74 26.36 -2.76 22.31 -2.76C15.63 -2.76 11.85 1.31 11.85 9.97C11.85 17.74 16.07 21.86 22.4 21.86C27.61 21.86 31.49 19.16 31.49 15.2C31.49 12.5 29.23 11.21 29.11 11.21C28.67 13.52 27.48 17.41 22.28 17.41C19.25 17.41 16.63 15.31 16.63 12.57C16.63 8.65 20.35 7.23 23.29 7.23C24.39 7.23 25.71 7.31 26.4 7.45C26.4 6.25 25.39 4.21 22.84 4.21C20.5 4.21 19.9 4.97 19.15 5.83L19.15 5.84L16.6 5.82Z" fill="black" transform="scale(0.55) translate(12 12)" />
    </svg>
  );
}

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 12.8C16.48 14.1 15.82 15.1 14.92 15.7C14.02 16.3 12.92 16.6 11.82 16.6C10.72 16.6 9.72 16.3 8.92 15.7C8.12 15.1 7.62 14.3 7.62 13.4C7.62 12.5 8.12 11.7 8.92 11.1C9.72 10.5 10.72 10.2 11.82 10.2C12.92 10.2 13.92 10.5 14.72 11.1C15.02 11.3 15.32 11.6 15.52 11.9C15.72 11.2 15.82 10.5 15.82 9.8C15.82 8.7 15.42 7.7 14.62 6.9C13.82 6.1 12.72 5.7 11.52 5.7C9.92 5.7 8.52 6.3 7.42 7.4C6.32 8.5 5.72 10 5.72 11.8C5.72 13.6 6.32 15.1 7.42 16.2C8.52 17.3 9.92 17.9 11.52 17.9C13.12 17.9 14.52 17.3 15.62 16.2L17 17.6C15.5 19.1 13.6 19.9 11.5 19.9C9.4 19.9 7.5 19.1 6 17.6C4.5 16.1 3.7 14.1 3.7 11.8C3.7 9.5 4.5 7.5 6 6C7.5 4.5 9.4 3.7 11.5 3.7C13.6 3.7 15.5 4.5 17 6C18.2 7.2 18.9 8.8 18.9 10.5C18.9 11.3 18.8 12.1 18.5 12.8L16.64 12.8ZM11.82 14.6C12.42 14.6 12.92 14.4 13.32 14C13.72 13.6 13.92 13.1 13.92 12.5C13.92 11.9 13.72 11.4 13.32 11C12.92 10.6 12.42 10.4 11.82 10.4C11.22 10.4 10.72 10.6 10.32 11C9.92 11.4 9.72 11.9 9.72 12.5C9.72 13.1 9.92 13.6 10.32 14C10.72 14.4 11.22 14.6 11.82 14.6Z" fill="black"/>
    </svg>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.9 10.9C13.9 12.6 12.5 14 10.8 14C10.2 14 9.6 13.8 9.2 13.4C9.2 13.4 8.8 15.1 8.7 15.4C8.5 16 8.2 16.6 7.9 17C8.6 17.2 9.3 17.3 10.1 17.3C14.2 17.3 17.6 13.9 17.6 9.8C17.6 5.6 14.2 2.3 10.1 2.3C5.9 2.3 2.6 5.6 2.6 9.8C2.6 11.7 3.3 13.4 4.5 14.7C4.6 14.8 4.7 14.8 4.8 14.7C4.9 14.6 5 14.2 5 14C5 13.9 5.2 13 5.4 12.2C5.4 12 5.4 11.9 5.3 11.8C5 11.4 4.8 10.9 4.8 10.3C4.8 8.1 6.5 6.4 8.7 6.4C10.6 6.4 11.9 7.7 11.9 9.2C11.9 10.2 11.3 11 10.5 11C9.7 11 9.1 10.4 9.2 9.5C9.4 8.5 9.7 7.5 9.7 6.8C9.7 6.2 8.7 6.2 8.3 6.9C8 7.3 7.8 7.8 7.8 8.3C7.8 8.8 8 9.2 8.2 9.5C7.3 9.9 6.8 10.8 6.8 11.8C6.8 13.7 8.3 15.2 10.2 15.2C11.9 15.2 13.3 13.8 13.9 12.1C14.3 11.7 14.3 11.3 13.9 10.9Z" fill="#CB1F27"/>
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h0zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" fill="#000000"/>
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M19.615 3.184C21.311 3.368 22.25 4.697 22.25 8.125V15.875C22.25 19.303 21.311 20.632 19.615 20.816C17.919 21 12 21 12 21C12 21 6.081 21 4.385 20.816C2.689 20.632 1.75 19.303 1.75 15.875V8.125C1.75 4.697 2.689 3.368 4.385 3.184C6.081 3 12 3 12 3C12 3 17.919 3 19.615 3.184Z" fill="#FF0000"/>
      <path d="M10 15L16 12L10 9V15Z" fill="white"/>
    </svg>
  );
}