import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <section className={cn("relative flex flex-col items-center justify-center py-12 text-center font-sans", className)}>
      
      {/* 1. Badge Section */}
      <div className="mb-6 flex items-center gap-2 rounded-full border border-[#afdfc0] bg-[#fbfbfb] px-4 py-2 shadow-sm">
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-12-04/OUhZZoh1LN.png" 
          alt="icon" 
          className="h-5 w-5 object-contain"
        />
        <span className="text-sm font-medium text-[#575757]">
          Simplify your social workflow
        </span>
      </div>

      {/* 2. Main Headline with Highlight Animation */}
      <h1 className="relative z-10 mb-6 max-w-3xl text-5xl font-bold leading-tight text-[#333c4d] md:text-6xl md:leading-[1.1]">
        <span className="relative inline-block px-2">
            {/* The Highlight Component */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="absolute left-0 top-0 -z-10 h-full w-full border-l-[3px] border-[#78d298] bg-gradient-to-r from-[#c0f4d3] to-transparent"
            />
            The social media
        </span>
        <br />
        scheduler for{" "}
        <span className="font-serif italic font-normal text-[#333c4d]">
          founders
        </span>
      </h1>

      {/* 3. Subtext with Inline Avatar */}
      <div className="relative z-10 mb-8 max-w-lg px-4 text-lg font-medium leading-relaxed text-[#333c4d]">
        <p>
          post to all social platforms from one dashboard. easy to use, fairly
          priced, with human support from jack
          <span className="inline-block align-middle ml-2">
             <img
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-12-04/jn3130KjWF.png"
              alt="Jack"
              className="h-8 w-8 rounded-full object-cover"
            />
          </span>
          .
        </p>
      </div>

      {/* 4. Social Proof / Used By */}
      <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
        {/* Avatars Strip */}
        <img
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-12-04/McH5eCe9xp.png"
          alt="User avatars"
          className="h-9 object-contain"
        />
        <p className="text-base font-medium text-[#6f6f6f]">
          Used by <span className="font-bold text-black">1,396</span> happy customers
        </p>
      </div>

      {/* 5. CTA Button */}
      <button className="group flex items-center gap-2 rounded-full border border-[#bbffd3] bg-[#66cc8a] px-8 py-3 text-base font-medium text-black shadow-[0_3px_7px_0_rgba(118,183,124,0.29)] transition-transform hover:scale-105 active:scale-95">
        Try it for free
        <img 
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-12-04/PaLkJUCmK0.png" 
            alt="arrow"
            className="h-3 w-3 object-contain transition-transform group-hover:translate-x-1"
        />
      </button>

    </section>
  );
};