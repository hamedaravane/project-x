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
import {Component, DestroyRef, Input, OnInit, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

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
export class SideMenuComponent implements OnInit {
  @Input() userData$!: Observable<User>;
  private readonly layoutService: LayoutService = inject(LayoutService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  isSideMenuOpen$: Observable<boolean> = this.layoutService.isSideMenuOpen$;
  userData!: User;
  sideMenuOptions!: SideMenuOption[];

  ngOnInit() {
    const businessSideMenuOptions: SideMenuOption[] = [
      {title: 'صفحه اصلی', icon: 'fa-house', url: ''},
      {title: 'همکاری ها', icon: 'fa-handshake-simple', url: ''},
      {title: 'پرداخت ها', icon: 'fa-coins', url: ''},
      {title: 'تنظیمات', icon: 'fa-gear', url: ''},
      {title: 'خروج از حساب کاربری', icon: 'fa-right-from-bracket', url: ''},
    ];
    const influencerSideMenuOptions: SideMenuOption[] = [
      {title: 'صفحه اصلی', icon: 'fa-house', url: ''},
      {title: 'همکاری ها', icon: 'fa-handshake-simple', url: ''},
      {title: 'پرداخت ها', icon: 'fa-coins', url: ''},
      {title: 'تنظیمات', icon: 'fa-gear', url: ''},
      {title: 'خروج از حساب کاربری', icon: 'fa-right-from-bracket', url: ''},
    ];
    this.userData$
      .pipe(
        tap((data: User): void => {
          if (data.type === 'influencer') {
            this.sideMenuOptions = influencerSideMenuOptions;
          } else {
            this.sideMenuOptions = businessSideMenuOptions;
          }
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((data: User) => {
        this.userData = data;
      });
  }

  closeMenu(): void {
    this.layoutService.isSideMenuOpen$ = false;
  }
}
