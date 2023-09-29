import {BehaviorSubject, Observable} from 'rxjs';
import {BusinessValue} from '@shared/data-access/models/category.model';
import {Injectable} from '@angular/core';
import {FilterSort, InfluencerSummary, SortOption, SortOrder} from './filter-sort.model';

@Injectable({
  providedIn: 'root',
})
export class FilterSortService {
  private readonly filterSortSubject: BehaviorSubject<FilterSort> = new BehaviorSubject<FilterSort>({
    sortOption: null,
    sortOrder: SortOrder.descending,
    filterCategory: null,
  });

  get filterSortState$(): Observable<FilterSort> {
    return this.filterSortSubject.asObservable();
  }

  setFilterSort(state: FilterSort): void {
    this.filterSortSubject.next(state);
  }

  filterInfluencersList(originalList: InfluencerSummary[], filter: BusinessValue | null): InfluencerSummary[] {
    return originalList.filter((item: InfluencerSummary): boolean => {
      if (filter) {
        return item.category === filter;
      }
      return true;
    });
  }

  categorizeInfluencersList(originalList: InfluencerSummary[], category: FilterSort | null): InfluencerSummary[] {
    const collator: Intl.Collator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: 'base',
      usage: 'sort',
    });

    if (category) {
      return originalList.sort((a: InfluencerSummary, b: InfluencerSummary) => {
        let comparison = 0;
        switch (category.sortOption) {
          case SortOption.rate:
            comparison = a.rate - b.rate;
            break;
          case SortOption.category:
            comparison = collator.compare(a.category, b.category);
            break;
          case SortOption.name:
            comparison = collator.compare(a.nickname, b.nickname);
            break;
          case SortOption.fee:
            // Add fee comparison logic here if needed
            break;
          default:
            break;
        }
        if (category.sortOrder === SortOrder.descending) {
          comparison = -comparison;
        }
        return comparison;
      });
    }
    return originalList;
  }

  filterSort(originalList: InfluencerSummary[], option: FilterSort): InfluencerSummary[] {
    const filteredList: InfluencerSummary[] = this.filterInfluencersList(originalList, option.filterCategory);
    return this.categorizeInfluencersList(filteredList, option);
  }
}
