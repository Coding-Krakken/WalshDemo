"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    const timer = setInterval(() => emblaApi.scrollNext(), 4200);
    return () => {
      clearInterval(timer);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="reviews" className="texture-overlay dark-steel py-14">
      <div className="section-wrap">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="heading-tight text-[clamp(3.1rem,5.9vw,4.8rem)]">What Our Clients Say</h2>
            <p className="font-heading text-[1.75rem] uppercase text-hazard">Real Reviews From Real Customers.</p>
          </div>
          <a href="#contact" className="outline-button">
            View All Reviews
          </a>
        </div>

        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {TESTIMONIALS.map((review) => (
              <article key={review.name} className="industrial-card min-w-0 flex-[0_0_100%] rounded-xl p-5 md:flex-[0_0_49%] xl:flex-[0_0_32%]">
                <div className="mb-3 flex gap-1 text-hazard">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={`${review.name}-${i}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-white/90">&quot;{review.quote}&quot;</p>
                <p className="mt-4 font-semibold">- {review.name}</p>
                <p className="text-sm text-white/70">{review.location}</p>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous review"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/35 bg-black/65 p-2 text-white hover:border-hazard hover:text-hazard md:inline-flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/35 bg-black/65 p-2 text-white hover:border-hazard hover:text-hazard md:inline-flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 text-hazard">
          {TESTIMONIALS.map((review, index) => (
            <button
              key={review.name}
              type="button"
              aria-label={`Go to review ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                selectedIndex === index ? "bg-hazard" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}