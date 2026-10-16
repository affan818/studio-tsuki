import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StudioStory from "@/components/StudioStory";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1620]">
      <Navbar />
      <Hero />
      <StudioStory />
      <Projects />
    </main>
  );
}
