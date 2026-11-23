import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/fsicData';
import { ResilientImage } from './ResilientImage';

type GalleryFilter = 'All' | GalleryItem['category'];

const GALLERY_CATEGORIES: GalleryFilter[] = [
  'All',
  'Training Labs',
  'Workshops',
  'Collaboration',
  'Showcase',
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryFilter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const activeLightboxItem =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  return (
    <section id="gallery" className="bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-700">Campus & Training Gallery</p>
            <h2 className="font-display headline-balance mt-2 text-3xl font-bold tracking-tight text-[#0F294A] sm:text-4xl">
              Learning Spaces, Workshops & Student Highlights
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              A look inside practical training labs, seminar sessions, collaborative project work, and student project showcases. Representative visuals below can be swapped directly with FSIC&apos;s campus photography.
            </p>
          </div>

          {/* Category Filter */}
          <div
            role="tablist"
            aria-label="Filter gallery images"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 self-start"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#0F294A] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <figure
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-slate-200 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 cursor-pointer"
                aria-label={`View larger image: ${item.title}`}
              >
                <ResilientImage
                  src={item.imageSrc}
                  alt={item.alt}
                  fallbackTitle={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-[#0F294A] opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100"
                >
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>

              <figcaption className="p-5">
                <p className="text-xs font-semibold text-orange-600">{item.category}</p>
                <h3 className="font-display mt-1 text-base font-bold text-[#0F294A]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xs"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3.5">
              <div>
                <p className="text-xs font-semibold text-orange-400">
                  {activeLightboxItem.category}
                </p>
                <h3 className="font-display text-base font-bold text-white">
                  {activeLightboxItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close image preview"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-[4/3] max-h-[68vh] w-full bg-slate-950">
              <ResilientImage
                src={activeLightboxItem.imageSrc}
                alt={activeLightboxItem.alt}
                fallbackTitle={activeLightboxItem.title}
                className="h-full w-full object-contain"
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                      )
                    }
                    aria-label="Previous image"
                    className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/80 text-white transition-colors hover:bg-orange-600 cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
                    }
                    aria-label="Next image"
                    className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/80 text-white transition-colors hover:bg-orange-600 cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            <div className="border-t border-slate-800 px-5 py-4">
              <p className="text-sm text-slate-200">{activeLightboxItem.caption}</p>
              <p className="mt-1 text-xs text-slate-400">{activeLightboxItem.note}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
