import {Injectable} from '@angular/core';
import {User} from '@user/data-access/model/user.model';
import {Observable, of} from 'rxjs';

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
      persianBusinessName: 'گیان',
      englishBusinessName: 'gian flower',
      instagramAccountId: 'gianflowerr',
      emailAddress: 'elmirasaabeti@gmail.com',
      businessIndustry: '',
      businessCity: 'Shiraaz',
      mobilePhoneNumber: '+989017701599',
      businessAddress: 'خیابان سعدی، کوچه شهید حافظی ۱، پلاک ۱۴۱',
    };
    return of(mockData);
  }
}
