import {Component, Input, TemplateRef, ViewChild, computed, forwardRef, AfterViewInit, Signal, ContentChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {
  InputTypeEnum,
  transformInputTypeToEnum, InputMetrics, generateInputBasedOnType,
} from '../../data-access/entity/purple-form.entity';
import {KeyValuePipe, NgForOf, NgTemplateOutlet} from '@angular/common';
import {NzFormControlComponent, NzFormItemComponent, NzFormLabelComponent} from 'ng-zorro-antd/form';

@Component({
  selector: 'purple-form-input',
  imports: [
    NzInputGroupComponent, NzInputDirective, NgTemplateOutlet, NzFormItemComponent, NzFormControlComponent,
    NzFormLabelComponent, ReactiveFormsModule, KeyValuePipe, NgForOf,
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
  protected readonly Object = Object;
}
