import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'enter-email',
    loadComponent: () => import('./enter-email/enter-email.component').then(c => c.EnterEmailComponent)
  },
  {
    path: 'enter-code',
    loadComponent: () => import('./enter-code/enter-code.component').then(c => c.EnterCodeComponent)
  },
  {
    path: 'set-new-password',
    loadComponent: () => import('./set-new-password/set-new-password.component').then(c => c.SetNewPasswordComponent)
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetPasswordRoutingModule {}
