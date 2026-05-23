import { MapPin, PhoneCall } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CtaBand() {
  return (
    <section className="overflow-hidden border-y border-hazard/50 bg-black">
      <div className="mx-auto grid w-full max-w-[1300px] md:grid-cols-[1.18fr_1fr]">
        <div className="shine flex items-center gap-4 bg-hazard px-6 py-6 text-black md:px-8">
          <div className="rounded-full bg-black p-3 text-hazard">
            <PhoneCall className="h-7 w-7" />
          </div>
          <div>
            <p className="font-heading text-[2.6rem] uppercase leading-none sm:text-[3rem]">Call Today For A Free Estimate</p>
            <a href={COMPANY.phoneHref} className="font-heading text-[4.2rem] leading-none sm:text-[4.8rem]">
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 bg-[#0b0b0b] px-6 py-6 text-right text-white md:justify-end md:px-8">
          <MapPin className="h-8 w-8 text-hazard" />
          <p className="font-heading text-[2.4rem] uppercase leading-none sm:text-[2.8rem]">
            Proudly Serving
            <span className="block text-hazard">{COMPANY.area}</span>
          </p>
          <svg
            viewBox="0 0 128 64"
            className="hidden h-10 w-20 text-hazard md:block"
            fill="currentColor"
            aria-hidden
          >
            <path d="M8 20l16-6 20 4 12-8 22 5 10-3 18 7-6 10 12 10-12 7-15-1-6 8-13-5-14 4-9-8-8 2-7-8 2-9-6-9z" />
          </svg>
        </div>
      </div>
    </section>
  );
}