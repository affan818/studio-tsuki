"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Compass, Layers3, Sparkles, Orbit, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: "01",
    title: "Intentional Design",
    description:
      "Every detail has a purpose. We create spaces that feel considered, balanced, and deeply personal.",
    icon: Compass,
    tag: "THE FOUNDATION",
  },
  {
    number: "02",
    title: "Natural Harmony",
    description:
      "Honest materials, organic textures, and a thoughtful palette bring a quiet sense of calm.",
    icon: Layers3,
    tag: "MATERIALS & TEXTURE",
  },
  {
    number: "03",
    title: "Timeless Simplicity",
    description:
      "Beyond passing trends, we focus on enduring forms and spaces that feel beautiful for years.",
    icon: Sparkles,
    tag: "TIMELESS BY NATURE",
  },
  {
    number: "04",
    title: "Personal Meaning",
    description:
      "Your rituals, rhythms, and way of living shape a space that feels unmistakably yours.",
    icon: Orbit,
    tag: "MADE FOR YOU",
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".philosophy-eyebrow", {
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".philosophy-heading",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".philosophy-heading", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".philosophy-heading",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".philosophy-intro", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".philosophy-intro",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".philosophy-card", {
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".philosophy-grid",
          start: "top 82%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative isolate overflow-hidden bg-[#0B1620] px-5 py-24 sm:px-8 md:py-32"
    >
      {/* Full-cover background image */}
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/philosophy-bg.png')",
          }}
        />
      </div>

      {/* Dark overlay for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#07121B]/75"
      />

      {/* Bottom gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0B1620]/35 via-transparent to-[#0B1620]/70"
      />

      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#BFAE93]/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-2 md:items-end md:pb-16">
          <div>
            <p className="philosophy-eyebrow mb-5 flex items-center gap-3 text-[10px] tracking-[0.32em] text-[#D9CBB8] uppercase">
              <span className="h-px w-8 bg-[#BFAE93]" />
              The Tsuki Philosophy
            </p>

            <h2 className="philosophy-heading max-w-xl text-4xl leading-[1.12] font-light tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              Design that feels
              <br />
              <span className="font-serif italic text-[#D9CBB8]">
                like coming home.
              </span>
            </h2>
          </div>

          <p className="philosophy-intro max-w-md text-sm leading-7 text-[#B0B5BA] md:justify-self-end md:text-base">
            We believe the most beautiful spaces do more than look good. They
            bring balance to everyday life, reflect who you are, and make room
            for what matters.
          </p>
        </div>

        {/* Philosophy cards */}
        <div className="philosophy-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="philosophy-card group relative flex min-h-[300px] flex-col border-b border-white/10 px-5 py-8 transition-colors duration-300 hover:bg-white/[0.025] sm:min-h-[320px] sm:border-r sm:px-6 sm:py-10 lg:border-b-0 lg:first:border-l"
              >
                {/* Number and icon */}
                <div className="mb-12 flex items-start justify-between">
                  <span className="font-serif text-sm text-[#BFAE93]/70">
                    {item.number}
                  </span>

                  <div className="philosophy-icon flex h-11 w-11 items-center justify-center rounded-full border border-[#BFAE93]/25 text-[#D9CBB8] transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:border-[#D9CBB8]/70 group-hover:bg-[#BFAE93]/10">
                    <Icon size={19} strokeWidth={1.25} />
                  </div>
                </div>

                <p className="mb-3 text-[9px] tracking-[0.2em] text-[#BFAE93]/80 uppercase">
                  {item.tag}
                </p>

                <h3 className="mb-4 text-xl font-light tracking-wide text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-[#B0B5BA]">
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-auto flex items-center justify-between pt-8">
                  <span className="philosophy-line h-px w-8 origin-left bg-[#BFAE93] transition-all duration-500 group-hover:w-16" />

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.2}
                    className="text-[#BFAE93]/60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D9CBB8]"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-xs leading-6 tracking-wide text-white/45">
            Less noise. More meaning. A quieter kind of luxury.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 text-[10px] tracking-[0.2em] text-[#D9CBB8] uppercase"
          >
            Create Your Space
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
