'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { tv, VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const labelVariants = tv({
  base: 'text-sm text-marine-blue font-medium flex items-center justify-between',
})

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
