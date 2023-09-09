import { Component } from '@angular/core';
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzButtonModule} from "ng-zorro-antd/button";

@Component({
  standalone: true,
  selector: 'app-select-profile-photo',
  templateUrl: './select-profile-photo.component.html',
  imports: [
    NzUploadModule,
    NzButtonModule
  ],
  styleUrls: ['./select-profile-photo.component.scss']
})
export class SelectProfilePhotoComponent {

}
