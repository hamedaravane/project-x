import {BusinessValue} from '@shared/data-access/models/category.model';

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

export interface FilterSort {
  sortOption: SortOption | null;
  sortOrder: SortOrder;
  filterCategory: BusinessValue | null;
}
