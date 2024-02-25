import {Component, Input} from '@angular/core';
import {NzInputDirective, NzInputGroupComponent, NzInputGroupWhitSuffixOrPrefixDirective} from 'ng-zorro-antd/input';
import {NzFormControlComponent, NzFormItemComponent} from 'ng-zorro-antd/form';
import {NgClass, NgIf} from '@angular/common';
import {AbstractControl, ReactiveFormsModule} from '@angular/forms';
import {NzColDirective} from 'ng-zorro-antd/grid';
import {NzPopoverDirective} from 'ng-zorro-antd/popover';
import {NzTransitionPatchDirective} from 'ng-zorro-antd/core/transition-patch/transition-patch.directive';

@Component({
  templateUrl: 'password-input.component.html',
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
  selector: 'purple-form-password-input',
})
export class PasswordInputComponent {
  @Input({required: true}) passwordControl!: AbstractControl;
  @Input({required: true}) isHidePassword!: boolean;
}
