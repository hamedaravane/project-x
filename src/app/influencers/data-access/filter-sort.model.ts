export interface SelectList {
  value: SortOption;
  label: string;
}

export enum SortOption {
  rate = 'Rate',
  category = 'Category',
  name = 'Name',
  fee = 'Fee',
}

export enum SortOrder {
  ascending,
  descending,
}
