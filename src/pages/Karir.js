import React, { useState } from 'react';

const Karir = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const jobListings = [
    {
      id: 1,
      title: "Sales Executive Plastik",
      location: "Jakarta Pusat",
      type: "Full-time",
      experience: "1-3 tahun",
      description: "Kami mencari sales executive berpengalaman untuk bergabung dengan tim penjualan kami. Bertanggung jawab untuk menjual produk plastik ke pelanggan retail dan bisnis.",
      requirements: [
        "Pengalaman 1-3 tahun dalam sales retail",
        "Memahami produk plastik dan kemasan",
        "Kemampuan komunikasi yang baik",
        "Target oriented dan self-motivated",
        "Memiliki kendaraan pribadi"
      ],
      responsibilities: [
        "Menjual produk plastik ke pelanggan",
        "Mengembangkan relasi dengan pelanggan",
        "Mencapai target penjualan bulanan",
        "Memberikan layanan pelanggan terbaik"
      ]
    },
    {
      id: 2,
      title: "Warehouse Staff",
      location: "Jakarta Pusat",
      type: "Full-time",
      experience: "1-2 tahun",
      description: "Bergabung dengan tim warehouse kami untuk mengelola stok produk plastik dan memastikan pengiriman yang tepat waktu.",
      requirements: [
        "Pengalaman 1-2 tahun di warehouse",
        "Fisik sehat dan kuat",
        "Memahami sistem inventory",
        "Teliti dan bertanggung jawab",
        "Bersedia kerja shift"
      ],
      responsibilities: [
        "Mengelola stok produk plastik",
        "Menyiapkan pesanan untuk pengiriman",
        "Melakukan quality control",
        "Menjaga kebersihan warehouse"
      ]
    },
    {
      id: 3,
      title: "Customer Service",
      location: "Jakarta Pusat",
      type: "Full-time",
      experience: "1-2 tahun",
      description: "Memberikan layanan pelanggan terbaik untuk menjawab pertanyaan dan menangani keluhan pelanggan tentang produk plastik kami.",
      requirements: [
        "Pengalaman 1-2 tahun sebagai customer service",
        "Kemampuan komunikasi yang baik",
        "Sabar dan ramah",
        "Memahami produk plastik",
        "Bersedia kerja shift"
      ],
      responsibilities: [
        "Menjawab pertanyaan pelanggan",
        "Menangani keluhan dan komplain",
        "Memberikan informasi produk",
        "Mencatat data pelanggan"
      ]
    },
    {
      id: 4,
      title: "Marketing Staff",
      location: "Jakarta Pusat",
      type: "Full-time",
      experience: "2-3 tahun",
      description: "Mengembangkan strategi marketing untuk produk plastik kami dan meningkatkan brand awareness PlastikMart.",
      requirements: [
        "Pengalaman 2-3 tahun dalam marketing",
        "Memahami digital marketing",
        "Kreatif dan inovatif",
        "Kemampuan analisis market",
        "Mahir dalam social media"
      ],
      responsibilities: [
        "Mengembangkan kampanye marketing",
        "Mengelola social media",
        "Menganalisis trend pasar",
        "Meningkatkan brand awareness"
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