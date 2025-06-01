import { Metadata } from 'next'

import { ThankYouIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Thank You',
}

export default function ThankYouPage() {
  return (
    <div className="z-10 mt-[-355px] flex w-full max-w-[27.437rem] flex-col items-center justify-center gap-8 rounded-lg bg-white p-4 xs:mt-0 xs:p-0">
      <ThankYouIcon />
      <span className="text-4xl font-bold text-marine-blue">Thank you!</span>
      <p className="text-center text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  )
}
