'use client';

import React, { memo, useState, useEffect } from 'react';
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

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = memo(({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  // Get locale from route pathname
  const getLocaleFromRoute = (): Locale => {
    const segments = pathname.split('/');
    const routeLocale = segments[1] as Locale;
    return LOCALE_CONFIG[routeLocale] ? routeLocale : 'vi'; // fallback to 'vi' if invalid
  };
  
  const locale = getLocaleFromRoute();
  
  // currentConfig will get info from route to determine language
  const [currentConfig, setCurrentConfig] = useState(() => LOCALE_CONFIG[locale]);

  // Update currentConfig when route changes
  useEffect(() => {
    const newLocale = getLocaleFromRoute();
    const newConfig = LOCALE_CONFIG[newLocale];
    setCurrentConfig(newConfig);
  }, [pathname]);

  const switchLanguage = (newLocale: Locale) => {
    console.log(newLocale);
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    const newConfig = LOCALE_CONFIG[newLocale];
    setCurrentConfig(newConfig);
    console.log(newConfig);
    router.push(newPath);
    setIsOpen(false);
  };

  const getConfigName = (localeKey: Locale) => {
    const config = LOCALE_CONFIG[localeKey];
    return config ? config.name : localeKey;
  };

  return (
    <div className={cn('relative', className)} suppressHydrationWarning>
      <Button
        variant="ghost"
        size="md"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
        aria-label="Switch language"
      >
        <Icon name="globe" size="sm" className="text-current" />
        <Typography variant="span" className="hidden sm:inline text-current">
          {currentConfig.name}
        </Typography>
        <span className="text-lg sm:hidden">{currentConfig.flag}</span>
        <Icon name="chevronDown" size="sm" className="text-current" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 rounded-lg bg-background shadow-lg border border-border z-20">
            <div className="py-1">
              {Object.entries(LOCALE_CONFIG).map(([localeKey, config]) => (
                <button
                  key={localeKey}
                  onClick={() => switchLanguage(localeKey as Locale)}
                  className={cn(
                    'w-full px-4 py-2 text-left hover:bg-secondary text-foreground flex items-center gap-3 transition-colors duration-200',
                    locale === localeKey && 'bg-primary/10 text-primary'
                  )}
                >
                  <span className="text-lg">{config.flag}</span>
                  <Typography variant="span" className="text-sm text-current">
                    {config.name}
                  </Typography>
                  {locale === localeKey && (
                    <Icon name="check" size="sm" className="ml-auto text-current" />
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