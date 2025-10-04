'use client';

import { useEffect, useState } from 'react';
import CalendarHeader from '@/components/CalendarHeader';
import CalendarGrid from '@/components/CalendarGrid';
import DateModal from '@/components/DateModal';
import PickerModal from '@/components/PickerModal';
import { loadScript } from '@/lib/loadScript';
import type { MyanmarDate } from '@/types/myanmar';

export default function Home() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [showDateModal, setShowDateModal] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedMyanmarDate, setSelectedMyanmarDate] =
    useState<MyanmarDate | null>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  const today = new Date();

  useEffect(() => {
    const loadExternalScripts = async () => {
      try {
        await Promise.all([
          loadScript('https://unpkg.com/mycal@latest/dist/client/mycal.min.js'),
          loadScript(
            'https://unpkg.com/baydin@latest/dist/client/baydin.min.js'
          )
        ]);
        setScriptsLoaded(true);
      } catch (error) {
        console.error('Failed to load external scripts:', error);
      }
    };

    loadExternalScripts();
  }, []);

  const handlePrevMonth = () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
      if (newYear < 1885) {
        newYear = 1885;
        newMonth = 0;
      }
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleNextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;

    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
      if (newYear > today.getFullYear() + 100) {
        newYear = today.getFullYear() + 100;
        newMonth = 11;
      }
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleGoToToday = () => {
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth());
  };

  const handleDayClick = (date: Date, myanmarDate: MyanmarDate) => {
    setSelectedDate(date);
    setSelectedMyanmarDate(myanmarDate);
    setShowDateModal(true);
  };

  const handleMonthSelect = (month: number) => {
    setCurrentMonth(month);
  };

  const handleYearSelect = (year: number) => {
    setCurrentYear(year);
  };

  const showGoToToday =
    currentYear !== today.getFullYear() || currentMonth !== today.getMonth();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative flex min-h-screen items-center justify-center p-4 sm:p-6">
        <main className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-white/5 p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-xl sm:p-8">
          {/* Glass effect border */}
          <div className="absolute inset-0 rounded-3xl border border-white/20"></div>

          <CalendarHeader
            currentMonth={currentMonth}
            currentYear={currentYear}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            onMonthClick={() => setShowMonthPicker(true)}
            onYearClick={() => setShowYearPicker(true)}
          />

          {scriptsLoaded ? (
            <CalendarGrid
              year={currentYear}
              month={currentMonth}
              onDayClick={handleDayClick}
            />
          ) : (
            <div className="flex items-center justify-center py-20">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white"></div>
            </div>
          )}

          <footer className="mt-8 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            {showGoToToday && (
              <button
                onClick={handleGoToToday}
                className="rounded-2xl bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Go to Today
              </button>
            )}
            <div className="text-center text-sm text-white/60 sm:text-left">
              Tip: Click on any date to see Myanmar date details
            </div>
          </footer>
        </main>
      </div>

      {/* Modals */}
      <DateModal
        isOpen={showDateModal}
        onClose={() => setShowDateModal(false)}
        date={selectedDate}
        myanmarDate={selectedMyanmarDate}
      />

      <PickerModal
        isOpen={showMonthPicker}
        onClose={() => setShowMonthPicker(false)}
        type="month"
        currentValue={currentMonth}
        onSelect={handleMonthSelect}
      />

      <PickerModal
        isOpen={showYearPicker}
        onClose={() => setShowYearPicker(false)}
        type="year"
        currentValue={currentYear}
        onSelect={handleYearSelect}
      />
    </div>
  );
}
