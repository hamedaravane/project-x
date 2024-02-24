import {Injectable, inject} from '@angular/core';
import {Router} from '@angular/router';
import {
  DetailRegistrationForm,
  Gender,
  UserAuthInfo,
  UserType,
  UserTypeDetail,
  combineRegistrationProperties,
  combinedFormDataToCreateUserDto,
} from '@user/data-access/model/user.model';
import {AuthInfra} from '@authentication/infrastructure/auth.infra';
import {ProfessionEnum} from '@shared/data-access/models/category.model';
import {BehaviorSubject, Observable, filter, firstValueFrom} from 'rxjs';
import {MessageService} from '../../notification/data-access/message.service';

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
  private readonly messageService = inject(MessageService);
  private readonly route = inject(Router);

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

  submitInfluencerData(photo: File): void {
    this._submitInfluencerData(photo).then();
  }

  private async _submitInfluencerData(photo: File): Promise<void> {
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
    try {
      const updatePhoto = new File([photo], createUserDto.uuid);
      const formData = new FormData();
      formData.set('file', updatePhoto);
      await this.authInfra.register(createUserDto);
      await firstValueFrom(this.authInfra.uploadProfilePhoto(formData));
      this.messageService.success('شما با موفقیت ثبت نام شدید.');
      this.route.navigateByUrl('/auth/login').then();
    } catch (e) {
      this.messageService.error('در حال حاضر با مشکل مواجه شدیم. کمی بعدتر تلاش کنید.');
    }
  }
}
