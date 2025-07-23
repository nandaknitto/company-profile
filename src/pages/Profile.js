import React from 'react';

const Profile = () => {
  return (
    <div className="profile" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Profil Perusahaan</h1>
          <p>
            Mengenal lebih dekat dengan Company Profile, perusahaan terkemuka 
            yang berkomitmen untuk memberikan layanan terbaik.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Tentang Kami</h2>
              <p>
                Company Profile didirikan pada tahun 2010 dengan visi untuk menjadi 
                perusahaan terdepan dalam industri yang kami geluti. Selama lebih dari 
                10 tahun, kami telah melayani ribuan pelanggan dengan berbagai 
                kebutuhan bisnis mereka.
              </p>
              <p>
                Kami berkomitmen untuk memberikan solusi terbaik dengan mengutamakan 
                kualitas, inovasi, dan kepuasan pelanggan. Tim kami terdiri dari 
                para profesional yang berpengalaman dan terus mengembangkan diri 
                untuk memberikan layanan terbaik.
              </p>
            </div>
            <div className="about-image">
              <i className="fas fa-chart-line"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Visi & Misi</h2>
          <div className="grid grid-2">
            <div className="feature-card">
              <i className="fas fa-eye"></i>
              <h3>Visi</h3>
              <p>
                Menjadi perusahaan terdepan yang inovatif dan terpercaya dalam 
                memberikan solusi terbaik untuk kebutuhan bisnis pelanggan kami, 
                dengan fokus pada kualitas, keberlanjutan, dan pertumbuhan yang 
                berkelanjutan.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-bullseye"></i>
              <h3>Misi</h3>
              <p>
                Memberikan layanan dan produk berkualitas tinggi dengan harga 
                yang kompetitif, mengembangkan inovasi berkelanjutan, dan 
                membangun hubungan jangka panjang dengan pelanggan berdasarkan 
                kepercayaan dan kepuasan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Nilai-Nilai Perusahaan</h2>
          <div className="grid grid-4">
            <div className="feature-card">
              <i className="fas fa-handshake"></i>
              <h3>Integritas</h3>
              <p>
                Menjalankan bisnis dengan kejujuran, transparansi, dan 
                tanggung jawab dalam setiap aspek operasional.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-lightbulb"></i>
              <h3>Inovasi</h3>
              <p>
                Terus berinovasi dan mengembangkan solusi kreatif untuk 
                memenuhi kebutuhan pelanggan yang terus berkembang.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-star"></i>
              <h3>Kualitas</h3>
              <p>
                Mengutamakan kualitas dalam setiap produk dan layanan yang 
                kami berikan kepada pelanggan.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>Kolaborasi</h3>
              <p>
                Membangun kerjasama yang kuat dengan pelanggan, mitra, 
                dan tim internal untuk mencapai kesuksesan bersama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Sejarah Perusahaan</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>2010</h3>
                <h4>Pendirian Perusahaan</h4>
                <p>
                  Company Profile didirikan dengan visi untuk menjadi perusahaan 
                  terdepan dalam industri.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>2015</h3>
                <h4>Ekspansi Bisnis</h4>
                <p>
                  Memperluas layanan dan produk untuk memenuhi kebutuhan 
                  pelanggan yang semakin beragam.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>2020</h3>
                <h4>Transformasi Digital</h4>
                <p>
                  Mengadopsi teknologi terkini untuk meningkatkan efisiensi 
                  dan kualitas layanan.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>2024</h3>
                <h4>Pertumbuhan Berkelanjutan</h4>
                <p>
                  Terus berkembang dan berinovasi untuk memberikan solusi 
                  terbaik bagi pelanggan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Tim Manajemen</h2>
          <div className="grid grid-3">
            <div className="team-card">
              <div className="team-image">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="team-content">
                <h3>John Doe</h3>
                <p className="position">CEO & Founder</p>
                <p>
                  Memiliki pengalaman lebih dari 15 tahun dalam industri 
                  dan memimpin perusahaan dengan visi yang jelas.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className="team-content">
                <h3>Jane Smith</h3>
                <p className="position">CTO</p>
                <p>
                  Ahli teknologi yang berpengalaman dalam mengembangkan 
                  solusi inovatif untuk bisnis.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <i className="fas fa-user-cog"></i>
              </div>
              <div className="team-content">
                <h3>Mike Johnson</h3>
                <p className="position">COO</p>
                <p>
                  Bertanggung jawab atas operasional perusahaan dan 
                  memastikan efisiensi dalam setiap proses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile; 