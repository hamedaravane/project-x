import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzSegmentedModule} from 'ng-zorro-antd/segmented';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {KeyValue, Language} from '@settings/data-access/model/settings.model';

@Component({
  standalone: true,
  selector: 'settings-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [NzFormModule, NzSwitchModule, NzSelectModule, NgForOf, NzSegmentedModule],
})
export class MainComponent {
  public readonly languages: KeyValue[] = Language;
  public readonly themes = [
    {value: 'dark', label: 'تیره'},
    {value: 'light', label: 'روشن'},
  ];
}
