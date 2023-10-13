import {User} from '@user/data-access/model/user.model';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  getMockUserInfo(): Observable<User> {
    const mockData: User = {
      id: 1226574,
      type: 'business',
      firstName: 'المیرا',
      lastName: 'ثابتی',
      englishFirstName: 'elmira',
      englishLastName: 'Saabeti',
      nickName: 'elimiraaa',
      profilePhotoSrc: 'assets/mock/profile-photos/business-profile-photo.png',
    };
    return of(mockData);
  }
}
