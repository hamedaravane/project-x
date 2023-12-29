import {Injectable, inject} from '@angular/core';
import {
  InfluencerFormValue,
  InfluencerRegistrationForm,
  UserBasicInfo,
  UserTypeDetail,
  influencerFormValueToInfluencerDetailInfo,
  randomizeUserEntityMock,
} from '@user/data-access/model/user.model';
import {AuthInfra} from '@authentication/infrastructure/auth.infra';
import {BehaviorSubject, Observable, filter, firstValueFrom} from 'rxjs';

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
  private readonly userBasicInfoSubject = new BehaviorSubject<UserBasicInfo | null>(null);
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
   * @returns {Observable<UserBasicInfo>} An observable stream of user basic information.
   */
  get userBasicInfo$(): Observable<UserBasicInfo> {
    return this.userBasicInfoSubject.asObservable().pipe(filter(Boolean));
  }
  /**
   * Updates the UserBasicInfo and notifies all subscribers.
   * @param {UserBasicInfo} info The new user basic information to be set.
   */
  set userBasicInfo$(info: UserBasicInfo) {
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
   * @param formValue {InfluencerFormValue}
   */
  setFormValueIntoInfluencerDetailInfo(formValue: InfluencerFormValue): void {
    this.influencerDetailInfo$ = influencerFormValueToInfluencerDetailInfo(formValue);
  }

  submitInfluencerData(): void {
    this._submitInfluencerData().then();
  }

  private async _submitInfluencerData(): Promise<void> {
    console.log('async operation...');
    /*const combinedValues = await firstValueFrom(
      combineLatest([this.userType$, this.userBasicInfo$, this.influencerDetailInfo$]).pipe(
        map(([userType, userBasicInfo, influencerDetailInfo]) => {
          return combineInfluencerInfo(userType, userBasicInfo, influencerDetailInfo);
        }),
      ),
    );*/
    const combinedValues = await firstValueFrom(randomizeUserEntityMock());
    console.log('user entity model created...');
    const response = await firstValueFrom(this.authInfra.register(combinedValues));
    if (response.isSuccess) {
      console.log('sent');
    }
  }
}
