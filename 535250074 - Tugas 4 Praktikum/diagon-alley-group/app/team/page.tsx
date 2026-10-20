import { departmentMembers } from '@/data/diagonData';
import TeamCard from '@/components/TeamCard';

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-amber-200">Struktur Divisi & Pimpinan Organisasi</h1>
        <p className="text-stone-400 mt-1">Pilih salah satu divisi untuk melihat profil pimpinan dan fokus tugas operasional.</p>
      </div>

      {/* Tampilan daftar divisi menggunakan komponen TeamCard */}
      <div className="grid md:grid-cols-3 gap-6">
        {departmentMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}