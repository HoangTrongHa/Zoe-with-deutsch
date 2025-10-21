'use client';

import React, { memo } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/atoms';
import { Icon } from '@/components/atoms';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'outline' | 'secondary';
}

const ThemeToggle: React.FC<ThemeToggleProps> = memo(({
  className,
  size = 'md',
  variant = 'ghost',
}) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={cn(
        'p-2 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors duration-200',
        className
      )}
      aria-label="Toggle theme"
    >
      <Icon
        name={theme === 'dark' ? 'sun' : 'moon'}
        size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'}
        className="text-current"
      />
    </Button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export { ThemeToggle };
export type { ThemeToggleProps };