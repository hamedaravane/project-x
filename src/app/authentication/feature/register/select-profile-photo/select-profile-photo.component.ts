import {NgClass, NgIf} from '@angular/common';
import {Component, ElementRef, ViewChild, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {RegisterService} from '@authentication/data-access/register.service';
import {PhotoComponent} from '@shared/data-access/photo.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzUploadModule} from 'ng-zorro-antd/upload';

@Component({
  standalone: true,
  selector: 'app-select-profile-photo',
  templateUrl: './select-profile-photo.component.html',
  imports: [NzUploadModule, NzButtonModule, NzModalModule, NgIf, RouterLink, NgClass],
  styleUrls: ['./select-profile-photo.component.scss'],
})
export class SelectProfilePhotoComponent extends PhotoComponent {
  @ViewChild('fileInput') override fileInput!: ElementRef;
  @ViewChild('image') override imageElement!: ElementRef;
  private readonly registerService = inject(RegisterService);

  submitRegistration(): void {
    this.registerService.submitInfluencerData();
  }
}
