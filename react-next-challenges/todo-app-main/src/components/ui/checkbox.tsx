'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { cn } from '@/lib/utils'
import { CheckIcon } from '@/components/icons'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'dark:border-dark-500 peer h-5 w-5  shrink-0 rounded-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-6 sm:w-6',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-check-gradient',
      )}
    >
      <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
