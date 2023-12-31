import {NgClass} from '@angular/common';
import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {UserType, UserTypeDetail, UserTypeLabel} from '@user/data-access/model/user.model';
import {RegisterService} from '@authentication/data-access/register.service';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzSpinModule} from 'ng-zorro-antd/spin';

@Component({
  standalone: true,
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  imports: [NgClass, RouterLink, NzButtonModule, NzSpinModule, NzIconModule],
  styleUrls: ['./user-type.component.scss'],
})
export class UserTypeComponent {
  private readonly router: Router = inject(Router);
  private readonly registerService: RegisterService = inject(RegisterService);

  selectedUserType!: UserTypeDetail;
  spinnerLoading = false;
  influencer: UserTypeDetail = {value: UserType.INFLUENCER, label: UserTypeLabel.INFLUENCER};
  business: UserTypeDetail = {value: UserType.BUSINESS, label: UserTypeLabel.BUSINESS};

  selectUserType(userType: UserTypeDetail): void {
    this.selectedUserType = userType;
    this.spinnerLoading = true;
    setTimeout(() => {
      this.registerService.userType$ = userType;
      this.router.navigateByUrl('/auth/register/basic-info').then();
      this.spinnerLoading = false;
    }, 1000);
  }
}
