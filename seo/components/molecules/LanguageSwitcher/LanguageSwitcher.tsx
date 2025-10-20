'use client';

import React, { memo, useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/atoms';
import { Icon } from '@/components/atoms';
import { Typography } from '@/components/atoms';
import { cn } from '@/lib/utils';
import { LOCALE_CONFIG, type Locale } from '@/lib/constants';

interface LanguageSwitcherProps {
  className?: string;
  currentLocale?: Locale; // Add optional locale prop
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = memo(({ className, currentLocale }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Use passed locale or fallback to useLocale hook
  const locale = currentLocale || (useLocale() as Locale);
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    
    router.push(newPath);
    setIsOpen(false);
  };

  const currentConfig = LOCALE_CONFIG[locale];

  return (
    <div className={cn('relative', className)} suppressHydrationWarning>
      <Button
        variant="ghost"
        size="md"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
        aria-label="Switch language"
      >
        <Icon name="globe" size="sm" />
        <Typography variant="span" className="hidden sm:inline">
          {currentConfig.name}
        </Typography>
        <span className="text-lg sm:hidden">{currentConfig.flag}</span>
        <Icon name="chevronDown" size="sm" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 z-20">
            <div className="py-1">
              {Object.entries(LOCALE_CONFIG).map(([localeKey, config]) => (
                <button
                  key={localeKey}
                  onClick={() => switchLanguage(localeKey as Locale)}
                  className={cn(
                    'w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3',
                    locale === localeKey && 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  )}
                >
                  <span className="text-lg">{config.flag}</span>
                  <Typography variant="span" className="text-sm">
                    {config.name}
                  </Typography>
                  {locale === localeKey && (
                    <Icon name="check" size="sm" className="ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';

export { LanguageSwitcher };
export type { LanguageSwitcherProps };