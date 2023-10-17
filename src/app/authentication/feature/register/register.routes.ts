import {Routes} from '@angular/router';

export const registerRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user-type',
  },
  {
    path: 'user-type',
    loadComponent: () => import('./user-type/user-type.component').then(c => c.UserTypeComponent),
  },
  {
    path: 'basic-info',
    loadComponent: () => import('./basic-info/basic-info.component').then(c => c.BasicInfoComponent),
  },
  {
    path: 'business-info',
    loadComponent: () =>
      import('./business-info-form/business-info-form.component').then(c => c.BusinessInfoFormComponent),
  },
  {
    path: 'influencer-info',
    loadComponent: () =>
      import('./influencer-info-form/influencer-info-form.component').then(c => c.InfluencerInfoFormComponent),
  },
  {
    path: 'select-profile-photo',
    loadComponent: () =>
      import('./select-profile-photo/select-profile-photo.component').then(c => c.SelectProfilePhotoComponent),
  },
];
