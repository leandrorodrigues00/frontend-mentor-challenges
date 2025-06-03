import { take } from 'rxjs';
import { AfterViewInit, Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { VALIDATION_MESSAGES } from '../../constants/validation-messages.constants';
import { iValidationMessages } from '../../interfaces/validation-messages.interface';
import { FormStateService } from '@domain/multi-step-subscription/services/form-state.service';

export function fullNameValidator(control: AbstractControl) {
  const VALUE = control.value as string;

  if (!VALUE) {
    return null;
  }

  const PARTS = VALUE.trim().split(/\s+/);

  if (PARTS.length < 2) {
    return {
      invalidName: 'Please enter at least first and last name',
    };
  }

  return null;
}

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements AfterViewInit {
  personalInfoForm: FormGroup;
  submitted = false;

  constructor(
    protected _router: Router,
    protected _formStateSvc: FormStateService
  ) {
    this.personalInfoForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, fullNameValidator]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(14),
      ]),
    });
  }

  ngAfterViewInit(): void {
    this._formStateSvc.data$.pipe(take(1)).subscribe((formData) => {
      if (formData.personal) {
        this.personalInfoForm.patchValue({
          name: formData.personal.name,
          email: formData.personal.email,
          phone: formData.personal.phone,
        });
      }
    });
  }

  getError(controlName: keyof iValidationMessages): string | null {
    const CONTROL = this.personalInfoForm.get(controlName);

    if (!CONTROL?.errors || (!CONTROL.touched && !this.submitted)) {
      return null;
    }

    const ERROR_KEY = Object.keys(
      CONTROL.errors
    )[0] as keyof iValidationMessages[typeof controlName];
    return VALIDATION_MESSAGES[controlName][ERROR_KEY] || 'Invalid field';
  }

  onNextStep(): void {
    this.submitted = true;
    if (this.personalInfoForm.invalid) {
      this.personalInfoForm.markAllAsTouched();
      return;
    }
    if (this.personalInfoForm.valid) {
      this._formStateSvc.updatePersonal(this.personalInfoForm.value);
      this._router.navigate(['subscription/select-plan']);
    }
  }
}
