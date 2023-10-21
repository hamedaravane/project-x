import {Injectable, inject} from '@angular/core';
import {InfluencerDataService} from '@influencers/data-access/influencer.data.service';
import {influencerDetailMock} from '@shared/data-access/mock/mock';
import {BehaviorSubject, Observable} from 'rxjs';
import {InfluencerDetail, InfluencerSummary} from './model/filter-sort.model';

@Injectable({
  providedIn: 'root',
})
export class InfluencerService {
  influencersDetailList: InfluencerDetail[] = influencerDetailMock;
  private readonly influencerDataService: InfluencerDataService = inject(InfluencerDataService);
  private readonly selectedInfluencerSubject$: BehaviorSubject<InfluencerDetail | null> =
    new BehaviorSubject<InfluencerDetail | null>(null);
  getInfluencerDetailsById(id: string | null): InfluencerDetail {
    const influencer: InfluencerDetail | undefined = this.influencersDetailList.find(
      (influencerDetail: InfluencerDetail): boolean => {
        return influencerDetail.id === id;
      },
    );
    if (influencer) return influencer;
    throw new Error('influencer doesnt find');
  }
  get selectedInfluencer$(): Observable<InfluencerDetail | null> {
    return this.selectedInfluencerSubject$.asObservable();
  }
  set selectedInfluencer$(value: InfluencerDetail) {
    this.selectedInfluencerSubject$.next(value);
  }
  getInfluencerSummaryList(): Observable<InfluencerSummary[]> {
    return this.influencerDataService.getMockInfluencerSummaryList();
  }
}
