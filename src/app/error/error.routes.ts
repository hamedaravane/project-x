import {Routes} from '@angular/router';

export const errorRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./ui/device-error/device-error.component').then(c => c.DeviceErrorComponent),
  },
];
