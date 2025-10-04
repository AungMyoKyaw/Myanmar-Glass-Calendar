export interface MyanmarDate {
  year: number;
  month: {
    en: string;
    my: string;
  };
  day: {
    en: number;
    my: number;
    mp: {
      en: string;
      my: string;
    };
  };
  fortnight: {
    en: string;
    my: string;
  };
}

export interface AstroInfo {
  maharbote: string;
  numerology: string;
  chineseZodiac: string;
  myanmarZodiac: string;
}

export interface CalendarDate {
  gregorian: Date;
  myanmar: MyanmarDate;
  astro: AstroInfo;
  isToday: boolean;
  isCurrentMonth: boolean;
}
