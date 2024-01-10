import {Pipe, PipeTransform} from '@angular/core';
import {ProfessionEnum, IndustryEnum} from '@shared/data-access/models/category.model';

@Pipe({
  standalone: true,
  name: 'categoryToLabel',
})
export class CategoryToLabelPipe implements PipeTransform {
  private categoryLabels: Record<string, string> = {
    [ProfessionEnum.Food]: 'غذا',
    [ProfessionEnum.Beauty]: 'آرایش و زیبایی',
    [ProfessionEnum.Fashion]: 'لباس و مد',
    [ProfessionEnum.Society]: 'اجتماعی',
    [ProfessionEnum.Art]: 'هنری',
    [ProfessionEnum.Musician]: 'موسیقی',
    [ProfessionEnum.Fitness]: 'ورزشی',
    [ProfessionEnum.Medical]: 'پزشکی و دارویی',
    [ProfessionEnum.Reporter]: 'خبری',
    [ProfessionEnum.Actor]: 'سینما و بازیگری',
    [ProfessionEnum.Book]: 'کتاب',
    [ProfessionEnum.Jewelry]: 'طلا و جواهر',
    [IndustryEnum.CafeAndRestaurant]: 'کافه و رستوران',
    [IndustryEnum.Retail]: 'خرده فروشی',
    [IndustryEnum.Bookstore]: 'کتاب فروشی',
    [IndustryEnum.Grocery]: 'مواد غذایی',
    [IndustryEnum.Cinema]: 'سینما تئاتر',
    [IndustryEnum.Pharmacy]: 'داروسازی',
    [IndustryEnum.Flower]: 'فروشگاه گل',
  };

  transform(value: IndustryEnum | ProfessionEnum): string {
    return this.categoryLabels[value] || 'دیگر';
  }
}
