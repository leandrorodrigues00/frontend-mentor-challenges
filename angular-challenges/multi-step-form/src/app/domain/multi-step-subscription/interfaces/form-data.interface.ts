export interface IPersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export type IBillingInterval = 'monthly' | 'yearly';
export type IPlanName = 'arcade' | 'advanced' | 'pro';

export interface IPlanSelection {
  planName: IPlanName;
  interval: IBillingInterval;
}

export interface IAddOns {
  online: boolean;
  storage: boolean;
  profile: boolean;
}

export interface IFormStepsData {
  personal: IPersonalInfo;
  plan: IPlanSelection;
  addons: IAddOns;
}
