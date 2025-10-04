declare module 'mycal' {
  class MyanmarCalendar {
    constructor(date: string);
    year?: {
      en: number;
      my: string;
    };
    month?: {
      en: string;
      my: string;
    };
    day?: {
      en: number;
      my: number;
      mp?: {
        en: string;
        my: string;
      };
    };
    fortnight?: {
      en: string;
      my: string;
    };
  }

  export default MyanmarCalendar;
}

declare module 'baydin' {
  export function maharbote(year: number, weekday: number): string;
  export function numerology(day: number): number;
  export function numFormat(number: number): string;
  export function chineseZodiac(year: number): string;
  export function zodiac(day: number, month: number): string;
}
