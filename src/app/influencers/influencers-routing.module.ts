import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  /*{
    path: ':id',
    loadComponent: () =>
      import('./influencer-detail/influencer-detail.component').then(c => c.InfluencerDetailComponent),
  },*/
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfluencersRoutingModule {}
