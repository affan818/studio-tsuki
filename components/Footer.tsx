"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-top > *, .footer-bottom > *", {
        y: 14,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          once: true,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden border-t border-white/10 bg-[#07131D] px-5 text-[#F1EAE1] sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top row */}
        <div className="footer-top grid gap-8 border-b border-white/10 py-9 md:grid-cols-[1fr_2fr_1fr] md:items-center md:gap-6 md:py-8">
          {/* Brand */}

          <Link
            href="#home"
            aria-label="Studio Tsuki home"
            className="group flex w-fit items-center"
          >
            <Image
              src="/images/logo-second.png"
              alt="Studio Tsuki"
              width={160}
              height={60}
              priority
              className="h-auto w-[125px] object-contain transition-opacity duration-300 group-hover:opacity-80 sm:w-[145px]"
            />
          </Link>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-3 md:justify-center lg:gap-x-7"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative py-1 text-[13px] text-white/70 transition-colors duration-300 hover:text-[#D9CBB8]"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#BFAE93] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4 md:justify-end">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/65 transition-colors duration-300 hover:text-[#D9CBB8]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="0.5" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="text-[20px] font-serif text-white/65 transition-colors duration-300 hover:text-[#D9CBB8]"
            >
              P
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/65 transition-colors duration-300 hover:text-[#D9CBB8]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom grid gap-4 py-5 text-[12px] leading-5 text-white/45 md:grid-cols-3 md:items-center md:gap-6">
          <p>© {currentYear ?? "2026"} Studio Tsuki. All rights reserved.</p>

          <p className="md:text-center">
            Thoughtfully designed. Timelessly lived.
          </p>

          <a
            href="https://www.mkatbrandworks.com/"
            className="group inline-flex w-fit items-center gap-2 transition-colors duration-300 hover:text-[#D9CBB8] md:ml-auto"
          >
            Designed & Developed by MKAT Brandworks
            <ArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
