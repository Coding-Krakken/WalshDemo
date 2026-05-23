"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { SERVICES } from "@/lib/constants";
import { stagger } from "@/lib/animations";

export default function Services() {
  return (
    <section id="services" className="texture-overlay dark-steel border-y border-hazard/25 py-8">
      <div className="section-wrap">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-0 md:grid-cols-5"
        >
          {SERVICES.map(({ title, description, Icon }, index) => (
            <SectionReveal
              key={title}
              className={`px-4 py-5 text-center md:px-5 ${index < SERVICES.length - 1 ? "md:border-r md:border-hazard/25" : ""}`}
            >
              <Icon className="mx-auto h-11 w-11 text-hazard" />
              <h3 className="mt-4 font-heading text-[1.85rem] uppercase leading-none">{title}</h3>
              <p className="mt-2 text-base leading-snug text-white/75">{description}</p>
            </SectionReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}