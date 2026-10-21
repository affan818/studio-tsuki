import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-2.5 md:px-10 md:py-3 lg:px-16">
        {/* Logo */}
        <a href="#" aria-label="Studio Tsuki home">
          <Image
            src="/images/logo-second.png"
            alt="Studio Tsuki"
            width={130}
            height={80}
            priority
            className="h-auto w-[76px] md:w-[92px]"
          />
        </a>
        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-2 text-sm tracking-wide text-white/75 transition-colors duration-300 hover:text-[#D9CBB8]"
            >
              {link.label}

              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#BFAE93] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>
        {/* CTA */}

        <a
          href="#contact"
          className="group relative isolate inline-flex overflow-hidden border border-[#BFAE93]/70 px-3 py-2 text-[9px] tracking-[0.1em] text-white transition-colors duration-500 hover:border-[#D9CBB8] hover:text-[#0B1620] sm:px-4 sm:py-2.5 sm:text-[13px]"
        >
          {/* Animated background fill */}
          <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#D9CBB8] transition-transform duration-500 ease-out group-hover:scale-x-100" />

          <span className="flex items-center gap-2">
            START A PROJECT
            <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
              ↗
            </span>
          </span>
        </a>
      </nav>
    </header>
  );
}
