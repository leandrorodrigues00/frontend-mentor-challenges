'use client'

import { Label } from '@radix-ui/react-label'
import { parseCookies } from 'nookies'

import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import { Input } from '@/components/ui/input'
import { SpinnerGap } from '@/components/icons'
import { handleCreatePersonalInfo } from '@/app/_actions'

import { useFormState, useFormStatus } from 'react-dom'

interface PersonalInfoProps {
  name: string
  email: string
  phone: string
}

export function PersonalInfoForm() {
  const [state, formAction] = useFormState(handleCreatePersonalInfo, null)

  const cookies = parseCookies()
  const serializedPersonalInfo = cookies.personalInfo

  let personalInfo: PersonalInfoProps | null = null

  if (serializedPersonalInfo) {
    personalInfo = JSON.parse(serializedPersonalInfo)
  }

  return (
    <form className="mt-11 grid flex-1 pb-8" action={formAction}>
      <div className="flex flex-col gap-7 ">
        <FormField>
          <div className="flex justify-between">
            <Label htmlFor="name">Name</Label>
            {state?.error?.name && (
              <span className="mt-1 text-sm font-medium text-strawberry-red">
                {state.error.name}
              </span>
            )}
          </div>
          <Input
            name="name"
            id="name"
            placeholder="e.g. John Doe"
            className={`${state?.error?.name && 'border-strawberry-red focus:ring-[0px]  focus:ring-strawberry-red'}`}
            defaultValue={personalInfo?.name || ''}
          />
        </FormField>

        <FormField>
          <div className="flex justify-between">
            <Label htmlFor="email">Email address</Label>
            {state?.error?.email && (
              <span className="mt-1 text-sm font-medium text-strawberry-red">
                {state.error.email}
              </span>
            )}
          </div>
          <Input
            name="email"
            id="email"
            placeholder="e.g johndoe@gmail.com"
            className={`${state?.error?.email && 'border-strawberry-red focus:ring-[0px]  focus:ring-strawberry-red'}`}
            defaultValue={personalInfo?.email || ''}
          />
        </FormField>

        <FormField>
          <div className="flex justify-between">
            <Label htmlFor="phone">Phone Number</Label>
            {state?.error?.phone && (
              <span className="mt-1 text-sm font-medium text-strawberry-red">
                {state.error.phone}
              </span>
            )}
          </div>
          <Input
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            className={`${state?.error?.phone && 'border-strawberry-red focus:ring-[0px]  focus:ring-strawberry-red'}`}
            defaultValue={personalInfo?.phone || ''}
          />
        </FormField>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex w-full justify-end self-end justify-self-end bg-white p-8 xs:relative xs:p-0">
        <SubmitButton />
      </div>
    </form>
  )
}

export function SubmitButton({ form }: { form?: string }) {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} type="submit" form={form}>
      {pending ? (
        <SpinnerGap className="mx-auto h-6 w-8 animate-spin  text-white" />
      ) : (
        'Next Step'
      )}
    </Button>
  )
}
