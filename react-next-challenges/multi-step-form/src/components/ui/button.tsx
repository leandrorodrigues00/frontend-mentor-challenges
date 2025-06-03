import { ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'max-w-[105px] w-full py-2 rounded-md hover:opacity-70 duration-300 self-end',
  ],
  variants: {
    variant: {
      primary: 'bg-marine-blue text-white justify-self-end',
      previous:
        'xs:mt-[70px] text-cool-gray font-medium p-1 hover:text-marine-blue',
      confirm: 'justify-self-end bg-purplish-blue px-4 text-white',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean
}

export function Button({ asChild, variant, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return <Component {...props} className={button({ variant, className })} />
}
