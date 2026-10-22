"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface PortfolioGridProps {
  images: { src: string; alt: string }[];
  columns?: 2 | 4;
}

export default function PortfolioGrid({ images, columns = 4 }: PortfolioGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i !== null ? (i > 0 ? i - 1 : images.length - 1) : null)),
    [images.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i !== null ? (i < images.length - 1 ? i + 1 : 0) : null)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, prev, next]);

  const gridClass =
    columns === 2
      ? "grid-cols-2 gap-2"
      : "grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3";

  return (
    <>
      <div className={`grid ${gridClass}`}>
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="relative aspect-square overflow-hidden bg-ht-gray group warm-glow cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ht-gold"
            aria-label={`View full image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes={columns === 2 ? "(max-width: 1024px) 45vw, 25vw" : "(max-width: 768px) 45vw, 25vw"}
            />
            {/* Expand hint on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
              <svg
                className="w-8 h-8 text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow-lg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/60 hover:text-white z-10 p-2"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 sm:left-4 text-white/50 hover:text-white z-10 p-2"
              aria-label="Previous image"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image container */}
          <div
            className="relative w-[85vw] h-[80vh] sm:w-[80vw] sm:h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className="object-contain"
              sizes="85vw"
              priority
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 sm:right-4 text-white/50 hover:text-white z-10 p-2"
              aria-label="Next image"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 font-display text-sm tracking-wider">
              {activeIndex + 1} / {images.length}
            </p>
          )}
        </div>
      )}
    </>
  );
}
