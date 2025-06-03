import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'subscription',
    pathMatch: 'full',
  },
  {
    path: 'subscription',
    loadChildren: () =>
      import(
        './domain/multi-step-subscription/multi-step-subscription.module'
      ).then((m) => m.MultiStepSubscriptionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
