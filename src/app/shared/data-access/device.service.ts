/**
 * Service for handling device-related utilities.
 */
export class DeviceService {
  /**
   * Determines if the current device is a desktop based on its window width.
   * @return {boolean} Returns true if the window inner width is 1024 pixels or more, otherwise false.
   */
  static get isDesktop(): boolean {
    return window.innerWidth >= 1024;
  }
}
