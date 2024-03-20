'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import {
  AddonsSchema,
  BillingModelSchema,
  PersonalInfoDataSchema,
  PlansSchema,
} from '@/lib/schema'

export async function handleCreatePersonalInfo(state: unknown, form: FormData) {
  const result = PersonalInfoDataSchema.safeParse({
    name: form.get('name'),
    email: form.get('email'),
    phone: form.get('phone'),
  })

  if (result.success) {
    const serializedPersonalInfo = JSON.stringify(result.data)

    cookies().set({
      name: 'personalInfo',
      value: serializedPersonalInfo,
      path: '/',
    })

    redirect('/select-plan')
  }

  if (result.error) {
    return { error: result.error.flatten().fieldErrors }
  }
}

export async function handleChoosePlan(state: unknown, form: FormData) {
  const result = PlansSchema.safeParse({
    planChoice: form.get('selectedPlan'),
  })

  if (result.success) {
    cookies().set({
      name: 'chosenPlan',
      value: result.data.planChoice,
      path: '/',
    })

    redirect('/add-ons')
  }

  if (result.error) {
    return { error: result.error.flatten().fieldErrors }
  }
}

export async function handleBillingModel(state: boolean) {
  const result = BillingModelSchema.safeParse({
    billingMode: state,
  })

  if (result.success) {
    const billingModelValue = result.data.billingMode ? 'yearly' : 'monthly'

    cookies().set({
      name: 'billingModel',
      value: billingModelValue,
      path: '/',
    })
  } else if (result.error) {
    return { error: result.error.flatten().fieldErrors }
  }
}

export async function handleAddOns(state: unknown, form: FormData) {
  const result = AddonsSchema.safeParse({
    onlineService: form.get('onlineService'),
    largerStorage: form.get('largerStorage'),
    customizableProfile: form.get('customizableProfile'),
  })

  if (result.success) {
    const serializedChosenAddOns = JSON.stringify(result.data)

    cookies().set({
      name: 'chosenAddOns',
      value: serializedChosenAddOns,
      path: '/',
    })

    redirect('/summary')
  }

  if (result.error) {
    return { error: result.error.flatten().fieldErrors }
  }
}
