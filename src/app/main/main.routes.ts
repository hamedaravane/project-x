import {Routes} from '@angular/router';

export const mainRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@main/root/main.component').then(c => c.MainComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'influencers',
      },
      {
        path: 'influencers',
        loadChildren: () => import('@influencers/influencers.routes').then(r => r.influencersRoutes),
      },
      {
        path: 'businesses',
        loadChildren: () => import('@businesses/businesses.routes').then(r => r.businessesRoutes),
      },
      {
        path: 'settings',
        loadChildren: () => import('@settings/settings.routes').then(r => r.settingsRoutes),
        canActivate: [],
      },
      {
        path: 'user',
        loadChildren: () => import('@user/user.routes').then(r => r.userRoutes),
      },
    ],
  },
];
