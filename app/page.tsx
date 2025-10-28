import { VocabGrid } from '@/components/edu/VocabGrid'
import { MiniQuiz } from '@/components/edu/MiniQuiz'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Learning module of describing<br />Food &amp; Beverage
            </h1>
            <p className="mt-4 inline-block rounded-full bg-primary-600/10 px-4 py-1.5 text-sm font-semibold text-primary-700">
              MODUL AJAR
            </p>
          </div>
          <div className="pointer-events-none absolute -top-24 right-[-80px] h-64 w-64 rounded-full bg-primary-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-[-80px] h-64 w-64 rounded-full bg-secondary-300/30 blur-3xl" />
        </div>
      </section>
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <table className="w-full text-left">
              <tbody>
                {[
                  ['Nama Satuan Pendidikan', 'SMP Negeri 1 Kadudampit'],
                  ['Mata Pelajaran', 'Bahasa Inggris'],
                  ['Fase / Kelas /Semester', 'D / VII / Ganjil'],
                  ['Materi', 'Chapter 2 Culinary and Me_Mendeskripsikan makanan'],
                  ['Alokasi Waktu', '2 JP'],
                  ['Tahun Pelajaran', '2025/ 2026'],
                ].map((row, idx) => (
                  <tr key={row[0]} className={idx % 2 === 1 ? 'bg-slate-50/60' : ''}>
                    <td className="w-[38%] px-4 py-3 text-sm font-medium text-slate-600">{row[0]}</td>
                    <td className="w-[4%] px-2 py-3 text-slate-400">:</td>
                    <td className="px-4 py-3 text-sm md:text-base text-slate-800">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">1. IDENTIFIKASI PESERTA DIDIK</h3>
          <p className="mt-4 text-base md:text-lg text-slate-700">
            Peserta didik memiliki pengetahuan dasar tentang kosakata benda-benda di sekitar mereka dalam bahasa Inggris, termasuk sejumlah kata kerja sederhana. Mereka juga diharapkan memiliki kemampuan dasar dalam membaca teks pendek dan memahami instruksi sederhana dalam bahasa Inggris.
          </p>
        </div>
      </section>
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">2. IDENTIFIKASI MATA PELAJARAN</h3>
          <p className="mt-4 text-base md:text-lg text-slate-700">
            Materi "Culinary and Me" mencakup jenis pengetahuan konseptual dan prosedural. Materi ini relevan dengan kehidupan nyata peserta didik karena makanan dan minuman merupakan bagian yang tak terpisahkan dari kehidupan sehari-hari mereka.
          </p>
        </div>
      </section>
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">3. DIMENSI PROFIL LULUSAN</h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left">
              <tbody>
                {[
                  ['DPL-1', 'Keimanan dan Ketakwaan terhadap Tuhan Yang Maha Esa.', true],
                  ['DPL-2', 'Kewargaan', false],
                  ['DPL-3', 'Penalaran Kritis', false],
                  ['DPL-4', 'Kreativitas', true],
                  ['DPL-5', 'Kolaborasi', true],
                  ['DPL-6', 'Kemandirian', true],
                  ['DPL-7', 'Kesehatan', false],
                  ['DPL-8', 'Komunikasi', true],
                ].map(([code, text, checked], idx) => (
                  <tr key={code as string} className={idx % 2 === 1 ? 'bg-slate-50/60' : ''}>
                    <td className="px-4 py-3 text-slate-700 text-sm md:text-base">
                      <label className="inline-flex items-start gap-3 select-none">
                        <input type="checkbox" className="mt-1 h-4 w-4 accent-primary-600" checked={checked as boolean} readOnly />
                        <span className="font-medium">{code as string}</span>
                      </label>
                    </td>
                    <td className="px-4 py-3 text-slate-700 text-sm md:text-base">{text as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">4. CAPAIAN PEMBELAJARAN (CP)</h3>
          <h4 className="mt-3 text-lg md:text-xl font-semibold text-slate-800">Elemen Menyimak - Berbicara</h4>
          <p className="mt-2 text-base text-slate-600">Pada akhir Fase D, peserta didik dapat:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base md:text-lg text-slate-700">
            <li>Memahami dan merespons teks lisan, tulisan, dan multimodal tentang berbagai topik, termasuk deskripsi makanan dan resep sederhana.</li>
            <li>Berinteraksi dan berkomunikasi menggunakan bahasa Inggris untuk menyampaikan dan meminta informasi tentang makanan dan minuman.</li>
            <li>Mendeskripsikan makanan dan minuman menggunakan kosakata dan struktur kalimat yang tepat.</li>
            <li>Mengembangkan keterampilan membaca dan menulis teks prosedur (resep) sederhana.</li>
          </ul>
        </div>
      </section>
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">5. LINTAS DISIPLIN ILMU</h3>
          <ul className="mt-4 space-y-3 text-base md:text-lg text-slate-700">
            <li><span className="font-semibold">Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)</span>: Diskusi tentang makanan sehat, nutrisi, dan kaitannya dengan pola hidup sehat.</li>
            <li><span className="font-semibold">Ilmu Pengetahuan Alam (IPA)</span>: Konsep nutrisi, jenis-jenis makanan, dan proses kimia dalam memasak (misalnya, perubahan wujud bahan makanan).</li>
            <li><span className="font-semibold">Seni Budaya</span>: Menghargai keindahan presentasi makanan, keragaman kuliner sebagai bagian dari budaya, atau membuat poster/iklan makanan.</li>
            <li><span className="font-semibold">Ilmu Pengetahuan Sosial (IPS)</span>: Geografi makanan (makanan khas daerah/negara lain), sejarah kuliner, atau dampak sosial ekonomi dari industri makanan.</li>
          </ul>
        </div>
      </section>
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">6. TUJUAN PEMBELAJARAN</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base md:text-lg text-slate-700">
            <li>Mengidentifikasi dan menyebutkan berbagai kosakata tentang makanan dan minuman dalam bahasa Inggris.</li>
            <li>Menggunakan adjectives (kata sifat) untuk mendeskripsikan rasa, tekstur, dan penampilan makanan/minuman dengan benar.</li>
          </ul>
        </div>
      </section>
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">7. KERANGKA PEMBELAJARAN</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h5 className="text-base md:text-lg font-semibold text-slate-900">PRAKTIK PEDAGOGIK</h5>
              <p className="mt-2 text-base text-slate-700">Model pembelajaran Contextual Teaching and Learning (CTL) dengan diskusi dan kerja kelompok.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h5 className="text-base md:text-lg font-semibold text-slate-900">MITRA PEMBELAJARAN</h5>
              <ul className="mt-2 space-y-2 text-base text-slate-700">
                <li>Lingkungan Sekolah: Teman sejawat</li>
                <li>Lingkungan Luar Sekolah: Keluarga, pedagang makanan, komunitas kuliner, vlogger/blogger (sebagai inspirasi).</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:col-span-2">
              <h5 className="text-base md:text-lg font-semibold text-slate-900">LINGKUNGAN BELAJAR</h5>
              <ul className="mt-2 space-y-2 text-base text-slate-700">
                <li>Ruang Fisik: Ruang kelas</li>
                <li>Ruang Virtual: -</li>
                <li>Budaya Belajar: Mendorong siswa untuk berani dan percaya diri berbicara bahasa Inggris meskipun masih ada kesalahan, saling membantu dan mengoreksi, serta aktif bertanya. Menciptakan suasana belajar yang menyenangkan, dan bebas dari rasa takut salah.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:col-span-2">
              <h5 className="text-base md:text-lg font-semibold text-slate-900">PEMANFAATAN DIGITAL</h5>
              <ul className="mt-2 space-y-2 text-base text-slate-700">
                <li>Perencanaan: PPT</li>
                <li>Langkah: Rekaman video</li>
                <li>Asesmen: LKPD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">8. LANGKAH-LANGKAH PEMBELAJARAN AWAL (BERKESADARAN)</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base md:text-lg text-slate-700">
            <li>Guru mengucapkan salam, memulai kegiatan belajar dengan doa dan mengecek kehadiran.</li>
            <li>Guru melakukan apersepsi serta memberikan pertanyaan pemantik: <span className="text-blue-700 font-semibold">"What's your favorite food/drink?"</span> atau <span className="text-blue-700 font-semibold">"Have you ever tried this food?"</span>.</li>
            <li>Guru menyampaikan tujuan pembelajaran, dan selanjutnya mengadakan "tebak makanan" menggunakan deskripsi sederhana dalam bahasa Inggris. Guru menyampaikan bahwa di bab ini mereka akan bisa "bercerita" tentang makanan kesukaan dalam bahasa Inggris.</li>
          </ul>
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">KEGIATAN INTI (BERMAKNA DAN MENGGEMBIRAKAN)</h2>
          <div className="mt-6 space-y-8">
            <div>
              <h3 className="italic text-xl md:text-2xl font-semibold text-slate-900">Memahami</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base md:text-lg text-slate-700">
                <li>Guru menyajikan kosakata tentang makanan, minuman, dan adjectives (rasa, tekstur) melalui gambar dan daftar kosakata, ataupun video.</li>
                <li>Guru membimbing siswa untuk memperhatikan pengucapan dan menekankan intonasi sejumlah kata serta memberikan jeda untuk siswa menginternalisasi kosakata baru.</li>
                <li>Peserta didik bekerja secara berkelompok untuk mengidentifikasi gambar makanan dengan nama dan deskripsi yang sesuai. Guru memberikan bantuan bagi siswa yang membutuhkan.</li>
              </ul>
            </div>
            <div>
              <h3 className="italic text-xl md:text-2xl font-semibold text-slate-900">Mengaplikasi</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base md:text-lg text-slate-700">
                <li>Presentasi singkat "My Favorite Food" (dengan gambar dan deskripsi).</li>
                <li>Guru berkeliling, memberikan feedback langsung dan koreksi yang konstruktif. Bagi siswa yang masih kesulitan, guru memberikan contoh kalimat langsung atau mengulang instruksi perlahan. Bagi siswa yang sudah mahir, guru mendorong untuk menggunakan kalimat yang lebih kompleks atau menambahkan detail.</li>
              </ul>
            </div>
            <div>
              <h3 className="italic text-xl md:text-2xl font-semibold text-slate-900">Merefleksi</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base md:text-lg text-slate-700">
                <li>Setiap kelompok menyampaikan hasil diskusinya. Peserta didik lain diberikan kesempatan untuk bertanya atau memberikan komentar positif.</li>
                <li>Peserta didik menulis di buku catatan mereka tentang: "Tiga kata baru yang saya pelajari hari ini adalah...", "Satu kalimat yang saya senang bisa mengucapkannya dalam bahasa Inggris adalah...", "Bagian mana dari pelajaran ini yang paling saya nikmati?".</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">KEGIATAN PENUTUP (BERMAKNA)</h3>
          <div className="mt-4 space-y-4 text-base md:text-lg text-slate-700">
            <p><span className="font-semibold">Umpan Balik Konstruktif</span>: Guru memberikan umpan balik umum tentang progres kelas, memuji usaha dan keberanian siswa dalam berbicara. Guru juga dapat memberikan <i>feedback</i> spesifik terkait penggunaan tata bahasa atau pelafalan yang perlu diperbaiki.</p>
            <p><span className="font-semibold">Menyimpulkan Pembelajaran</span>: Guru bersama peserta didik merangkum kosakata dan struktur kalimat penting yang telah dipelajari dalam bab ini. Guru menekankan pentingnya komunikasi dalam bahasa Inggris untuk berbagai situasi, termasuk kuliner.</p>
            <div>
              <p className="font-semibold">Perencanaan Pembelajaran Selanjutnya</p>
              <p>Guru bertanya kepada peserta didik: <br />"Topik makanan apa lagi yang ingin kalian bahas dalam bahasa Inggris?", "Apakah kalian ingin mencoba membuat video resep singkat?". Guru mencatat masukan ini untuk dipertimbangkan di bab selanjutnya.</p>
            </div>
            <p><span className="font-semibold">Apresiasi</span>: Guru memberikan apresiasi atas partisipasi aktif, kreativitas, dan semangat belajar peserta didik.</p>
          </div>
        </div>
      </section>
      <section className="py-6 md:py-10 bg-white/50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 text-center">Vocabulary: Food &amp; Drinks</h3>
          <p className="mt-2 text-center text-slate-600">Kartu kosakata untuk memudahkan mengingat.</p>
          <div className="mt-6">
            <VocabGrid />
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <MiniQuiz />
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Happy Study English!</h2>
        </div>
      </section>
    </main>
  )
}


