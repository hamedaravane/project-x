import {Routes} from '@angular/router';

export const userRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@user/feature/root/root.component').then(c => c.RootComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'edit',
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./feature/edit-information/edit-information.component').then(c => c.EditInformationComponent),
      },
      {
        path: 'collaborations',
        loadComponent: () =>
          import('./feature/collaborations/collaborations.component').then(c => c.CollaborationsComponent),
      },
    ],
  },
];
