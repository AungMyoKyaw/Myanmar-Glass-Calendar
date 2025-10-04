// Type definitions for mycal library
export interface MyanmarMonth {
  my: string;
  en: string;
}

export interface MyanmarDay {
  mp: {
    my: string;
    en: string;
  };
  fd: {
    my: string;
    en: string;
  };
}

export interface MyanmarYear {
  my: string;
  en: number;
}

export interface MyanmarWeekday {
  my: string;
  en: string;
}

export interface MyanmarDate {
  month: MyanmarMonth;
  day: MyanmarDay;
  year: MyanmarYear;
  weekday: MyanmarWeekday;
}

// Type definitions for baydin library
export interface ZodiacResult {
  sign_mm: string;
  sign_en: string;
}

export interface ChineseZodiacResult {
  signInBurmese: string;
  signInEnglish: string;
}

export interface BaydinLibrary {
  maharbote: (year: number, weekDay: number) => string;
  numerology: (date: number) => number;
  numFormat: (num: number) => string;
  zodiac: (date: number, month: number) => ZodiacResult;
  chineseZodiac: (year: number) => ChineseZodiacResult;
}

// Window extensions
declare global {
  interface Window {
    mycal: new (dateString: string) => MyanmarDate;
    baydin: BaydinLibrary;
  }
}

export {};
