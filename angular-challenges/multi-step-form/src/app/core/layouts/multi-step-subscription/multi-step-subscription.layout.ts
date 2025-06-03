import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SUBSCRIPTION_STEPS } from '../../constants/subscription-steps.constants';

@Component({
  selector: 'app-multi-step-subscription',
  templateUrl: './multi-step-subscription.layout.html',
  styleUrls: ['./multi-step-subscription.layout.scss'],
})
export class MultiStepSubscriptionLayout {
  subscriptionSteps = SUBSCRIPTION_STEPS;

  constructor(protected _router: Router) {}

  isStepActive(stepPath: string): boolean {
    if (stepPath === '/subscription') {
      return this._router.url === '/subscription';
    } else {
      return this._router.url.startsWith(stepPath);
    }
  }
}
