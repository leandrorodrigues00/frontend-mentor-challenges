import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormStepGuard } from '@core/guards/form-step.guard';
import { MultiStepSubscriptionLayout } from '@core/layouts/multi-step-subscription/multi-step-subscription.layout';

import { AddOnsPage } from './pages/add-ons/add-ons.page';
import { PersonalInfoPage } from './pages/personal-info/personal-info.page';
import { SelectPlanPage } from './pages/select-plan/select-plan.page';
import { SummaryPage } from './pages/summary/summary.page';
import { ThankYouPage } from './pages/thank-you/thank-you.page';

export const SUBSCRIPTION_ROUTES: Routes = [
  {
    path: '',
    component: MultiStepSubscriptionLayout,
    children: [
      {
        path: '',
        component: PersonalInfoPage,
      },
      {
        path: 'select-plan',
        component: SelectPlanPage,
      },
      {
        path: 'add-ons',
        component: AddOnsPage,
        canActivate: [FormStepGuard],
      },
      {
        path: 'summary',
        component: SummaryPage,
        canActivate: [FormStepGuard],
      },
      {
        path: 'thank-you',
        component: ThankYouPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(SUBSCRIPTION_ROUTES)],
  exports: [RouterModule],
})
export class MultiStepSubscriptionRoutingModule {}
