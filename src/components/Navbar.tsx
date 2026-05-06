import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Produk", href: "#produk" },
  { label: "Galeri", href: "/gallery" },
  { label: "Cabang", href: "/branches" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  function goHome() {
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
    setIsOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#beranda" className="flex items-center gap-2 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 ${
                scrolled
                  ? "bg-primary-500 shadow-md"
                  : "bg-white/20 backdrop-blur-sm"
              }`}
            >
              <img
                src={logo}
                alt="KPMP CTA"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display text-lg font-bold leading-tight transition-colors duration-300 ${
                  scrolled ? "text-primary-700" : "text-white"
                }`}
              >
                KPMP CTA
              </span>
              <span
                className={`text-[10px] font-medium tracking-wider uppercase transition-colors duration-300 ${
                  scrolled ? "text-accent-gold-500" : "text-accent-gold-200"
                }`}
              >
                Cahaya Tarum Abadi
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {path === "/gallery" || path === "/branches" ? (
              <>
                <button
                  onClick={goHome}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-black/10 text-white hover:bg-white/10 transition-colors"
                >
                  Kembali ke Beranda
                </button>
              </>
            ) : (
              <>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      // intercept internal SPA routes
                      if (link.href.startsWith("/")) {
                        e.preventDefault();
                        window.history.pushState({}, "", link.href);
                        window.dispatchEvent(new PopStateEvent("popstate"));
                      }
                    }}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      scrolled
                        ? "text-gray-600 hover:text-primary-600 hover:bg-primary-50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <a href="#kontak" className="btn-primary ml-3 !py-2.5 !px-5">
                  Hubungi Kami
                </a>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-primary-700 hover:bg-primary-50"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
          <div className="section-container py-4 flex flex-col gap-1">
            {path === "/gallery" || path === "/branches" ? (
              <>
                <button
                  onClick={goHome}
                  className="px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-primary-50"
                >
                  Kembali ke Beranda
                </button>
                <a
                  href="#kontak"
                  onClick={handleNavClick}
                  className="btn-primary mt-2"
                >
                  Hubungi Kami
                </a>
              </>
            ) : (
              <>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#kontak"
                  onClick={handleNavClick}
                  className="btn-primary mt-2"
                >
                  Hubungi Kami
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
