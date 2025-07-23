import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Produk A",
      description: "Produk unggulan kami yang telah terbukti kualitasnya dan banyak digunakan oleh pelanggan setia kami. Dirancang dengan teknologi terkini untuk memberikan performa optimal.",
      features: ["Kualitas Terjamin", "Garansi 1 Tahun", "Support 24/7", "Dokumentasi Lengkap"],
      icon: "fas fa-cube"
    },
    {
      id: 2,
      name: "Produk B",
      description: "Solusi inovatif yang dirancang khusus untuk memenuhi kebutuhan bisnis modern dengan teknologi terkini. Meningkatkan efisiensi dan produktivitas bisnis Anda.",
      features: ["Teknologi Terkini", "Skalabilitas Tinggi", "Integrasi Mudah", "Analytics Dashboard"],
      icon: "fas fa-cogs"
    },
    {
      id: 3,
      name: "Produk C",
      description: "Produk yang mengutamakan efisiensi dan efektivitas dalam membantu meningkatkan produktivitas bisnis Anda. Cocok untuk berbagai skala perusahaan.",
      features: ["Efisien", "User-Friendly", "Customizable", "Cloud-Based"],
      icon: "fas fa-tools"
    },
    {
      id: 4,
      name: "Produk D",
      description: "Solusi komprehensif yang menggabungkan berbagai fitur canggih untuk memberikan pengalaman terbaik bagi pengguna dan pelanggan Anda.",
      features: ["Fitur Lengkap", "Mobile Ready", "API Integration", "Multi-Platform"],
      icon: "fas fa-rocket"
    },
    {
      id: 5,
      name: "Produk E",
      description: "Produk yang dirancang dengan fokus pada keamanan dan privasi data. Memberikan perlindungan maksimal untuk aset digital perusahaan Anda.",
      features: ["Keamanan Tinggi", "Enkripsi End-to-End", "Compliance Ready", "Audit Trail"],
      icon: "fas fa-shield-alt"
    },
    {
      id: 6,
      name: "Produk F",
      description: "Platform yang memungkinkan kolaborasi tim yang efektif dan komunikasi yang lancar. Meningkatkan produktivitas tim kerja Anda.",
      features: ["Real-time Collaboration", "File Sharing", "Video Conference", "Task Management"],
      icon: "fas fa-users"
    }
  ];

  return (
    <div className="products" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Produk Kami</h1>
          <p>
            Temukan berbagai produk berkualitas tinggi yang telah dipercaya 
            oleh ribuan pelanggan di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Produk Unggulan</h2>
          <p className="section-subtitle">
            Kami menawarkan berbagai produk yang dirancang untuk memenuhi 
            kebutuhan bisnis modern dengan kualitas terbaik.
          </p>
          <div className="grid grid-2">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <i className={product.icon}></i>
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-features">
                    <h4>Fitur Utama:</h4>
                    <ul>
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="btn">Lihat Detail</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Kategori Produk</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <i className="fas fa-laptop"></i>
              <h3>Software Solutions</h3>
              <p>
                Berbagai solusi perangkat lunak yang dirancang untuk 
                meningkatkan efisiensi bisnis Anda.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Mobile Applications</h3>
              <p>
                Aplikasi mobile yang responsif dan user-friendly untuk 
                memenuhi kebutuhan bisnis modern.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-cloud"></i>
              <h3>Cloud Services</h3>
              <p>
                Layanan cloud yang aman dan terpercaya untuk menyimpan 
                dan mengelola data bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Mengapa Memilih Produk Kami</h2>
          <div className="grid grid-4">
            <div className="feature-card">
              <i className="fas fa-award"></i>
              <h3>Kualitas Terjamin</h3>
              <p>
                Setiap produk kami melalui proses pengujian ketat untuk 
                memastikan kualitas terbaik.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-headset"></i>
              <h3>Support 24/7</h3>
              <p>
                Tim support kami siap membantu Anda kapan saja dengan 
                layanan yang responsif dan profesional.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-sync"></i>
              <h3>Update Berkala</h3>
              <p>
                Produk kami terus diperbarui dengan fitur-fitur baru 
                dan perbaikan performa.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Keamanan Tinggi</h3>
              <p>
                Mengutamakan keamanan data dan privasi pengguna dalam 
                setiap produk yang kami kembangkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Siap Menggunakan Produk Kami?</h2>
            <p className="section-subtitle">
              Hubungi tim sales kami untuk mendapatkan demo dan penawaran 
              terbaik sesuai kebutuhan bisnis Anda.
            </p>
            <button className="btn">Hubungi Sales</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products; 