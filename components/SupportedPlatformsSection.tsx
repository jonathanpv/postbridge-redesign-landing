import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Cloud,
  AtSign,
  MoreHorizontal,
  Video,
  Pin,
} from "lucide-react";

/**
 * SupportedPlatforms Component
 *
 * A responsive grid of social media platform cards with a connecting timeline-style background line.
 * Implements the specific design shadows and typography provided in the Figma export.
 */

interface Platform {
  id: string;
  label: string;
  icon: React.ReactNode;
  isPlaceholder?: boolean;
}

// Data definition for the supported platforms
const rowOnePlatforms: Platform[] = [
  {
    id: "twitter",
    label: "Twitter / X",
    icon: <Twitter className="w-6 h-6 text-[#333c4d]" />,
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: <Instagram className="w-6 h-6 text-[#333c4d]" />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: <Linkedin className="w-6 h-6 text-[#333c4d]" />,
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: <Facebook className="w-6 h-6 text-[#333c4d]" />,
  },
  {
    id: "tiktok",
    label: "TikTok",
    // Lucide doesn't have a perfect TikTok match, using Video as semantic fallback
    icon: <Video className="w-6 h-6 text-[#333c4d]" />,
  },
];

const rowTwoPlatforms: Platform[] = [
  {
    id: "youtube",
    label: "YouTube",
    icon: <Youtube className="w-6 h-6 text-[#333c4d]" />,
  },
  {
    id: "bluesky",
    label: "Bluesky",
    icon: <Cloud className="w-6 h-6 text-[#333c4d]" />,
  },
  {
    id: "threads",
    label: "Threads",
    icon: <AtSign className="w-6 h-6 text-[#333c4d]" />,
  },
  {
    id: "pinterest",
    label: "Pinterest",
    // Lucide Pin is close to Pinterest
    icon: <Pin className="w-6 h-6 text-[#333c4d]" />,
  },
  {
    id: "more",
    label: "More to come",
    icon: (
      <div className="flex -space-x-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-slate-300 ring-1 ring-white" />
        <div className="h-2.5 w-2.5 rounded-full bg-slate-400 ring-1 ring-white" />
        <div className="h-2.5 w-2.5 rounded-full bg-slate-500 ring-1 ring-white" />
      </div>
    ),
    isPlaceholder: true,
  },
];

export default function SupportedPlatforms({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "relative mx-auto flex w-full max-w-[1440px] flex-col items-center overflow-hidden bg-background py-16 md:py-24",
        "border border-border/50", // Optional: matches the container border from figma
        className
      )}
      {...props}
    >
      {/* Header Section */}
      <div className="relative z-10 mb-16 px-4 text-center md:mb-20">
        <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-[#333c4d] md:text-[35px]">
          Supported Platforms
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg font-normal leading-relaxed text-[#4f596d] md:text-[19px]">
          These are all the platforms you can post to from within post bridge.
        </p>
      </div>

      {/* Platforms Grid Container */}
      <div className="relative flex w-full flex-col items-center gap-12 px-4 md:gap-16">
        
        {/* Row 1 */}
        <PlatformRow platforms={rowOnePlatforms} />

        {/* Row 2 */}
        <PlatformRow platforms={rowTwoPlatforms} />
        
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Sub-Components
// -----------------------------------------------------------------------------

function PlatformRow({ platforms }: { platforms: Platform[] }) {
  return (
    <div className="relative flex w-full max-w-5xl flex-wrap justify-center gap-8 md:gap-[83px]">
      {/* Connecting Line (Desktop) */}
      {/* We use a pseudo-element logic here: absolute div behind the items */}
      <div 
        className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 md:block"
        aria-hidden="true"
      >
        {/* Dashed line simulation matching the Figma dashed image style */}
        <div className="h-full w-full border-t border-dashed border-[#ebebeb] md:border-slate-200" />
      </div>

      {platforms.map((platform) => (
        <PlatformCard
          key={platform.id}
          label={platform.label}
          icon={platform.icon}
          variant={platform.isPlaceholder ? "muted" : "default"}
        />
      ))}
    </div>
  );
}

interface PlatformCardProps extends React.ComponentProps<"div"> {
  label: string;
  icon: React.ReactNode;
  variant?: "default" | "muted";
}

function PlatformCard({
  className,
  label,
  icon,
  variant = "default",
  ...props
}: PlatformCardProps) {
  return (
    <div
      className={cn(
        // Layout & Size
        "relative z-10 flex h-[123px] w-[121px] shrink-0 flex-col items-center justify-center gap-3 overflow-hidden rounded-[23px]",
        // Typography
        "text-center font-sans",
        // Variant Styles
        variant === "default" && [
          "bg-white text-[#333c4d]",
          // Complex shadow from Figma: 0px 3px 7px 0px rgba(31,111,39,0.2) + insets
          "shadow-[0_3px_7px_0_rgba(31,111,39,0.2)]",
          // Adding the subtle inner bevel/glare effect mentioned in the second export block
          "shadow-[0_3px_7px_0_rgba(31,111,39,0.2),inset_0_-7px_1px_0_#cceed0,inset_0_1px_4px_0_rgba(204,204,204,0.25)]",
        ],
        variant === "muted" && [
          "bg-[#fafafa] text-[#333c4d] border border-[#cacaca]",
          "shadow-[inset_0_1px_4px_0_rgba(203,203,203,0.25)]",
        ],
        className
      )}
      {...props}
    >
      {/* Icon Container */}
      <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full">
        {icon}
      </div>

      {/* Label */}
      <span className="px-2 text-[15px] font-medium leading-[1.2]">
        {label}
      </span>
    </div>
  );
}

export { SupportedPlatforms, PlatformCard };