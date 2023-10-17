import {Routes} from '@angular/router';

export const influencersRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@influencers/feature/influencers-list/influencers-list.component').then(c => c.InfluencersListComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('@influencers/feature/influencer-detail/influencer-detail.component').then(
        c => c.InfluencerDetailComponent,
      ),
  },
  {
    path: ':id/request',
    loadComponent: () =>
      import('@influencers/feature/submit-request/submit-request.component').then(c => c.SubmitRequestComponent),
  },
];
