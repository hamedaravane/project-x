import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {screenSizeGuard} from "./core/screen-size.guard";
import {PurpleDatePickerComponent} from "@shared/ui/purple-date-picker/purple-date-picker.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app'
  },
  {
    path: 'app',
    loadComponent: () => import('./shared/ui/device-error/device-error.component').then(c => c.DeviceErrorComponent),
    canActivate: [screenSizeGuard]
  },
  {
    path: 'error',
    pathMatch: 'full',
    loadComponent: () => import('./shared/ui/device-error/device-error.component').then(c => c.DeviceErrorComponent),
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'test',
    component: PurpleDatePickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
