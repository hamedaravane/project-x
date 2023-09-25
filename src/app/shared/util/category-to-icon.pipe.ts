import {BusinessValue, IndustryValue} from '@shared/data-access/models/category.model';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'categoryToIcon',
})
export class CategoryToIconPipe implements PipeTransform {
  private categoryIcons: Record<string, string> = {
    [BusinessValue.Food]: 'fa-utensils',
    [BusinessValue.Beauty]: 'fa-lips',
    [BusinessValue.Fashion]: 'fa-shirt',
    [BusinessValue.Society]: 'fa-person',
    [BusinessValue.Art]: 'fa-palette',
    [BusinessValue.Musician]: 'fa-music',
    [BusinessValue.Fitness]: 'fa-dumbbell',
    [BusinessValue.Medical]: 'fa-stethoscope',
    [BusinessValue.Reporter]: 'fa-newspaper',
    [BusinessValue.Jewelry]: 'fa-gem',
    [BusinessValue.Actor]: 'fa-masks-theater',
    [BusinessValue.Book]: 'fa-book',
    [IndustryValue.CafeAndRestaurant]: 'fa-utensils',
    [IndustryValue.Retail]: 'fa-store',
    [IndustryValue.Bookstore]: 'fa-book',
    [IndustryValue.Grocery]: 'fa-cart-shopping',
    [IndustryValue.Cinema]: 'fa-masks-theater',
    [IndustryValue.Pharmacy]: 'fa-pills',
    [IndustryValue.Flower]: 'fa-flower',
  };

  transform(value: IndustryValue | BusinessValue, arg?: string): string {
    const iconStyle = 'fa fa-solid ';
    const icon = iconStyle + (this.categoryIcons[value] || 'fa-circle') + (arg ? ' ' : '');
    return icon + (arg ?? '');
  }
}
