import {BusinessValue, IndustryValue, SelectList} from '@shared/data-access/models/category.model';

export const industryCategoryList: SelectList[] = [
  {value: IndustryValue.CafeAndRestaurant, label: 'کافه و رستوران'},
  {value: IndustryValue.Beauty, label: 'آرایش و زیبایی'},
  {value: IndustryValue.Fashion, label: 'لباس و مد'},
  {value: IndustryValue.Fitness, label: 'ورزشی'},
  {value: IndustryValue.Retail, label: 'خرده فروشی'},
  {value: IndustryValue.Bookstore, label: 'کتاب فروشی'},
  {value: IndustryValue.Grocery, label: 'مواد غذایی'},
  {value: IndustryValue.Cinema, label: 'سینما تئاتر'},
  {value: IndustryValue.Jewelry, label: 'طلا و جواهر'},
  {value: IndustryValue.Pharmacy, label: 'داروسازی'},
  {value: IndustryValue.Flower, label: 'فروشگاه گل'},
  {value: IndustryValue.Other, label: 'دیگر'},
];

export const influencerCategoryList: SelectList[] = [
  {value: BusinessValue.Food, label: 'غذا'},
  {value: BusinessValue.Beauty, label: ' آرایش و زیبایی'},
  {value: BusinessValue.Fashion, label: 'لباس و مد'},
  {value: BusinessValue.Society, label: 'اجتماعی'},
  {value: BusinessValue.Art, label: 'هنری'},
  {value: BusinessValue.Musician, label: 'موسیقی'},
  {value: BusinessValue.Fitness, label: 'ورزشی'},
  {value: BusinessValue.Medical, label: 'پزشکی و دارویی'},
  {value: BusinessValue.Reporter, label: 'خبری'},
  {value: BusinessValue.Actor, label: 'سینما و بازیگری'},
  {value: BusinessValue.Book, label: 'کتاب'},
  {value: BusinessValue.Jewelry, label: 'طلا و جواهر'},
  {value: BusinessValue.Other, label: 'دیگر'},
];
