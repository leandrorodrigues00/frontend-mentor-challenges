import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { FormStateService } from '@domain/multi-step-subscription/services/form-state.service';

@Injectable({
  providedIn: 'root',
})
export class FormStepGuard implements CanActivate {
  constructor(
    protected _router: Router,
    protected _formStateSvc: FormStateService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const FORM_DATA = this._formStateSvc.currentValue;

    const HAS_PERSONAL_INFO =
      !!FORM_DATA.personal?.name &&
      !!FORM_DATA.personal?.email &&
      !!FORM_DATA.personal?.phone;

    const HAS_PLAN_INFO =
      !!FORM_DATA.plan?.planName && !!FORM_DATA.plan?.interval;

    if (!HAS_PERSONAL_INFO || !HAS_PLAN_INFO) {
      this._router.navigate(['/subscription']);
      return false;
    }

    return true;
  }
}
