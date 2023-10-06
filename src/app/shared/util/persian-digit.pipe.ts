import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'persianDigit',
  standalone: true,
})
export class PersianDigitPipe implements PipeTransform {
  transform(value: any): string {
    if (value === undefined || null) return '';
    if (typeof value !== 'string') {
      value = String(value);
    }

    const persianDigits: string[] = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return value.replace(/\d/g, (d: string) => persianDigits[+d]);
  }
}
