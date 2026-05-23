"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    return scrollY.on("change", (value) => {
      setSolid(value > 36);
    });
  }, [scrollY]);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      Boolean
    ) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        solid ? "border-white/10 bg-black/92 backdrop-blur-sm" : "border-transparent bg-black/35"
      }`}
    >
      <div className="section-wrap flex h-[86px] items-center justify-between">
        <a href="#home" className="group flex items-center gap-3">
          <div className="rounded-sm border border-hazard/60 p-1.5 text-hazard">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
              <path d="M3 18h2.8l2.3-5.5H6.3L3 18Zm7.2 0h2.7l1.7-4h4.2l.9 4H22l-2.8-12h-3.5L10.2 18Zm5.1-6.2 1.3-3.2h1.4l.7 3.2h-3.4Z" />
            </svg>
          </div>
          <div>
            <p className="font-heading text-[2.8rem] uppercase leading-none">Walsh&apos;s</p>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-hazard">
              Demo & Debris Removal
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-semibold uppercase tracking-wide ${
                activeHash === link.href ? "text-hazard" : "text-white/95"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-hazard transition-all duration-300 ${
                  activeHash === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href={COMPANY.phoneHref} className="cta-button gap-2 rounded-md px-5 py-2.5 text-base">
            <Phone className="h-4 w-4" />
            {COMPANY.phoneDisplay}
          </Link>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/45 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 34 }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[84vw] max-w-[360px] flex-col border-l border-white/15 bg-black px-6 py-7 md:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <p className="font-heading text-4xl uppercase leading-none text-hazard">Menu</p>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X />
                </button>
              </div>

              <div className="grid gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-semibold uppercase tracking-wide ${
                      activeHash === link.href ? "text-hazard" : "text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto">
                <Link href={COMPANY.phoneHref} className="cta-button w-full gap-2 text-center">
                  <Phone className="h-4 w-4" />
                  {COMPANY.phoneDisplay}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}