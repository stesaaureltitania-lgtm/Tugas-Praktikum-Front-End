export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-amber-200 mb-8">Kontak & Alamat Kantor</h1>
      
      {/* Ini container kontaknya aku gradasi warna cokelat & glow emas */}
      <div className="bg-gradient-to-b from-stone-900 via-amber-950/40 to-stone-900 rounded-2xl border border-amber-700/50 p-8 shadow-[0_0_25px_rgba(180,83,9,0.15)] backdrop-blur-sm space-y-6">
        <div className="border-b border-amber-900/40 pb-4">
          <h3 className="text-amber-300 font-bold text-lg mb-1">🏛️ Kantor Pusat Diagon Alley Group:</h3>
          <p className="text-stone-300 text-sm">Charing Cross Road No. 12, London, Inggris (Akses via Leaky Cauldron)</p>
        </div>

        <div>
          <h3 className="text-amber-300 font-bold text-lg mb-1">🦉 Layanan Pelanggan & Pos Burung Hantu:</h3>
          <p className="text-stone-300 text-sm">Owl Post ID: <span className="text-amber-400 font-medium">Diagon-Group-HQ</span> | Email: <span className="text-amber-400 font-medium">info@diagonalley.wiz</span></p>
        </div>
      </div>
    </div>
  );
}