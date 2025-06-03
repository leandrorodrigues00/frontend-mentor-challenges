import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { MultiStepSubscriptionRoutingModule } from './multi-step-subscription-routing.module';
import { AddOnsPage } from './pages/add-ons/add-ons.page';
import { PersonalInfoPage } from './pages/personal-info/personal-info.page';
import { SelectPlanPage } from './pages/select-plan/select-plan.page';
import { SummaryPage } from './pages/summary/summary.page';
import { ThankYouPage } from './pages/thank-you/thank-you.page';

@NgModule({
  declarations: [
    PersonalInfoPage,
    SelectPlanPage,
    AddOnsPage,
    SummaryPage,
    ThankYouPage,
  ],
  imports: [
    CommonModule,
    MultiStepSubscriptionRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class MultiStepSubscriptionModule {}
