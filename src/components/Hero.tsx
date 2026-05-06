import { ArrowDown, Phone, Leaf, Globe, Users } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600" />
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80")`,
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-gold-400/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-accent-green-500/10 to-transparent rounded-tr-full" />

      <div className="section-container relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
            <Leaf className="w-4 h-4 text-accent-gold-300" />
            <span className="text-sm font-medium text-white/90">
              Koperasi Produsen Multi Pihak
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            KPMP CTA:{" "}
            <span className="text-accent-gold-300">Daulat Pangan</span> dan{" "}
            <span className="text-accent-gold-300">Daulat Ekonomi</span>{" "}
            Indonesia
          </h1>

          <p
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Mewujudkan ekonomi kerakyatan yang adil, makmur, sejahtera, dan
            beradab melalui gerakan pertanian organik Indonesia yang berwawasan
            ekologis dan berkesinambungan.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#tentang" className="btn-gold text-base px-8 py-4">
              Pelajari Lebih Lanjut
            </a>
            <a
              href="https://wa.me/6281717248525"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !border-white/30 !text-white hover:!bg-white/10 text-base px-8 py-4"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
            </a>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-accent-green-500/20 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-accent-green-300" />
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">7</p>
                <p className="text-sm text-white/70">Bidang Usaha</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-accent-gold-400/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-accent-gold-300" />
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">Nasional</p>
                <p className="text-sm text-white/70">Jangkauan Wilayah</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-primary-400/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-300" />
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">Multi Pihak</p>
                <p className="text-sm text-white/70">Koperasi Produsen</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#tentang"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-float"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
