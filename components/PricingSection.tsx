import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Check, 
  Info, 
  ArrowUpRight, 
  Sparkles, 
  Copyright, 
  DollarSign, 
  ShieldCheck,
  CircleHelp
} from "lucide-react";

/**
 * Main Pricing Component
 * Implements a responsive pricing section with toggle controls and interactive cards.
 */
export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [freeTrial, setFreeTrial] = useState(true);

  return (
    <div className="min-h-screen w-full bg-white font-sans text-slate-800 py-16 px-4 md:px-8 flex flex-col items-center">
      
      {/* --- Header Section --- */}
      <div className="flex flex-col items-center gap-6 mb-16 text-center max-w-2xl mx-auto">
        {/* Pricing Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-700 bg-brand-50/50">
          <div className="w-5 h-5 flex items-center justify-center rounded-full bg-brand-100 text-brand-700">
            <DollarSign className="w-3.5 h-3.5" />
          </div>
          <span className="text-sm font-semibold text-slate-900">Pricing</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight">
          Get more views, with less effort.
        </h1>

        {/* Billing Toggle */}
        <div className="relative mt-4">
          <div className="bg-gray-50 border border-gray-100 rounded-full p-1.5 flex items-center shadow-inner">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
                billingCycle === "monthly"
                  ? "bg-brand-700 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
                billingCycle === "yearly"
                  ? "bg-brand-700 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              Yearly
            </button>
          </div>
          
          {/* 40% OFF Badge */}
          <div className="absolute -top-3 -right-6 bg-[#f68067] text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full animate-bounce md:animate-none">
            40% OFF
          </div>
        </div>

        {/* Free Trial Toggle */}
        <div className="flex items-center gap-3 mt-2">
          <span className="text-base font-medium text-slate-900">Free trial</span>
          <button
            onClick={() => setFreeTrial(!freeTrial)}
            className={cn(
              "w-[52px] h-[28px] rounded-full p-1 transition-colors duration-300 ease-in-out border border-gray-100",
              freeTrial ? "bg-brand-700" : "bg-gray-200"
            )}
            aria-label="Toggle free trial"
          >
            <div
              className={cn(
                "bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300",
                freeTrial ? "translate-x-6" : "translate-x-0"
              )}
            />
          </button>
        </div>
      </div>

      {/* --- Cards Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        
        {/* Creator Card */}
        <PricingCard
          title="Creator"
          price={billingCycle === "monthly" ? "29" : "19"}
          description="Best for growing creators"
          highlight={true}
          badgeText="Most Popular"
          icon={<Copyright className="w-6 h-6 text-slate-800" />}
          features={[
            { text: "15 connected social accounts", bold: true },
            { text: "Multiple accounts per platform" },
            { text: "Unlimited posts" },
            { text: "Schedule posts" },
            { text: "Carousel posts" },
            { text: "Bulk video scheduling" },
            { text: "Content studio access" },
            { text: "API add-on available", hasInfo: true },
            { text: "Human support" },
          ]}
        />

        {/* Pro Card */}
        <PricingCard
          title="Pro"
          price={billingCycle === "monthly" ? "49" : "29"}
          description="Best for scaling brands"
          highlight={false}
          badgeText="Best Deal"
          icon={<Sparkles className="w-6 h-6 text-slate-800" />}
          features={[
            { text: "Unlimited connected accounts", bold: true },
            { text: "Multiple accounts per platform" },
            { text: "Unlimited posts" },
            { text: "Schedule posts" },
            { text: "Carousel posts" },
            { text: "Bulk video scheduling" },
            { text: "Content studio access" },
            { text: "API add-on available", hasInfo: true },
            { text: "Viral growth consulting", hasInfo: true },
            { text: "Priority human support" },
          ]}
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Subcomponents                                 */
/* -------------------------------------------------------------------------- */

interface Feature {
  text: string;
  bold?: boolean;
  hasInfo?: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  highlight?: boolean;
  badgeText?: string;
  icon: React.ReactNode;
}

function PricingCard({
  title,
  price,
  description,
  features,
  highlight,
  badgeText,
  icon,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[29px] p-2 transition-all duration-300",
        highlight
          ? "bg-gray-50 border border-brand-700 shadow-[0_4px_26px_0_rgba(204,245,219,1)]"
          : "bg-[#fafafa] border border-gray-200"
      )}
    >
      {/* Inner Card */}
      <div className="relative h-full w-full bg-white rounded-[19px] p-6 md:p-8 flex flex-col overflow-hidden">
        
        {/* Top Right Badge */}
        {badgeText && (
          <div className="absolute top-0 right-0 z-10">
            <div className="bg-brand-700 rounded-bl-3xl px-6 py-2 shadow-sm">
              <span className="text-white text-xs font-bold tracking-wide">
                {badgeText}
              </span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full border border-gray-100">
            {icon}
          </div>
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
          <div className="bg-gray-50 rounded-lg px-4 py-1.5 w-fit border border-gray-100">
            <span className="text-sm font-medium text-gray-500">
              {description}
            </span>
          </div>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-4xl font-bold text-slate-800">${price}</span>
            <span className="text-gray-400 font-medium">/month</span>
          </div>
        </div>

        {/* Features List */}
        <div className="flex flex-col flex-grow">
          {features.map((feature, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-brand-700" strokeWidth={3} />
                  </div>
                  <span
                    className={cn(
                      "text-[15px]",
                      feature.bold
                        ? "font-bold text-slate-700"
                        : "font-medium text-gray-500"
                    )}
                  >
                    {feature.text}
                  </span>
                </div>
                {feature.hasInfo && (
                  <button className="text-gray-300 hover:text-gray-500 transition-colors">
                    <CircleHelp className="w-4 h-4" />
                  </button>
                )}
              </div>
              {/* Dashed Separator (except last item) */}
              {idx < features.length - 1 && (
                <div className="w-full h-px border-b border-dashed border-gray-200" />
              )}
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 space-y-4">
          <button className="group w-full h-12 bg-brand-700 hover:bg-brand-800 text-white rounded-full flex items-center justify-between px-2 pl-6 transition-all shadow-md hover:shadow-lg">
            <span className="font-medium text-[16px]">Start 7 day free trial</span>
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </button>
          
          <div className="flex items-center gap-2 justify-center text-xs md:text-[13px] text-gray-500 font-medium">
             <div className="p-0.5 bg-gray-100 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-gray-400" />
             </div>
             <span>$0.00 due today, cancel anytime</span>
          </div>
        </div>

      </div>
    </div>
  );
}