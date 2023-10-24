import {Routes} from '@angular/router';

export const settingsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/root/root.component').then(c => c.RootComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./feature/main/main.component').then(c => c.MainComponent),
      },
    ],
  },
];
