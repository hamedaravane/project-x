import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {PersianDigitPipe} from "@shared/util/persian-digit.pipe";
import * as moment from 'moment-jalaali';
import {Day} from "@shared/data-access/models/date.model";
import {NzInputModule} from "ng-zorro-antd/input";

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
    NgSwitchCase,
    NzInputModule
  ],
  templateUrl: './purple-date-picker.component.html',
  styleUrls: ['./purple-date-picker.component.scss']
})
export class PurpleDatePickerComponent implements OnInit {
  @Input() showToday = true;
  @Input() mode: 'year' | 'month' | undefined = undefined;
  @Output() dateSelected = new EventEmitter<string>();
  now = moment();
  // current
  currentDay = this.now.jDate();
  currentMonth = this.now.jMonth();
  currentYear = this.now.jYear();
  // viewing
  viewingDay = this.currentDay;
  viewingMonth = this.currentMonth;
  viewingYear = this.currentYear;
  currentMonthView!: string;
  daysOfMonth: Day[] = [];
  daysOfWeek: string[] = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
  monthsOfYear: string[] = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
  yearsRangeView: number[] = [];

  selectedDay!: number;
  selectedMonth!: number;
  selectedYear!: number;

  showDatePicker = false;

  ngOnInit() {
    this.currentMonthView = this.monthsOfYear[this.viewingMonth]
    this.generateDates();
    this.generateYearsRange();
  }

  openDatePicker() {
    this.showDatePicker = true;
  }

  selectDate(date: any) {
    this.dateSelected.emit('formatted date here');
  }

  selectDay(value: Day) {
    this.selectedDay = value.date;
    if (this.selectedMonth) this.selectedMonth = this.viewingMonth;
    if (this.selectedYear) this.selectedYear = this.viewingYear;
    this.changeModeDecision();
  }

  selectMonth(value: number) {
    this.selectedMonth = value;
    if (this.selectedYear) this.selectedYear = this.viewingYear;
    this.changeModeDecision();
  }

  selectYear(value: number) {
    this.selectedYear = value;
    this.changeModeDecision();
  }

  changeModeDecision() {
    switch (true) {
      case !!this.selectedYear && !!this.selectedMonth && !!this.selectedDay: // if user select all of them
        this.viewingYear = this.selectedYear;
        this.viewingMonth = this.selectedMonth;
        this.viewingDay = this.selectedDay;
        this.changeMode() // change mode to day as default
        this.updateView();
        break
      case !!this.selectedYear && !this.selectedMonth && !this.selectedDay: // if user first select year
        this.viewingYear = this.selectedYear;
        this.changeMode('month')
        break
      case !this.selectedYear && !!this.selectedDay && !this.selectedMonth: // if user first select day
        this.changeMode('month')
        break
      case !this.selectedYear && !!this.selectedMonth && !this.selectedDay: // if user first select month
        this.viewingMonth = this.selectedMonth;
        this.changeMode('year')
        break
      case !this.selectedDay: // if user not selected day
        this.viewingYear = this.selectedYear;
        this.viewingMonth = this.selectedMonth;
        this.changeMode();
        this.updateView();
        break
      case !this.selectedMonth: // if user not selected month
        this.viewingDay = this.selectedDay;
        this.viewingYear = this.selectedYear;
        this.changeMode('month');
        break
      case !this.selectedYear: // if user not selected year
        this.viewingDay = this.selectedDay;
        this.viewingMonth = this.selectedMonth;
        this.changeMode('year');
        break;
    }
  }

  today() {
    this.viewingDay = this.currentDay;
    this.viewingMonth = this.currentMonth;
    this.viewingYear = this.currentYear;
    this.generateDates();
    this.generateYearsRange();
  }

  previousYear() {
    if (!this.mode || this.mode === 'month') {
      this.viewingYear--;
    } else { // 'year' mode
      this.viewingYear -= 10;
    }
    this.updateView();
  }

  nextYear() {
    if (!this.mode || this.mode === 'month') {
      this.viewingYear++;
    } else { // 'year' mode
      this.viewingYear += 10;
    }
    this.updateView();
  }

  previousMonth() {
    if (!this.mode) {
      if (this.viewingMonth === 0) { // Farvardin in Jalali
        this.viewingMonth = 11; // Esfand
        this.viewingYear--;
      } else {
        this.viewingMonth--;
      }
    }
    this.updateView();
  }

  nextMonth() {
    if (!this.mode) {
      if (this.viewingMonth === 11) { // Esfand in Jalali
        this.viewingMonth = 0; // Farvardin
        this.viewingYear++;
      } else {
        this.viewingMonth++;
      }
    }
    this.updateView();
  }

  updateView() {
    this.currentMonthView = this.monthsOfYear[this.viewingMonth]
    if (!this.mode) {
      this.generateDates();
    } else if (this.mode === 'month') {
      // Call the respective month view update function.
    } else {
      this.generateYearsRange();
    }
  }

  changeMode(value?: 'year' | 'month') {
    this.mode = value;
  }

  previousDecade() {
    this.viewingYear -= 10;
    this.generateYearsRange();
  }

  nextDecade() {
    this.viewingYear += 10;
    this.generateYearsRange();
  }

  generateYearsRange() {
    const startYear = Math.floor(this.viewingYear / 10) * 10 - 1;
    this.yearsRangeView = Array(12).fill(0).map((_, i) => startYear + i);
  }

  generateDates() {
    this.daysOfMonth = [];
    // Start and end of the current month
    const startOfMonth = moment().jYear(this.viewingYear).jMonth(this.viewingMonth).startOf('jMonth');
    const endOfMonth = moment().jYear(this.viewingYear).jMonth(this.viewingMonth).endOf('jMonth');

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

  protected readonly undefined = undefined;
}
