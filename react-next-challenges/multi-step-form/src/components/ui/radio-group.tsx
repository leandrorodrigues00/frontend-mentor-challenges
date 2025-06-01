'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@/lib/utils'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root className={cn(className)} {...props} ref={ref} />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item ref={ref} className={cn(className)} {...props}>
      {children}
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.RadioIndicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.RadioIndicator>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Indicator
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
})
RadioGroupIndicator.displayName = RadioGroupPrimitive.Indicator.displayName

export { RadioGroup, RadioGroupItem, RadioGroupIndicator }
