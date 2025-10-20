import { useState, useCallback } from 'react';
import type { UseToggleReturn } from '@/types';

/**
 * Custom hook for toggle state management
 * @param initialValue - Initial boolean value
 * @returns Toggle utilities
 */
export const useToggle = (initialValue: boolean = false): UseToggleReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};