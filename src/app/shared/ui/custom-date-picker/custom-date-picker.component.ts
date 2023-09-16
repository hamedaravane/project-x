import {Component, EventEmitter, Input, Output} from '@angular/core';
import * as moment from "moment-jalaali";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {FormsModule} from "@angular/forms";
@Component({
  standalone: true,
  selector: 'app-custom-date-picker',
  imports: [
    NzDatePickerModule,
    FormsModule
  ],
  templateUrl: './custom-date-picker.component.html'
})
export class CustomDatePickerComponent {
  @Input() set shamsiDate(value: string) {
    this.innerDate = moment(value, 'jYYYY-jMM-jDD').toDate();
  }
  @Input() nzMode!: string;
  @Input() nzShowToday!: string;

  @Output() shamsiDateChange: EventEmitter<string> = new EventEmitter();

  innerDate!: Date;

  onDateChange(date: Date): void {
    const shamsi = moment(date).format('jYYYY-jMM-jDD');
    this.shamsiDateChange.emit(shamsi);
  }
}
