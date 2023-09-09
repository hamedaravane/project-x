import {Component, inject} from '@angular/core';
import {NgClass} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {RegisterService} from "../data-access/register.service";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NzIconModule} from "ng-zorro-antd/icon";

@Component({
  standalone: true,
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  imports: [
    NgClass,
    RouterLink,
    NzButtonModule,
    NzSpinModule,
    NzIconModule
  ],
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent {
  private readonly router = inject(Router);
  private readonly registerService = inject(RegisterService);

  userType!: 'influencer' | 'business';
  loading: boolean = false;

  selectUserType(type: 'influencer' | 'business') {
    this.loading = true;
    setTimeout(async () => {
      this.registerService.selectUserType(type);
      this.router.navigate(['/','auth','register','basic-info']);
      this.loading = false;
    }, 1000);
  }
}
