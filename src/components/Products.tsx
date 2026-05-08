import {
  Droplets,
  FlaskConical,
  Sprout,
  Leaf,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const zegerBenefits = [
  "Menyuburkan tanaman secara alami dan berkelanjutan",
  "Memulihkan kondisi lahan kritis dan degraded",
  "Meningkatkan hasil panen secara signifikan",
  "Ramah lingkungan dan aman untuk kesehatan",
  "Mengaktifkan mikroorganisme menguntungkan di tanah",
  "Mengurangi ketergantungan pada pupuk kimia",
];

const otherProducts = [
  {
    icon: Sprout,
    title: "Bank Benih Purba",
    description:
      "Koleksi dan pelestarian benih-benih purba nusantara yang memiliki ketahanan alami tinggi. Bank Benih Purba menjaga warisan genetik pertanian Indonesia untuk generasi mendatang.",
    color: "text-amber-600",
    bg: "bg-amber-600/10",
  },
  {
    icon: Leaf,
    title: "Produk Pertanian Organik",
    description:
      "Rangkaian lengkap produk pertanian organik berkualitas tinggi, mulai dari bibit unggul, pupuk organik, hingga pestisida nabati yang teruji efektif.",
    color: "text-accent-green-500",
    bg: "bg-accent-green-500/10",
  },
  {
    icon: ArrowRight,
    title: "Hilirisasi",
    description:
      "Pengolahan dan distribusi hasil pertanian dari hulu ke hilir, memastikan petani mendapatkan nilai tambah optimal dari setiap produk yang dihasilkan.",
    color: "text-primary-500",
    bg: "bg-primary-500/10",
  },
];

export default function Products() {
  return (
    <section id="produk" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-accent-gold-400/10 text-accent-gold-500 text-sm font-semibold rounded-full mb-4">
            Produk & Teknologi
          </span>
          <h2 className="section-title mb-4">Inovasi untuk Kemakmuran</h2>
          <p className="section-subtitle mx-auto">
            Teknologi dan produk unggulan KPMP CTA yang telah terbukti membawa
            manfaat nyata bagi petani Indonesia.
          </p>
        </div>

        {/* Zeger AG-91 - Hero Product */}
        <div className="animate-on-scroll mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-gradient-to-br from-accent-green-600 via-accent-green-500 to-emerald-600 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full mb-6">
                  <FlaskConical className="w-4 h-4 text-accent-gold-300" />
                  <span className="text-sm font-medium text-white/90">
                    Pupuk Majemuk Biomicrotech
                  </span>
                </div>
                <h3 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                  Zeger AG-91
                </h3>
                <p className="text-white/85 text-lg leading-relaxed mb-6">
                  Pupuk majemuk Biomicrotech yang telah terbukti menyuburkan
                  tanaman dan memulihkan kondisi lahan kritis. Formulasi
                  inovatif yang menggabungkan teknologi mikroorganisme
                  menguntungkan dengan nutrisi esensial.
                </p>
                <div className="flex items-center gap-2 text-accent-gold-300">
                  <Droplets className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    Teknologi Biomicrotech Terdepan
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 flex flex-col justify-center">
              <h4 className="font-display text-xl font-bold text-primary-700 mb-6">
                Keunggulan Zeger AG-91
              </h4>
              <ul className="space-y-4">
                {zegerBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6281717248525"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 self-start"
              >
                Tanya Tentang Zeger AG-91
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Other Products */}
        <div className="grid md:grid-cols-3 gap-8">
          {otherProducts.map((product, i) => (
            <div
              key={product.title}
              className="animate-on-scroll card-accent p-8"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${product.bg} flex items-center justify-center mb-5`}
              >
                <product.icon className={`w-7 h-7 ${product.color}`} />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-700 mb-3">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
