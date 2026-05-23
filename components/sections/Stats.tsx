"use client";

import { useEffect, useState } from "react";
import { STATS } from "@/lib/constants";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
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
  }, [value]);

  return (
    <span className="font-heading text-6xl uppercase leading-none text-hazard sm:text-7xl">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-coal py-10">
      <div className="section-wrap grid gap-6 md:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="industrial-card rounded-xl px-6 py-5 text-center">
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}