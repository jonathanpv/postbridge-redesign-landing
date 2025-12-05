import React from "react";
import Image from "next/image";
import { ArrowRight, User } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * FounderSection Component
 * 
 * Displays a "About the Founder" section with a bio card, profile image, and CTA.
 * Based on the provided Figma design using Plus Jakarta Sans and brand colors.
 */

function FounderSection({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "relative mx-auto w-full max-w-[1440px] overflow-hidden bg-background px-4 py-12 font-sans md:px-8 lg:py-24",
        className
      )}
      {...props}
    >
      {/* Top Badge - Centered */}
      <div className="mb-8 flex justify-center lg:mb-12">
        <div className="relative flex items-center gap-2 rounded-full border border-brand-400 bg-muted/30 px-5 py-2 pr-6">
          <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-background shadow-sm">
            {/* Placeholder for small badge icon */}
            <User className="h-4 w-4 text-brand-700" />
          </div>
          <span className="text-[15px] font-semibold text-foreground">
            About the founder
          </span>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Headlines & Text Card */}
        <div className="flex flex-col gap-6 lg:col-span-7 xl:col-span-8">
          {/* Headline */}
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-baseline sm:gap-4">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              heyo! it&apos;s <span className="text-brand-700">jack</span>
            </h2>
            <span className="text-base font-medium text-muted-foreground md:text-lg">
              (the guy who made post bridge)
            </span>
          </div>

          {/* Bio Card */}
          <div className="relative rounded-[20px] border border-brand-300 bg-card p-6 shadow-sm md:p-8">
            <div className="space-y-6 text-[15px] leading-[22px] tracking-[0.01em] text-muted-foreground">
              <p>
                last year i was spending{" "}
                <span className="font-semibold text-foreground">
                  over 1 hour every single day
                </span>{" "}
                posting the same content across all platforms.
              </p>
              
              <p>
                going from one app to another, then switching accounts multiple
                times, switching back and forth… it sucked.
              </p>

              <p>
                and what also sucked was the existing tools that i needed… they
                were{" "}
                <span className="font-semibold text-foreground">
                  way too expensive ($75-$200/month)
                </span>{" "}
                for my needs and{" "}
                <span className="font-semibold text-foreground">
                  way too damn complex.
                </span>
              </p>

              <p>
                i needed something{" "}
                <span className="font-semibold text-foreground">
                  lightweight and simple
                </span>
                , something{" "}
                <span className="font-semibold text-foreground">affordable.</span>
              </p>

              <p>
                i searched far and wide but couldn&apos;t find what i needed, so i
                built it myself. and thats how i made post bridge
              </p>

              <p>
                turns out{" "}
                <span className="font-semibold text-foreground">
                  thousands of others
                </span>
                , like you, are just like me! so i made it into a business
              </p>

              <p>
                since then I&apos;ve used post bridge daily to grow my own mobile app
                (now at{" "}
                <span className="font-semibold text-foreground">
                  100k+ downloads
                </span>
                ) and to generate{" "}
                <span className="font-semibold text-foreground">
                  100M+ views
                </span>{" "}
                just on my accounts alone
              </p>

              <p>
                all while spending{" "}
                <span className="font-semibold text-foreground">
                  less time than ever
                </span>{" "}
                managing my socials, using post bridge.
              </p>

              <p>
                and there are 1000+ founders using it to save hours every week
                too
              </p>

              <p>
                if you want to join them and save an hour this week you can try
                it for{" "}
                <span className="font-bold text-brand-700">FREE</span>, just
                click the button.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image & CTA */}
        <div className="flex flex-col items-center gap-8 lg:col-span-5 lg:items-start lg:pt-16 xl:col-span-4 xl:pl-12">
          {/* Profile Image */}
          <div className="relative aspect-square w-64 md:w-80 lg:w-full max-w-sm">
             {/* TODO: Replace src with actual profile image */}
            <Image
              src="/placeholder-founder.jpg" 
              alt="Jack - Founder of Post Bridge"
              fill
              className="rounded-full object-cover shadow-xl ring-4 ring-background"
            />
          </div>

          {/* CTA Button */}
          <button
            className={cn(
              "group relative flex items-center gap-3 rounded-full bg-brand-700 py-3 pl-8 pr-4 transition-all hover:bg-brand-800 hover:shadow-lg",
              "text-base font-medium text-white shadow-md active:scale-95"
            )}
          >
            <span>Try it for free</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export { FounderSection };