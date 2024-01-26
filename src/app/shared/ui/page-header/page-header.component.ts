import {AsyncPipe, NgIf, NgOptimizedImage} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {UserEntity} from '@user/data-access/model/user.model';
import {LayoutService} from '@shared/data-access/layout.service';
import {RouteService} from '@shared/data-access/route.service';
import {Observable} from 'rxjs';

@Component({
  standalone: true,
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  imports: [NgOptimizedImage, RouterLink, AsyncPipe, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  @Input() user$!: Observable<UserEntity>;
  private readonly routeService: RouteService = inject(RouteService);
  private readonly layoutService: LayoutService = inject(LayoutService);
  backButtonVisible$: Observable<boolean> = this.routeService.isRoot$;
  openSideMenu(): void {
    this.layoutService.isSideMenuOpen$ = true;
  }
  back(): void {
    if (!this.routeService.isRoot()) {
      history.back();
    }
  }
}
