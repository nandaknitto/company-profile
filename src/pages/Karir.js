import React, { useState } from 'react';

const Karir = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const jobListings = [
    {
      id: 1,
      title: "Senior Software Developer",
      location: "Jakarta Pusat",
      type: "Full-time",
      experience: "3-5 tahun",
      description: "Kami mencari developer berpengalaman untuk bergabung dengan tim pengembangan kami. Bertanggung jawab untuk mengembangkan aplikasi web dan mobile yang inovatif.",
      requirements: [
        "Pengalaman 3-5 tahun dalam pengembangan web",
        "Mahir dalam React, Node.js, dan database",
        "Memahami konsep REST API dan microservices",
        "Kemampuan problem solving yang baik",
        "Berkomunikasi dalam bahasa Inggris"
      ],
      responsibilities: [
        "Mengembangkan aplikasi web dan mobile",
        "Berkolaborasi dengan tim design dan product",
        "Melakukan code review dan testing",
        "Mentoring junior developers"
      ]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      location: "Jakarta Pusat",
      type: "Full-time",
      experience: "2-4 tahun",
      description: "Bergabung dengan tim design kami untuk menciptakan pengalaman pengguna yang luar biasa melalui desain yang inovatif dan user-friendly.",
      requirements: [
        "Pengalaman 2-4 tahun dalam UI/UX design",
        "Mahir dalam Figma, Adobe Creative Suite",
        "Memahami prinsip design system",
        "Portfolio yang menunjukkan kemampuan design",
        "Kemampuan prototyping dan user research"
      ],
      responsibilities: [
        "Mendesain interface yang user-friendly",
        "Melakukan user research dan testing",
        "Berkolaborasi dengan tim development",
        "Mengembangkan design system"
      ]
    },
    {
      id: 3,
      title: "Product Manager",
      location: "Jakarta Pusat",
      type: "Full-time",
      experience: "4-6 tahun",
      description: "Memimpin pengembangan produk dari ide hingga peluncuran. Bertanggung jawab untuk strategi produk dan roadmap pengembangan.",
      requirements: [
        "Pengalaman 4-6 tahun sebagai Product Manager",
        "Memahami metodologi Agile dan Scrum",
        "Kemampuan analisis data dan market research",
        "Kemampuan komunikasi dan leadership",
        "Background technical atau business"
      ],
      responsibilities: [
        "Mengembangkan strategi produk",
        "Mengelola roadmap dan backlog",
        "Berkolaborasi dengan stakeholders",
        "Menganalisis metrik dan feedback"
      ]
    },
    {
      id: 4,
      title: "Sales Executive",
      location: "Jakarta Pusat",
      type: "Full-time",
      experience: "1-3 tahun",
      description: "Bergabung dengan tim sales kami untuk membantu pertumbuhan bisnis melalui penjualan produk dan layanan kami.",
      requirements: [
        "Pengalaman 1-3 tahun dalam sales",
        "Kemampuan komunikasi yang baik",
        "Target oriented dan self-motivated",
        "Memahami produk teknologi",
        "Kemampuan presentasi yang baik"
      ],
      responsibilities: [
        "Mencari dan mengembangkan leads",
        "Melakukan presentasi produk",
        "Mengelola pipeline sales",
        "Mencapai target penjualan"
      ]
    }
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  return (
    <div className="karir" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Bergabung dengan Tim Kami</h1>
          <p>
            Kami mencari talenta-talenta terbaik untuk bergabung dengan tim kami. 
            Bersama-sama kita akan menciptakan solusi inovatif yang mengubah dunia.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Mengapa Bergabung dengan Kami</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <i className="fas fa-graduation-cap"></i>
              <h3>Pengembangan Karir</h3>
              <p>
                Kami mendukung pertumbuhan karir Anda dengan program pelatihan 
                dan mentoring yang berkelanjutan.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>Tim yang Kolaboratif</h3>
              <p>
                Bekerja dalam lingkungan yang mendukung kolaborasi dan 
                pertukaran ide antar tim.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-lightbulb"></i>
              <h3>Inovasi Berkelanjutan</h3>
              <p>
                Kesempatan untuk bekerja dengan teknologi terkini dan 
                menciptakan solusi inovatif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Lowongan Kerja</h2>
          <div className="job-listings">
            {jobListings.map((job) => (
              <div key={job.id} className="career-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="location">
                      <i className="fas fa-map-marker-alt"></i>
                      {job.location}
                    </span>
                    <span className="type">
                      <i className="fas fa-clock"></i>
                      {job.type}
                    </span>
                    <span className="experience">
                      <i className="fas fa-briefcase"></i>
                      {job.experience}
                    </span>
                  </div>
                </div>
                <p className="description">{job.description}</p>
                <div className="requirements">
                  <h4>Kualifikasi:</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className="responsibilities">
                  <h4>Tanggung Jawab:</h4>
                  <ul>
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="btn"
                  onClick={() => handleApply(job)}
                >
                  Lamar Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Benefit yang Kami Tawarkan</h2>
          <div className="grid grid-4">
            <div className="feature-card">
              <i className="fas fa-money-bill-wave"></i>
              <h3>Gaji Kompetitif</h3>
              <p>
                Gaji yang sesuai dengan pengalaman dan kemampuan, 
                plus bonus kinerja.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-heartbeat"></i>
              <h3>Asuransi Kesehatan</h3>
              <p>
                Asuransi kesehatan komprehensif untuk Anda dan keluarga.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-calendar-alt"></i>
              <h3>Cuti Tahunan</h3>
              <p>
                12 hari cuti tahunan plus cuti hari raya dan libur nasional.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-laptop"></i>
              <h3>Remote Work</h3>
              <p>
                Fleksibilitas bekerja dari rumah atau kantor sesuai kebutuhan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Lamar Posisi: {selectedJob.title}</h3>
              <button 
                className="modal-close"
                onClick={() => setShowApplicationForm(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form className="application-form">
              <div className="form-group">
                <label htmlFor="applicantName">Nama Lengkap *</label>
                <input type="text" id="applicantName" required />
              </div>
              <div className="form-group">
                <label htmlFor="applicantEmail">Email *</label>
                <input type="email" id="applicantEmail" required />
              </div>
              <div className="form-group">
                <label htmlFor="applicantPhone">Nomor Telepon *</label>
                <input type="tel" id="applicantPhone" required />
              </div>
              <div className="form-group">
                <label htmlFor="applicantExperience">Pengalaman (tahun)</label>
                <input type="number" id="applicantExperience" min="0" />
              </div>
              <div className="form-group">
                <label htmlFor="applicantMessage">Pesan/Cover Letter</label>
                <textarea 
                  id="applicantMessage" 
                  rows="4"
                  placeholder="Ceritakan mengapa Anda tertarik dengan posisi ini..."
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="applicantResume">Upload CV/Resume *</label>
                <input type="file" id="applicantResume" accept=".pdf,.doc,.docx" required />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn">
                  Kirim Lamaran
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setShowApplicationForm(false)}
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Culture Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Budaya Perusahaan</h2>
          <div className="grid grid-2">
            <div className="culture-content">
              <h3>Nilai-Nilai Kami</h3>
              <ul>
                <li><strong>Inovasi:</strong> Terus mencari cara baru untuk menyelesaikan masalah</li>
                <li><strong>Kolaborasi:</strong> Bekerja bersama untuk mencapai tujuan bersama</li>
                <li><strong>Integritas:</strong> Bertindak dengan jujur dan transparan</li>
                <li><strong>Excellence:</strong> Mengutamakan kualitas dalam setiap pekerjaan</li>
              </ul>
            </div>
            <div className="culture-image">
              <i className="fas fa-handshake"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Karir; 