import {BidiModule} from '@angular/cdk/bidi';
import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {CitiesListService} from '@shared/data-access/cities-list.service';
import {industryCategoryList, IndustryEnum} from '@shared/data-access/models/category.model';
import {persianCharValidator} from '@shared/data-access/validators/custom-validators';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';

@Component({
  standalone: true,
  selector: 'app-business-info-form',
  templateUrl: './business-info-form.component.html',
  imports: [
    NzFormModule,
    NzGridModule,
    ReactiveFormsModule,
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
  private readonly citiesListService = inject(CitiesListService);
  private readonly router = inject(Router);

  cityList = this.citiesListService.cityList;

  industryList = industryCategoryList;

  businessInfoForm = new FormGroup({
    persianBusinessName: new FormControl<string | null>(null, [Validators.required, persianCharValidator]),
    englishBusinessName: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/),
    ]),
    instagramAccount: new FormControl<string | null>(null, Validators.pattern(/^[a-zA-Z0-9._]{1,30}$/)),
    twitterAccount: new FormControl<string | null>(null, Validators.pattern(/^[a-zA-Z_][a-zA-Z0-9_]{0,14}$/)),
    businessIndustry: new FormControl<IndustryEnum | null>(null, Validators.required),
    city: new FormControl<any | null>(null, Validators.required),
    mobilePhoneNumber: new FormControl<number | null>(null, [Validators.required, Validators.pattern(/^9[0-9]{9}$/)]),
    address: new FormControl<string | null>(null, persianCharValidator),
  });

  persianBusinessNameControl = this.businessInfoForm.get('persianBusinessName') as AbstractControl<string | null>;
  englishBusinessNameControl = this.businessInfoForm.get('englishBusinessName') as AbstractControl<string | null>;
  instagramAccountControl = this.businessInfoForm.get('instagramAccount') as AbstractControl<string | null>;
  twitterAccountControl = this.businessInfoForm.get('instagramAccount') as AbstractControl<string | null>;
  businessIndustryControl = this.businessInfoForm.get('businessIndustry') as AbstractControl<IndustryEnum | null>;
  cityControl = this.businessInfoForm.get('city') as AbstractControl<any | null>;
  mobilePhoneNumberControl = this.businessInfoForm.get('mobilePhoneNumber') as AbstractControl<number | null>;
  addressControl = this.businessInfoForm.get('address') as AbstractControl<string | null>;

  submitForm(): void {
    this.router.navigateByUrl('/auth/register/select-profile-photo');
  }
}
