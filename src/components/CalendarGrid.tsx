'use client';

import type { MyanmarDate } from '@/types/myanmar';

interface CalendarGridProps {
  year: number;
  month: number;
  onDayClick: (date: Date, myanmarDate: MyanmarDate) => void;
}

const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarGrid({
  year,
  month,
  onDayClick
}: CalendarGridProps) {
  const today = new Date();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const renderCalendarCells = () => {
    const cells = [];

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      cells.push(
        <div
          key={`empty-${i}`}
          className="rounded-2xl bg-transparent p-4"
        ></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday =
        year === today.getFullYear() &&
        month === today.getMonth() &&
        day === today.getDate();

      const dateString = `${month + 1}/${day}/${year}`;
      let myanmarDate: MyanmarDate | null = null;

      // Use mycal library
      if (typeof window !== 'undefined' && window.mycal) {
        myanmarDate = new window.mycal(dateString);
      }

      cells.push(
        <div
          key={day}
          onClick={() => myanmarDate && onDayClick(date, myanmarDate)}
          className={`group relative cursor-pointer overflow-hidden rounded-2xl p-4 backdrop-blur-xl transition-all duration-300 ${
            isToday
              ? 'bg-gradient-to-br from-blue-400/30 to-purple-400/30 shadow-[0_8px_32px_0_rgba(59,130,246,0.3)] hover:from-blue-400/40 hover:to-purple-400/40'
              : 'bg-white/10 hover:bg-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]'
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <div
              className={`mb-1 text-xl font-bold ${isToday ? 'text-white' : 'text-white/90'}`}
            >
              {day}
            </div>
            {myanmarDate && (
              <div className="hidden text-center lg:block">
                <p className="text-xs text-white/70">
                  {myanmarDate.month.my} {myanmarDate.day.mp.my}
                </p>
                <p className="text-xs text-white/70">{myanmarDate.day.fd.my}</p>
              </div>
            )}
          </div>
        </div>
      );
    }

    return cells;
  };

  return (
    <div className="space-y-4">
      <h1 className="mb-6 text-center text-3xl font-bold text-white/90">
        {new Date(year, month).toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric'
        })}
      </h1>

      {/* Weekday names */}
      <div className="mb-2 grid grid-cols-7 gap-2 sm:gap-4">
        {weekdayNames.map((name) => (
          <div
            key={name}
            className="rounded-xl bg-white/5 p-2 text-center text-sm font-semibold text-white/70 backdrop-blur-xl"
          >
            {name}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2 sm:gap-4">
        {renderCalendarCells()}
      </div>
    </div>
  );
}
