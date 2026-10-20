import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Banner utama */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-amber-100 border border-amber-700/50 rounded-2xl p-8 md:p-12 mb-12 shadow-[0_0_30px_rgba(180,83,9,0.2)]">
        <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
          Diagon Alley Enterprises Tbk
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-amber-200">
          Infrastruktur & Layanan Sihir Terpadu Sejak 382 SM
        </h1>
        <p className="text-stone-300 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
          Diagon Alley Enterprises adalah konsorsium pengelola kawasan perdagangan dan penyedia standar pelayanan kebutuhan magis resmi untuk komunitas sihir Britania Raya.
        </p>
        <Link
          href="/team"
          className="inline-block bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold px-6 py-3 rounded-lg transition shadow-md hover:shadow-amber-600/30"
        >
          Lihat Struktur Divisi & Pimpinan
        </Link>
      </div>

      {/* 3 Kartu Poin dengan efek pendar cahaya (glow) & hover terangkat */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-b from-stone-900 to-amber-950/30 p-6 rounded-xl border border-amber-700/40 shadow-lg hover:border-amber-400/80 hover:shadow-[0_0_20px_rgba(217,119,6,0.25)] hover:-translate-y-1 transition duration-300">
          <h3 className="font-bold text-lg mb-2 text-amber-300 flex items-center gap-2">
            🏛️ Tata Kelola Resmi
          </h3>
          <p className="text-stone-300 text-sm leading-relaxed">
            Bekerja sama dengan Kementerian Sihir dalam pengawasan standar keselamatan produk.
          </p>
        </div>

        <div className="bg-gradient-to-b from-stone-900 to-amber-950/30 p-6 rounded-xl border border-amber-700/40 shadow-lg hover:border-amber-400/80 hover:shadow-[0_0_20px_rgba(217,119,6,0.25)] hover:-translate-y-1 transition duration-300">
          <h3 className="font-bold text-lg mb-2 text-amber-300 flex items-center gap-2">
            📜 Sertifikasi Produk
          </h3>
          <p className="text-stone-300 text-sm leading-relaxed">
            Menjamin kelayakan serta keaslian seluruh instrumen magis yang beredar.
          </p>
        </div>

        <div className="bg-gradient-to-b from-stone-900 to-amber-950/30 p-6 rounded-xl border border-amber-700/40 shadow-lg hover:border-amber-400/80 hover:shadow-[0_0_20px_rgba(217,119,6,0.25)] hover:-translate-y-1 transition duration-300">
          <h3 className="font-bold text-lg mb-2 text-amber-300 flex items-center gap-2">
            🦉 Jaringan Logistik
          </h3>
          <p className="text-stone-300 text-sm leading-relaxed">
            Mengatur infrastruktur pengiriman cepat burung hantu di seluruh kawasan.
          </p>
        </div>
      </div>
    </div>
  );
}