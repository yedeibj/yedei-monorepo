"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/data/heroSlides";
import { accentHex } from "@/data/categories";
import { formatAmount } from "@/data/products";
import FilYedei from "./FilYedei";

const AUTOPLAY_MS = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slideCount = heroSlides.length;

  const goTo = useCallback(
    (i: number) => {
      setIndex((i + slideCount) % slideCount);
    },
    [slideCount]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % slideCount);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slideCount]);

  const slide = heroSlides[index];
  const accent = accentHex[slide.accent];

  return (
    <section
      className="relative overflow-hidden border-b border-stone-light/60"
      aria-roledescription="carrousel"
      aria-label="Mises en avant YEDEI"
    >
      <div className="mx-auto grid max-w-container items-stretch gap-10 px-6 py-12 md:grid-cols-12 md:gap-8 md:px-10 md:py-0">
        {/* Texte */}
        <div className="flex flex-col justify-center md:col-span-5 md:py-24">
          <span
            className="text-xs uppercase tracking-widest2"
            style={{ color: accent }}
          >
            {slide.kind === "promo" ? "Offre limitée" : "Collection 2026"}
          </span>

          <h1
            key={slide.id}
            className="mt-5 font-display text-4xl italic leading-[1.1] text-ink sm:text-5xl"
          >
            {slide.title}
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
            {slide.description}
          </p>

          {slide.kind === "promo" && slide.priceBefore && slide.priceAfter && (
            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-lg text-ink/40 line-through">
                {formatAmount(slide.priceBefore, slide.currency ?? "FCFA")}
              </span>
              <span
                className="font-display text-2xl italic"
                style={{ color: accent }}
              >
                {formatAmount(slide.priceAfter, slide.currency ?? "FCFA")}
              </span>
            </div>
          )}

          <div className="mt-9 flex flex-wrap items-center gap-4">
            
              href={slide.ctaHref}
              className="px-7 py-3.5 text-sm uppercase tracking-widest2 text-paper transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              {slide.ctaLabel}
            </a>
            
              href="#categories"
              className="border border-ink px-7 py-3.5 text-sm uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Découvrir la collection
            </a>
          </div>

          <FilYedei className="mt-10" />

          {/* Indicateurs */}
          <div className="mt-8 flex items-center gap-2" role="tablist" aria-label="Choisir une slide">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Aller à la slide ${i + 1} : ${s.title}`}
                onClick={() => goTo(i)}
                className="h-2 rounded-full transition-all"
                style={{
                  width: i === index ? "28px" : "8px",
                  backgroundColor:
                    i === index ? accentHex[s.accent] : "#D8D3C9",
                }}
              />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative md:col-span-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
            {slide.kind === "promo" && (
              <span
                className="absolute left-4 top-4 px-4 py-1.5 text-xs uppercase tracking-widest2 text-paper"
                style={{ backgroundColor: accent }}
              >
                Promo
              </span>
            )}
          </div>

          {/* Flèches */}
          <button
            type="button"
            aria-label="Slide précédente"
            onClick={prev}
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center bg-paper/90 p-2.5 text-ink transition-colors hover:bg-paper md:flex"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Slide suivante"
            onClick={next}
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center bg-paper/90 p-2.5 text-ink transition-colors hover:bg-paper md:flex"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
