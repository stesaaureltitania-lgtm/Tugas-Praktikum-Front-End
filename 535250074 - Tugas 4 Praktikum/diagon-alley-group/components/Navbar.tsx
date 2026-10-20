'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  // Ambil data URL aktif untuk styling menu navigasi
  const pathname = usePathname();

  // Daftar menu navigasi utama
  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Divisi & Pimpinan', path: '/team' },
    { name: 'Kontak & Lokasi', path: '/contact' },
  ];

  return (
    <nav className="bg-stone-900 border-b border-amber-800/40 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="bg-amber-700 text-stone-950 px-2.5 py-1 rounded-md font-bold text-xl">
            🏰
          </span>
          <span className="font-bold text-xl text-amber-100 tracking-wide">
            Diagon Alley <span className="text-amber-500 font-normal text-base">Group</span>
          </span>
        </Link>
        
        {/* Looping menu navigasi dan ngecek status aktifnya */}
        <div className="flex gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`font-medium transition-all duration-200 py-1 border-b-2 text-sm ${
                  isActive
                    ? 'text-amber-400 border-amber-400 font-semibold'
                    : 'text-stone-300 border-transparent hover:text-amber-300'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}