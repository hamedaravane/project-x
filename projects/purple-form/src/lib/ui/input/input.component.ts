import {Component, Input, TemplateRef, ViewChild, computed} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {
  InputTypeEnum, transformInputTypeToEnum, generateInputBasedOnType, Countries,
} from '../../data-access/entity/purple-form.entity';
import {NgForOf, NgTemplateOutlet} from '@angular/common';
import {NzFormControlComponent, NzFormItemComponent, NzFormLabelComponent} from 'ng-zorro-antd/form';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import CountriesDialCode from '../../data-access/countries-dial-code.json';
import countries from '../../data-access/countries-dial-code.json';

@Component({
  selector: 'purple-form-input',
  imports: [
    NzInputGroupComponent, NzInputDirective, NgTemplateOutlet, NzFormItemComponent, NzFormControlComponent,
    NzFormLabelComponent, ReactiveFormsModule, NgForOf, NzSelectComponent, NzOptionComponent, FormsModule,
  ],
  templateUrl: 'input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
})
export class InputComponent {
  @Input({required: true}) formController!: FormControl;
  @Input({
    required: true,
    transform: transformInputTypeToEnum,
  })
  inputType!: InputTypeEnum;
  countries: Countries[] = CountriesDialCode;
  dialCode = '+98'
  @ViewChild('prefixIcon', {
    read: TemplateRef,
    static: true,
  }) prefixIconRef?: TemplateRef<void> | string;
  @ViewChild('suffixIcon', {
    read: TemplateRef,
    static: true,
  }) suffixIconRef?: TemplateRef<void> | string;
  @ViewChild('addOnAfter', {
    read: TemplateRef,
    static: true,
  }) addOnAfterRef?: TemplateRef<void> | string;
  @ViewChild('addOnBefore', {
    read: TemplateRef,
    static: true,
  }) addOnBeforeRef?: TemplateRef<void> | string;
  INPUT_TYPE_ENUM = InputTypeEnum;
  _isDisabled = false;
  input = computed(() => {
    return generateInputBasedOnType(
      this.inputType,
      this.prefixIconRef,
      this.suffixIconRef,
      this.addOnAfterRef,
      this.addOnBeforeRef,
    );
  });

  public objectKeys(obj: Object) {
    return Object.keys(obj);
  }
}
