import {Routes} from '@angular/router';

export const forgetPasswordRoutes: Routes = [
  {
    path: '',
    redirectTo: 'enter-email',
    pathMatch: 'full',
  },
  {
    path: 'enter-email',
    loadComponent: () => import('./enter-email/enter-email.component').then(c => c.EnterEmailComponent),
    pathMatch: 'full',
  },
  {
    path: 'enter-code',
    loadComponent: () => import('./enter-code/enter-code.component').then(c => c.EnterCodeComponent),
    pathMatch: 'full',
  },
  {
    path: 'set-new-password',
    loadComponent: () => import('./set-new-password/set-new-password.component').then(c => c.SetNewPasswordComponent),
    pathMatch: 'full',
  },
];
