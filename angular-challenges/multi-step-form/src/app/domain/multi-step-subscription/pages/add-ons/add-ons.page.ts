import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ADD_ONS_LIST } from '@domain/multi-step-subscription/constants/list-add-ons.constants';
import { FormStateService } from '@domain/multi-step-subscription/services/form-state.service';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.page.html',
  styleUrls: ['./add-ons.page.scss'],
})
export class AddOnsPage implements OnInit {
  addons = ADD_ONS_LIST;
  addOnsForm: FormGroup;
  submitted = false;

  get isYearly(): boolean {
    return this._formStateSvc.currentValue.plan?.interval === 'yearly';
  }

  constructor(
    protected _router: Router,
    protected _formStateSvc: FormStateService
  ) {
    this.addOnsForm = new FormGroup({
      online: new FormControl(false, Validators.required),
      storage: new FormControl(false, Validators.required),
      profile: new FormControl(false, Validators.required),
    });
  }

  ngOnInit(): void {
    this._formStateSvc.data$.pipe(take(1)).subscribe((formData) => {
      if (this.addOnsForm) {
        this.addOnsForm.patchValue({
          online: formData.addons.online,
          storage: formData.addons.storage,
          profile: formData.addons.profile,
        });
      }
    });
  }

  toggleAddon(addon: {
    id: string;
    name: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
  }): void {
    const CONTROL = this.addOnsForm.get(addon.id);

    if (CONTROL) {
      const NEW_VALUE = !CONTROL.value;
      CONTROL.setValue(NEW_VALUE);
    }
  }

  isSelected(addonId: string): boolean {
    return !!this.addOnsForm.get(addonId)?.value;
  }

  getPrice(price: number): string {
    const SUFFIX = this.isYearly ? '/yr' : '/mo';
    return `+$${price}${SUFFIX}`;
  }

  onNextStep(): void {
    this.submitted = true;
    if (this.addOnsForm.invalid) {
      this.addOnsForm.markAllAsTouched();
      return;
    }
    if (this.addOnsForm.valid) {
      this._formStateSvc.updateAddOns(this.addOnsForm.value);
      this._router.navigate(['subscription/summary']);
    }
  }

  trackByAddOnId(index: number): number {
    return index;
  }
}
