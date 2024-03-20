import { z } from 'zod'

export const PersonalInfoDataSchema = z.object({
  name: z.string().min(1, 'The name is required'),
  email: z.string().email(),
  phone: z.string().regex(/^\d{7,}$/i, { message: 'At least 7 numbers' }),
})

const plans = ['pro', 'advanced', 'arcade'] as const

export const PlansSchema = z.object({
  planChoice: z.enum(plans),
})

export const BillingModelSchema = z.object({
  billingMode: z.boolean().default(false),
})

export const AddonsSchema = z.object({
  onlineService: z.preprocess((value) => value === 'on', z.boolean()),
  largerStorage: z.preprocess((value) => value === 'on', z.boolean()),
  customizableProfile: z.preprocess((value) => value === 'on', z.boolean()),
})

export type Addons = {
  onlineService?: number
  largerStorage?: number
  customizableProfile?: number
  total: number
}

export type chosenAddOnsProps = {
  onlineService: boolean
  largerStorage: boolean
  customizableProfile: boolean
}
