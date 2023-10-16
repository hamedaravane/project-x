import {BidiModule} from '@angular/cdk/bidi';
import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {CitiesListService} from '@shared/data-access/cities-list.service';
import {influencerCategoryList} from '@shared/data-access/mock/mock';
import {PurpleDate} from '@shared/data-access/models/date.model';
import {persianCharValidator} from '@shared/data-access/validators/custom-validators';
import {PurpleDatePickerComponent} from '@shared/ui/purple-date-picker/purple-date-picker.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';

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

  cityList = this.citiesListService.cityList;

  influencerTypeList = influencerCategoryList;

  influencerInfoForm = new FormGroup({
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
    influencerType: new FormControl<string | null>(null, Validators.required),
    instagramAccount: new FormControl<string | null>(null, Validators.pattern(/^[a-zA-Z0-9._]{1,30}$/)),
    twitterAccount: new FormControl<string | null>(null, Validators.pattern(/^[a-zA-Z_][a-zA-Z0-9_]{0,14}$/)),
    influencerCity: new FormControl<any | null>(null, Validators.required),
    mobilePhoneNumber: new FormControl<number | null>(null, [Validators.required, Validators.pattern(/^9[0-9]{9}$/)]),
  });

  persianInfluencerName = this.influencerInfoForm.get('persianInfluencerName') as AbstractControl<string | null>;
  persianInfluencerLastName = this.influencerInfoForm.get('persianInfluencerName') as AbstractControl<string | null>;
  englishInfluencerName = this.influencerInfoForm.get('englishInfluencerName') as AbstractControl<string | null>;
  englishInfluencerLastName = this.influencerInfoForm.get('englishInfluencerName') as AbstractControl<string | null>;
  birthDate = this.influencerInfoForm.get('birthDate') as AbstractControl<PurpleDate | null>;
  influencerType = this.influencerInfoForm.get('influencerType') as AbstractControl<string | null>;
  instagramAccount = this.influencerInfoForm.get('instagramAccount') as AbstractControl<string | null>;
  twitterAccount = this.influencerInfoForm.get('instagramAccount') as AbstractControl<string | null>;
  influencerCity = this.influencerInfoForm.get('influencerCity') as AbstractControl<any | null>;
  mobilePhoneNumber = this.influencerInfoForm.get('mobilePhoneNumber') as AbstractControl<number | null>;

  submitForm(): void {
    this.router.navigateByUrl('/auth/register/select-profile-photo');
  }
}
