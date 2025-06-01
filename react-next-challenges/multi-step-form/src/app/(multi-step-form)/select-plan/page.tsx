import { Metadata } from 'next'

import { SelectPlanForm } from '@/components/select-plan-form'

export const metadata: Metadata = {
  title: 'Select Plan',
}

export default function SelectPlanPage() {
  return (
    <div className="z-10 mt-[-115px] flex w-full max-w-[27.437rem] flex-col rounded-lg bg-white p-4 xs:mt-0 xs:p-0">
      <div className="mt-11">
        <h1 className="text-4xl font-bold leading-6 text-marine-blue">
          Select your plan
        </h1>
        <p className="mt-5 text-cool-gray">
          You have option of monthly or yearly billing.
        </p>
      </div>

      <SelectPlanForm />
    </div>
  )
}
