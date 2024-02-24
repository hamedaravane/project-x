import {BidiModule} from '@angular/cdk/bidi';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Component, ElementRef, OnInit, ViewChild, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserEntity, UserType} from '@user/data-access/model/user.model';
import {UserService} from '@user/data-access/user.service';
import {CitiesListService} from '@shared/data-access/cities-list.service';
import {industryCategoryList} from '@shared/data-access/models/category.model';
import {PhotoComponent} from '@shared/data-access/photo.component';
import {persianCharValidator} from '@shared/data-access/validators/custom-validators';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {firstValueFrom} from 'rxjs';

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
    NgOptimizedImage,
    NzModalModule,
    NgClass,
  ],
})
export class EditInformationComponent extends PhotoComponent implements OnInit {
  private readonly userService: UserService = inject(UserService);
  private readonly citiesListService = inject(CitiesListService);
  private readonly userData$ = this.userService.currentUser$;
  @ViewChild('fileInput') override fileInput!: ElementRef;
  @ViewChild('image') override imageElement!: ElementRef;
  userData!: UserEntity;

  cityList = this.citiesListService.cityList;

  industryList = industryCategoryList;

  userInfoForm = new FormGroup({
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
    this.loadUserData().then();
  }
  async loadUserData(): Promise<void> {
    this.userData = await firstValueFrom(this.userData$);
    this.croppedImageSrc = this.userData.profilePhotoSrc || null;
    switch (this.userData.type) {
      case UserType.BUSINESS:
        this.persianBusinessName.setValue(this.userData.persianBusinessName);
        this.englishBusinessName.setValue(this.userData.businessName);
        this.businessIndustry.setValue(this.userData.businessType);
        break;
      case UserType.INFLUENCER:
        this.firstName.setValue(this.userData.firstName);
        this.lastName.setValue(this.userData.lastName);
        this.englishFirstName.setValue(this.userData.firstName || null);
        this.englishLastName.setValue(this.userData.lastName || null);
        this.instagramAccountId.setValue(this.userData.instagramUsername);
        break;
    }
    this.emailAddress.setValue(this.userData.email);
    this.businessCity.setValue(this.userData.city);
    this.mobilePhoneNumber.setValue(this.userData.mobilePhoneNumber || null);
    this.businessAddress.setValue(this.userData.address);
  }
  submitForm(): void {
    console.log('userInfoForm is submitted');
  }
}
