import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () => import('./feature/login-form/login-form.component').then(c => c.LoginFormComponent)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
