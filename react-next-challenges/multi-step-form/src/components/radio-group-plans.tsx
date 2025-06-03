'use client'

import { parseCookies } from 'nookies'

import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from '@/components/ui/radio-group'
import { AdvancedPlan, ArcadePlan, ProPlan } from '@/components/icons'

export function RadioGroupPlans() {
  const cookies = parseCookies()
  const billingModel = cookies.billingModel || 'monthly'
  const chosenPlan = cookies.chosenPlan || 'arcade'

  return (
    <RadioGroup
      className="flex flex-col gap-4 xs:flex-row"
      defaultValue={chosenPlan}
      name="selectedPlan"
    >
      <RadioGroupItem
        className="relative flex w-full max-w-full gap-5 rounded-lg px-4 py-5 ring-1 ring-inset ring-light-gray duration-300 hover:ring-purplish-blue xs:block xs:max-w-[8.75rem] xs:gap-0"
        value="arcade"
      >
        <ArcadePlan />

        <div className="text-left xs:mt-11">
          <p className="font-medium text-marine-blue">Arcade</p>
          <span className="text-cool-gray">
            {billingModel === 'monthly' ? '$9/mo' : '$90/yr'}
          </span>
          {billingModel === 'yearly' && (
            <p className="mt-1 text-sm text-marine-blue">2 months free</p>
          )}
        </div>

        <RadioGroupIndicator className="absolute left-0 top-0 h-full w-full rounded-lg border border-purplish-blue bg-pastel-blue bg-opacity-20" />
      </RadioGroupItem>

      <RadioGroupItem
        className="relative flex w-full max-w-full gap-5 rounded-lg px-4 py-5 ring-1 ring-inset ring-light-gray duration-300 hover:ring-purplish-blue xs:block xs:max-w-[8.75rem] xs:gap-0"
        value="advanced"
      >
        <AdvancedPlan />

        <div className="text-left xs:mt-11">
          <p className="font-medium text-marine-blue">Advanced</p>
          <span className="text-cool-gray">
            {billingModel === 'monthly' ? '$12/mo' : '$120/yr'}
          </span>
          {billingModel === 'yearly' && (
            <p className="mt-1 text-sm text-marine-blue">2 months free</p>
          )}
        </div>
        <RadioGroupIndicator className="absolute left-0 top-0 h-full w-full rounded-lg border border-purplish-blue bg-pastel-blue bg-opacity-20" />
      </RadioGroupItem>

      <RadioGroupItem
        className="relative flex w-full max-w-full gap-5 rounded-lg px-4 py-5 ring-1 ring-inset ring-light-gray duration-300 hover:ring-purplish-blue xs:block xs:max-w-[8.75rem] xs:gap-0"
        value="pro"
      >
        <ProPlan />

        <div className="text-left xs:mt-11">
          <p className="font-medium text-marine-blue">Pro</p>
          <span className="text-cool-gray">
            {billingModel === 'monthly' ? '$15/mo' : '$150/yr'}
          </span>
          {billingModel === 'yearly' && (
            <p className="mt-1 text-sm text-marine-blue">2 months free</p>
          )}
        </div>
        <RadioGroupIndicator className="absolute left-0 top-0 h-full w-full rounded-lg border border-purplish-blue bg-pastel-blue bg-opacity-20" />
      </RadioGroupItem>
    </RadioGroup>
  )
}
