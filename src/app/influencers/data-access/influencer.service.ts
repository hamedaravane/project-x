import {InfluencerDetail} from 'src/app/influencers/data-access/filter-sort.model';
import {influencerDetailMock} from '@shared/data-access/mock/mock';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfluencerService {
  influencersDetailList: InfluencerDetail[] = influencerDetailMock;
  getInfluencerDetailsById(id: string): InfluencerDetail {
    const influencer: InfluencerDetail | undefined = this.influencersDetailList.find(
      (influencerDetail: InfluencerDetail): boolean => {
        return influencerDetail.id === id;
      },
    );
    if (influencer) return influencer;
    throw new Error('influencer doesnt find');
  }
}
