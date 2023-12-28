import {Injectable, inject} from '@angular/core';
import {
  InfluencerDetailInfo,
  InfluencerFormValue,
  UserBasicInfo,
  UserTypeDetail,
  influencerFormValueToInfluencerDetailInfo,
} from '@user/data-access/model/user.model';
import {AuthInfra} from '@authentication/infrastructure/auth.infra';
import {BehaviorSubject, Observable, filter} from 'rxjs';

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
  private readonly influencerDetailInfoSubject = new BehaviorSubject<InfluencerDetailInfo | null>(null);
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
   * @returns {Observable<InfluencerDetailInfo>} An observable stream of influencer detail information.
   */
  get influencerDetailInfo$(): Observable<UserBasicInfo> {
    return this.userBasicInfoSubject.asObservable().pipe(filter(Boolean));
  }
  /**
   * Updates the InfluencerDetailInfo and notifies all subscribers.
   * @param {InfluencerDetailInfo} info The new influencer detail information to be set.
   */
  set influencerDetailInfo$(info: InfluencerDetailInfo) {
    this.influencerDetailInfoSubject.next(info);
  }

  /**
   * @description set data into influencerDetailInfo$ state from formRawData
   * @param formValue {InfluencerFormValue}
   */
  setFormValueIntoInfluencerDetailInfo(formValue: InfluencerFormValue): void {
    this.influencerDetailInfo$ = influencerFormValueToInfluencerDetailInfo(formValue);
  }

  submitInfluencerData(): void {}
}
