import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CompanyIcon } from "@/components/icons/CompanyIcon";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  items: FooterLink[];
}

const FOOTER_DATA: Record<string, FooterSection> = {
  links: {
    title: "LINKS",
    items: [
      { label: "Support", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Affiliates", href: "#" },
    ],
  },
  platforms: {
    title: "PLATFORMS",
    items: [
      { label: "Twitter/X scheduler", href: "#" },
      { label: "Instagram scheduler", href: "#" },
      { label: "Linkedln scheduler", href: "#" },
      { label: "Facebook scheduler", href: "#" },
      { label: "TikTok scheduler", href: "#" },
      { label: "YouTube scheduler", href: "#" },
      { label: "Bluesky scheduler", href: "#" },
      { label: "Threads scheduler", href: "#" },
      { label: "Pinterest scheduler", href: "#" },
    ],
  },
  tools: {
    title: "FREE TOOLS",
    items: [
      { label: "Growth Guide", href: "#" },
      { label: "Instagram Grid Maker", href: "#" },
      { label: "Instagram Carousel Splitter", href: "#" },
      { label: "Instagram Handle Checker", href: "#" },
      { label: "TikTok Username Checker", href: "#" },
      { label: "TikTok Caption Generator", href: "#" },
      { label: "Linkedln Text Formatter", href: "#" },
      { label: "YouTube Title Checker", href: "#" },
      { label: "YouTube Tag Generator", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    items: [
      { label: "Terms of services", href: "#" },
      { label: "Privacy policy", href: "#" },
    ],
  },
};

export function Footer({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        "relative w-full overflow-hidden bg-background pt-20 pb-12 md:pb-0 text-foreground",
        className
      )}
      {...props}
    >
      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between mb-32 md:mb-48">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:w-[320px]">
            <Link href="/" className="flex items-center gap-3 group">
              <CompanyIcon className="w-8 h-8 text-foreground transition-transform group-hover:scale-105" />
              <span className="font-sans text-xl font-semibold tracking-tight text-foreground">
                post bridge
              </span>
            </Link>
            
            <p className="max-w-[290px] text-sm leading-relaxed text-muted-foreground/90">
              Post content to multiple social media platforms at the same time,
              all-in one place. Cross posting made easy.
            </p>
            
            <div className="mt-4 lg:mt-12">
              <p className="text-[13px] text-muted-foreground/70 font-medium">
                Copyright © 2025 - All rights reserved
              </p>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-12">
            {Object.values(FOOTER_DATA).map((section) => (
              <div key={section.title} className="flex flex-col gap-6">
                <h3 className="font-sans text-base font-bold text-foreground">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-1">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="inline-block py-1.5 text-[15px] text-muted-foreground/80 transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large Faded Background Text */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full select-none overflow-hidden leading-none z-0">
        <div className="relative flex w-full justify-center">
          {/* 
            The text is positioned to be partially cut off at the bottom.
            The gradient mask creates the "fade" effect into the background.
          */}
          <span 
            className="translate-y-[20%] whitespace-nowrap text-center font-sans text-[18vw] font-bold tracking-tighter text-brand-400 lg:text-[230px]"
            aria-hidden="true"
          >
            post bridge
          </span>
          
          {/* Subtle gradient overlay to smooth the text fading into the bottom edge */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent h-full w-full opacity-80" />
        </div>
      </div>
    </footer>
  );
}