
"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import type { GalleryImage } from "@/data/gallery";

type Props = {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}: Props) {
  const image = images[activeIndex];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();

      if (event.key === "ArrowRight") {
        onNavigate((activeIndex + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        onNavigate(
          (activeIndex - 1 + images.length) % images.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length, onClose, onNavigate]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070D12]/[0.97] p-4 backdrop-blur-xl sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
      onClick={onClose}
    >
      {/* Top controls */}
      <div className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between sm:left-10 sm:right-10 sm:top-8">
        <p className="text-[10px] tracking-[0.3em] text-[#D9CBB8]">
          STUDIO TSUKI
        </p>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#D9CBB8] hover:text-[#D9CBB8]"
        >
          <X size={19} strokeWidth={1.3} />
        </button>
      </div>

      {/* Previous */}
      <button
        type="button"
        aria-label="Previous image"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((activeIndex - 1 + images.length) % images.length);
        }}
        className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#D9CBB8] hover:text-[#D9CBB8] sm:left-8 sm:h-12 sm:w-12"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <div
        className="relative flex h-[70vh] w-full max-w-6xl items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          key={image.id}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 95vw, 85vw"
          className="object-contain"
          priority
        />
      </div>

      {/* Next */}
      <button
        type="button"
        aria-label="Next image"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((activeIndex + 1) % images.length);
        }}
        className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#D9CBB8] hover:text-[#D9CBB8] sm:right-8 sm:h-12 sm:w-12"
      >
        <ChevronRight size={22} />
      </button>

      {/* Caption */}
      <div
        className="relative z-10 mt-5 flex w-full max-w-6xl flex-col justify-between gap-3 border-t border-white/15 pt-5 sm:flex-row sm:items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div>
          <h3 className="font-serif text-xl text-[#F4EFE7] sm:text-2xl">
            {image.title}
          </h3>

          <p className="mt-2 flex items-center gap-2 text-xs tracking-wide text-white/50">
            <MapPin size={13} />
            {image.location}
          </p>
        </div>

        <p className="text-xs tabular-nums tracking-[0.2em] text-[#D9CBB8]">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
