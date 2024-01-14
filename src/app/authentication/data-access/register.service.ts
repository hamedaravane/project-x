import {inject, Injectable} from '@angular/core';
import {
  combinedFormDataToCreateUserDto,
  combineRegistrationProperties,
  DetailRegistrationForm,
  Gender,
  UserAuthInfo,
  UserType,
  UserTypeDetail,
} from '@user/data-access/model/user.model';
import {AuthInfra} from '@authentication/infrastructure/auth.infra';
import {BehaviorSubject, filter, firstValueFrom, Observable} from 'rxjs';
import {ProfessionEnum} from '@shared/data-access/models/category.model';

@Injectable({
  providedIn: 'root',
})
/**
 * @Injectable({ providedIn: 'root' })
 * @description This service class is responsible for handling the registration process. It manages user types, basic
 *   user information, and influencer detail information.
 */
export class RegisterService {
  private readonly userTypeSubject = new BehaviorSubject<UserTypeDetail | null>(null);
  private readonly userAuthInfoSubject = new BehaviorSubject<UserAuthInfo | null>(null);
  private readonly detailRegistrationInfoSubject = new BehaviorSubject<DetailRegistrationForm | null>(null);
  private readonly authInfra = inject(AuthInfra);

  /**
   * Returns an observable of UserType. The observable filters out null values.
   * @returns {Observable<UserTypeDetail>}
   */
  get userType$(): Observable<UserTypeDetail> {
    return this.userTypeSubject.asObservable().pipe(filter(Boolean));
  }

  /**
   * Updates the UserTypeDetail and notifies all subscribers.
   * @param {UserTypeDetail} type The new user type to be set.
   */
  set userType$(type: UserTypeDetail) {
    this.userTypeSubject.next(type);
  }

  /**
   * Returns an observable for the UserAuthInfo. The observable filters out null values.
   * @returns {Observable<UserAuthInfo>} An observable stream of username & password.
   */
  get userAuthInfo$(): Observable<UserAuthInfo> {
    return this.userAuthInfoSubject.asObservable().pipe(filter(Boolean));
  }

  /**
   * Updates the UserBasicInfo and notifies all subscribers.
   * @param {UserAuthInfo} info The new user basic information to be set.
   */
  set userAuthInfo$(info: UserAuthInfo) {
    this.userAuthInfoSubject.next(info);
  }

  /**
   * @description Returns an observable for the InfluencerDetailInfo. The observable filters out null values.
   * @returns {Observable<DetailRegistrationForm>} An observable stream of influencer detail information.
   */
  get detailRegistrationProperties$(): Observable<DetailRegistrationForm> {
    return this.detailRegistrationInfoSubject.asObservable().pipe(filter(Boolean));
  }

  /**
   * Updates the InfluencerDetailInfo and notifies all subscribers.
   * @param {DetailRegistrationForm} info The new influencer detail information to be set.
   */
  set detailRegistrationProperties$(info: DetailRegistrationForm) {
    this.detailRegistrationInfoSubject.next(info);
  }

  private async _combineBasicInfo(): Promise<UserAuthInfo & UserType> {
    const authInfo = await firstValueFrom(this.userAuthInfo$);
    const userType = await firstValueFrom(this.userType$);
    return new Promise(() => ({...authInfo, ...userType}));
  }

  submitInfluencerData(): void {
    this._submitInfluencerData().then();
  }

  private async _submitInfluencerData(): Promise<void> {
    this.userAuthInfo$ = {email: 'hamedaravane@gmail.com', password: '11559933Aa!'};
    this.detailRegistrationProperties$ = {
      userType: UserType.INFLUENCER,
      persianInfluencerName: 'حامد',
      persianInfluencerLastName: 'ارغوان',
      englishInfluencerName: 'hamed',
      englishInfluencerLastName: 'arghavan',
      gender: Gender.MALE,
      influencerType: ProfessionEnum.Fashion,
      birthDate: new Date('1995-08-15'),
      address: null,
      city: 'Mashhad',
      instagramAccount: 'aboutpurple',
      mobilePhoneNumber: '+989017701599',
    };
    const userAuthInfo = await firstValueFrom(this.userAuthInfo$);
    const detailRegistrationProperties = await firstValueFrom(this.detailRegistrationProperties$);

    const combinedRegistrationForm = combineRegistrationProperties(userAuthInfo, detailRegistrationProperties);
    const createUserDto = combinedFormDataToCreateUserDto(combinedRegistrationForm);
    const response = await firstValueFrom(this.authInfra.register(createUserDto));
    if (response.isSuccess) {
      console.log('sent');
    }
  }
}
