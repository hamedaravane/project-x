import {forwardRef} from '@angular/core';
import {DefaultValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true,
};
