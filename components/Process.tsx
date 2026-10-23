"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your space, location, lifestyle, functional requirements, aesthetic preferences and budget.",
    image: "/images/discover.webp",
  },
  {
    number: "02",
    title: "Envision",
    description:
      "We establish the creative direction through concepts, moodboards, colour palettes and material references.",
    image: "/images/envision.webp",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We develop the proposed layouts, furniture arrangements, materials and design details according to the agreed brief.",
    image: "/images/design.webp",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We review the design together and refine the details. Where included, drawings and 3D visualisations help communicate the proposed space.",
    image: "/images/refine.webp",
  },
  {
    number: "05",
    title: "Realize",
    description:
      "For projects that include execution, the approved design moves into implementation according to the agreed scope, schedule and responsibilities.",
    image: "/images/realize.webp",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-top > *", {
        y: 22,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-top",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".moon-step", {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".moon-timeline",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".moon-arrow", {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
        duration: 0.65,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".moon-timeline",
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden border-y border-white/[0.04] bg-[#07131D] px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      {/* Subtle atmospheric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-[#BFAE93]/[0.045] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading and introduction */}
        <div className="process-top mb-12 grid gap-5 md:mb-14 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-4 text-[10px] font-medium tracking-[0.24em] text-[#BFAE93] uppercase">
              FROM FIRST IDEA TO FINISHED SPACE
            </p>

            <h2 className="max-w-2xl text-3xl leading-[1.18] font-light tracking-[-0.035em] text-[#F1EAE1] sm:text-4xl md:text-5xl">
              A Considered Journey,
              <span className="font-serif italic text-[#D9CBB8]">
                {" "}
                Every Step of the Way
              </span>
            </h2>
          </div>

          <p className="max-w-md text-xs leading-6 text-[#B0B5BA] sm:text-sm md:justify-self-end">
            Great interiors develop through collaboration, careful planning and
            attention to detail. Our process brings structure and clarity to
            your design journey.
          </p>
        </div>

        {/* Five-phase timeline */}
        <div className="moon-timeline grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-5 md:gap-5">
          {phases.map((phase, index) => (
            <div key={phase.number} className="moon-step min-w-0">
              {/* Moon + connecting arrow */}
              <div className="mb-5 flex items-center gap-3 md:mb-4">
                <div className="group relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full border border-white/[0.08] bg-[#09121B] sm:h-[64px] sm:w-[64px]">
                  <Image
                    src={phase.image}
                    alt={`${phase.title} moon phase`}
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {index < phases.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="moon-arrow hidden h-px flex-1 items-center bg-[#BFAE93]/50 md:flex"
                  >
                    <ArrowRight
                      size={13}
                      strokeWidth={1}
                      className="ml-auto -mr-px shrink-0 text-[#BFAE93]"
                    />
                  </div>
                )}
              </div>

              {/* Step details */}
              <p className="mb-1 font-serif text-sm text-[#D9CBB8]">
                {phase.number}
              </p>

              <h3 className="mb-2 text-sm font-medium tracking-wide text-[#F1EAE1] sm:text-base">
                {phase.title}
              </h3>

              <p className="max-w-[230px] text-[11px] leading-[1.7] text-[#AAB0B6] sm:text-xs">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
