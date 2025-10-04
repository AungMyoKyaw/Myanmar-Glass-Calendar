import mycal from 'mycal';
import baydin from 'baydin';
import { MyanmarDate, AstroInfo, CalendarDate } from '@/types/calendar';

export class MyanmarCalendarService {
  static convertToMyanmarDate(date: Date): MyanmarDate {
    const gregorianStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    const myanmarDate = new mycal(gregorianStr);

    return {
      year: myanmarDate.year?.en || date.getFullYear(),
      month: {
        en: myanmarDate.month?.en || 'Unknown',
        my: myanmarDate.month?.my || 'အမည်မသိ'
      },
      day: {
        en: myanmarDate.day?.en || date.getDate(),
        my: myanmarDate.day?.my || date.getDate(),
        mp: {
          en: myanmarDate.day?.mp?.en || 'Unknown',
          my: myanmarDate.day?.mp?.my || 'အမည်မသိ'
        }
      },
      fortnight: {
        en: myanmarDate.fortnight?.en || 'Unknown',
        my: myanmarDate.fortnight?.my || 'အမည်မသိ'
      }
    };
  }

  static calculateAstrology(date: Date): AstroInfo {
    const weekDayNumber = date.getDay() + 1; // JavaScript getDay() returns 0-6, we need 1-7
    const dateNumber = date.getDate();
    const yearNumber = date.getFullYear();
    const monthNumber = date.getMonth() + 1;

    try {
      const maharbote = baydin.maharbote(yearNumber, weekDayNumber);
      const numerology = baydin.numFormat(baydin.numerology(dateNumber));
      const chineseZodiac = baydin.chineseZodiac(yearNumber);
      const myanmarZodiac = baydin.zodiac(dateNumber, monthNumber);

      return {
        maharbote: maharbote || 'Unknown',
        numerology: numerology || 'Unknown',
        chineseZodiac: chineseZodiac || 'Unknown',
        myanmarZodiac: myanmarZodiac || 'Unknown'
      };
    } catch (error) {
      console.error('Error calculating astrology:', error);
      return {
        maharbote: 'Unknown',
        numerology: 'Unknown',
        chineseZodiac: 'Unknown',
        myanmarZodiac: 'Unknown'
      };
    }
  }

  static createCalendarDate(date: Date, currentDate: Date): CalendarDate {
    const today = new Date();

    return {
      gregorian: date,
      myanmar: this.convertToMyanmarDate(date),
      astro: this.calculateAstrology(date),
      isToday: this.isSameDay(date, today),
      isCurrentMonth: this.isSameMonth(date, currentDate)
    };
  }

  static isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  static isSameMonth(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth()
    );
  }

  static getMonthDays(date: Date): CalendarDate[] {
    const year = date.getFullYear();
    const month = date.getMonth();

    // Get first day of month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Get the day of week for first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay();

    const days: CalendarDate[] = [];

    // Add days from previous month to fill the first week
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month - 1, prevMonthLastDay - i);
      days.push(this.createCalendarDate(prevDate, date));
    }

    // Add all days of current month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const currentDate = new Date(year, month, day);
      days.push(this.createCalendarDate(currentDate, date));
    }

    // Add days from next month to complete the grid (42 cells = 6 weeks)
    const remainingCells = 42 - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      const nextDate = new Date(year, month + 1, day);
      days.push(this.createCalendarDate(nextDate, date));
    }

    return days;
  }

  static getMonthName(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }
}
