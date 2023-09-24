import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'categoryToLabel'
})
export class CategoryToLabelPipe implements PipeTransform {

  transform(value: string): string {

    return '';
  }

}
