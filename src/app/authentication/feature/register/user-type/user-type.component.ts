import {NgClass} from '@angular/common';
import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {UserType} from '@user/data-access/model/user.model';
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

  selectedUserType!: UserType;
  spinnerLoading = false;

  selectUserType(type: UserType): void {
    this.selectedUserType = type;
    this.spinnerLoading = true;
    setTimeout(() => {
      this.registerService.selectUserType(type);
      this.router.navigateByUrl('/auth/register/basic-info').then();
      this.spinnerLoading = false;
    }, 1000);
  }
}
