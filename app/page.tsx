import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import Navbar from "@/components/Navbar";
import StickyQuoteCTA from "@/components/StickyQuoteCTA";
import About from "@/components/sections/About";
import BeforeAfter from "@/components/sections/BeforeAfter";
import CtaBand from "@/components/sections/CtaBand";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import QuoteSection from "@/components/sections/QuoteSection";
import Reviews from "@/components/sections/Reviews";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <About />
        <BeforeAfter />
        <CtaBand />
        <Projects />
        <Process />
        <Reviews />
        <QuoteSection />
      </main>
      <Footer />
      <FloatingCallButton />
      <StickyQuoteCTA />
    </>
  );
}