'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher';
import { ThemeToggle } from '@/components/molecules/ThemeToggle';
import { Typography } from '@/components/atoms/Typography';
import styles from './Header.module.css';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const t = useTranslations();

  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Navigation - right aligned, uses Kalam font */}
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>
              {t('common.navigation.home') || 'Home'}
            </a>
            <a href="#" className={styles.navLink}>
              {t('common.navigation.about') || 'About'}
            </a>
            <a href="#" className={styles.navLink}>
              {t('common.navigation.services') || 'Services'}
            </a>
            <a href="#" className={styles.navLink}>
              {t('common.navigation.blog') || 'Blog'}
            </a>
            <a href="#" className={styles.navLink}>
              {t('common.navigation.contact') || 'Contact'}
            </a>
          </nav>

          {/* Right side controls */}
          <div className={styles.controls}>
            <LanguageSwitcher />
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