# 🤖 COPILOT RULES - SEO PROJECT

## 📋 PROJECT OVERVIEW
- **Project Type**: Next.js SEO Application
- **Target**: Multi-language SEO-optimized website
- **Architecture**: Atomic Design Pattern
- **Tech Stack**: Next.js 15 + TypeScript + Tailwind CSS v4

---

## 🎯 CORE PRINCIPLES

### 🎨 **DESIGN & UI/UX**
- ✅ **Dark Mode First**: Default dark theme with light mode toggle
- 🌍 **Multi-language**: Vietnamese (vi), German (de), English (en)
- 🎨 **Tailwind CSS v4**: Utility-first styling approach
- 📱 **Mobile-First**: Responsive design prioritizing mobile experience
- ♿ **Accessibility**: WCAG 2.1 AA compliance
- 🎭 **Theme System**: Consistent design tokens and color schemes

### 🌐 **TRANSLATIONS & I18N RULES**
- ❌ **NEVER** use `useTranslations('common.language')` or nested namespace paths
- ✅ **ALWAYS** use `useTranslations()` without namespace for root access
- ✅ **USE** full key paths like `t('common.language.vietnamese')`
- ✅ **PROVIDE** fallback values: `t('key') || 'Fallback Text'`
- 📁 **Structure**: All translations in `public/locales/{locale}/common.json`
- 🔑 **Keys**: Use dot notation for nested access (e.g., `common.navigation.home`)

### 🏗️ **ARCHITECTURE PATTERNS**

#### **Atomic Design Structure**
```
components/
├── atoms/              # Basic building blocks
│   ├── Button/
│   ├── Input/
│   ├── Icon/
│   ├── Typography/
│   └── ...
├── molecules/          # Simple combinations
│   ├── SearchBox/
│   ├── NavigationItem/
│   ├── Card/
│   └── ...
├── organisms/          # Complex components
│   ├── Header/
│   ├── Footer/
│   ├── Sidebar/
│   ├── ProductGrid/
│   └── ...
├── templates/          # Page layouts
│   ├── MainLayout/
│   ├── AuthLayout/
│   └── ...
└── pages/              # Actual pages (if needed)
```

#### **Project Structure**
```
app/
├── [locale]/           # Internationalization routing
│   ├── page.tsx
│   ├── layout.tsx
│   └── ...
├── globals.css
└── layout.tsx
components/             # Atomic design components
lib/
├── utils/             # Helper functions
├── hooks/             # Custom React hooks
├── providers/         # Context providers
├── constants/         # App constants
├── types/             # Shared TypeScript types
└── config/            # Configuration files
public/
├── locales/           # Translation files
└── ...
types/                 # Global TypeScript definitions
```

---

## 💻 **TECHNICAL STANDARDS**

### 🔷 **TypeScript Guidelines**
- **Strict Mode**: Always enabled
- **Proper Typing**: No `any` types unless absolutely necessary
- **Interface > Type**: Prefer interfaces for object shapes
- **Generic Types**: Use generics for reusable components
- **Props Interface**: Always define props interfaces for components

```typescript
// ✅ Good
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, size, ...props }) => {
  // Implementation
};

// ❌ Avoid
const Button = (props: any) => { /* ... */ };
```

### ⚡ **Next.js 15 Best Practices**
- **App Router**: Use App Router exclusively
- **Server Components**: Default to Server Components
- **Client Components**: Use `'use client'` only when necessary
- **Metadata API**: Proper SEO metadata for all pages
- **Image Optimization**: Use Next.js Image component
- **Font Optimization**: Use next/font for font loading

### 🎨 **Tailwind CSS v4 Standards**
- **Utility-First**: Prefer utility classes over custom CSS
- **Component Classes**: Use `@apply` for complex repeated patterns
- **Design Tokens**: Utilize Tailwind's design system
- **Dark Mode**: Use `dark:` variants consistently
- **Responsive**: Mobile-first breakpoints (`sm:`, `md:`, `lg:`, `xl:`)

```css
/* ✅ Good - Component pattern */
@layer components {
  .btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600;
  }
}
```

---

## 🌐 **INTERNATIONALIZATION (i18n)**

### **Language Support**
- 🇻🇳 **Vietnamese (vi)**: Primary language
- 🇩🇪 **German (de)**: Secondary language  
- 🇬🇧 **English (en)**: International language

### **Implementation Rules**
- **Routing**: `/[locale]/` dynamic routing
- **Fallback**: Default to Vietnamese if locale not specified
- **Keys**: Use hierarchical keys (`common.button.submit`)
- **Pluralization**: Support proper plural forms for all languages
- **RTL**: Prepare for potential RTL language addition

```typescript
// ✅ Translation key structure
{
  "common": {
    "navigation": {
      "home": "Trang chủ",
      "about": "Giới thiệu",
      "contact": "Liên hệ"
    },
    "actions": {
      "save": "Lưu",
      "cancel": "Hủy",
      "submit": "Gửi"
    }
  },
  "pages": {
    "home": {
      "title": "Trang chủ",
      "description": "Mô tả trang chủ"
    }
  }
}
```

---

## 🔧 **CODE QUALITY STANDARDS**

### **Naming Conventions**
- **Components**: PascalCase (`UserProfile`, `NavigationMenu`)
- **Files**: PascalCase for components, kebab-case for others
- **Variables/Functions**: camelCase (`userName`, `handleSubmit`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_BASE_URL`)
- **CSS Classes**: kebab-case (`nav-item`, `btn-primary`)

### **Component Structure**
```typescript
// ✅ Standard component structure
'use client'; // Only if needed

import React, { memo, useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps {
  // Props definition
}

const Component: React.FC<ComponentProps> = memo(({ 
  prop1, 
  prop2, 
  ...rest 
}) => {
  // Hooks
  const memoizedValue = useMemo(() => {
    // Expensive calculation
  }, [dependencies]);

  const handleAction = useCallback(() => {
    // Event handler
  }, [dependencies]);

  // Early returns
  if (!condition) return null;

  // Render
  return (
    <div className={cn('base-classes', 'conditional-classes')}>
      {/* JSX */}
    </div>
  );
});

Component.displayName = 'Component';

export { Component };
export type { ComponentProps };
```

### **Performance Optimization Rules**
- **React.memo**: Use for components with stable props
- **useMemo**: For expensive calculations
- **useCallback**: For stable function references
- **Dynamic Imports**: For heavy components
- **Image Optimization**: Always use Next.js Image
- **Bundle Analysis**: Regular bundle size monitoring

---

## 🌙 **DARK MODE IMPLEMENTATION**

### **Theme System**
```typescript
// Theme configuration
const themes = {
  light: {
    background: 'bg-white',
    foreground: 'text-gray-900',
    primary: 'bg-blue-600',
    secondary: 'bg-gray-100',
  },
  dark: {
    background: 'bg-gray-900',
    foreground: 'text-gray-100', 
    primary: 'bg-blue-500',
    secondary: 'bg-gray-800',
  }
};
```

### **Implementation Rules**
- **Default**: Dark mode as default
- **Persistence**: Save user preference in localStorage
- **System Sync**: Respect system preference initially
- **Smooth Transitions**: Animate theme changes
- **Consistent**: All components support both themes

---

## 📈 **SEO OPTIMIZATION RULES**

### **Meta Data Standards**
- **Title**: 55-60 characters, unique per page
- **Description**: 150-160 characters, compelling copy
- **Keywords**: Relevant, not stuffed
- **Open Graph**: Complete OG tags for social sharing
- **Structured Data**: JSON-LD for rich snippets

### **Performance Requirements**
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Page Speed**: > 90 on PageSpeed Insights
- **Image Optimization**: WebP format, proper sizing
- **Code Splitting**: Route-based splitting minimum

---

## 🧪 **TESTING STANDARDS**

### **Testing Strategy**
- **Unit Tests**: All utility functions and hooks
- **Component Tests**: Critical UI components
- **Integration Tests**: Key user flows
- **E2E Tests**: Core business scenarios
- **Accessibility Tests**: Automated a11y testing

---

## 📝 **CODE REVIEW CHECKLIST**

### **Before Submitting Code**
- [ ] TypeScript strict compliance
- [ ] All components have proper types
- [ ] Dark mode support implemented
- [ ] Multi-language support (if UI text)
- [ ] Mobile responsive design
- [ ] Accessibility considerations
- [ ] Performance optimizations applied
- [ ] SEO metadata included (for pages)
- [ ] Tests written and passing
- [ ] No console.log statements
- [ ] Proper error handling

### **Component Checklist**
- [ ] Follows atomic design principles
- [ ] Props interface defined
- [ ] Default props when appropriate
- [ ] Proper CSS classes with Tailwind
- [ ] Dark mode variants
- [ ] Responsive design
- [ ] Accessibility attributes
- [ ] Performance optimized (memo, callbacks)

---

## 🚨 **COMMON ANTI-PATTERNS TO AVOID**

### **TypeScript**
- ❌ Using `any` type
- ❌ Ignoring TypeScript errors
- ❌ Not defining component props interfaces

### **React**
- ❌ Inline object/array creation in JSX
- ❌ Missing dependency arrays in hooks
- ❌ Unnecessary re-renders
- ❌ Not using keys in lists

### **Styling**
- ❌ Inline styles instead of Tailwind
- ❌ Missing dark mode variants
- ❌ Non-responsive design
- ❌ Hardcoded colors/spacing

### **i18n**
- ❌ Hardcoded text strings
- ❌ Missing translations
- ❌ Incorrect locale handling

---

## 🎯 **SUCCESS METRICS**

### **Technical Metrics**
- TypeScript strict compliance: 100%
- Test coverage: > 80%
- PageSpeed score: > 90
- Accessibility score: > 95
- Bundle size: < 500KB initial

### **User Experience**
- Theme switching: < 200ms
- Language switching: Instant
- Page load: < 2s on 3G
- Mobile usability: 100/100

---

*Last updated: October 2025*
*Project: SEO Multi-language Application*
*Tech Stack: Next.js 15 + TypeScript + Tailwind CSS v4*