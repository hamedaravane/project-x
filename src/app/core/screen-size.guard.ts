import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {DeviceService} from '../shared/device.service'

export const screenSizeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (DeviceService.isDesktop) {
    router.navigate(['/error']).then();
    return false;
  }
  return true;
};
