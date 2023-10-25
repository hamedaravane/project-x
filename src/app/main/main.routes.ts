import {Routes} from '@angular/router';
import {MainComponent} from '@main/root/main.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'settings',
        loadChildren: () => import('@settings/settings.routes').then(r => r.settingsRoutes),
      },
      {
        path: 'user',
        loadChildren: () => import('@user/user.routes').then(r => r.userRoutes),
      },
      {
        path: '',
        loadChildren: () => import('@influencers/influencers.routes').then(r => r.influencersRoutes),
      },
    ],
  },
];
