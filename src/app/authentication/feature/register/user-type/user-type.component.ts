import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NgClass} from '@angular/common';
import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {RegisterService} from '../data-access/register.service';
import {UserType} from '../data-access/type';

@Component({
  standalone: true,
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  imports: [NgClass, RouterLink, NzButtonModule, NzSpinModule, NzIconModule],
  styleUrls: ['./user-type.component.scss'],
})
export class UserTypeComponent {
  private readonly router = inject(Router);
  private readonly registerService = inject(RegisterService);

  userType!: UserType;
  loading: boolean = false;

  selectUserType(type: UserType) {
    this.userType = type;
    this.loading = true;
    setTimeout(async () => {
      this.registerService.selectUserType(type);
      this.router.navigate(['/', 'auth', 'register', 'basic-info']);
      this.loading = false;
    }, 1000);
  }
}
