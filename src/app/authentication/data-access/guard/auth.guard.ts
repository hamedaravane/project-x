import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {TokenStorageService} from '@authentication/data-access/token-storage.service';

export const authGuardFn: CanActivateFn = (): boolean => {
  const tokenStorageService = inject(TokenStorageService);
  const router = inject(Router);
  if (tokenStorageService.getAccessToken()) {
    return true;
  } else {
    router.navigateByUrl('/auth/login').then();
    return false;
  }
};
