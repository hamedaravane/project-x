import {BidiModule} from '@angular/cdk/bidi';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterOutlet} from '@angular/router';
import {InfluencerService} from '@influencers/data-access/influencer.service';
import {InfluencerSummary} from '@influencers/data-access/model/filter-sort.model';
import {FilterSortListComponent} from '@influencers/feature/filter-sort/filter-sort-list.component';
import {listAnimation} from '@shared/data-access/animations/animations';
import {PullToRefreshComponent} from '@shared/ui/pull-to-refresh/pull-to-refresh.component';
import {SkeletonComponent} from '@shared/ui/skeleton/skeleton.component';
import {CategoryToIconPipe} from '@shared/util/pipes/category-to-icon.pipe';
import {CategoryToLabelPipe} from '@shared/util/pipes/category-to-label.pipe';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzRateModule} from 'ng-zorro-antd/rate';
import {Observable} from 'rxjs';

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
    PullToRefreshComponent,
    NgIf,
    SkeletonComponent,
  ],
  styleUrls: ['./influencers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [listAnimation],
})
export class InfluencersListComponent implements OnInit {
  private readonly influencerService: InfluencerService = inject(InfluencerService);
  influencerSummaryList$: Observable<InfluencerSummary[]> = this.influencerService.influencerSummaryList$;
  influencerSummaryListLoading$: Observable<boolean> = this.influencerService.influencerSummaryListLoading$;

  ngOnInit(): void {
    this.influencerService.getInfluencerSummaryList();
  }

  fetchData(): void {
    this.influencerService.getInfluencerSummaryList();
  }
}
