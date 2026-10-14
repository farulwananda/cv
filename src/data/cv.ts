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
    portrait: "Foto Farul Ahmad Wananda",
    profile: "Profil",
    expertise: "Keahlian",
    experience: "Pengalaman",
    projects: "Proyek terpilih",
    certifications: "Pelatihan & sertifikasi",
    education: "Pendidikan",
    present: "Sekarang",
    gpa: "IPK",
    pageTitle: "Farul Ahmad Wananda | Software Engineer, Backend & DevOps",
    description: "CV Farul Ahmad Wananda: aplikasi web produksi, sistem backend, sistem akademik, pemantauan media sosial, dan operasi aplikasi.",
  },
  en: {
    actions: "CV actions",
    language: "Choose language",
    print: "Print or save as PDF",
    lightTheme: "Switch to light theme",
    darkTheme: "Switch to dark theme",
    portrait: "Portrait of Farul Ahmad Wananda",
    profile: "Profile",
    expertise: "Expertise",
    experience: "Experience",
    projects: "Selected projects",
    certifications: "Training & certification",
    education: "Education",
    present: "Present",
    gpa: "GPA",
    pageTitle: "Farul Ahmad Wananda | Software Engineer, Backend & DevOps",
    description: "Farul Ahmad Wananda's CV: production web applications, backend systems, academic information systems, social media monitoring, and application operations.",
  },
} satisfies Record<Locale, Record<string, string>>;

export const cv = {
  draft: true,
  name: "Farul Ahmad Wananda",
  title: {
    id: "Software Engineer · Backend & DevOps",
    en: "Software Engineer · Backend & DevOps",
  },
  location: "Bondowoso, Jawa Timur, Indonesia",
  email: "farulwananda@outlook.com",
  links: [
    { label: "GitHub", url: "https://github.com/farulwananda", icon: "ph:github-logo" },
    { label: "LinkedIn", url: "https://linkedin.com/in/farulwananda", icon: "ph:linkedin-logo" },
  ],
  summary: {
    id: "Software engineer yang mengembangkan dan memelihara aplikasi web produksi, layanan backend, serta sistem berbasis data. Berpengalaman dengan sistem informasi akademik, platform pemantauan media sosial, REST API, integrasi pihak ketiga, dan migrasi data akademik berskala besar. Menangani deployment, lingkungan server, dan masalah produksi di VPS serta Google Cloud Platform dengan fokus pada keandalan dan kemudahan pemeliharaan.",
    en: "Software and backend engineer developing, deploying, and maintaining production web applications, backend services, and data-intensive systems. Experienced in academic information systems, social media monitoring platforms, REST APIs, third-party integrations, and large-scale academic data migration. Manage server environments, production troubleshooting, and deployments on VPS infrastructure and Google Cloud Platform, with a focus on reliability and maintainability.",
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
      period: { start: { year: 2026, month: 9 } },
      achievements: [
        {
          id: "Mendirikan KodeKarsa untuk mengembangkan produk digital, aplikasi web, dan layanan backend yang mudah dipelihara.",
          en: "Founded KodeKarsa to develop maintainable digital products, web applications, and backend services.",
        },
        {
          id: "Merancang arsitektur aplikasi, integrasi API, dan alur data menggunakan TanStack, Bun, serta TypeScript.",
          en: "Design application architecture, API integrations, and data workflows using TanStack, Bun, and TypeScript.",
        },
        {
          id: "Mengelola repositori, alur pengembangan, deployment, dan pemeliharaan; membangun komponen aplikasi serta fondasi backend yang dapat digunakan kembali.",
          en: "Manage repositories, development workflows, deployments, and maintenance; build reusable application components and backend foundations.",
        },
      ],
    },
    {
      company: "Masoem University",
      role: { id: "Software Engineer", en: "Software Engineer" },
      period: { start: { year: 2025, month: 5 } },
      location: "Bandung",
      workMode: { id: "Remote", en: "Remote" },
      achievements: [
        {
          id: "Mengembangkan dan memelihara SIAKAD terpadu untuk data mahasiswa, administrasi akademik, penjadwalan, dan alur kerja kampus menggunakan PHP kustom dan Tailwind CSS.",
          en: "Develop and maintain an integrated academic information system for student records, academic administration, scheduling, and university workflows using custom PHP and Tailwind CSS.",
        },
        {
          id: "Mengembangkan proses berbasis Go untuk memindahkan dan mengolah jutaan rekaman akademik lama ke sistem baru.",
          en: "Develop Go-based processes to transfer and process millions of legacy academic records into the new system.",
        },
        {
          id: "Mengelola deployment dan lingkungan server, menangani masalah aplikasi serta basis data di produksi, dan menerjemahkan kebutuhan kampus menjadi fitur sistem.",
          en: "Manage deployments and server environments, troubleshoot production application and database issues, and turn university requirements into system features.",
        },
      ],
    },
    {
      company: "PT Media Promosi Online",
      role: { id: "Software Engineer", en: "Software Engineer" },
      period: { start: { year: 2024, month: 10 } },
      location: "Denpasar, Bali",
      workMode: { id: "di lokasi", en: "On-site" },
      achievements: [
        {
          id: "Mengembangkan aplikasi web produksi, layanan backend, REST API, dan integrasi pihak ketiga menggunakan PHP, Laravel, Python, serta Go.",
          en: "Develop production web applications, backend services, REST APIs, and third-party integrations using PHP, Laravel, Python, and Go.",
        },
        {
          id: "Berkontribusi pada Trend24 melalui integrasi sumber data, alur pemrosesan, fitur analitik, serta pengumpulan dan pelaporan data otomatis.",
          en: "Contribute to Trend24 through data integrations, processing workflows, analytics features, and automated collection and reporting.",
        },
        {
          id: "Mengelola deployment di VPS, cPanel, dan aaPanel; menangani konfigurasi server, masalah produksi, serta optimasi performa basis data.",
          en: "Manage deployments on VPS, cPanel, and aaPanel; handle server configuration, production issues, and database performance optimization.",
        },
      ],
    },
    {
      company: "PT Mangli Djaya Raya",
      role: { id: "Magang Pengembang Backend", en: "Backend Developer Intern" },
      period: { start: { year: 2023, month: 8 }, end: { year: 2023, month: 12 } },
      achievements: [
        {
          id: "Mengembangkan komponen backend API untuk aplikasi point of sale BRC milik Besuki Raya Cigar menggunakan CodeIgniter 3.",
          en: "Developed backend API components for Besuki Raya Cigar's BRC point-of-sale application using CodeIgniter 3.",
        },
        {
          id: "Mengerjakan pemrosesan data dan integrasi API antara backend dan aplikasi klien; membantu pemeliharaan serta penanganan masalah aplikasi dan basis data.",
          en: "Implemented data processing and API integration between backend and client applications; supported application and database maintenance and troubleshooting.",
        },
      ],
    },
    {
      company: "Bangkit Academy 2023",
      role: { id: "Program Cloud Computing", en: "Cloud Computing Program" },
      period: { start: { year: 2023, month: 1 }, end: { year: 2023, month: 7 } },
      achievements: [
        {
          id: "Menyelesaikan jalur Cloud Computing dalam program yang dipimpin Google bersama GoTo dan Traveloka.",
          en: "Completed the Cloud Computing learning path in a program led by Google with GoTo and Traveloka.",
        },
        {
          id: "Menerapkan keterampilan cloud dan backend melalui praktik di Google Cloud Platform, termasuk konfigurasi infrastruktur dan deployment aplikasi.",
          en: "Applied cloud and backend skills through hands-on work on Google Cloud Platform, including infrastructure configuration and application deployment.",
        },
        {
          id: "Berkolaborasi dengan tim lintas disiplin untuk mengembangkan dan menyelesaikan aplikasi capstone.",
          en: "Collaborated with a multidisciplinary team to develop and deliver a capstone application.",
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
      technologies: ["TanStack", "Bun", "TypeScript"],
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
      field: { id: "Teknologi Informasi (D4)", en: "Information Technology (D4)" },
      startYear: 2020,
      endYear: 2024,
      gpa: 3.86,
    },
  ],
} satisfies CvData;
