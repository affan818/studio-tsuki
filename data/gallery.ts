export type GalleryCategory = "All" | "Commercial";

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  location: string;
  featured?: boolean;
};

export const galleryCategories: GalleryCategory[] = ["All", "Commercial"];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/architects-near-me.webp",
    alt: "Modern office workspace with wooden desks, ergonomic chairs and glass partitions",
    title: "The Modern Workspace",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 2,
    src: "/images/gallery/architecture-and-interior-design.webp",
    alt: "Contemporary executive office interior with minimalist furniture and ambient lighting",
    title: "The Executive Space",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 3,
    src: "/images/gallery/architecture-home-design.webp",
    alt: "Commercial office interior featuring natural wood finishes and functional furniture",
    title: "Natural Workspace",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 4,
    src: "/images/gallery/top-interior-designer-in-mumbai-studio-tsuki.webp",
    alt: "Modern commercial office interior with refined furniture and natural material finishes",
    title: "Contemporary Offices",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 5,
    src: "/images/gallery/architecture-in-mumbai.webp",
    alt: "Premium corporate office interior with elegant finishes and minimalist detailing",
    title: "The Corporate Suite",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 6,
    src: "/images/gallery/best-interior-designers-in-mumbai.webp",
    alt: "Office conference room with wooden meeting table and comfortable executive chairs",
    title: "Spaces for Collaboration",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 7,
    src: "/images/gallery/budget-friendly-architecture-in-mumbai.webp",
    alt: "Contemporary office workspace with comfortable seating and layered ambient lighting",
    title: "Comfort at Work",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 8,
    src: "/images/gallery/portfolio-img-2.png",
    alt: "Modern commercial workspace designed with functional furniture and warm interior finishes",
    title: "The Work Environment",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 9,
    src: "/images/gallery/portfolio-img-1.png",
    alt: "Contemporary office interior showcasing thoughtful space planning and modern design",
    title: "The Creative Office",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 10,
    src: "/images/gallery/commercial-interior-designer-in-mumbai.webp",
    alt: "Commercial office interior with functional layouts and sophisticated material finishes",
    title: "Designed for Business",
    category: "Commercial",
    location: "Commercial Interiors",
  },

  {
    id: 11,
    src: "/images/gallery/portfolio-img.png",
    alt: "Professional office interior with contemporary furniture and warm ambient lighting",
    title: "The Professional Setting",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 12,
    src: "/images/gallery/premium-design-interior-designer.webp",
    alt: "Premium office lounge featuring contemporary furniture and refined natural textures",
    title: "Quiet Sophistication",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 13,
    src: "/images/gallery/office-interior.webp",
    alt: "Contemporary office interior with modern workstations and functional space planning",
    title: "The Office Experience",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 14,
    src: "/images/gallery/residential-architect.webp",
    alt: "Modern executive office interior with clean architectural lines and warm lighting",
    title: "The Professional Space",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 15,
    src: "/images/gallery/residential-archiects-near-me.webp",
    alt: "Minimalist commercial workspace with functional layouts and contemporary interiors",
    title: "Purposeful Workspaces",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 16,
    src: "/images/gallery/best-architecture-designer-near-me.webp",
    alt: "Contemporary corporate office design with elegant finishes and practical furniture",
    title: "The Corporate Interior",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 17,
    src: "/images/gallery/best-interior-designer-in-mumbai.webp",
    alt: "Modern commercial office space with balanced lighting and minimalist architectural details",
    title: "Modern Business Spaces",
    category: "Commercial",
    location: "Commercial Interiors",
  },
  {
    id: 18,
    src: "/images/gallery/studio-tsuki-interior.webp",
    alt: "Studio Tsuki commercial interior design featuring refined materials and contemporary styling",
    title: "The Tsuki Perspective",
    category: "Commercial",
    location: "Commercial Interiors",
  },
];
