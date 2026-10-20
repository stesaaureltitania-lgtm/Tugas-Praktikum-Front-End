import { departmentMembers } from '@/data/diagonData';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense, use } from 'react';

interface PageProps {
  params: Promise<{ member: string }>;
}

// Komponen internal untuk memproses data params dinamis
function TeamDetailContent({ params }: PageProps) {
  // Membuka Promise params menggunakan use() dari React
  const resolvedParams = use(params);
  const dept = departmentMembers.find((d) => d.id === resolvedParams.member);

  // Jika slug/id tidak ditemukan di data, otomatis lempar ke halaman 404
  if (!dept) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/team" className="text-amber-400 hover:underline text-sm mb-6 inline-block">
        ← Kembali ke Daftar Divisi
      </Link>

      {/* Tampilan profil detail kepala divisi */}
      <div className="bg-stone-900 rounded-2xl border border-amber-800/40 p-6 md:p-8 shadow-xl mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-64 h-56 flex-shrink-0 relative rounded-xl overflow-hidden border border-amber-600/30">
            <Image 
              src={dept.image} 
              alt={dept.departmentName} 
              fill
              priority
              className="object-cover" 
            />
          </div>
          
          <div className="flex-grow">
            <span className="text-xs bg-amber-950 text-amber-300 px-3 py-1 rounded-full border border-amber-800/40 font-medium">
              {dept.yearsOfService}
            </span>
            <h1 className="text-3xl font-bold text-amber-100 mt-3">{dept.departmentName}</h1>
            <p className="text-amber-400 font-semibold text-sm mt-1 mb-4">
              Pimpinan: {dept.headName} ({dept.role})
            </p>
            
            <p className="text-stone-300 text-sm leading-relaxed border-t border-stone-800 pt-3">
              {dept.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Daftar tugas dan tanggung jawab divisi */}
      <div className="bg-stone-900 rounded-2xl border border-amber-800/40 p-6 md:p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-amber-200 mb-2">📋 Program & Tanggung Jawab Divisi</h2>
        <p className="text-stone-400 text-sm mb-6">Fokus operasional {dept.departmentName} dalam struktur Diagon Alley Enterprises.</p>

        <div className="grid gap-3">
          {dept.keyResponsibilities.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-stone-950 p-4 rounded-xl border border-amber-800/30 flex items-center gap-3"
            >
              <span className="text-amber-400 font-bold text-lg">✦</span>
              <p className="text-stone-200 text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Dibungkus Suspense supaya tidak kena error prerender Next.js 15
export default function TeamDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="text-center py-20 text-amber-200">Memuat data divisi...</div>}>
      <TeamDetailContent params={params} />
    </Suspense>
  );
}