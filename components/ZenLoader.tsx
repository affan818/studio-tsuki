"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type ZenLoaderProps = {
  onComplete: () => void;
};

export default function ZenLoader({ onComplete }: ZenLoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<SVGSVGElement>(null);
  const strokesRef = useRef<SVGGElement>(null);
  const symbolRef = useRef<SVGTextElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const emblem = emblemRef.current;
    const strokes = strokesRef.current;
    const symbol = symbolRef.current;
    const brand = brandRef.current;

    if (!loader || !emblem || !strokes || !symbol || !brand) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }

    const paths = Array.from(
      strokes.querySelectorAll<SVGGeometryElement>(".emblem-stroke"),
    );

    paths.forEach((path) => {
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    gsap.set([symbol, brand], {
      autoAlpha: 0,
      y: 10,
    });

    gsap.set(emblem, {
      scale: 0.98,
      transformOrigin: "50% 50%",
      force3D: true,
    });

    const timeline = gsap.timeline({
      defaults: {
        ease: "power2.out",
      },
      onComplete,
    });

    timeline
      .to(paths, {
        strokeDashoffset: 0,
        duration: 0.75,
        stagger: 0.035,
        ease: "power2.inOut",
      })
      .to(
        symbol,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.28",
      )
      .to(
        emblem,
        {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "<",
      )
      .to(
        brand,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.12",
      )
      .to(loader, {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power1.inOut",
        delay: 0.12,
      });

    timeline
      .to(paths, {
        strokeDashoffset: 0,
        duration: 1.25,
        stagger: 0.09,
        ease: "power2.inOut",
      })
      .to(
        symbol,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.35",
      )
      .to(
        emblem,
        {
          scale: 1,
          duration: 0.65,
          ease: "power2.out",
        },
        "<",
      )
      .to(
        brand,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2",
      )
      .to(loader, {
        autoAlpha: 0,
        duration: 0.65,
        ease: "power2.inOut",
        delay: 0.35,
      });

    return () => {
      timeline.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      role="status"
      aria-label="Loading Studio Tsuki"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="flex flex-col items-center">
        <svg
          ref={emblemRef}
          viewBox="0 0 240 390"
          className="h-[min(58vh,430px)] w-auto max-w-[72vw] overflow-visible will-change-transform"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="tsukiChampagne"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#EAD7B8" />
              <stop offset="48%" stopColor="#BFA27B" />
              <stop offset="100%" stopColor="#F0DFC2" />
            </linearGradient>
          </defs>

          <g
            ref={strokesRef}
            fill="none"
            stroke="url(#tsukiChampagne)"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Fine vertical line and top dot */}
            <path
              className="emblem-stroke"
              d="M120 8 L120 54"
              strokeWidth="0.9"
            />
            <circle
              className="emblem-stroke"
              cx="120"
              cy="65"
              r="2.1"
              strokeWidth="1.1"
            />

            {/* Upper crescent detail */}
            <path
              className="emblem-stroke"
              d="M148 38 C182 50 199 83 182 111"
              strokeWidth="1.1"
            />

            {/* Main open circular arc */}
            <path
              className="emblem-stroke"
              d="M39 121 C62 83 101 71 132 76 C173 82 204 111 211 145 C216 166 209 184 195 198"
              strokeWidth="1.1"
            />

            {/* Inner fine arc */}
            <path
              className="emblem-stroke"
              d="M111 81 C144 79 170 93 190 113"
              strokeWidth="0.7"
            />

            {/* Lower sweeping crescent */}
            <path
              className="emblem-stroke"
              d="M64 280 C55 310 78 343 112 349 C145 355 177 344 202 325"
              strokeWidth="1.1"
            />

            {/* Fine lower arc */}
            <path
              className="emblem-stroke"
              d="M77 296 C94 326 126 338 159 333"
              strokeWidth="0.7"
            />

            {/* Bottom dot and vertical line */}
            <circle
              className="emblem-stroke"
              cx="120"
              cy="359"
              r="2.1"
              strokeWidth="1.1"
            />
            <path
              className="emblem-stroke"
              d="M120 370 L120 385"
              strokeWidth="0.9"
            />
          </g>

          {/* Central Japanese character */}
          <text
            ref={symbolRef}
            x="120"
            y="238"
            textAnchor="middle"
            fontSize="125"
            fontFamily="serif"
            fontWeight="400"
            fill="url(#tsukiChampagne)"
          >
            月
          </text>
        </svg>

        <div ref={brandRef} className="mt-5 text-center">
          <p className="font-serif text-sm tracking-[0.42em] text-[#E4D0B0]">
            STUDIO TSUKI
          </p>

          <p className="mt-3 text-[8px] tracking-[0.25em] text-[#BFAE93]/75 uppercase">
            Thoughtfully Designed · Timeless Living
          </p>
        </div>
      </div>
    </div>
  );
}
