# Company Profile Website

Website company profile yang dibuat menggunakan React JS dengan desain modern dan responsif. Website ini terinspirasi dari [Sheracon.com](https://sheracon.com/) dan memiliki fitur-fitur yang lengkap untuk perusahaan.

## 🚀 Fitur

- **Responsive Design** - Website yang responsif untuk desktop, tablet, dan mobile
- **Modern UI/UX** - Desain modern dengan animasi dan transisi yang smooth
- **Multi-page Navigation** - Navigasi antar halaman yang mudah
- **Contact Form** - Form kontak yang interaktif
- **Career Portal** - Halaman karir dengan lowongan kerja dan form aplikasi
- **Product Showcase** - Tampilan produk yang menarik
- **Company Information** - Informasi lengkap tentang perusahaan

## 📁 Struktur Halaman

1. **Home** - Halaman utama dengan hero section, fitur, dan preview produk
2. **Profile** - Informasi detail perusahaan, visi misi, dan tim manajemen
3. **Our Products** - Katalog produk dengan fitur dan spesifikasi
4. **Contacts** - Informasi kontak dan form pesan
5. **Karir** - Lowongan kerja dan form aplikasi

## 🛠️ Teknologi yang Digunakan

- **React 18** - Library JavaScript untuk UI
- **React Router DOM** - Routing untuk aplikasi
- **CSS3** - Styling dengan CSS modern
- **Font Awesome** - Icon library
- **Google Fonts** - Typography

## 📦 Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd company-profile
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan aplikasi:
```bash
npm start
```

4. Buka browser dan akses `http://localhost:3000`

## 🏗️ Struktur Proyek

```
src/
├── components/
│   ├── Navbar.js
│   ├── Navbar.css
│   ├── Footer.js
│   └── Footer.css
├── pages/
│   ├── Home.js
│   ├── Profile.js
│   ├── Products.js
│   ├── Contacts.js
│   └── Karir.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## 🎨 Komponen Utama

### Navbar
- Navigasi responsif dengan hamburger menu untuk mobile
- Active state untuk halaman yang sedang dibuka
- Logo dan brand name

### Footer
- Informasi perusahaan
- Social media links
- Menu navigasi
- Contact information

### Pages
- **Home**: Hero section, features, about, product preview
- **Profile**: Company overview, vision & mission, values, history, team
- **Products**: Product catalog, categories, features
- **Contacts**: Contact form, company info, map, FAQ
- **Karir**: Job listings, application form, benefits, company culture

## 📱 Responsive Design

Website ini didesain responsif dengan breakpoint:
- **Desktop**: > 768px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🎯 Fitur Khusus

### Contact Form
- Form validation
- Responsive design
- Success message
- Form reset setelah submit

### Career Portal
- Job listings dengan detail lengkap
- Modal application form
- File upload untuk CV/Resume
- Job requirements dan responsibilities

### Product Showcase
- Product cards dengan hover effects
- Feature lists
- Call-to-action buttons
- Product categories

## 🚀 Deployment

Untuk deploy ke production:

```bash
npm run build
```

Build files akan tersedia di folder `build/` yang siap untuk di-deploy ke hosting service seperti:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 📝 Customization

### Mengubah Konten
1. Edit file di folder `src/pages/` untuk mengubah konten halaman
2. Update informasi di `src/components/Footer.js` untuk data perusahaan
3. Modifikasi data produk di `src/pages/Products.js`

### Mengubah Styling
1. Edit file CSS di `src/App.css` dan `src/index.css`
2. Modifikasi komponen CSS di folder `src/components/`
3. Update warna dan font di CSS variables

### Menambah Halaman Baru
1. Buat komponen baru di folder `src/pages/`
2. Tambahkan route di `src/App.js`
3. Update navigation di `src/components/Navbar.js`

## 🤝 Contributing

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Proyek ini dibuat untuk tujuan pembelajaran dan dapat digunakan secara bebas.

## 🙏 Acknowledgments

- Terinspirasi dari [Sheracon.com](https://sheracon.com/)
- Font Awesome untuk icons
- Google Fonts untuk typography
- React community untuk dokumentasi yang luar biasa

---

**Dibuat dengan ❤️ menggunakan React JS** 