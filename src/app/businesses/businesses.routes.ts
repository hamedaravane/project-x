import {Routes} from '@angular/router';

export const businessesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/root/root.component').then(c => c.RootComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main',
      },
      {
        path: 'main',
        loadComponent: () => import('./feature/main/main.component').then(c => c.MainComponent),
      },
    ],
  },
];
