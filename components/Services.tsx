"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Residential Interiors",
    image: "/images/portfolio-img-1.png",
    alt: "Serene luxury residential interior with natural materials",
  },
  {
    number: "02",
    title: "Living Spaces",
    image: "/images/portfolio-img-1.png",
    alt: "Minimalist Japandi living room with warm natural textures",
  },
  {
    number: "03",
    title: "Space Planning",
    image: "/images/portfolio-img-1.png",
    alt: "Architectural floor plans and interior design drawings",
  },
  {
    number: "04",
    title: "Material Selection",
    image: "/images/portfolio-img-1.png",
    alt: "Curated natural stone, wood and neutral material samples",
  },
  {
    number: "05",
    title: "Lighting Design",
    image: "/images/portfolio-img-1.png",
    alt: "Soft natural light illuminating a refined minimalist interior",
  },
  {
    number: "06",
    title: "Bedroom Design",
    image: "/images/portfolio-img-1.png",
    alt: "Calm minimalist bedroom with linen bedding and warm lighting",
  },
  {
    number: "07",
    title: "Styling & Decor",
    image: "/images/portfolio-img-1.png",
    alt: "Minimalist ceramic vase with branches in a warm neutral interior",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-intro > *", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-intro",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".service-card", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#07131D] px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      {/* Subtle ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#BFAE93]/[0.045] blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.6fr] md:gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:gap-10">
        {/* Left editorial panel */}
        <div className="services-intro flex flex-col items-start md:sticky md:top-28 md:h-fit md:self-start">
          <p className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.28em] text-[#BFAE93] uppercase">
            <span className="h-px w-7 bg-[#BFAE93]" />
            THOUGHTFULLY CURATED SERVICES
          </p>

          <h2 className="max-w-lg text-4xl leading-[1.15] font-light tracking-[-0.04em] text-[#F1EAE1] sm:text-5xl lg:text-[3.5rem]">
            Interior Design for the Way{" "}
            <span className="font-serif italic text-[#D9CBB8]">
              You Live and Work.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#AAB0B6]">
        From a carefully planned home to a distinctive commercial environment, Studio Tsuki develops interior design solutions around your space, lifestyle and aspirations.
          </p>

          <a
            href="https://wa.me/919082028042?text=Hi%20Studio%20Tsuki%2C%20I%27d%20like%20to%20discuss%20my%20interior%20design%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex min-h-11 items-center gap-4 bg-[#D9CBB8] px-5 py-3 text-[10px] font-medium tracking-[0.16em] text-[#101820] uppercase transition-colors duration-300 hover:bg-[#F1EAE1]"
          >
            Discuss Your Project
            <ArrowRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <div className="mt-10 hidden border-t border-white/10 pt-5 md:block md:w-full">
            <p className="text-[10px] tracking-[0.16em] text-white/40 uppercase">
              Designed around the way you live.
            </p>
          </div>
        </div>

        {/* Services image grid */}
        <div className="services-grid grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
          {services.map((service) => (
            <a
              key={service.number}
              href="#contact"
              className="service-card group relative isolate flex min-h-[175px] flex-col justify-end overflow-hidden bg-[#14232E] sm:min-h-[205px] lg:min-h-[155px] xl:min-h-[175px]"
              aria-label={`Enquire about ${service.title}`}
            >
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="absolute inset-0 -z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Image overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06111B]/95 via-[#06111B]/25 to-[#06111B]/10 transition-colors duration-500 group-hover:from-[#06111B]/85"
              />

              {/* Card content */}
              <div className="relative flex h-full min-h-[175px] flex-col justify-end p-3 sm:min-h-[205px] sm:p-4 lg:min-h-[155px] lg:p-3 xl:min-h-[175px] xl:p-4">
                <span className="mb-2 font-serif text-xs text-white/80">
                  {service.number}
                </span>

                <div className="flex items-end justify-between gap-2">
                  <h3 className="max-w-[85%] text-xs leading-snug font-medium tracking-wide text-white sm:text-sm">
                    {service.title}
                  </h3>

                  <ArrowRight
                    size={15}
                    strokeWidth={1.4}
                    className="mb-0.5 shrink-0 text-[#D9CBB8] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                <span className="mt-3 h-px w-6 bg-[#D9CBB8]/80 transition-all duration-500 group-hover:w-12" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
