import {User} from '@user/data-access/model/user.model';
import {UserService} from '@user/data-access/user.service';
import {Observable, map} from 'rxjs';
import {persianCharValidator} from '@shared/data-access/validators/custom-validators';
import {Component, OnInit, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.scss'],
})
export class EditInformationComponent implements OnInit {
  private readonly userService: UserService = inject(UserService);
  private readonly userData$: Observable<User> = this.userService.user$;
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
  mobilePhoneNumber = this.userInfoForm.get('mobilePhoneNumber') as AbstractControl<number | null>;
  businessAddress = this.userInfoForm.get('businessAddress') as AbstractControl<string | null>;

  ngOnInit(): void {
    this.userData$.pipe(
      map(data => {
        this.firstName.setValue(data.firstName);
        this.lastName.setValue(data.lastName);
        this.persianBusinessName.setValue(data.persianBusinessName);
        this.englishBusinessName.setValue(data.englishBusinessName);
        this.englishFirstName.setValue(data.englishFirstName || null);
        this.englishLastName.setValue(data.englishLastName || null);
        this.instagramAccountId.setValue();
        this.emailAddress.setValue(data.emailAddress);
        this.businessIndustry.setValue(data.firstName);
        this.businessCity.setValue(data.firstName);
        this.mobilePhoneNumber.setValue(data.firstName);
        this.businessAddress.setValue(data.firstName);
      }),
    );
  }
}
