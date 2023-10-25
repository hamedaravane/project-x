import {Routes} from '@angular/router';

export const settingsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/main/main.component').then(c => c.MainComponent),
  },
];
