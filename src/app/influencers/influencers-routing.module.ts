import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./influencers-list/influencers-list.component').then(c => c.InfluencersListComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./influencer-detail/influencer-detail.component').then(c => c.InfluencerDetailComponent),
  },
  {
    path: ':id/request',
    loadComponent: () => import('./submit-request/submit-request.component').then(c => c.SubmitRequestComponent),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfluencersRoutingModule {}
