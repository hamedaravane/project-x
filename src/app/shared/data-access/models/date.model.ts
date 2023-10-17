export interface Day {
  date: number;
  month: number;
  isCurrentMonth: boolean;
  isCurrentDay: boolean;
}

export interface PurpleDate {
  jalaliDate: string;
  gregorianDate: Date;
}
