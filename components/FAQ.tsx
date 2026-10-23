"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";

const faqs = [
  {
    question: "How do I choose an interior design studio in Mumbai?",
    answer:
      "Look for a studio whose design approach aligns with your preferences, whose portfolio reflects relevant experience, and whose services match your requirements. Before appointing a designer, discuss your budget, deliverables, materials, timelines, and execution responsibilities.",
  },
  {
    question: "What interior design services does Studio Tsuki offer?",
    answer:
      "Studio Tsuki's proposed service scope may include residential and commercial interiors, space planning, furniture and material selection, lighting design, 3D visualisation, and styling. Design-and-execution or turnkey arrangements depend on the specific project scope and agreed deliverables.",
  },
  {
    question: "Does Studio Tsuki design Mumbai apartments and compact homes?",
    answer:
      "Residential interiors can be planned around the needs of apartments and compact homes. Depending on the project, solutions may include efficient furniture placement, integrated storage, multifunctional elements, considered lighting, and layouts tailored to everyday routines.",
  },
  {
    question: "How much does interior design cost in Mumbai?",
    answer:
      "The cost depends on the property's size, design complexity, materials, furniture, site conditions, and level of execution required. A project-specific estimate can be prepared after discussing your space, requirements, budget, and scope.",
  },
  {
    question:
      "What is the difference between interior design and turnkey interior solutions?",
    answer:
      "Interior design generally focuses on planning and developing the proposed space. Turnkey solutions may additionally cover implementation, material procurement, vendor coordination, and finishing. The exact responsibilities depend on the agreed scope and contract.",
  },
  {
    question: "Does Studio Tsuki offer 3D interior visualisation?",
    answer:
      "3D visualisation can help communicate a proposed layout, material palette, finishes, and overall design direction before implementation. Its availability and deliverables should be confirmed as part of your project's agreed scope.",
  },
  {
    question: "Can Japandi and minimalist interiors work in Indian homes?",
    answer:
      "Yes. Japandi and minimalist interiors can be adapted to Indian homes using warm wood tones, natural textures, practical storage, comfortable furniture, and balanced lighting. The design should also reflect your lifestyle, climate considerations, and maintenance preferences.",
  },
  {
    question: "Can Vastu preferences be considered in interior design?",
    answer:
      "Vastu-related preferences can be discussed during the initial consultation. Their integration depends on the existing layout, project requirements, and practical design constraints.",
  },
  {
    question: "How long does a home interior design project take?",
    answer:
      "The timeline depends on property size, design complexity, approval stages, material availability, and whether execution is included. A project-specific schedule can be discussed once the scope and requirements are established.",
  },
  {
    question: "How can I start a project with Studio Tsuki?",
    answer:
      "Get in touch with your project location, property type, approximate area, preferred style, budget range, and expected timeline. These details help establish your requirements and determine the appropriate next steps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-[#0B1620] px-5 py-24 sm:px-8 md:py-32 lg:px-16"
    >

        
{/* Flowing Architectural Lines Background */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 overflow-hidden"
>
  {/* Ambient architectural glow */}
  <div
    className="absolute -right-32 top-0 h-[500px] w-[500px]
    rounded-full bg-[#BFAE93]/[0.045] blur-[120px]"
  />

  <svg
    viewBox="0 0 1440 1000"
    preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 h-full w-full"
    fill="none"
  >
    <defs>
      <linearGradient
        id="architecturalLine"
        x1="0"
        y1="0"
        x2="1440"
        y2="1000"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#D9CBB8" stopOpacity="0" />
        <stop offset="45%" stopColor="#D9CBB8" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#BFAE93" stopOpacity="0.02" />
      </linearGradient>

      <linearGradient
        id="architecturalHighlight"
        x1="0"
        y1="0"
        x2="1440"
        y2="1000"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#BFAE93" stopOpacity="0" />
        <stop offset="50%" stopColor="#D9CBB8" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#BFAE93" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Large flowing contour lines */}
    <g
      stroke="url(#architecturalLine)"
      strokeWidth="0.8"
      className="faq-lines faq-lines-one"
    >
      <path d="M950 -120 C700 80 1160 180 930 340 S790 660 1120 850 S1330 1050 1200 1150" />
      <path d="M1000 -140 C750 60 1210 170 980 330 S840 650 1170 830 S1380 1030 1250 1130" />
      <path d="M1050 -160 C800 40 1260 150 1030 310 S890 630 1220 810 S1430 1010 1300 1110" />
      <path d="M1100 -180 C850 20 1310 130 1080 290 S940 610 1270 790 S1480 990 1350 1090" />
    </g>

    {/* Fine architectural arcs */}
    <g
      stroke="url(#architecturalLine)"
      strokeWidth="0.7"
      className="faq-lines faq-lines-two"
    >
      <path d="M1440 100 C1210 160 1170 340 1330 430 S1450 650 1200 760" />
      <path d="M1440 135 C1240 190 1200 350 1350 445 S1470 665 1220 790" />
      <path d="M1440 170 C1270 220 1230 365 1370 460 S1490 680 1240 820" />
      <path d="M1440 205 C1300 250 1260 380 1390 475 S1510 695 1260 850" />
    </g>

    {/* One subtle highlight stroke */}
    <path
      d="M980 -80 C790 100 1120 190 950 360 S870 650 1130 830"
      stroke="url(#architecturalHighlight)"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeDasharray="5 14"
      className="faq-highlight"
    />

    {/* Delicate construction marks */}
    <g
      stroke="#D9CBB8"
      strokeOpacity="0.15"
      strokeWidth="0.7"
    >
      <path d="M90 820 H230 M160 750 V890" />
      <circle cx="160" cy="820" r="22" />
      <circle cx="160" cy="820" r="3" />
      <path d="M1230 100 H1340 M1285 45 V155" />
      <circle cx="1285" cy="100" r="16" />
    </g>
  </svg>

  {/* Soft fade behind text for readability */}
  <div
    className="absolute inset-0 bg-gradient-to-r
    from-[#0B1620]/90 via-[#0B1620]/35 to-transparent"
  />
</div>

      {/* Subtle ambient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#BFAE93]/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 xl:gap-28">
          {/* Editorial introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 text-[10px] tracking-[0.32em] text-[#BFAE93] sm:text-xs">
              YOUR QUESTIONS, ANSWERED
            </p>

            <h2
              id="faq-heading"
              className="max-w-lg font-serif text-4xl leading-[1.15] text-[#F4EFE7] sm:text-5xl md:text-6xl"
            >
              Interior Design
              <span className="mt-1 block italic text-[#D9CBB8]">FAQs</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55 sm:text-base">
              Thoughtful spaces begin with the right questions. Explore our
              answers to common questions about interior design, project
              planning, materials, and getting started with your space.
            </p>

            <div className="mt-9 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-12 bg-[#BFAE93]/70" />
              <span className="text-[10px] tracking-[0.25em] text-[#BFAE93]/80">
                A LITTLE MORE CLARITY
              </span>
            </div>

            <div className="mt-12 hidden border-t border-white/10 pt-7 lg:block">
              <p className="font-serif text-2xl text-[#F4EFE7]">
                Have a space in mind?
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-white/50">
                Tell us about your vision and the space you would like to
                create.
              </p>

              <a
                href="tel:+919082028042"
                aria-label="Call Studio Tsuki to discuss your interior design project"
                className="group mt-6 inline-flex items-center gap-3 border-b border-[#BFAE93]/50 pb-2 text-xs tracking-[0.18em] text-[#D9CBB8] transition-colors duration-300 hover:text-white"
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

          {/* FAQ accordion */}
          <div className="border-t border-[#BFAE93]/25">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              const questionId = `faq-question-${index}`;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#BFAE93]/25"
                >
                  <h3>
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="group flex w-full items-start gap-4 py-6 text-left sm:gap-6 sm:py-7"
                    >
                      <span className="pt-1 font-serif text-sm text-[#BFAE93]/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`flex-1 font-serif text-lg leading-snug transition-colors duration-300 sm:text-xl ${
                          isOpen
                            ? "text-[#D9CBB8]"
                            : "text-white/85 group-hover:text-[#D9CBB8]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-[#BFAE93]/60 text-[#D9CBB8]"
                            : "border-white/15 text-white/60 group-hover:border-[#BFAE93]/60 group-hover:text-[#D9CBB8]"
                        }`}
                      >
                        <Plus size={16} strokeWidth={1.2} />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-7 pl-9 pr-2 text-sm leading-7 text-white/55 sm:pb-8 sm:pl-12 sm:pr-10 sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile contact link */}
          <div className="border-t border-white/10 pt-7 lg:hidden">
            <p className="font-serif text-2xl text-[#F4EFE7]">
              Have a space in mind?
            </p>
            <p className="mt-3 text-sm leading-6 text-white/50">
              Let&apos;s talk about your ideas, requirements, and the
              possibilities for your space.
            </p>
            <a
              href="tel:+919082028042"
              className="mt-6 inline-flex items-center gap-3 border-b border-[#BFAE93]/50 pb-2 text-xs tracking-[0.18em] text-[#D9CBB8] transition-colors hover:text-white"
            >
              LET&apos;S TALK
              <ArrowUpRight size={15} strokeWidth={1.3} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
