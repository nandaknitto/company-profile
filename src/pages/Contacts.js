import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contacts" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Hubungi Kami</h1>
          <p>
            Kami siap membantu Anda. Hubungi kami untuk mendapatkan 
            informasi lebih lanjut atau konsultasi gratis.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 className="section-title">Informasi Kontak</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h3>Alamat</h3>
                    <p>Jl. Contoh No. 123<br />Jakarta Pusat, 10110<br />Indonesia</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h3>Telepon</h3>
                    <p>+62 21 1234 5678<br />+62 21 1234 5679</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3>Email</h3>
                    <p>info@companyprofile.com<br />sales@companyprofile.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h3>Jam Kerja</h3>
                    <p>Senin - Jumat: 08:00 - 17:00<br />Sabtu: 08:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-title">Kirim Pesan</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Nomor Telepon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Nama Perusahaan</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subjek *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Pesan *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <h2 className="section-title">Lokasi Kami</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <i className="fas fa-map"></i>
              <p>Peta Lokasi Perusahaan</p>
              <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                Jl. Contoh No. 123, Jakarta Pusat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3>Apa saja layanan yang ditawarkan?</h3>
              <p>
                Kami menawarkan berbagai layanan termasuk konsultasi bisnis, 
                pengembangan software, dan solusi teknologi terkini untuk 
                memenuhi kebutuhan bisnis Anda.
              </p>
            </div>
            <div className="faq-item">
              <h3>Berapa lama waktu pengerjaan proyek?</h3>
              <p>
                Waktu pengerjaan bervariasi tergantung kompleksitas proyek. 
                Biasanya berkisar antara 2-8 minggu untuk proyek standar.
              </p>
            </div>
            <div className="faq-item">
              <h3>Apakah tersedia layanan maintenance?</h3>
              <p>
                Ya, kami menyediakan layanan maintenance dan support 24/7 
                untuk memastikan sistem Anda berjalan dengan optimal.
              </p>
            </div>
            <div className="faq-item">
              <h3>Bagaimana dengan keamanan data?</h3>
              <p>
                Kami mengutamakan keamanan data dengan menggunakan teknologi 
                enkripsi terkini dan protokol keamanan yang ketat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts; 