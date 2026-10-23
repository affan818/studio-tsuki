"use client";

import {
  ArrowUpRight,
  Compass,
  Layers3,
  CircleDot,
  Scan,
  Workflow,
  Handshake,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Personalised Design Approach",
    description:
      "We begin with your requirements, preferences and aspirations, creating a design direction that feels personal rather than predefined.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Functionality Meets Aesthetics",
    description:
      "From circulation and storage to lighting and furniture placement, we balance visual harmony with the practical needs of everyday living.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "A Timeless Design Language",
    description:
      "Inspired by minimalism, Japandi and wabi-sabi, our approach embraces warmth, natural textures and a sense of understated balance.",
    icon: CircleDot,
  },
  {
    number: "04",
    title: "Materials With Purpose",
    description:
      "We consider the look, feel, performance, maintenance and budget of materials to help guide thoughtful design decisions.",
    icon: Scan,
  },
  {
    number: "05",
    title: "Flexible Project Scope",
    description:
      "Whether you need design consultation, design development or design-and-execution services, the scope can be discussed around your project.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Collaborative Decision-Making",
    description:
      "We value open conversations, clear expectations and defined deliverables, keeping you involved in decisions throughout the design process.",
    icon: Handshake,
  },
];

export default function WhyChooseTsuki() {
  return (
    <section
      id="why-studio-tsuki"
      aria-labelledby="tsuki-difference-heading"
      className="relative isolate overflow-hidden bg-[#0B1620] px-5 py-24 sm:px-8 md:py-32 lg:px-16"
    >
      {/* Premium Japanese Architectural Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Warm ambient light */}
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#BFAE93]/[0.08] blur-[120px]" />

        {/* Oversized moon-inspired disc */}
        <div
          className="absolute -left-44 top-24 h-[360px] w-[360px]
    rounded-full border border-[#D9CBB8]/20
    bg-gradient-to-br from-[#BFAE93]/10 via-[#0B1620]/5 to-transparent
    shadow-[inset_-25px_-15px_70px_rgba(191,174,147,0.06)]"
        />

        {/* Fine concentric architectural curves */}
        <svg
          viewBox="0 0 800 900"
          preserveAspectRatio="xMidYMid slice"
          className="absolute -right-24 top-0 h-full w-[75%] opacity-70"
          fill="none"
        >
          <g stroke="#D9CBB8" strokeOpacity="0.16" strokeWidth="0.8">
            <path d="M650 -100 V1000" />
            <path d="M680 -100 V1000" />
            <path d="M710 -100 V1000" />
            <path d="M740 -100 V1000" />
            <path d="M770 -100 V1000" />
            <path d="M800 -100 V1000" />

            <path d="M480 220 C480 70 730 70 730 220 V580" />
            <path d="M510 220 C510 110 700 110 700 220 V580" />
            <path d="M540 220 C540 150 670 150 670 220 V580" />
          </g>

          {/* Flowing gold line */}
          <path
            d="M800 0 C570 160 800 280 620 440 S580 700 800 900"
            stroke="#BFAE93"
            strokeOpacity="0.80"
            strokeWidth="1"
            strokeDasharray="3 12"
          />

          {/* Small architectural markers */}
          <g fill="#D9CBB8" fillOpacity="0.80">
            <circle cx="680" cy="180" r="2" />
            <circle cx="620" cy="440" r="2" />
            <circle cx="740" cy="700" r="2" />
          </g>
        </svg>

        {/* Keep the central content readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1620]/80 via-[#0B1620]/65 to-[#0B1620]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1620]/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 grid gap-7 md:mb-20 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-12">
          <div>
            <p className="mb-5 text-[10px] tracking-[0.32em] text-[#BFAE93] sm:text-xs">
              THE TSUKI DIFFERENCE
            </p>

            <h2
              id="tsuki-difference-heading"
              className="max-w-xl font-serif text-4xl leading-[1.15] text-[#F4EFE7] sm:text-5xl md:text-6xl"
            >
              Thoughtful Design,
              <span className="mt-1 block italic text-[#D9CBB8]">
                Personal to You
              </span>
            </h2>
          </div>

          <div className="md:justify-self-end md:pb-1">
            <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Choosing an interior design studio is about finding a team that
              understands your vision and translates it into a cohesive,
              functional space. Our approach brings together thoughtful details,
              considered materials and a clear understanding of how you want to
              live.
            </p>
          </div>
        </div>

        {/* Six design principles */}
        <div className="grid border-l border-t border-[#BFAE93]/20 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative flex min-h-[275px] flex-col border-b border-r border-[#BFAE93]/20 p-6 transition-colors duration-500 hover:bg-[#D9CBB8]/[0.035] sm:p-8 lg:min-h-[310px] lg:p-9"
              >
                {/* Number and icon */}
                <div className="mb-9 flex items-center justify-between">
                  <span className="font-serif text-sm text-[#BFAE93]/70">
                    {item.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#BFAE93]/25 text-[#D9CBB8]/80 transition-all duration-500 group-hover:border-[#D9CBB8]/70 group-hover:bg-[#D9CBB8]/[0.07] group-hover:text-[#F4EFE7]">
                    <Icon
                      size={19}
                      strokeWidth={1.15}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Card content */}
                <h3 className="max-w-xs font-serif text-xl leading-snug text-[#F4EFE7] transition-colors duration-300 group-hover:text-[#D9CBB8] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/50 transition-colors duration-300 group-hover:text-white/70">
                  {item.description}
                </p>

                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#D9CBB8]/70 transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg font-serif text-xl leading-relaxed text-[#D9CBB8]/85 sm:text-2xl">
            Good design is not just how a space looks, but how it makes you
            feel.
          </p>

          <a
            href="tel:+918692887850"
            aria-label="Call Studio Tsuki to discuss your interior design project"
            className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-[#BFAE93]/60 pb-2 text-xs tracking-[0.18em] text-[#D9CBB8] transition-colors duration-300 hover:text-white"
          >
            LET&apos;S TALK
            <ArrowUpRight
              size={15}
              strokeWidth={1.3}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
