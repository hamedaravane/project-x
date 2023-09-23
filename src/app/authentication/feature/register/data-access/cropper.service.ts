import Cropper from 'cropperjs';
import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CropperService {
  /**
   * Initializes a Cropper instance on the given image element with the specified options.
   *
   * @param {ElementRef} imageElement - The reference to the image DOM element.
   * @param {object} options - Cropper initialization options.
   * @returns {Cropper} - Returns the initialized Cropper instance.
   */
  initCropper(imageElement: ElementRef, options: any): Cropper {
    return new Cropper(imageElement.nativeElement, options);
  }
}
