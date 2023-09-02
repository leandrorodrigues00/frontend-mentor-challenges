import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix({ className, ...props }: InputPrefixProps) {
  return <div className={cn(className)} {...props} />
}

type InputProps = ComponentProps<'input'>

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'flex-1 border-0 bg-transparent text-zinc-900 placeholder-zinc-500 outline-none dark:text-white dark:placeholder-white ',
        className,
      )}
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

export function InputRoot({ className, ...props }: InputRootProps) {
  return (
    <div
      className={cn(
        'dark:bg-dark-200 dark:border-dark-600 flex h-12 w-full items-center gap-3 rounded-lg border border-zinc-300 bg-white px-3 shadow-sm',
        className,
      )}
      {...props}
    />
  )
}
