import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Component, DestroyRef, inject, Input, OnInit} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Router, RouterLink} from '@angular/router';
import {SideMenuOption, UserEntity, UserType} from '@user/data-access/model/user.model';
import {sideMenuAnimations} from '@shared/data-access/animations/animations';
import {LayoutService} from '@shared/data-access/layout.service';
import {SkeletonComponent} from '@shared/ui/skeleton/skeleton.component';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {Observable} from 'rxjs';
import {LoginService} from '@authentication/data-access/login.service';

@Component({
  standalone: true,
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [NgOptimizedImage, NgIf, AsyncPipe, NzSkeletonModule, SkeletonComponent, NgForOf, RouterLink],
  animations: [sideMenuAnimations],
})
export class SideMenuComponent implements OnInit {
  @Input() user$!: Observable<UserEntity>;
  private readonly loginService = inject(LoginService);
  private readonly layoutService: LayoutService = inject(LayoutService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly route = inject(Router);
  isSideMenuOpen$: Observable<boolean> = this.layoutService.isSideMenuOpen$;
  userData!: UserEntity;
  sideMenuOptions!: SideMenuOption[];

  ngOnInit(): void {
    const businessSideMenuOptions: SideMenuOption[] = [
      {title: 'صفحه اصلی', icon: 'fa-house', url: ''},
      {title: 'همکاری ها', icon: 'fa-handshake-simple', url: 'user/collaborations'},
      {title: 'ویرایش حساب', icon: 'fa-user', url: 'user'},
      {title: 'تنظیمات', icon: 'fa-gear', url: 'settings'},
    ];
    const influencerSideMenuOptions: SideMenuOption[] = [
      {title: 'صفحه اصلی', icon: 'fa-house', url: ''},
      {title: 'همکاری ها', icon: 'fa-handshake-simple', url: ''},
      {title: 'پرداخت ها', icon: 'fa-coins', url: ''},
      {title: 'ویرایش حساب', icon: 'fa-user', url: 'user'},
      {title: 'تنظیمات', icon: 'fa-gear', url: 'settings'},
    ];
    this.user$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data: UserEntity) => {
      if (data.type === UserType.INFLUENCER) {
        this.sideMenuOptions = influencerSideMenuOptions;
      } else {
        this.sideMenuOptions = businessSideMenuOptions;
      }
      this.userData = data;
    });
  }

  logout(): void {
    this.loginService.logout();
    this.route.navigateByUrl('/auth/login').then();
    this.closeMenu();
  }

  closeMenu(): void {
    this.layoutService.isSideMenuOpen$ = false;
  }
}
