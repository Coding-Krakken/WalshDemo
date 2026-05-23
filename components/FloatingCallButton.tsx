import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function FloatingCallButton() {
  return (
    <Link
      href={COMPANY.phoneHref}
      aria-label="Call Walsh Demo"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-hazard text-black shadow-glow md:hidden"
    >
      <PhoneCall className="h-6 w-6" />
    </Link>
  );
}