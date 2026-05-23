"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section className="bg-[#f8f8f8] py-14 text-black">
      <div className="section-wrap">
        <h2 className="heading-tight text-6xl text-black sm:text-7xl">Our Process</h2>
        <p className="mt-1 font-heading text-[2.2rem] uppercase text-hazard">Simple. Efficient. Stress-Free.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {PROCESS_STEPS.map(({ title, description, Icon }, index) => (
            <SectionReveal key={title}>
              <motion.div whileHover={{ y: -6 }} className="relative p-3 text-center">
                {index < PROCESS_STEPS.length - 1 && (
                  <span className="absolute -right-11 top-8 hidden items-center text-black/45 md:flex">
                    <span className="w-14 border-t-2 border-dashed border-black/30" />
                    <ChevronRight className="h-4 w-4" />
                  </span>
                )}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#111] text-hazard shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
                  <Icon className="h-8 w-8" />
                </div>
                <p className="mt-4 font-heading text-[1.85rem] uppercase">{index + 1}. {title}</p>
                <p className="mt-2 text-base leading-snug text-black/72">{description}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}