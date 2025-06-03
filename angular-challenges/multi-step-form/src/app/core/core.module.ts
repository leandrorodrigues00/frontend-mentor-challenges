import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MultiStepSubscriptionLayout } from './layouts/multi-step-subscription/multi-step-subscription.layout';

@NgModule({
  declarations: [MultiStepSubscriptionLayout],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
