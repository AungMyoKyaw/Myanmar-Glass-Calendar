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
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">
            Myanmar <span className="text-accent-blue">Glass</span> Calendar
          </h1>
          <p className="text-text-secondary text-lg">
            Traditional Myanmar calendar with astrological insights
          </p>
        </header>

        {/* Main Calendar Container */}
        <main className="space-y-6">
          {/* Navigation */}
          <CalendarNavigation
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            onTodayClick={handleTodayClick}
          />

          {/* Calendar Grid */}
          <CalendarGrid dates={calendarDates} onDateClick={handleDateClick} />
        </main>

        {/* Date Detail Modal */}
        <DateDetailModal
          date={selectedDate}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />

        {/* Footer */}
        <footer className="text-center mt-12 text-text-tertiary text-sm">
          <p>Myanmar Glass Calendar © 2025</p>
          <p className="mt-2">
            Featuring traditional Myanmar calendar system and astrological
            calculations
          </p>
        </footer>

        {/* Keyboard shortcuts */}
        <KeyboardShortcuts />
      </div>
    </div>
  );
}
