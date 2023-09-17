import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import * as moment from 'moment-jalaali';

@Component({
  standalone: true,
  selector: 'app-purple-date-picker',
  imports: [
    NgForOf
  ],
  templateUrl: './purple-date-picker.component.html',
  styleUrls: ['./purple-date-picker.component.scss']
})
export class PurpleDatePickerComponent {
  currentMonth!: number;
  currentYear!: number;
  daysOfMonth: any[] = [];
  daysOfWeek: string[] = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

  constructor() {
    const now = moment(); // jalali moment
    this.currentMonth = now.jMonth();
    this.currentYear = now.jYear();
    this.generateDates();
  }

  generateDates() {
    // Start and end of the current month
    const startOfMonth = moment().jYear(this.currentYear).jMonth(this.currentMonth).startOf('jMonth');
    const endOfMonth = moment().jYear(this.currentYear).jMonth(this.currentMonth).endOf('jMonth');

    // Calculate start of the grid by determining the day of week for the startOfMonth and subtracting
    let startOfGrid = startOfMonth.clone();
    while (this.daysOfWeek.indexOf(startOfGrid.format('ddd')) !== 0) {
      startOfGrid.subtract(1, 'day');
    }

    // The end of the grid will be 42 days (6 weeks * 7 days) from the startOfGrid
    const endOfGrid = startOfGrid.clone().add(41, 'days');

    this.daysOfMonth = [];

    for(let day = startOfGrid; day.isSameOrBefore(endOfGrid); day.add(1, 'day')) {
      this.daysOfMonth.push({
        date: day.jDate(),
        month: day.jMonth(),
        isCurrentMonth: day.isSameOrAfter(startOfMonth) && day.isSameOrBefore(endOfMonth)
      });
    }
  }


}
