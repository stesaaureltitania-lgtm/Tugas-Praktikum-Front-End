import './globals.css';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Metadata halaman untuk judul tab browser
export const metadata = {
  title: 'Diagon Alley Group - Company Profile',
  description: 'Holding pengelola kawasan perdagangan dan layanan sihir resmi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      {/* Background utama dibikin pekat cokelat tua (stone-950) */}
      <body className="bg-stone-950 text-amber-50 flex flex-col min-h-screen">
        {/* Dibungkus Suspense supaya usePathname di Navbar gak error pas prerender */}
        <Suspense fallback={<div className="bg-stone-900 h-16 w-full" />}>
          <Navbar />
        </Suspense>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}