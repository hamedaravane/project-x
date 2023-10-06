import {NgOptimizedImage} from '@angular/common';
import {Component, Input, OnInit, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  standalone: true,
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  imports: [NgOptimizedImage],
})
export class PageHeaderComponent implements OnInit {
  private readonly routerLink: Router = inject(Router);
  @Input() profilePhoto!: string;
  @Input() link!: string;

  ngOnInit(): void {
    this.profilePhoto = 'assets/mock/profile-photos/business-profile-photo.png';
  }

  back(): void {
    this.routerLink.navigate(['/', this.link]).then();
  }
}
