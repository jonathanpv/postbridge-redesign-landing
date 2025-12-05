"use client";

import { useState } from "react";
import Sheet from ".";

function SheetDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 p-12">
      <Sheet open={open} close={() => setOpen(false)} title="Cool Daddy">
        <div className="flex flex-col items-center justify-center gap-8 p-4 py-12 text-center text-black md:p-12">
          <div className="relative size-[150px] overflow-hidden rounded-[24px] shadow-[-76px_50px_26px_0px_rgba(0,0,0,0.00),_-49px_32px_23px_0px_rgba(0,0,0,0.04),_-28px_18px_20px_0px_rgba(0,0,0,0.12),_-12px_8px_15px_0px_rgba(0,0,0,0.21),_-3px_2px_8px_0px_rgba(0,0,0,0.24)]">
            <img
              draggable={false}
              className="absolute inset-0"
              src="https://images.unsplash.com/photo-1509828945144-552b3b1a968d?q=80&w=500&auto=format&fit=crop"
              alt="cool"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-ultra text-3xl">Follow obsession</p>
            <p className="mt-3 text-sm font-medium text-balance opacity-60">
              Violent output is the only way out. Your life doesn't change at a
              desk. On a screen. Letting days pass by with every plan you make.
              Your life changes when you do things and create things. You stop
              focusing on you. You start focusing on others. Service and
              creation become a default state. Iteration becomes a drug. Living
              becomes art. And everything you share, attracts everything you
              want.
            </p>
            <a
              href="https://x.com/zachpogrob"
              target="_blank"
              className="italic opacity-40"
            >
              -zach
            </a>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer rounded-full bg-black px-10 py-4 text-xl font-bold text-white"
          >
            Got it!
          </button>
        </div>
      </Sheet>

      <div className="scale-120">
        <button onClick={() => setOpen(true)}>Open Sheet</button>
      </div>
    </div>
  );
}
export default SheetDemo;
