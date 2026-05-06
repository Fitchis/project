import { useState, type FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Alamat",
    value:
      "Jalan Raya Citapen Nomor 24, Desa Citapen, Kecamatan Cihampelas, Kabupaten Bandung Barat, Jawa Barat",
  },
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "+62-817-1724-8525",
    href: "https://wa.me/6281717248525",
  },
  {
    icon: Mail,
    label: "Email",
    value: "cahayatarumabadi@gmail.com",
    href: "mailto:cahayatarumabadi@gmail.com",
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: "Senin - Sabtu: 08.00 - 17.00 WIB",
  },
];

const bankAccounts = [
  { bank: "Bank BRI", account: "0123-4567-8901-23", name: "KPMP CTA" },
  { bank: "Bank BNI", account: "0987-6543-2109-87", name: "KPMP CTA" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // prepare WhatsApp message
    const waNumber = "6281717248525";
    const lines = [
      "Halo KPMP CTA,",
      "",
      `Nama: ${name}`,
      `Telepon: ${phoneInput}`,
      `Email: ${emailInput}`,
      `Subjek: ${subjectInput}`,
      "",
      "Pesan:",
      messageInput,
    ];
    const text = lines.join("\n");
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

    // open WhatsApp (new tab)
    window.open(url, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="kontak" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
            Kontak
          </span>
          <h2 className="section-title mb-4">Hubungi Kami</h2>
          <p className="section-subtitle mx-auto">
            Kami siap mendengar dan membantu Anda. Jangan ragu untuk menghubungi
            KPMP CTA.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 animate-on-scroll-left">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium text-sm">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Bank Accounts */}
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-primary-500" />
                <h4 className="font-semibold text-gray-800">
                  Rekening Koperasi
                </h4>
              </div>
              <div className="space-y-4">
                {bankAccounts.map((acc) => (
                  <div
                    key={acc.bank}
                    className="p-3 bg-white rounded-xl border border-gray-100"
                  >
                    <p className="text-xs text-gray-400 font-medium">
                      {acc.bank}
                    </p>
                    <p className="text-sm font-mono font-semibold text-gray-700 mt-1">
                      {acc.account}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      a.n. {acc.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-on-scroll-right">
            <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-100">
              <h3 className="font-display text-xl font-bold text-primary-700 mb-6">
                Kirim Pesan
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-accent-green-500" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Pesan Terkirim!
                  </h4>
                  <p className="text-sm text-gray-500">
                    Terima kasih telah menghubungi kami. Kami akan segera
                    merespons.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1.5">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1.5">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        value={phoneInput}
                        onChange={(e) => setPhoneInput(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                        placeholder="08xx-xxxx-xxxx"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                      placeholder="email@contoh.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">
                      Subjek
                    </label>
                    <select
                      value={subjectInput}
                      onChange={(e) => setSubjectInput(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="Informasi Umum">Informasi Umum</option>
                      <option value="Produk Zeger AG-91">
                        Produk Zeger AG-91
                      </option>
                      <option value="Keanggotaan Koperasi">
                        Keanggotaan Koperasi
                      </option>
                      <option value="Kerja Sama">Kerja Sama</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">
                      Pesan
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pesan via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
