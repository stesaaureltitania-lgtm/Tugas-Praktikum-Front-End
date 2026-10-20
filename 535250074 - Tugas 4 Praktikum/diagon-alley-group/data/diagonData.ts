// File data utama untuk menyimpan informasi divisi dan pimpinan
export interface Department {
  id: string;
  departmentName: string;
  headName: string;
  role: string;
  yearsOfService: string;
  bio: string;
  image: string;
  keyResponsibilities: string[];
}

export const departmentMembers: Department[] = [
  {
    id: "ollivanders",
    departmentName: "Divisi Artefak & Alat Sihir",
    headName: "Garrick Ollivander",
    role: "Chief Artifact Officer & Master Wandmaker",
    yearsOfService: "50+ Tahun Mengabdi",
    bio: "Memimpin riset dan sertifikasi kelayakan alat sihir terpusat di Diagon Alley. Bertanggung jawab memastikan kecocokan ikatan energi magis antara instrumen sihir dan para penyihir.",
    image: "/images/ollivander-shop.jpg",
    keyResponsibilities: [
      "Sertifikasi dan Pengawasan Mutu Tongkat Sihir",
      "Konservasi Inti Magis (Phoenix Feather, Dragon Heartstring, Unicorn Hair)",
      "Pengembangan Standar Keamanan Mantra & Instrumen Sihir"
    ]
  },
  {
    id: "eeylops-owl",
    departmentName: "Divisi Logistik & Komunikasi Satwa",
    headName: "Eeylop Whistle",
    role: "Head of Magical Logistics & Avian Care",
    yearsOfService: "20 Tahun Mengabdi",
    bio: "Mengelola jaringan infrastruktur pengiriman burung hantu pos antar-wilayah serta pengawasan kesehatan satwa sihir resmi.",
    image: "/images/owl-shop.jpg",
    keyResponsibilities: [
      "Pengelolaan Rute Express Pos Burung Hantu Internasional",
      "Sertifikasi Kesehatan & Karantina Satwa Sihir",
      "Penyediaan Layanan Komunikasi Darurat Kementerian Sihir"
    ]
  },
  {
    id: "quidditch-supplies",
    departmentName: "Divisi Transportasi & Olahraga Sihir",
    headName: "Randolph Spudmore",
    role: "Director of Magical Transportation & Athletics",
    yearsOfService: "15 Tahun Mengabdi",
    bio: "Bertanggung jawab atas regulasi keselamatan transportasi sapu terbang tinggi serta standarisasi peralatan olahraga Quidditch.",
    image: "/images/quidditch.jpg",
    keyResponsibilities: [
      "Pengujian Kecepatan & Aerodinamis Sapu Terbang Kategori Konsumen",
      "Lisensi dan Penyediaan Peralatan Turnamen Quidditch Resmi",
      "Layanan Perawatan & Kalibrasi Aerodinamika Sihir"
    ]
  }
];