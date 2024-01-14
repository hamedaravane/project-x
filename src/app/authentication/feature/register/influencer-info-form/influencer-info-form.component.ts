import {BidiModule} from '@angular/cdk/bidi';
import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {DetailedInfoRegistration, Gender, UserType, UserTypeDetail} from '@user/data-access/model/user.model';
import {RegisterService} from '@authentication/data-access/register.service';
import {CitiesListService} from '@shared/data-access/cities-list.service';
import {influencerCategoryList} from '@shared/data-access/models/category.model';
import {persianCharValidator} from '@shared/data-access/validators/custom-validators';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {PurpleDate} from '@date/data-access/model/date.model';
import {PurpleDatePickerComponent} from '@date/ui/purple-date-picker/purple-date-picker.component';
import {Observable, firstValueFrom} from 'rxjs';
import {ProfessionEnum} from '@shared/data-access/models/category.model';

@Component({
  standalone: true,
  selector: 'app-influencer-info-form',
  templateUrl: './influencer-info-form.component.html',
  imports: [
    BidiModule,
    NgForOf,
    NgIf,
    NzButtonModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzSelectModule,
    NzWaveModule,
    ReactiveFormsModule,
    RouterLink,
    PurpleDatePickerComponent,
  ],
  styleUrls: ['./influencer-info-form.component.scss'],
})
export class InfluencerInfoFormComponent {
  private readonly citiesListService = inject(CitiesListService);
  private readonly router = inject(Router);
  private readonly registerService = inject(RegisterService);
  userType$: Observable<UserTypeDetail> = this.registerService.userType$;

  cityList = this.citiesListService.cityList;

  influencerTypeList = influencerCategoryList;

  influencerInfoForm: FormGroup = new FormGroup({
    persianInfluencerName: new FormControl<string | null>(null, [Validators.required, persianCharValidator]),
    persianInfluencerLastName: new FormControl<string | null>(null, [Validators.required, persianCharValidator]),
    englishInfluencerName: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/),
    ]),
    englishInfluencerLastName: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/),
    ]),
    birthDate: new FormControl<PurpleDate | null>(null, Validators.required),
    gender: new FormControl<Gender>(Gender.MALE, Validators.required),
    influencerType: new FormControl<ProfessionEnum | null>(null, Validators.required),
    instagramAccount: new FormControl<string | null>(null, Validators.pattern(/^[a-zA-Z0-9._]{1,30}$/)),
    twitterAccount: new FormControl<string | null>(null, Validators.pattern(/^[a-zA-Z_][a-zA-Z0-9_]{0,14}$/)),
    city: new FormControl<any | null>(null, Validators.required),
    address: new FormControl<string | null>(null),
    mobilePhoneNumber: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/^9[0-9]{9}$/)]),
  });

  persianInfluencerNameControl = this.influencerInfoForm.get('persianInfluencerName') as AbstractControl<string | null>;
  persianInfluencerLastNameControl = this.influencerInfoForm.get('persianInfluencerName') as AbstractControl<
    string | null
  >;
  englishInfluencerNameControl = this.influencerInfoForm.get('englishInfluencerName') as AbstractControl<string | null>;
  englishInfluencerLastNameControl = this.influencerInfoForm.get('englishInfluencerName') as AbstractControl<
    string | null
  >;
  birthDateControl = this.influencerInfoForm.get('birthDate') as AbstractControl<PurpleDate | null>;
  genderControl = this.influencerInfoForm.get('gender') as AbstractControl<Gender>;
  influencerTypeControl = this.influencerInfoForm.get('influencerType') as AbstractControl<ProfessionEnum | null>;
  instagramAccountControl = this.influencerInfoForm.get('instagramAccount') as AbstractControl<string | null>;
  twitterAccountControl = this.influencerInfoForm.get('instagramAccount') as AbstractControl<string | null>;
  cityControl = this.influencerInfoForm.get('influencerCity') as AbstractControl<any | null>;
  mobilePhoneNumberControl = this.influencerInfoForm.get('mobilePhoneNumber') as AbstractControl<string | null>;

  submitForm(): void {
    const formValue: DetailedInfoRegistration = this.influencerInfoForm.value;
    firstValueFrom(this.userType$).then(type => {
      if (type.value === UserType.INFLUENCER) {
        this.registerService.setFormValueIntoInfluencerDetailInfo(formValue);
      }
    });
    this.router.navigateByUrl('/auth/register/select-profile-photo');
  }
}
