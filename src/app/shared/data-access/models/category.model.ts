export interface SelectList {
  value: IndustryValue | BusinessValue;
  label: string;
}

export enum IndustryValue {
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

export enum BusinessValue {
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
