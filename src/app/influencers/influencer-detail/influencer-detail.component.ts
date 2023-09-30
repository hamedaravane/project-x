import {NgOptimizedImage} from '@angular/common';
import {Component, OnInit, inject} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {InfluencerDetail} from '../data-access/filter-sort.model';
import {InfluencerService} from '../data-access/influencer.service';

@Component({
  standalone: true,
  selector: 'app-influencer-detail',
  templateUrl: './influencer-detail.component.html',
  styleUrls: ['./influencer-detail.component.scss'],
  imports: [NgOptimizedImage, RouterOutlet],
})
export class InfluencerDetailComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly influencerService: InfluencerService = inject(InfluencerService);
  influencerId: string | null = this.route.snapshot.paramMap.get('id');
  influencer!: InfluencerDetail;

  ngOnInit(): void {
    this.influencer = this.influencerService.getInfluencerDetailsById(this.influencerId);
  }
}
