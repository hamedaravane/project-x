import {Component, inject} from '@angular/core';
import {NgClass} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  imports: [
    NgClass,
    RouterLink
  ],
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent {
  private readonly router = inject(Router);

  userType: 'influencer' | 'customer' | undefined = undefined;

  selectUserType(type: 'influencer' | 'customer') {
    this.userType = type;
    this.router.navigate(['/','auth','register','basic-info']);
  }
}
