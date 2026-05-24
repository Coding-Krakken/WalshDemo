"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { CheckCircle2, PhoneCall, Loader2 } from "lucide-react";
import { COMPANY, IMAGES } from "@/lib/constants";

export default function QuoteSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const honey = String(data.get("website") || "");
    if (honey) return;

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const details = String(data.get("details") || "").trim();

    if (!name || !email || !details) {
      setErrorMsg("Please fill out all required fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, details })
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <section id="contact" className="border-t border-hazard/50 bg-[#0d0d0d]">
      <div className="grid lg:grid-cols-3">
        <div className="relative min-h-[290px] overflow-hidden p-8 md:p-9">
          <Image src={IMAGES.cta} alt="Demolition site during cleanup" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
          <div className="relative z-10 max-w-[22rem]">
            <p className="font-heading text-[clamp(3.2rem,7vw,4.5rem)] uppercase leading-[0.88] text-white">Ready To Get Started?</p>
            <p className="mt-2 font-heading text-[clamp(2.9rem,6.5vw,4.2rem)] uppercase leading-[0.9] text-hazard">Get A Free Quote Today.</p>
            <p className="mt-3 text-base text-white/85">
              Tell us about your project and we will contact you quickly with a no-obligation estimate.
            </p>
          </div>
        </div>

        <div className="bg-hazard px-6 py-7 text-black md:px-9">
          <h3 className="font-heading text-[clamp(3rem,6.3vw,4.2rem)] uppercase leading-none">Get A Free Quote</h3>
          <form className="mt-4 grid gap-2.5" onSubmit={onSubmit}>
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
            <input
              name="name"
              placeholder="Name *"
              required
              disabled={isSubmitting}
              className="rounded border border-black/25 bg-white px-4 py-2.5 text-sm outline-none disabled:opacity-60"
            />
            <input
              name="phone"
              placeholder="Phone"
              disabled={isSubmitting}
              className="rounded border border-black/25 bg-white px-4 py-2.5 text-sm outline-none disabled:opacity-60"
            />
            <input
              name="email"
              type="email"
              placeholder="Email *"
              required
              disabled={isSubmitting}
              className="rounded border border-black/25 bg-white px-4 py-2.5 text-sm outline-none disabled:opacity-60"
            />
            <textarea
              name="details"
              placeholder="Project Details *"
              required
              rows={3}
              disabled={isSubmitting}
              className="rounded border border-black/25 bg-white px-4 py-2.5 text-sm outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded bg-black px-5 py-1.5 font-heading text-[1.8rem] uppercase tracking-wide text-white disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send Request"
              )}
            </button>
            {status === "success" && (
              <p className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide">
                <CheckCircle2 className="h-4 w-4" />
                Thanks! Your quote request has been sent.
              </p>
            )}
            {status === "error" && errorMsg && (
              <p className="text-sm font-semibold uppercase tracking-wide text-red-700">{errorMsg}</p>
            )}
          </form>
        </div>

        <div className="bg-[#f5f5f5] px-8 py-8 text-black md:px-10">
          <p className="font-heading text-[clamp(2.8rem,6vw,4rem)] uppercase leading-none">Call Us Today</p>
          <a href={COMPANY.phoneHref} className="mt-2 inline-flex items-center gap-2 font-heading text-[clamp(3.05rem,6.2vw,4.4rem)] leading-none">
            <PhoneCall className="h-8 w-8" />
            {COMPANY.phoneDisplay}
          </a>
          <p className="mt-2 text-base">Serving {COMPANY.area}</p>
          <ul className="mt-5 grid gap-2.5">
            {["Fast Service", "Fair Pricing", "Satisfaction Guaranteed"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[0.95rem] font-semibold uppercase tracking-wide">
                <CheckCircle2 className="h-5 w-5 text-hazard" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}