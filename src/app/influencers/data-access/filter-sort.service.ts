import {Injectable} from '@angular/core';
import {BusinessValue} from '@shared/data-access/models/category.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {FilterSort, InfluencerSummary, SortOption, SortOrder} from './model/filter-sort.model';

@Injectable({
  providedIn: 'root',
})
export class FilterSortService {
  private readonly filterSortSubject: BehaviorSubject<FilterSort> = new BehaviorSubject<FilterSort>({
    sortOption: null,
    sortOrder: SortOrder.descending,
    filterCategory: null,
  });
  private filteredInfluencerSummaryListSubject = new BehaviorSubject<InfluencerSummary[]>([] as InfluencerSummary[]);

  get filteredInfluencerSummaryList$(): Observable<InfluencerSummary[]> {
    return this.filteredInfluencerSummaryListSubject.asObservable();
  }
  set filteredInfluencerSummaryList$(value: InfluencerSummary[]) {
    this.filteredInfluencerSummaryListSubject.next(value);
  }
  get filterSortState$(): Observable<FilterSort> {
    return this.filterSortSubject.asObservable();
  }
  set filterSortState$(state: FilterSort) {
    this.filterSortSubject.next(state);
  }

  filterSort(originalList: InfluencerSummary[], option: FilterSort): void {
    const filteredList: InfluencerSummary[] = this.filterInfluencersList(originalList, option.filterCategory);
    this.filteredInfluencerSummaryList$ = this.categorizeInfluencersList(filteredList, option);
  }

  private filterInfluencersList(originalList: InfluencerSummary[], filter: BusinessValue | null): InfluencerSummary[] {
    return originalList.filter((item: InfluencerSummary): boolean => {
      if (filter) {
        return item.category === filter;
      }
      return true;
    });
  }

  private categorizeInfluencersList(
    originalList: InfluencerSummary[],
    category: FilterSort | null,
  ): InfluencerSummary[] {
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
}
