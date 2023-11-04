import {NgIf} from '@angular/common';
import {Component, OnInit, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CollaborationsService} from '@user/data-access/collaborations.service';
import {User} from '@user/data-access/model/user.model';
import {UserService} from '@user/data-access/user.service';
import {PageHeaderComponent} from '@shared/ui/page-header/page-header.component';
import {SideMenuComponent} from '@shared/ui/side-menu/side-menu.component';
import {Observable} from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [RouterOutlet, PageHeaderComponent, SideMenuComponent, NgIf],
})
export class MainComponent implements OnInit {
  private readonly userService: UserService = inject(UserService);
  private readonly collaborationsService: CollaborationsService = inject(CollaborationsService);
  userData$: Observable<User> = this.userService.user$;

  ngOnInit(): void {
    this.userService.getUserData().then();
    this.collaborationsService.getCollaborationsData().then();
  }
}
