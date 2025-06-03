'use client'

import { parseCookies } from 'nookies'

import { Switch } from '@/components/ui/switch'
import { handleBillingModel } from '@/app/_actions'

export function SwitchBillingModel() {
  const cookies = parseCookies()
  const billingModel = cookies.billingModel
  const defaultChecked = billingModel === 'yearly'

  return (
    <div
      className="mt-9 flex w-full justify-center rounded-lg bg-pastel-blue bg-opacity-20 py-2"
      aria-label="View density"
      defaultValue="monthly"
    >
      <div className="flex items-center justify-center gap-6">
        <label className="font-medium text-cool-gray" htmlFor="monthly">
          Monthly
        </label>

        <div className="flex h-[20px] w-[45px] cursor-default rounded-full bg-marine-blue outline-none">
          <Switch
            id="billingModel"
            onCheckedChange={async (checked: boolean) => {
              await handleBillingModel(checked)
            }}
            defaultChecked={defaultChecked}
            aria-label="billing model"
          />
        </div>

        <label className="font-medium text-cool-gray" htmlFor="yearly">
          Yearly
        </label>
      </div>
    </div>
  )
}
