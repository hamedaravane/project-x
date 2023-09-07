import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () => import('./feature/login-form/login-form.component').then(c => c.LoginFormComponent)
  },
  {
    path: 'register',
    pathMatch: 'full',
    loadComponent: () => import('./feature/register-form/register-form.component').then(c => c.RegisterFormComponent)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
