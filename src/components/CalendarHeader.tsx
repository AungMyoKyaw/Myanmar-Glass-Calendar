'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarHeaderProps {
  currentMonth: number;
  currentYear: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onMonthClick: () => void;
  onYearClick: () => void;
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

export default function CalendarHeader({
  currentMonth,
  currentYear,
  onPrevMonth,
  onNextMonth,
  onMonthClick,
  onYearClick
}: CalendarHeaderProps) {
  return (
    <header className="mb-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <button
          onClick={onPrevMonth}
          className="group relative overflow-hidden rounded-2xl bg-white/10 p-3 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-label="Previous Month"
        >
          <ChevronLeft className="h-5 w-5 text-white transition-transform group-hover:-translate-x-1" />
        </button>

        <div className="flex items-center space-x-3">
          <button
            onClick={onMonthClick}
            className="group relative overflow-hidden rounded-2xl bg-white/10 px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <span className="text-base font-medium text-white">
              {monthNames[currentMonth]}
            </span>
          </button>

          <button
            onClick={onYearClick}
            className="group relative overflow-hidden rounded-2xl bg-white/10 px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <span className="text-base font-medium text-white">
              {currentYear}
            </span>
          </button>
        </div>

        <button
          onClick={onNextMonth}
          className="group relative overflow-hidden rounded-2xl bg-white/10 p-3 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-label="Next Month"
        >
          <ChevronRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </header>
  );
}
