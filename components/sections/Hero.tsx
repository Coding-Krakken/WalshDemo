"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CirclePlay } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { IMAGES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-line", { y: 90, opacity: 0, stagger: 0.12, duration: 0.8 })
        .from(".hero-copy", { y: 20, opacity: 0, duration: 0.6 }, "-=0.35")
        .from(".hero-ctas", { y: 20, opacity: 0, duration: 0.6 }, "-=0.25");

      if (imageWrapRef.current) {
        gsap.to(imageWrapRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: imageWrapRef.current,
            scrub: true,
            start: "top top",
            end: "bottom top"
          }
        });
      }
    },
    { scope: heroRef }
  );

  return (
    <section id="home" ref={heroRef} className="relative overflow-hidden bg-black pt-24 md:pt-26">
      <motion.div
        ref={imageWrapRef}
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.95, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={IMAGES.hero}
          alt="Excavator tearing down a residential structure"
          fill
          priority
          className="object-cover object-[66%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.72)_30%,rgba(0,0,0,0.26)_55%,rgba(0,0,0,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(255,205,70,0.2)_0%,transparent_44%)] mix-blend-soft-light" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 to-transparent" />
      </motion.div>

      <div className="section-wrap relative flex min-h-[74vh] items-center py-8 sm:py-10 lg:min-h-[78vh] lg:py-14">
        <div className="relative z-10 max-w-[38rem]">
          <div className="absolute -inset-y-8 -left-7 right-[-4.25rem] -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_58%,rgba(0,0,0,0.35)_82%,rgba(0,0,0,0)_100%)] sm:-left-10 sm:right-[-5.5rem] lg:-inset-y-10 lg:-left-12 lg:right-[-7rem]" />
          <div className="absolute -inset-y-8 -left-7 right-[-4.25rem] -z-10 hidden sm:block [clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)] bg-[linear-gradient(90deg,rgba(3,3,3,0.66)_0%,rgba(3,3,3,0.3)_100%)]" />

          <p className="hero-line font-heading text-[clamp(3.55rem,8.4vw,6.7rem)] uppercase leading-[0.86] text-white">
            Demo & Debris
          </p>
          <p className="hero-line font-heading text-[clamp(4.1rem,9.7vw,7.8rem)] uppercase leading-[0.86] text-hazard">
            Removal
          </p>
          <p className="hero-copy mt-3 max-w-[31rem] font-heading text-[clamp(2.15rem,5vw,3.05rem)] uppercase leading-[0.94] text-white">
            Complete Demo For Home Renovation.
          </p>
          <p className="hero-copy mt-4 max-w-[27rem] text-lg leading-relaxed text-white/90 sm:text-[1.2rem]">
            We take care of the demo so you
            <br className="hidden sm:block" /> can move forward with confidence.
          </p>

          <div className="hero-ctas mt-8 flex flex-wrap items-center gap-4">
            <a className="cta-button px-8" href="#contact">
              Request A Free Quote
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:text-hazard"
              href="#projects"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-hazard text-hazard">
                <CirclePlay className="h-5 w-5" />
              </span>
              See Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="hazard-divider" />
    </section>
  );
}