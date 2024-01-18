import imageCompression, {Options} from 'browser-image-compression';
import {BehaviorSubject, Observable} from 'rxjs';

type CompressFormat = 'PROFILE_PHOTOS' | 'READY_FOR_CROP' | 'GENERAL' | 'PRODUCT';
const fileType = 'image/png';

const progressValue = new BehaviorSubject<number>(0);

function onProgress(progress: number): void {
  progressValue.next(progress);
}

const profilePhotoOptions: Options = {
  maxSizeMB: 0.2,
  maxWidthOrHeight: 320,
  maxIteration: 20,
  onProgress,
  fileType: fileType,
};

const generalOptions: Options = {
  maxSizeMB: 0.7,
  maxWidthOrHeight: 780,
  maxIteration: 20,
  onProgress,
  fileType: fileType,
};

const readyForCropOption: Options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 900,
  maxIteration: 20,
  onProgress,
  fileType: fileType,
};

export class ImageCompressor {
  static compress(image: File, options: CompressFormat): Promise<File> {
    switch (options) {
      case 'PROFILE_PHOTOS':
        return imageCompression(image, profilePhotoOptions);
      case 'READY_FOR_CROP':
        return imageCompression(image, readyForCropOption);
      default:
        return imageCompression(image, generalOptions);
    }
  }

  static get progressPercentage(): Observable<number> {
    return progressValue.asObservable();
  }

  static canvasToFile(canvas: HTMLCanvasElement): Promise<File> {
    return imageCompression.canvasToFile(canvas, fileType, 'image', new Date().getDate());
  }

  static fileToDataUrl(file: File): Promise<string> {
    return imageCompression.getDataUrlFromFile(file);
  }

  static dataUrlToFile(data: string): Promise<File> {
    return imageCompression.getFilefromDataUrl(data, 'file', new Date().getDate());
  }
}
