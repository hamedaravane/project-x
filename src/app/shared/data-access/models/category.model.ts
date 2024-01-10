export interface LabelValue<T> {
  value: T | null;
  label: string;
}

export enum IndustryEnum {
  CafeAndRestaurant = 'Restaurant & Cafe',
  Beauty = 'Beauty',
  Fashion = 'Fashion',
  Fitness = 'Fitness',
  Retail = 'Retail',
  Bookstore = 'Bookstore',
  Grocery = 'Grocery',
  Cinema = 'Cinema',
  Jewelry = 'Jewelry',
  Pharmacy = 'Pharmacy',
  Flower = 'Flower',
  Other = 'Other',
}

export enum ProfessionEnum {
  Food = 'Food',
  Beauty = 'Beauty',
  Fashion = 'Fashion',
  Society = 'Society',
  Art = 'Art',
  Musician = 'Musician',
  Fitness = 'Fitness',
  Medical = 'Medical',
  Reporter = 'Reporter',
  Actor = 'Actor',
  Book = 'Book',
  Jewelry = 'Jewelry',
  Other = 'Other',
}

export const industryCategoryList: LabelValue<IndustryEnum>[] = [
  {value: IndustryEnum.CafeAndRestaurant, label: 'کافه و رستوران'},
  {value: IndustryEnum.Beauty, label: 'آرایش و زیبایی'},
  {value: IndustryEnum.Fashion, label: 'لباس و مد'},
  {value: IndustryEnum.Fitness, label: 'ورزشی'},
  {value: IndustryEnum.Retail, label: 'خرده فروشی'},
  {value: IndustryEnum.Bookstore, label: 'کتاب فروشی'},
  {value: IndustryEnum.Grocery, label: 'مواد غذایی'},
  {value: IndustryEnum.Cinema, label: 'سینما تئاتر'},
  {value: IndustryEnum.Jewelry, label: 'طلا و جواهر'},
  {value: IndustryEnum.Pharmacy, label: 'داروسازی'},
  {value: IndustryEnum.Flower, label: 'فروشگاه گل'},
  {value: IndustryEnum.Other, label: 'دیگر'},
];

export const influencerCategoryList: LabelValue<ProfessionEnum>[] = [
  {value: ProfessionEnum.Food, label: 'غذا'},
  {value: ProfessionEnum.Beauty, label: ' آرایش و زیبایی'},
  {value: ProfessionEnum.Fashion, label: 'لباس و مد'},
  {value: ProfessionEnum.Society, label: 'اجتماعی'},
  {value: ProfessionEnum.Art, label: 'هنری'},
  {value: ProfessionEnum.Musician, label: 'موسیقی'},
  {value: ProfessionEnum.Fitness, label: 'ورزشی'},
  {value: ProfessionEnum.Medical, label: 'پزشکی و دارویی'},
  {value: ProfessionEnum.Reporter, label: 'خبری'},
  {value: ProfessionEnum.Actor, label: 'سینما و بازیگری'},
  {value: ProfessionEnum.Book, label: 'کتاب'},
  {value: ProfessionEnum.Jewelry, label: 'طلا و جواهر'},
  {value: ProfessionEnum.Other, label: 'دیگر'},
];
