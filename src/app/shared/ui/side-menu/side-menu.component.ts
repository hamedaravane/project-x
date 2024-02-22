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
  private readonly layoutService = inject(LayoutService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly route = inject(Router);
  isSideMenuOpen$: Observable<boolean> = this.layoutService.isSideMenuOpen$;
  userData!: UserEntity;
  sideMenuOptions!: SideMenuOption[];

  ngOnInit(): void {
    const businessSideMenuOptions: SideMenuOption[] = [
      {id: 0, title: 'صفحه اصلی', icon: 'fa-house', url: '/app'},
      {id: 1, title: 'همکاری ها', icon: 'fa-handshake-simple', url: '/app/user/collaborations'},
      {id: 2, title: 'ویرایش حساب', icon: 'fa-user', url: '/app/user'},
      {id: 3, title: 'تنظیمات', icon: 'fa-gear', url: '/app/settings'},
    ];
    const influencerSideMenuOptions: SideMenuOption[] = [
      {id: 0, title: 'صفحه اصلی', icon: 'fa-house', url: '/app'},
      {id: 1, title: 'همکاری ها', icon: 'fa-handshake-simple', url: '/app/user/collaborations'},
      {id: 2, title: 'پرداخت ها', icon: 'fa-coins', url: ''},
      {id: 3, title: 'ویرایش حساب', icon: 'fa-user', url: '/app/user'},
      {id: 4, title: 'تنظیمات', icon: 'fa-gear', url: '/app/settings'},
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

  selectOption(url: string): void {
    this.closeMenu();
    this.route.navigateByUrl(url).then();
  }

  logout(): void {
    this.closeMenu();
    this.loginService.logout();
    this.route.navigateByUrl('/auth/login').then();
  }

  closeMenu(): void {
    this.layoutService.setSideMenuStatus(false);
  }
}
