import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'user-type',
    pathMatch: 'full',
    loadComponent: () => import('./user-type/user-type.component').then(c => c.UserTypeComponent),
  },
  {
    path: 'basic-info',
    loadComponent: () => import('./basic-info/basic-info.component').then(c => c.BasicInfoComponent)
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}
