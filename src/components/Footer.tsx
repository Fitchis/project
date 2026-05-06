import { Wheat, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Produk', href: '#produk' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
];

const programLinks = [
  'Pertanian Pangan',
  'Perkebunan',
  'Perikanan & Kelautan',
  'Peternakan',
  'Hutan Sosial',
  'Perdagangan',
];

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="section-container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Wheat className="w-5 h-5 text-accent-gold-300" />
              </div>
              <div>
                <span className="font-display text-lg font-bold">KPMP CTA</span>
                <p className="text-[10px] text-accent-gold-300 tracking-wider uppercase">
                  Cahaya Tarum Abadi
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Koperasi Produsen Multi Pihak Cahaya Tarum Abadi — penggerak
              ekonomi kerakyatan untuk kedaulatan pangan Indonesia.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/6281717248525"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:cahayatarumabadi@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#kontak"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-accent-gold-300">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-accent-gold-300">
              Program Kerja
            </h4>
            <ul className="space-y-2.5">
              {programLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-white/60">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-accent-gold-300">
              Kontak
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/60 leading-relaxed">
                  Jl. Raya Citapen No. 24, Desa Citapen, Kec. Cihampelas, Kab.
                  Bandung Barat, Jawa Barat
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-white/40 flex-shrink-0" />
                <a
                  href="https://wa.me/6281717248525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  +62-817-1724-8525
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-white/40 flex-shrink-0" />
                <a
                  href="mailto:cahayatarumabadi@gmail.com"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  cahayatarumabadi@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} KPMP Cahaya Tarum Abadi. Hak cipta
            dilindungi undang-undang.
          </p>
          <a
            href="#beranda"
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
