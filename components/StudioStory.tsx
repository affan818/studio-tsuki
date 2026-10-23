"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function StudioStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showJapanese, setShowJapanese] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setShowJapanese((previous) => !previous);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".story-content",
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative isolate min-h-[650px] overflow-hidden bg-[#0B1620] md:min-h-[700px] lg:min-h-[760px]"
    >
      {/* Full-width background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-[center_45%] bg-no-repeat"
        style={{
          backgroundImage: "url('/images/studio-story-bg.png')",
        }}
      />

      {/* Darken the overall image slightly */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#0B1620]/10"
      />

      {/* Gradient: image remains clear on left, text readable on right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[#0B1620]/45 to-[#0B1620]/95"
      />

      {/* Additional mobile overlay for readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0B1620]/95 via-transparent to-transparent md:hidden"
      />

      <div className="mx-auto grid min-h-[650px] max-w-[1600px] grid-cols-1 items-center px-6 py-20 md:min-h-[700px] md:grid-cols-2 md:px-10 lg:min-h-[760px] lg:px-16">
        {/* Empty left column keeps the interior visible */}
        <div className="hidden md:block" />

        {/* Story content */}
        <div className="story-content relative mx-auto w-full max-w-[580px] py-8 md:mx-0 md:ml-auto md:py-12">
          <p className="mb-6 text-[10px] tracking-[0.32em] text-[#BFAE93] md:text-xs">
            A THOUGHTFUL APPROACH TO INTERIOR DESIGN
          </p>

          <h2 className="max-w-xl font-serif text-4xl leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[56px]">
            Creating Spaces That
            <br className="hidden lg:block" /> Feel Like{" "}
            <span className="relative inline-grid align-baseline text-[#D9CBB8]">
              <span
                className={`col-start-1 row-start-1 transition-all duration-900 ${
                  showJapanese
                    ? "translate-y-2 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                Moon.
              </span>

              <span
                lang="ja"
                className={`col-start-1 row-start-1 font-['Noto_Serif_JP'] font-light transition-all duration-700 ${
                  showJapanese
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
              >
                月
              </span>
            </span>
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-7 tracking-wide text-white/75 md:text-[15px]">
           The Japanese word “Tsuki” (月) means moon, a symbol of serenity, balance and timeless beauty. Inspired by this quiet elegance, Studio Tsuki approaches interior design as a way to create spaces that feel considered, personal and connected to everyday life.
          </p>

          <p className="mt-5 max-w-lg text-sm leading-7 tracking-wide text-white/75 md:text-[15px]">
  As a boutique interior design studio serving Mumbai and clients across India, we bring together the warmth of natural materials, the simplicity of minimalism, the harmony of Japandi and the imperfect beauty of wabi-sabi.
          </p>
<p className="mt-5 max-w-lg text-sm leading-7 tracking-wide text-white/75 md:text-[15px]">Our approach balances visual refinement with the practical realities of modern Indian living. We consider spatial efficiency, storage, lighting, material selection and individual lifestyles to create interiors that are as functional as they are beautiful.</p>
<p className="mt-5 max-w-lg text-sm leading-7 tracking-wide text-white/75 md:text-[15px]">Whether you are planning a new apartment, reimagining your family home or developing a commercial space, we begin by understanding your vision and translating it into a cohesive design.</p>
          <a
            href="#projects"
            className="group relative mt-10 inline-flex items-center gap-5 border-b border-[#BFAE93]/60 pb-3 text-[10px] tracking-[0.2em] text-[#D9CBB8] transition-colors duration-300 hover:text-white md:text-xs"
          >
            DISCOVER OUR APPROACH
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>

          {/* Japanese moon symbol image */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-1 bottom-0 hidden h-44 w-44 items-center justify-center rounded-full border border-[#BFAE93]/25 md:flex lg:-right-5 lg:h-52 lg:w-52"
          >
            <Image
              src="/images/tsuki-icon.png"
              alt=""
              width={150}
              height={150}
              className="h-50 w-50 object-contain opacity-30 lg:h-36 lg:w-36"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
