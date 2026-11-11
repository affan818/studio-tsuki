
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Expand,
} from "lucide-react";

import {
  galleryCategories,
  galleryImages,
  type GalleryCategory,
} from "@/data/gallery";

import GalleryLightbox from "./GalleryLightbox";

export default function GalleryPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("All");

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return galleryImages;

    return galleryImages.filter(
      (image) => image.category === activeCategory,
    );
  }, [activeCategory]);

  const featuredImage = galleryImages.find(
    (image) => image.featured,
  );

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const navigateLightbox = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // GSAP reveal animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const grid = gridRef.current;

    if (!section || !grid) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-card",
        {
          y: 35,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.09,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: grid,
            start: "top 88%",
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <main
      ref={sectionRef}
      className="min-h-screen overflow-hidden bg-[#0B1620] text-[#F4EFE7]"
    >
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44 lg:px-16 lg:pb-24">
        {/* Decorative architectural lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-[#BFAE93]/[0.07] blur-[120px]" />

          <svg
            viewBox="0 0 700 600"
            className="absolute -right-20 top-0 h-full w-[70%] opacity-50"
            fill="none"
          >
            <g stroke="#D9CBB8" strokeOpacity=".17" strokeWidth=".8">
              <path d="M400 -80 V680" />
              <path d="M430 -80 V680" />
              <path d="M460 -80 V680" />
              <path d="M490 -80 V680" />
              <path d="M520 -80 V680" />
              <circle cx="490" cy="190" r="130" />
              <circle cx="490" cy="190" r="155" />
              <path d="M200 580 C300 350 580 450 720 150" />
            </g>
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-[10px] tracking-[0.35em] text-[#BFAE93] sm:text-xs">
            THE TSUKI COLLECTION
          </p>

          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="max-w-4xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[88px]">
                Spaces That
                <br />
                <span className="italic text-[#D9CBB8]">
                  Tell a Story.
                </span>
              </h1>
            </div>

            <div className="max-w-md lg:justify-self-end">
              <p className="text-sm leading-7 tracking-wide text-white/60 sm:text-base">
                A visual collection of thoughtfully designed
                interiors, natural materials and timeless details.
                Discover spaces shaped around the art of everyday living.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#BFAE93]/70" />
                <span className="text-[10px] tracking-[0.25em] text-[#D9CBB8]/80">
                  EXPLORE OUR WORK
                </span>
                <ArrowDown
                  size={15}
                  strokeWidth={1.2}
                  className="text-[#D9CBB8]"
                />
              </div>
            </div>
          </div>

          {/* Hero bottom line */}
          <div className="mt-16 flex items-center justify-between border-t border-white/15 pt-5 sm:mt-20">
            <p className="text-[9px] tracking-[0.25em] text-white/45 sm:text-[10px]">
              THOUGHTFULLY DESIGNED · TIMELESSLY EXPERIENCED
            </p>

            <p className="font-serif text-sm italic text-[#BFAE93]">
              月
            </p>
          </div>
        </div>
      </section>

  
      {/* ================= GALLERY ================= */}
      <section
        id="gallery-grid"
        className="px-5 pb-24 sm:px-8 lg:px-16 lg:pb-32"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[9px] tracking-[0.3em] text-[#BFAE93]">
                EXPLORE THE COLLECTION
              </p>

              <h2 className="font-serif text-3xl text-[#F4EFE7] sm:text-4xl">
                A World of Details
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/50">
              Every space has its own character. Explore our collection
              by room and discover the details that bring each design to life.
            </p>
          </div>

          {/* Category filters */}
          <div className="mb-10 flex gap-2 overflow-x-auto border-b border-white/15 pb-4 scrollbar-none">
            {galleryCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`shrink-0 px-4 py-2 text-[10px] tracking-[0.15em] transition-all duration-300 sm:text-xs ${
                    isActive
                      ? "bg-[#D9CBB8] text-[#0B1620]"
                      : "border border-white/15 text-white/55 hover:border-[#BFAE93]/60 hover:text-[#D9CBB8]"
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              );
            })}
          </div>

          {/* Image count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[10px] tracking-[0.2em] text-white/45">
              {activeCategory === "All"
                ? "ALL SPACES"
                : activeCategory.toUpperCase()}
            </p>

            <p className="text-[10px] tabular-nums tracking-[0.15em] text-[#BFAE93]">
              {String(filteredImages.length).padStart(2, "0")} IMAGES
            </p>
          </div>

          {/* Masonry image grid */}
          <div
            ref={gridRef}
            className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:gap-7"
          >
            {filteredImages.map((image, index) => (
              <article
                key={image.id}
                className="gallery-card group mb-5 break-inside-avoid sm:mb-6 xl:mb-7"
              >
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="block w-full text-left"
                  aria-label={`Open image: ${image.title}`}
                >
                  <div className="relative isolate overflow-hidden bg-[#17242D]">
                    <div
                      className={`relative w-full ${
                        index % 4 === 0
                          ? "aspect-[4/5]"
                          : index % 3 === 0
                            ? "aspect-[5/4]"
                            : "aspect-[3/4]"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.045]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1620]/75 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Image hover action */}
                      <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/50 bg-[#0B1620]/20 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <Expand size={15} strokeWidth={1.3} />
                      </div>

                      {/* Image title */}
                      <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-6">
                        <p className="mb-2 text-[9px] tracking-[0.25em] text-[#D9CBB8]">
                          {image.category.toUpperCase()}
                        </p>

                        <h3 className="font-serif text-xl text-white sm:text-2xl">
                          {image.title}
                        </h3>

                        <p className="mt-2 text-[10px] tracking-wide text-white/65">
                          {image.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Mobile / always-visible caption */}
                <div className="flex items-start justify-between gap-3 pt-4 sm:pt-5">
                  <div>
                    <h3 className="font-serif text-lg text-[#F4EFE7]">
                      {image.title}
                    </h3>

                    <p className="mt-1 text-[9px] tracking-[0.16em] text-white/40">
                      {image.category.toUpperCase()}
                    </p>
                  </div>

                  <span className="pt-1 font-serif text-xs text-[#BFAE93]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl text-[#D9CBB8]">
                More spaces coming soon.
              </p>
              <p className="mt-3 text-sm text-white/50">
                Explore another category to discover our collection.
              </p>
            </div>
          )}
        </div>
      </section>


      {/* ================= LIGHTBOX ================= */}
      {activeIndex !== null && (
        <GalleryLightbox
          images={filteredImages}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </main>
  );
}
