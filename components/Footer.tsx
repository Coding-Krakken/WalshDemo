import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-hazard/40 bg-black">
      <div className="section-wrap grid gap-6 py-8 md:grid-cols-4">
        <div className="md:pr-5">
          <p className="font-heading text-[3.7rem] uppercase leading-none">Walsh&apos;s</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-hazard">
            Demo & Debris Removal
          </p>
        </div>
        <div className="md:border-l md:border-white/15 md:pl-5">
          <h3 className="font-heading text-[1.9rem] uppercase">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-hazard">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:border-l md:border-white/15 md:pl-5">
          <h3 className="font-heading text-[1.9rem] uppercase">Serving</h3>
          <p className="mt-3 text-sm text-white/80">{COMPANY.area}</p>
          <div className="mt-4 flex items-center gap-2.5">
            <Link href="#" aria-label="Facebook" className="rounded-full border border-white/20 p-2 hover:border-hazard">
              <span className="text-[10px] font-bold uppercase">F</span>
            </Link>
            <Link href="#" aria-label="Instagram" className="rounded-full border border-white/20 p-2 hover:border-hazard">
              <span className="text-[10px] font-bold uppercase">I</span>
            </Link>
            <Link href="#" aria-label="Google" className="rounded-full border border-white/20 p-2 hover:border-hazard">
              <span className="text-[10px] font-bold uppercase">G</span>
            </Link>
          </div>
        </div>
        <div className="industrial-card rounded-xl p-4 md:border-l md:border-white/15 md:pl-5">
          <div className="flex items-center gap-2 text-hazard">
            <BadgeCheck className="h-5 w-5" />
            <p className="font-heading text-[2rem] uppercase">Licensed & Insured</p>
          </div>
          <p className="mt-2 text-sm text-white/80">Your property is protected from start to finish.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-3 text-center text-sm text-white/70">
        Copyright {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
      </div>
    </footer>
  );
}