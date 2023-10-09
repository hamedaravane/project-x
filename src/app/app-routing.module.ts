import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {screenSizeGuard} from './core/screen-size.guard';
import {InfluencerDetailComponent} from './influencers/influencer-detail/influencer-detail.component';
import {InfluencersListComponent} from './influencers/influencers-list/influencers-list.component';
import {SubmitRequestComponent} from './influencers/submit-request/submit-request.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app',
  },
  {
    path: 'app',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  },
  {
    path: 'error',
    loadComponent: () => import('./shared/ui/device-error/device-error.component').then(c => c.DeviceErrorComponent),
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: 'test',
    component: InfluencersListComponent,
  },
  {
    path: 'test/:id',
    component: InfluencerDetailComponent,
  },
  {
    path: 'test/:id/request',
    component: SubmitRequestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
