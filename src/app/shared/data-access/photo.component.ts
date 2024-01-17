import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject} from '@angular/core';
import {CropperService} from '@shared/data-access/cropper.service';
import {ImageCompressionService} from '@shared/data-access/image-compression.service';
import Cropper from 'cropperjs';

@Component({
  standalone: true,
  template: ``,
})
export class PhotoComponent implements AfterViewInit, OnDestroy {
  private readonly imageCompressionService = inject(ImageCompressionService);
  private readonly cropperService = inject(CropperService);
  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('image') imageElement!: ElementRef;
  compressedFile!: File;
  selectedImageSrc: string | null = null;
  croppedImageSrc: string | null = null;
  croppedImageFile!: File;
  isCropModalVisible = false;
  cropper!: Cropper;

  /**
   * Programmatically triggers the file input to open the file selection dialog.
   */
  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  /**
   * Handles the event when a file is selected. Compresses and prepares the image for cropping.
   *
   * @param {Event} event - The file selection event.
   */
  onFileSelected(event: Event): void {
    const input: HTMLInputElement = event.target as HTMLInputElement;

    if (!input.files || !input.files[0]) {
      return;
    }

    this.imageCompressionService.compressImage(input.files[0]).then(f => {
      this.compressedFile = f;
      this.selectedImageSrc = URL.createObjectURL(this.compressedFile);
      this.isCropModalVisible = true;
      setTimeout(() => {
        this.initCropper();
      });
    });
  }

  /**
   * Initializes or re-initializes the Cropper instance on the image element.
   */
  initCropper(): void {
    if (this.cropper) {
      this.cropper.destroy();
    }

    const options = {aspectRatio: 1, background: true, center: true, autoCropArea: 2};
    this.cropper = this.cropperService.initCropper(this.imageElement, options);
  }

  /**
   * Closes the cropping modal and resets any selected or cropped images.
   */
  cancelCropModal(): void {
    this.selectedImageSrc = null;
    this.croppedImageSrc = null;
    this.isCropModalVisible = false;
  }

  /**
   * Confirms the image cropping, generates the data URL of the cropped image, and closes the cropping modal.
   */
  confirmCrop(): void {
    const canvas = this.cropper.getCroppedCanvas();

    if (canvas) {
      this.selectedImageSrc = null;
      this.croppedImageSrc = canvas.toDataURL();
      new Promise<void>((resolve, reject): void => {
        canvas.toBlob((blob) => {
          if (blob) {
            this.croppedImageFile = new File([blob], 'profile_photo', { type: blob.type });
            console.log('cropped image file generated');
            console.log('size: ', Math.round(this.croppedImageFile.size / 1024 / 1024), 'MB');
            resolve();
          } else {
            reject('Failed to convert canvas to Blob.');
          }
        });
      }).then(() => {
        this.cropper.destroy();
        this.isCropModalVisible = false;
      });
    }
  }

  /**
   * Clear the selected Image
   */
  clearSelectedImage(): void {
    this.selectedImageSrc = null;
    this.croppedImageSrc = null;
  }

  /**
   * After view initialization, sets up the Cropper if a cropped image is already available.
   */
  ngAfterViewInit(): void {
    if (this.croppedImageSrc) {
      this.initCropper();
    }
  }

  /**
   * Cleanup method to destroy the Cropper instance before the component is destroyed.
   */
  ngOnDestroy(): void {
    if (this.cropper) {
      this.cropper.destroy();
    }
  }
}
