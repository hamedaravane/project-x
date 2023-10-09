import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./feature/login-form/login-form.component').then(c => c.LoginFormComponent),
      },
      {
        path: 'register',
        loadChildren: () => import('./feature/register/register.module').then(m => m.RegisterModule),
      },
      {
        path: 'forget-password',
        loadChildren: () =>
          import('./feature/forget-password/forget-password.module').then(m => m.ForgetPasswordModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
