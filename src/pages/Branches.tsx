import { useEffect, useRef, useState } from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import logo from "../assets/logo.jpeg";

type Branch = {
  id: string;
  name: string;
  city: string;
  coords: [number, number];
  address?: string;
};

const branches: Branch[] = [
  {
    id: "indramayu",
    name: "KPMP CTA Indramayu",
    city: "Indramayu",
    coords: [-6.334, 108.318],
    address: "Indramayu, Jawa Barat",
  },
  {
    id: "jember",
    name: "KPMP CTA Jember",
    city: "Jember",
    coords: [-8.171, 113.703],
    address: "Jember, Jawa Timur",
  },
  {
    id: "cirebon",
    name: "KPMP CTA Cirebon",
    city: "Cirebon",
    coords: [-6.732, 108.552],
    address: "Cirebon, Jawa Barat",
  },
  {
    id: "bandung",
    name: "KPMP CTA Bandung Barat",
    city: "Bandung Barat",
    coords: [-6.891, 107.397],
    address: "Bandung Barat, Jawa Barat",
  },
];

export default function Branches() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = branches.filter((b) =>
    (b.name + " " + b.city + " " + (b.address ?? ""))
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (!mapRef.current) return;

    // initialize map once
    if (!leafletMapRef.current) {
      try {
        // clear any existing content in container
        mapRef.current.innerHTML = "";

        const map = L.map(mapRef.current, { scrollWheelZoom: true }).setView(
          [-6.5, 110],
          6,
        );
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);

        branches.forEach((b) => {
          const marker = L.marker(b.coords).addTo(map);
          marker.bindPopup(
            `<strong>${b.name}</strong><br/>${b.city}<br/>${b.address ?? ""}`,
          );
          markersRef.current[b.id] = marker;
        });

        // fit map to markers when available
        const markerList = Object.values(markersRef.current) as L.Marker[];
        if (markerList.length > 0) {
          const group = L.featureGroup(markerList);
          const bounds = group.getBounds();
          if (
            bounds && typeof bounds.isValid === "function"
              ? bounds.isValid()
              : true
          ) {
            map.fitBounds(bounds.pad(0.5));
          }
        }
        leafletMapRef.current = map as L.Map;

        // ensure proper sizing after layout and on resize
        const invalidate = () => map.invalidateSize();
        setTimeout(invalidate, 300);
        window.addEventListener("resize", invalidate);
        // attach handler in a typed-safe way
        (
          map as unknown as { _invalidateHandler?: () => void }
        )._invalidateHandler = invalidate;
      } catch (err) {
        console.error("Failed to initialize Leaflet map", err);
      }
    }

    return () => {
      if (leafletMapRef.current) {
        const map = leafletMapRef.current as L.Map & {
          _invalidateHandler?: () => void;
        };
        const invalidate = map._invalidateHandler;
        if (invalidate) window.removeEventListener("resize", invalidate);
        map.remove();
        leafletMapRef.current = null;
        markersRef.current = {};
      }
    };
  }, []);

  function focusBranch(b: Branch) {
    setSelected(b.id);
    const map = leafletMapRef.current;
    const marker = markersRef.current[b.id];
    if (map && marker) {
      map.flyTo(b.coords, 12, { duration: 0.8 });
      marker.openPopup();
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="relative bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="section-container flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">
              Cabang & Lokasi KPMP CTA
            </h1>
            <p className="mt-2 text-white/90 max-w-xl">
              Temukan cabang kami di seluruh Indonesia. Klik kartu cabang untuk
              melihat lokasi di peta, atau gunakan pencarian untuk menemukan
              cabang terdekat.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="logo"
              className="w-32 h-32 object-contain opacity-90 rounded-lg bg-white/10 p-2"
            />
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div
                ref={mapRef}
                id="branches-map"
                className="w-full h-[520px] rounded shadow-lg border"
              />
            </div>

            <aside className="space-y-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <div className="flex items-center gap-3">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Cari cabang atau kota..."
                    className="flex-1 px-3 py-2 border rounded focus:outline-none"
                  />
                  <button
                    onClick={() => setQuery("")}
                    className="px-3 py-2 bg-primary-600 text-white rounded"
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="p-0 bg-white rounded shadow-sm overflow-auto max-h-[420px]">
                <ul className="divide-y">
                  {filtered.map((b) => (
                    <li
                      key={b.id}
                      className={`p-4 hover:bg-primary-50 ${selected === b.id ? "bg-primary-50" : ""}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">{b.name}</h4>
                            <button
                              onClick={() => focusBranch(b)}
                              className="text-sm text-primary-600"
                            >
                              Lihat
                            </button>
                          </div>
                          <div className="text-sm text-gray-500">{b.city}</div>
                          <div className="text-xs text-gray-400 mt-1">
                            {b.address}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                  {filtered.length === 0 && (
                    <li className="p-4 text-sm text-gray-500">
                      Tidak ditemukan cabang dengan kata kunci tersebut.
                    </li>
                  )}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
