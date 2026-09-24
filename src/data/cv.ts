export type Locale = "id" | "en";
type LocalizedText = Record<Locale, string>;
export type CvDate = { year: number; month?: number };

export interface CvData {
  draft: boolean;
  name: string;
  title: LocalizedText;
  location: string;
  email: string;
  links: { label: string; url: string; icon: string }[];
  summary: LocalizedText;
  skills: { category: LocalizedText; items: (string | LocalizedText)[] }[];
  experience: {
    company: string;
    role: LocalizedText;
    period: { start: CvDate; end?: CvDate };
    location?: string;
    workMode?: LocalizedText;
    achievements: LocalizedText[];
  }[];
  projects: {
    title: string;
    url: string;
    description: LocalizedText;
    technologies: string[];
  }[];
  certifications: {
    name: LocalizedText;
    issuer: string;
    issued: CvDate;
    detail?: LocalizedText;
  }[];
  education: {
    institution: string;
    field: LocalizedText;
    startYear: number;
    endYear: number;
    gpa: number;
  }[];
}

export const ui = {
  id: {
    actions: "Aksi CV",
    language: "Pilih bahasa",
    print: "Cetak atau simpan sebagai PDF",
    lightTheme: "Ganti ke tema terang",
    darkTheme: "Ganti ke tema gelap",
    portrait: "Foto Farul Wananda",
    profile: "Profil",
    expertise: "Keahlian",
    experience: "Pengalaman",
    projects: "Proyek terpilih",
    certifications: "Pelatihan & sertifikasi",
    education: "Pendidikan",
    present: "Sekarang",
    gpa: "IPK",
    pageTitle: "Farul Wananda | Software Engineer & Backend Engineer",
    description: "CV Farul Wananda: pengembangan sistem akademik terpadu, backend, serta pemantauan dan analisis media sosial.",
  },
  en: {
    actions: "CV actions",
    language: "Choose language",
    print: "Print or save as PDF",
    lightTheme: "Switch to light theme",
    darkTheme: "Switch to dark theme",
    portrait: "Portrait of Farul Wananda",
    profile: "Profile",
    expertise: "Expertise",
    experience: "Experience",
    projects: "Selected projects",
    certifications: "Training & certification",
    education: "Education",
    present: "Present",
    gpa: "GPA",
    pageTitle: "Farul Wananda | Software Engineer & Backend Engineer",
    description: "Farul Wananda's CV: integrated academic systems, backend engineering, and social media monitoring and analysis.",
  },
} satisfies Record<Locale, Record<string, string>>;

export const cv = {
  draft: true,
  name: "Farul Wananda",
  title: {
    id: "Software Engineer · Backend Engineer",
    en: "Software Engineer · Backend Engineer",
  },
  location: "Indonesia",
  email: "farulwananda@outlook.com",
  links: [
    { label: "GitHub", url: "https://github.com/farulwananda", icon: "ph:github-logo" },
    { label: "LinkedIn", url: "https://linkedin.com/in/farulwananda", icon: "ph:linkedin-logo" },
  ],
  summary: {
    id: "Software engineer yang mengembangkan dan memelihara aplikasi web produksi, sistem backend, dan platform berbasis data. Berpengalaman membangun sistem informasi akademik terpadu serta sistem pemantauan dan analisis media sosial dengan jutaan data. Berfokus pada integrasi sistem, keandalan, performa, dan kemudahan pemeliharaan.",
    en: "Software engineer building and maintaining production web applications, backend systems, and data platforms. Experienced in developing integrated academic information systems and social media monitoring and analysis platforms handling millions of records. Focused on system integration, reliability, performance, and maintainability.",
  },
  skills: [
    {
      category: { id: "Backend & API", en: "Backend & APIs" },
      items: ["PHP", "Laravel", "CodeIgniter 3", "Go", "Python", "Bun", "REST APIs"],
    },
    {
      category: { id: "Web & TypeScript", en: "Web & TypeScript" },
      items: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "Alpine.js", "Livewire"],
    },
    {
      category: { id: "Data & integrasi", en: "Data & integration" },
      items: ["PostgreSQL", "MySQL", "Redis", { id: "Migrasi data", en: "Data migration" }, { id: "Integrasi API", en: "API integration" }],
    },
    {
      category: { id: "Cloud & operasi", en: "Cloud & operations" },
      items: ["Google Cloud", "Linux", "VPS", "cPanel", "Deployment", { id: "Penanganan masalah produksi", en: "Production troubleshooting" }],
    },
  ],
  experience: [
    {
      company: "KodeKarsa",
      role: { id: "Pendiri & Software Engineer", en: "Founder & Software Engineer" },
      period: { start: { year: 2025 } },
      achievements: [
        {
          id: "Mendirikan KodeKarsa untuk mengembangkan aplikasi web, layanan backend, integrasi, dan produk digital.",
          en: "Founded KodeKarsa to develop web applications, backend services, integrations, and digital products.",
        },
        {
          id: "Merancang arsitektur, API, dan alur data; membangun serta memelihara aplikasi dengan Next.js, Bun, dan TypeScript.",
          en: "Design architecture, APIs, and data flows; build and maintain applications with Next.js, Bun, and TypeScript.",
        },
      ],
    },
    {
      company: "Masoem University",
      role: { id: "Software Engineer (Kontrak)", en: "Software Engineer (Contract)" },
      period: { start: { year: 2025, month: 5 } },
      location: "Bandung",
      workMode: { id: "Remote", en: "Remote" },
      achievements: [
        {
          id: "Mengembangkan dan memelihara SIAKAD end-to-end dengan PHP kustom berarsitektur mirip Laravel dan Tailwind CSS.",
          en: "Develop and maintain the end-to-end academic information system using custom PHP with a Laravel-like architecture and Tailwind CSS.",
        },
        {
          id: "Memigrasikan jutaan rekaman data lama dengan Go serta mengintegrasikan data akademik dan proses operasional kampus.",
          en: "Migrated millions of legacy records with Go and integrated academic data with university workflows.",
        },
      ],
    },
    {
      company: "PT Media Promosi Online",
      role: { id: "Software Engineer (Kontrak)", en: "Software Engineer (Contract)" },
      period: { start: { year: 2024, month: 10 } },
      location: "Denpasar, Bali",
      workMode: { id: "di lokasi", en: "On-site" },
      achievements: [
        {
          id: "Mengembangkan dan memelihara aplikasi produksi, layanan backend, REST API, serta integrasi pihak ketiga dengan PHP, Laravel, Python, dan Go.",
          en: "Develop and maintain production applications, backend services, REST APIs, and third-party integrations with PHP, Laravel, Python, and Go.",
        },
        {
          id: "Menangani deployment dan pemecahan masalah pada cPanel serta VPS, termasuk performa aplikasi dan basis data.",
          en: "Handle deployment and troubleshooting on cPanel and VPS infrastructure, including application and database performance.",
        },
      ],
    },
    {
      company: "PT Mangli Djaya Raya",
      role: { id: "Magang Pengembang Backend", en: "Backend Developer Intern" },
      period: { start: { year: 2023 }, end: { year: 2023 } },
      achievements: [
        {
          id: "Mengembangkan komponen backend API untuk aplikasi point of sale BRC milik Besuki Raya Cigar menggunakan CodeIgniter 3.",
          en: "Developed backend API components for Besuki Raya Cigar's BRC point-of-sale application using CodeIgniter 3.",
        },
        {
          id: "Mengerjakan pemrosesan data dan integrasi API antara layanan backend dan aplikasi klien.",
          en: "Worked on data processing and API integration between backend services and client applications.",
        },
      ],
    },
    {
      company: "Bangkit Academy 2023",
      role: { id: "Program Cloud Computing", en: "Cloud Computing Program" },
      period: { start: { year: 2023 }, end: { year: 2023 } },
      achievements: [
        {
          id: "Terpilih mengikuti jalur Cloud Computing dalam program yang dipimpin Google dengan dukungan GoTo dan Traveloka.",
          en: "Selected for the Cloud Computing learning path in a program led by Google with support from GoTo and Traveloka.",
        },
        {
          id: "Menyelesaikan praktik Google Cloud, infrastruktur, dan layanan backend; mengerjakan proyek capstone bersama tim lintas disiplin.",
          en: "Completed hands-on work in Google Cloud, infrastructure, and backend services; developed a capstone project with a multidisciplinary team.",
        },
      ],
    },
  ],
  projects: [
    {
      title: "KodeKarsa",
      url: "https://kodekarsa.com",
      description: {
        id: "Mendirikan studio product engineering untuk membangun aplikasi web dan layanan backend. Merancang arsitektur, model data, API, dan integrasi; mengerjakan implementasi, deployment, serta pemeliharaan produk dan situs KodeKarsa.",
        en: "Founded a product engineering studio for web applications and backend services. Design architecture, data models, APIs, and integrations; handle implementation, deployment, and maintenance of products and the KodeKarsa website.",
      },
      technologies: ["Next.js", "Bun", "TypeScript"],
    },
    {
      title: "Welcome.to",
      url: "https://welcome.to",
      description: {
        id: "Mengembangkan layanan backend untuk akun, profil digital, tautan, dan pengaturan pengguna. Membangun API, struktur data, integrasi layanan, serta analitik interaksi profil dan tautan; mendukung deployment dan pemeliharaan aplikasi produksi.",
        en: "Developed backend services for accounts, digital profiles, links, and user settings. Built APIs, data structures, service integrations, and profile and link engagement analytics; supported deployment and production maintenance.",
      },
      technologies: ["PHP", "Laravel", "MySQL", "Redis", "Tailwind CSS"],
    },
    {
      title: "Mobil.id",
      url: "https://mobil.id",
      description: {
        id: "Mengembangkan fungsi backend marketplace otomotif untuk listing kendaraan, dealer, dan alur pengguna. Mengolah data merek, model, spesifikasi, harga, serta lokasi; membangun pencarian, filter, API, dan perbaikan aplikasi produksi.",
        en: "Developed automotive marketplace backend functionality for vehicle listings, dealers, and user workflows. Processed brand, model, specification, pricing, and location data; built search, filters, APIs, and production improvements.",
      },
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    },
    {
      title: "RajaMonitoring",
      url: "https://rajamonitoring.com",
      description: {
        id: "Mengembangkan sistem untuk memantau percakapan merek di media sosial dan berita online. Menangani pengumpulan dan pengolahan jutaan data, pencarian topik, analisis sentimen, serta penyajian hasil agar pengguna dapat membaca tren dan risiko reputasi.",
        en: "Developed a system for monitoring brand conversations across social media and online news. Handled collection and processing of millions of records, topic search, sentiment analysis, and presentation of findings to help users assess trends and reputation risks.",
      },
      technologies: ["PHP", "Laravel", "Tailwind CSS"],
    },
  ],
  certifications: [
    {
      name: { id: "Bangkit Academy 2023 · Cloud Computing", en: "Bangkit Academy 2023 · Cloud Computing" },
      issuer: "Bangkit Academy",
      issued: { year: 2023 },
      detail: {
        id: "Program yang dipimpin Google dengan dukungan GoTo dan Traveloka; mencakup Google Cloud, layanan backend, dan proyek capstone kolaboratif.",
        en: "A program led by Google with support from GoTo and Traveloka; covered Google Cloud, backend services, and a collaborative capstone project.",
      },
    },
    {
      name: { id: "Sertifikasi Kompetensi Web Developer", en: "Web Developer Competency Certification" },
      issuer: "BNSP · LSP Politeknik Negeri Jember",
      issued: { year: 2024, month: 6 },
    },
  ],
  education: [
    {
      institution: "Politeknik Negeri Jember",
      field: { id: "Teknik Informatika", en: "Informatics Engineering" },
      startYear: 2020,
      endYear: 2024,
      gpa: 3.86,
    },
  ],
} satisfies CvData;
