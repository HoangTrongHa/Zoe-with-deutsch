import React, { memo } from 'react';
import { cn } from '@/lib/utils';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small' | 'blockquote';
type TypographyWeight = 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

interface TypographyProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  align?: TypographyAlign;
  color?: string;
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  h1: 'text-4xl md:text-5xl lg:text-6xl leading-tight',
  h2: 'text-3xl md:text-4xl lg:text-5xl leading-tight',
  h3: 'text-2xl md:text-3xl lg:text-4xl leading-snug',
  h4: 'text-xl md:text-2xl lg:text-3xl leading-snug',
  h5: 'text-lg md:text-xl lg:text-2xl leading-normal',
  h6: 'text-base md:text-lg lg:text-xl leading-normal',
  p: 'text-base leading-relaxed',
  span: 'text-base',
  small: 'text-sm',
  blockquote: 'text-lg italic border-l-4 border-blue-500 pl-4 py-2',
};

const weightStyles = {
  thin: 'font-thin',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

const alignStyles = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

const Typography: React.FC<TypographyProps> = memo(({
  variant = 'p',
  weight = 'normal',
  align = 'left',
  color,
  className,
  children,
  ...props
}) => {
  const baseClasses = cn(
    // Base styles
    'text-gray-900 dark:text-gray-100',
    
    // Variant styles
    variantStyles[variant],
    
    // Weight styles
    weightStyles[weight],
    
    // Alignment styles
    alignStyles[align],
    
    // Custom color
    color,
    
    // Custom className
    className
  );

  switch (variant) {
    case 'h1':
      return <h1 className={baseClasses} {...props}>{children}</h1>;
    case 'h2':
      return <h2 className={baseClasses} {...props}>{children}</h2>;
    case 'h3':
      return <h3 className={baseClasses} {...props}>{children}</h3>;
    case 'h4':
      return <h4 className={baseClasses} {...props}>{children}</h4>;
    case 'h5':
      return <h5 className={baseClasses} {...props}>{children}</h5>;
    case 'h6':
      return <h6 className={baseClasses} {...props}>{children}</h6>;
    case 'span':
      return <span className={baseClasses} {...props}>{children}</span>;
    case 'small':
      return <small className={baseClasses} {...props}>{children}</small>;
    case 'blockquote':
      return <blockquote className={baseClasses} {...props}>{children}</blockquote>;
    default:
      return <p className={baseClasses} {...props}>{children}</p>;
  }
});

Typography.displayName = 'Typography';

export { Typography };
export type { TypographyProps };