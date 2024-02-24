import {Pipe, PipeTransform} from '@angular/core';
import {IndustryEnum, ProfessionEnum} from '@shared/data-access/models/category.model';

@Pipe({
  standalone: true,
  name: 'categoryToIcon',
})
export class CategoryToIconPipe implements PipeTransform {
  private categoryIcons: Record<string, string> = {
    [ProfessionEnum.Food]: 'fa-utensils',
    [ProfessionEnum.Beauty]: 'fa-lips',
    [ProfessionEnum.Fashion]: 'fa-shirt',
    [ProfessionEnum.Society]: 'fa-person',
    [ProfessionEnum.Art]: 'fa-palette',
    [ProfessionEnum.Musician]: 'fa-music',
    [ProfessionEnum.Fitness]: 'fa-dumbbell',
    [ProfessionEnum.Medical]: 'fa-stethoscope',
    [ProfessionEnum.Reporter]: 'fa-newspaper',
    [ProfessionEnum.Jewelry]: 'fa-gem',
    [ProfessionEnum.Actor]: 'fa-masks-theater',
    [ProfessionEnum.Book]: 'fa-book',
    [IndustryEnum.CafeAndRestaurant]: 'fa-utensils',
    [IndustryEnum.Retail]: 'fa-store',
    [IndustryEnum.Bookstore]: 'fa-book',
    [IndustryEnum.Grocery]: 'fa-cart-shopping',
    [IndustryEnum.Cinema]: 'fa-masks-theater',
    [IndustryEnum.Pharmacy]: 'fa-pills',
    [IndustryEnum.Flower]: 'fa-flower',
  };

  transform(value: IndustryEnum | ProfessionEnum, arg?: string): string {
    const iconStyle = 'fa fa-solid ';
    const icon = iconStyle + (this.categoryIcons[value] || 'fa-circle') + (arg ? ' ' : '');
    return icon + (arg ?? '');
  }
}
