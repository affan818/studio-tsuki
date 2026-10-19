
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content > *", {
        y: 24,
        opacity: 0,
        duration: 0.85,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".cta-brand-panel", {
        x: 24,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-brand-panel",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".cta-bottom-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".cta-bottom-line",
          start: "top 95%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative isolate overflow-hidden bg-[#07131D] text-[#F1EAE1]"
    >
      {/* Full-width cinematic background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
      >
        <Image
          src="/images/contact-cta.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay for readable text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#07131D]/95 via-[#07131D]/65 to-[#07131D]/20"
      />

      <div className="mx-auto grid min-h-[470px] max-w-[1600px] grid-cols-1 md:min-h-[500px] md:grid-cols-[1.15fr_0.85fr]">
        {/* Left editorial content */}
        <div className="cta-content flex flex-col items-start justify-center px-5 py-16 sm:px-8 md:py-20 lg:px-16 xl:px-24">
          <p className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.28em] text-[#D9CBB8] uppercase">
            <span className="h-px w-8 bg-[#BFAE93]" />
            Your Next Chapter
          </p>

          <h2 className="max-w-2xl text-4xl leading-[1.12] font-light tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Let's create a space
            <br />
            that feels{" "}
            <span className="font-serif italic text-[#D9CBB8]">
              like you.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
            Every meaningful space begins with a conversation. Tell us
            what you imagine, and let's shape something thoughtful,
            personal, and timeless together.
          </p>

          <Link
            href="mailto:hello@studiotsuki.com?subject=Interior%20Design%20Enquiry"
            className="group mt-8 inline-flex min-h-11 items-center gap-5 bg-[#D9CBB8] px-6 py-3 text-[10px] font-medium tracking-[0.16em] text-[#101820] uppercase transition-colors duration-300 hover:bg-[#F1EAE1]"
          >
            Start a Project
            <ArrowRight
              size={16}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <p className="mt-5 text-[10px] tracking-wide text-white/50">
            Thoughtfully designed. Timelessly lived.
          </p>
        </div>

        {/* Right-side architectural branding panel */}
        <div className="cta-brand-panel relative flex min-h-[260px] items-end overflow-hidden border-t border-white/10 md:min-h-full md:border-t-0 md:border-l md:border-white/15">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#07131D]/90 via-[#07131D]/15 to-[#07131D]/20"
          />

          <div className="relative z-10 w-full px-6 py-8 sm:px-10 md:px-8 lg:px-12">
            <div className="ml-auto max-w-[230px] border-l border-[#D9CBB8]/40 pl-5">
              <p className="font-serif text-2xl tracking-[0.2em] text-[#F1EAE1]">
                TSUKI
              </p>

              <p className="mt-1 text-[8px] tracking-[0.42em] text-[#D9CBB8] uppercase">
                Studio
              </p>

              <div className="my-5 h-px w-10 bg-[#BFAE93]" />

              <p className="text-xs leading-6 text-white/65">
                A quieter kind of luxury.
                <br />
                A more personal way of living.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom editorial rule */}
      <div className="cta-bottom-line h-px w-full bg-gradient-to-r from-transparent via-[#BFAE93]/50 to-transparent" />
    </section>
  );
}
