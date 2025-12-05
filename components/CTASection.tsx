import React from "react";
import { cn } from "@/lib/utils";

// Social Icons - Using SVGs to match the specific brand logos in the design
// Replaces external image assets with inline vectors for better performance and styling control
const Icons = {
  X: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h.001Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  TikTok: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  ),
  Instagram: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Facebook: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.594v.376h3.428l-.532 3.667h-2.896v7.981H9.101z" />
    </svg>
  ),
};

interface FloatingIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  rotation?: string;
  delay?: string;
}

const FloatingIcon = ({
  icon,
  rotation = "rotate-0",
  className,
  ...props
}: FloatingIconProps) => {
  return (
    <div
      className={cn(
        "absolute flex items-center justify-center bg-white rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.11)]",
        "w-14 h-14 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px]",
        "transition-transform hover:scale-110 hover:z-20 duration-300 ease-out cursor-pointer",
        rotation,
        className
      )}
      {...props}
    >
      {icon}
    </div>
  );
};

export default function CTASection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto overflow-hidden bg-white border border-[#ebebeb] py-20 md:py-32 rounded-3xl">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Subtle radial gradient to center focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.5)_100%)] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Floating Icons Container - Positioned absolutely relative to the center container */}
        {/* We use responsive positioning to ensure they don't overlap text on mobile */}
        
        {/* Top Left - X/Twitter */}
        <FloatingIcon
          icon={<Icons.X className="w-7 h-7 text-slate-400" />}
          rotation="rotate-[6deg]"
          className="left-4 top-0 sm:left-12 sm:top-[-20px] md:left-[10%] md:top-[-40px]"
        />

        {/* Top Right - TikTok */}
        <FloatingIcon
          icon={<Icons.TikTok className="w-8 h-8 text-slate-400" />}
          rotation="rotate-[174deg]"
          className="right-4 top-4 sm:right-12 sm:top-[-10px] md:right-[15%] md:top-[-30px]"
        />

        {/* Bottom Left - Instagram */}
        <FloatingIcon
          icon={<Icons.Instagram className="w-8 h-8 text-slate-400" />}
          rotation="-rotate-[29deg]"
          className="left-6 bottom-[-60px] sm:left-20 md:left-[18%] md:bottom-[-40px]"
        />

        {/* Bottom Right - Facebook */}
        <FloatingIcon
          icon={<Icons.Facebook className="w-8 h-8 text-slate-400" />}
          rotation="-rotate-[150deg]"
          className="right-6 bottom-[-50px] sm:right-20 md:right-[20%] md:bottom-[-20px]"
        />

        {/* Main Content */}
        <div className="max-w-3xl mx-auto space-y-8 relative z-20">
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-black leading-[1.2]">
            Ready to get{" "}
            <span className="text-[#66cc8a] dark:text-[#66cc8a]">started</span>?
          </h2>

          <div className="space-y-2">
            <p className="text-lg md:text-[19px] text-[#505a6d] leading-relaxed">
              Join thousands of busy founders who save hours every week with post bridge.
            </p>
            <p className="text-lg md:text-[19px] text-[#505a6d] leading-relaxed">
              Start your free trial today.
            </p>
          </div>

          <div className="pt-4">
            <button
              className={cn(
                "group relative inline-flex items-center justify-center",
                "bg-[#66cc8a] hover:bg-[#57b678] text-black font-medium",
                "text-base px-8 py-3 rounded-full",
                "border border-[#f8f8f8]",
                "transition-all duration-200 ease-in-out shadow-sm hover:shadow-md",
                "active:scale-95"
              )}
            >
              Try for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}