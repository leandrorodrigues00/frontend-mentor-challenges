import { Metadata } from 'next'
import { cookies } from 'next/headers'
import Link from 'next/link'

import { chosenAddOnsProps } from '@/lib/schema'
import { formatPrice, getAddOnsValue, getPlanValue } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Summary',
}

export default function SummaryPage() {
  const cookieStore = cookies()
  const billingModel = cookieStore.get('billingModel')?.value
  const planChoice = cookieStore.get('chosenPlan')?.value
  const serializedChosenAddOns = cookieStore.get('chosenAddOns')?.value

  if (!planChoice || !billingModel) throw new Error('Error retrieving choices')

  const planValue = getPlanValue(
    planChoice as 'arcade' | 'advanced' | 'pro',
    billingModel,
  )

  let chosenAddOns: chosenAddOnsProps | null = null

  if (serializedChosenAddOns) {
    chosenAddOns = JSON.parse(serializedChosenAddOns)
  }

  const addOnsValue = getAddOnsValue(chosenAddOns, billingModel)

  return (
    <div className="z-10 mt-[-233px] flex w-full  max-w-[27.437rem] flex-col rounded-lg bg-white p-4 xs:mt-0 xs:p-0">
      <div className="mt-11">
        <h1 className="text-4xl font-bold leading-6 text-marine-blue">
          Finishing up
        </h1>
        <p className="mt-5 text-cool-gray">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="mt-11 grid flex-1 pb-8">
        <div className="self-baseline rounded-lg bg-magnolia p-5 pb-2 ">
          <div className="flex w-full items-center justify-between border-b pb-5">
            <div>
              <p className="text-lg font-medium capitalize text-marine-blue">
                {planChoice} ({billingModel})
              </p>
              <Link
                className="text-cool-gray underline hover:text-purplish-blue"
                href="/select-plan"
              >
                Change
              </Link>
            </div>

            <span className="font-bold text-marine-blue">
              {formatPrice(planValue, billingModel)}
            </span>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            {chosenAddOns?.onlineService && (
              <div className="flex justify-between  ">
                <p className="text-cool-gray">Online service</p>
                <span className="font-medium text-marine-blue">
                  + {formatPrice(addOnsValue.onlineService, billingModel)}
                </span>
              </div>
            )}

            {chosenAddOns?.largerStorage && (
              <div className="flex justify-between">
                <p className="text-cool-gray ">Larger storage</p>
                <span className="font-medium text-marine-blue">
                  + {formatPrice(addOnsValue.largerStorage, billingModel)}
                </span>
              </div>
            )}

            {chosenAddOns?.customizableProfile && (
              <div className="flex justify-between">
                <p className="text-cool-gray ">Customizable Profile</p>
                <span className="font-medium text-marine-blue">
                  + {formatPrice(addOnsValue.customizableProfile, billingModel)}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-3 flex justify-between px-5">
          <p className="text-cool-gray ">Total(per month)</p>
          <span className="text-xl font-medium text-purplish-blue">
            +{formatPrice(planValue + addOnsValue.total, billingModel)}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex w-full justify-between bg-white p-8 xs:relative xs:p-0">
          <Button variant="previous" asChild>
            <Link href={'/add-ons'}>Go Back</Link>
          </Button>

          <Button variant="confirm" asChild>
            <Link href={'/thank-you'}>Confirm</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
