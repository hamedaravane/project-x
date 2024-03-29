import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FilterSortService} from '@influencers/data-access/filter-sort.service';
import {SortOption, SortOrder} from '@influencers/data-access/model/filter-sort.model';
import {influencerCategoryList} from '@shared/data-access/models/category.model';
import {LabelValue, ProfessionEnum} from '@shared/data-access/models/category.model';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzSelectModule} from 'ng-zorro-antd/select';

@Component({
  standalone: true,
  selector: 'app-filter-sort',
  templateUrl: './filter-sort-list.component.html',
  imports: [NzGridModule, NzSelectModule, NgForOf, FormsModule, NgIf],
  styleUrls: ['./filter-sort-list.component.scss'],
})
export class FilterSortListComponent {
  private readonly filterSortService: FilterSortService = inject(FilterSortService);
  ascending: SortOrder = SortOrder.ascending;
  descending: SortOrder = SortOrder.descending;

  selectedSortOrder: SortOrder = this.descending;
  selectedSortOption: SortOption | null = null;
  selectedFilter: ProfessionEnum | null = null;

  sortList: LabelValue<SortOption>[] = [
    {value: null, label: 'همه'},
    {value: SortOption.name, label: 'نام'},
    {value: SortOption.category, label: 'دسته بندی'},
    {value: SortOption.rate, label: 'امتیاز'},
    {value: SortOption.fee, label: 'دستمزد'},
  ];

  filterList: LabelValue<ProfessionEnum>[] = [{value: null, label: 'همه'}, ...influencerCategoryList];

  setState(): void {
    this.filterSortService.filterSortState$ = {
      sortOrder: this.selectedSortOrder,
      sortOption: this.selectedSortOption,
      filterCategory: this.selectedFilter,
    };
  }
  selectFilter(event: ProfessionEnum): void {
    this.selectedFilter = event;
    this.setState();
  }
  selectSortOption(event: SortOption): void {
    this.selectedSortOption = event;
    this.setState();
  }
  toggleSortOrder(): void {
    if (this.selectedSortOption) {
      this.selectedSortOrder =
        this.selectedSortOrder === SortOrder.ascending ? SortOrder.descending : SortOrder.ascending;
      this.setState();
    }
  }
}
