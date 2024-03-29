import {Dir} from '@angular/cdk/bidi';
import {NgForOf, NgTemplateOutlet} from '@angular/common';
import {Component, Input, TemplateRef, ViewChild, computed} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzFormControlComponent, NzFormItemComponent, NzFormLabelComponent} from 'ng-zorro-antd/form';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import CountriesDialCode from '../../data-access/countries-dial-code.json';
import countries from '../../data-access/countries-dial-code.json';
import {
  Countries,
  InputTypeEnum,
  generateInputBasedOnType,
  transformInputTypeToEnum,
} from '../../data-access/entity/purple-form.entity';

@Component({
  selector: 'purple-form-input',
  imports: [
    NzInputGroupComponent,
    NzInputDirective,
    NgTemplateOutlet,
    NzFormItemComponent,
    NzFormControlComponent,
    NzFormLabelComponent,
    ReactiveFormsModule,
    NgForOf,
    NzSelectComponent,
    NzOptionComponent,
    FormsModule,
    Dir,
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
  @Input({required: false}) placeholder: string | null = null;
  @Input({required: false}) label: string | null = null;
  inputType!: InputTypeEnum;
  countries: Countries[] = CountriesDialCode;
  dialCode = '+98';
  @ViewChild('prefixIcon', {
    read: TemplateRef,
    static: true,
  })
  prefixIconRef?: TemplateRef<void> | string;
  @ViewChild('suffixIcon', {
    read: TemplateRef,
    static: true,
  })
  suffixIconRef?: TemplateRef<void> | string;
  @ViewChild('addOnAfter', {
    read: TemplateRef,
    static: true,
  })
  addOnAfterRef?: TemplateRef<void> | string;
  @ViewChild('addOnBefore', {
    read: TemplateRef,
    static: true,
  })
  addOnBeforeRef?: TemplateRef<void> | string;
  INPUT_TYPE_ENUM = InputTypeEnum;
  _isDisabled = false;
  input = computed(() => {
    return generateInputBasedOnType(
      this.inputType,
      this.label,
      this.placeholder,
      this.prefixIconRef,
      this.suffixIconRef,
      this.addOnAfterRef,
      this.addOnBeforeRef,
    );
  });

  public objectKeys(obj: {[key: string]: string}) {
    return Object.keys(obj);
  }
}
