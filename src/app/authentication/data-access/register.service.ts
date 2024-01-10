import {inject, Injectable} from '@angular/core';
import {combinedFormDataToCreateUserDto, combineInfluencerInfo, Gender, InfluencerFormRawValue, influencerFormRawValueToInfluencerDetailInfo, InfluencerRegistrationForm, UserAuthInfo, UserType, UserTypeDetail, UserTypeLabel} from '@user/data-access/model/user.model';
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
  private readonly userBasicInfoSubject = new BehaviorSubject<UserAuthInfo | null>(null);
  private readonly influencerDetailInfoSubject = new BehaviorSubject<InfluencerRegistrationForm | null>(null);
  private readonly authInfra = inject(AuthInfra);

  /**
   * Returns an observable for the UserTypeDetail. The observable filters out null values.
   * @returns {Observable<UserTypeDetail>} An observable stream of user type details.
   */
  get userType$(): Observable<UserTypeDetail> {
    return this.userTypeSubject.asObservable().pipe(filter(Boolean));
  }
  /**
   * Updates the UserTypeDetail and notifies all subscribers.
   * @param {UserTypeDetail} type The new user type detail to be set.
   */
  set userType$(type: UserTypeDetail) {
    this.userTypeSubject.next(type);
  }
  /**
   * Returns an observable for the UserBasicInfo. The observable filters out null values.
   * @returns {Observable<UserAuthInfo>} An observable stream of user basic information.
   */
  get userBasicInfo$(): Observable<UserAuthInfo> {
    return this.userBasicInfoSubject.asObservable().pipe(filter(Boolean));
  }
  /**
   * Updates the UserBasicInfo and notifies all subscribers.
   * @param {UserAuthInfo} info The new user basic information to be set.
   */
  set userBasicInfo$(info: UserAuthInfo) {
    this.userBasicInfoSubject.next(info);
  }
  /**
   * @description Returns an observable for the InfluencerDetailInfo. The observable filters out null values.
   * @returns {Observable<InfluencerRegistrationForm>} An observable stream of influencer detail information.
   */
  get influencerDetailInfo$(): Observable<InfluencerRegistrationForm> {
    return this.influencerDetailInfoSubject.asObservable().pipe(filter(Boolean));
  }
  /**
   * Updates the InfluencerDetailInfo and notifies all subscribers.
   * @param {InfluencerRegistrationForm} info The new influencer detail information to be set.
   */
  set influencerDetailInfo$(info: InfluencerRegistrationForm) {
    this.influencerDetailInfoSubject.next(info);
  }

  /**
   * @description set data into influencerDetailInfo$ state from formRawData
   * @param formValue {InfluencerFormRawValue}
   */
  setFormValueIntoInfluencerDetailInfo(formValue: InfluencerFormRawValue): void {
    this.influencerDetailInfo$ = influencerFormRawValueToInfluencerDetailInfo(formValue);
  }

  submitInfluencerData(): void {
    this._submitInfluencerData().then();
  }

  private async _submitInfluencerData(): Promise<void> {
    console.log('fill up the values of registration steps...');
    this.userType$ = {value: UserType.INFLUENCER, label: UserTypeLabel.INFLUENCER};
    this.userBasicInfo$ = {email: 'hamedaravane@gmail.com', password: '11559933Aa!'};
    this.influencerDetailInfo$ = {
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
      combineLatest([this.userType$, this.userBasicInfo$, this.influencerDetailInfo$]).pipe(
        map(([userType, userBasicInfo, influencerDetailInfo]) => {
          return combineInfluencerInfo(userType, userBasicInfo, influencerDetailInfo);
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
