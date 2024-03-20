'use client'

import Link from 'next/link'
import { parseCookies } from 'nookies'

import { dataCheckboxAddons } from '@/config/add-ons'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { SubmitButton } from '@/components/personal-info-form'
import { handleAddOns } from '@/app/_actions'

import { useFormState } from 'react-dom'

export function AddOnsForm() {
  const [state, formAction] = useFormState(handleAddOns, null)
  const cookies = parseCookies()
  const billingModel = cookies.billingModel

  return (
    <div className="mt-11 grid flex-1 pb-8">
      <form
        id="addOnsForm"
        className="flex flex-col gap-[15px]"
        action={formAction}
      >
        {dataCheckboxAddons.map((data, index) => (
          <div
            key={index}
            className="flex items-center gap-6 rounded-lg border border-light-gray px-6 py-4 hover:border-purplish-blue [&:has(button[data-state='checked'])]:border-purplish-blue [&:has(button[data-state='checked'])]:bg-pastel-blue [&:has(button[data-state='checked'])]:bg-opacity-20"
          >
            <Checkbox
              name={
                data.id as
                  | 'onlineService'
                  | 'largerStorage'
                  | 'customizableProfile'
              }
              id={
                data.id as
                  | 'onlineService'
                  | 'largerStorage'
                  | 'customizableProfile'
              }
              defaultChecked={false}
              onCheckedChange={(prevState) => !prevState}
              aria-label={
                data.id as
                  | 'onlineService'
                  | 'largerStorage'
                  | 'customizableProfile'
              }
            />

            <div className="flex-1">
              <label
                htmlFor={data.id}
                className="font-medium text-marine-blue hover:cursor-pointer"
              >
                {data.addonName}
              </label>
              <p className="leading-5 text-cool-gray">
                {data.addonDescription}
              </p>
            </div>

            <span className="text-purplish-blue">
              {billingModel === 'monthly'
                ? data.addonPriceMonthly
                : data.addonPriceYearly}
            </span>
          </div>
        ))}
      </form>

      <div className="absolute bottom-0  left-0 right-0 flex w-full justify-between bg-white p-8 xs:relative xs:p-0 ">
        <Button variant="previous" asChild>
          <Link href={'/select-plan'}>Go Back</Link>
        </Button>
        <SubmitButton form="addOnsForm" />
      </div>
    </div>
  )
}
