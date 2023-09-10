import { Injectable } from '@angular/core';
import imageCompression from 'browser-image-compression';

@Injectable({
  providedIn: 'root'
})
export class ImageCompressionService {
  private readonly DEFAULT_OPTIONS = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1000,
    useWebWorker: true,
    maxIteration: 15
  };

  /**
   * Compresses the given image file based on the provided options or default options.
   *
   * @param {File} imageFile - The image file to compress.
   * @param {object} [options=this.DEFAULT_OPTIONS] - Compression options.
   * @returns {Promise<File>} - Returns a Promise that resolves to the compressed file.
   */
  compressImage(imageFile: File, options: any = this.DEFAULT_OPTIONS): Promise<File> {
    return imageCompression(imageFile, options);
  }
}
