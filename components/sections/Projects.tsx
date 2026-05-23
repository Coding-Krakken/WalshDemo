"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { IMAGES } from "@/lib/constants";

const labels = ["Interior Demolition", "Exterior Demolition", "Debris Removal", "Site Cleanup"];

export default function Projects() {
  return (
    <section id="projects" className="texture-overlay dark-steel py-14">
      <div className="section-wrap">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="heading-tight text-[clamp(3.2rem,6vw,4.8rem)]">Our Recent Projects</h2>
            <p className="font-heading text-[1.7rem] uppercase text-hazard">See The Quality Of Our Work.</p>
          </div>
          <a href="#contact" className="outline-button">
            View All Projects
          </a>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {IMAGES.projects.map((src, index) => (
            <SectionReveal key={src}>
              <motion.article whileHover={{ y: -4 }} className="group overflow-hidden rounded-lg border border-white/15 bg-black">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={src}
                    alt={labels[index]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1280px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="bg-hazard px-4 py-2.5 text-center">
                  <p className="font-heading text-[1.75rem] uppercase leading-none text-black">{labels[index]}</p>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}