import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Wadah Plastik Premium",
      description: "Wadah plastik berkualitas tinggi untuk penyimpanan makanan, barang, dan kebutuhan rumah tangga. Tersedia dalam berbagai ukuran dan warna.",
      features: ["Food Grade", "Tahan Panas", "Tidak Mudah Pecah", "Berbagai Ukuran"],
      icon: "fas fa-box"
    },
    {
      id: 2,
      name: "Kantong Plastik",
      description: "Kantong plastik berbagai ukuran dan ketebalan untuk kebutuhan belanja, sampah, dan kemasan. Ramah lingkungan dan berkualitas.",
      features: ["Berbagai Ukuran", "Ketebalan Variatif", "Ramah Lingkungan", "Harga Terjangkau"],
      icon: "fas fa-shopping-bag"
    },
    {
      id: 3,
      name: "Peralatan Dapur Plastik",
      description: "Peralatan dapur plastik berkualitas untuk kebutuhan memasak, menyimpan, dan menyajikan makanan. Aman untuk makanan.",
      features: ["Food Safe", "Tahan Panas", "Mudah Dibersihkan", "Berbagai Model"],
      icon: "fas fa-utensils"
    },
    {
      id: 4,
      name: "Botol Plastik",
      description: "Botol plastik berkualitas untuk minuman, penyimpanan cairan, dan kebutuhan lainnya. Tersedia dalam berbagai kapasitas.",
      features: ["Berbagai Kapasitas", "Tahan Bocor", "Mudah Dibawa", "Harga Kompetitif"],
      icon: "fas fa-wine-bottle"
    },
    {
      id: 5,
      name: "Kemasan Plastik",
      description: "Kemasan plastik untuk berbagai kebutuhan bisnis dan rumah tangga. Berkualitas tinggi dan tahan lama.",
      features: ["Kualitas Premium", "Tahan Lama", "Berbagai Ukuran", "Custom Design"],
      icon: "fas fa-box-open"
    },
    {
      id: 6,
      name: "Aksesoris Plastik",
      description: "Aksesoris plastik untuk kebutuhan rumah tangga dan bisnis. Praktis dan multifungsi.",
      features: ["Multifungsi", "Praktis", "Harga Terjangkau", "Berbagai Model"],
      icon: "fas fa-puzzle-piece"
    }
  ];

  return (
    <div className="products" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Produk Plastik PlastikMart</h1>
          <p>
            Temukan berbagai produk plastik berkualitas tinggi yang telah dipercaya 
            oleh ribuan pelanggan di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Produk Plastik Unggulan</h2>
          <p className="section-subtitle">
            Kami menawarkan berbagai produk plastik yang dirancang untuk memenuhi 
            kebutuhan rumah tangga dan bisnis dengan kualitas terbaik.
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