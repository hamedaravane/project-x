import {Routes} from '@angular/router';

export const userRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./feature/edit-information/edit-information.component').then(c => c.EditInformationComponent),
  },
];
