"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
        ".story-image",
        { scale: 1.06, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".story-content",
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          delay: 0.15,
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
      className="relative isolate overflow-hidden bg-[#0B1620]"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:min-h-[780px] lg:grid-cols-[0.95fr_1.05fr]">
        {/* LEFT: Interior image */}
        <div className="story-image relative min-h-[420px] overflow-hidden sm:min-h-[540px] lg:min-h-full">
          <Image
            src="/images/portfolio-img.png"
            alt="Thoughtfully designed interior inspired by natural materials and Japandi aesthetics"
            fill
            priority={false}
            sizes="(max-width: 1023px) 100vw, 48vw"
            className="object-cover object-center transition-transform duration-[1600ms] hover:scale-[1.035]"
          />

          {/* Soft image treatment */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1620]/60 via-transparent to-[#0B1620]/10" />

          {/* Editorial image label */}
          <div className="absolute bottom-7 left-6 flex items-center gap-3 sm:bottom-10 sm:left-10">
            <span className="h-px w-10 bg-[#D9CBB8]/80" />
            <span className="text-[9px] tracking-[0.28em] text-white/85 sm:text-[10px]">
              SPACES WITH SOUL
            </span>
          </div>

          {/* Champagne frame */}
          <div className="pointer-events-none absolute inset-4 border border-white/15 sm:inset-6" />
        </div>

        {/* RIGHT: Creative content panel */}
        <div className="relative isolate flex items-center overflow-hidden px-6 py-20 sm:px-10 md:px-14 lg:px-12 lg:py-24 xl:px-20">
          {/* Architectural background design */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            {/* Ambient champagne lighting */}
            <div className="absolute -right-28 top-10 h-[380px] w-[380px] rounded-full bg-[#BFAE93]/[0.07] blur-[110px]" />

            {/* Oversized architectural arch */}
            <svg
              viewBox="0 0 600 900"
              preserveAspectRatio="xMidYMid slice"
              className="absolute -right-28 top-0 h-full w-[95%] opacity-70"
              fill="none"
            >
              <g stroke="#D9CBB8" strokeWidth="0.8" strokeOpacity="0.15">
                <path d="M180 950 V380 A180 180 0 0 1 540 380 V950" />
                <path d="M205 950 V380 A155 155 0 0 1 515 380 V950" />
                <path d="M230 950 V380 A130 130 0 0 1 490 380 V950" />
                <path d="M255 950 V380 A105 105 0 0 1 465 380 V950" />
                <path d="M280 950 V380 A80 80 0 0 1 440 380 V950" />

                {/* Fine flowing contours */}
                <path d="M600 100 C380 210 610 350 400 480 S410 740 600 830" />
                <path d="M600 130 C410 235 630 370 430 500 S440 760 600 850" />

                {/* Moon-inspired circle */}
                <circle cx="445" cy="190" r="65" />
                <circle cx="445" cy="190" r="78" />
              </g>

              <circle
                cx="445"
                cy="112"
                r="2"
                fill="#D9CBB8"
                fillOpacity="0.65"
              />
            </svg>

            {/* Text readability layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1620]/95 via-[#0B1620]/75 to-[#0B1620]/45" />

            {/* Fine texture */}
            <div
              className="absolute inset-0 opacity-[0.10]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(217,203,184,0.35) 0.5px, transparent 0.5px)",
                backgroundSize: "7px 7px",
              }}
            />
          </div>

          {/* Content */}
          <div className="story-content relative z-10 mx-auto w-full max-w-[590px]">
            <p className="mb-6 text-[10px] tracking-[0.3em] text-[#BFAE93] sm:text-xs">
              A THOUGHTFUL APPROACH TO INTERIOR DESIGN
            </p>

            <h2 className="max-w-xl font-serif text-4xl leading-[1.13] tracking-tight text-[#F4EFE7] sm:text-5xl xl:text-[56px]">
              Creating Spaces That
              <br className="hidden xl:block" /> Feel Like{" "}
              <span className="relative inline-grid align-baseline text-[#D9CBB8]">
                <span
                  className={`col-start-1 row-start-1 transition-all duration-700 ${
                    showJapanese
                      ? "translate-y-2 opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  You.
                </span>

                <span
                  lang="ja"
                  className={`col-start-1 row-start-1 font-['Noto_Serif_JP'] font-light transition-all duration-700 ${
                    showJapanese
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  }`}
                >
                  Moon.
                </span>
              </span>
            </h2>

            <p className="mt-7 text-sm leading-7 tracking-wide text-white/65 sm:text-[15px]">
              The Japanese word “Tsuki” (月) means moon, a symbol of serenity,
              balance and timeless beauty. Inspired by this quiet elegance,
              Studio Tsuki approaches interior design as a way to create spaces
              that feel considered, personal and connected to everyday life.
            </p>

            <p className="mt-5 text-sm leading-7 tracking-wide text-white/65 sm:text-[15px]">
              As a boutique interior design studio serving Mumbai and clients
              across India, we bring together the warmth of natural materials,
              the simplicity of minimalism, the harmony of Japandi and the
              imperfect beauty of wabi-sabi.
            </p>

            <p className="mt-5 text-sm leading-7 tracking-wide text-white/65 sm:text-[15px]">
              Our approach balances visual refinement with the practical
              realities of modern Indian living. We consider spatial efficiency,
              storage, lighting, material selection and individual lifestyles to
              create interiors that are as functional as they are beautiful.
            </p>

            <p className="mt-5 text-sm leading-7 tracking-wide text-white/65 sm:text-[15px]">
              Whether you are planning a new apartment, reimagining your family
              home or developing a commercial space, we begin by understanding
              your vision and translating it into a cohesive design.
            </p>

            <a
              href="#projects"
              className="group mt-9 inline-flex items-center gap-4 border-b border-[#BFAE93]/60 pb-3 text-[10px] tracking-[0.2em] text-[#D9CBB8] transition-colors duration-300 hover:text-white sm:text-xs"
            >
              DISCOVER OUR APPROACH
              <ArrowUpRight
                size={15}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* Decorative Tsuki emblem */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 bottom-0 hidden h-24 w-24 items-center justify-center rounded-full border border-[#BFAE93]/25 opacity-60 xl:flex"
            >
              <Image
                src="/images/tsuki-icon.png"
                alt=""
                width={72}
                height={72}
                className="h-[72px] w-[72px] object-contain opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
