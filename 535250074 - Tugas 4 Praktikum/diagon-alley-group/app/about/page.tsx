export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-amber-200 mb-8">Tentang Diagon Alley Group</h1>
      
      {/* Disini aku modif container utamanya jadi ada warna cokelat vintage dengan border bercahaya */}
      <div className="bg-gradient-to-b from-stone-900 via-amber-950/40 to-stone-900 rounded-2xl border border-amber-700/50 p-8 shadow-[0_0_25px_rgba(180,83,9,0.15)] backdrop-blur-sm">
        <p className="text-stone-200 text-lg leading-relaxed mb-6">
          <strong className="text-amber-300">Diagon Alley Group</strong> adalah grup holding ritel terkemuka di dunia sihir yang mengelola kawasan perdagangan historis di Charing Cross Road, London.
        </p>
        <p className="text-stone-300 leading-relaxed border-t border-amber-900/40 pt-6">
          Misi kami adalah menyediakan seluruh kebutuhan magis penyihir. Mulai dari tongkat sihir pertama bagi siswa baru Hogwarts hingga perlengkapan olahraga kelas dunia dengan pelayanan terbaik dan integritas tinggi.
        </p>
      </div>
    </div>
  );
}