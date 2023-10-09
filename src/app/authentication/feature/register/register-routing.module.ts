import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-type',
    pathMatch: 'full',
  },
  {
    path: 'user-type',
    pathMatch: 'full',
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
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
