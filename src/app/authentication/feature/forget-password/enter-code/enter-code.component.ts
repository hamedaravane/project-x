import {NgOtpInputModule} from 'ng-otp-input';
import {map} from 'rxjs';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {BidiModule} from '@angular/cdk/bidi';
import {Component, DestroyRef, OnInit, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {ForgotPasswordService} from '../data-access/forgot-password.service';

@Component({
  standalone: true,
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  imports: [
    FormsModule,
    BidiModule,
    NzAlertModule,
    NgOtpInputModule,
    NzCheckboxModule,
    NzGridModule,
    ReactiveFormsModule,
    RouterLink,
    NzButtonModule,
  ],
  styleUrls: ['./enter-code.component.scss'],
})
export class EnterCodeComponent implements OnInit {
  private readonly forgetPasswordService = inject(ForgotPasswordService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  code: string | undefined;
  modifiedEmail: string | null | undefined;

  ngOnInit() {
    this.forgetPasswordService.forgottenPasswordEmail
      .pipe(
        map(value => {
          if (value) {
            const atIndex = value.indexOf('@');
            return value.slice(0, 2) + '...' + value.slice(atIndex);
          }
          return null;
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(email => {
        this.modifiedEmail = email;
      });
  }

  onCodeComplete(event: string) {
    if (event.length === 6) {
      this.code = event;
      this.submit();
    }
  }

  submit() {
    this.router.navigateByUrl('/auth/forget-password/set-new-password');
  }
}
