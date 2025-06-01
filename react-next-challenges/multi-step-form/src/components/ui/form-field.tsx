import { HTMLAttributes } from 'react'

interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {}

export function FormField(props: FormFieldProps) {
  return <div className="flex flex-col gap-1" {...props} />
}
