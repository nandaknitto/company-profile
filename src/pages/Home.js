import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Selamat Datang di Company Profile</h1>
          <p>
            Kami adalah perusahaan terkemuka yang berkomitmen untuk memberikan 
            layanan terbaik dan produk berkualitas tinggi kepada pelanggan kami.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn">
              Lihat Produk Kami
            </Link>
            <Link to="/contacts" className="btn btn-secondary">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Mengapa Memilih Kami</h2>
          <p className="section-subtitle">
            Kami menawarkan solusi terbaik dengan kualitas yang tidak diragukan
          </p>
          <div className="grid grid-3">
            <div className="feature-card">
              <i className="fas fa-award"></i>
              <h3>Berkualitas</h3>
              <p>
                Produk kami dibuat dengan standar kualitas tertinggi dan 
                menggunakan bahan baku terbaik untuk memastikan kepuasan pelanggan.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-clock"></i>
              <h3>Tepat Waktu</h3>
              <p>
                Kami berkomitmen untuk menyelesaikan setiap proyek tepat waktu 
                tanpa mengorbankan kualitas produk dan layanan.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>Tim Profesional</h3>
              <p>
                Didukung oleh tim yang berpengalaman dan profesional dalam 
                memberikan solusi terbaik untuk kebutuhan bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Tentang Kami</h2>
              <p>
                Company Profile adalah perusahaan yang telah berpengalaman dalam 
                industri selama lebih dari 10 tahun. Kami berkomitmen untuk 
                memberikan layanan terbaik dan produk berkualitas tinggi kepada 
                pelanggan kami.
              </p>
              <p>
                Dengan tim yang berpengalaman dan teknologi terkini, kami siap 
                membantu Anda mencapai tujuan bisnis dengan solusi yang tepat 
                dan efisien.
              </p>
              <Link to="/profile" className="btn">
                Pelajari Lebih Lanjut
              </Link>
            </div>
            <div className="about-image">
              <i className="fas fa-building"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Produk Unggulan Kami</h2>
          <p className="section-subtitle">
            Temukan produk-produk terbaik kami yang telah dipercaya oleh ribuan pelanggan
          </p>
          <div className="grid grid-3">
            <div className="product-card">
              <div className="product-image">
                <i className="fas fa-cube"></i>
              </div>
              <div className="product-content">
                <h3>Produk A</h3>
                <p>
                  Produk unggulan kami yang telah terbukti kualitasnya dan 
                  banyak digunakan oleh pelanggan setia kami.
                </p>
                <Link to="/products" className="btn">
                  Lihat Detail
                </Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="product-content">
                <h3>Produk B</h3>
                <p>
                  Solusi inovatif yang dirancang khusus untuk memenuhi 
                  kebutuhan bisnis modern dengan teknologi terkini.
                </p>
                <Link to="/products" className="btn">
                  Lihat Detail
                </Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <i className="fas fa-tools"></i>
              </div>
              <div className="product-content">
                <h3>Produk C</h3>
                <p>
                  Produk yang mengutamakan efisiensi dan efektivitas dalam 
                  membantu meningkatkan produktivitas bisnis Anda.
                </p>
                <Link to="/products" className="btn">
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Siap Memulai Kerjasama?</h2>
            <p className="section-subtitle">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan 
              konsultasi gratis dari tim profesional kami.
            </p>
            <div className="hero-buttons">
              <Link to="/contacts" className="btn">
                Hubungi Kami
              </Link>
              <Link to="/karir" className="btn btn-secondary">
                Bergabung dengan Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 