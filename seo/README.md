# Muối Deutsch Center - Website chính thức 🧂

Trung tâm tiếng Đức uy tín tại Hà Nội. Học tiếng Đức dễ như muối bỏ bể!

## 📝 Giới thiệu

Website của **Muối Deutsch Center** - trung tâm đào tạo tiếng Đức chuyên nghiệp với:
- 👨‍🏫 Giáo viên bản ngữ người Đức
- 🎓 Khóa học từ A1 đến C2
- 🏆 Cam kết đầu ra chứng chỉ Goethe
- 💻 Phương pháp giảng dạy hiện đại

## 🚀 Công nghệ sử dụng

- **Framework:** Next.js 15.5 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Content:** MDX (Markdown + React components)
- **Theme:** next-themes (Dark mode support)
- **Deployment:** Vercel

## 📦 Cấu trúc dự án

```
seo/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Trang chủ
│   ├── khoa-hoc/            # Danh sách khóa học
│   │   └── [level]/         # Chi tiết khóa học (A1-C2)
│   ├── blog/                # Blog listing
│   │   └── [slug]/          # Chi tiết bài viết
│   ├── ve-chung-toi/        # Về chúng tôi
│   ├── lien-he/             # Liên hệ
│   ├── robots.ts            # SEO: robots.txt
│   ├── sitemap.ts           # SEO: sitemap.xml
│   └── manifest.ts          # PWA manifest
├── components/
│   ├── atoms/               # Button, Typography, Icon
│   ├── molecules/           # CourseCard, ThemeToggle
│   └── organisms/           # Header
├── content/
│   └── blog/                # MDX blog posts
├── lib/
│   ├── constants/           # Courses data, configs
│   └── blog.ts              # Blog utilities
└── public/                  # Static assets
```

## 🛠️ Cài đặt & Phát triển

### 1. Clone repository

```bash
git clone https://github.com/HoangTrongHa/Zoe-with-deutsch.git
cd Zoe-with-deutsch/seo
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### 4. Build production

```bash
npm run build
npm start
```

## 📖 Tính năng chính

### ✅ Đã hoàn thành

- [x] Trang chủ với hero section và features
- [x] 6 khóa học (A1, A2, B1, B2, C1, C2)
- [x] Chi tiết từng khóa học
- [x] 5 bài blog mẫu (MDX)
- [x] Trang liên hệ với form
- [x] Trang về chúng tôi
- [x] SEO foundation (robots.txt, sitemap.xml, manifest.json)
- [x] Dark mode support
- [x] Responsive design
- [x] TypeScript strict mode

### 🔜 Sắp tới

- [ ] Contact form submission handling
- [ ] Footer component
- [ ] Blog pagination
- [ ] Search functionality
- [ ] Newsletter subscription
- [ ] Student testimonials
- [ ] Photo gallery

## 🎨 Design System

### Colors
- Primary: Blue (#3B82F6)
- Background: White/Dark
- Text: Foreground/Muted

### Typography
- Headings: Geist Sans
- Body: Geist Sans
- Accent: Kalam (handwritten style)

### Components
Atomic Design pattern:
- **Atoms:** Button, Typography, Icon
- **Molecules:** CourseCard, ThemeToggle
- **Organisms:** Header

## 📝 Thêm nội dung Blog

### 1. Tạo file MDX mới

```bash
touch content/blog/ten-bai-viet.mdx
```

### 2. Thêm frontmatter

```yaml
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn"
date: "2026-01-04"
author: "Muối Deutsch Center"
category: "beginner"
tags: ["A1", "học tiếng đức"]
image: "/blog/image.jpg"
---
```

### 3. Viết nội dung Markdown

Bài viết sẽ tự động xuất hiện trong `/blog`

## 🚀 Deployment

### Deploy lên Vercel

1. Push code lên GitHub
2. Import repository vào Vercel
3. Vercel tự động build và deploy
4. Domain: `muoideutsch.vercel.app`

### Environment Variables

Không cần environment variables cho hiện tại.

## 🔍 SEO

Website đã được tối ưu SEO:
- ✅ Metadata đầy đủ cho mọi trang
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ PWA manifest
- ✅ Semantic HTML
- ✅ Open Graph tags
- ✅ Twitter Cards

## 🌙 Dark Mode

Hỗ trợ dark mode tự động theo system preference hoặc manual toggle.

## 📱 Responsive

Mobile-first design, tối ưu cho mọi kích thước màn hình.

## 🤝 Contributing

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Private project - All rights reserved © 2026 Muối Deutsch Center

## 📞 Liên hệ

- 📱 Hotline: 0123 456 789
- 📧 Email: contact@muoideutsch.com
- 📍 Địa chỉ: Hà Nội, Việt Nam
- 💬 Zalo: 0123 456 789
- 📘 Facebook: /muoideutsch
- 📷 Instagram: @muoideutsch

---

Made with ❤️ by Muối Deutsch Center
