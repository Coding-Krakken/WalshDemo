import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import { IMAGES } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="bg-[#f8f8f8] py-14 text-black">
      <div className="section-wrap grid items-center gap-8 lg:grid-cols-2">
        <SectionReveal>
          <div className="relative h-[330px] overflow-hidden rounded-xl shadow-card sm:h-[400px]">
            <Image
              src={IMAGES.about}
              alt="Debris trailer loaded and ready for hauling"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </SectionReveal>
        <SectionReveal>
          <p className="font-heading text-[2.1rem] uppercase text-hazard">About Us</p>
          <h2 className="heading-tight mt-2 text-[clamp(3rem,6.5vw,5.3rem)] text-black">We Get The Job Done Right.</h2>
          <div className="my-5 h-1 w-20 bg-hazard" />
          <p className="max-w-xl text-base leading-relaxed text-black/80 sm:text-lg">
            With years of hands-on experience, we provide top-quality demolition and debris removal
            for homeowners and contractors. We show up on time, work hard, and leave your property
            clean and ready for the next phase.
          </p>
          <a href="#contact" className="cta-button mt-8">
            Get A Free Quote
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}