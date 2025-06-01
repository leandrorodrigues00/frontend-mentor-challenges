import { twMerge } from 'tailwind-merge'

import { Addons, chosenAddOnsProps } from '@/lib/schema'

import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value: number | undefined, billingModel: string) {
  if (!value) return
  const divider = billingModel === 'monthly' ? '/mo' : '/yr'
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)

  return `${formattedValue.replace('.00', '')}${divider}`
}

export function getPlanValue(
  planChoice: 'arcade' | 'advanced' | 'pro',
  billingModel: string,
) {
  const planPrices = {
    arcade: 9,
    advanced: 12,
    pro: 15,
  }

  if (billingModel === 'yearly') {
    return planPrices[planChoice] * 10
  } else {
    return planPrices[planChoice]
  }
}

export function getAddOnsValue(
  chosenAddOns: chosenAddOnsProps | null,
  billingModel: string,
) {
  const addons: Addons = { total: 0 }

  if (chosenAddOns?.onlineService) {
    addons.onlineService = billingModel === 'monthly' ? 1 : 10
    addons.total += addons.onlineService
  }

  if (chosenAddOns?.largerStorage) {
    addons.largerStorage = billingModel === 'monthly' ? 2 : 20
    addons.total += addons.largerStorage
  }

  if (chosenAddOns?.customizableProfile) {
    addons.customizableProfile = billingModel === 'monthly' ? 2 : 20
    addons.total += addons.customizableProfile
  }

  return addons
}
