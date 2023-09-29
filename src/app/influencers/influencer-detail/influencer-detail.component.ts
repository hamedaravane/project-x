import {influencerDetailMock} from '@shared/data-access/mock/mock';
import {NgOptimizedImage} from '@angular/common';
import {Component} from '@angular/core';
import {InfluencerDetail} from '../data-access/filter-sort.model';

@Component({
  standalone: true,
  selector: 'app-influencer-detail',
  templateUrl: './influencer-detail.component.html',
  styleUrls: ['./influencer-detail.component.scss'],
  imports: [NgOptimizedImage],
})
export class InfluencerDetailComponent {
  influencerDetailInfo: InfluencerDetail[] = influencerDetailMock;
}
