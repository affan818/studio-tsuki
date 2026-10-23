"use client";
////////////
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { gsap } from "gsap";

const testimonials = [
  {
    quote:
      "A thoughtful approach to design, where every detail feels intentional and every corner feels like home.",
    name: "Client Name",
    project: "Residential Interior Design",
    initials: "CN",
    image: "/images/testimonial-interior.webp",
  },
  {
    quote:
      "The entire experience felt personal and considered. Our space now reflects the way we truly want to live.",
    name: "Client Name",
    project: "Japandi Living Space",
    initials: "CN",
    image: "/images/testimonial-interior.webp",
  },
  {
    quote:
      "From the first conversation to the final details, the vision came together with a beautiful sense of balance.",
    name: "Client Name",
    project: "Luxury Bedroom Design",
    initials: "CN",
    image: "/images/testimonial-interior.webp",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  const active = testimonials[activeIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".testimonial-image", {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: undefined,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const changeTestimonial = (direction: number) => {
    if (isAnimating) return;

    const content = contentRef.current;
    if (!content) return;

    const nextIndex =
      (activeIndex + direction + testimonials.length) % testimonials.length;

    setIsAnimating(true);
    animationRef.current?.kill();

    animationRef.current = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        animationRef.current = null;
      },
    });

    animationRef.current
      .to(content, {
        opacity: 0,
        y: 8,
        duration: 0.2,
        ease: "power2.in",
      })
      .add(() => {
        setActiveIndex(nextIndex);
      })
      .set(content, {
        y: 8,
      })
      .to(content, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
      });
  };

  useEffect(() => {
    return () => {
      animationRef.current?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#07131D]"
    >
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        {/* Left: Interior image */}

        <div className="testimonial-image relative min-h-[320px] w-full self-stretch overflow-hidden bg-[#07131D] sm:min-h-[420px] md:min-h-full">
          <Image
            src="/images/testimonial.gif"
            alt="Studio Tsuki luxury interior"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover object-center"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07131D]/40 via-transparent to-transparent" />
        </div>
        {/* Right: Testimonial */}
        <div className="flex flex-col justify-center px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-16">
          {/* Only this area changes between testimonials */}
          <div ref={contentRef} aria-live="polite" aria-atomic="true">
            <span
              aria-hidden="true"
              className="mb-4 block font-serif text-5xl leading-none text-[#BFAE93]"
            >
              “
            </span>

            <blockquote className="max-w-xl font-serif text-xl leading-[1.55] text-[#E3DDD5] sm:text-2xl lg:text-[1.75rem]">
              {active.quote}
            </blockquote>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#BFAE93]/30 bg-[#D9CBB8] font-serif text-sm text-[#14232E]"
              >
                {active.initials}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm text-[#F1EAE1]">{active.name}</p>
                <p className="mt-1 text-xs leading-5 text-[#AAB0B6]">
                  {active.project}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#D9CBB8]">
                <span className="tabular-nums">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-5 bg-[#BFAE93]/60" />
                <span className="tabular-nums text-white/50">
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* Working navigation controls */}
          <div className="mt-7 flex items-center gap-3">
            <button
              type="button"
              onClick={() => changeTestimonial(-1)}
              disabled={isAnimating}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#D9CBB8] transition-all duration-300 hover:border-[#D9CBB8]/70 hover:bg-[#D9CBB8]/10 disabled:cursor-wait disabled:opacity-50"
            >
              <ArrowLeft size={17} strokeWidth={1.3} />
            </button>

            <button
              type="button"
              onClick={() => changeTestimonial(1)}
              disabled={isAnimating}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#D9CBB8] transition-all duration-300 hover:border-[#D9CBB8]/70 hover:bg-[#D9CBB8]/10 disabled:cursor-wait disabled:opacity-50"
            >
              <ArrowRight size={17} strokeWidth={1.3} />
            </button>

            <span className="ml-2 text-[9px] tracking-[0.18em] text-white/40 uppercase">
              Client Stories
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
