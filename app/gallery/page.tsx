import type { Metadata } from "next";
import GalleryPage from "@/components/gallery/GalleryPage";

export const metadata: Metadata = {
  title: "Interior Design Gallery | Studio Tsuki",
  description:
    "Explore the Studio Tsuki interior design gallery featuring thoughtful residential and commercial interiors, Japandi-inspired spaces, minimalist design and timeless details.",
  alternates: {
    canonical: "https://www.studiotsuki.in/gallery",
  },
  openGraph: {
    title: "The Tsuki Collection | Studio Tsuki",
    description:
      "Discover thoughtfully designed spaces, natural materials and timeless interior design inspiration.",
    url: "https://www.studiotsuki.in/gallery",
    type: "website",
  },
};

export default function Gallery() {
  return <GalleryPage />;
}
