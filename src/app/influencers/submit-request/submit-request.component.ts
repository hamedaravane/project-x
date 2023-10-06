import {Observable} from 'rxjs';
import {AsyncPipe, NgIf, NgOptimizedImage} from '@angular/common';
import {Component, OnInit, inject} from '@angular/core';
import {InfluencerService} from '../data-access/influencer.service';
import {InfluencerDetail} from '../data-access/model/filter-sort.model';

@Component({
  standalone: true,
  selector: 'app-submit-request',
  templateUrl: './submit-request.component.html',
  styleUrls: ['./submit-request.component.scss'],
  imports: [NgIf, AsyncPipe, NgOptimizedImage],
})
export class SubmitRequestComponent implements OnInit {
  private readonly influencerService: InfluencerService = inject(InfluencerService);
  selectedInfluencer$: Observable<InfluencerDetail> = this.influencerService.selectedInfluencer$;

  ngOnInit(): void {}
}
