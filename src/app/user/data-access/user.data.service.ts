import {Injectable} from '@angular/core';
import {
  Gender,
  MaritalStatus,
  UserDto,
  UserEntity,
  UserType,
  userDtoToEntity,
} from '@user/data-access/model/user.model';
import {ProfessionEnum} from '@shared/data-access/models/category.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  getMockUserInfo(): Observable<UserEntity> {
    const mockData: UserDto = {
      type: UserType.INFLUENCER,
      uuid: '1226574',
      email: 'elmirasaabeti@gmail.com',
      profile_photo_src: 'assets/mock/profile-photos/business-profile-photo.png',
      mobile_phone_number: '9017701599',
      country: 'Iran',
      state: 'Shiraz',
      city: 'Shiraz',
      address: 'خیابان سعدی، کوچه شهید حافظی ۱، پلاک ۱۴۱',
      postal_code: '99113448',
      influencer_type: ProfessionEnum.Actor,
      first_name: 'Saabeti',
      last_name: 'elimiraaa',
      persian_first_name: 'المیرا',
      persian_last_name: 'ثابتی',
      national_id_number: '0923269274',
      national_registration_code: '0923269274',
      instagram_username: 'gianflowerr',
      twitter_username: 'gianflowerr',
      birth: new Date('1995-08-15'),
      gender: Gender.MALE,
      maritalStatus: MaritalStatus.SINGLE,
    };
    return of(userDtoToEntity(mockData));
  }
}
