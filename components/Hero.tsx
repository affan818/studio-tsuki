"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    const light = lightRef.current;
    const content = contentRef.current;

    if (!hero || !image || !light || !content) return;

    const ctx = gsap.context(() => {
      // Hero content entrance animation
      gsap.fromTo(
        content.children,
        {
          y: 20,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
        },
      );

      // Mouse interaction only on pointer devices
      const media = window.matchMedia("(hover: hover) and (pointer: fine)");

      if (!media.matches) return;

      // Smooth background parallax
      const moveImageX = gsap.quickTo(image, "x", {
        duration: 0.9,
        ease: "power2.out",
      });

      const moveImageY = gsap.quickTo(image, "y", {
        duration: 0.9,
        ease: "power2.out",
      });

      // Smooth ambient light movement
      const moveLightX = gsap.quickTo(light, "x", {
        duration: 0.8,
        ease: "power2.out",
      });

      const moveLightY = gsap.quickTo(light, "y", {
        duration: 0.8,
        ease: "power2.out",
      });

      const moveContentX = gsap.quickTo(content, "x", {
        duration: 0.7,
        ease: "power2.out",
      });

      const onMove = (event: MouseEvent) => {
        const rect = hero.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;

        const y = (event.clientY - rect.top) / rect.height - 0.5;

        moveImageX(-x * 10);
        moveImageY(-y * 7);

        moveLightX(x * 180);
        moveLightY(y * 130);

        moveContentX(x * 3);
      };

      const onLeave = () => {
        moveImageX(0);
        moveImageY(0);

        moveLightX(0);
        moveLightY(0);

        moveContentX(0);
      };

      hero.addEventListener("mousemove", onMove);
      hero.addEventListener("mouseleave", onLeave);

      return () => {
        hero.removeEventListener("mousemove", onMove);
        hero.removeEventListener("mouseleave", onLeave);
      };
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-[680px] items-center overflow-hidden bg-[#0B1620] md:min-h-[780px]"
    >
      {/* Background interior image */}
      <div
        ref={imageRef}
        className="absolute -inset-5 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(11,22,32,0.96) 0%,
              rgba(11,22,32,0.75) 45%,
              rgba(11,22,32,0.25) 100%
            ),
            url('/images/hero-interior.png')
          `,
        }}
      />

      {/* Interactive champagne and blue ambient light */}
      <div
        ref={lightRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[80px] will-change-transform md:h-[450px] md:w-[450px]"
        style={{
          background:
            "radial-gradient(circle, rgba(191,174,147,0.22) 0%, rgba(70,111,145,0.13) 35%, rgba(11,22,32,0) 70%)",
        }}
      />

      {/* Hero content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-36 md:px-12 lg:px-20"
      >
        <p className="mb-6 text-[10px] tracking-[0.28em] text-[#D9CBB8] md:text-xs">
          STUDIO TSUKI · INTERIOR DESIGN
        </p>

        <h1 className="max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]">
          Thoughtfully
          <br />
          Designed.
          <br />
          <span className="text-[#D9CBB8]">Timeless Living.</span>
        </h1>

        <p className="mt-7 max-w-lg text-sm leading-7 text-white/70 md:text-base">
          Creating calm, considered interiors where functionality, natural
          materials, and timeless design come together.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-5">
          <a
            href="#projects"
            className="group relative isolate overflow-hidden border border-[#BFAE93]/70 px-3 py-2 text-[9px] tracking-[0.1em] text-white transition-colors duration-500 hover:border-[#D9CBB8] hover:text-[#0B1620] sm:px-4 sm:py-2.5 sm:text-[13px]"
          >
            {/* Animated background fill */}
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#D9CBB8] transition-transform duration-500 ease-out group-hover:scale-x-100" />

            <span className="flex items-center gap-2">
              EXPLORE OUR WORK
              <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                ↗
              </span>
            </span>
          </a>

          <a
            href="#about"
            className="text-xs tracking-widest text-white/80 transition-colors duration-300 hover:text-[#D9CBB8]"
          >
            DISCOVER OUR STORY →
          </a>
        </div>
      </div>

      {/* Bottom label */}
      <div className="pointer-events-none absolute bottom-8 right-8 z-10 hidden text-[10px] tracking-[0.3em] text-white/50 sm:block">
        THOUGHTFULLY DESIGNED · TIMELESS LIVING
      </div>
    </section>
  );
}
