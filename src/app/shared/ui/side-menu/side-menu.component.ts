import {NgOptimizedImage} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  standalone: true,
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [NgOptimizedImage],
})
export class SideMenuComponent implements OnInit {
  @Input() profilePhoto!: string;
  ngOnInit(): void {
    this.profilePhoto = 'assets/mock/profile-photos/business-profile-photo.png';
  }
}
