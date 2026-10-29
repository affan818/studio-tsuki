"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "The Focus Workspace",
    category: "Office Interior Design",
    location: "Mumbai, Maharashtra",
    image: "/images/portfolio-img.png",
    alt: "Modern office interior with wooden workstations, glass partitions and warm LED lighting.",
  },
  {
    number: "02",
    title: "The Executive Suite",
    category: "Executive Office & Meeting Room",
    location: "Nagpur, Maharashtra",
    image: "/images/portfolio-img-1.png",
    alt: "Executive office meeting room with a long wooden conference table, black chairs and warm recessed lighting.",
  },
  {
    number: "03",
    title: "The Director’s Office",
    category: "Private Executive Office Design",
    location: "Hydrabad, Telangana",
    image: "/images/portfolio-img-2.png",
    alt: "Private executive office with a wooden desk, leather chair, textured walls and warm accent lighting.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-white/10 bg-[#0B1620] px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.3em] text-[#BFAE93] md:text-xs">
              OUR PORTFOLIO
            </p>

            <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Every Space Has a Story
            </h2>
          </div>

          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between md:max-w-[700px] md:gap-8">
            <p className="max-w-sm text-sm leading-7 text-white/60">
              We create thoughtful residential and commercial interiors by
              balancing light, materials, proportion, and purpose to craft
              spaces that feel personal, welcoming, and timeless.
            </p>

            <a
              href="tel:+919082028042"
              aria-label="Call Studio Tsuki"
              className="group inline-flex shrink-0 items-center gap-3 border-b border-[#BFAE93]/60 pb-2 text-[15px] tracking-[0.16em] text-[#D9CBB8] transition-colors duration-300 hover:text-white"
            >
              LET&apos;S TALK
              <ArrowUpRight
                size={15}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-y-0">
          {projects.map((project) => (
            <article key={project.number} className="group">
              <div className="relative aspect-[4/4.5] overflow-hidden bg-[#1C2E3A] sm:aspect-[4/3.5] md:aspect-[4/4.8]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1024px) 33vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1620]/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute left-4 top-4 text-xs tracking-widest text-white/90">
                  {project.number}
                </span>

                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:border-[#D9CBB8] group-hover:bg-[#D9CBB8] group-hover:text-[#0B1620]">
                  <ArrowUpRight size={17} strokeWidth={1.3} />
                </span>
              </div>

              <div className="flex items-start justify-between gap-3 border-b border-white/15 py-5">
                <div>
                  <h3 className="font-serif text-xl text-white transition-colors duration-300 group-hover:text-[#D9CBB8] sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs tracking-wide text-white/50">
                    {project.category}
                  </p>
                </div>

                <span className="mt-1 text-right text-[10px] text-white/40">
                  {project.location}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
