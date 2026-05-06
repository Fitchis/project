import {
  Building2,
  Sprout,
  TreePine,
  Fish,
  Beef,
  TreeDeciduous,
  ShoppingBag,
  FlaskConical,
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Organisasi',
    description:
      'Pengelolaan kelembagaan koperasi yang kuat dan transparan, memastikan tata kelola yang baik untuk keberlanjutan gerakan.',
    color: 'text-primary-500',
    bg: 'bg-primary-500/10',
  },
  {
    icon: Sprout,
    title: 'Pertanian Pangan',
    description:
      'Pengembangan pertanian pangan organik berkelanjutan untuk mewujudkan ketahanan pangan nasional dan kemandirian pangan rakyat.',
    color: 'text-accent-green-500',
    bg: 'bg-accent-green-500/10',
  },
  {
    icon: TreePine,
    title: 'Perkebunan',
    description:
      'Optimalisasi potensi perkebunan nusantara dengan sistem pertanian organik yang ramah lingkungan dan berdaya saing tinggi.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-600/10',
  },
  {
    icon: Fish,
    title: 'Perikanan & Kelautan',
    description:
      'Pengembangan sektor perikanan dan kelautan secara berkelanjutan, dari budidaya hingga pengolahan hasil perikanan.',
    color: 'text-sky-600',
    bg: 'bg-sky-600/10',
  },
  {
    icon: Beef,
    title: 'Peternakan',
    description:
      'Pembangunan sistem peternakan terpadu yang modern, produktif, dan berwawasan lingkungan untuk pemenuhan protein hewani.',
    color: 'text-amber-600',
    bg: 'bg-amber-600/10',
  },
  {
    icon: TreeDeciduous,
    title: 'Pertanian Hutan Sosial',
    description:
      'Program reboisasi dan hutan kemasyarakatan yang mengintegrasikan konservasi lingkungan dengan kesejahteraan masyarakat.',
    color: 'text-green-700',
    bg: 'bg-green-700/10',
  },
  {
    icon: ShoppingBag,
    title: 'Perdagangan',
    description:
      'Hilirisasi produk pertanian dan distribusi hasil usaha koperasi untuk memastikan petani mendapatkan nilai tambah yang optimal.',
    color: 'text-accent-gold-500',
    bg: 'bg-accent-gold-500/10',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-accent-green-500/10 text-accent-green-500 text-sm font-semibold rounded-full mb-4">
            Layanan & Program Kerja
          </span>
          <h2 className="section-title mb-4">
            7 Bidang Utama
          </h2>
          <p className="section-subtitle mx-auto">
            KPMP CTA mengelola tujuh bidang usaha strategis yang saling
            terintegrasi untuk mewujudkan kedaulatan pangan dan ekonomi kerakyatan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="animate-on-scroll card p-6 group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Laboratorium Desa Nusantara */}
        <div className="animate-on-scroll">
          <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-gold-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <FlaskConical className="w-10 h-10 text-accent-gold-300" />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                  Laboratorium Desa Nusantara (LDN)
                </h3>
                <p className="text-white/80 max-w-2xl leading-relaxed">
                  Sarana pelayanan terpadu yang menjadi pusat unggulan pembelajaran,
                  penelitian, dan pendampingan bagi petani di seluruh Indonesia. LDN
                  menghadirkan solusi teknologi pertanian organik yang aplikatif dan
                  terukur, memastikan setiap program kerja koperasi dapat diimplementasikan
                  secara efektif di tingkat desa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
