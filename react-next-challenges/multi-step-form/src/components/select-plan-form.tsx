'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { SubmitButton } from '@/components/personal-info-form'
import { RadioGroupPlans } from '@/components/radio-group-plans'
import { SwitchBillingModel } from '@/components/switch-billing-model'
import { handleChoosePlan } from '@/app/_actions'

import { useFormState } from 'react-dom'

export function SelectPlanForm() {
  const [state, formAction] = useFormState(handleChoosePlan, null)
  return (
    <form className="mt-11 grid flex-1 pb-8" action={formAction}>
      <RadioGroupPlans />

      {state?.error?.planChoice && (
        <span className="mt-1 text-sm font-medium text-strawberry-red">
          {state.error.planChoice}
        </span>
      )}

      <SwitchBillingModel />

      <div className="absolute bottom-0 left-0 right-0 flex w-full justify-between bg-white p-8 xs:relative xs:p-0">
        <Button variant="previous" asChild>
          <Link href={'/personal-info'}>Go Back</Link>
        </Button>
        <SubmitButton />
      </div>
    </form>
  )
}
