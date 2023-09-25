import {influencersList} from '@shared/data-access/mock/mock';
import {CategoryToIconPipe} from '@shared/util/category-to-icon.pipe';
import {CategoryToLabelPipe} from '@shared/util/category-to-label.pipe';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzRateModule} from 'ng-zorro-antd/rate';
import {BidiModule} from '@angular/cdk/bidi';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FilterSortListComponent} from '../filter-sort-list/filter-sort-list.component';

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
  ],
  styleUrls: ['./influencers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfluencersListComponent {
  influencersList = influencersList;
}
