import {Observable} from 'rxjs';
import {sideMenuAnimations} from '@shared/data-access/animations/side-menu.animations';
import {LayoutService} from '@shared/data-access/layout.service';
import {AsyncPipe, NgIf, NgOptimizedImage} from '@angular/common';
import {Component, Input, OnInit, inject} from '@angular/core';

@Component({
  standalone: true,
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [NgOptimizedImage, NgIf, AsyncPipe],
  animations: [sideMenuAnimations],
})
export class SideMenuComponent implements OnInit {
  @Input() profilePhoto!: string;
  private readonly layoutService: LayoutService = inject(LayoutService);
  isSideMenuOpen$: Observable<boolean> = this.layoutService.isSideMenuOpen$;
  ngOnInit(): void {
    this.profilePhoto = 'assets/mock/profile-photos/business-profile-photo.png';
  }
  closeMenu(): void {
    this.layoutService.isSideMenuOpen$ = false;
  }
}
