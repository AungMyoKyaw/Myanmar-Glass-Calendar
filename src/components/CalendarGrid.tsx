'use client';

import { CalendarDate } from '@/types/calendar';

interface CalendarGridProps {
  dates: CalendarDate[];
  onDateClick: (date: CalendarDate) => void;
}

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarGrid({
  dates,
  onDateClick
}: CalendarGridProps) {
  return (
    <div className="bg-black/20 backdrop-blur-3xl rounded-3xl p-2 sm:p-4 border border-glass-white/10 shadow-2xl h-full flex flex-col">
      {/* Week day headers */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2 flex-shrink-0">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-xs sm:text-sm font-medium text-text-tertiary py-1"
          >
            <span className="hidden sm:inline">{day}</span>
            <span className="sm:hidden">{day.slice(0, 1)}</span>
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 flex-1">
        {dates.map((date, index) => (
          <CalendarCell
            key={index}
            date={date}
            onClick={() => onDateClick(date)}
          />
        ))}
      </div>
    </div>
  );
}

interface CalendarCellProps {
  date: CalendarDate;
  onClick: () => void;
}

function CalendarCell({ date, onClick }: CalendarCellProps) {
  const baseClasses =
    'group bg-glass-secondary/5 backdrop-blur-md border border-glass-white/10 rounded-xl sm:rounded-2xl p-1 sm:p-2 transition-all duration-200 ease-out hover:bg-glass-white/10 hover:scale-105 hover:border-accent-blue/50 cursor-pointer text-center h-full min-h-[40px] sm:min-h-[50px] flex flex-col justify-center animate-[fade-in_0.4s_cubic-bezier(0.4,0,0.2,1)]';

  const todayClasses = date.isToday
    ? 'bg-accent-blue/20 backdrop-blur-lg border border-accent-blue/60 shadow-[0_0_20px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5),inset_0_2px_0_rgba(255,255,255,0.3)]'
    : '';

  const opacityClasses = date.isCurrentMonth ? 'opacity-100' : 'opacity-40';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${todayClasses} ${opacityClasses} focus:outline-none focus:ring-2 focus:ring-accent-blue/50`}
      aria-label={`${date.gregorian.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} - ${date.myanmar.month.my} ${date.myanmar.day.mp.my}`}
    >
      <div
        className={`text-sm sm:text-base font-semibold ${date.isToday ? 'text-white' : 'text-text-primary'}`}
      >
        {date.gregorian.getDate()}
      </div>
      <div
        className={`text-xs mt-0.5 ${date.isToday ? 'text-white/90' : 'text-text-secondary'}`}
      >
        <div className="text-xs font-medium hidden md:block">
          {date.myanmar.month.my.slice(0, 3)}
        </div>
        <div className="text-xs">{date.myanmar.day.mp.my}</div>
      </div>
    </button>
  );
}
