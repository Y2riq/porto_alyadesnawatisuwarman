import { skillImages } from "@/components/ui/skillsection";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type SectionProps = {
  title: string;
  id?: string;
  children: ReactNode;
};

/* DATA */

const projectsData = [
  {
    title: "Pendukung kerja sama konten kreator",
    desc: "Membantu tim konten kreator dalam menjalin kerjasama dengan berbagai pihak, seperti hotel, tempat camping, dan lokasi lainnya. Tugas saya meliputi riset calon pihak terkait, menghubungi pihak tersebut untukp penawaran kolaborasi, serta membantu koordinasi awal agar kerjasam konten dapat berjalan dengan lancar.",
    tech: ["Whatsapp", "Google Excel", "Google Docs"],
    outcome: "Meningkatkan relasi dan kerjasama dengan kafe, hotel, dan tempat wisata untuk mendukung kebutuhan konten dan promosi.",
  },
];

const experiences = [
  {
    role: "Customer Service (Intern)",
    company: "PT. Mangprang Persada Sinergi (Hijacket)",
    period: "Februari 2026 - Sekarang",
    photos: ["/porto_alyadesnawatisuwarman/hjc/1.jpg", "/porto_alyadesnawatisuwarman/hjc/2.jpg", "/porto_alyadesnawatisuwarman/hjc/4.jpeg", "/porto_alyadesnawatisuwarman/hjc/3.jpg"],
    points: [
      "Memantau dan mengelola komunikasi pelanggan melalui AI chatbot, WhatsApp Business, serta Meta Business Suite (Instagram & Facebook) dengan rata-rata ±500 chat per hari.",
      "Menangani pertanyaan, keluhan, serta memberikan informasi produk dan pemesanan secara jelas, ramah dan solutif.",
      "Melakukan follow up pelanggan dan upselling untuk meningkatkan penjualan serta menjaga hubungan dengan customer.",
    ],
  },
  {
    role: "Admin Umum & Staff Produksi (Crating)",
    company: "CV. MLY Cipta Lestari",
    period: "Agustus 2025 - Januari 2026",
    photos: ["/porto_alyadesnawatisuwarman/mly/1.jpeg", "/porto_alyadesnawatisuwarman/mly/2.jpeg", "/porto_alyadesnawatisuwarman/mly/3.jpeg", "/porto_alyadesnawatisuwarman/mly/4.jpeg", "/porto_alyadesnawatisuwarman/mly/5.jpeg"],
    points: [
      "Mengelola arsip, dokumen, dan surat-menyurat perusahaan agar tertata rapi dan mudah diakses.",
      "Mengelola administrasi keuangan meliputi pencatatan pengeluaran dan pemasukan harian secara akurat, serta proses penggajian karyawan bulanan.",
      "Mencatat dan memantau pesanan pita/parsel, pembelian, pemakaian, serta stok barang untuk menjaga kelancaran operasional.",
      "Mengelola absensi karyawan tetap dan freelance serta menyusun laporan kerja harian yang mencakup aktivitas operasional, transaksi, dan progres pekerjaan.",
      "Membuat dan merangkai pesanan pita dan parsel sesuai standar kualitas perusahaan, serta melakukan quality control (QC) untuk memastikan kualitas produk sebelum proses packing.",
      "Melakukan proses packing pesanan dan terbiasa bekerja dengan target produksi hingga ±100 pita per hari dengan menjaga kerapian, ketelitian, dan ketepatan waktu.",
    ],
  },
  {
    role: "Customer Service & Kasir",
    company: "Vidiz Baniar Skincare",
    period: "November 2024 - Juni 2025",
    photos: ["/porto_alyadesnawatisuwarman/vdz/1.jpg","/porto_alyadesnawatisuwarman/vdz/2.jpeg","/porto_alyadesnawatisuwarman/vdz/3.jpeg",],
    points: [
      "Menghimpun puluhan transaksi penjualan per hari secara tunai, debit atau kredit dengan akurat untuk menunjang operasional pelayanan.",
      "Mengelola menyelesaikan rata-rata 15 keluhan pelanggan/pasien per hari dengan tingkat kepuasan mencapai 80%.",
      "Melakukan follow-up pelanggan/pasien guna memastikan semua masalah yang belum terselesaikan diikuti hingga selesai dan pelanggan/pasien mendapatkan solusi atau hasil yang memuaskan.",
      "Menangani proses operasional pengiriman melalui Shopee dan Tokopedia jika diperlukan, meliputi penyusunan jadwal pengiriman instan/ekspedisi, print resi, proses packing, dan penempelan resi.",
    ],
  },
  {
    role: "Staff Back Office Assistant (Intern)",
    company: "Bank Jabar Banten (BJB)",
    period: "September 2022 - Oktober 2022",
    photos: ["/porto_alyadesnawatisuwarman/bjb/2.jpeg","/porto_alyadesnawatisuwarman/bjb/3.jpeg",],
    points: [
      "Melakukan penyortiran dan pendistribusian laporan.",
      "Menyusun lebih dari 20 files kredit konsumer sesuai dengan tanggal dan bulan.",
      "Menginput data billing pajak sesuai dengan tanggal laporan setiap hari.",
    ],
  },
];

const certifications = [
  "Sertifikat Kompetensi BNSP Jasa Pengelolaan Keuangan",
  "International Pertamina SPACE UP 3.0 Webinar Participant",
  "TOEFL (Score: 443)",
];

const skills = [
  "Kontrol dokumen & arsip",
  "Data entry & manajemen data",
  "Penanganan pelanggan",
  "Kerja sama tim",
  "Disiplin & tanggung jawab",
  "Komunikasi efektif",
  "Mudah beradaptasi",
];

/* APP */

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [openExperience, setOpenExperience] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="bg-white text-slate-900 transition-colors duration-500 dark:bg-slate-900 dark:text-white">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border border-rose-200 bg-white/80 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="font-bold uppercase tracking-tight">
            Alya Desnawati Suwarman
          </h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            <span className="text-lg">{darkMode ? "☀️" : "🌙"}</span>
            <span>{darkMode ? "Light" : "Dark"}</span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="flex min-h-screen items-center px-6 pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          {/* FOTO */}
          <div className="flex justify-center md:justify-start">
            <div className="h-80 w-64 overflow-hidden rounded-3xl bg-slate-100 shadow-2xl md:h-96 md:w-80">
              <img
                src={`${import.meta.env.BASE_URL}foto.PNG`}
                alt="Alya Desnawati Suwarman"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="text-center md:text-left">
            <span className="mb-4 block font-bold uppercase tracking-widest text-rose-300">
              Portofolio 2026
            </span>

            <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Alya Desnawati <br />
              <span className="text-rose-300">Suwarman</span>
            </h2>

            <a
              href="/porto_alyadesnawatisuwarman/CV_Alya.pdf"
              className="inline-block rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition-transform hover:scale-105 dark:bg-white dark:text-slate-900"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section
        id="about"
        className="mx-auto grid max-w-6xl items-start gap-16 px-6 py-24 md:grid-cols-2"
      >
        <div className="space-y-6">
          <h3 className="inline-block border-b-4 border-rose-300 pb-2 text-4xl font-bold">
            Tentang Saya
          </h3>

          <p className="text-lg leading-relaxed opacity-80">
            Lulusan Keuangan dan Perbankan yang teliti, komunikatif, dan
            berorientasi pada pelayanan serta administrasi. Memiliki pengalaman
            dalam pengelolaan administrasi keuangan, pencatatan dan verifikasi
            transaksi, serta manajemen dokumen secara rapi dan akurat.
            Berpengalaman dalam menangani komunikasi pelanggan, termasuk
            memberikan informasi, follow up, dan menjaga hubungan dengan
            customer. Mampu bekerja secara tim maupun mandiri serta beradaptasi
            di lingkungan kerja yang dinamis.
          </p>

          <div className="border-t border-rose-300 pt-4 dark:border-slate-800">
            <h4 className="mb-2 font-bold">Pendidikan</h4>

            <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800/50">
              <p className="font-bold">STIE Ekuitas</p>
              <p className="text-sm opacity-70">
                D3 Keuangan Perbankan (2020 - 2023)
              </p>
              <p className="text-sm font-medium text-rose-300">IPK: 3,22</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <InfoCard title="📍 Lokasi" text="Bandung, Indonesia" />
          <InfoCard title="✉️ Email" text="alyadesnawati10@gmail.com" />
          <InfoCard title="🔗 LinkedIn" text="Alya Desnawati Suwarman" />
        </div>
      </section>

      {/* SKILLS */}
      <Section title="Keterampilan Teknis & Personal">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex h-32 items-center justify-center rounded-3xl border-2 border-transparent bg-slate-100 transition-all duration-300 hover:scale-[1.03] hover:border-rose-300 hover:shadow-lg dark:bg-slate-700"
            >
              <span className="px-4 text-center text-sm font-bold uppercase leading-relaxed tracking-widest transition-colors duration-300 group-hover:text-rose-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* SKILL SOCIAL MEDIA */}
      <Section title="Skill Social Media">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {Object.entries(skillImages).map(([skill, image]) => (
            <div
              key={skill}
              className="group relative flex h-32 items-center justify-center rounded-3xl border-2 border-transparent bg-slate-100 transition-all duration-300 hover:scale-[1.03] hover:border-rose-300 hover:shadow-lg dark:bg-slate-700"
            >
              <img
                src={image}
                alt={skill}
                className="h-16 w-auto object-contain"
              />

              <span className="absolute bottom-3 left-1/2 w-full -translate-x-1/2 px-2 text-center text-xs font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-rose-300">
                {skill.replace("_", " ")}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* PENGALAMAN KERJA */}
      <Section id="experience" title="Pengalaman Kerja">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative border-l-2 border-rose-300 pl-8">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-rose-300" />

              <h4 className="text-2xl font-bold">{exp.role}</h4>

              <p className="mb-4 font-medium text-rose-300">
                {exp.company} | {exp.period}
              </p>

              <ul className="space-y-2 opacity-80">
                {exp.points.map((point, pointIndex) => (
                  <li key={pointIndex}>• {point}</li>
                ))}
              </ul>

              <button
                onClick={() =>
                  setOpenExperience(openExperience === index ? null : index)
                }
                className="mt-5 rounded-full bg-rose-300 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:bg-rose-400"
              >
                {openExperience === index ? "Sembunyikan Foto" : "Lihat Foto"}
              </button>

              {openExperience === index && exp.photos && (
                <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {exp.photos.map((photo, photoIndex) => (
                    <img
                      key={photoIndex}
                      src={photo}
                      alt={`${exp.company} ${photoIndex + 1}`}
                      className="h-48 w-full rounded-2xl object-cover shadow-md"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECT */}
      <Section title="Project" id="projects">
        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-rose-300 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="p-8">
                <h4 className="mb-3 text-xl font-bold">{project.title}</h4>

                <p className="mb-4 text-sm opacity-70">{project.desc}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                  Result: {project.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SERTIFIKAT */}
      <Section id="certifications" title="Sertifikat">
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl border border-rose-300 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="h-12 w-2 rounded-full bg-rose-300" />
              <span className="font-medium">{certification}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <section className="bg-black py-24 text-center text-white">
        <h2 className="mb-4 text-4xl font-bold">Mari Terhubung</h2>

        <p className="mx-auto mb-8 max-w-md opacity-70">
          Terbuka untuk peluang kerja di bidang Administrasi, Customer Service, dan
          Operasional Perbankan.
        </p>

        <div className="mb-4 mt-8 flex justify-center gap-8">
          <a
            href="mailto:alyadesnawati10@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="hover:text-sky-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.964 1.874l-7.5 5.25a2.25 2.25 0 01-2.572 0l-7.5-5.25A2.25 2.25 0 012.25 6.993V6.75"
              />
            </svg>
          </a>

          <a
            href="https://wa.me/6281320798697"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              fill="currentColor"
              className="mx-auto h-10 w-10"
            >
              <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/alya-desnawati-suwarman-97b368268/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="mx-auto h-10 w-10"
            >
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C23.12 107.3 0 84.18 0 54.9A53.24 53.24 0 0153.24 1.7c29.28 0 53.24 23.12 53.24 53.2 0 29.28-23.96 53.2-53.24 53.2zM447.8 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 16-44 31.4-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.68s1.2-241.1 0-266.1h92.68v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/alyaadee_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="mx-auto h-10 w-10"
            >
              <path d="M224.3 141a115 115 0 1 0-.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1-.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1-53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 text-center text-xs opacity-50 dark:border-slate-800">
        © {new Date().getFullYear()} Alya Desnawati Suwarman. All rights
        reserved.
      </footer>
    </div>
  );
}

/* COMPONENT */

function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="inline-block border-b-4 border-rose-300 pb-2 text-4xl font-black md:text-5xl">
        {title}
      </h2>

      <div className="mt-8">{children}</div>
    </section>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
      <b className="text-sm uppercase tracking-wider text-rose-300">{title}</b>
      <p className="mt-1 font-medium">{text}</p>
    </div>
  );
}