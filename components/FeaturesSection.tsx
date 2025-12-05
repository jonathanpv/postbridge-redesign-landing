import React from "react";
import { ArrowRight, Calendar, Clapperboard, Layers, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Imported Visual Components
import { CrossPostingSectionVisual } from "@/components/CrossPostingSection";
import { SchedulingSectionVisual } from "@/components/Illustration";
import { ContentManagementSectionVisual } from "@/components/ContentManagementSectionVisual";
import { ContentStudioVisual } from "@/components/ContentStudioSection";

// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

function SectionBadge({ className, children }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-[67px] border border-[#70cf91] bg-[#f8f8f8] px-4 py-1.5",
        "mx-auto mb-12 w-fit relative z-[3]",
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        <Layers className="h-4 w-4 text-black" />
      </div>
      <span className="font-sans text-[15px] font-semibold leading-[18.9px] text-black">
        {children}
      </span>
    </div>
  );
}

function FeatureIconBox({ icon: Icon, className }: { icon: React.ElementType, className?: string }) {
  return (
    <div 
      className={cn(
        "flex h-[46px] w-[50px] shrink-0 items-center justify-center rounded-[12px] bg-[#f7fffa]",
        "shadow-[0px_2px_4px_0px_#66cc8a1a,0px_7px_7px_0px_#66cc8a17,0px_15px_9px_0px_#66cc8a0d,0px_27px_11px_0px_#66cc8a03,0px_42px_12px_0px_#66cc8a00]",
        className
      )}
    >
      <Icon className="h-[29px] w-[29px] text-[#66cc8a]" />
    </div>
  );
}

interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: boolean;
}

function PillButton({
  className,
  variant = "primary",
  children,
  icon,
  ...props
}: PillButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex h-[46px] items-center justify-center rounded-[63px] px-8 text-[16px] font-medium leading-[20px] transition-all duration-200",
        variant === "primary"
          ? "border border-[#f8f8f8] bg-[#66cc8a] text-black hover:brightness-105 hover:shadow-md"
          : "border border-[#bcbcbc] bg-white text-[#4c5462] hover:bg-gray-50 hover:text-black",
        className
      )}
      {...props}
    >
      {children}
      {icon && (
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
}

// -----------------------------------------------------------------------------
// Main Feature Row Component
// -----------------------------------------------------------------------------

interface FeatureRowProps {
  reversed?: boolean;
  category: string;
  titleLight: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
  icon: React.ElementType;
  visual: React.ReactNode; 
}

function FeatureRow({
  reversed,
  category,
  titleLight,
  titleHighlight,
  titleSuffix = "",
  description,
  primaryAction,
  secondaryAction,
  icon,
  visual,
}: FeatureRowProps) {
  
  // Logic to determine gradient direction based on layout.
  // We want the green tint (rgba 102,204,138) to sit behind the visual, 
  // and fade to transparent behind the text.
  // 15% opacity (0.15) is used to ensure text remains readable.
  const gradientClass = reversed
    ? "bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,rgba(102,204,138,0.15)_100%)]" // Green on Left (Visual side)
    : "bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(102,204,138,0.15)_100%)]"; // Green on Right (Visual side)

  return (
    <div
      className={cn(
        "group relative flex w-full max-w-[1068px] flex-col overflow-hidden rounded-[20px] lg:h-[428px] lg:flex-row lg:items-center",
        gradientClass,
        reversed ? "lg:flex-row-reverse" : ""
      )}
    >
      {/* Content Side */}
      <div className={cn(
        "flex flex-1 flex-col items-start justify-center gap-6 p-6 lg:gap-8 lg:p-0",
        reversed ? "lg:ml-[60px]" : "lg:mr-[60px]" 
      )}>
        {/* Header Group */}
        <div className="flex items-center gap-[15px]">
          <FeatureIconBox icon={icon} />
          <span className="font-sans text-[15px] font-semibold leading-[18.9px] text-[#66cc8a] uppercase">
            {category}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-sans text-[32px] font-bold leading-tight text-[#333c4d] md:text-[37px] md:leading-[44px]">
          {titleLight}{" "}
          <br className="hidden md:block" />
          <span className="text-[#66cc8a]">{titleHighlight}</span>
          {titleSuffix && <span className="text-[#333c4d]">{titleSuffix}</span>}
        </h2>

        {/* Description */}
        <p className="max-w-[414px] font-sans text-[16px] font-normal leading-[29.92px] text-[#333c4d]">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-[16px] mt-2">
          <PillButton variant="primary" icon className="min-w-[169px]">
            {primaryAction}
          </PillButton>
          <PillButton variant="secondary" className="min-w-[136px]">
            {secondaryAction}
          </PillButton>
        </div>
      </div>

      {/* Visual Side */}
      <div className={cn(
        "relative flex items-center justify-center p-4 lg:p-0",
        "lg:absolute lg:top-[18px]",
        reversed ? "lg:left-[18px]" : "lg:right-[18px]"
      )}>
        <div className="h-[392px] w-[531px] overflow-hidden rounded-[14px] bg-white shadow-sm">
          {visual}
        </div>
      </div>
      
      {/* Spacer for Flexbox layout on desktop to push content to correct side */}
      <div className="hidden lg:block lg:w-[531px] lg:shrink-0" />
    </div>
  );
}

// -----------------------------------------------------------------------------
// Main Component
// -----------------------------------------------------------------------------

export default function FeaturesSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] border-x border-[#ebebeb] bg-white px-4 py-20 md:px-12 lg:px-[184px]">
      {/* Header Badge */}
      <div className="flex justify-center mb-[80px]">
        <SectionBadge>Features</SectionBadge>
      </div>

      {/* Features List */}
      <div className="flex flex-col gap-[86px] items-center">
        
        {/* Feature 1: Cross-Posting (Standard: Text Left, Visual Right) */}
        <FeatureRow
          category="Cross-posting"
          icon={Share2}
          titleLight="Post to all platforms"
          titleHighlight="instantly"
          description="Publish everywhere in 30 seconds, not 30 minutes. Manage all your personal and brand accounts without switching back and forth. Connect your social media accounts and publish your content across all platforms with a single click - no learning curve required."
          primaryAction="Start posting"
          secondaryAction="View platforms"
          visual={
            <CrossPostingSectionVisual className="w-full h-full" />
          }
        />

        {/* Feature 2: Scheduling (Reversed: Visual Left, Text Right) */}
        <FeatureRow
          reversed
          category="Scheduling"
          icon={Calendar}
          titleLight="Schedule posts"
          titleHighlight="effortlessly"
          description="Plan your content strategy ahead of time. Schedule posts across all platforms. Customize your posts perfectly per platform. Queue up your posts and let post bridge handle the rest."
          primaryAction="Start scheduling"
          secondaryAction="View demo"
          visual={
            <SchedulingSectionVisual className="w-full h-full" />
          }
        />

        {/* Feature 3: Content Management (Standard: Text Left, Visual Right) */}
        <FeatureRow
          category="Content Management"
          icon={Layers}
          titleLight="Manage content"
          titleHighlight="efficiently"
          description="View all your scheduled and published posts in one place. Track what's been posted, edit upcoming posts, and stay on top of your content strategy."
          primaryAction="Get started"
          secondaryAction="See pricing"
          visual={
            <ContentManagementSectionVisual className="w-full h-full" />
          }
        />

        {/* Feature 4: Content Studio (Reversed: Visual Left, Text Right) */}
        <FeatureRow
          reversed
          category="Content Studio"
          icon={Clapperboard}
          titleLight="Create videos"
          titleHighlight="easily"
          titleSuffix=" "
          description="Proven templates to quickly create videos for your brand. Basic drag-and-drop editor to customize for your needs."
          primaryAction="Try studio"
          secondaryAction="View Examples"
          visual={
            <ContentStudioVisual className="w-full h-full" />
          }
        />

      </div>
    </section>
  );
}