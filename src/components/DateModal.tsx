'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';
import type { MyanmarDate } from '@/types/myanmar';

interface DateModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: Date | null;
  myanmarDate: MyanmarDate | null;
}

export default function DateModal({
  isOpen,
  onClose,
  date,
  myanmarDate
}: DateModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !date || !myanmarDate) return null;

  const weekDayNumber = date.getDay() + 1;
  const dateNumber = date.getDate();
  const yearNumber = date.getFullYear();
  const monthNumber = date.getMonth() + 1;

  let baydinData = null;
  if (typeof window !== 'undefined' && window.baydin) {
    const baydin = window.baydin;
    baydinData = {
      maharbote: baydin.maharbote(myanmarDate.year.en, weekDayNumber),
      numerology: baydin.numFormat(baydin.numerology(dateNumber)),
      zodiac: baydin.zodiac(dateNumber, monthNumber).sign_mm,
      chineseZodiac: baydin.chineseZodiac(yearNumber).signInBurmese
    };
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-md scale-95 transform overflow-hidden rounded-3xl bg-white/10 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-300 sm:mx-auto"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: isOpen ? 'modalSlideIn 0.3s ease-out' : 'none'
        }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="mb-6 text-center text-2xl font-semibold text-white">
          {date.toDateString()}
        </h2>

        <div className="space-y-4 text-center text-white/90">
          <p className="text-lg">
            {myanmarDate.month.my} {myanmarDate.day.mp.my}{' '}
            {myanmarDate.day.fd.my} ရက် {myanmarDate.weekday.my} နေ့{' '}
            {myanmarDate.year.my}
          </p>

          {baydinData && (
            <>
              <div className="h-px bg-white/20"></div>
              <p className="text-base">{baydinData.maharbote} ဖွား</p>
              <p className="text-base">{baydinData.numerology} ဂဏန်း သမား</p>
              <p className="text-base">{baydinData.chineseZodiac} နှစ်</p>
              <p className="text-base">{baydinData.zodiac} ရာသီ</p>
            </>
          )}
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-2xl bg-white/20 px-6 py-3 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/30 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          Close
        </button>
      </div>

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
