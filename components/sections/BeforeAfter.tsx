"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { IMAGES } from "@/lib/constants";

export default function BeforeAfter() {
  const [position, setPosition] = useState(55);

  return (
    <section className="bg-black py-16">
      <div className="section-wrap">
        <h2 className="heading-tight text-6xl sm:text-7xl">Before & After</h2>
        <p className="font-heading text-3xl uppercase text-hazard">From Mess To Move-In Ready.</p>
        <div className="relative mt-8 h-[320px] overflow-hidden rounded-xl border border-white/20 sm:h-[440px]">
          <Image src={IMAGES.before} alt="Before demolition scene" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
            <Image src={IMAGES.after} alt="After cleanup and prep" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 flex items-center" style={{ left: `${position}%` }}>
            <div className="h-full w-0.5 bg-hazard" />
            <div className="absolute flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-hazard bg-black text-hazard shadow-lg">
              <ChevronsLeftRight className="h-5 w-5" />
            </div>
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="mt-4 w-full accent-hazard"
          aria-label="Before and after slider"
        />
      </div>
    </section>
  );
}