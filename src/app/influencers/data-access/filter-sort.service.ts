import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';
import {FilterSort, SortOrder} from './filter-sort.model';

@Injectable({
  providedIn: 'root',
})
export class FilterSortService {
  filterSortSubject: BehaviorSubject<FilterSort> = new BehaviorSubject<FilterSort>({
    sortOption: null,
    sortOrder: SortOrder.descending,
    filterCategory: null,
  });

  setFilterSort(state: FilterSort) {
    this.filterSortSubject.next(state);
  }
}
