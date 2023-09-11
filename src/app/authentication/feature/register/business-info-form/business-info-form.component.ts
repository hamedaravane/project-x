import {Component, inject, OnInit} from '@angular/core';
import {NzFormModule} from "ng-zorro-antd/form";
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {NzInputModule} from "ng-zorro-antd/input";
import {RegisterService} from "../data-access/register.service";
import {persianCharValidator} from "../../../../shared/data-access/validators/custom-validators";
import {NzSelectModule} from "ng-zorro-antd/select";
import {CustomInputGroupComponent} from "../../../../shared/ui/custom-input-group/custom-input-group.component";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, map, Observable} from "rxjs";

@Component({
    standalone: true,
    selector: 'app-business-info-form',
    templateUrl: './business-info-form.component.html',
    imports: [
        NzFormModule,
        ReactiveFormsModule,
        AsyncPipe,
        NzInputModule,
        NgIf,
        NzSelectModule,
        NgForOf,
        CustomInputGroupComponent,
        FormsModule
    ],
    styleUrls: ['./business-info-form.component.scss']
})
export class BusinessInfoFormComponent implements OnInit {
    private readonly registerService = inject(RegisterService);
    private readonly http = inject(HttpClient);
    userType = this.registerService.UserTypeState;

    provinceList!: Observable<any[]>;
    cityList!: Observable<any[]>;
    selectedProvince!: any;
    selectedCity!: any;

    industryList: { value: any | null, label: string | number | null }[] = [
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
        englishBusinessName: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]),
        instagramAccount: new FormControl<string | null>(null, Validators.pattern(/^[a-zA-Z0-9._]{1,30}$/)),
        twitterAccount: new FormControl<string | null>(null, Validators.pattern(/^[a-zA-Z_][a-zA-Z0-9_]{0,14}$/)),
        businessIndustry: new FormControl<string | null>(null, Validators.required),
        businessProvince: new FormControl<any | null>(null, Validators.required),
        businessCity: new FormControl<any | null>(null, Validators.required),
    })

    persianBusinessName = this.businessInfoForm.get('persianBusinessName') as AbstractControl<string | null>;
    englishBusinessName = this.businessInfoForm.get('englishBusinessName') as AbstractControl<string | null>;
    instagramAccount = this.businessInfoForm.get('instagramAccount') as AbstractControl<string | null>;
    twitterAccount = this.businessInfoForm.get('instagramAccount') as AbstractControl<string | null>;
    businessIndustry = this.businessInfoForm.get('businessIndustry') as AbstractControl<string | null>;
    businessProvince = this.businessInfoForm.get('businessProvince') as AbstractControl<any | null>;
    businessCity = this.businessInfoForm.get('businessCity') as AbstractControl<any | null>;

    ngOnInit() {



    }

    selectProvince() {
        this.provinceList = this.http.get('https://iran-locations-api.vercel.app/api/v1/states').pipe(
            map((provinceList) => {
                return provinceList as Array<object>
            })
        )
    }
    selectCity() {
        this.cityList = this.http.get('iran-locations-api.vercel.app/api/v1/states?id=' + this.businessProvince.value.id).pipe(
            map((cityList) => {
                return cityList as Array<object>
            })
        )
    }

    submitForm() {
        console.log('businessInfoForm submitted')
    }

}
