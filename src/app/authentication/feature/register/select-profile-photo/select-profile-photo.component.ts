import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzButtonModule} from "ng-zorro-antd/button";
import Cropper from 'cropperjs';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-select-profile-photo',
  templateUrl: './select-profile-photo.component.html',
  imports: [
    NzUploadModule,
    NzButtonModule,
    NzModalModule,
    NgIf,
    RouterLink
  ],
  styleUrls: ['./select-profile-photo.component.scss']
})
export class SelectProfilePhotoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('image') imageElement!: ElementRef;
  selectedImageSrc: string | null = null;
  isCropModalVisible = false;
  cropper!: Cropper;

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;

    if (!input.files || !input.files[0]) {
      return;
    }

    const file = input.files[0];
    this.selectedImageSrc = URL.createObjectURL(file);
    this.isCropModalVisible = true;

    setTimeout(() => {
      this.initCropper();
    });
  }

  initCropper() {
    if (this.cropper) {
      this.cropper.destroy();
    }

    this.cropper = new Cropper(this.imageElement.nativeElement, {
      aspectRatio: 1,
    });
  }

  closeCropModal() {
    this.isCropModalVisible = false;
  }

  confirmCrop() {
    const canvas = this.cropper.getCroppedCanvas();

    if (canvas) {
      this.selectedImageSrc = canvas.toDataURL();
    }

    this.cropper.destroy();
    this.isCropModalVisible = false;
  }

  ngAfterViewInit() {
    if (this.selectedImageSrc) {
      this.initCropper();
    }
  }

  ngOnDestroy() {
    if (this.cropper) {
      this.cropper.destroy();
    }
  }
}
