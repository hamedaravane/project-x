import {NgClass, NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {AbstractControl, ReactiveFormsModule} from '@angular/forms';
import {NzFormControlComponent, NzFormItemComponent} from 'ng-zorro-antd/form';
import {NzColDirective} from 'ng-zorro-antd/grid';
import {NzInputDirective, NzInputGroupComponent, NzInputGroupWhitSuffixOrPrefixDirective} from 'ng-zorro-antd/input';
import {NzPopoverDirective} from 'ng-zorro-antd/popover';

@Component({
  templateUrl: 'confirm-password-input.component.html',
  standalone: true,
  imports: [
    NzInputDirective,
    NzInputGroupComponent,
    NzFormItemComponent,
    NzFormControlComponent,
    NgIf,
    NzColDirective,
    NzInputGroupWhitSuffixOrPrefixDirective,
    NzPopoverDirective,
    ReactiveFormsModule,
    NgClass,
  ],
  selector: 'purple-form-confirm-password-input',
})
export class ConfirmPasswordInputComponent {
  @Input({required: true}) confirmPasswordControl!: AbstractControl;
  @Input({required: true}) isHidePassword!: boolean;
}
