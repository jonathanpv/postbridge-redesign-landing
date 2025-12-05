import React from "react";
import { LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

// -----------------------------------------------------------------------------
// Types & Interfaces
// -----------------------------------------------------------------------------

interface ImpactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
}

// -----------------------------------------------------------------------------
// Sub-Components
// -----------------------------------------------------------------------------

/**
 * The faint green curved line running behind the cards.
 * Uses an SVG to ensure it scales responsively while matching the design curve.
 */
function BackgroundCurve({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <svg
        className="w-full h-full min-w-[1000px]"
        viewBox="0 0 1440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 350 C 200 300, 400 180, 720 180 C 1040 180, 1240 300, 1540 350"
          stroke="#E8F5E9" // Very light green/grey matching the aesthetic
          strokeWidth="2"
          strokeDasharray="4 4" // Optional: dashed effect if desired, solid otherwise
          className="opacity-60"
        />
        {/* Adds a second layer for the gradient feel if needed */}
        <path
          d="M-100 350 C 200 300, 400 180, 720 180 C 1040 180, 1240 300, 1540 350"
          stroke="url(#gradient-line)"
          strokeWidth="1.5"
          className="opacity-40"
        />
        <defs>
          <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#70cf91" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * The pill-shaped badge at the top.
 */
function ImpactBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 px-5 py-2",
        "bg-[#f8f8f8] border border-[#70cf91] rounded-full",
        "shadow-sm z-10",
        className
      )}
    >
      <LayoutGrid className="w-4 h-4 text-[#70cf91]" />
      <span className="font-semibold text-[15px] text-black tracking-tight">
        Our Impact
      </span>
    </div>
  );
}

/**
 * Individual statistic card with gradient border and specific shadow.
 */
function ImpactCard({ value, label, className, ...props }: ImpactCardProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[333px] h-[163px] group",
        "rounded-[25px] bg-white",
        // Replicating the specific multi-layer shadow from Figma
        "shadow-[0px_2px_5px_0px_rgba(118,183,124,0.1),0px_9px_9px_0px_rgba(118,183,124,0.09),0px_21px_13px_0px_rgba(118,183,124,0.05)]",
        className
      )}
      {...props}
    >
      {/* Gradient Border Trick: Using a pseudo-element mask or wrapper is common. 
          Here we use a wrapper approach for best browser compatibility. */}
      <div 
        className="absolute inset-0 rounded-[25px] p-[1px] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(131,239,169,1) 0%, rgba(255,255,255,0) 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      
      {/* Fallback for mask-composite support or simpler border visualization */}
      <div className="absolute inset-0 rounded-[25px] border border-[#83EFA9]/30 pointer-events-none" />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center z-10">
        <span 
          className="text-[40px] font-bold leading-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(90deg, #038932 0%, #2A354A 100%)'
          }}
        >
          {value}
        </span>
        <span className="mt-3 text-[15px] font-medium text-[#727272] tracking-[0.3px] uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Main Component
// -----------------------------------------------------------------------------

export default function ImpactSection() {
  return (
    <section className="relative w-full bg-white border-y border-[#ebebeb] overflow-hidden py-20 lg:h-[470px] lg:py-0 flex items-center justify-center">
      {/* Decorative Background */}
      <BackgroundCurve className="top-1/4" />

      <div className="relative w-full max-w-[1440px] px-4 md:px-8 mx-auto h-full flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="absolute top-10 lg:top-[58px]">
          <ImpactBadge />
        </div>

        {/* Cards Container */}
        {/* On Desktop: We use absolute positioning equivalents or relative offsets to match the staggered design */}
        <div className="mt-32 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 lg:flex lg:justify-center relative z-10">
          
          {/* Left Card - Lower position */}
          <div className="flex justify-center lg:mt-[47px] lg:mr-12 xl:mr-24">
            <ImpactCard 
              value="9" 
              label="Social Platforms Supported" 
            />
          </div>

          {/* Middle Card - Highest position */}
          <div className="flex justify-center lg:mt-0 lg:z-20">
            <ImpactCard 
              value="663,821" 
              label="Posts Published By Users" 
            />
          </div>

          {/* Right Card - Lower position */}
          <div className="flex justify-center lg:mt-[41px] lg:ml-12 xl:ml-24">
            <ImpactCard 
              value="2 min" 
              label="Average Time To Post Everywhere" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}