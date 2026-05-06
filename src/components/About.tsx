// React runtime is automatic; import hooks only when needed
import {
  BookOpen,
  Shield,
  Star,
  Bird,
  Wheat,
  Award,
  FileCheck,
  Users,
  Target,
  GraduationCap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import dragonImg from "../assets/dragon.jpg";

type LogoElement = {
  icon?: LucideIcon;
  image?: string;
  name: string;
  meaning: string;
  color: string;
  bg: string;
};

const logoElements: LogoElement[] = [
  {
    icon: Star,
    name: "Bintang",
    meaning:
      "Simbol keagungan dan kemuliaan, mencerminkan cita-cita luhur koperasi menuju kedaulatan pangan dan ekonomi rakyat.",
    color: "text-accent-gold-400",
    bg: "bg-accent-gold-400/10",
  },
  {
    icon: Bird,
    name: "Rajawali",
    meaning:
      "Lambang kewaspadaan, ketangguhan, dan jangkauan visi yang luas. Rajawali terbang tinggi namun tetap fokus pada sasaran.",
    color: "text-primary-500",
    bg: "bg-primary-500/10",
  },
  {
    icon: Wheat,
    name: "Padi & Kapas",
    meaning:
      "Padi melambangkan ketahanan pangan dan kemakmuran, sedangkan kapas melambangkan kesejahteraan sandang — dua pilar kebutuhan dasar rakyat.",
    color: "text-accent-gold-500",
    bg: "bg-accent-gold-500/10",
  },
  {
    icon: Shield,
    name: "Macan",
    meaning:
      "Simbol keberanian dan kekuatan, merepresentasikan semangat juang dalam memperjuangkan kedaulatan ekonomi kerakyatan.",
    color: "text-amber-600",
    bg: "bg-amber-600/10",
  },
  {
    name: "Naga",
    image: dragonImg,
    meaning:
      "Lambang kebijaksanaan dan keabadian, mencerminkan warisan leluhur yang terus hidup dalam gerakan pertanian nusantara.",
    color: "text-emerald-600",
    bg: "bg-emerald-600/10",
  },
  {
    icon: Award,
    name: "Kujang Kembar",
    meaning:
      "Senjata tradisional Sunda yang melambangkan ketajaman pikiran dan keteguhan hati. Kujang kembar menyimbolkan keseimbangan antara dunia dan akhirat, serta antara kebijaksanaan dan kekuatan.",
    color: "text-primary-600",
    bg: "bg-primary-600/10",
  },
];

const identityItems = [
  {
    icon: Users,
    title: "Penggerak Ekonomi Kerakyatan",
    description:
      "Menggerakkan roda ekonomi dari bawah, oleh rakyat dan untuk rakyat, dengan semangat gotong royong dan kebersamaan.",
  },
  {
    icon: Target,
    title: "Pejuang Kedaulatan Ekonomi",
    description:
      "Berkomitmen memperjuangkan kemandirian ekonomi bangsa melalui penguatan sektor pertanian dan pangan nasional.",
  },
  {
    icon: GraduationCap,
    title: "Pendidik dan Pelatih",
    description:
      "Membangun kapasitas petani melalui pendidikan, pelatihan, dan pendampingan berkelanjutan untuk mencetak generasi petani emas.",
  },
];

export default function About(): JSX.Element {
  return (
    <section id="tentang" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
            Tentang Kami
          </span>
          <h2 className="section-title mb-4">Mengenal KPMP CTA</h2>
          <p className="section-subtitle mx-auto">
            Koperasi Produsen Multi Pihak Cahaya Tarum Abadi — penggerak ekonomi
            kerakyatan untuk kedaulatan pangan Indonesia.
          </p>
        </div>

        {/* Sejarah & Visi/Misi */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-on-scroll-left">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-gold-100 rounded-2xl -z-10" />

              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border border-primary-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-primary-700">
                      Sejarah Singkat
                    </h3>
                    <p className="text-sm text-gray-500">Berdiri sejak 2022</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  KPMP Cahaya Tarum Abadi terbentuk sejak tahun 2022, berawal
                  dari inisiatif untuk membantu para petani mengatasi kesulitan
                  bibit dan pupuk. Dari keprihatinan tersebut, lahirlah gerakan
                  koperasi yang kini telah berkembang menjadi koperasi produsen
                  multi pihak dengan 7 bidang usaha yang menjangkau seluruh
                  Indonesia.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-gray-200">
                    <FileCheck className="w-4 h-4 text-primary-500" />
                    <span className="text-xs font-medium text-gray-600">
                      AHU-0006805
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-gray-200">
                    <FileCheck className="w-4 h-4 text-accent-gold-500" />
                    <span className="text-xs font-medium text-gray-600">
                      NIB 0501230043961
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll-right">
            <h3 className="font-display text-2xl font-bold text-primary-700 mb-6">
              Visi & Misi
            </h3>
            <div className="bg-gradient-to-br from-accent-gold-50 to-white p-6 rounded-2xl border border-accent-gold-200 mb-6">
              <h4 className="font-semibold text-accent-gold-600 mb-2 flex items-center gap-2">
                <Star className="w-5 h-5" /> Visi
              </h4>
              <p className="text-gray-700 font-medium">
                Mewujudkan Ekonomi Kerakyatan yang Adil, Makmur, Sejahtera, dan
                Beradab.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-600 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" /> Misi
              </h4>
              <ol className="space-y-3">
                {[
                  "Membangun pondasi dan sistem pertanian organik sebagai platform gerakan pertanian Indonesia yang berwawasan ekologis dan berkesinambungan.",
                  "Membangun sistem bisnis pertanian yang partisipatif dan modern dengan menerapkan Integrated Corporate Organic Farming System.",
                  "Membangun The Gold Generation Farmer Safety Belt of Indonesia (Sabuk Pengaman Generasi Emas Petani Indonesia) guna regenerasi petani modern.",
                  "Mengembangkan pertanian nusantara sebagai legacy karya para leluhur dalam mewujudkan Indonesia sebagai Poros Pangan Dunia.",
                ].map((misi, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {misi}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Makna Logo */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="font-display text-3xl font-bold text-primary-700 mb-3">
              Makna Logo
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Setiap elemen dalam logo KPMP CTA mengandung makna filosofis yang
              mendalam, mencerminkan nilai-nilai luhur bangsa Indonesia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {logoElements.map((el, i) => (
              <div
                key={el.name}
                className="animate-on-scroll card p-6"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${el.bg} flex items-center justify-center mb-4`}
                >
                  {el.image ? (
                    <img
                      src={el.image}
                      alt={el.name}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    (() => {
                      const Icon = el.icon;
                      return Icon ? (
                        <Icon className={`w-6 h-6 ${el.color}`} />
                      ) : null;
                    })()
                  )}
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{el.name}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {el.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Jati Diri */}
        <div>
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="font-display text-3xl font-bold text-primary-700 mb-3">
              Jati Diri & Kultur
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Tiga pilar identitas yang menjadi fondasi gerakan KPMP CTA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {identityItems.map((item, i) => (
              <div
                key={item.title}
                className="animate-on-scroll text-center p-8 rounded-2xl bg-gradient-to-b from-primary-50/50 to-white border border-primary-100"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary-500/25">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-display text-lg font-bold text-primary-700 mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Legalitas */}
        <div className="mt-20 animate-on-scroll">
          <div className="bg-gradient-to-r from-primary-700 to-primary-600 rounded-2xl p-8 sm:p-10 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <FileCheck className="w-10 h-10 text-accent-gold-300" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-display text-2xl font-bold mb-2">
                  Legalitas Resmi
                </h3>
                <p className="text-white/80 mb-4">
                  KPMP CTA beroperasi dengan dasar hukum yang kuat dan telah
                  terdaftar secara resmi.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="px-4 py-2 bg-white/10 rounded-lg">
                    <p className="text-xs text-white/60">AHU Nomor</p>
                    <p className="font-semibold text-sm">
                      0006805.AH.01.29 Tahun 2022
                    </p>
                  </div>
                  <div className="px-4 py-2 bg-white/10 rounded-lg">
                    <p className="text-xs text-white/60">NIB</p>
                    <p className="font-semibold text-sm">0501230043961</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Struktur Organisasi */}
        <div className="mt-16 animate-on-scroll" id="struktur">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl font-bold text-primary-700 mb-3">
              STRUKTUR ORGANISASI KPMP CTA PUSAT
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Susunan organisasi pusat KPMP CTA. Klik gambar untuk melihat lebih
              jelas.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/struktur.png"
              alt="Struktur Organisasi KPMP CTA Pusat"
              className="w-full h-auto object-contain rounded shadow-lg border border-gray-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
