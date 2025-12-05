import React from "react";

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
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FR5e4r_QYfA"
                title="how to use post bridge! (demo)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
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
      className={
        "overflow-hidden rounded-xl border border-gray-200 bg-white " +
        (className || "")
      }
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
