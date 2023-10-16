import {Pipe, PipeTransform} from '@angular/core';
import {BusinessValue, IndustryValue} from '@shared/data-access/models/category.model';

@Pipe({
  standalone: true,
  name: 'categoryToLabel',
})
export class CategoryToLabelPipe implements PipeTransform {
  private categoryLabels: Record<string, string> = {
    [BusinessValue.Food]: 'غذا',
    [BusinessValue.Beauty]: 'آرایش و زیبایی',
    [BusinessValue.Fashion]: 'لباس و مد',
    [BusinessValue.Society]: 'اجتماعی',
    [BusinessValue.Art]: 'هنری',
    [BusinessValue.Musician]: 'موسیقی',
    [BusinessValue.Fitness]: 'ورزشی',
    [BusinessValue.Medical]: 'پزشکی و دارویی',
    [BusinessValue.Reporter]: 'خبری',
    [BusinessValue.Actor]: 'سینما و بازیگری',
    [BusinessValue.Book]: 'کتاب',
    [BusinessValue.Jewelry]: 'طلا و جواهر',
    [IndustryValue.CafeAndRestaurant]: 'کافه و رستوران',
    [IndustryValue.Retail]: 'خرده فروشی',
    [IndustryValue.Bookstore]: 'کتاب فروشی',
    [IndustryValue.Grocery]: 'مواد غذایی',
    [IndustryValue.Cinema]: 'سینما تئاتر',
    [IndustryValue.Pharmacy]: 'داروسازی',
    [IndustryValue.Flower]: 'فروشگاه گل',
  };

  transform(value: IndustryValue | BusinessValue): string {
    return this.categoryLabels[value] || 'دیگر';
  }
}
