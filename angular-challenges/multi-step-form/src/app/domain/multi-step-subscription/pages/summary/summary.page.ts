import { Component } from '@angular/core';

import { PLANS } from '@domain/multi-step-subscription/constants/plans.constants';
import { ADD_ONS_LIST } from '@domain/multi-step-subscription/constants/list-add-ons.constants';
import { FormStateService } from '@domain/multi-step-subscription/services/form-state.service';
import {
  IAddOns,
  IPlanSelection,
} from '@domain/multi-step-subscription/interfaces/form-data.interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage {
  addonsList = ADD_ONS_LIST;
  readonly plans = PLANS;

  get selectedPlan(): IPlanSelection {
    return this._formStateSvc.currentValue.plan;
  }

  get isYearly(): boolean {
    return this.selectedPlan?.interval === 'yearly';
  }

  constructor(protected _formStateSvc: FormStateService) {}

  isAddonSelected(addonId: string): boolean {
    return this._formStateSvc.currentValue.addons[addonId as keyof IAddOns];
  }

  getAddonPrice(addon: (typeof ADD_ONS_LIST)[number]): string {
    const PRICE = this.isYearly ? addon.yearlyPrice : addon.monthlyPrice;
    return `+$${PRICE}/${this.isYearly ? 'yr' : 'mo'}`;
  }

  getPlanPrice(): string {
    const PLAN = this.plans.find((p) => p.value === this.selectedPlan.planName);
    return PLAN
      ? `$${this.isYearly ? PLAN.yearlyPrice : PLAN.monthlyPrice}/${
          this.isYearly ? 'yr' : 'mo'
        }`
      : '$0/mo';
  }

  calculateTotal(): number {
    let total = 0;
    const SELECTED_PLAN = this.plans.find(
      (p) => p.value === this.selectedPlan.planName
    );

    if (SELECTED_PLAN) {
      total += this.isYearly
        ? SELECTED_PLAN.yearlyPrice
        : SELECTED_PLAN.monthlyPrice;
    }

    Object.entries(this._formStateSvc.currentValue.addons).forEach(
      ([addonId, isSelected]) => {
        if (isSelected) {
          const ADD_ON = ADD_ONS_LIST.find((a) => a.id === addonId);
          if (ADD_ON) {
            total += this.isYearly ? ADD_ON.yearlyPrice : ADD_ON.monthlyPrice;
          }
        }
      }
    );

    return total;
  }
}
