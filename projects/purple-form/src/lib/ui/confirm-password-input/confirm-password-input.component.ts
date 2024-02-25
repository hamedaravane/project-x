import {Component, Input} from '@angular/core';
import {NzInputDirective, NzInputGroupComponent, NzInputGroupWhitSuffixOrPrefixDirective} from 'ng-zorro-antd/input';
import {NzFormControlComponent, NzFormItemComponent} from 'ng-zorro-antd/form';
import {NgClass, NgIf} from '@angular/common';
import {AbstractControl, ReactiveFormsModule} from '@angular/forms';
import {NzColDirective} from 'ng-zorro-antd/grid';
import {NzPopoverDirective} from 'ng-zorro-antd/popover';
import {NzTransitionPatchDirective} from 'ng-zorro-antd/core/transition-patch/transition-patch.directive';

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
    NzTransitionPatchDirective,
    ReactiveFormsModule,
    NgClass,
  ],
  selector: 'purple-form-confirm-password-input',
})
export class ConfirmPasswordInputComponent {
  @Input({required: true}) confirmPasswordControl!: AbstractControl;
  @Input({required: true}) isHidePassword!: boolean;
}
