# Instagram Unfollow Checker

Aplikasi web sederhana untuk mengecek siapa saja yang tidak follow back akun Instagram Anda.

## Deskripsi

Instagram Unfollow Checker adalah tools untuk menemukan akun-akun Instagram yang Anda follow tetapi tidak follow back Anda. Aplikasi ini berjalan sepenuhnya di browser (client-side) tanpa memerlukan server.

## Cara Mendapatkan Data Instagram

1. Buka Instagram
2. Klik menu profil Anda
3. Klik Settings (Pengaturan)
4. Pilih Privacy and Security (Privasi dan Keamanan)
5. Scroll ke bawah dan cari "Data Download" (Unduh Data)
6. Pilih format JSON
7. Tunggu email dari Instagram dan download data Anda
8. Extract file ZIP yang Anda terima
9. Cari file `followers.json` dan `following.json` dalam folder yang di-extract

## Cara Instalasi

1. Download semua file dalam repository ini
2. Pastikan struktur folder seperti berikut:
```
instagram-unfollow-checker/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```
3. Buka file `index.html` menggunakan browser

## Cara Penggunaan

1. Buka aplikasi di browser
2. Upload file `followers.json` pada input pertama
3. Upload file `following.json` pada input kedua
4. Klik tombol "Cek Unfollow"
5. Hasil akan muncul dalam bentuk tabel
6. Klik tombol "Lihat Profil" untuk membuka profil Instagram yang bersangkutan

## Fitur

- Interface yang sederhana dan mudah digunakan
- Pemrosesan file secara lokal (tidak ada data yang dikirim ke server)
- Tabel hasil yang rapi dengan nomor urut
- Tombol langsung ke profil Instagram
- Responsive design (bisa digunakan di desktop dan mobile)
- Pesan error yang informatif

## Kebutuhan Sistem

- Browser modern (Chrome, Firefox, Safari, Edge)
- JavaScript harus diaktifkan
- Tidak memerlukan koneksi internet (kecuali untuk membuka profil Instagram)

## Troubleshooting

1. **File tidak bisa diupload**
   - Pastikan file berformat .json
   - Pastikan file tidak rusak
   - Coba gunakan browser lain

2. **Hasil tidak muncul**
   - Periksa format file JSON
   - Pastikan menggunakan file yang benar
   - Periksa pesan error yang muncul

3. **Tombol tidak berfungsi**
   - Pastikan JavaScript diaktifkan di browser
   - Coba refresh halaman
   - Periksa console browser untuk error

## Catatan Penting

- Aplikasi ini hanya membaca file secara lokal dan tidak mengirim data ke manapun
- Semua pemrosesan dilakukan di browser Anda
- Tidak ada data yang disimpan secara permanen
