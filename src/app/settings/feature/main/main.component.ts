import {NgForOf} from '@angular/common';
import {AfterViewInit, Component, DestroyRef, OnInit, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzSegmentedModule} from 'ng-zorro-antd/segmented';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {KeyValue, Language} from '@settings/data-access/model/settings.model';
import {Theme} from '@settings/data-access/model/theme.model';
import {ThemeService} from '@settings/data-access/theme.service';

@Component({
  standalone: true,
  selector: 'settings-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [NzFormModule, NzSwitchModule, NzSelectModule, NgForOf, NzSegmentedModule, ReactiveFormsModule],
})
export class MainComponent implements OnInit, AfterViewInit {
  private readonly themeService: ThemeService = inject(ThemeService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  public readonly languages: KeyValue[] = Language;
  public readonly themes = [
    {value: 'dark', label: 'تیره'},
    {value: 'light', label: 'روشن'},
  ];

  settingsForm = new FormGroup({
    theme: new FormControl<0 | 1>(0, Validators.required),
    lang: new FormControl<string>('Farsi', Validators.required),
    emailNotification: new FormControl<boolean>(false, Validators.required),
    inAppNotification: new FormControl<boolean>(false, Validators.required),
    smsNotification: new FormControl<boolean>(false, Validators.required),
  });

  themeControl: AbstractControl<0 | 1> = this.settingsForm.get('theme') as AbstractControl<0 | 1>;
  langControl = this.settingsForm.get('lang') as AbstractControl<string>;
  emailNotificationControl = this.settingsForm.get('emailNotification') as AbstractControl<boolean>;
  inAppNotificationControl = this.settingsForm.get('inAppNotification') as AbstractControl<boolean>;
  smsNotificationControl = this.settingsForm.get('smsNotification') as AbstractControl<boolean>;

  ngOnInit(): void {
    const themes = ['dark', 'light'];
    this.themeControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
      this.themeService.setTheme(themes[value] as Theme);
    });
  }

  ngAfterViewInit(): void {
    this.themeControl.setValue(this.themeService.currentTheme === Theme.DARK ? 0 : 1);
  }
}
