import {influencerCategoryList} from '@shared/data-access/mock/mock';
import {SelectList} from '@shared/data-access/models/category.model';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SortOption, SortOrder} from '../data-access/filter-sort.model';

@Component({
  standalone: true,
  selector: 'app-filter-sort-list',
  templateUrl: './filter-sort-list.component.html',
  imports: [NzGridModule, NzSelectModule, NgForOf, FormsModule, NgIf],
  styleUrls: ['./filter-sort-list.component.scss'],
})
export class FilterSortListComponent {
  ascending = SortOrder.ascending;
  descending = SortOrder.descending;
  sortOrder = this.descending;

  sortList: SelectList[] = [
    {value: SortOption.name, label: 'نام'},
    {value: SortOption.category, label: 'دسته بندی'},
    {value: SortOption.rate, label: 'امتیاز'},
    {value: SortOption.fee, label: 'دستمزد'},
  ];

  filterList: SelectList[] = influencerCategoryList;

  toggleSortOrder() {
    this.sortOrder = this.sortOrder === SortOrder.ascending ? SortOrder.descending : SortOrder.ascending;
  }
}
