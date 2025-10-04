import { useEffect, useCallback } from 'react';

interface KeyboardNavigationOptions {
  onPrevious?: () => void;
  onNext?: () => void;
  onToday?: () => void;
  onClose?: () => void;
  onEscape?: () => void;
  enabled?: boolean;
}

export function useKeyboardNavigation({
  onPrevious,
  onNext,
  onToday,
  onClose,
  onEscape,
  enabled = true
}: KeyboardNavigationOptions) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      switch (event.key) {
        case 'ArrowLeft':
          if (onPrevious) {
            event.preventDefault();
            onPrevious();
          }
          break;
        case 'ArrowRight':
          if (onNext) {
            event.preventDefault();
            onNext();
          }
          break;
        case 't':
        case 'T':
          if (onToday) {
            event.preventDefault();
            onToday();
          }
          break;
        case 'Escape':
          if (onClose) {
            event.preventDefault();
            onClose();
          }
          if (onEscape) {
            event.preventDefault();
            onEscape();
          }
          break;
      }
    },
    [enabled, onPrevious, onNext, onToday, onClose, onEscape]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}
