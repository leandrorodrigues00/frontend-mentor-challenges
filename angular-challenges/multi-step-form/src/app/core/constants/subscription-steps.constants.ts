import { iSubscriptionStep } from '../interfaces/subscription-step.interface';

export const SUBSCRIPTION_STEPS: iSubscriptionStep[] = [
  {
    number: 1,
    label: 'STEP 1',
    description: 'YOUR INFO',
    route: '/subscription',
  },
  {
    number: 2,
    label: 'STEP 2',
    description: 'SELECT PLAN',
    route: '/subscription/select-plan',
  },
  {
    number: 3,
    label: 'STEP 3',
    description: 'ADD-ONS',
    route: '/subscription/add-ons',
  },
  {
    number: 4,
    label: 'STEP 4',
    description: 'SUMMARY',
    route: '/subscription/summary',
  },
];
