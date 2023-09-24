import {Component} from '@angular/core';
import {influencersList} from '@shared/data-access/mock/mock';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {NzRateModule} from 'ng-zorro-antd/rate';
import {FormsModule} from '@angular/forms';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {BidiModule} from '@angular/cdk/bidi';

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
    BidiModule
  ],
  styleUrls: ['./influencers-list.component.scss']
})
export class InfluencersListComponent {
  influencersList = influencersList;
}
