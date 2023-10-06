import * as moment from 'moment-jalaali';
import {itemsAnimation, openClose} from '@shared/data-access/animations/date-picker-animations';
import {Day, PurpleDate} from '@shared/data-access/models/date.model';
import {PersianDigitPipe} from '@shared/util/persian-digit.pipe';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  forwardRef,
  inject,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'purple-date-picker',
  imports: [NgForOf, PersianDigitPipe, NgClass, NgIf, NgSwitch, NgSwitchDefault, NgSwitchCase],
  templateUrl: './purple-date-picker.component.html',
  styleUrls: ['./purple-date-picker.component.scss'],
  providers: [
    PersianDigitPipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PurpleDatePickerComponent),
      multi: true,
    },
  ],
  animations: [openClose, itemsAnimation],
})
export class PurpleDatePickerComponent implements OnInit, ControlValueAccessor {
  private readonly el = inject(ElementRef);

  @Input() placeholder: string | undefined;
  @Input() showToday = true;
  @Input() mode: 'year' | 'month' | undefined = undefined;
  @Output() dateSelected = new EventEmitter<PurpleDate>();
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
  monthsOfYear: string[] = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];
  yearsRangeView: number[] = [];

  selectedDay!: number;
  selectedMonth!: number;
  selectedYear!: number;

  selectedDate!: PurpleDate;

  showDatePicker = false;

  ngOnInit(): void {
    this.currentMonthView = this.monthsOfYear[this.viewingMonth];
    this.generateDates();
    this.generateYearsRange();
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.showDatePicker = false;
    }
  }

  openCalendar(): void {
    this.showDatePicker = true;
  }

  selectDay(value: Day): void {
    this.selectedDay = value.date;
    if (this.selectedMonth) this.selectedMonth = this.viewingMonth;
    if (this.selectedYear) this.selectedYear = this.viewingYear;
    this.changeModeDecision();
  }

  selectMonth(value: number): void {
    this.selectedMonth = value;
    if (this.selectedYear) this.selectedYear = this.viewingYear;
    this.changeModeDecision();
  }

  selectYear(value: number): void {
    this.selectedYear = value;
    this.changeModeDecision();
  }

  changeModeDecision(): void {
    switch (true) {
      case !!this.selectedYear && !!this.selectedMonth && !!this.selectedDay: // if user select all of them
        this.viewingYear = this.selectedYear;
        this.viewingMonth = this.selectedMonth;
        this.viewingDay = this.selectedDay;
        this.changeMode();
        this.updateView();
        this.selectedDate = {
          jalaliDate: `${this.selectedYear}/${this.selectedMonth + 1}/${this.selectedDay}`,
          jsDate: new Date(
            moment(`${this.selectedYear}/${this.selectedMonth + 1}/${this.selectedDay}`, 'jYYYY/jM/jD').format(
              'YYYY/M/D',
            ),
          ),
        };
        this.updateModel(this.selectedDate);
        break;
      case !!this.selectedYear && !this.selectedMonth && !this.selectedDay: // if user first select year
        this.viewingYear = this.selectedYear;
        this.changeMode('month');
        break;
      case !this.selectedYear && !!this.selectedDay && !this.selectedMonth: // if user first select day
        this.changeMode('month');
        break;
      case !this.selectedYear && !!this.selectedMonth && !this.selectedDay: // if user first select month
        this.viewingMonth = this.selectedMonth;
        this.changeMode('year');
        break;
      case !this.selectedDay: // if user not selected day
        this.viewingYear = this.selectedYear;
        this.viewingMonth = this.selectedMonth;
        this.changeMode();
        this.updateView();
        break;
      case !this.selectedMonth: // if user not selected month
        this.viewingDay = this.selectedDay;
        this.viewingYear = this.selectedYear;
        this.changeMode('month');
        break;
      case !this.selectedYear: // if user not selected year
        this.viewingDay = this.selectedDay;
        this.viewingMonth = this.selectedMonth;
        this.changeMode('year');
        break;
    }
  }

  today(): void {
    this.viewingDay = this.currentDay;
    this.viewingMonth = this.currentMonth;
    this.viewingYear = this.currentYear;
    this.selectedYear = this.currentYear;
    this.selectedMonth = this.currentMonth;
    this.selectedDay = this.currentDay;
    this.selectedDate = {
      jalaliDate: `${this.selectedYear}/${this.selectedMonth + 1}/${this.selectedDay}`,
      jsDate: new Date(
        moment(`${this.selectedYear}/${this.selectedMonth + 1}/${this.selectedDay}`, 'jYYYY/jM/jD').format('YYYY/M/D'),
      ),
    };
    this.generateDates();
    this.generateYearsRange();
    this.showDatePicker = false;
  }

  previousYear(): void {
    if (!this.mode || this.mode === 'month') {
      this.viewingYear--;
    } else {
      this.viewingYear -= 10;
    }
    this.updateView();
  }

  nextYear(): void {
    if (!this.mode || this.mode === 'month') {
      this.viewingYear++;
    } else {
      this.viewingYear += 10;
    }
    this.updateView();
  }

  previousMonth(): void {
    if (!this.mode) {
      if (this.viewingMonth === 0) {
        this.viewingMonth = 11;
        this.viewingYear--;
      } else {
        this.viewingMonth--;
      }
    }
    this.updateView();
  }

  nextMonth(): void {
    if (!this.mode) {
      if (this.viewingMonth === 11) {
        this.viewingMonth = 0;
        this.viewingYear++;
      } else {
        this.viewingMonth++;
      }
    }
    this.updateView();
  }

  updateView(): void {
    this.currentMonthView = this.monthsOfYear[this.viewingMonth];
    if (!this.mode) {
      this.generateDates();
    } else if (this.mode === 'month') {
    } else {
      this.generateYearsRange();
    }
  }

  changeMode(value?: 'year' | 'month'): void {
    this.mode = value;
  }

  previousDecade(): void {
    this.viewingYear -= 10;
    this.generateYearsRange();
  }

  nextDecade(): void {
    this.viewingYear += 10;
    this.generateYearsRange();
  }

  generateYearsRange(): void {
    const startYear = Math.floor(this.viewingYear / 10) * 10 - 1;
    this.yearsRangeView = Array(12)
      .fill(0)
      .map((_, i) => startYear + i);
  }

  generateDates(): void {
    this.daysOfMonth = [];
    const startOfMonth = moment().jYear(this.viewingYear).jMonth(this.viewingMonth).startOf('jMonth');
    const endOfMonth = moment().jYear(this.viewingYear).jMonth(this.viewingMonth).endOf('jMonth');

    const daysOfWeekMapping: {[key: string]: number} = {
      ش: 6, // Saturday
      ی: 0, // Sunday
      د: 1, // Monday
      س: 2, // Tuesday
      چ: 3, // Wednesday
      پ: 4, // Thursday
      ج: 5, // Friday
    };
    const startOfGrid = startOfMonth.clone();
    while (startOfGrid.day() !== daysOfWeekMapping[this.daysOfWeek[0]]) {
      startOfGrid.subtract(1, 'day');
    }
    const endOfGrid = startOfGrid.clone().add(41, 'days');
    for (let day = startOfGrid; day.isSameOrBefore(endOfGrid); day.add(1, 'day')) {
      this.daysOfMonth.push({
        date: day.jDate(),
        month: day.jMonth(),
        isCurrentMonth: day.isSameOrAfter(startOfMonth) && day.isSameOrBefore(endOfMonth),
        isCurrentDay:
          day.jDate() === this.currentDay && day.jMonth() === this.currentMonth && day.jYear() === this.currentYear,
      });
    }
  }

  onChange: any = () => {};
  onTouched: any = () => {};
  writeValue(obj: any): void {
    this.selectedDate = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}
  updateModel(date: any): void {
    this.selectedDate = date;
    this.onChange(this.selectedDate);
    this.onTouched();
  }
}
