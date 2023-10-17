import {Injectable} from '@angular/core';
import {InfluencerSummary} from '@influencers/data-access/model/filter-sort.model';
import {BusinessValue} from '@shared/data-access/models/category.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfluencerDataService {
  getMockInfluencersList(): Observable<InfluencerSummary[]> {
    const mockData: InfluencerSummary[] = [
      {
        id: '1',
        nickname: 'neg.r',
        instagramId: 'neg.r',
        profilePhotoSrc: 'assets/mock/profile-photos/1.jpg',
        rate: 4,
        category: BusinessValue.Food,
      },
      {
        id: '2',
        nickname: 'Hamed Purple',
        instagramId: 'aboutpurple',
        profilePhotoSrc: 'assets/mock/profile-photos/2.jpg',
        rate: 2.5,
        category: BusinessValue.Fitness,
      },
      {
        id: '3',
        nickname: 'نگین میرصالحی',
        instagramId: 'neginmirsalehi',
        profilePhotoSrc: 'assets/mock/profile-photos/3.jpg',
        rate: 4,
        category: BusinessValue.Fashion,
      },
      {
        id: '4',
        nickname: 'آیسان اسلامی',
        instagramId: 'aisan_eslami',
        profilePhotoSrc: 'assets/mock/profile-photos/4.jpg',
        rate: 3.5,
        category: BusinessValue.Fitness,
      },
      {
        id: '5',
        nickname: 'نیوشا',
        instagramId: 'niusha_sss',
        profilePhotoSrc: 'assets/mock/profile-photos/5.jpg',
        rate: 1,
        category: BusinessValue.Book,
      },
      {
        id: '6',
        nickname: 'سپیده اخلاقی',
        instagramId: 'sssepii',
        profilePhotoSrc: 'assets/mock/profile-photos/6.jpg',
        rate: 2.5,
        category: BusinessValue.Beauty,
      },
    ];
    return of(mockData);
  }
}
