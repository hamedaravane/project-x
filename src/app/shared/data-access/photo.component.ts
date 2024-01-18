import {Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import Cropper from 'cropperjs';
import {ImageCompressor} from '@shared/util/image-compressor/image-compressor';
import {map} from 'rxjs';
import ImageCropper from '@shared/util/cropper/cropper';

@Component({
  standalone: true,
  template: ``,
})
export class PhotoComponent implements OnDestroy {
  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('image') imageElement!: ElementRef<HTMLImageElement>;
  cropper!: Cropper;
  isCropModalVisible = false;
  selectedImageSrc: string | null = null;
  croppedImageSrc: string | null = null;
  compressedCroppedImageFile!: File;
  progressPercentage$ = ImageCompressor.progressPercentage.pipe(
    (map((value) => {
      if (value > 99.0 || value < 0.01) {
        return false;
      } else {
        return value;
      }
    }))
  );

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

    ImageCompressor.compress(input.files[0], 'READY_FOR_CROP')
      .then((file): void => {
        this.selectedImageSrc = URL.createObjectURL(file);
        this.isCropModalVisible = true;
      })
      .then(() => {
        this.initCropper();
      });
  }

  /**
   * Initializes or re-initializes the Cropper instance on the image element.
   */
  initCropper(): void {
    if (this.cropper) {
      this.cropper.destroy();
    }
    setTimeout(() => {
      this.cropper = new Cropper(this.imageElement.nativeElement, ImageCropper.profilePhotoOptions);
    });
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
      ImageCompressor.canvasToFile(canvas)
        .then((file): File => {
          return file;
        })
        .then((croppedFile): Promise<File> => {
          return ImageCompressor.compress(croppedFile, 'PROFILE_PHOTOS');
        })
        .then((compressedCroppedFile) => {
          this.cropper.destroy();
          this.isCropModalVisible = false;
          this.compressedCroppedImageFile = compressedCroppedFile;
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
   * Programmatically triggers the file input to open the file selection dialog.
   */
  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
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
