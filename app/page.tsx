import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StudioStory from "@/components/StudioStory";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1620]">
      <Navbar />
      <Hero />
      <StudioStory />
      <Projects />
      <Philosophy />
      <Services />
      <Process />
      <Testimonial />
      <ContactCTA />
      <Footer />
    </main>
  );
}
