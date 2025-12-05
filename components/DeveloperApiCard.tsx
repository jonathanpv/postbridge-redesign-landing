import * as React from "react"
import Image from "next/image"
import { Code2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface DeveloperApiCardProps extends React.ComponentProps<"div"> {
  /**
   * Title of the card
   * @default "Build with post bridge"
   */
  title?: string
  /**
   * Description text
   * @default "Integrate multi-platform posting into your apps and workflows. Perfect for agencies, custom tools, and automation."
   */
  description?: string
}

export function DeveloperApiCard({
  title = "Build with post bridge",
  description = "Integrate multi-platform posting into your apps and workflows. Perfect for agencies, custom tools, and automation.",
  className,
  ...props
}: DeveloperApiCardProps) {
  return (
    <div
      className={cn(
        "group relative w-full max-w-[1072px] overflow-hidden rounded-[32px] border border-[#ebebeb] bg-white",
        className
      )}
      {...props}
    >
      {/* Decorative Background Pattern */}
      {/* TODO: Replace src with actual background asset from design */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bg-pattern-api.png" 
          alt="Background pattern"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Fallback gradient if image is missing during dev */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-start justify-between gap-8 px-6 py-8 md:flex-row md:items-center md:px-[93px] md:py-[40px]">
        
        {/* Left Column: Content */}
        <div className="flex max-w-[558px] flex-col items-start">
          
          {/* Badge */}
          <div className="mb-[14px] inline-flex h-[33px] items-center gap-2.5 rounded-full bg-[#e4eee8] pl-4 pr-5 transition-colors group-hover:bg-[#dbece1]">
            <Code2 className="h-[17px] w-[17px] text-[#0eb74a]" strokeWidth={2.5} />
            <span className="font-sans text-[15px] font-medium leading-none text-[#0eb74a]">
              Developer API
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-3 font-sans text-[28px] font-bold leading-tight text-[#333c4d] md:text-3xl">
            {title}
          </h2>

          {/* Description */}
          <p className="mb-[18px] font-sans text-base leading-[1.62] text-[#4f596d]">
            {description}
          </p>

          {/* Pricing Info */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-sm md:text-base">
            <span className="font-semibold text-[#0a0b0c]">
              $5/month or $50/year
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-[#929394] sm:block" />
            <span className="text-[#787a80]">
              Requires active subscription
            </span>
          </div>
        </div>

        {/* Right Column: Actions */}
        <div className="flex w-full flex-col gap-[18px] sm:w-auto md:mt-6">
          <ButtonPrimary>
            View API Docs
          </ButtonPrimary>
          
          <ButtonSecondary>
            Get API Keys
          </ButtonSecondary>
        </div>
      </div>
    </div>
  )
}

// --- Sub-components for consistency and reusability ---

function ButtonPrimary({ className, children, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "inline-flex h-[48px] w-full min-w-[176px] items-center justify-center rounded-[31px]",
        // Using brand-700 (#66CC8A) as defined in globals, which matches the design's #66cc8a
        "bg-brand-700 text-black transition-all hover:bg-brand-600 hover:shadow-md active:scale-95",
        "font-sans text-[16px] font-medium leading-5",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

function ButtonSecondary({ className, children, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "inline-flex h-[48px] w-full min-w-[176px] items-center justify-center rounded-[31px]",
        "border border-[#aaaaaa] bg-white text-black transition-all hover:bg-gray-50 hover:border-gray-400 active:scale-95",
        "font-sans text-[16px] font-medium leading-5",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}