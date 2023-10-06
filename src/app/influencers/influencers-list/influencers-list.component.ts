import {Observable, map} from 'rxjs';
import {influencersMockList} from '@shared/data-access/mock/mock';
import {CategoryToIconPipe} from '@shared/util/category-to-icon.pipe';
import {CategoryToLabelPipe} from '@shared/util/category-to-label.pipe';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzRateModule} from 'ng-zorro-antd/rate';
import {BidiModule} from '@angular/cdk/bidi';
import {AsyncPipe, NgForOf, NgOptimizedImage} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterOutlet} from '@angular/router';
import {listAnimation} from '../data-access/animations/animations';
import {FilterSortService} from '../data-access/filter-sort.service';
import {FilterSort, InfluencerSummary} from '../data-access/model/filter-sort.model';
import {FilterSortListComponent} from '../filter-sort/filter-sort-list.component';

@Component({
  standalone: true,
  selector: 'app-influencers-list',
  templateUrl: './influencers-list.component.html',
  imports: [
    NgForOf,
    NgOptimizedImage,
    NzRateModule,
    FormsModule,
    NzIconModule,
    BidiModule,
    CategoryToLabelPipe,
    CategoryToIconPipe,
    FilterSortListComponent,
    AsyncPipe,
    RouterLink,
    RouterOutlet,
  ],
  styleUrls: ['./influencers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [listAnimation],
})
export class InfluencersListComponent implements OnInit {
  private readonly filterSortService: FilterSortService = inject(FilterSortService);

  influencersList: InfluencerSummary[] = influencersMockList;
  filteredInfluencersList!: Observable<InfluencerSummary[]>;

  ngOnInit(): void {
    this.filteredInfluencersList = this.filterSortService.filterSortState$.pipe(
      map((filterSort: FilterSort) => {
        return this.filterSortService.filterSort(this.influencersList, filterSort);
      }),
    );
  }
}
