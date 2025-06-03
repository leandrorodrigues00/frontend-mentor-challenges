import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  IFormStepsData,
  IAddOns,
  IBillingInterval,
  IPersonalInfo,
  IPlanName,
} from '../interfaces/form-data.interface';

@Injectable({
  providedIn: 'root',
})
export class FormStateService {
  protected readonly _STORAGE_KEY = 'MultiStepForm';
  protected readonly _data$ = new BehaviorSubject<IFormStepsData>(
    this._initializeData()
  );

  readonly data$ = this._data$.asObservable();

  get currentValue() {
    return this._data$.value;
  }

  protected _initializeData(): IFormStepsData {
    const SAVED_DATA = localStorage.getItem(this._STORAGE_KEY);
    return SAVED_DATA
      ? JSON.parse(SAVED_DATA)
      : {
          personal: { name: '', email: '', phone: '' },
          plan: { planName: 'arcade', interval: 'monthly' },
          addons: {
            online: false,
            storage: false,
            profile: false,
          },
        };
  }

  updatePersonal(info: Partial<IPersonalInfo>): void {
    this._patchState({ personal: { ...this._data$.value.personal, ...info } });
  }

  updatePlan(planName: IPlanName, interval: IBillingInterval): void {
    this._patchState({ plan: { planName, interval } });
  }

  updateAddOns(addons: Partial<IAddOns>): void {
    this._patchState({ addons: { ...this._data$.value.addons, ...addons } });
  }

  protected _patchState(patch: Partial<IFormStepsData>): void {
    const NEW_DATA = { ...this._data$.value, ...patch };
    this._data$.next(NEW_DATA);
    localStorage.setItem(this._STORAGE_KEY, JSON.stringify(NEW_DATA));
  }
}
