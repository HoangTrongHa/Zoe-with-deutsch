'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/molecules/ThemeToggle';
import { Typography } from '@/components/atoms/Typography';
import styles from './Header.module.css';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo/Brand */}
          <Link href="/" className="mr-auto">
            <Typography variant="h3" className="font-bold text-primary">
              Muối Deutsch 🧂
            </Typography>
          </Link>

          {/* Navigation */}
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>
              Trang chủ
            </Link>
            <Link href="/khoa-hoc" className={styles.navLink}>
              Khóa học
            </Link>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
            <Link href="/ve-chung-toi" className={styles.navLink}>
              Về chúng tôi
            </Link>
            <Link href="/lien-he" className={styles.navLink}>
              Liên hệ
            </Link>
          </nav>

          {/* Right side controls */}
          <div className={styles.controls}>
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button 
              className={styles.mobileMenuButton}
              aria-label="Toggle menu"
            >
              <svg 
                className={styles.menuIcon}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle shadow effect */}
      <div className={styles.shadow} />
    </header>
  );
};