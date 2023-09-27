import {influencerCategoryList} from '@shared/data-access/mock/mock';
import {BusinessValue, IndustryValue, SelectList} from '@shared/data-access/models/category.model';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SortOption, SortOrder} from '../data-access/filter-sort.model';
import {FilterSortService} from '../data-access/filter-sort.service';

@Component({
  standalone: true,
  selector: 'app-filter-sort-list',
  templateUrl: './filter-sort-list.component.html',
  imports: [NzGridModule, NzSelectModule, NgForOf, FormsModule, NgIf],
  styleUrls: ['./filter-sort-list.component.scss'],
})
export class FilterSortListComponent {
  private readonly filterSortService: FilterSortService = inject(FilterSortService);
  ascending: SortOrder = SortOrder.ascending;
  descending: SortOrder = SortOrder.descending;

  selectedSortOrder: SortOrder = this.descending;
  selectedSortOption: SelectList | null = null;
  selectedFilter: BusinessValue | null = null;

  sortList: SelectList[] = [
    {value: SortOption.name, label: 'نام'},
    {value: SortOption.category, label: 'دسته بندی'},
    {value: SortOption.rate, label: 'امتیاز'},
    {value: SortOption.fee, label: 'دستمزد'},
  ];

  filterList: SelectList[] = influencerCategoryList;

  setState(): void {
    this.filterSortService.setFilterSort({
      sortOrder: this.selectedSortOrder,
      sortOption: (this.selectedSortOption?.value as SortOption) ?? null,
      filterCategory: this.selectedFilter ?? null,
    });
  }
  toggleSortOrder(): void {
    this.selectedSortOrder =
      this.selectedSortOrder === SortOrder.ascending ? SortOrder.descending : SortOrder.ascending;
    this.setState();
  }
  selectSortOption(event: SelectList): void {
    this.selectedSortOption = event ?? null;
  }
  selectFilter(event: SelectList): void {
    this.selectedFilter = (event.value as BusinessValue) ?? null;
  }
}
