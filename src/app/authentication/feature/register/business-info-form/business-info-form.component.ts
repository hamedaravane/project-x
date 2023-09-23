import {persianCharValidator} from '@shared/data-access/validators/custom-validators';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {BidiModule} from '@angular/cdk/bidi';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component, OnInit, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {CitiesListService} from '../data-access/cities-list.service';
import {RegisterService} from '../data-access/register.service';

@Component({
  standalone: true,
  selector: 'app-business-info-form',
  templateUrl: './business-info-form.component.html',
  imports: [
    NzFormModule,
    NzGridModule,
    ReactiveFormsModule,
    AsyncPipe,
    NzInputModule,
    NgIf,
    NzSelectModule,
    NgForOf,
    BidiModule,
    FormsModule,
    NzSkeletonModule,
    NzButtonModule,
    NzWaveModule,
    RouterLink,
  ],
  styleUrls: ['./business-info-form.component.scss'],
})
export class BusinessInfoFormComponent {
  private readonly registerService = inject(RegisterService);
  private readonly citiesListService = inject(CitiesListService);
  userType = this.registerService.UserTypeState;
  cityList = this.citiesListService.cityList;

  industryList: {value: any | null; label: string | number | null}[] = [
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

  businessInfoForm = new FormGroup({
    persianBusinessName: new FormControl<string | null>(null, [Validators.required, persianCharValidator]),
    englishBusinessName: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/),
    ]),
    instagramAccount: new FormControl<string | null>(null, Validators.pattern(/^[a-zA-Z0-9._]{1,30}$/)),
    twitterAccount: new FormControl<string | null>(null, Validators.pattern(/^[a-zA-Z_][a-zA-Z0-9_]{0,14}$/)),
    businessIndustry: new FormControl<string | null>(null, Validators.required),
    businessCity: new FormControl<any | null>(null, Validators.required),
    mobilePhoneNumber: new FormControl<number | null>(null, [Validators.required, Validators.pattern(/^9[0-9]{9}$/)]),
    businessAddress: new FormControl<string | null>(null, persianCharValidator),
  });

  persianBusinessName = this.businessInfoForm.get('persianBusinessName') as AbstractControl<string | null>;
  englishBusinessName = this.businessInfoForm.get('englishBusinessName') as AbstractControl<string | null>;
  instagramAccount = this.businessInfoForm.get('instagramAccount') as AbstractControl<string | null>;
  twitterAccount = this.businessInfoForm.get('instagramAccount') as AbstractControl<string | null>;
  businessIndustry = this.businessInfoForm.get('businessIndustry') as AbstractControl<string | null>;
  businessCity = this.businessInfoForm.get('businessCity') as AbstractControl<any | null>;
  mobilePhoneNumber = this.businessInfoForm.get('mobilePhoneNumber') as AbstractControl<number | null>;
  businessAddress = this.businessInfoForm.get('businessAddress') as AbstractControl<string | null>;

  submitForm() {
    console.log('businessInfoForm submitted');
  }
}
