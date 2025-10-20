/**
 * Application constants and configuration
 */

// Supported locales
export const LOCALES = ['vi', 'de', 'en'] as const;
export type Locale = typeof LOCALES[number];

// Default locale
export const DEFAULT_LOCALE: Locale = 'vi';

// Locale configurations
export const LOCALE_CONFIG = {
  vi: {
    name: 'Tiếng Việt',
    flag: '🇻🇳',
    direction: 'ltr',
  },
  de: {
    name: 'Deutsch',
    flag: '🇩🇪',
    direction: 'ltr',
  },
  en: {
    name: 'English',
    flag: '🇬🇧',
    direction: 'ltr',
  },
} as const;

// Theme configurations
export const THEMES = ['light', 'dark'] as const;
export type Theme = typeof THEMES[number];
export const DEFAULT_THEME: Theme = 'dark';

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Animation durations
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 200,
  slow: 300,
  slower: 500,
} as const;

// Z-index scale
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  overlay: 20,
  modal: 30,
  toast: 40,
  tooltip: 50,
} as const;

// Common spacing values
export const SPACING = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
  '3xl': '4rem',  // 64px
} as const;

// SEO defaults
export const SEO_DEFAULTS = {
  title: 'SEO Multi-language App',
  description: 'A modern SEO-optimized multi-language application built with Next.js',
  keywords: ['seo', 'nextjs', 'typescript', 'multilingual', 'dark mode'],
  author: 'SEO Team',
  image: '/og-image.jpg',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000',
} as const;

// API endpoints
export const API_ENDPOINTS = {
  auth: '/api/auth',
  users: '/api/users',
  posts: '/api/posts',
} as const;

// Storage keys
export const STORAGE_KEYS = {
  theme: 'theme-preference',
  locale: 'locale-preference',
  user: 'user-data',
} as const;

// Validation patterns
export const PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[\d\s\-()]{10,}$/,
  url: /^https?:\/\/.+/,
  slug: /^[a-z0-9-]+$/,
} as const;

// Image configurations
export const IMAGE_CONFIG = {
  quality: 85,
  formats: ['webp', 'jpg', 'png'],
  sizes: {
    thumbnail: { width: 150, height: 150 },
    small: { width: 300, height: 200 },
    medium: { width: 600, height: 400 },
    large: { width: 1200, height: 800 },
  },
} as const;

// Social media links
export const SOCIAL_LINKS = {
  facebook: '',
  twitter: '',
  instagram: '',
  linkedin: '',
  youtube: '',
} as const;

// Error messages
export const ERROR_MESSAGES = {
  generic: 'Đã xảy ra lỗi. Vui lòng thử lại.',
  network: 'Lỗi kết nối mạng. Vui lòng kiểm tra kết nối của bạn.',
  validation: 'Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.',
  unauthorized: 'Bạn không có quyền truy cập.',
  notFound: 'Không tìm thấy trang.',
  serverError: 'Lỗi máy chủ. Vui lòng thử lại sau.',
} as const;