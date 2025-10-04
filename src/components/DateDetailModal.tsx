'use client';

import { CalendarDate } from '@/types/calendar';
import { useEffect } from 'react';

interface DateDetailModalProps {
  date: CalendarDate | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DateDetailModal({
  date,
  isOpen,
  onClose
}: DateDetailModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!date || !isOpen) return null;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      style={{ opacity: isOpen ? 1 : 0 }}
      onClick={onClose}
    >
      <div
        className="bg-black/80 backdrop-blur-3xl border border-glass-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] max-w-md w-full p-6 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-text-primary">
            <span className="text-accent-blue">
              {formatDate(date.gregorian)}
            </span>
          </h2>
          <button
            onClick={onClose}
            className="group bg-glass-white/10 backdrop-blur-md border border-glass-white/20 rounded-full w-8 h-8 flex items-center justify-center hover:bg-glass-white/20 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
            aria-label="Close modal"
          >
            <svg
              className="w-4 h-4 text-text-secondary group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Myanmar Date Information */}
        <div className="space-y-4 mb-6">
          <div className="text-center p-4 bg-glass-primary/10 backdrop-blur-md rounded-2xl border border-glass-white/10">
            <p className="text-lg text-text-primary font-medium">
              {date.myanmar.month.my} {date.myanmar.day.mp.my}
            </p>
            <p className="text-2xl font-bold text-accent-blue mt-2">
              {date.myanmar.day.my}
            </p>
            <p className="text-sm text-text-secondary mt-1">
              {date.myanmar.year} - {date.myanmar.fortnight.my}
            </p>
          </div>
        </div>

        {/* Astrological Information */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-text-primary mb-3">
            Astrological Information
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-glass-secondary/5 backdrop-blur-md rounded-xl p-3 border border-glass-white/10">
              <p className="text-xs text-text-tertiary mb-1">Maharbote</p>
              <p className="text-sm font-medium text-text-primary">
                {date.astro.maharbote}
              </p>
            </div>

            <div className="bg-glass-secondary/5 backdrop-blur-md rounded-xl p-3 border border-glass-white/10">
              <p className="text-xs text-text-tertiary mb-1">Numerology</p>
              <p className="text-sm font-medium text-text-primary">
                {date.astro.numerology}
              </p>
            </div>

            <div className="bg-glass-secondary/5 backdrop-blur-md rounded-xl p-3 border border-glass-white/10">
              <p className="text-xs text-text-tertiary mb-1">Chinese Zodiac</p>
              <p className="text-sm font-medium text-text-primary">
                {date.astro.chineseZodiac}
              </p>
            </div>

            <div className="bg-glass-secondary/5 backdrop-blur-md rounded-xl p-3 border border-glass-white/10">
              <p className="text-xs text-text-tertiary mb-1">Myanmar Zodiac</p>
              <p className="text-sm font-medium text-text-primary">
                {date.astro.myanmarZodiac}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-6 pt-4 border-t border-glass-white/10">
          <div className="flex items-center justify-between text-sm text-text-secondary">
            <span>Gregorian: {date.gregorian.toLocaleDateString()}</span>
            <span>Myanmar Year: {date.myanmar.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
