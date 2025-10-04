'use client';

import { useState } from 'react';

interface CalendarNavigationProps {
  currentMonth: Date;
  onMonthChange: (newMonth: Date) => void;
  onTodayClick: () => void;
}

const months = [
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

export default function CalendarNavigation({
  currentMonth,
  onMonthChange,
  onTodayClick
}: CalendarNavigationProps) {
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);

  const currentYear = currentMonth.getFullYear();
  const currentMonthName = months[currentMonth.getMonth()];

  const handlePreviousMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    onMonthChange(newMonth);
  };

  const handleNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    onMonthChange(newMonth);
  };

  const handleMonthSelect = (monthIndex: number) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(monthIndex);
    onMonthChange(newMonth);
    setShowMonthPicker(false);
  };

  const handleYearSelect = (year: number) => {
    const newMonth = new Date(currentMonth);
    newMonth.setFullYear(year);
    onMonthChange(newMonth);
    setShowYearPicker(false);
  };

  const getYearRange = () => {
    const startYear = 1885;
    const endYear = new Date().getFullYear() + 100;
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  return (
    <div className="bg-black/20 backdrop-blur-3xl rounded-3xl p-6 border border-glass-white/10 shadow-2xl mb-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePreviousMonth}
            className="group bg-glass-white/10 backdrop-blur-lg border border-glass-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-glass-white/15 hover:scale-110 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
            aria-label="Previous month"
          >
            <svg
              className="w-5 h-5 text-text-primary group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNextMonth}
            className="group bg-glass-white/10 backdrop-blur-lg border border-glass-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-glass-white/15 hover:scale-110 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
            aria-label="Next month"
          >
            <svg
              className="w-5 h-5 text-text-primary group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Month and Year display */}
        <div className="flex items-center gap-4">
          {/* Month selector */}
          <div className="relative">
            <button
              onClick={() => {
                setShowMonthPicker(!showMonthPicker);
                setShowYearPicker(false);
              }}
              className="bg-glass-white/10 backdrop-blur-lg border border-glass-white/20 rounded-2xl px-4 py-2 flex items-center gap-2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-glass-white/15 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
            >
              <span className="text-text-primary font-medium">
                {currentMonthName}
              </span>
              <svg
                className={`w-4 h-4 text-text-secondary transition-transform ${showMonthPicker ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showMonthPicker && (
              <div className="absolute top-full mt-2 left-0 z-50 bg-black/80 backdrop-blur-3xl border border-glass-white/15 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] p-2 max-h-60 overflow-y-auto min-w-[150px]">
                {months.map((month, index) => (
                  <button
                    key={month}
                    onClick={() => handleMonthSelect(index)}
                    className={`w-full p-3 rounded-xl text-left transition-all duration-200 ${
                      index === currentMonth.getMonth()
                        ? 'bg-accent-blue/20 backdrop-blur-md border border-accent-blue/30 text-white'
                        : 'hover:bg-glass-white/10 hover:backdrop-blur-md text-text-primary'
                    } focus:bg-accent-blue/20 focus:outline-none`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Year selector */}
          <div className="relative">
            <button
              onClick={() => {
                setShowYearPicker(!showYearPicker);
                setShowMonthPicker(false);
              }}
              className="bg-glass-white/10 backdrop-blur-lg border border-glass-white/20 rounded-2xl px-4 py-2 flex items-center gap-2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-glass-white/15 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
            >
              <span className="text-text-primary font-medium">
                {currentYear}
              </span>
              <svg
                className={`w-4 h-4 text-text-secondary transition-transform ${showYearPicker ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showYearPicker && (
              <div className="absolute top-full mt-2 left-0 z-50 bg-black/80 backdrop-blur-3xl border border-glass-white/15 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] p-2 max-h-60 overflow-y-auto min-w-[120px]">
                <input
                  type="text"
                  placeholder="Search year..."
                  className="w-full p-3 border-b border-glass-white/10 bg-transparent text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-blue/50 mb-2"
                  autoFocus
                />
                <div className="space-y-1">
                  {getYearRange().map((year) => (
                    <button
                      key={year}
                      onClick={() => handleYearSelect(year)}
                      className={`w-full p-3 rounded-xl text-left transition-all duration-200 ${
                        year === currentYear
                          ? 'bg-accent-blue/20 backdrop-blur-md border border-accent-blue/30 text-white'
                          : 'hover:bg-glass-white/10 hover:backdrop-blur-md text-text-primary'
                      } focus:bg-accent-blue/20 focus:outline-none`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Today button */}
        <button
          onClick={onTodayClick}
          className="bg-glass-accent backdrop-blur-lg border border-accent-blue/30 rounded-2xl px-6 py-3 text-white font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-accent-blue/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
        >
          Today
        </button>
      </div>

      {/* Close dropdowns when clicking outside */}
      {(showMonthPicker || showYearPicker) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowMonthPicker(false);
            setShowYearPicker(false);
          }}
        />
      )}
    </div>
  );
}
