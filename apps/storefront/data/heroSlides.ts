import { categories } from "./categories";
import type { BrandAccent } from "./categories";

export type HeroSlide = {
  id: string;
  kind: "category" | "promo";
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  accent: BrandAccent;
  // Renseignés uniquement pour les slides de type "promo".
  // Prévus pour être modifiés depuis l'espace admin (prix avant / après).
  priceBefore?: number;
  priceAfter?: number;
  currency?: string;
};

// Données statiques temporaires — à remplacer par un appel base de données.
// Les 4 premières slides sont générées depuis les catégories ; la 5ème est
// une promotion éditable indépendamment (prix avant/après).
const categorySlides: HeroSlide[] = categories.map((category) => ({
  id: `slide-${category.slug}`,
  kind: "category",
  title:
    category.slug === "femmes"
      ? "L'élégance pour toute la famille"
      : `Collection ${category.label}`,
  description: category.description,
  image: category.image,
  ctaLabel: `Acheter ${category.label}`,
  ctaHref: `/${category.slug}`,
  accent: category.accent,
}));

const promoSlide: HeroSlide = {
  id: "slide-promo",
  kind: "promo",
  title: "Rentrée scolaire — offre spéciale",
  description: "Uniformes et tenues scolaires à prix réduit, pour une durée limitée.",
  image: "https://picsum.photos/seed/yedei-promo-rentree/1600/2000",
  ctaLabel: "Voir l'offre",
  ctaHref: "/enfants/tenues-scolaires",
  accent: "red",
  priceBefore: 25000,
  priceAfter: 18500,
  currency: "FCFA",
};

export const heroSlides: HeroSlide[] = [...categorySlides, promoSlide];
