import Link from 'next/link';
import Image from 'next/image';
import { Department } from '@/data/diagonData';

interface TeamCardProps {
  member: Department;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    // Komponen reusable untuk kartu divisi
    <div className="bg-stone-900 rounded-xl shadow-lg border border-amber-800/40 overflow-hidden hover:border-amber-500/60 transition duration-300 flex flex-col">
      <div className="w-full h-56 relative overflow-hidden">
        <Image 
          src={member.image} 
          alt={member.departmentName} 
          fill
          priority // Diisi priority supaya LCP di browser cepet dan gak error warning
          className="object-cover hover:scale-105 transition duration-300" 
        />
        <span className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-sm text-amber-300 text-xs px-3 py-1 rounded-full border border-amber-800/40 font-medium">
          {member.yearsOfService}
        </span>
      </div>
      
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-bold text-xl text-amber-100">{member.departmentName}</h3>
          <p className="text-amber-400/90 text-xs font-medium mb-2">Kepala Divisi: {member.headName}</p>
          <p className="text-stone-400 text-sm line-clamp-2 mb-4">{member.bio}</p>
        </div>

        {/* Link dinamis mengarah ke [member] sesuai id */}
        <Link
          href={`/team/${member.id}`}
          className="inline-block w-full text-center bg-amber-700/20 text-amber-300 border border-amber-700/40 font-medium py-2.5 rounded-lg hover:bg-amber-600 hover:text-stone-950 transition text-sm"
        >
          Lihat Detail Divisi & Tugas →
        </Link>
      </div>
    </div>
  );
}