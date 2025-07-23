import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Selamat Datang di PlastikMart</h1>
          <p>
            Distributor dan retail plastik terpercaya dengan berbagai produk plastik 
            berkualitas tinggi untuk kebutuhan rumah tangga dan bisnis Anda.
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
          <h2 className="section-title">Mengapa Memilih PlastikMart</h2>
          <p className="section-subtitle">
            Kami menawarkan produk plastik berkualitas dengan harga terbaik
          </p>
          <div className="grid grid-3">
            <div className="feature-card">
              <i className="fas fa-award"></i>
              <h3>Produk Berkualitas</h3>
              <p>
                Semua produk plastik kami dipilih dengan standar kualitas tertinggi 
                dan menggunakan bahan baku premium untuk memastikan keamanan dan ketahanan.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-truck"></i>
              <h3>Pengiriman Cepat</h3>
              <p>
                Layanan pengiriman cepat ke seluruh Indonesia dengan jaminan 
                produk sampai dalam kondisi baik dan tepat waktu.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-tags"></i>
              <h3>Harga Terbaik</h3>
              <p>
                Kami menawarkan harga kompetitif dengan diskon menarik 
                untuk pembelian dalam jumlah besar dan pelanggan setia.
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
              <h2>Tentang PlastikMart</h2>
              <p>
                PlastikMart adalah distributor dan retail plastik terpercaya yang telah 
                berpengalaman dalam industri plastik selama lebih dari 8 tahun. Kami 
                berkomitmen untuk menyediakan produk plastik berkualitas tinggi dengan 
                harga terbaik untuk kebutuhan rumah tangga dan bisnis.
              </p>
              <p>
                Dengan jaringan supplier yang luas dan tim yang berpengalaman, kami 
                siap memenuhi kebutuhan plastik Anda dengan berbagai pilihan produk 
                yang aman, berkualitas, dan ramah lingkungan.
              </p>
              <Link to="/profile" className="btn">
                Pelajari Lebih Lanjut
              </Link>
            </div>
            <div className="about-image">
              <i className="fas fa-shopping-bag"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Produk Plastik Unggulan</h2>
          <p className="section-subtitle">
            Temukan berbagai produk plastik berkualitas yang telah dipercaya oleh ribuan pelanggan
          </p>
          <div className="grid grid-3">
            <div className="product-card">
              <div className="product-image">
                <i className="fas fa-box"></i>
              </div>
              <div className="product-content">
                <h3>Wadah Plastik</h3>
                <p>
                  Berbagai jenis wadah plastik berkualitas untuk penyimpanan 
                  makanan, barang, dan kebutuhan rumah tangga lainnya.
                </p>
                <Link to="/products" className="btn">
                  Lihat Detail
                </Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="product-content">
                <h3>Kantong Plastik</h3>
                <p>
                  Kantong plastik berbagai ukuran dan ketebalan untuk 
                  kebutuhan belanja, sampah, dan kemasan.
                </p>
                <Link to="/products" className="btn">
                  Lihat Detail
                </Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <i className="fas fa-utensils"></i>
              </div>
              <div className="product-content">
                <h3>Peralatan Dapur</h3>
                <p>
                  Peralatan dapur plastik berkualitas untuk kebutuhan 
                  memasak, menyimpan, dan menyajikan makanan.
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
            <h2 className="section-title">Siap Berbelanja Plastik?</h2>
            <p className="section-subtitle">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan 
              konsultasi produk plastik dari tim kami.
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