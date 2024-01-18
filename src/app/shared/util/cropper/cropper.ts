const profilePhoto: Cropper.Options = {
  aspectRatio: 1,
  autoCrop: true,
  autoCropArea: 3,
  background: true,
  center: true,
  checkCrossOrigin: true,
  checkOrientation: true,
  cropBoxMovable: true,
  cropBoxResizable: true,
  dragMode: 'crop',
  guides: true,
  highlight: true,
  initialAspectRatio: 1,
  restore: true,
  rotatable: true,
  viewMode: 2,
  wheelZoomRatio: 1,
};

export default class ImageCropper {
  static get profilePhotoOptions(): Cropper.Options {
    return profilePhoto;
  }
}
