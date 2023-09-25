import {Component} from '@angular/core';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NgForOf, NgIf} from '@angular/common';
import {SelectList, SortOption, SortOrder} from '../data-access/filter-sort.model';
import {influencerCategoryList} from '@shared/data-access/mock/mock';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-filter-sort-list',
  templateUrl: './filter-sort-list.component.html',
  imports: [
    NzGridModule,
    NzSelectModule,
    NgForOf,
    FormsModule,
    NgIf
  ],
  styleUrls: ['./filter-sort-list.component.scss']
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

  filterList = influencerCategoryList;

  toggleSortOrder() {
    switch (this.sortOrder) {
      case SortOrder.ascending:
        this.sortOrder = SortOrder.descending;
        break;
      case SortOrder.descending:
        this.sortOrder = SortOrder.ascending;
        break;
    }
  }
}
