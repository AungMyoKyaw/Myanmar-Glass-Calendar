'use client';

import { useState, useEffect } from 'react';
import { MyanmarCalendarService } from '@/lib/myanmar-calendar';
import CalendarNavigation from '@/components/CalendarNavigation';
import CalendarGrid from '@/components/CalendarGrid';
import DateDetailModal from '@/components/DateDetailModal';
import KeyboardShortcuts from '@/components/KeyboardShortcuts';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import { CalendarDate } from '@/types/calendar';

export default function Home() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendarDates, setCalendarDates] = useState<CalendarDate[]>([]);
  const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const dates = MyanmarCalendarService.getMonthDays(currentMonth);
    setCalendarDates(dates);
  }, [currentMonth]);

  const handleMonthChange = (newMonth: Date) => {
    setCurrentMonth(newMonth);
  };

  const handlePreviousMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  };

  const handleNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  const handleTodayClick = () => {
    const today = new Date();
    setCurrentMonth(today);
  };

  const handleDateClick = (date: CalendarDate) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Keyboard navigation
  useKeyboardNavigation({
    onPrevious: handlePreviousMonth,
    onNext: handleNextMonth,
    onToday: handleTodayClick,
    onClose: handleModalClose,
    enabled: !isModalOpen
  });

  return (
    <div className="h-screen flex flex-col p-2 md:p-4">
      <div className="max-w-7xl mx-auto w-full flex flex-col h-full">
        {/* Header */}
        <header className="text-center mb-4 md:mb-6 flex-shrink-0">
          <h1 className="text-2xl md:text-4xl font-bold text-text-primary mb-1 md:mb-2">
            Myanmar <span className="text-accent-blue">Glass</span> Calendar
          </h1>
          <p className="text-text-secondary text-sm md:text-base">
            Traditional Myanmar calendar with astrological insights
          </p>
        </header>

        {/* Main Calendar Container */}
        <main className="flex-1 flex flex-col space-y-4 md:space-y-6 min-h-0">
          {/* Navigation */}
          <div className="flex-shrink-0">
            <CalendarNavigation
              currentMonth={currentMonth}
              onMonthChange={handleMonthChange}
              onTodayClick={handleTodayClick}
            />
          </div>

          {/* Calendar Grid */}
          <div className="flex-1 min-h-0">
            <CalendarGrid dates={calendarDates} onDateClick={handleDateClick} />
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center mt-4 text-text-tertiary text-xs flex-shrink-0">
          <p>Myanmar Glass Calendar © 2025</p>
        </footer>

        {/* Date Detail Modal */}
        <DateDetailModal
          date={selectedDate}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />

        {/* Keyboard shortcuts */}
        <KeyboardShortcuts />
      </div>
    </div>
  );
}
