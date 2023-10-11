import {PageHeaderComponent} from '@shared/ui/page-header/page-header.component';
import {SideMenuComponent} from '@shared/ui/side-menu/side-menu.component';
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [RouterOutlet, PageHeaderComponent, SideMenuComponent, NgIf],
})
export class MainComponent {}
