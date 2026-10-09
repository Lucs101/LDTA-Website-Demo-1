import { useState } from "react";
import { Expand } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Lightbox } from "../components/Lightbox";
import { galleryImages } from "../data/gallery";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="scroll-mt-24 bg-ldta-purple-50/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Experiences"
            title="Every Experience Opens a New Door"
            description="A glimpse of the kinds of educational excursions, creative workshops, and discovery activities LDTA programs are built around."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={(i % 4) * 80}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`View larger image: ${img.caption}`}
                className="focus-ring group relative block aspect-square w-full overflow-hidden rounded-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ldta-purple-950/80 via-ldta-purple-950/0 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs font-bold text-white">{img.caption}</p>
                </div>
                <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-ldta-purple-800 opacity-0 transition-opacity group-hover:opacity-100">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-400">
            Images shown are licensed stock photography used for demonstration purposes and
            do not depict actual LDTA students or programs. Photos will be replaced with
            approved LDTA imagery.
          </p>
        </Reveal>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  );
}
