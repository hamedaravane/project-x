import {Observable, Subject} from 'rxjs';
import {influencerDetailMock} from '@shared/data-access/mock/mock';
import {Injectable} from '@angular/core';
import {InfluencerDetail} from './model/filter-sort.model';

@Injectable({
  providedIn: 'root',
})
export class InfluencerService {
  influencersDetailList: InfluencerDetail[] = influencerDetailMock;
  private readonly selectedInfluencerSubject$: Subject<InfluencerDetail> = new Subject<InfluencerDetail>();
  getInfluencerDetailsById(id: string | null): InfluencerDetail {
    const influencer: InfluencerDetail | undefined = this.influencersDetailList.find(
      (influencerDetail: InfluencerDetail): boolean => {
        return influencerDetail.id === id;
      },
    );
    if (influencer) return influencer;
    throw new Error('influencer doesnt find');
  }
  get selectedInfluencer$(): Observable<InfluencerDetail> {
    return this.selectedInfluencerSubject$.asObservable();
  }
  selectInfluencer(value: InfluencerDetail): void {
    this.selectedInfluencerSubject$.next(value);
  }
}
