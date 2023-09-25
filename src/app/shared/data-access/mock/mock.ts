import {BusinessValue, IndustryValue, SelectList} from '@shared/data-access/models/category.model';

export const industryCategoryList: SelectList[] = [
  {value: IndustryValue.CafeAndRestaurant, label: 'کافه و رستوران'},
  {value: IndustryValue.Beauty, label: ' آرایش و زیبایی'},
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

export const influencersList = [
  {
    nickname: 'neg.r',
    instagramId: 'neg.r',
    profilePhotoSrc: 'assets/mock/profile-photos/1.jpg',
    rate: 4,
    category: IndustryValue.CafeAndRestaurant,
  },
  {
    nickname: 'Hamed Purple',
    instagramId: 'aboutpurple',
    profilePhotoSrc: 'assets/mock/profile-photos/2.jpg',
    rate: 2.5,
    category: IndustryValue.Fitness,
  },
  {
    nickname: 'نگین میرصالحی',
    instagramId: 'neginmirsalehi',
    profilePhotoSrc: 'assets/mock/profile-photos/3.jpg',
    rate: 4,
    category: IndustryValue.Fashion,
  },
  {
    nickname: 'آیسان اسلامی',
    instagramId: 'aisan_eslami',
    profilePhotoSrc: 'assets/mock/profile-photos/4.jpg',
    rate: 3.5,
    category: IndustryValue.Fitness,
  },
  {
    nickname: 'نیوشا',
    instagramId: 'niusha_sss',
    profilePhotoSrc: 'assets/mock/profile-photos/5.jpg',
    rate: 1,
    category: IndustryValue.Bookstore,
  },
  {
    nickname: 'سپیده اخلاقی',
    instagramId: 'sssepii',
    profilePhotoSrc: 'assets/mock/profile-photos/6.jpg',
    rate: 2.5,
    category: IndustryValue.Flower,
  },
];
