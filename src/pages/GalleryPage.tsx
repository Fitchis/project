import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import logoBg from "../assets/logo.jpeg";

type ImageItem = { src: string; name: string };

// load images
const imageModules = import.meta.glob(
  "../assets/images/*.{jpg,jpeg,png,webp,svg}",
  { eager: true },
);
const images: ImageItem[] = Object.entries(imageModules).map(([path, mod]) => {
  const m = mod as { default?: string } | string;
  const src =
    (m && typeof m === "object" && "default" in m
      ? (m as { default?: string }).default
      : (m as string)) ?? "";
  const name =
    path
      .split("/")
      .pop()
      ?.replace(/\.[^/.]+$/, "") ?? "image";
  return { src, name };
});

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Use project logo as overall page background

  function openImage(index: number) {
    setActiveIndex(index);
    setOpen(true);
  }

  function close() {
    setOpen(false);
    setActiveIndex(null);
  }

  const prev = useCallback(() => {
    setActiveIndex((ai) =>
      ai === null ? null : (ai - 1 + images.length) % images.length,
    );
  }, []);

  const next = useCallback(() => {
    setActiveIndex((ai) => (ai === null ? null : (ai + 1) % images.length));
  }, []);

  // keyboard handlers when modal is open
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // handlers use internal state via functional updates; only depend on `open`
  }, [open, prev, next]);

  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${logoBg})` }}
    >
      <section className="relative min-h-56 flex items-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="section-container relative z-10 py-20 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Galeri & Dokumentasi
          </h1>
          <p className="max-w-2xl mx-auto text-white/90 mb-4">
            Kumpulan foto dan dokumentasi kegiatan KPMP CTA. Klik gambar untuk
            melihat detail.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
              Galeri Lengkap
            </span>
            <h2 className="section-title mb-2">Semua Dokumentasi</h2>
            <p className="section-subtitle mx-auto mb-8">
              Klik gambar untuk melihat lebih jelas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((item, i) => (
              <button
                key={i}
                onClick={() => openImage(i)}
                className="group block relative overflow-hidden rounded-lg"
                style={{ transitionDelay: `${i * 0.02}s` }}
                aria-label={`Open ${item.name}`}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {open && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={(e) => {
            // close when clicking on overlay
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={close}
              className="absolute top-3 right-3 text-white bg-black/40 rounded-full p-2 z-50"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2 z-40"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2 z-40"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].name}
              className="w-full h-auto max-h-[80vh] object-contain rounded shadow-lg transition-transform duration-200"
            />
            <div className="mt-3 text-center text-white">
              {images[activeIndex].name}
            </div>

            {/* thumbnails */}
            <div className="mt-4 flex gap-2 items-center overflow-x-auto pt-2">
              {images.map((it, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded overflow-hidden border-2 ${idx === activeIndex ? "border-white" : "border-transparent"} shrink-0`}
                  style={{ width: 80, height: 56 }}
                  aria-label={`View ${it.name}`}
                >
                  <img
                    src={it.src}
                    alt={it.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
