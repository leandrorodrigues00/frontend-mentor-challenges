import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormStateService } from '@domain/multi-step-subscription/services/form-state.service';
import { iPlanConfig } from '@domain/multi-step-subscription/interfaces/plan-config.interface';
import { PLANS } from '@domain/multi-step-subscription/constants/plans.constants';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.page.html',
  styleUrls: ['./select-plan.page.scss'],
})
export class SelectPlanPage implements OnInit {
  readonly plans = PLANS;
  planForm: FormGroup;
  submitted = false;

  get priceSuffix(): string {
    return this.planForm.get('isYearly')?.value ? '/yr' : '/mo';
  }

  constructor(
    protected _router: Router,
    protected _formStateSvc: FormStateService
  ) {
    this.planForm = new FormGroup({
      plan: new FormControl('arcade', Validators.required),
      isYearly: new FormControl(false, Validators.required),
    });
  }

  ngOnInit(): void {
    this._formStateSvc.data$.pipe(take(1)).subscribe((formData) => {
      if (formData.plan) {
        this.planForm.patchValue({
          plan: formData.plan.planName,
          isYearly: formData.plan.interval === 'yearly',
        });
      }
    });
  }

  onNextStep(): void {
    this.submitted = true;
    if (this.planForm.invalid) {
      this.planForm.markAllAsTouched();
      return;
    }

    if (this.planForm.valid) {
      const INTERVAL = this.planForm.value.isYearly ? 'yearly' : 'monthly';
      this._formStateSvc.updatePlan(this.planForm.value.plan, INTERVAL);
      this._router.navigate(['subscription/add-ons']);
    }
  }

  getPlanPrice(plan: iPlanConfig): string {
    const PRICE = this.planForm.value.isYearly
      ? plan.yearlyPrice
      : plan.monthlyPrice;

    return `$${PRICE}${this.priceSuffix}`;
  }
}
