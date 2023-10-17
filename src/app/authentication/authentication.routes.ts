import {Routes} from '@angular/router';
import {AuthenticationComponent} from '@authentication/root/authentication.component';

export const authenticationRoutes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () => import('./feature/login-form/login-form.component').then(c => c.LoginFormComponent),
      },
      {
        path: 'register',
        loadChildren: () => import('./feature/register/register.routes').then(r => r.registerRoutes),
      },
      {
        path: 'forget-password',
        loadChildren: () =>
          import('./feature/forget-password/forget-password.routes').then(r => r.forgetPasswordRoutes),
      },
    ],
  },
];
