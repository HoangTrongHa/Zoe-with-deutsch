import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import { 
  Home, 
  User, 
  Mail, 
  Phone, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  ChevronLeft,
  Sun,
  Moon,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Settings,
  Bell,
  Heart,
  Star,
  Edit,
  Trash2,
  Plus,
  Minus,
  Check,
  AlertCircle,
  Info,
  LucideIcon
} from 'lucide-react';

export type IconName = 
  | 'home'
  | 'user'
  | 'mail'
  | 'phone'
  | 'search'
  | 'menu'
  | 'close'
  | 'chevronDown'
  | 'chevronRight'
  | 'chevronLeft'
  | 'sun'
  | 'moon'
  | 'globe'
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'linkedin'
  | 'youtube'
  | 'github'
  | 'arrowRight'
  | 'arrowLeft'
  | 'externalLink'
  | 'settings'
  | 'bell'
  | 'heart'
  | 'star'
  | 'edit'
  | 'trash'
  | 'plus'
  | 'minus'
  | 'check'
  | 'warning'
  | 'info';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
  color?: string;
}

const iconMap: Record<IconName, LucideIcon> = {
  home: Home,
  user: User,
  mail: Mail,
  phone: Phone,
  search: Search,
  menu: Menu,
  close: X,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  sun: Sun,
  moon: Moon,
  globe: Globe,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  github: Github,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  externalLink: ExternalLink,
  settings: Settings,
  bell: Bell,
  heart: Heart,
  star: Star,
  edit: Edit,
  trash: Trash2,
  plus: Plus,
  minus: Minus,
  check: Check,
  warning: AlertCircle,
  info: Info,
};

const iconSizes = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

const Icon: React.FC<IconProps> = memo(({
  name,
  size = 'md',
  className,
  color = 'currentColor',
  ...props
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      className={cn(
        iconSizes[size],
        className
      )}
      color={color}
      {...props}
    />
  );
});

Icon.displayName = 'Icon';

export { Icon };
export type { IconProps };