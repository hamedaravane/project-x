import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {PersianDigitPipe} from "@shared/util/persian-digit.pipe";
import * as moment from 'moment-jalaali';

@Component({
  standalone: true,
  selector: 'app-purple-date-picker',
  imports: [
    NgForOf,
    PersianDigitPipe,
    NgClass,
    NgIf,
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase
  ],
  templateUrl: './purple-date-picker.component.html',
  styleUrls: ['./purple-date-picker.component.scss']
})
export class PurpleDatePickerComponent implements OnInit {
  @Input() showToday = true;
  @Input() mode: 'year' | 'month' | undefined = undefined;
  now = moment();
  currentDay = this.now.jDate();
  currentMonth = this.now.jMonth();
  currentYear = this.now.jYear();
  currentMonthView!: string;
  daysOfMonth: any[] = [];
  daysOfWeek: string[] = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
  monthsOfYear: string[] = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
  selectedMonth!: number;
  yearsRangeView: number[] = [];

  ngOnInit() {
    this.currentMonthView = this.monthsOfYear[this.currentMonth]
    this.generateDates();
    this.generateYearsRange();
  }

  changeMode(value?: string) {
    this.mode = value as 'year' | 'month' | undefined;
  }

  generateYearsRange() {
    const startYear = Math.floor(this.currentYear / 10) * 10 - 1;  // The first year of the current decade, minus 1
    this.yearsRangeView = Array(12).fill(0).map((_, i) => startYear + i);
  }

  generateDates() {
    // Start and end of the current month
    const startOfMonth = moment().jYear(this.currentYear).jMonth(this.currentMonth).startOf('jMonth');
    const endOfMonth = moment().jYear(this.currentYear).jMonth(this.currentMonth).endOf('jMonth');

    const daysOfWeekMapping: {[key: string]: number} = {
      'ش': 6,  // Saturday
      'ی': 0,  // Sunday
      'د': 1,  // Monday
      'س': 2,  // Tuesday
      'چ': 3,  // Wednesday
      'پ': 4,  // Thursday
      'ج': 5   // Friday
    };

    // Calculate start of the grid by determining the day of week for the startOfMonth and subtracting
    let startOfGrid = startOfMonth.clone();
    while (startOfGrid.day() !== daysOfWeekMapping[this.daysOfWeek[0]]) {
      startOfGrid.subtract(1, 'day');
    }

    // The end of the grid will be 42 days (6 weeks * 7 days) from the startOfGrid
    const endOfGrid = startOfGrid.clone().add(41, 'days');

    for(let day = startOfGrid; day.isSameOrBefore(endOfGrid); day.add(1, 'day')) {
      this.daysOfMonth.push({
        date: day.jDate(),
        month: day.jMonth(),
        isCurrentMonth: day.isSameOrAfter(startOfMonth) && day.isSameOrBefore(endOfMonth),
        isCurrentDay: day.jDate() === this.currentDay && day.jMonth() === this.currentMonth && day.jYear() === this.currentYear
      });
    }
  }
}
