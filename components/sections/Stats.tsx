"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

function Counter({ value, suffix = "", triggered }: { value: number; suffix?: string; triggered: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let current = 0;
    const duration = 900;
    const step = Math.max(1, Math.floor(value / (duration / 16)));
    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      setDisplay(current);
    }, 16);

    return () => clearInterval(interval);
  }, [value, triggered]);

  return (
    <span className="font-heading text-6xl uppercase leading-none text-hazard sm:text-7xl">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-coal py-10">
      <div className="section-wrap grid gap-6 md:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="industrial-card rounded-xl px-6 py-5 text-center">
            <Counter value={stat.value} suffix={stat.suffix} triggered={triggered} />
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}