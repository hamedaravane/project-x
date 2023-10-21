import {BidiModule} from '@angular/cdk/bidi';
import {AsyncPipe, NgForOf, NgOptimizedImage} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterOutlet} from '@angular/router';
import {InfluencerService} from '@influencers/data-access/influencer.service';
import {FilterSortListComponent} from '@influencers/feature/filter-sort/filter-sort-list.component';
import {listAnimation} from '@shared/data-access/animations/animations';
import {CategoryToIconPipe} from '@shared/util/pipes/category-to-icon.pipe';
import {CategoryToLabelPipe} from '@shared/util/pipes/category-to-label.pipe';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzRateModule} from 'ng-zorro-antd/rate';
import {Observable} from 'rxjs';
import {FilterSortService} from 'src/app/influencers/data-access/filter-sort.service';
import {InfluencerSummary} from 'src/app/influencers/data-access/model/filter-sort.model';

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
export class InfluencersListComponent {
  private readonly filterSortService: FilterSortService = inject(FilterSortService);
  private readonly influencerService: InfluencerService = inject(InfluencerService);

  influencerSummary$: Observable<InfluencerSummary[]> = this.influencerService.getInfluencerSummaryList();
  filteredInfluencerList$!: Observable<InfluencerSummary[]>;

  /*ngOnInit(): void {
    this.filteredInfluencerList$ = this.filterSortService.filterSortState$.pipe(
      map((filterSort: FilterSort) => {
        return this.filterSortService.filterSort(this.influencerSummary$, filterSort);
      }),
    );
  }*/
}
