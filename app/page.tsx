import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import CtaBand from "@/components/sections/CtaBand";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import QuoteSection from "@/components/sections/QuoteSection";
import Reviews from "@/components/sections/Reviews";
import Services from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <CtaBand />
        <Projects />
        <Process />
        <Reviews />
        <QuoteSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}