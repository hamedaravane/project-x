import {Component, inject} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {BidiModule} from "@angular/cdk/bidi";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {RegisterService} from "../data-access/register.service";
import {CitiesListService} from "../data-access/cities-list.service";
import {persianCharValidator} from "@shared/data-access/validators/custom-validators";
import {NzI18nService, fa_IR} from 'ng-zorro-antd/i18n';
import {CustomDatePickerComponent} from "@shared/ui/custom-date-picker/custom-date-picker.component";

@Component({
  standalone: true,
  selector: 'app-influencer-info-form',
  templateUrl: './influencer-info-form.component.html',
  imports: [
    AsyncPipe,
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
    CustomDatePickerComponent
  ],
  styleUrls: ['./influencer-info-form.component.scss']
})
export class InfluencerInfoFormComponent {
  private readonly registerService = inject(RegisterService);
  private readonly citiesListService = inject(CitiesListService);
  userType = this.registerService.UserTypeState;
  cityList = this.citiesListService.cityList;

  constructor(private readonly i18n: NzI18nService) {
    this.i18n.setLocale(fa_IR);
  }

  influencerTypeList: { value: any | null, label: string | number | null }[] = [
    {value: 'Restaurant & Cafe', label: 'کافه و رستوران'},
    {value: 'Beauty', label: ' آرایش و زیبایی'},
    {value: 'Fashion', label: 'لباس و مد'},
    {value: 'Gym/Fitness', label: 'ورزشی'},
    {value: 'Retail', label: 'خرده فروشی'},
    {value: 'Bookstore', label: 'کتاب فروشی'},
    {value: 'Grocery', label: 'مواد غذایی'},
    {value: 'Cinema/Theater', label: 'سینما تئاتر'},
    {value: 'Jewelry', label: 'طلا و جواهر'},
    {value: 'Pharmacy', label: 'داروسازی'},
    {value: 'Flower Shop', label: 'فروشگاه گل'},
    {value: 'Other', label: 'دیگر'},
  ];

  influencerInfoForm = new FormGroup({
    persianInfluencerName: new FormControl<string | null>(null, [Validators.required, persianCharValidator]),
    persianInfluencerLastName: new FormControl<string | null>(null, [Validators.required, persianCharValidator]),
    englishInfluencerName: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]),
    englishInfluencerLastName: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]),
    influencerType: new FormControl<string | null>(null, Validators.required),
    instagramAccount: new FormControl<string | null>(null, Validators.pattern(/^[a-zA-Z0-9._]{1,30}$/)),
    twitterAccount: new FormControl<string | null>(null, Validators.pattern(/^[a-zA-Z_][a-zA-Z0-9_]{0,14}$/)),
    influencerCity: new FormControl<any | null>(null, Validators.required),
    mobilePhoneNumber: new FormControl<number | null>(null, [Validators.required, Validators.pattern(/^9[0-9]{9}$/)])
  });

  persianInfluencerName = this.influencerInfoForm.get('persianInfluencerName') as AbstractControl<string | null>;
  persianInfluencerLastName = this.influencerInfoForm.get('persianInfluencerName') as AbstractControl<string | null>;
  englishInfluencerName = this.influencerInfoForm.get('englishInfluencerName') as AbstractControl<string | null>;
  englishInfluencerLastName = this.influencerInfoForm.get('englishInfluencerName') as AbstractControl<string | null>;
  influencerType = this.influencerInfoForm.get('influencerType') as AbstractControl<string | null>;
  instagramAccount = this.influencerInfoForm.get('instagramAccount') as AbstractControl<string | null>;
  twitterAccount = this.influencerInfoForm.get('instagramAccount') as AbstractControl<string | null>;
  influencerCity = this.influencerInfoForm.get('influencerCity') as AbstractControl<any | null>;
  mobilePhoneNumber = this.influencerInfoForm.get('mobilePhoneNumber') as AbstractControl<number | null>;

  submitForm() {
    console.log('salam')
  }
}
