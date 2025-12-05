"use client"

import React, { useState } from "react"
import { AnimatePresence, motion, MotionConfig } from "motion/react"
import { Sparkles, Plus, Minus, HelpCircle, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Data extraction from Figma text layers
const faqData = [
  {
    id: "why-switch",
    title: "Why switch from Buffer or Hootsuite?",
    content: (
      <div className="flex flex-col gap-3 text-sm text-foreground/90">
        <p className="font-semibold">
          Same core features, 1/10th the price, actually simple to use.
        </p>
        <p className="leading-7">
          Tools like Buffer and Hootsuite charge $75-$200/month for features
          most people never use. Post bridge focuses on what matters: posting to
          all your platforms quickly and reliably.
        </p>
        <p className="leading-7">
          No bloated dashboards, no enterprise features you don't need. Just
          connect your accounts, create your post, and publish everywhere in 30
          seconds.
        </p>
        <p className="leading-7">
          Plus you get human support from jack (the founder) instead of waiting
          days for ticket responses.
        </p>
      </div>
    ),
  },
  {
    id: "platforms",
    title: "What social platforms do you support?",
    content: "We currently support Twitter (X), LinkedIn, Facebook, Instagram, and TikTok. Pinterest and YouTube Shorts are on our immediate roadmap.",
  },
  {
    id: "accounts",
    title: "How many social accounts can I connect?",
    content: "You can connect unlimited accounts on our Pro plan. The Starter plan includes up to 5 accounts per platform.",
  },
  {
    id: "definition",
    title: "What is a social account?",
    content: "A social account refers to a specific profile on a platform (e.g., one LinkedIn personal profile, one Facebook Page, or one Instagram Business account).",
  },
  {
    id: "duplicates",
    title: "Can I connect 2 accounts to the same platform?",
    content: "Yes! You can connect multiple profiles from the same platform (e.g., your personal LinkedIn and your company's LinkedIn page) and manage them from one dashboard.",
  },
  {
    id: "limits",
    title: "How many posts can I make and schedule per month?",
    content: "There are no limits on posting. Whether you post once a week or 50 times a day, we've got you covered with unlimited scheduling.",
  },
]

export default function FAQSection() {
  const [value, setValue] = useState<string[]>(["why-switch"]) // Default open item

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}>
      <section className="relative w-full overflow-hidden bg-background py-16 md:py-24">
        <div className="container mx-auto max-w-[1440px] px-4 md:px-6">
          <div className="flex flex-col items-center">
            
            {/* --- Badge --- */}
            <div className="relative mb-6 flex h-[37px] w-[85px] items-center justify-center overflow-hidden rounded-[67px] border border-[#70cf91] bg-[#f8f8f8]">
              {/* Decorative Icon Blob Replacement */}
              <div className="absolute left-[7px] top-[4px] z-10 flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white/50">
                 <HelpCircle className="h-4 w-4 text-[#70cf91]" />
              </div>
              <span className="relative z-[3] ml-5 font-sans text-[15px] font-semibold leading-[18.9px] text-black">
                FAQ
              </span>
            </div>

            {/* --- Main Title --- */}
            <h2 className="mb-12 text-center font-sans text-[28px] font-bold leading-tight text-[#333c4d] md:text-[35px] md:leading-[44px]">
              Frequently Asked Questions
            </h2>

            {/* --- Accordion List --- */}
            <div className="flex w-full max-w-[753px] flex-col gap-5">
              {faqData.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={value.includes(item.id)}
                  onToggle={() => setValue(value.includes(item.id) ? [] : [item.id])}
                />
              ))}
            </div>

            {/* --- View More Button --- */}
            <div className="mt-12">
              <button className="group relative flex h-[37px] w-[129px] items-center justify-center overflow-hidden rounded-[63px] border border-[#f8f8f8] bg-[#66cc8a] transition-all hover:bg-[#5bb87c] hover:shadow-lg">
                <span className="font-sans text-[16px] font-medium leading-[20px] text-black">
                  View more
                </span>
                <ChevronRight className="ml-1 h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </MotionConfig>
  )
}

// --- Sub-Components ---

type AccordionItemProps = {
  item: { id: string; title: string; content: React.ReactNode }
  isOpen: boolean
  onToggle: () => void
}

const itemVariants = {
  closed: {
    borderRadius: 12,
    backgroundColor: "white",
    boxShadow: "none",
    borderWidth: 1,
    borderColor: "#e2e2e2",
    borderStyle: "solid",
  },
  open: {
    borderRadius: 19,
    backgroundColor: "#f8f8f8",
    boxShadow: "0 4px 11px 0 rgba(0,0,0,0.09)",
    borderWidth: 0,
    borderColor: "transparent",
    borderStyle: "solid",
  },
}

const buttonVariants = {
  closed: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 16,
    paddingRight: 16,
  },
  open: {
    paddingTop: 21,
    paddingBottom: 2,
    paddingLeft: 21,
    paddingRight: 21,
  },
}

const titleVariants = {
  closed: { color: "#333c4d" },
  open: { color: "#66cc8a" },
}

const contentWrapperVariants = {
  closed: { y: 0 },
  open: { y: -7 },
}

const leftVariants = {
  closed: { x: 0 },
  open: { x: -5 },
}

const rightVariants = {
  closed: { x: 0 },
  open: { x: 5 },
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <motion.div
      layout
      className="relative overflow-hidden"
      variants={itemVariants}
      animate={isOpen ? "open" : "closed"}
      initial={false}
    >
      <motion.button
        className="flex w-full items-start justify-between text-left"
        onClick={onToggle}
        variants={buttonVariants}
        animate={isOpen ? "open" : "closed"}
        initial={false}
        whileTap={{ scale: 0.995 }}
      >
        <motion.div
          className="flex w-full items-start justify-between"
          variants={contentWrapperVariants}
          animate={isOpen ? "open" : "closed"}
          initial={false}
        >
          <motion.div
            className="flex items-center gap-4"
            variants={leftVariants}
            animate={isOpen ? "open" : "closed"}
            initial={false}
          >
            {/* Icon Container */}
            <div className="flex h-[31px] w-[33px] shrink-0 items-center justify-center rounded-[6px] bg-white shadow-sm">
              <Sparkles className="h-[18px] w-[18px] fill-[#66cc8a] text-[#66cc8a]" />
            </div>

            {/* Title */}
            <motion.h3
              className="font-sans text-[16px] font-semibold leading-[20px]"
              variants={titleVariants}
              animate={isOpen ? "open" : "closed"}
              initial={false}
            >
              {item.title}
            </motion.h3>
          </motion.div>

          {/* Toggle Icon (Plus/Minus) */}
          <motion.div
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#333c4d]/50 transition-transform duration-300"
            variants={rightVariants}
            animate={isOpen ? "open" : "closed"}
            initial={false}
          >
            {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          </motion.div>
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { height: "auto", opacity: 1 },
              closed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-[20px] pb-[25px] pl-[64px] pt-2">
              <div className="font-sans text-[14px] leading-[28px] text-black">
                {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}