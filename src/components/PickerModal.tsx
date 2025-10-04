'use client';

import { Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'month' | 'year';
  currentValue: number;
  onSelect: (value: number) => void;
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default function PickerModal({
  isOpen,
  onClose,
  type,
  currentValue,
  onSelect
}: PickerModalProps) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setSearchTerm('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const getOptions = () => {
    if (type === 'month') {
      return monthNames
        .map((name, index) => ({ label: name, value: index }))
        .filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
    } else {
      const minYear = 1885;
      const maxYear = new Date().getFullYear() + 100;
      const years = [];
      for (let year = maxYear; year >= minYear; year--) {
        years.push({ label: year.toString(), value: year });
      }
      return years.filter((option) => option.label.includes(searchTerm));
    }
  };

  const options = getOptions();

  const handleSelect = (value: number) => {
    onSelect(value);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-md scale-95 transform overflow-hidden rounded-3xl bg-white/10 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-300 sm:mx-auto"
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

        <h2 className="mb-4 text-center text-2xl font-semibold text-white">
          Select {type === 'month' ? 'Month' : 'Year'}
        </h2>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
          <input
            type={type === 'year' ? 'number' : 'text'}
            placeholder={`Search ${type === 'month' ? 'Month' : 'Year'}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-2xl border border-white/20 bg-white/10 py-3 pl-10 pr-4 text-white placeholder-white/50 backdrop-blur-xl transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
            inputMode={type === 'year' ? 'numeric' : 'text'}
          />
        </div>

        <ul className="max-h-80 space-y-2 overflow-y-auto">
          {options.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => handleSelect(option.value)}
                className={`w-full rounded-2xl px-4 py-3 text-left transition-all duration-200 ${
                  option.value === currentValue
                    ? 'bg-white/20 text-white shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]'
                    : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-2xl bg-white/20 px-6 py-3 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/30 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-white/30"
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
