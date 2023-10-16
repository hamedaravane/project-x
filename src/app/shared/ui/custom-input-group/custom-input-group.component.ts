import {NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {NzInputModule} from 'ng-zorro-antd/input';

@Component({
  standalone: true,
  selector: 'custom-input-group',
  imports: [NzInputModule, NgIf],
  template: `
    <nz-input-group [nzSuffix]="SuffixIcon" [nzPrefix]="PrefixIcon">
      <ng-content></ng-content>
    </nz-input-group>
    <ng-template #PrefixIcon>
      <i *ngIf="prefix" [class]="'fa-solid ' + prefix"></i>
    </ng-template>
    <ng-template #SuffixIcon>
      <i *ngIf="suffix" [class]="'fa-solid ' + suffix"></i>
    </ng-template>
  `,
})
export class CustomInputGroupComponent {
  @Input() prefix?: string | null;
  @Input() suffix?: string | null;
}
