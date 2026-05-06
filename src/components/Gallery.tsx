import { MapPin } from "lucide-react";

// Load images (same pattern as GalleryPage)
const imageModules = import.meta.glob(
  "../assets/images/*.{jpg,jpeg,png,webp,svg}",
  { eager: true },
);
const galleryImages = Object.entries(imageModules).map(([path, mod]) => {
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

export default function Gallery() {
  return (
    <section id="galeri" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
            Galeri & Dokumentasi
          </span>
          <h2 className="section-title mb-4">Dokumentasi Kegiatan</h2>
          <p className="section-subtitle mx-auto">
            Momen-momen berharga dari perjalanan KPMP CTA dalam menggerakkan
            ekonomi kerakyatan di seluruh Indonesia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="animate-on-scroll group"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="card overflow-hidden">
                <div className="relative h-56 bg-gray-100">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute top-4 left-4"></div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-gray-400 mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">Dokumentasi</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Gambar: {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              window.history.pushState({}, "", "/gallery");
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
            className="btn-gold px-6 py-3"
          >
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
}
