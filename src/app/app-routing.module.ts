import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('@main/main.routes').then(r => r.mainRoutes),
  },
  {
    path: 'error',
    loadChildren: () => import('@error/error.routes').then(r => r.errorRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('@authentication/authentication.routes').then(r => r.authenticationRoutes),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
