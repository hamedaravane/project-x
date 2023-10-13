import {SideMenuOption, User} from '@user/data-access/model/user.model';
import {Observable, map, tap} from 'rxjs';
import {sideMenuAnimations} from '@shared/data-access/animations/side-menu.animations';
import {LayoutService} from '@shared/data-access/layout.service';
import {SkeletonComponent} from '@shared/ui/skeleton/skeleton.component';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {
  AsyncPipe,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
} from '@angular/common';
import {Component, Input, OnInit, inject} from '@angular/core';

@Component({
  standalone: true,
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [
    NgOptimizedImage,
    NgIf,
    AsyncPipe,
    NzSkeletonModule,
    SkeletonComponent,
    NgForOf,
    NgTemplateOutlet,
    NgSwitchCase,
    NgSwitch,
    NgSwitchDefault,
  ],
  animations: [sideMenuAnimations],
})
export class SideMenuComponent {
  @Input() userData$!: Observable<User>;
  private readonly layoutService: LayoutService = inject(LayoutService);
  isSideMenuOpen$: Observable<boolean> = this.layoutService.isSideMenuOpen$;

  businessSideMenuOptions: SideMenuOption[] = [
    {title: 'صفحه اصلی', icon: 'fa-house', url: ''},
    {title: 'همکاری ها', icon: 'fa-handshake-simple', url: ''},
    {title: 'پرداخت ها', icon: 'fa-coins', url: ''},
    {title: 'تنظیمات', icon: 'fa-gear', url: ''},
    {title: 'خروج از حساب کاربری', icon: 'fa-right-from-bracket', url: ''},
  ];
  influencerSideMenuOptions: SideMenuOption[] = [
    {title: 'صفحه اصلی', icon: 'fa-house', url: ''},
    {title: 'همکاری ها', icon: 'fa-handshake-simple', url: ''},
    {title: 'پرداخت ها', icon: 'fa-coins', url: ''},
    {title: 'تنظیمات', icon: 'fa-gear', url: ''},
    {title: 'خروج از حساب کاربری', icon: 'fa-right-from-bracket', url: ''},
  ];

  closeMenu(): void {
    this.layoutService.isSideMenuOpen$ = false;
  }
}
