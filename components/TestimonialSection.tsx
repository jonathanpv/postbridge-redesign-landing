import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Play, Star, MessageSquareQuote, ArrowRight, X } from "lucide-react";

// --- Sub-components ---

function Badge({
  children,
  icon: Icon,
  className,
}: {
  children: React.ReactNode;
  icon?: React.ElementType;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-brand-500 bg-brand-50/50 px-4 py-1.5 backdrop-blur-sm",
        className
      )}
    >
      {Icon && <Icon className="h-4 w-4 text-brand-700" />}
      <span className="text-[15px] font-semibold text-foreground">
        {children}
      </span>
    </div>
  );
}

function StarRating({ rating = 5, className }: { rating?: number; className?: string }) {
  return (
    <div className={cn("flex gap-1", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-[18px] w-[18px] fill-[#FFB800] text-[#FFB800]",
            i >= rating && "fill-muted text-muted-foreground"
          )}
        />
      ))}
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-brand-100 px-1 py-0.5 rounded-[4px] text-brand-900 font-medium">
      {children}
    </span>
  );
}

// Custom icons for brands
const ProductHuntIcon = ({ className }: { className?: string }) => (
  <div className={cn("flex h-6 w-6 items-center justify-center rounded-full bg-[#EA532A] text-white font-bold text-xs", className)}>
    P
  </div>
);

const XIcon = ({ className }: { className?: string }) => (
  <div className={cn("flex h-6 w-6 items-center justify-center rounded-sm bg-black text-white", className)}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  </div>
);

// --- Card Components ---

interface CardProps extends React.ComponentProps<"div"> {
  user: {
    name: string;
    handle: string;
    avatar: string;
  };
  platform: "x" | "producthunt";
  stars?: number;
}

function ReviewCard({
  children,
  user,
  platform,
  stars = 5,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-4 rounded-[20px] border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md",
        className
      )}
      {...props}
    >
      {/* Platform Icon Absolute Positioned */}
      <div className="absolute bottom-6 right-6 text-muted-foreground/20">
        {platform === "x" ? <XIcon /> : <ProductHuntIcon />}
      </div>

      {children}
    </div>
  );
}

function UserProfile({
  name,
  handle,
  avatar,
}: {
  name: string;
  handle: string;
  avatar: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-[47px] w-[47px] overflow-hidden rounded-full border border-border/50">
        <Image src={avatar} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col">
        <span className="text-[18px] font-medium leading-tight text-foreground">
          {name}
        </span>
        <span className="text-[14px] font-medium text-[#929292]">
          {handle}
        </span>
      </div>
    </div>
  );
}

// --- Main Layout Component ---

export default function TestimonialSection() {
  return (
    <section className="relative w-full bg-background py-16 md:py-24 font-sans">
      <div className="container mx-auto max-w-[1440px] px-4 md:px-8">
        
        {/* Header Section */}
        <div className="relative mb-16 flex flex-col items-center text-center">
          <Badge icon={MessageSquareQuote} className="mb-6">
            Testimonial
          </Badge>
          
          <h2 className="max-w-2xl text-[35px] font-bold leading-[1.2] tracking-tight text-[#333c4d] md:text-4xl">
            post bridge is loved by{" "}
            <span className="text-brand-700">1,395 users</span>.<br />
            Here's what they are saying.
          </h2>

          {/* Floating View More Button (Desktop: Absolute, Mobile: Static) */}
          <div className="mt-8 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:mt-0">
            <button className="group flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-[16px] font-semibold text-white transition-all hover:bg-brand-800">
              View more
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            
            {/* Nil Ni Card */}
            <ReviewCard
              user={{
                name: "Nil Ni",
                handle: "@nilni",
                avatar: "/placeholder-avatar-1.jpg", // Replace with actual asset
              }}
              platform="producthunt"
            >
              <StarRating />
              <p className="text-[16px] font-medium leading-[1.8] text-[#414c60]">
                Thank u for making this!!!! All current products with similar
                pricing are too expensive which priced out small entrepreneurs.
                Thank u for making <Highlight>such a great product!</Highlight>
              </p>
              <div className="mt-2">
                <UserProfile
                  name="Nil Ni"
                  handle="@nilni"
                  avatar="https://ui-avatars.com/api/?name=Nil+Ni&background=random"
                />
              </div>
            </ReviewCard>

            {/* Moudjahid Moussa Card (Video) */}
            <ReviewCard
              user={{
                name: "Moudjahid Moussa",
                handle: "@moudjaonline",
                avatar: "https://ui-avatars.com/api/?name=Moudjahid+Moussa&background=random",
              }}
              platform="x"
              className="p-0 overflow-hidden pb-6"
            >
              {/* Video Thumbnail */}
              <div className="relative h-[290px] w-full bg-zinc-100">
                <Image
                  src="/placeholder-video-1.jpg" // Replace with actual asset
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20 cursor-pointer">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md shadow-lg transition-transform hover:scale-105">
                     <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="px-6 flex flex-col gap-4">
                 <StarRating />
                 <div className="mt-1">
                    <p className="text-[16px] font-medium leading-[1.8] text-[#414c60]">
                      I got <Highlight>2.6 Million views</Highlight> in 6 weeks. I have NEVER
                      GOTTEN 10K VIEWS BEFORE THIS. We used post bridge to manage
                      postings - posted 4 videos on every platform daily and did it
                      EVERYDAY!
                    </p>
                 </div>
                 <UserProfile
                  name="Moudjahid Moussa"
                  handle="@moudjaonline"
                  avatar="https://ui-avatars.com/api/?name=Moudjahid+Moussa&background=random"
                />
              </div>
            </ReviewCard>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            
            {/* Fer Card */}
            <ReviewCard
              user={{
                name: "Fer",
                handle: "@fer_chvs",
                avatar: "https://ui-avatars.com/api/?name=Fer&background=random",
              }}
              platform="x"
            >
              <StarRating />
              <p className="text-[16px] font-medium leading-[1.8] text-[#414c60]">
                Post bridge is <Highlight>the best investment</Highlight> i've made
                in months. It's simple and works, exactly what i was searching to
                handle multiple channels.
              </p>
              <div className="mt-2">
                <UserProfile
                  name="Fer"
                  handle="@fer_chvs"
                  avatar="https://ui-avatars.com/api/?name=Fer&background=random"
                />
              </div>
            </ReviewCard>

            {/* Sami Hindi Card (Video) */}
            <ReviewCard
              user={{
                name: "Sami Hindi",
                handle: "@DevBySami",
                avatar: "https://ui-avatars.com/api/?name=Sami+Hindi&background=random",
              }}
              platform="x"
            >
              <StarRating />
              <p className="text-[16px] font-medium leading-[1.47] text-[#414c60]">
                post bridge makes me <Highlight>100x more productive</Highlight>
              </p>
              
              <div className="relative mt-2 h-[200px] w-full overflow-hidden rounded-[16px] bg-zinc-100 sm:h-[240px]">
                <Image
                  src="/placeholder-video-2.jpg" // Replace with actual asset
                  alt="Sami Hindi Video"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20 cursor-pointer">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm shadow-xl transition-transform hover:scale-105">
                     <Play className="h-6 w-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <UserProfile
                  name="Sami Hindi"
                  handle="@DevBySami"
                  avatar="https://ui-avatars.com/api/?name=Sami+Hindi&background=random"
                />
              </div>
            </ReviewCard>

            {/* Soto Montero Card */}
            <ReviewCard
              user={{
                name: "Soto Montero",
                handle: "@thesotomontero",
                avatar: "https://ui-avatars.com/api/?name=Soto+Montero&background=random",
              }}
              platform="x"
            >
              <StarRating />
              <p className="text-[16px] font-medium leading-[1.8] text-[#414c60]">
                Time is money, and using post bridge daily has been{" "}
                <Highlight>saving me</Highlight> both for the last two weeks 👌
              </p>
              <div className="mt-2">
                 <UserProfile
                  name="Soto Montero"
                  handle="@thesotomontero"
                  avatar="https://ui-avatars.com/api/?name=Soto+Montero&background=random"
                />
              </div>
            </ReviewCard>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            
            {/* Patty Card (Chart Image) */}
            <ReviewCard
              user={{
                name: "Patty",
                handle: "@pattybuilds",
                avatar: "https://ui-avatars.com/api/?name=Patty&background=random",
              }}
              platform="x"
              className="p-0 overflow-hidden pb-6"
            >
              {/* Chart Image Container */}
              <div className="relative h-[290px] w-full bg-[#1A1A1A] p-4">
                 {/* Placeholder for the chart visualization */}
                 <div className="h-full w-full relative">
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between opacity-20">
                        <div className="w-full h-px bg-white"></div>
                        <div className="w-full h-px bg-white"></div>
                        <div className="w-full h-px bg-white"></div>
                    </div>
                    {/* Simulated Chart Line */}
                    <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                        <path d="M0 200 C 50 180, 100 220, 150 150 S 250 100, 300 120 S 350 50, 400 40" stroke="#818CF8" strokeWidth="3" fill="none" />
                        <circle cx="400" cy="40" r="4" fill="#818CF8" />
                    </svg>
                    {/* Labels */}
                    <div className="absolute bottom-2 left-2 text-white/50 text-xs">New customers</div>
                    <div className="absolute bottom-2 right-2 text-[#4FC97A] text-xs font-bold">+100.0%</div>
                    <div className="absolute top-1/2 left-20 bg-[#6366f1] text-white text-[10px] px-2 py-0.5 rounded-full">$0.00</div>
                    <div className="absolute top-[15%] right-10 bg-[#6366f1] text-white text-[10px] px-2 py-0.5 rounded-full">$47.28</div>
                 </div>
              </div>
              
              <div className="px-6 flex flex-col gap-4">
                <StarRating />
                <div className="mt-1">
                  <p className="text-[16px] font-medium leading-[1.8] text-[#414c60]">
                    [the content studio] has slowly been bringing in customers tho
                    and I appreciate you so much for that 🙏 +{" "}
                    <Highlight>saves me</Highlight> soooo much time can spend days
                    just building new shit cause all the marketing on autopilot.
                    Love it
                  </p>
                </div>
                <UserProfile
                  name="Patty"
                  handle="@pattybuilds"
                  avatar="https://ui-avatars.com/api/?name=Patty&background=random"
                />
              </div>
            </ReviewCard>

            {/* Dominick Card */}
            <ReviewCard
              user={{
                name: "Dominick",
                handle: "@dominickbdiaz",
                avatar: "https://ui-avatars.com/api/?name=Dominick&background=random",
              }}
              platform="producthunt"
            >
              <StarRating />
              <p className="text-[16px] font-medium leading-[1.8] text-[#414c60]">
                I wanted to say thank you for creating post-bridge. Your content
                studio has <Highlight>saved me</Highlight> WEEKS of time in
                literally less than a couple hours. This software is goated brotha.
              </p>
              <div className="mt-2">
                <UserProfile
                  name="Dominick"
                  handle="@dominickbdiaz"
                  avatar="https://ui-avatars.com/api/?name=Dominick&background=random"
                />
              </div>
            </ReviewCard>
          </div>
        </div>
      </div>
    </section>
  );
}