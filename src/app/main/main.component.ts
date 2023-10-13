import {User} from '@user/data-access/model/user.model';
import {UserService} from '@user/data-access/user.service';
import {Observable} from 'rxjs';
import {PageHeaderComponent} from '@shared/ui/page-header/page-header.component';
import {SideMenuComponent} from '@shared/ui/side-menu/side-menu.component';
import {NgIf} from '@angular/common';
import {AfterViewInit, Component, OnInit, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [RouterOutlet, PageHeaderComponent, SideMenuComponent, NgIf],
})
export class MainComponent implements AfterViewInit {
  private readonly userService: UserService = inject(UserService);
  userData$: Observable<User> = this.userService.user$;

  ngAfterViewInit(): void {
    this.userService.getUserData().then();
  }
}
