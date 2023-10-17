import {BidiModule} from '@angular/cdk/bidi';
import {NgForOf, NgIf} from '@angular/common';
import {Component, DestroyRef, OnInit, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from '@user/data-access/model/user.model';
import {UserService} from '@user/data-access/user.service';
import {CitiesListService} from '@shared/data-access/cities-list.service';
import {industryCategoryList} from '@shared/data-access/mock/mock';
import {persianCharValidator} from '@shared/data-access/validators/custom-validators';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {Observable, tap} from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.scss'],
  imports: [
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NgForOf,
    NzSelectModule,
    BidiModule,
    NgIf,
    NzButtonModule,
    NzWaveModule,
  ],
})
export class EditInformationComponent implements OnInit {
  private readonly userService: UserService = inject(UserService);
  private readonly citiesListService = inject(CitiesListService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly userData$: Observable<User> = this.userService.user$;
  userData!: User;

  cityList = this.citiesListService.cityList;

  industryList = industryCategoryList;

  userInfoForm: FormGroup = new FormGroup({
    firstName: new FormControl<string | null>(null, [Validators.required, persianCharValidator]),
    lastName: new FormControl<string | null>(null, [Validators.required, persianCharValidator]),
    persianBusinessName: new FormControl<string | null>(null, [Validators.required, persianCharValidator]),
    englishBusinessName: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/),
    ]),
    englishFirstName: new FormControl<string | null>(null, [Validators.required]),
    englishLastName: new FormControl<string | null>(null, [Validators.required]),
    instagramAccountId: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._]{1,30}$/),
    ]),
    emailAddress: new FormControl<string>('', [Validators.email, Validators.required]),
    businessIndustry: new FormControl<string | null>(null, Validators.required),
    businessCity: new FormControl<any | null>(null, Validators.required),
    mobilePhoneNumber: new FormControl<number | null>(null, [Validators.required, Validators.pattern(/^9[0-9]{9}$/)]),
    businessAddress: new FormControl<string | null>(null, persianCharValidator),
  });

  firstName = this.userInfoForm.get('firstName') as AbstractControl<string | null>;
  lastName = this.userInfoForm.get('lastName') as AbstractControl<string | null>;
  persianBusinessName = this.userInfoForm.get('persianBusinessName') as AbstractControl<string | null>;
  englishBusinessName = this.userInfoForm.get('englishBusinessName') as AbstractControl<string | null>;
  englishFirstName = this.userInfoForm.get('englishFirstName') as AbstractControl<string | null>;
  englishLastName = this.userInfoForm.get('englishLastName') as AbstractControl<string | null>;
  instagramAccountId = this.userInfoForm.get('instagramAccountId') as AbstractControl<string | null>;
  emailAddress = this.userInfoForm.get('emailAddress') as AbstractControl<string>;
  businessIndustry = this.userInfoForm.get('businessIndustry') as AbstractControl<string | null>;
  businessCity = this.userInfoForm.get('businessCity') as AbstractControl<any | null>;
  mobilePhoneNumber = this.userInfoForm.get('mobilePhoneNumber') as AbstractControl<string | null>;
  businessAddress = this.userInfoForm.get('businessAddress') as AbstractControl<string | null>;

  ngOnInit(): void {
    this.businessCity.valueChanges.subscribe(x => console.log('bc', x));
    this.userData$
      .pipe(
        tap((data: User) => {
          this.persianBusinessName.setValue(data.persianBusinessName);
          this.englishBusinessName.setValue(data.englishBusinessName || null);
          this.firstName.setValue(data.firstName);
          this.lastName.setValue(data.lastName);
          this.englishFirstName.setValue(data.englishFirstName || null);
          this.englishLastName.setValue(data.englishLastName || null);
          this.instagramAccountId.setValue(data.instagramAccountId);
          this.emailAddress.setValue(data.emailAddress);
          this.businessIndustry.setValue(data.businessIndustry);
          this.businessCity.setValue(data.businessCity);
          this.mobilePhoneNumber.setValue(data.mobilePhoneNumber || null);
          this.businessAddress.setValue(data.businessAddress);
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((value: User) => (this.userData = value));
  }
  submitForm(): void {
    console.log('userInfoForm is submitted');
  }
}
