import {Injectable} from '@angular/core';
import {
  CollaborationDto,
  CollaborationModel,
  collaborationItemDtoToDomain,
} from '@user/data-access/model/collaborations.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollaborationsDataService {
  getMockCollaborationsData(): Observable<CollaborationModel[]> {
    const mockData: CollaborationDto[] = [
      {
        collaboration_id: 23345,
        collaboration_item: 'ready_story',
        charge_value: 750_000,
        charge_iso_code_currency: 'IRT',
        status: 'done',
        collaboration_date: '2023-10-16T20:30:00.000+03:30',
        your_rate: 3,
        profile_photo_src: 'assets/mock/profile-photos/1.jpg',
        first_name: 'نگار',
        last_name: 'رجبی',
        nick_name: 'neg.r',
        collaborator_id: 1,
        is_favourite: true,
      },
      {
        collaboration_id: 24685,
        collaboration_item: 'gift_story_series',
        charge_value: 1_250_000,
        charge_iso_code_currency: 'IRT',
        status: 'pending',
        collaboration_date: '2023-10-26T21:30:00.000+03:30',
        your_rate: null,
        profile_photo_src: 'assets/mock/profile-photos/3.jpg',
        first_name: 'نگین',
        last_name: 'میرصالحی',
        nick_name: 'neginmirsalehi',
        collaborator_id: 1,
        is_favourite: true,
      },
    ];
    const response: CollaborationModel[] = [];
    for (const mockDataItem of mockData) {
      response.push(collaborationItemDtoToDomain(mockDataItem));
    }
    return of(response);
  }
}
