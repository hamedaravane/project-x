import {Injectable} from '@angular/core';
import {User, UserDto, userDtoToDomain} from '@user/data-access/model/user.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  getMockUserInfo(): Observable<User> {
    const mockData: UserDto = {
      id: 1226574,
      type: 'business',
      first_name: 'المیرا',
      last_name: 'ثابتی',
      nick_name: 'elmira',
      english_first_name: 'Saabeti',
      english_last_name: 'elimiraaa',
      profile_photo_src: 'assets/mock/profile-photos/business-profile-photo.png',
      persian_business_name: 'گیان',
      english_business_name: 'gian flower',
      instagram_id: 'gianflowerr',
      email_address: 'elmirasaabeti@gmail.com',
      business_industry: 'Cinema',
      business_city: 'Shiraz',
      mobile_phone_number: '9017701599',
      business_address: 'خیابان سعدی، کوچه شهید حافظی ۱، پلاک ۱۴۱',
    };
    return of(userDtoToDomain(mockData));
  }
}
