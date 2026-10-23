"use client";

import { useCallback, useState } from "react";
import ZenLoader from "./ZenLoader";
import Navbar from "./Navbar";
import Hero from "./Hero";
import StudioStory from "./StudioStory";
import Projects from "./Projects";
import Philosophy from "./Philosophy";
import Services from "./Services";
import Process from "./Process";
import Testimonial from "./Testimonial";
import ContactCTA from "./ContactCTA";
import Footer from "./Footer";
import FAQ from "./FAQ";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading && <ZenLoader onComplete={handleLoaderComplete} />}
      <main className="min-h-screen overflow-hidden bg-[#0B1620]">
        <Navbar />
        <Hero />
        <StudioStory />
        <Projects />
        <Philosophy />
        <Services />
        <Process />
        <Testimonial />
        <FAQ/>
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}
