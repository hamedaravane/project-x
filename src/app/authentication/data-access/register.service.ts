import {inject, Injectable} from '@angular/core';
import {
  combinedFormDataToCreateUserDto,
  Gender,
  UserAuthProperties,
  UserType,
  UserTypeDetail,
  UserTypeLabel,
} from '@user/data-access/model/user.model';
import {AuthInfra} from '@authentication/infrastructure/auth.infra';
import {BehaviorSubject, combineLatest, filter, firstValueFrom, map, Observable} from 'rxjs';
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
  private readonly userAuthInfoSubject = new BehaviorSubject<UserAuthProperties | null>(null);
  private readonly detailRegistrationInfoSubject = new BehaviorSubject<DetailedInfoRegistration | null>(null);
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
   * @returns {Observable<UserAuthProperties>} An observable stream of username & password.
   */
  get userAuthInfo$(): Observable<UserAuthProperties> {
    return this.userAuthInfoSubject.asObservable().pipe(filter(Boolean));
  }

  /**
   * Updates the UserBasicInfo and notifies all subscribers.
   * @param {UserAuthProperties} info The new user basic information to be set.
   */
  set userAuthInfo$(info: UserAuthProperties) {
    this.userAuthInfoSubject.next(info);
  }

  /**
   * @description Returns an observable for the InfluencerDetailInfo. The observable filters out null values.
   * @returns {Observable<DetailedInfoRegistration>} An observable stream of influencer detail information.
   */
  get detailInfoRegistration$(): Observable<DetailedInfoRegistration> {
    return this.detailRegistrationInfoSubject.asObservable().pipe(filter(Boolean));
  }

  /**
   * Updates the InfluencerDetailInfo and notifies all subscribers.
   * @param {DetailedInfoRegistration} info The new influencer detail information to be set.
   */
  set detailInfoRegistration$(info: DetailedInfoRegistration) {
    this.detailRegistrationInfoSubject.next(info);
  }

  private async _combineBasicInfo(): Promise<UserAuthProperties & UserType> {
    const authInfo = await firstValueFrom(this.userAuthInfo$);
    const userType = await firstValueFrom(this.userType$);
    return new Promise(() => ({...authInfo, ...userType}));
  }

  submitInfluencerData(): void {
    this._submitInfluencerData().then();
  }

  private async _submitInfluencerData(): Promise<void> {
    this.userType$ = {value: UserType.INFLUENCER, label: UserTypeLabel.INFLUENCER};
    this.userAuthInfo$ = {email: 'hamedaravane@gmail.com', password: '11559933Aa!'};
    this.detailInfoRegistration$ = {
      persianName: 'حامد',
      persianLastName: 'ارغوان',
      name: 'hamed',
      lastName: 'arghavan',
      birthDate: new Date(),
      gender: Gender.MALE,
      influencerType: ProfessionEnum.Actor,
      instagramAccount: 'aboutpurple',
      twitterAccount: null,
      country: null,
      state: null,
      city: 'Mashhad',
      mobilePhoneNumber: '+989017701599',
      homePhoneNumber: null,
    };
    const combinedValues = await firstValueFrom(
      combineLatest([this.userType$, this.userAuthInfo$, this.detailInfoRegistration$]).pipe(
        map(([userType, userBasicInfo, influencerDetailInfo]) => {
          return combineRegistrationData(userType, userBasicInfo, influencerDetailInfo);
        }),
      ),
    );
    const createUserDto = combinedFormDataToCreateUserDto(combinedValues);
    const response = await firstValueFrom(this.authInfra.register(createUserDto));
    if (response.isSuccess) {
      console.log('sent');
    }
  }
}
